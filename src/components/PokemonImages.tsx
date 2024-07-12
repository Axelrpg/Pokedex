import React from 'react';
import { Image, View } from 'react-native';
import { lightStyle } from '../styles/LightStyle';
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
                    style={lightStyle.pokemonDetailImage}
                    resizeMode='cover'
                />

                <Image
                    source={{ uri: pokemon?.sprites.back_default }}
                    style={lightStyle.pokemonDetailImage}
                    resizeMode='cover'
                />
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
                <Image
                    source={{ uri: pokemon?.sprites.front_shiny }}
                    style={lightStyle.pokemonDetailImage}
                    resizeMode='cover'
                />

                <Image
                    source={{ uri: pokemon?.sprites.back_shiny }}
                    style={lightStyle.pokemonDetailImage}
                    resizeMode='cover'
                />
            </View>
        </View>
    )
}