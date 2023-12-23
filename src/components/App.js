import CalculatorKeys from "./CalculatorKeys"; // importing CalculatorKeys component
import Result from "./Result"; // importing Result component
import { useState } from "react"; // importing React hook

//App component
function App() {
  // using useState hook to maintain the state for input and result
  const [input, setInput]= useState(''); 
  const [result, setResult] =useState(''); 

  // Render the Result and CalculatorKeys components
  return (
    <div className="container">
      <div className="wrapper"> 
        <Result input={input} result={result}/>
        <CalculatorKeys input={input}
            setInput={setInput}
            setResult={setResult}/>
      </div>
    </div>
  );
}

// Export the App component as default
export default App;
