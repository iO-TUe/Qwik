import { $, component$, useSignal, useStylesScoped$ } from '@builder.io/qwik'
import Button from './button'
import Gauge from './gauge'

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

  //  console.log(`Script: Counter`) 

  return <>
    {/* {console.log(`Render: Counter`)} */}
    <div class="wrapper">
      <Button disabled={count.value === 0} fn={subtract} sign='-' />
      <div class="counters">
        {[...Array(props.recurse ? 1 : props.maxValue)].map((_, idx) =>
          <Gauge key={idx} value={count.value} max={props.maxValue} recurse={false} fn={$(() => console.log(idx))} />)}
      </div>
      <Button disabled={count.value === 100} fn={add} sign='+' />
    </div>
  </>
})
