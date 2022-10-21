import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello world'
const elem = (
  <div>
    <h2 className='text'>
      Text: {text}
    </h2>
    <input type="text" />
    <button htmlFor='0'>Click me</button>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
elem
);
