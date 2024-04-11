import { component$, useStylesScoped$, type QRL } from "@builder.io/qwik"

export default component$<{ item: { id: number, text: string }, remove$: QRL<(id: number) => void> }>((props) => {
    useStylesScoped$(/*scss*/`
        .item {
            display: flex;
            justify-content: space-between;
        }       
    `)
    return <li class="item" data-id={props.item.text}>
        <span>{props.item.text}</span>
        <button onClick$={() => props.remove$(props.item.id)}>x</button>
    </li>
})
