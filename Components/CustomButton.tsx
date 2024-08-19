import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

interface CustomButtonProps{
    onPress: ()=> void;
    title: string;
    textStyles?: object;
    containerStyles?: object;
}

const CustomButton = ({onPress, title, textStyles={}, containerStyles={}}:CustomButtonProps) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={[styles.buttonContainer, containerStyles]}
      onPress={onPress}
    >
        <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor : '#208220',
        borderRadius: 12,
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
       fontWeight: '600',
       fontSize: 18,
       color: 'white'
    }
})