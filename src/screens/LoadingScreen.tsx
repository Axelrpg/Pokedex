import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { style } from '../styles/Style';

interface LoadingScreenProps {
    loading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
    return (
        <ActivityIndicator
            animating={true}
            color="red"
            size="large"
            style={style.activityIndicator}
        />
    );
}