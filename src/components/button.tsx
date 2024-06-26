import { component$, useStylesScoped$, type QRL } from "@builder.io/qwik"

export default component$<{ disabled: boolean, fn: QRL<() => void>, sign: string }>((props) => {
    useStylesScoped$(/*scss*/`
        .button {
            background: var(--qwik-dirty-black);
            border: none;
            border-radius: 8px;
            color: white;
            padding: 8px 5px 5px;
            text-align: center;
            font-weight: 700;
            font-size: 2rem;
            min-width: 50px;

            &:not([disabled]):hover {
            cursor: pointer;
            background: var(--qwik-dark-blue);
            }

            &[disabled] {
            filter: opacity(0.7);
            }
        }
    `)

    // console.log(`Script: "${sign}" button`)
    return <>
        {/* {console.log(`Render: "${sign}" button`)} */}
        <button class="button" disabled={props.disabled} onClick$={() => props.fn()} aria-label={props.sign}>
            {props.sign}
        </button>
    </>
})
