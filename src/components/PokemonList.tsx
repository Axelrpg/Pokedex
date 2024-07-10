import React from 'react';
import { FlatList, View } from 'react-native';
import { PokemonListItem } from './PokemonListItem';
import { AllPokemonInterface } from '../interfaces/AllPokemon';

interface PokemonListProps {
    pokemon: AllPokemonInterface[] | null;
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
    return (
        <FlatList
            data={pokemon}
            renderItem={({ item }) => {
                return (
                    <PokemonListItem url={item.url} />
                )
            }}
            keyExtractor={(item) => item.name}
            numColumns={2}
            contentContainerStyle={{
                alignItems: 'center',
            }}
            showsVerticalScrollIndicator={true}
        />
    );
}