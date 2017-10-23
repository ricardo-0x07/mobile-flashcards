// Imports
import React from 'react';
import { View } from 'react-native';

const Card = ({ children, style }) => {
    return (
        <View style={[styles.containerStyle, style]}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
export { Card };

