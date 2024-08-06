import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SinglePokemonInterface } from '../interfaces/SinglePokemon';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Navigator';
import { ActivityIndicator, Appbar, Text } from 'react-native-paper';
import { PokemonCharacteristic } from '../components/PokemonCharacteristic';
import { style } from '../styles/Style';
import { PokemonImages } from '../components/PokemonImages';

type PokemonDetailRouteProps = RouteProp<RootStackParamList, 'Pokémon Detail'>

type PokemonDetailProps = {
    route: PokemonDetailRouteProps;
}

export const PokemonDetailScreen: React.FC<PokemonDetailProps> = () => {

    const { params } = useRoute<PokemonDetailRouteProps>();
    const { pokemon } = params;

    const navigation = useNavigation();

    const capitalizeFirstLetter = (string: string | undefined) => {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: style.pokedexView.backgroundColor,
        }}>

            <Appbar.Header
                style={{
                    backgroundColor: style.appbarHeader.backgroundColor,
                }}
            >
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content title={capitalizeFirstLetter(pokemon?.name)} />
            </Appbar.Header>

            <ScrollView
                contentContainerStyle={style.scrollView}
            >

                {/* <Text style={style.pokemonDetailTitle}>
                {capitalizeFirstLetter(pokemon?.name)}
            </Text> */}

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
        </View>
    );
}