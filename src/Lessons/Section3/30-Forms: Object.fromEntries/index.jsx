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
    console.log(formData.getAll('dietaryRestrictions'))
    console.log(formData.get("favColor"))
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
            <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-time"/>
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions</legend>
          <label htmlFor="radio">
            <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
            Kosher       
          </label>
          <label htmlFor="radio">
            <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
            Vegan
          </label>
          <label htmlFor="radio">
            <input type="checkbox" name="dietaryRestrictions" value="gluten-free"/>
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="">
          <option value='' disabled >Choose a color</option>
          <option value='red'>Red</option>
          <option value='orange'>Orange</option>
          <option value='yellow'>Yellow</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='indigo'>Indigo</option>
          <option value='violet'>Violet</option>
        </select>

        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);