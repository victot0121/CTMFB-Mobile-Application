import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FirstTimeSevice from './FirstTimeSevice'
import SecondTimeSevice from './SecondTimeSevice'

const ServicesSection = () => {
    const [firstTime, setFirstTime] = useState(true)


    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.seviceText}>Services</Text>
                <View style={styles.viewAll}>
                    <Text style={styles.viewAllText}>view all</Text>
                </View>
            </View>
            {firstTime ? <FirstTimeSevice /> : <SecondTimeSevice />}
        </View>
    )
}

export default ServicesSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    seviceText: {
        fontWeight: '400',
        marginLeft: 20,
        fontSize: 22,
    },
    viewAll: {
        width: 70,
        backgroundColor: '#DDEDF4',
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    viewAllText: {
        color: '#208220',
        fontWeight: '100',

    }
})