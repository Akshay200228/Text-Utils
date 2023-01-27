import React, { useState } from 'react';
// import Chatai from './Chatai';
import toast from 'react-hot-toast';


export default function Textform(props) {
    const [text, setText] = useState('');
    const handleupclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        toast.success('Convert uppercase successfully')
    }
    const handleloclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        toast.success('Convert lowercase successfully')
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const handleClear = () => {
        let newtext = '';
        setText(newtext)
        toast.success('Clear successfully')
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        toast.success('Copied successfully');        
    }
    return (
        <>
            <div className="container"
            style={{color: props.mode==='dark'?'white':'black'}}
            >

                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example text below</label>
                    <textarea className="form-control" value={text} onChange={handleonchange}
                    style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'#7FFF00'}} id="myBox" rows="6"></textarea>
                    <button type="button" className="btn btn-success btn-lg my-2 my-2" onClick={handleupclick}>Convert to Upercase</button>
                    <button type="button" className="btn btn-success btn-lg mx-2 my-2" onClick={handleloclick}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-success btn-lg mx-2 my-2" onClick={handleCopy}>Copy text</button>
                    <button type="button" className="btn btn-success btn-lg mx-2 my-2" onClick={handleClear}>Clear text</button>
                </div>
                <div className="container my-4">
                    <h2>Your text sumary</h2>
                    <p>{text.split(" ").filter((element)=>(element.length!==0)).length} words and {text.length} chracters</p>
                    <p>{0.008 * text.split(" ").length} minutes</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
                </div>
            </div>
            <div>
            {/* <Chatai/> */}
            </div>
        </>
    )
}
