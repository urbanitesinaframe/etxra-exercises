function positiveSum(arr) {
let sum = 0;
for (i = 0; i < arr.length; i++) {
if (arr[i] > 0 && arr[i] !== 0) {
// alle Zahlen bei index i sind größer und nicht gleich 0
sum += arr[i];
} else {
sum += 0;
}
}
return sum;
}
