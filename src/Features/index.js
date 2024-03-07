import './style.css'

function Features(props){
    return(
    <div className='checkBoxes'>
        <div className='checkBox'>
            <label>Include Upper Case Letters</label>
            <input type='checkbox' checked= {props.upperCaseChecked} onChange={props.handleOnChangeUpperCase}/>
        </div>
        <div className='checkBox'>
            <label>Include Lower Case Letters</label>
            <input type='checkbox' checked= {props.lowerCaseChecked} onChange={props.handleOnChangeLowerCase}/>
        </div>
        <div className='checkBox'>
            <label>Include Symbols</label>
            <input type='checkbox' checked={props.symbolsChecked} onChange={props.handleOnChangeSymbols}/>
        </div>
        <div className='checkBox'>
            <label>Include Numbers</label>
            <input type='checkbox' checked={props.numbersChecked} onChange={props.handleOnChangeNumber}/>
        </div>
    </div>
    )
}

export default Features;