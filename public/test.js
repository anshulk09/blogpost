function hello() {
    function world() {
        setTimeout(() => { console.log("cornel"); }, 100)
    };
    console.log("Harry")
    return world;
}
let an = hello();
an();
console.log("Joe")