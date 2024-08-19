import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import re from '@/assets/images/Ra.png'
import Loan from '@/assets/images/Loan.png'
import uInvioice from '@/assets/images/u_invoice.png'
import Feather from '@expo/vector-icons/Feather';

const FirstTimeSevice = () => {
    return (
        <View style={styles.iconsContainer}>
            <View >
                <View style={styles.firstIcon}>
                    <Feather name="send" size={24} color="black" />
                </View>
                <Text style={styles.sendText}>Send Money</Text>
            </View>
            <View>
                <View style={styles.secondIcon}>
                    <Image source={Loan} />
                </View>
                <Text style={styles.sendTwoText}>Loans</Text>
            </View>
            <View>
                <View style={styles.thirdIcon}>
                    <Image source={uInvioice} />
                </View>
                <Text style={styles.sendThreeText}>Pay Bills</Text>
            </View>
            <View>
                <View style={styles.fourIcon}>
                    <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
                </View>
                <Text style={styles.sendFourText}>Airtime</Text>
            </View>
        </View>
    )
}

export default FirstTimeSevice


const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    firstIcon: {
        backgroundColor: '#D6FAD1',
        padding: 25,
        borderRadius: 15,
    },
    secondIcon: {
        backgroundColor: '#FFF2C9',
        padding: 25,
        borderRadius: 15,
    },
    thirdIcon: {
        backgroundColor: '#EFC7B6',
        padding: 25,
        borderRadius: 15,
    },
    fourIcon: {
        backgroundColor: '#DDEDF4',
        padding: 25,
        borderRadius: 15,
    },
    sendText:{
       marginTop: 10,
    },
    sendTwoText:{
        marginTop: 10,
        marginLeft: 20,
     },
     sendThreeText:{
        marginTop: 10,
        marginLeft: 10,
     },
     sendFourText:{
        marginTop: 10,
        marginLeft: 17,
     },
})