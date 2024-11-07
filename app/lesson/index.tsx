import KeyBoards from "@/components/Keyboards";
import LinkButton from "@/components/LinkButton";
import { useLessonLogic } from "@/hooks/useLessonLogic";
import { correctAnswersState, currCorrectAnswerState, currQuestionIdxState } from "@/state/atom";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";

export default function LessonPage() {
    useLessonLogic()

    const currCorrectAnswer = useRecoilValue(currCorrectAnswerState);
    const currQuestionIdx = useRecoilValue(currQuestionIdxState);
    const correctAnswers = useRecoilValue(correctAnswersState);

    if (correctAnswers.length === 0) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.lessonPageContainer}>
            <View style={styles.topSpace}></View>
            <LinkButton href="/">Top</LinkButton>
            <Text>{currQuestionIdx + 1}問目</Text>
            <Text>現在の答え: {currCorrectAnswer}</Text>
            <View style={styles.midSpace}></View>
            <KeyBoards />
        </View>
    );
}

const styles = StyleSheet.create({
    lessonPageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    topSpace: {
        marginBottom: 40
    },
    midSpace: {
        marginBottom: 300
    },
});
