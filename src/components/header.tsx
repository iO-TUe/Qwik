import { component$, useComputed$, useStylesScoped$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { QwikLogo } from './icons/qwik'

export default component$(() => {
  useStylesScoped$(/*scss*/`
    .settings {
      cursor: pointer;
      rotate: 180deg;
      font-size: 32px;
      color: white;
      background: none;
      border: none;
    }

    .wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0 auto;
      padding: 30px 40px;
    }

    .logo {
      display: inline-block;
      a {
        display: block;
      }
    }

    .horizon {
      background: var(--header-background);
      width: 100vw;
      height: 4px;
      border: none;
      margin: 0;
      z-index: 1;
      top: 0;
      position: fixed
    }

    .header {
      background-color: var(--header-background);

      & ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        gap: 30px;
      }

      & li {
        display: none;
        margin: 0;
        padding: 0;
        font-size: 0.8rem;

        & a {
          color: white;
          display: inline-block;
          padding: 0;
          text-decoration: none;

            &:hover {
              color: var(--qwik-light-blue);
            }
          }
      }
      
      @media (min-width: 450px) {
        & li {
          display: inline-block;
        }
      }
    }
  `)

  const { url: { pathname } } = useLocation()
  const vid = useComputed$(() => pathname.endsWith('/vid/'))

  return <>
    {vid && <hr class="horizon" />}
    <header class="header">
      <nav class="wrapper">
        <div class="logo">
          <a href="/vid" title="qwik" tabIndex={-1}>
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        {vid && <button class="settings" onClick$={() => document.querySelector<HTMLDialogElement>('#settings')?.showModal()}>⋮</button>}
      </nav>
    </header>
  </>
})
