import { useState } from 'react';
import Features from '../Features';
import './style.css'

function Display(){
    const[password,setPassword] = useState("");
    const[includeUpperCase,setIncludeUpperCase] = useState(false);
    const[includeLowerCase,setIncludeLowerCase] = useState(false);
    const[includeSymbols,setIncludeSymbols] = useState(false);
    const[includeNumber,setIncludeNumber] = useState(false);

    let lowerCaseLetter = "qwertyuiopasdfghjklzxcvbnm";
    let upperCaseLetter = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let symbols = "~!@#$%^&*()";
    let pass = "";
    
    if(includeUpperCase===true && includeLowerCase===true && includeSymbols===true && includeNumber===true){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            let m = Math.trunc(Math.random()*10);
            pass += n + upperCaseLetter[n] + lowerCaseLetter[m] + symbols[n];
        }
    }

    else if(includeUpperCase===true && includeLowerCase===true && includeSymbols===true && includeNumber===false){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            let m = Math.trunc(Math.random()*10);
            pass += upperCaseLetter[n] + lowerCaseLetter[m] + symbols[n];
        }
    }

    else if(includeUpperCase===true && includeLowerCase===true && includeSymbols===false && includeNumber===false){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            let m = Math.trunc(Math.random()*10);
            pass += upperCaseLetter[n] + lowerCaseLetter[m] ;
        }
    }

    else if(includeUpperCase===false && includeLowerCase===true && includeSymbols===true && includeNumber===true){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            let m = Math.trunc(Math.random()*10);
            pass += n + lowerCaseLetter[m] + symbols[n];
        }
    }

    else if(includeUpperCase===true && includeLowerCase===false && includeSymbols===true && includeNumber===true){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            pass += n + upperCaseLetter[n] + symbols[n];
        }
    }

    else if(includeUpperCase===true && includeLowerCase===true && includeSymbols===false && includeNumber===true){
        for(let i=0; i<4; i++){
            let n = Math.trunc(Math.random()*10);
            let m = Math.trunc(Math.random()*10);
            pass += n + upperCaseLetter[n] + lowerCaseLetter[m] ;
        }
    }
    else if(includeUpperCase===true && includeLowerCase===false && includeSymbols===false && includeNumber===true){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            pass += n + upperCaseLetter[n];
        }
    }

    else if(includeUpperCase===true && includeLowerCase===false && includeSymbols===false && includeNumber === false ){
        for(let i=0; i<11; i++){
            let n = Math.trunc(Math.random()*10);
            pass += upperCaseLetter[n];
        }
    }
    else if(includeUpperCase===false && includeLowerCase===true && includeSymbols===false && includeNumber===true){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            let m = Math.trunc(Math.random()*10);
            pass += n + lowerCaseLetter[m];
        }
    }
    else if(includeUpperCase===false && includeLowerCase===true && includeSymbols===false && includeNumber===false){
        for(let i=0; i<10; i++){
            let m = Math.trunc(Math.random()*10);
            pass += lowerCaseLetter[m] ;
        }
    }

    else if(includeUpperCase===false && includeLowerCase===true && includeSymbols===true && includeNumber===false){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            let m = Math.trunc(Math.random()*10);
            pass += lowerCaseLetter[m] + symbols[n];
        }
    }
    else if(includeUpperCase===true && includeLowerCase===false && includeSymbols===true && includeNumber===false){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            pass += upperCaseLetter[n] + symbols[n];
        }
    }

    else if(includeUpperCase===false && includeLowerCase===false && includeSymbols===true && includeNumber===true){
        for(let i=0; i<5; i++){
            let n = Math.trunc(Math.random()*10);
            pass += n + symbols[n];
        }
    }
    else if(includeUpperCase===false && includeLowerCase===false && includeSymbols===true && includeNumber===false){
        for(let i=0; i<10; i++){
            let n = Math.trunc(Math.random()*10);
            pass += symbols[n];
        }
    }
    else if(includeUpperCase===false && includeLowerCase===false && includeSymbols===false && includeNumber===true){
        for(let i=0; i<10; i++){
            let n = Math.trunc(Math.random()*10);
            pass += n;
        }
    }
    else if(includeUpperCase===false && includeLowerCase===false && includeSymbols===false && includeNumber===false){
         pass = "please select options";
    }

    const handleOnChangeUpperCase = (e)=>{
        setIncludeUpperCase(e.target.checked)
    }

    const handleOnChangeLowerCase = (e)=>{
        setIncludeLowerCase(e.target.checked)
    }

    const handleOnChangeSymbols = (e)=>{
        setIncludeSymbols(e.target.checked)
    }

    const handleOnChangeNumber = (e)=>{
        setIncludeNumber(e.target.checked)
    }

    return(
        <div className='passwordScreen'>
            <input className='screen' type='text' value={password} onChange={()=>{}}/>
            <div>
                <Features upperCaseChecked={includeUpperCase} handleOnChangeUpperCase={handleOnChangeUpperCase} lowerCaseChecked={includeLowerCase} handleOnChangeLowerCase={handleOnChangeLowerCase}
                    symbolsChecked={includeSymbols} handleOnChangeSymbols={handleOnChangeSymbols} numbersChecked={includeNumber} handleOnChangeNumber={handleOnChangeNumber}
                />
            </div>
            <div>
                <button onClick={()=>{setPassword(pass)}}>Generate Password</button>
            </div>
        </div>
    )
}
export default Display;