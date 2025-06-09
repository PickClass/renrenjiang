import { createStore } from "solid-js/store";
import { createSignal } from 'solid-js';

const App = () => {
  const [state, setState] = createStore({
    rotate: 0,
  });
};

export default App;


export const [rotate, setRotate] = createSignal(270);
