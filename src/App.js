import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import RandomComponent from './components/basics/RandomComponent';
import Card from './components/layout/Card';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#03 -Exemplo de Card">
          <RandomComponent max={60} min={1} title="Números Aleatórios" />
        </Card>
        <Card titulo="#02 -Second component">
          <WithParams
            title="Second component"
            subtitle="Very cool"
            grade={9.3}
          />
        </Card>
        <Card titulo="#01 - Exemplo Primeiro Component">
          <First />
        </Card>
      </div>
    </div>
  )
}

export default App;
