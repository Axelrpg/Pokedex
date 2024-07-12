import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { lightStyle } from '../styles/LightStyle';

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
                lightStyle.pokemonDetailSupportText,
                { fontWeight: 'bold' },
            ]}>
                {text}:
            </Text>

            <Text style={lightStyle.pokemonDetailSupportText}>
                {value} {unit}
            </Text>
        </View>
    )
}