import React , {useState} from 'react';

function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
  {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export default function Textform(props) {

          const handleOnClick=()=>{
                console.log("handling on click"+ text);
                let newText=text.toUpperCase();
                setText(newText);
          }
          const clear=()=>{
            console.log("handling on click"+ text);
            let newText="";
            setText(newText);
      }
          const handleOnClickLower=()=>{
            console.log("handling on click"+ text);
            let newText=text.toLowerCase();
            setText(newText);
              }
              const toCamelCase=()=>{
                console.log("handling on click"+ text);
                let newText;
                newText=camelCase(text);
                setText(newText);
          }
          const handleOnChange=(event)=>{
            console.log("On change");
            setText(event.target.value);
         }


  const [text, setText] = useState("");
  return (
        <>
          <div className="container">
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
              </div>
              <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-2" onClick={handleOnClickLower}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-2" onClick={toCamelCase}>Convert to cameCase</button>
              <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>


               </div>

               <div className="container">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>

                <h2>Preview</h2>
                <p>{text}</p>
              </div>

               </>
  );
}