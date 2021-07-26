import React,{useState} from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'
export const ThemeContext = React.createContext()

function App() {
  const [theme,setTheme] = useState('red')

  return (
    //use state to re-render to change context
    <ThemeContext.Provider value={{backgroundColor:theme}}>
    Counter
      <Counter
        initialCount={2}
      />
   
      Counter Hooks
        <CounterHooks
        initialCount={3}
      />
      <button onClick={() => setTheme(prevTheme=>{
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
     </ThemeContext.Provider>
  );
}

export default App;
 