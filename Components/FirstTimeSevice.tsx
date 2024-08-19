import { View, Text, Image } from 'react-native'
import React from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import re from '@/assets/images/Ra.png'
import Loan from '@/assets/images/Loan.png'
import uInvioice from '@/assets/images/u_invoice.png'
import Feather from '@expo/vector-icons/Feather';

const FirstTimeSevice = () => {
    return (
        <View >
            <Feather name="send" size={24} color="black" />
            <Image source={Loan} />
            <Image source={uInvioice} />
            <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
        </View>
    )
}

export default FirstTimeSevice