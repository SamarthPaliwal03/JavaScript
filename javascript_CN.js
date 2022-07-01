// var function sum(num1,num2){
// return num1+num2 }

// sum(22,22)


// // ---------------------Array---------------------


// arr1=[1,2,3,4,5,6]
// console.log(arr1[3])

// var arr1=new Array(4)
// arr1[5]=222 //ammendmen of size is done here
// console.log(arr1);

// //arr1.splice(start index,no. of removed,insertion u want )

// // var function fun(n,m) {
// //     ss=1+2
// //     return ss;
    
// // }
// // fun(3,4)


// // ---------------------OBJECTS---------------------


// code for loop 10 to 1 print 
var number=10;
function timer() {
    console.log(number);
    number--;
    if (number<=0) {
        clearInterval(stop);
    }
}
 var stop=setInterval(timer,100) //setTimeout for one time


// //object making and function in it
// var objecttt={name:"sam",
//     rollno:22,
//     "2":"two",
//     sum:function (a,b)
//     {return a+b;   
//     }
//     }
// objecttt.address="jaipur"
// console.log(objecttt)
// console.log(objecttt["2"])// or dot method
// delete objecttt["2"] //or dot method
// console.log(objecttt.sum(10,20))
// console.log(Object.keys(objecttt)) //capital o 


// //nested obj
// var  objname = {name:"sam"  ,
//     class: 5,
// roll: 33,
// address: {
// city: "New delhi",
// pincode: 3030303 }
// }


// // ---------------------PART OF DOM ---------------------


// var button_bhai=document.getElementById(btn);
// button_bhai.addEventListener('click',function()  {
//     console.log('button clicked');
// });


// var button_bhai=document.getElementById(btn);
// btn.addEventListener('click',function()  {
//     console.log('button clicked');
// });

// var redbox=document.getElementById(box);
// redbox.addEventListener('mouseover',function()  { //mouseout is also there used when we removed from element
//     console.log('mouse over ');
// });


// document.addEventListener('keypress',function()  { //keydown and keyup is also there
//     console.log('key is pressed',event.keycode); //it will print ascii value of kry and shift alt is not considered in it and arrow keys too
// });

// // box ques ..box inside box stopPropagation i sudes to stop the top to bottom thing if now used when clicked on inner div it will print 2 outputs ..outer div and inner div called 
// // stopImmediatePropagation() is used for multiple propagtions of same object
// var innerdiv=document.getElementById(inner);
// innerdiv.addEventListener('mouseover',function()  { 
//     console.log('ineer div clicked ');
//     event.stopPropagation()
// });

// var outerdiv=document.getElementById(outer);
// outerdiv.addEventListener('mouseover',function()  { 
//     console.log('outer div clicked');
// });



// <div class="custom-control custom-switch">
//   <input type="checkbox" class="custom-control-input" id="customSwitches">
//   <label class="custom-control-label" for="customSwitches">Toggle this switch element</label>
// </div>


// var Toggle=document.getElementById(customSwitches);
// Toggle.addEventListener("click",function(){
//     div.backgroudcolor.black;
// })




//window.scrollTo(x,y); //put coordinates ,this id used to take at exact location
//window.scrollBy(x,y); //eg 0,100 3 times so total is 0,300 



//adding smooth scroll to nav bar
var scrollcontact= document.getElementById('contactusid');
scrollcontact.addEventListener('click',function(){
    var scrollfun= setInterval(function(){
   
        if (currpos>=targetpos) {
            clearInterval(scrollfun);
            return 0;
        }
        currpos=currpos+50;
        window.scrollBy(0,50);} 
        
        , 20);
    
        targetpos=2800;
        currpos=0;
}
)   


var scrollcontact= document.getElementById('driverid');
scrollcontact.addEventListener('click',function(){
    var scrollfun= setInterval(function(){
   
        if (currpos>=targetpos) {
            clearInterval(scrollfun);
            return 0;
        }
        currpos=currpos+50;
        window.scrollBy(0,50);} 
        
        , 20);
    
        targetpos=2000;
        currpos=0;
}
) 

var coordinates=scrollcontact.getBoundingClientRect();  //to get exact location
coordinates;


