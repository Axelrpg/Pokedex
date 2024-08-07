import React from 'react';
import { ScrollView, View } from 'react-native';
import { style } from '../styles/Style';
import { PokemonType } from './PokemonType';

interface PokemonTypeSectionProps {
    selectedEndpoint: string;
    changeEndpoint: (endpoint: string) => void;
}

export const PokemonSections: React.FC<PokemonTypeSectionProps> = ({
    selectedEndpoint,
    changeEndpoint
}) => {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={style.pokemonTypeScrollView}
            >
                <PokemonType
                    text="All"
                    color="#000000"
                    endpoint='All'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text="Normal"
                    color="#c4c1b7"
                    endpoint='1'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Fighting'
                    color='#7c331b'
                    endpoint='2'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Flying'
                    color='#92a5f0'
                    endpoint='3'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Poison'
                    color='#974896'
                    endpoint='4'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Ground'
                    color='#d2b357'
                    endpoint='5'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Rock'
                    color='#b9a054'
                    endpoint='6'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Bug'
                    color='#a3b31c'
                    endpoint='7'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Ghost'
                    color='#5e5fae'
                    endpoint='8'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Steel'
                    color='#aeaebe'
                    endpoint='9'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Fire'
                    color='#ef430e'
                    endpoint='10'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Water'
                    color='#369afd'
                    endpoint='11'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Grass'
                    color='#75c438'
                    endpoint='12'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Electric'
                    color='#f4d23d'
                    endpoint='13'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Psychic'
                    color='#f9467b'
                    endpoint='14'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Ice'
                    color='#9ad6df'
                    endpoint='15'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Dragon'
                    color='#6a7fba'
                    endpoint='16'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Dark'
                    color='#5a5366'
                    endpoint='17'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
                <PokemonType
                    text='Fairy'
                    color='#f9a1f2'
                    endpoint='18'
                    selectedEndpoint={selectedEndpoint}
                    changeEndpoint={changeEndpoint}
                />
            </ScrollView>
        </View>
    );
}