import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { api } from '../api/axios';
import { SinglePokemonInterface } from '../interfaces/SinglePokemon';
import { ActivityIndicator, Card, Surface, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import { lightStyle } from '../styles/LightStyle';

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Pokédex'>;

interface PokemonListItemProps {
  url: string;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ url }) => {

  const [pokemon, setPokemon] = useState<SinglePokemonInterface | null>(null);

  const navigation = useNavigation<HomeScreenNavigationProps>();

  const fetchPokemon = async () => {
    api.get<SinglePokemonInterface>(url)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View style={{
      alignItems: 'center',
    }}>
      {
        pokemon ? (
          <Surface
            style={lightStyle.pokemonListItemSurface}
            elevation={2}
          >
            <TouchableRipple
              style={lightStyle.pokemonListItemTouchableRipple}
              onPress={() => {
                navigation.navigate('Pokémon Detail', { pokemon });
              }}
              rippleColor={'rgba(0, 0, 0, .32)'}
            >
              <View>
                <Image
                  source={{ uri: pokemon.sprites.front_default }}
                  style={lightStyle.pokemonListItemImage}
                />
                <Text style={lightStyle.pokemonListItemText}>
                  {capitalizeFirstLetter(pokemon.name)}
                </Text>
              </View>
            </TouchableRipple>
          </Surface>
        ) : (
          <Surface
            style={lightStyle.pokemonListItemSurface}
            elevation={2}
          >
            <Text style={lightStyle.pokemonListItemText}>
              Loading...
            </Text>
          </Surface>
        )
      }
    </View>
  );
}