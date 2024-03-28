import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import './global.css'

/**
  * The root of a QwikCity site always start with the <QwikCityProvider> component,
  * immediately followed by the document's <head> and <body>.
  *
  * Dont remove the `<head>` and `<body>` elements.
*/

export default component$(() => <>
  <QwikCityProvider>
    <head>
      <title>Qwik</title>

      <meta charSet="utf-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="C'est Vite" />
      <meta name="view-transition" content="same-origin" />

      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#1c224a" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="192x192" href="/play.png" />
      <link rel="preconnect" href="https://image.tmdb.org" />

    </head>
    <body lang="en">
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
</>)
