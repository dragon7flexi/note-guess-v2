import { useEffect, useState } from "react";
import { useLessonUtils } from "@/utils/lessonUtils";
import { navigate } from "@/utils/navigateUtil";

interface useLessonLogicReturn {
    handleUserAnswer: (userAnswer: string) => void,
}

export function useLessonLogic(): useLessonLogicReturn {
    const { initializeCorrectAnswers, setFirstCorrectAnswer, isAnswerWrong, incrementWrongCnt, isLastQuestion, goToNextQuestion } = useLessonUtils()

    useEffect(() => {
        initializeCorrectAnswers();
        setFirstCorrectAnswer();
    }, []);

    const handleUserAnswer = (userAnswer: string): void => {
        if (isAnswerWrong(userAnswer)) {
            incrementWrongCnt();
            return;
        }

        if (isLastQuestion()) {
            navigate("result");
            return;
        }

        goToNextQuestion();
    };

    return {
        handleUserAnswer,
    };
};