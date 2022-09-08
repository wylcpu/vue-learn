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
    removeSub(sub) {
        let index = -1
        this.subs.some((item,idx) => {
            if(item === sub) {
                index = idx
                return true
            }
            return false
        })
        this.subs.splice(index, 1)
    }
    notity () {
        this.subs.forEach(item => {
            item.update()
        })
    }
}
Dep.target = null