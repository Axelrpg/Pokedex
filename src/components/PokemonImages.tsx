import React from 'react';
import { Image, View } from 'react-native';
import { style } from '../styles/Style';
import { SinglePokemonInterface } from '../interfaces/SinglePokemon';

interface PokemonImagesProps {
    pokemon: SinglePokemonInterface | null;
}

export const PokemonImages: React.FC<PokemonImagesProps> = ({ pokemon }) => {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
            }}>
                <Image
                    source={{ uri: pokemon?.sprites.front_default }}
                    style={style.pokemonDetailImage}
                    resizeMode='cover'
                />

                <Image
                    source={{ uri: pokemon?.sprites.back_default }}
                    style={style.pokemonDetailImage}
                    resizeMode='cover'
                />
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
                <Image
                    source={{ uri: pokemon?.sprites.front_shiny }}
                    style={style.pokemonDetailImage}
                    resizeMode='cover'
                />

                <Image
                    source={{ uri: pokemon?.sprites.back_shiny }}
                    style={style.pokemonDetailImage}
                    resizeMode='cover'
                />
            </View>
        </View>
    )
}