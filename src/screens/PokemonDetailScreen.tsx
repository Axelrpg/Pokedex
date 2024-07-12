import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SinglePokemonInterface } from '../interfaces/SinglePokemon';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Navigator';
import { ActivityIndicator, Text } from 'react-native-paper';
import { PokemonCharacteristic } from '../components/PokemonCharacteristic';
import { lightStyle } from '../styles/LightStyle';
import { PokemonImages } from '../components/PokemonImages';

type PokemonDetailRouteProps = RouteProp<RootStackParamList, 'Pokémon Detail'>

type PokemonDetailProps = {
    route: PokemonDetailRouteProps;
}

export const PokemonDetailScreen: React.FC<PokemonDetailProps> = () => {

    const { params } = useRoute<PokemonDetailRouteProps>();
    const { pokemon } = params;

    const capitalizeFirstLetter = (string: string | undefined) => {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    return (
        <ScrollView contentContainerStyle={lightStyle.scrollView}>

            <Text style={lightStyle.pokemonDetailTitle}>
                {capitalizeFirstLetter(pokemon?.name)}
            </Text>

            <PokemonImages pokemon={pokemon} />

            <PokemonCharacteristic
                value={pokemon?.id.toString()}
                unit={''}
                text={'Pokédex ID'}
            />

            <PokemonCharacteristic
                value={pokemon?.weight.toString()}
                unit={'hg'}
                text={'Weight'}
            />

            <PokemonCharacteristic
                value={pokemon?.height.toString()}
                unit={'dm'}
                text={'Height'}
            />

            <PokemonCharacteristic
                value={pokemon?.types.map((type) => capitalizeFirstLetter(type.type.name)).join('/')}
                unit={''}
                text={'Types'}
            />

        </ScrollView>
    );
}