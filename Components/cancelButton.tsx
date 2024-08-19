import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface CancelButtonProps {
    title: string;
}

const CancelButton = ({ title }: CancelButtonProps) => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    );
};

export default CancelButton;

const styles = StyleSheet.create({
    buttonContainer: {
        // Add styles here
        marginTop: 40,
        marginLeft: 20,
        borderColor: '#208220',
        borderWidth: 1,
        borderRadius: 5,
        width: 85,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        // Add styles here
        color: '#208220',
        fontWeight: "700",
        fontSize: 15,
    },
});
