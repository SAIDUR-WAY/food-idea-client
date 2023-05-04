import React from 'react'
import { Card, Table } from 'react-bootstrap'
import DownloadPage from '../../DownloadPage/DownloadPage'

const Blog = () => {
  return (
    <>
      <section id="pagedownload">
        <DownloadPage
          rootElementId="pagedownload"
          downloadFileName="blog_page"
        ></DownloadPage>
        <Card className='my-4'>
          <h2 className=" fs-1 ps-3 ">
            Difference Between a Controlled and Uncontrolled Component in React?
          </h2>
          <Table striped="columns">
            <thead>
              <tr>
                <th>Controlled</th>
                <th>Uncontrolled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Managed by React state</td>
                <td>Managed by component's own internal state</td>
              </tr>
              <tr>
                <td>Parent component updates state on user interaction</td>
                <td>
                  Component updates own internal state on user interaction
                </td>
              </tr>
              <tr>
                <td>Data flows from parent component to component</td>
                <td>Data flows within the component</td>
              </tr>
              <tr>
                <td>Easier to debug</td>
                <td>More difficult to debug</td>
              </tr>
              <tr>
                <td>Generally faster as there's less state management</td>
                <td>Generally slower as there's more state management</td>
              </tr>
              <tr>
                <td>Less complex code</td>
                <td>More complex code</td>
              </tr>
              <tr>
                <td>Considered a best practice</td>
                <td>Considered an alternate approach</td>
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card className='my-4'>
          <Card.Body>
            <h2 className=" fs-1 py-4">
              How to validate react props using propTypes
            </h2>
            <Card.Text>
              React is a JavaScript library used for creating interactive web
              frontend applications. It is one of the most popular libraries
              because of its easy-to-use API. <br /> <br />
              We combine components into an app by passing data from parent
              components to child components. To do this, we pass data with
              props. Props are like HTML attributes, but they can contain
              dynamic data. <br /> <br /> A parent component passes props down to child
              components. And child components receive them. We can pass any
              data as props. Therefore, we need a way to validate their data
              type so that the child component gets what they expect.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='my-4'>
          <h2 className=" fs-1 ps-3 ">
            Difference between Node.js and Express.js
          </h2>
          <Table striped="columns">
            <thead>
              <tr>
                <th>Express.js</th>
                <th>Node.js</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>More features than Node.js.</td>
                <td>Fewer features.</td>
              </tr>
              <tr>
                <td>It is built on Node.js.</td>
                <td>It is built on Google’s V8 engine.</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>C, C++, JavaScript</td>
              </tr>
              <tr>
                <td>Framework based on Node.js.</td>
                <td>
                  Run-time platform or environment designed for server-side
                  execution of JavaScript.
                </td>
              </tr>
              <tr>
                <td>Controllers are provided.</td>
                <td>Controllers are not provided.</td>
              </tr>
              <tr>
                <td>Routing is provided.</td>
                <td>Routing is not provided.</td>
              </tr>
              <tr>
                <td>
                  Uses middleware for the arrangement of functions
                  systematically server-side.
                </td>
                <td>Doesn’t use such a provision.</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card className='my-4'>
          <Card.Body>
            <h2 className=" fs-1 py-4">What are React Custom Hooks?</h2>
            <Card.Text>
              From version 16.8, React Hooks are officially added to React.js.
              Besides built-in Hooks such as: useState, useEffect, useCallback…,
              we can define our own hooks to use state and other React features
              without writing a class. <br /><br />
              A Custom Hook has following features: <br /> <br />     
              As a function, it takes input and returns output. Its name starts
              with use like useQuery, useMedia… Unlike functional components,
              custom hooks return a normal, non-jsx data. Unlike normal
              functions, custom hooks can use other hooks such as useState,
              useRef… and other custom hooks.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <h2 className=" fs-1 py-4">
              Why and When to use React Custom Hooks
            </h2>
            <Card.Text>
              Custom hooks give us following benefits: <br />
              Completely separate logic from user interface. Reusable in many
              different components with the same processing logic. Therefore,
              the logic only needs to be fixed in one place if it changes. Share
              logic between components. <br />
              <br />
              Hide code with complex logic in a component, make the component
              easier to read. So, when to use React custom hook? – When a piece
              of code (logic) is reused in many places (it’s easy to see when
              you copy a whole piece of code without editing anything, except
              for the parameter passed. Split like how you separate a function).{' '}
              <br /> <br />– When the logic is too long and complicated, you
              want to write it in another file, so that your component is
              shorter and easier to read because you don’t need to care about
              the logic of that hook anymore.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}

export default Blog
