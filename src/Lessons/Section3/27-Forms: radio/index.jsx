import React from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'

  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

function App() {

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(`${email} ${password}`)
    console.log(formData.get('employmentStatus'))
  }


  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" defaultValue="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" defaultValue='123'/>
        <br />

        <textarea defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment status</legend>
          <label htmlFor="radio">
            <input type="radio" name="employmentStatus" value="Unemployed"/>
            Unemployed
          </label>
          <label htmlFor="radio">
            <input type="radio" name="employmentStatus" value="Part-time"/>
            Part-time
          </label>
          <label htmlFor="radio">
            <input type="radio" name="employmentStatus" dafaultChecked={true} value="Full-time"/>
            Full-time
          </label>
        </fieldset>

        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);