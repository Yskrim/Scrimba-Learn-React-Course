import React from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'

/**
 * Challenge: add another label and input for the password field
 */

function App() {

  function handleSubmit(event) {
    event.preventDefault()    // prevents the form from submission
    const formEl = event.currentTarget    //
    const formData = new FormData(formEl)
    const email = formData.get("email")

    // here is where the form data is gathered and sent to the backend

    console.log(email)
    formEl.reset()
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
        <button type="submit" >Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);