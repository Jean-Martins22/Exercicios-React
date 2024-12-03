// components
import FirstComponent from './components/FistComponent.jsx'
import TemplateExpressions from './components/TemplateExpressions.jsx'
import MyComponent from './components/MyComponent.jsx'
import Events from './components/Events.jsx'

// styles / CSS
import './App.css'
import Challenge from './components/Challenge.jsx'

function App() {
  // Essa função faz isso
  return (
    <>
    {/* Algum comentário */}
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions /> 
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App
