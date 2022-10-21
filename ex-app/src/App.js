import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

class Field extends Component {
  render() {
    const holder = "Type here";
    const styledFiled = {
      width: '300px',
      backgroundColor: '#32ef8f'
    }
    return <input
      type="text"
      placeholder={holder}
      style={styledFiled}
    />
  }
}

function Btn() {
  const text = "Log in"
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>
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

export { Header };
export default App;
