import { saveScore } from "./saveScores"

export function countScore(contador, userAnswers, goodAnswers, setScore) {
    if (contador === 9) {
        let count = 0
        for (let i = 0; i < userAnswers.length - 1; i++) {
            if (userAnswers[i] === goodAnswers[i]) {
                count += 1
            }
        }
        setScore(count)
        saveScore(count)
    }
}