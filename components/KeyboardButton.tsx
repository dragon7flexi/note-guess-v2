import { useLessonLogic } from '@/hooks/useLessonLogic';
import { currCorrectAnswerState } from '@/state/atom';
import { getUnderlayColor } from '@/utils/keyboardButtonUtils';
import { Text, StyleSheet, GestureResponderEvent, TouchableHighlight } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

interface KeyboardButtonProps {
    isWhiteKey: boolean;
    pitch: string;
}

export default function KeyboardButton({ isWhiteKey, pitch }: KeyboardButtonProps) {
    const currCorrectAnswer = useRecoilValue(currCorrectAnswerState);
    const { handleUserAnswer } = useLessonLogic();

    const handlePress = () => {
        handleUserAnswer(pitch);
    };

    const underlayColor = getUnderlayColor(isWhiteKey, pitch, currCorrectAnswer);

    return (
        <TouchableHighlight
            style={isWhiteKey ? styles.whiteKey : styles.blackKey}
            onPress={handlePress}
            underlayColor={underlayColor}
        >
            <Text style={isWhiteKey ? styles.whiteKeyText : styles.blackKeyText}>{pitch}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    whiteKey: {
        width: 48,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#dddddd',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    blackKey: {
        width: 40,
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 4,
        borderColor: '#1c1c1c',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    whiteKeyText: {
        position: 'absolute',
        bottom: 10,
        color: '#7a7a7a',
        fontFamily: 'serif',
        fontSize: 25
    },
    blackKeyText: {
        position: 'absolute',
        bottom: 10,
        color: '#7a7a7a',
        fontFamily: 'serif',
        fontSize: 18
    },
});
