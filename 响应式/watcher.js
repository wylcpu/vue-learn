import { Dep } from "./dep.js"
export class Watcher {
    constructor (Fn) {
        this.getter = Fn
        this.depIds = new Set()
        this.get()
    }
    get () {
        Dep.target = this
        let value = this.getter.call()
        return value
    }
    addDep(dep) {
        if (!this.depIds.has(dep.id)) {
            this.depIds.add(dep.id)
            dep.addSub(this)
        }
    }
    update () {
        this.run()
    }
    run () {
        this.get()
    }
}