import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Login = () => {

     const handleLogIn = event =>{
          event.preventDefault()

          const form = event.target;
          const email =form.email.value;
          const password = form.password.value;
          console.log(name, email, password)
     }

  return (
    <section>
      <h2 className="fs-1 text-center">Please LogIn</h2>
      <Form onSubmit={handleLogIn} className="w-50 mx-auto border border-1 p-4">
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    </section>
  )
}

export default Login
