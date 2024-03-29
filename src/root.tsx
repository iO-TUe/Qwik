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
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    </head>
    <body lang="en">
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
</>)
