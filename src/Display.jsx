import styles from './Display.module.css'

let Display = ({calVal}) => {
    return(
        <>
        <input type="text" className={styles.input} value={calVal} readOnly />
        </>
    )
}

export default Display;