import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

interface LoadingScreenProps {
    loading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
    return (
        <ActivityIndicator
            animating={true}
            color="red"
            size="large"
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
    );
}