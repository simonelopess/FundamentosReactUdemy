import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import RandomComponent from './components/basics/RandomComponent';
import Card from './components/layout/Card';
import Family from './components/basics/Family';
import MemberFamily from './components/basics/MemberFamily';
import StudentList from './components/repeat/studentList';
import ProductList from './components/repeat/productsTable';
import EvenorOdd from './components/conditional/EvenorOdd';
import InfoUser from './components/conditional/InfoUser';
import DirectFather from './components/comunication/DirectFather';
import IndirectFather from "./components/comunication/IndirectFather.js";
import Input from './components/forms/input';
import Counter from './components/Counter/Counter';

import './App.css'
const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="# 11 - Contador" color="#A68572">
          <Counter initialNumber={10} />
        </Card>
        <Card titulo="# 10 - Componente Controlado" color="#6A8D9D">
          <Input />
        </Card>
        <Card titulo="# 09 -Comunicação Indireta" color="#FF5108">
          <IndirectFather />
        </Card>
        <Card titulo="# 08 -Comunicação Direta" color="#4D6684">
          <DirectFather />
        </Card>
        <Card titulo="# 07 -Renderização Condicional" color="#6C8672">
          <EvenorOdd number={21} />
          <InfoUser user={{ name: 'Fernando' }} />
        </Card>
        <Card titulo="# 06 -Desafio Repetição" color="#424242">
          <ProductList />
        </Card>
        <Card titulo="# 05 - Repetição" color="#354458">
          <StudentList />
        </Card>
        <Card titulo="# 04 - Componentes com filhos" color="#28ABE3">
          <Family surname="Ferreira">
            <MemberFamily name="Pedro" />
            <MemberFamily name="Ana" />
            <MemberFamily name="Gustavo" />
          </Family>
        </Card>
        <Card titulo="# 03 -Exemplo de Card" color="#FA6900">
          <RandomComponent max={60} min={1} title="Números Aleatórios" />
        </Card>
        <Card titulo="# 02 -Second component" color="#92B06A">
          <WithParams
            title="Second component"
            subtitle="Very cool"
            grade={9.3}
          />
        </Card>
        <Card titulo="# 01 - Exemplo Primeiro Component" color="#FFAC00">
          <First />
        </Card>
      </div>
    </div>
  )
}

export default App;
