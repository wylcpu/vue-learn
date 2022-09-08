let uid = 0
export class Dep {
    static target;
    subs;
    constructor () {
        this.subs = []
        this.id = uid++
    }
    addSub (sub) {
        // 存储watcher
        this.subs.push(sub)
    }
    depend () {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }
    notity () {
        this.subs.forEach(item => {
            item.update()
        })
    }
}
Dep.target = null