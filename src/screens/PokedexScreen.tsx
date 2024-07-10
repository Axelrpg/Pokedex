import React, { useEffect } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { api } from '../api/axios';
import { AllPokemonInterface, AllPokemonResponseInterface } from '../interfaces/AllPokemon';
import { View } from 'react-native';
import { PokemonList } from '../components/PokemonList';

export const PokedexScreen = () => {

    const [loading, setLoading] = React.useState(true);
    const [pokemon, setPokemon] = React.useState<AllPokemonInterface[] | null>(null);

    const fetchPokemon = async () => {
        api.get<AllPokemonResponseInterface>('pokemon?limit=1025&offset=0')
            .then((response) => {
                setPokemon(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {
                loading
                    ? <LoadingScreen loading={loading} />
                    : <PokemonList pokemon={pokemon} />
            }
        </View>
    );
};