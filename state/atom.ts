import { TOTAL_NUM_OF_QUESTIONS } from "@/constants/Lesson";
import { atom } from "recoil";

export const correctAnswersState = atom<string[]>({
    key: "correctAnswersState",
    default: [],
});

export const currQuestionIdxState = atom<number>({
    key: "currQuestionIdxState",
    default: 0,
});

export const currCorrectAnswerState = atom<string>({
    key: "currCorrectAnswerState",
    default: "",
});

export const userAnswerState = atom<string>({
    key: "userAnswerState",
    default: "",
});

export const wrongCntsState = atom<number[]>({
    key: "wrongCntsState",
    default: Array(TOTAL_NUM_OF_QUESTIONS).fill(0),
});
