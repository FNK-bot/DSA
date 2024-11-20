//Object is not itemratable

const obj = {
    name: 'farseeen',
    age: 22,
    'key-threee': true,
    sayMyName: function () {
        console.log(this.name)
    }
}

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-threee'])

obj.hobee = 'football';
delete obj.hobee
console.log(obj.hobee)

obj.sayMyName();

/*

Insert -O(1)
delete -O(1)
Access -O(1)

Search - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.enteries() - O(n)

*/ 