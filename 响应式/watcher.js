import { Dep } from "./dep.js"
export class Watcher {
    constructor (Fn) {
        this.getter = Fn
        this.depIds = new Set()
        this.newDepIds = new Set()
        this.deps = []
        this.newDeps = []
        this.get()
    }
    get () {
        Dep.target = this
        let value = this.getter.call()
        this.cleanupsDep()
        return value
    }
    addDep(dep) {
        if (!this.newDepIds.has(dep.id)) {
            this.newDepIds.add(dep.id)
            this.newDeps.push(dep)
            if(!this.depIds.has(dep.id)) {
                dep.addSub(this)
            }
        }
    }
    update () {
        this.run()
    }
    run () {
        this.get()
    }
    cleanupsDep() {
        this.deps.forEach(dep => {
            if(!this.newDepIds.has(dep.id)) {
                dep.removeSub(this)
            }
        })
        let tmp = this.depIds
        this.depIds = this.newDepIds
        this.newDepIds = tmp
        this.newDepIds.clear()
        tmp = this.deps
        this.deps = this.newDeps
        this.newDeps = tmp
        this.newDeps.length = 0

    }
}