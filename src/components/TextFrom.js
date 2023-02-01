import React , {useState} from 'react';

export default function TextFrom(props) {
    const [text, setText] = useState('');    // This is how we create states
    console.log(text);
    // text = "New Text";    // This is the incorrect way of changing the value of text. This will thorw an error.
    // setText("My name is Nitish Jaiswal")    // Correct way of changing the value of text

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();

        if(newText === "")
        {
            props.showAlert("Please enter text into the textarea", 'info');
            return;
        }

        setText(newText);
        props.showAlert("Converted to Uppercase!", 'success');

    }

    const handleDownClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", 'success');

        if(newText === "")
        {
            props.showAlert("Please enter text into the textarea", 'info');
            return;
        }
    }

    const handleTitleClick = () => {
        // console.log("Titlecase was clicked" + text);
        let wordsArray = text.split(" ");
        console.log(wordsArray);
        let sentence = "";
        
        for(let element of wordsArray)
        {
            if(element.includes("\n"))
            {
                console.log(element);
                for(let ele of element.split("\n"))
                {
                    sentence = sentence + ele.substring(0, 1).toUpperCase() + ele.substring(1, ele.length).toLowerCase() + " ";
                }
                continue;
            }
            sentence = sentence + element.substring(0, 1).toUpperCase() + element.substring(1, element.length).toLowerCase() + " ";
        }
        
        if(sentence === " ")
        {
            props.showAlert("Please enter text into the textarea", 'info');
            return;
        }

        setText(sentence);
        props.showAlert("Converted to TitleCase!", 'success');
        
    }

    const handleClearClick = () => {
        let clearText = "";
        setText(clearText);

        props.showAlert("Cleared text!", 'warning');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied!', 'success');
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        // console.log(event);
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode === 'dark' ? '#676767' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick} disabled={text.length === 0}>Convert to Upper case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleDownClick} disabled={text.length === 0}>Convert to Lower case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleTitleClick} disabled={text.length === 0}>Convert to Title case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
