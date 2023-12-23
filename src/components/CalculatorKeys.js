
// CalculatorKeys Component
const CalculatorKeys=(props)=> {
    const {input, setInput, setResult} =props; // get the input,setInput,setResult from props
    
    // function to handle number click
    const inputNumber=(e)=>{
        const value= e.target.value; 
        // check if value is decimal '.' 
        if(value === '.'){ 
            if(!Number(input.slice(-1))) return;
            //check if the last char is a decimal
            if(input.slice(-1) === value){
                return;
            }
            //else set the input with value
            setInput(input +value);
        }
        setInput(input + value); //set the Input state
    }
    // function to handle operation click
    const operatorClick= (e) =>{
        const value= e.target.value ;
        let newInput;
        // to set the length of the input is less than 10
        if(input.length<10){
            // check if the value clicked is plus-minus
            if(value === '±'){
                 // if no input, then return
                if(input === "") return;
                let calculated;
                // check if the last char is number
                if(Number(input.slice(-1))){
                    calculated = eval(input);
                    // if the value is negative
                    if(Math.sign(calculated)< 0){
                        calculated = Math.abs(calculated);
                        setInput(calculated.toString()); return;
                    }else{
                        // for positive value
                        setInput(`-` +calculated.toString()); return;
                    }
                }
            }
            // check if the value clicked is percentage and set the input
            if(value === '%'){ 
                setInput(parseFloat(input)/100 +`*`);
                return;
            }

            // check if the operator clicked is same as last value
            if(input.slice(-1) === value){
                return;
            }else{
                // check if the last char is not a number, remove the last char and set the new input with value clicked
                if(!Number(input.slice(-1))){
                    newInput= input.slice(0, -1);
                    // if the last char is 0 then it will set the input with 0 then the operator value
                    if(Number(input.slice(-1)) === 0){
                        setInput(newInput+`0`+ value);
                        return;
                    }
                    setInput(newInput +value);
                    return;
                }else{          // else add the operator to the input
                    setInput(input+value);
                    return;
                }
            }
        }
        
    }   
    // handle the equal '=' button click
    const handleEqual = () =>{
        if(!input) return; // check if no input, return
        let ans= eval(input); // evaluate the expression in input
        setResult(ans); // set the result state as answer
    }
    // handle the clear 'C' button click
    const clearOutput=()=>{
        setInput(''); // clear both input and result state
        setResult('');
    }
    
    return (
        // all the buttons in calculator app
        <div className= "btn-div" >
            <button className="btn btn-grey" value="C" onClick={clearOutput}>C</button>
            <button className="btn btn-grey" value="±" onClick={operatorClick} >±</button>  
            <button className="btn btn-grey" value="%" onClick={operatorClick} >%</button>
            <button className="btn btn-orange" value="/" onClick={operatorClick} >/</button>
            <button className="btn btn-light-grey" value="7" onClick={inputNumber}>7</button>
            <button className="btn btn-light-grey" value="8" onClick={inputNumber} >8</button>
            <button className="btn btn-light-grey" value="9" onClick={inputNumber}>9</button>
            <button className="btn btn-orange" value="*" onClick={operatorClick}  >*</button>
            <button className="btn btn-light-grey" value="4" onClick={inputNumber}>4</button>
            <button className="btn btn-light-grey" value="5" onClick={inputNumber} >5</button>
            <button className="btn btn-light-grey" value="6" onClick={inputNumber}>6</button>
            <button className="btn btn-orange" value="-" onClick={operatorClick} >-</button>
            <button className="btn btn-light-grey" value="1" onClick={inputNumber}>1</button>
            <button className="btn btn-light-grey" value="2" onClick={inputNumber}>2</button>
            <button className="btn btn-light-grey" value="3" onClick={inputNumber}>3</button>
            <button className="btn btn-orange" value="+" onClick={operatorClick} >+</button>
            <button className="btn btn-light-grey zero" value="0" onClick={inputNumber} >0</button>
            <button className="btn btn-light-grey" value="." onClick={inputNumber}>.</button>
            <button className="btn btn-orange" value="=" onClick={handleEqual} >=</button>
        </div>
    );
}
  
//Exporting CalculatorKeys Component
export default CalculatorKeys;