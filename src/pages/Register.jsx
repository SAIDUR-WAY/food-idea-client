import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../Provider/AuthProvider'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Register = () => {
     const [error, setError] = useState('');
     const [accepted, setAccepted] = useState(false);

     const {signUp, profileUpdate} = useContext(AuthContext);

     const handleSubmit = (event)=>{
          event.preventDefault()

          setError('')

          const form = event.target;
          const name = form.name.value;
          const email =form.email.value;
          const password = form.password.value;
          const confirm = form.confirm.value;
          const url = form.url.value
          console.log(name, email, password, url)

          //conditional statement
          if(password !== confirm){
               setError('Do not match in password!')
          }else if(password.length < 6){
               setError('Please minimum 6 character long! ')
          }else if(!/(?=.*[A-Z])/.test(password)){
               setError('Please one UpperCase latter add in password')
               return
          }


          //signUp in firebase
          signUp(email, password)
          .then(result=>{
               const userReg = result.user;
               console.log(userReg);
               toast.success('Your are Successful Register!')
               profileUpdate(userReg, name, url)
               
          })
          .catch(error=> {
               // console.log(error.message)
               setError(error.message)
          })
     }

     const handelChecked = (event)=>{
          setAccepted(event.target.checked)
     }

  return (
    <div >
     <h2 className='fs-1 text-center'>Please Register</h2>
      <Form onSubmit={handleSubmit} className='w-50 mx-auto border border-1 p-4'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirm">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='confirm' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Photo url</Form.Label>
          <Form.Control type="text" name='url' placeholder=" https://example.com/users/" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handelChecked}
          type="checkbox"
          name="accept" 
          label= {<>accept <Link to='/terms'>Terms and Conditions</Link> </>}
          required />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text  >
          <Link className= 'pt-4 text-secondary' to='/login'>Already Have an account</Link>
        </Form.Text>
      </Form>
      <p className='text-center text-danger'>
          {error}
      </p>
    </div>
  )
}

export default Register
