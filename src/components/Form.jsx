import{ React, useState} from 'react';
import Card from './Card';
import TextField from'./TextField'
import './form.css'
import Button from './Button'


function Form() {
  const [profile, setProfile] = useState("")
  const [detail, setDetail] = useState({
    email:'',
    psw:'',
    cPsw:'',

  })
   
 const InputEvent = (e)=>{
      console.log(e.target.value)
      const{name , value} = e.target
      setDetail((preValue)=>{
        return{
          ...preValue,
          [name]:value,

        }
      });
      
  }

  

   const onSubmits = (e) =>{
       e.preventDefault();
       setProfile(detail)
        }
    
   
  return (
   
    <>
    
    <div className="box">
      
        <form onSubmit={onSubmits}>
          
            <TextField name="Email/Phone no." InputEvent={InputEvent} val={detail.names} vName="email"/>
            <TextField name="password" InputEvent={InputEvent} val={detail.psw} vName="psw"/>
            <TextField name="Confirm Password" InputEvent={InputEvent} val={detail.cPsw} vName="cPsw"/>
            <Button  name="Send OTP" />
            
            </form>
            
        
    </div>
        
    
    </>
  );
}

export default Form;
