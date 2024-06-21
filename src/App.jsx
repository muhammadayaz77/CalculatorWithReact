import { useState } from 'react'
import './App.css'
import Display from './Display';
import ButtonsContainer from './ButtonsContainer'
function App() {
  let [calVal, setVal] = useState('');
  const onButtonClick = (textBtn) => {
    if(textBtn == 'C')
      {
        setVal('')
      }
      else if(textBtn == '=')
        {
          const resultValue = eval(calVal);
          setVal(resultValue)
        }
        else
        {
          const newDisplayValue = calVal + textBtn;
          setVal(newDisplayValue);
        }
  }
  return (
    <div className='body'>
     <div>
     <Display calVal={calVal}></Display>
     <ButtonsContainer onButtonClick={onButtonClick} />
     </div>
    </div>
  )
}

export default App
