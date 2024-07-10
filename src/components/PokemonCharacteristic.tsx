import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

interface PokemonCharacteristicProps {
    value: number | undefined;
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
            <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                {text}:
            </Text>

            <Text style={{
                color: 'black',
                fontSize: 16,
                textAlign: 'center',
            }}>
                {value} {unit}
            </Text>
        </View>
    )
}