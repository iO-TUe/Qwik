import { qwikCity } from "@builder.io/qwik-city/vite"
import { qwikVite } from "@builder.io/qwik/optimizer"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"

export default defineConfig(() => ({
    plugins: [qwikCity(), qwikVite({
        devTools: { clickToSource: false },
        entryStrategy: {
            type: "smart",
            manual: {
                ...bundle('load', [
                    "s_rJEWSvSW7rY",
                    "s_BknvJvmiXNA"
                ]),
                ...bundle('styles', [
                    "s_X9SI4jHHwps",
                    "s_WZDCvF9I7Io",
                    "s_SqpMVBXCdqw"
                ])
            }
        }
    })],
    resolve: {
        alias: { "~": fileURLToPath(new URL("./src/components", import.meta.url)) }
    },
}))

function bundle(bundleName: string, symbols: string[]) {
    return symbols.reduce((obj, key) => {
        obj[key.replace("s_", "")] = bundleName; return obj
    }, {} as Record<string, string>)
}
