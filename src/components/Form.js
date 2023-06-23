import React, {useState} from 'react'
import Button from './Button'
import './Form.css'

function Form() {
    const[valueName, setName] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        areHuman: false
    })

    function handleChange(e){
        const{name, value, type, checked} = e.target
        setName(prevData=>{
            return{
                ...prevData,
                [name]: type === 'checkbox'? checked : value
            }
        })
    }
    function checkPassword(e){
        e.preventDefault()
       if(valueName.password === valueName.confirmPassword){
        alert('successfully signed in')
       }else {
        alert('passwords do not match')
        return
       }
       if(valueName.areHuman){
        console.log('Thank you for joining news letter');
       }
    }
  return (
    <>
    <form>   
         <input
         type='email'
         name='email'
         onChange={handleChange}
         value={valueName.email}
         />
          <input
         type='password'
         name='password'
         onChange={handleChange}
         value={valueName.password}
         />
          <input
         type='password'
         name='confirmPassword'
         onChange={handleChange}
         value={valueName.confirmPassword}
         />
          <input
         type='checkbox'
         name='areHuman'
         onChange={handleChange}
         value={valueName.areHuman}
         id='checkbtn'
         />
         <label htmlFor='checkbtn'>I want to join the newsletter</label>
         <Button onClick={checkPassword}>Sign up</Button>
    </form>
    <p>{valueName.email} {valueName.password} {valueName.confirmPassword}</p>
    </>
  )
}

export default Form