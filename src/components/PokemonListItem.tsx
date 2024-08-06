import React, { useEffect, useState } from 'react';
import { Appearance, Image, View } from 'react-native';
import { api } from '../api/axios';
import { SinglePokemonInterface } from '../interfaces/SinglePokemon';
import { Surface, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import { darkColors } from '../colors/DarkColors';
import { style } from '../styles/Style';
import { lightColors } from '../colors/lightColors';

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Pokédex'>;

interface PokemonListItemProps {
  url: string;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ url }) => {

  const [pokemon, setPokemon] = useState<SinglePokemonInterface | null>(null);

  const navigation = useNavigation<HomeScreenNavigationProps>();

  const currentStyle = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

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
            style={style.pokemonListItemSurface}
            elevation={2}
          >
            <TouchableRipple
              style={style.pokemonListItemTouchableRipple}
              onPress={() => {
                navigation.navigate('Pokémon Detail', { pokemon });
              }}
              rippleColor={currentStyle === 'dark'
                ? darkColors.rippleColor.color
                : lightColors.rippleColor.color
              }
            >
              <View>
                <Image
                  source={{ uri: pokemon.sprites.front_default }}
                  style={style.pokemonListItemImage}
                />
                <Text style={style.pokemonListItemText}>
                  {capitalizeFirstLetter(pokemon.name)}
                </Text>
              </View>
            </TouchableRipple>
          </Surface>
        ) : (
          <Surface
            style={style.pokemonListItemSurface}
            elevation={2}
          >
            <Text style={style.pokemonListItemText}>
              Loading...
            </Text>
          </Surface>
        )
      }
    </View>
  );
}