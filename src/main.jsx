import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <div>
      <CustomComponent />
  </div>
)

function CustomComponent() {
  return (
      <div>
        <h1>Why am I learning react?</h1>
        <ul>
            <li>It's job demanded</li>
            <li>It's widespread</li>
            <li>It's well maintained</li>
            <li>It's cool</li>
        </ul>
    </div>
  )
}