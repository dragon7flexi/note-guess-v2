// app/_layout.tsx
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import React from 'react';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <ImageBackground
                source={require('@/assets/images/wood-bg.png')}
                style={styles.background}
            >
                <Slot />
            </ImageBackground>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
