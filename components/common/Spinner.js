import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
    const { spinnerStyle } = styles;
    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
