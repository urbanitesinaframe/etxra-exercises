Task:
There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

My thoughts:
  // at fisr stop there is only in no outs. 
  // there cant be more outs than passengers already in the bus. i locigally decided that the in's are excluded since they will not be counted as out if the just got in at the very bus stop and get out again.
  // not all passengers need to leave the bus at last stop
  // passngers cant be <0
  // i have to use the reduce method to get the difference from each nested array and then add difference to become the final sum = passengers
  
test examaple: number([[10,0],[3,5],[5,8]])

Outcome: didn't want to use a for loop so looked up the solution :)

var number = busStops => busStops.reduce((initialAmount, [on, off]) => InitialAmount + on - off, 0);

Learning: 
- each nested array can be treated as the current amount 
- the elements within the nested amounts can be described with paramenters which then will be fed with the actual values when the reduce function is called
- I have to define an initialAmount which is the first summand. The difference of the first array will be the second summand.
- As the initialAmount will be turned into totalAmount one can write totalAmount instead. The initialAmount is either the value at index 0 OR the number that is separated by a comma after the logical expression. 
- for the logical part: the sum from intial amount and difference of first array will be the new total amount and then added by the new actual summand at the next index.
  
