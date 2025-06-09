// 1. Import the style
import { render } from 'solid-js/web';
import App from './App';
import { storage } from '@wxt-dev/storage';
import { rotate, setRotate } from './store'

const setVideoRotate = async (rotate: number) => {
  const video = document.querySelector('#player-container-id_html5_api')
  if (video instanceof HTMLVideoElement) {
    video.style.transform = `rotate(${rotate}deg)`
  }
}

export default defineContentScript({
  matches: ['*://*.renrenjiang.cn/*'],
  // 2. Set cssInjectionMode
  cssInjectionMode: 'ui',

  async main(ctx) {
    ctx.addEventListener(window, 'load', async () => {
      const ui = await createShadowRootUi(ctx, {
        name: 'rotate-ui',
        position: 'inline',
        anchor: '.main-rf-top',
        onMount: (container) => {
          ctx.setTimeout(() => {
            storage.getItem<number>('local:rotate').then((count) => {
              setVideoRotate(count ?? 0)
              setRotate(count ?? 0)
            })
          }, 1000)
          createEffect(() => {
            setVideoRotate(rotate())
          })
          const unmount = render(() => <App />, container);
          return { unmount }
        },
        onRemove: (ctx) => {
          ctx?.unmount();
        },
      });
      // 4. Mount the UI
      ui.mount();
    });

  },
});