import { TOTAL_NUM_OF_QUESTIONS } from "@/constants/Lesson";

const allNotes = [
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
];

// 音名を10個ランダムに抽出して返す
export function fetchRandomNotes(): string[] {
    return [...allNotes]
        .sort(() => Math.random() - 0.5)
        .slice(0, TOTAL_NUM_OF_QUESTIONS)
}

const noteFrequencies: { [key: string]: number } = {
    'C': 261.63,  // ド
    'C#': 277.18, // ド#
    'D': 293.66,  // レ
    'D#': 311.13, // レ#
    'E': 329.63,  // ミ
    'F': 349.23,  // ファ
    'F#': 369.99, // ファ#
    'G': 392.00,  // ソ
    'G#': 415.30, // ソ#
    'A': 440.00,  // ラ
    'A#': 466.16, // ラ#
    'B': 493.88,  // シ
};
