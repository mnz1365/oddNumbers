
var numbers = [3,4,54,76,76,5,2,35563,35,8,8964,4];
var odd_numbers = [];

for(var i = 0;i < numbers.length; i++) {
    if(numbers[i] % 2 == 1) {
        odd_numbers.push(numbers[i]);
    }
}



console.log(odd_numbers);