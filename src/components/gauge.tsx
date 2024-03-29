import { component$, useSignal, useStylesScoped$, useTask$ } from '@builder.io/qwik'
import Gauge from './gauge'

export default component$<{ value: number, recurse: boolean }>(({ value, recurse }) => {
  const bool = useSignal(false)

  useStylesScoped$(/*scss*/`
    .wrapper {
      position: relative;
    }

    .gauge {
      width: 100%;
      min-width: 100px;
    }

    .value {
      position: absolute;
      top: 50%;
      left: 50%;
      color: white;
      font-size: 3rem;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    circle {
      transition: all 150ms;

        &.stroke {
          transform: rotate(-87.9537deg);
          transform-origin: 50% 50%;
          stroke-linecap: round;
          stroke: url(#gradient);
          fill: none;
      }
    }
  `)

  useTask$(() => {
    setTimeout(() => bool.value = recurse, 0)
  })

  console.log('Script: Gauge')
  return <>
    {console.log('Render: Gauge')}
    <div role='feed' class="wrapper" onClick$={() => bool.value = true}>
      <svg viewBox="0 0 120 120" class="gauge">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#18B6F6" />
            <stop offset="1000%" stop-color="#AC7EF4" />
          </linearGradient>
        </defs>
        <circle r="56" cx="60" cy="60" stroke-width="8" style="fill: #000; stroke: #0000" />
        <circle class="stroke" r="56" cx="60" cy="60" stroke-width="8" style={`stroke-dasharray: ${value * 3.51}, 351.858;`} />
      </svg>
      <span class="value">{value}</span>
    </div>
    {(bool.value && value < 120) && <div class="recurse"><Gauge value={value + 1} recurse={true} /><Gauge value={value + 5} recurse={true} /></div>}
  </>
})
