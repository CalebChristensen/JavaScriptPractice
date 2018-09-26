//boolean
let x = true;
console.log(x);
console.log(typeof x);
//null
let y = null;
console.log(null);
console.log(typeof null);
//undefined
let z;
console.log(z);
console.log(typeof z);
//number
let a = 10;
console.log(a);
console.log(typeof a);
//string
let b = "Batman";
console.log(b);
console.log(typeof b);
//symbol
let c = Symbol();
const obj = {
    [c]: 123 
};
console.log(c);
console.log(typeof c);
//object
let d = {
    RDR : 'Rockstar',
    GTA : 'Rockstar'
};
console.log(d.RDR);
console.log(d.GTA);
console.log(typeof d);