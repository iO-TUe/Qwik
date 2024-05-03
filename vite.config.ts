import { qwikCity } from "@builder.io/qwik-city/vite"
import { qwikVite } from "@builder.io/qwik/optimizer"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"

export default defineConfig(() => ({
    plugins: [qwikCity({ trailingSlash: false }), qwikVite({ devTools: { clickToSource: false } })],
    resolve: {
        alias: { "~": fileURLToPath(new URL("./src/components", import.meta.url)) }
    },
}))

