// Hash Table
// Hash Table is a data structure which stores data in an associative manner.
// In a hash table, data is stored in an array format, where each data value has its own unique index value.
// Access of data becomes very fast if we know the index of the desired data.

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value){
        const index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
        return index;
    }

    get(key){
        const index = this.hash(key);
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    return this.table[index][i][1];
                }
            }
        }
        return null;
    }

    remove(key){
        const index = this.hash(key);
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    display(){
        for(let i = 0; i < this.size; i++){
            if(this.table[i]){
                for(let j = 0; j < this.table[i].length; j++){
                    console.log(this.table[i][j]);
                }
            }
        }
    }

}

const table = new HashTable(10);

