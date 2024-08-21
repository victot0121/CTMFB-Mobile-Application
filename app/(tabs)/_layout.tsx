import React from 'react';
import { Tabs } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import { Image, View, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#208220',
            tabBarInactiveTintColor: '#D3D3D3',
        }}>
            <Tabs.Screen
                name='HomePage/index'
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName = 'home';
                        return <Octicons name={iconName} size={size} color={color} />;
                    },
                }}
            />
            <Tabs.Screen
                name='Transactions'
                options={{
                    tabBarLabel: "Transactions",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName = 'Transactions';
                        return <Octicons name="history" size={size} color={color} />
                    },
                }}
            />
            <Tabs.Screen
                name='More'
                options={{
                    tabBarLabel: " ",
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <>
                            <View style={styles.send}>
                                <Feather name="send" size={24} color="white" />
                            </View>
                        </>
                    ),
                }}
            />
            <Tabs.Screen
                name='Cards'
                options={{
                    tabBarLabel: "Cards",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName = 'Cards';
                        return <Feather name="credit-card" size={size} color={color} />
                    },
                }}
            />

            <Tabs.Screen
                name='Sending'
                options={{
                    tabBarLabel: "More",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="vector-square" size={size} color={color} />
                    },
                }}
            />
        </Tabs>
    );
}

export default TabLayout;


const styles = StyleSheet.create({
    send: {
        width: 45,
        height: 45,
        backgroundColor: "#208220",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
})