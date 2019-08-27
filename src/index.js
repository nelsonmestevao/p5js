import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';

import Sketch from './components/Sketch';

import AppleTree from './sketchs/apple-tree';
import WindyTree from './sketchs/windy-tree';

const SKETCHS = [
    AppleTree,
    WindyTree,
]

const style = {
  display: 'block',
  margin: '20px',
  height: '100vh',
}

function App() {
  return (
    <div style={style}>
      <img alt="p5.js logo" style={{display: 'block', margin: '10px'}} src="https://p5js.org/assets/img/p5js.svg"/>
      {SKETCHS.map(sketch => <Sketch sketch={sketch} />)}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
