import React, { useEffect } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { api } from '../api/axios';
import { AllPokemonInterface, AllPokemonResponseInterface } from '../interfaces/AllPokemon';
import { Appearance, View } from 'react-native';
import { PokemonList } from '../components/PokemonList';
import { SingleTypeInterface } from '../interfaces/SingleType';
import { PokemonSections } from '../components/PokemonSections';
import { style } from '../styles/Style';
import { Appbar, Searchbar } from 'react-native-paper';
import { darkColors } from '../colors/DarkColors';
import { lightColors } from '../colors/lightColors';

export const PokedexScreen = () => {

    const [filteredPokemon, setFilteredPokemon] = React.useState<AllPokemonInterface[] | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [pokemon, setPokemon] = React.useState<AllPokemonInterface[] | null>(null);
    const [selectedEndpoint, setSelectedEndpoint] = React.useState('All' as string);
    const [searchQuery, setSearchQuery] = React.useState('');

    const currentStyle = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

    const fetchPokemon = async () => {
        api.get<AllPokemonResponseInterface>('pokemon?limit=1025&offset=0')
            .then((response) => {
                setPokemon(response.data.results);
                setFilteredPokemon(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const filterPokemon = () => {
        if (searchQuery === '') {
            setFilteredPokemon(pokemon);
        } else {
            const filtered = pokemon?.filter((p) => p.name.includes(searchQuery.toLowerCase()));
            setFilteredPokemon(filtered!!);
        }
    };

    useEffect(() => {
        filterPokemon();
    }, [searchQuery]);

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
                    setFilteredPokemon(response.data.pokemon.map((p) => p.pokemon));
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <View style={style.pokedexView}>

            <Appbar.Header
                style={style.appbarHeader}
            >
                <Appbar.Content title="Pokedex" />
            </Appbar.Header>

            <Searchbar
                placeholder="Search"
                value={searchQuery}
                rippleColor={
                    currentStyle === 'dark'
                    ? darkColors.rippleColor.color
                    : lightColors.rippleColor.color
                }
                style={style.pokedexSearchbar}
                onChangeText={(query) => {
                    setSearchQuery(query)
                }}
                onClearIconPress={() => {
                    setSearchQuery('');
                    filterPokemon();
                }}
            />

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
                        : <PokemonList pokemon={filteredPokemon} />
                }
            </View>
        </View>
    );
};