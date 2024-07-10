import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { api } from '../api/axios';
import { SinglePokemonInterface } from '../interfaces/SinglePokemon';
import { ActivityIndicator, Card, Surface, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

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
            style={{
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: 10,
              height: 150,
              justifyContent: 'center',
              margin: 5,
              overflow: 'hidden',
              width: 150,
            }}
            elevation={2}
          >
            <TouchableRipple
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                padding: 10,
                width: '100%',
              }}
              onPress={() => {
                navigation.navigate('Pokémon Detail', { pokemon });
              }}
              rippleColor={'rgba(0, 0, 0, .32)'}
            >
              <View>
                <Image
                  source={{ uri: pokemon.sprites.front_default }}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                  }}
                />
                <Text style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                  {capitalizeFirstLetter(pokemon.name)}
                </Text>
              </View>
            </TouchableRipple>
          </Surface>
        ) : (
          <Surface
            style={{
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: 10,
              height: 150,
              justifyContent: 'center',
              margin: 5,
              overflow: 'hidden',
              width: 150,
            }}
            elevation={2}
          >
            <Text style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Loading...
            </Text>
          </Surface>
        )
      }
    </View>
  );
}