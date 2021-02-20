var beforeArr = [5, 3, 4, -4, -6, 87, -56];
var afterArr = beforeArr.map(function(number) {
    if (number > 0) {
      return Math.sqrt(number);  
    } 
});

console.log('beforeArr-->', beforeArr);
console.log('afterArr-->', afterArr);


var newArr = [5, 3, 4, -4, -6, 87, -56];
var sum = 0; 
var i = 0;
newArr.forEach(function(item, index, newArr) {
  if (sum >= 10) {
  return sum;
  }
  sum += item;
  console.log(sum);
  i = index + 1;
});
 console.log('Для выполнения условия задания надо сложить первых ' + i + ' элемента');
