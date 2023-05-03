import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Register = () => {

     const handleSubmit = (event)=>{
          event.preventDefault()

          const form = event.target;
          const name = form.name.value;
          const email =form.email.value;
          const password = form.password.value;
          console.log(name, email, password)
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="url" name='Photo URL' placeholder=" https://example.com/users/" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Register
