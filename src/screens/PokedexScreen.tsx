import React, { useEffect } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { api } from '../api/axios';
import { AllPokemonInterface, AllPokemonResponseInterface } from '../interfaces/AllPokemon';
import { View } from 'react-native';
import { PokemonList } from '../components/PokemonList';
import { SingleTypeInterface } from '../interfaces/SingleType';
import { PokemonSections } from '../components/PokemonSections';

export const PokedexScreen = () => {

    const [loading, setLoading] = React.useState(true);
    const [pokemon, setPokemon] = React.useState<AllPokemonInterface[] | null>(null);
    const [selectedEndpoint, setSelectedEndpoint] = React.useState('All' as string);

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

    const changeEndpoint = (type: string) => {
        setLoading(true);

        setSelectedEndpoint(type);

        if (type === 'All') {
            fetchPokemon();
        } else {
            api.get<SingleTypeInterface>(`type/${type}`)
                .then((response) => {
                    setPokemon(response.data.pokemon.map((p) => p.pokemon));
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <PokemonSections
                selectedEndpoint={selectedEndpoint}
                changeEndpoint={changeEndpoint}
            />
            <View style={{
                flex: 1,
            }}>
                {
                    loading
                        ? <LoadingScreen loading={loading} />
                        : <PokemonList pokemon={pokemon} />
                }
            </View>
        </View>
    );
};