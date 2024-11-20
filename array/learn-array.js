const array = [1, 2, 3, 4, 'vishwas'];

/*
---------Basic array Methods-----
*/
array.push(4);//add item at end
console.log(array);

array.pop();// to remove item end 
console.log(array);

array.unshift(1);// to add item in biginning
console.log(array);

array.shift()//remove item from the begning
console.log(array);

/*
Adavance Array methods:-

1)Filter
2)Map
3)Reduce
4)concat
5)slice
6)splice

*/

/*
-------Time Coplexity------
insert /remove from end -O(1)
Inser /remove from Begining -O(n)
Access - O(1)
Search  - O(n)
push / pop -O(1)
shif/unshit/concat/slice/splice - O(n)
forEach / map / Filter /reduce - O(n)
*/
