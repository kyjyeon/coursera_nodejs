var rectangle = require('./rectangle');

function SolveRectangel(l, b){
    console.log("Rectangle Solving function called");
    console.log('l = ' + l + "and b = " + b );
    
    rectangle(l,b, (err, rectangle)=> {
        if(err){
            console.log("Error: ", err.message);
        }
        else{
            console.log("Area: " + l +" and b ="+b+" = " + rectangle.area())
            console.log("Perimeter: " + l +" and b ="+b+" = " + rectangle.perimeter())
        }
    });
    console.log("This statement is after call of rectangle()")
}

SolveRectangel(3,5);
SolveRectangel(0,19);
SolveRectangel(1,2);