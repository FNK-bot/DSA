//Hash Table Implementation
//O(N)-WORST 
//O(1)-AVG
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key);
        // this.table[index] = value    
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [key, value];
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([[key, value]])
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        // return this.table[index];    
        let bucket = this.table[index];
        if (bucket) {
            let isKeyIsSame = bucket.find(item => item[0] === key);
            if (isKeyIsSame) {
                return isKeyIsSame[1]
            }
        }
        return undefined
    };

    remove(key) {
        let index = this.hash(key);
        // this.table[index] = undefined
        let bucket = this.table[index];
        if (bucket) {
            let isKeyIsSame = bucket.find(item => item[0] === key);
            if (isKeyIsSame) {
                bucket.splice(bucket.indexOf(isKeyIsSame), 1)//Lrn
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
        console.log('ends')
    }
}

let hashMap = new HashTable(50);

hashMap.set('farseen', 60);
hashMap.remove('farseen')

hashMap.set('name1', 60);
hashMap.set('name2', 650);
// console.log(hashMap.get('farseen'));
hashMap.get('name1');
hashMap.display()
// console.log(hashMap.get('farseen'))