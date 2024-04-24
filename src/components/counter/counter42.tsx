import { $, component$, useSignal, useStylesScoped$, useTask$ } from '@builder.io/qwik'
import { isBrowser } from '@builder.io/qwik/build'
import Button from '../button'
import Gauge from '../gauge'

export default component$((props: { initialValue: number, maxValue: number, recurse: boolean }) => {
  useStylesScoped$(/*scss*/`
    .wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .counters:has(:global(.recurse)) {
      display:flex;
      align-items: center;
    }
  `)

  const count = useSignal(props.initialValue)
  const add = $(() => {
    if (count.value < 100) count.value++
  })
  const subtract = $(() => {
    if (count.value > 0) count.value--
  })

  useTask$(() => {
    if (isBrowser) {
      const delay = Date.now() + 50
      while (Date.now() < delay) {
        console.log()
      }
    }
  })

  //  console.log(`Script: Counter`) 
  return <>
    {/* {console.log(`Render: Counter`)} */}
    <div class="wrapper">
      <Button disabled={count.value === 0} fn={subtract} sign='-' />
      <div class="counters">
        {[...Array(props.recurse ? 1 : props.maxValue)].map((_, idx) =>
          <Gauge key={idx} value={count.value} max={props.maxValue} recurse={false} />)}
      </div>
      <Button disabled={count.value === 100} fn={add} sign='+' />
    </div>
  </>
})
