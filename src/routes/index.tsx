import { component$, useStylesScoped$ } from "@builder.io/qwik"
import Counter from "~/counter"

export default component$(() => {
    useStylesScoped$(/*scss*/`
        .container {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4em;
            width: 100%;

            @media (min-width: 640px) {
                .container {
                    max-width: 640px;
                }
            }

            @media (min-width: 768px) {
                .container {
                    max-width: 768px;
                }
            }
        }
    `)
    { console.log('Script: App') }
    return <>
        {console.log('Render: App')}
        <div class="container">
            <Counter initialValue={95} />
        </div>
    </>
})
