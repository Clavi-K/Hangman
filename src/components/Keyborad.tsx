import styles from "../css/Keyborad.module.css"
const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    disabled: boolean
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) {
    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
        gap: ".5rem"
    }}>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return <button
                onClick={() => addGuessedLetter(key)}
                className={`${styles.btn} ${isInactive ? styles.inactive : ""} ${isActive ? styles.active : ""}`}
                key={key}
                disabled={isInactive || isActive || disabled}
            >{key}</button>
        })}
    </div>
}