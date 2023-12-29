import React from 'react'

function FormComponent() {
  return (<div className='container'>
    <form className='form'>
        <div className='form-control'>
            <label>User Name</label>
            <input type="text"></input>
            <small>error message</small>
        </div>
        <div className='form-control'>
            <label>E-mail</label>
            <input type="text"></input>
            <small>error message</small>
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type="text"></input>
            <small>error message</small>
        </div>
        <div className='form-control'>
            <label>Confirm Password</label>
            <input type="text"></input>
            <small>error message</small>
        </div>
        <button type="submit">Submit</button>
    </form>
   
  </div>
  )
}

export default FormComponent