
let a = [1,5,9,'New York',true,'javascript',7,['false','exit']]
console.log(a[3])

console.log(a[a.length-1])

console.log(a.length)

console.log(a[7][0])

a.push('London')
console.log(a)

a.pop(a[a.length-1])
console.log(a)

a.splice(2, 0,'Moscow','Ankara')
console.log(a)

a.splice(2, 3,'Audi','BMW')
console.log(a)

let b = [36,5,89,7,2,1]

b.sort(function(a, b) {
    return a - b
})
console.log(b)


let c = ['Alma','Armud','Heyva','Nar','Mandarin']

let d = c.slice(2,3)
console.log(d)

let f = c.slice(3)
console.log(f)


function vurma(a, b){
    console.log(a*b) 
}

function rasgele(y,x){
   console.log(Math.floor(Math.random() * y) + x)
}


rasgele(100,1)

vurma(4, 3)