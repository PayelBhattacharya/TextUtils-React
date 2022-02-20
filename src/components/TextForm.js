import React , {useState} from 'react'

export default function TextForm(props) {
    const upperCase = ()=>
    {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "Success");
    }

    const lowerCase = ()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "Success");
    }

    const copyText = ()=>
    {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","Success");
    }

    const handleOnChange = (event)=>
    {
        setText(event.target.value);
    }

    const [text,setText] = useState(''); //text is a set variable and setText is a function and 'Enter text here' is the default value of text

    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h4 className='mb-4'>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0a1020':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary" onClick={upperCase} style={props.button} >Convert to UPPERCASE</button>
            <button disabled={text.length === 0} className="btn btn-primary m-5" onClick={lowerCase} style={props.button}>Convert to lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary" onClick={copyText} style={props.button}>Copy Text</button>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text in the textbox to preview it here"}</p>
        </div>
    )
}
