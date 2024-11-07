export function getUnderlayColor(isWhiteKey: boolean, pitch: string, currCorrectAnswer: string): string {
    if (pitch === currCorrectAnswer) {
        return "#98EE98"; // 正解の場合
    }

    return isWhiteKey ? "#dddddd" : "#333333"; // 白鍵または黒鍵の場合
}
