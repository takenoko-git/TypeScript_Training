var name = 'Michael Jackson';
name.toUpperCase();
var total = 123;
var printTotal = function (totalNum) {
    console.log("Total is " + totalNum);
};
printTotal(total);
var isPositive = 0 < total;
var printIsPositive = function (isPositiveFlag) {
    if (isPositiveFlag) {
        console.log("Total is a positive number");
    }
    else {
        console.log('Total is not a positive number');
    }
};
printIsPositive(isPositive);
