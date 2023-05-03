import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../Provider/AuthProvider'
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');

  const navigate = useNavigate()
  const location = useLocation()
  const path = location?.state?.from?.pathname || '/';
  console.log(path)


  const {handelSignIn, googleSignIn, githubSignIn} = useContext(AuthContext);

     const handleLogIn = event =>{
      
          event.preventDefault()

          setError('')

          const form = event.target;
          const email =form.email.value;
          const password = form.password.value;
          console.log(name, email, password)

          handelSignIn(email, password)
          .then(result=>{
            const loggedUser = result.user;
            // console.log(loggedUser)
            toast.success('LogIn Successful')
            navigate(path, {replace: true})
          })
          .catch(error=>{
            // console.log(error.message)
            setError(error.message);
          })


     }

     //google signIn
     const handleGoogleSignIn = ()=>{
      googleSignIn()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        toast.success('You are successful logIn')
        navigate(path, {replace: true})
      })
      .catch(error=>{
        setError(error.message)
      })
     } 
     //github signin
     const handleSignIn = ()=>{
      githubSignIn()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        toast.success('You are successful logIn')
        navigate(path, {replace: true})
      })
      .catch(error=>{
        setError(error.message)
      })
     }

  return (
    <section>
      <h2 className="fs-1 text-center fw-bold">Please LogIn</h2>
      <Form onSubmit={handleLogIn} className="w-50 mx-auto fw-semibold border border-1 p-4 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          LogIn
        </Button>
        <div>
          <span className='mb-0'>You d'not have account:</span>
          <Link className= ' text-primary px-2' to='/register'>Go To Register</Link>
        </div>
        <p className='text-center text-danger'>
          {error}
        </p>
        <div className='d-flex justify-content-between'>
        <Button className='btn-secondary btn-secondary' onClick={handleGoogleSignIn}>SignIn with Google</Button>
        <Button className='btn-secondary btn-secondary' onClick={handleSignIn}>SignIn with Github</Button>
        </div>
      </Form>
    </section>
  )
}

export default Login
