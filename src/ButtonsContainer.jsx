import styles from './ButtonsContainer.module.css'


let ButtonsContainer = ({onButtonClick}) => {
    const buttonsName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return(
        <div className={styles.Calculator}>
            {buttonsName.map((buttons) => {
        return <button className={styles.button}
        onClick={() => onButtonClick(buttons)}
        >{buttons}</button>
            })}
        
      </div>
    )
}

export default ButtonsContainer;