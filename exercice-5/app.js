let myArray = [0,1,2,3,4]

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 2 ) {
        console.log(myArray[i])
    }
}

let myArrayWithObjects = [{ id : '1',title : 'a' }, { id : '2',title : 'b'}, {id :'3' ,title:'c'}]

myArrayWithObjects.push({id :'4', title: 'c'})
myArrayWithObjects.unshift({id : '5' ,title : 'e'})

console.log(myArrayWithObjects)

// for (let k = 0; k < myArray.length; k++) {
//         console.log(myArrayWithObjects.id[k] + myArrayWithObjects.title[k])
//     }