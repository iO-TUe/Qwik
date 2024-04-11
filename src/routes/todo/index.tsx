import { $, component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik"
import Counter from "~/counter"
import Header from "~/header"
import Item from "~/item"


export default component$(() => {
    useStylesScoped$(/*scss*/`
        .App-main {
            background-color: var(--main-background);
            height: calc(100vh - 114px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
            padding: 0 2em
        }


        input {
            width: 100%;
        }

        .list {
            padding-inline-start: 0;
        }

        #counters :global(.counters) {
            display: flex;
        }
    `)

    const id = useSignal(0)
    const input = useSignal('')
    const items = useStore<{ $: { id: number, text: string }[] }>({ $: [] })

    const addItem = $((ev: Event) => {
        if ((ev as KeyboardEvent).key === 'Enter' && input.value) {
            items.$.push({ id: id.value++, text: input.value })
            input.value = ""
        }
    })

    const removeItem = $((rid: number) => {
        items.$ = items.$.filter(({ id }) => id !== rid)
    })

    // { console.log('Script: App') }
    return <>
        {/* {console.log('Render: App')} */}
        <Header />
        <main class="App-main">
            <section id="todo">
                <label >
                    <h2>Add new item</h2>
                    <input id="input" bind:value={input} onKeyDown$={addItem} />
                </label>
                <ul class="list">
                    {items.$.map(item => <Item key={item.id} item={item} remove$={removeItem} />)}
                </ul>
            </section>
            <section id="counters">
                <Counter initialValue={50} maxValue={500} recurse={false} />
            </section>
        </main>
    </>
})
