import ReactDOM from 'react-dom/client';
import '/src/index.css'

function App() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  function getDayTime () {
    if(hours < 12) {
      return 'Good morning'
    } else if (hours >= 12 && hours < 17) {
      return 'Good afternoon'
    } else if(hours < 21){
      return 'Good evening'
    } else {
      return 'Good night'
    }

  }
  return (
    <>
      <h1>The Time now is {hours}:{minutes}:{seconds}</h1>
      <h1>{getDayTime()}</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);