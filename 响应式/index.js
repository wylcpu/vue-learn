import { observe } from "./reactive.js"
import { Watcher } from "./watcher.js"
const data = {
    ok: true,
    text: 1111
}
const updateComponent = () => {
    console.log('updateComponent', data.ok ? data.text: '哈哈哈')
}
observe(data)
new Watcher(updateComponent)
// console.log(data.text)
data.ok = false
data.text = 2222
data.text = 3333
data.text = 4444