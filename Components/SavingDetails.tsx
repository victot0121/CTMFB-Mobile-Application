import { View, Text, Image, StyleSheet, Alert, Switch, } from 'react-native'
import React, { useState } from 'react'
import Mask from '@/assets/images/Mask.png'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as Clipboard from 'expo-clipboard';

const SavingDetails = () => {

    const balance = '102,238.71';
    const accountNumber = '2040011238';
    const [showBalance, setShowBalance] = useState(true);

    const handleCopyAccountNumber = () => {
        Clipboard.setString(accountNumber);
        Alert.alert('Copied', 'Account number copied to clipboard.');
    };

    const toggleBalanceVisibility = () => {
        setShowBalance(previousState => !previousState);
    };

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.textOne}>Savings Account Balance</Text>
                <Text style={styles.textTwo}>
                    {showBalance ? `NGN ${balance}` : '*******'}
                </Text>
                <View style={styles.contain}>
                    <Text style={styles.textThree}>Adewole Temitope</Text>
                    <View style={styles.containTwo}>
                        <Text style={styles.textFour}>
                            {accountNumber}
                        </Text>
                        <FontAwesome6 style={styles.iconCopy} name="copy" size={14} color="white" onPress={handleCopyAccountNumber} />
                        <View style={styles.switch}>
                            <Text style={styles.textOneswitch}>{showBalance ? 'Show Balance' : 'Hide Balance'}</Text>
                            <Switch
                                trackColor={{ false: '#333333', true: '#333333' }}
                                thumbColor={showBalance ? '#B7B7B7' : '#B7B7B7'}
                                ios_backgroundColor="#333333"
                                onValueChange={toggleBalanceVisibility}
                                value={showBalance}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.imageContiner}>
                <Image source={Mask} style={styles.image} />
            </View>
        </View>
    )
}

export default SavingDetails

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        position: 'relative',
        padding: 20,
        color: '#fff',
        marginRight: 15,
    },
    imageContiner: {
        marginRight: 330,
        position: 'absolute',
        top: -9,
        right: 47,
        zIndex: -1,
    },
    image: {
        height: 230,
        width: 370,
    },
    textOne: {
        color: '#fff',
        fontWeight: "200",
    },
    textOneswitch: {
        color: '#fff',
        fontWeight: "100",
        marginTop: 13,
    },
    textTwo: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 27,
        marginTop: 5,
    },
    textThree: {
        color: '#fff',
        fontWeight: '300',
        fontSize: 13,
        marginTop: 5,
    },
    textFour: {
        color: '#fff',
        fontWeight: '300',
        fontSize: 11,
        marginTop: 12,
    },
    contain: {
        marginTop: 20,
    },
    containTwo: {
        flexDirection: 'row',
    },
    iconCopy: {
        marginTop: 12,
        marginLeft: 8,
    },
    switch: {
        marginLeft: 100,
        flexDirection: 'row',
    },
});
