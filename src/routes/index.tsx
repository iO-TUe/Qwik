import { component$, useStylesScoped$ } from "@builder.io/qwik"
import Counter from "~/Counter"
import Header from "~/header"

export default component$(() => {
    useStylesScoped$(/*scss*/`
        .App {
            text-align: center;
            }

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
    `)
    { console.log('Script: App') }
    return <>
        {console.log('Render: App')}
        <Header />
        <main class="App-main">
            <Counter initialValue={95} />
        </main>
    </>
})
