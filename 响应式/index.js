import { observe } from "./reactive.js"
import { Watcher } from "./watcher.js"
const data = {
    text: 1111
}
const updateComponent = () => {
    console.log('updateComponent', data.text)
}
observe(data)
new Watcher(updateComponent)
// console.log(data.text)
data.text = 2222
// data.text = 3333
// data.text = 4444