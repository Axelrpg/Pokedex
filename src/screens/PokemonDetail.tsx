import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SinglePokemonInterface } from '../interfaces/SinglePokemon';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Navigator';
import { Text } from 'react-native-paper';
import { PokemonCharacteristic } from '../components/PokemonCharacteristic';

type PokemonDetailRouteProps = RouteProp<RootStackParamList, 'Pokémon Detail'>

type PokemonDetailProps = {
    route: PokemonDetailRouteProps;
}

export const PokemonDetail: React.FC<PokemonDetailProps> = () => {

    const { params } = useRoute<PokemonDetailRouteProps>();
    const { pokemon } = params;

    const capitalizeFirstLetter = (string: string | undefined) => {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    return (
        <ScrollView contentContainerStyle={{
            marginVertical: 20,
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Text style={{
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                {capitalizeFirstLetter(pokemon?.name)}
            </Text>

            <View style={{
                flexDirection: 'row',
            }}>
                <Image
                    source={{ uri: pokemon?.sprites.front_default }}
                    style={{
                        width: 175,
                        height: 175,
                        alignSelf: 'center',
                    }}
                    resizeMode='cover'
                />

                <Image
                    source={{ uri: pokemon?.sprites.back_default }}
                    style={{
                        width: 175,
                        height: 175,
                        alignSelf: 'center',
                    }}
                    resizeMode='cover'
                />
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
                <Image
                    source={{ uri: pokemon?.sprites.front_shiny }}
                    style={{
                        width: 175,
                        height: 175,
                        alignSelf: 'center',
                    }}
                    resizeMode='cover'
                />

                <Image
                    source={{ uri: pokemon?.sprites.back_shiny }}
                    style={{
                        width: 175,
                        height: 175,
                        alignSelf: 'center',
                    }}
                    resizeMode='cover'
                />
            </View>

            <PokemonCharacteristic
                value={pokemon?.id}
                unit={''}
                text={'Pokédex ID'}
            />

            <PokemonCharacteristic
                value={pokemon?.weight}
                unit={'hg'}
                text={'Weight'}
            />

            <PokemonCharacteristic
                value={pokemon?.height}
                unit={'dm'}
                text={'Height'}
            />

            <View>
                <Text style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Types:
                </Text>

                <Text style={{
                    color: 'black',
                    fontSize: 16,
                    textAlign: 'center',
                }}>
                    {pokemon?.types.map((type) => capitalizeFirstLetter(type.type.name)).join('/')}
                </Text>
            </View>

        </ScrollView>
    );
}