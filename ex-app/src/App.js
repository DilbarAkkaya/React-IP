import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

const Field = () => {
  return <input type="text" placeholder="Type here" />
}

function Btn () {
  return <button>Click me!</button>
}
function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
