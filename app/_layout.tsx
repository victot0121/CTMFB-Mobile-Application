import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{
                headerShown: false,
                statusBarStyle: 'dark',
            }} />
            <Stack.Screen name='HomePage/index' options={{
                headerShown: false,
                statusBarStyle: 'dark',
            }} />
        </Stack>
    )
}

export default _layout