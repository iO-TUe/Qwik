import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { QwikLogo } from './icons/qwik'

export default component$(() => {
  useStylesScoped$(/*scss*/`
    .App-navbar {
      padding: 30px 40px;
      text-align: right;
      background-color: var(--main-background);
    }

    .App-logo {
      height: 50px;
      pointer-events: none;
    }
  `)

  console.log('Script: Header')
  return <>
    {console.log('Render: Header')}
    <nav class="App-navbar">
      <div class="App-logo">
        <QwikLogo height={50} width={143} />
      </div>
    </nav>
  </>
})
