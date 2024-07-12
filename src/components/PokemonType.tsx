import React, {  } from 'react';
import { Chip, Text } from 'react-native-paper';
import { lightStyle } from '../styles/LightStyle';

interface PokemonTypeProps {
    text: string;
    color: string;
    endpoint: string;
    selectedEndpoint: string;
    changeEndpoint: (endpoint: string) => void;
}

export const PokemonType: React.FC<PokemonTypeProps> = ({
    text,
    color,
    endpoint,
    selectedEndpoint,
    changeEndpoint,
}) => {

    const isSelected = selectedEndpoint === endpoint;

    return (
        <Chip
            style={[
                lightStyle.pokemonType,
                {
                    backgroundColor: color,
                    opacity: isSelected ? 1 : 0.5,
                },
            ]}
            onPress={() => {
                changeEndpoint && changeEndpoint(endpoint);
            }}
        >
            <Text style={{ color: 'white' }}>
                {text}
            </Text>
        </Chip>
    );
}