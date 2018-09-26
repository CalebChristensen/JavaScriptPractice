//Global scope
var x = 12
{
    //local scope
    var y = 12;
}
console.log(x);
console.log(y);

var outside = "outside";{
    let inside = "inside";
    console.log(inside);
};
console.log(outside);

