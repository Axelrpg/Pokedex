import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { lightStyle } from '../styles/LightStyle';

interface LoadingScreenProps {
    loading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
    return (
        <ActivityIndicator
            animating={true}
            color="red"
            size="large"
            style={lightStyle.activityIndicator}
        />
    );
}