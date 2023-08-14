import React, { useState } from "react";

export const getTotalPoint  = function(){
    let total = 0;
    for(let i = 0; i < 10 ; i++){
        total += i;
    }
    
}

export default function Counter(){

    const [counter, setCounter] = useState(0);
    const [asyncCounter, setAsyncCounter] = useState(0);
    const [point, setTotalPoint] = useState(getTotalPoint());

    

    const delayCount = function(event){
        if(event == 'in'){
            setAsyncCounter(asyncCounter + 1);
        }else{
            setAsyncCounter(asyncCounter - 1);
        }
    }

    return (
        <>
            <h2>Total point : {point}</h2>
            <div>
                <h1 data-testid="counter">{ counter }</h1>
                <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
                <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
            </div>
            <div>
                <h1 data-testid="counter-async">{ counter }</h1>
                <button data-testid="button-up-async" onClick={() => delayCount('in')}> Up</button>
                <button data-testid="button-down-async" onClick={() => delayCount('de')}>Down</button>
            </div>
        </>
    )
}