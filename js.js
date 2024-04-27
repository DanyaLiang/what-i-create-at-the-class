class Person{
    #name = 'Danya'

    get change(){
        return this.#name
    }
    set change(newName){
        this.#name = newName
    }

}

let a = new Person()
a.change = 'Dan'
console.log(a.change)