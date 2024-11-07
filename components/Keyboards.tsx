import React from 'react';
import { View, StyleSheet } from 'react-native';
import KeyboardButton from './KeyboardButton';

export default function KeyBoards() {
    return (
        <View style={styles.container}>
            <View style={styles.whiteKeysContainer}>
                <KeyboardButton isWhiteKey={true} pitch="C" />
                <KeyboardButton isWhiteKey={true} pitch="D" />
                <KeyboardButton isWhiteKey={true} pitch="E" />
                <KeyboardButton isWhiteKey={true} pitch="F" />
                <KeyboardButton isWhiteKey={true} pitch="G" />
                <KeyboardButton isWhiteKey={true} pitch="A" />
                <KeyboardButton isWhiteKey={true} pitch="B" />
            </View>
            <View style={[styles.blackKeysContainer, { marginLeft: 24 }]}>
                <View style={styles.blackKeyWrapper}>
                    <KeyboardButton isWhiteKey={false} pitch="C#" />
                </View>
                <View style={[styles.blackKeyWrapper, { marginLeft: 16 }]}>
                    <KeyboardButton isWhiteKey={false} pitch="D#" />
                </View>
                <View style={[styles.blackKeyWrapper, { marginLeft: 46 }]}>
                    <KeyboardButton isWhiteKey={false} pitch="F#" />
                </View>
                <View style={[styles.blackKeyWrapper, { marginLeft: 13 }]}>
                    <KeyboardButton isWhiteKey={false} pitch="G#" />
                </View>
                <View style={[styles.blackKeyWrapper, { marginLeft: 13}]}>
                    <KeyboardButton isWhiteKey={false} pitch="A#" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    whiteKeysContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    blackKeysContainer: {
        flexDirection: 'row',
        position: 'absolute',
    },
    blackKeyWrapper: {
        position: 'relative', // 相対的に配置
        height: 128, // 白鍵の高さに合わせる
        width: 40,   // 黒鍵の幅に合わせる
    },
});
