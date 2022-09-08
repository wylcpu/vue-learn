import { Dep } from "./dep.js"
export function defineReactive(obj, key, value) {
    if (!value) {
        value = obj[key]
    }
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get () {
            if(Dep.target) {
                dep.depend()
            }
            console.log('get:', value)
            return value
        },
        set (newValue) {
            value = newValue
            console.log('set:', newValue)

            dep.notity()
        }
    })
}
export class Observer {
    constructor(obj) {
        this.walk(obj)
    }
    walk (obj) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }
}
export function observe (obj) {
    return new Observer(obj)
}