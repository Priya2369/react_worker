import{ React, useState} from 'react';
import './textField.css'

function TextField(props) {

  const [name, setName] = useState("");

  
  return (
   
    <>
    <div className="input-group">
            <input type="text" className="input-area" required  onChange={e => props.InputEvent(e)} value={props.val}
            name={props.vName}/>
            <label for="inputField" className="label">{props.name}</label>
        </div>
    </>
  );
}

export default TextField;
