import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Avatar from '@/assets/images/Avatar.png';
import Ionicons from '@expo/vector-icons/Ionicons';

interface TitleHomeProps {
    title: string;
    para: string
}

const TitleHome = ({ title, para }: TitleHomeProps) => {
    return (
        <View style={styles.spaceTop}>
            <View style={styles.row}>
                <Image source={Avatar} style={styles.avatar} />
                <View>
                    <Text style={styles.text}>{title}</Text>
                    <Text>{para}</Text>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                <Ionicons name="moon" size={24} color="black" style={styles.icon} />
                <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
            </View>
        </View>
    );
};

export default TitleHome;

const styles = StyleSheet.create({
    spaceTop: {
        marginTop: 10,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    text: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700',
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 10,
    }
});
