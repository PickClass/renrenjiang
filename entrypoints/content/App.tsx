import './style.css';
import { storage } from '@wxt-dev/storage';
import { rotate, setRotate } from './store'
const App = () => {

  // 渲染一个段落元素，显示点击次数，并在点击时增加 coun

  // createEffect(() => {
  //   storage.setItem('local:rotate', rotate());
  // })

  // 共享存储旋转角度
  const onchange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    storage.setItem('local:rotate', rotate());
  }
  const reset = () => {
    setRotate(0);
    storage.setItem('local:rotate', 0);
  }
  return (
    <div class='rotate_tool'>
      <span style="color: white">视频旋转角度: {rotate()}</span>
      <button onclick={reset}>重置</button>
      <br />
      <input type="range" value={rotate()} min={0} max={360} onchange={onchange} onInput={(e) => setRotate(Number(e.target.value))} name="" id="" />
    </div>
  );
};


export default App;