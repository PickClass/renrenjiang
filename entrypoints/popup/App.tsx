import { createSignal } from 'solid-js';
import solidLogo from '@/assets/solid.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <p class="read-the-docs">
        人人讲视频旋转修改
      </p>
    </>
  );
}

export default App;
