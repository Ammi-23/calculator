import React from "react";

// Result Component
const Result= (props)=> {
    const {input, result}= props; //get input and result from props

    return (
        // to display the input and result on the screen
        <div className="input-wrapper">
            <div className='input-screen'> 
                <p>{ input ? input:'0'}</p> 
                <p>{result}</p> 
            </div>
        </div>
    );
}
  
// Exporting Result Component
export default Result;
  