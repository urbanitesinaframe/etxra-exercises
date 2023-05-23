<https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/solutions/javascript?filter=me&sort=best_practice&invalids=false>

Thoughts:

-How to check if the which elevator is further away from caller uon call. 
-Used the difference to determin. 
-If difference from left "is position" to caller "is position" (diff1)is equal to difference right "is position" to caller "is position"(diff2) then the distance is the same. 
-If diff1 is smaller than diff2 than left elevator is closer and vice versa.
-used the Math.abs method to make difference a positive number. otherwise its not possible to compare correctly if the difference=distance is a negative number
-Realized that there is only one case that marks "left" as close elevator, so we just have to write down this case and all other cases are "right is closer to caller"

function elevator(left, right, call){
  if(Math.abs(left-call)<Math.abs(right-call)){
    return "left";
  }else{
    return "right";
  }
}
