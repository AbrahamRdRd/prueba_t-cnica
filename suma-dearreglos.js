const array = [5, 1, 2, 7, 3, 1]; 
//const array = [9]; 
//const array = [1, 1, 1, 1];

var solutionFn = [];
let newArray = [];
const array2 =[]; 
var arraySortFunction = [];

/********** Acomodamos de mayor a menor el arreglo*********/
function arraySort(arr){
    let sorted = [...arr].sort((a, b)=>{return b - a});    
    return  sorted;
    };

/*********** hacemos array con los index del arraySort ****************/

function arrayIndexFunction(){
    for (let index = 0; index < array.length; index++) {   
        for (let j = 0; j < array.length; j++) {
            if(newArray[index] == array[j]){
                array2.push(j);
            }
        }
    }
    console.log(array2,"arra2")
    if(array2.length != newArray.length){
        let res = 0; 
        let resArray =[];
        res = array2.length - newArray.length;
        for (let index = 0; index < array2.length - res; index++) {
            resArray.push(array2[index]);
        }
            console.log(resArray,"res11");
        return resArray;
    } else {
        return array2;
    }  
}


function solutionFunction(){        
    //arraySortFunction = arrayIndexFunction();
    let newArrayIndex = [];
    let newArrayK = [];
    let newArrayTres = [];
    console.log(arraySortFunction,"otro")
    if(arraySortFunction.length > 3){
        for (let index = 0; index < 1; index++) {
            for (let k = index + 1; k < arraySortFunction.length; k++) {
                if(arraySortFunction[index] - 1 !== arraySortFunction[k] && arraySortFunction[index] + 1 !== arraySortFunction[k] &&
                    arraySortFunction[index + 1] + 1 !== arraySortFunction[k] && arraySortFunction[index + 1] - 1 !== arraySortFunction[k]){
                        newArrayIndex.push(index);            
                        newArrayK.push(k); 
                    }
            }
        }
        newArrayIndex
        console.log(newArrayIndex,"kkhj")
        newArrayK.unshift(newArrayIndex[0])
        return newArrayK;

    } else if(arraySortFunction.length == 2){
        return  0;
    } else {
        console.log("else",arraySortFunction)
        return newArrayTres.push(arraySortFunction[index])
    }
}   

function sumTotal(arr1,arr2){
    let count = 0;
    for (let index = 0; index < arr1.length; index++) {
        count = arr2[arr1[index]] + count 
    }
    return count;
}


newArray = arraySort(array);

arraySortFunction = arrayIndexFunction()

solutionFn = solutionFunction();

console.log(sumTotal(solutionFn, newArray));