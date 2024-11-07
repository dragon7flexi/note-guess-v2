import { correctAnswersState, currCorrectAnswerState, currQuestionIdxState, wrongCntsState, userAnswerState } from "@/state/atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { fetchRandomNotes } from "./noteUtils";

interface useLessonUtilsReturn {
    initializeCorrectAnswers: () => void;
    isAnswerWrong: (userAnswer: string) => boolean;
    setFirstCorrectAnswer: () => void;
    isLastQuestion: () => boolean;
    incrementWrongCnt: () => void;
    goToNextQuestion: () => void;
}

export function useLessonUtils(): useLessonUtilsReturn {
    const [correctAnswers, setCorrectAnswers] = useRecoilState(correctAnswersState);
    const [currCorrectAnswer, setCurrCorrectAnswer] = useRecoilState(currCorrectAnswerState);
    const [currQuestionIdx, setCurrQuestionIdx] = useRecoilState(currQuestionIdxState);
    const setwrongCnts = useSetRecoilState(wrongCntsState);

    const initializeCorrectAnswers = (): void => {
        const notes = fetchRandomNotes();
        setCorrectAnswers(notes);
    }

    const setFirstCorrectAnswer = (): void => {
        setCurrCorrectAnswer(correctAnswers[0]);
    }

    const isAnswerWrong = (userAnswer: string): boolean => {
        return userAnswer !== currCorrectAnswer;
    };


    const isLastQuestion = (): boolean => {
        const lastQuestionIdx = correctAnswers.length - 1;

        return currQuestionIdx >= lastQuestionIdx;
    };

    const incrementWrongCnt = (): void => {
        setwrongCnts((prevwrongCnts: number[]) => {
            return prevwrongCnts.map((cnt: number, idx: number) => {
                return idx === currQuestionIdx ? cnt + 1 : cnt;
            });
        });
    };

    const goToNextQuestion = (): void => {
        const incrementQuestionIdx = (): void => {
            setCurrQuestionIdx(prevIdx => prevIdx + 1);
        };

        const updateCurrCorrectAnswer = (): void => {
            const nextCurrCorrectAnswer: string = correctAnswers[currQuestionIdx];
            setCurrCorrectAnswer(nextCurrCorrectAnswer)
        };

        incrementQuestionIdx();
        updateCurrCorrectAnswer();
        
    };

    return {
        initializeCorrectAnswers,
        setFirstCorrectAnswer,
        isAnswerWrong,
        isLastQuestion,
        incrementWrongCnt,
        goToNextQuestion,
    };
}
