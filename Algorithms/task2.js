
let a = [2,6,32,95,44,62,94];

let azalan = a.sort(function(a, b){return b - a});
console.log(azalan)

let qaliqsiz = []
for (let i = 0; i<a.length;i++) {
    if (a[i]%3 == 0 ) {
     qaliqsiz.push(a[i])  
    }
}
console.log(qaliqsiz)

let asagi = []
for (let i=0;i<a.length;i++) {
    if (a[i] < 50 ) {
    asagi.push(a[i])   
    }
} 
console.log(asagi)

let araliq = []
for (let i=0; i<a.length;i++) {
    if (a[i] > 35 && a[i] < 70 ) {
    araliq.push(a[i]) 
    }
} 
console.log(araliq)

let b = ["I","learn","JavaScript"]

b.splice(0,1)                  
console.log(b) 

let c = ["I","learn","JavaScript"]

c.splice(0,1, 'PHP','Python')
console.log(c) 


let array = [25, 95, 'test', 'php', true, {}, 129, 'javascript'];
let ar = [];
function type(arr, a) {
    for (i = 0; i < arr.length; i++) {
        if (a == typeof arr[i]) {
            ar.push(arr[i])
        }
    }
    return ar;
};
let result = type(array, "number");
console.log(result);
