import React, {useState} from 'react'

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
        if(valueName.password !== valueName.confirmPassword){
            alert('passwords do not match')
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
         <button onClick={checkPassword}>Sign up</button>
    </form>
    <p>{valueName.email} {valueName.password} {valueName.confirmPassword}</p>
    </>
  )
}

export default Form