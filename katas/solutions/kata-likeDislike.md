Like vs Dislike <https://miro.com/app/board/uXjVMEyi8JY=/?moveToWidget=3458764555501277362&cot=10>

Thoughts:

browse through array and any matches will add or deduct from a helping variable which is zero

condition 1
same button clicked twiced will set to zero

condition 2
last clicked button will override previous button unless condition 1

result is either 
like
dislike
nothing


the value at index X will be passed to a variable and this will be tested against the next value

forEach or for of Loop?
for likestatus of buttons
if array is empty pass nothing to variable
if  value other then value of variable then pass that value to variable
if value is same as in variable pass "Nothing" to the variable

---solution--

1.    function likeOrDislike(buttons) {
2.    let finalState = "Nothing";
3.    for (let likeStatus of buttons) {
4.    likeStatus === [] ? finalState = "Nothing" :
5.    likeStatus === finalState ? finalState = "Nothing" : 
6.    finalState = likeStatus
7.    }
8.    return finalState }
