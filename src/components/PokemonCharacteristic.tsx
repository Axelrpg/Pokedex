import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { style } from '../styles/Style';

interface PokemonCharacteristicProps {
    value: string | undefined;
    unit: string;
    text: string;
}

export const PokemonCharacteristic: React.FC<PokemonCharacteristicProps> = ({
    value,
    unit,
    text,
}) => {
    return (
        <View>
            <Text style={[
                style.pokemonDetailSupportText,
                { fontWeight: 'bold' },
            ]}>
                {text}:
            </Text>

            <Text style={style.pokemonDetailSupportText}>
                {value} {unit}
            </Text>
        </View>
    )
}