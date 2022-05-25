var vs let
var
-old version
-function scope
-gets hoisted

let
-es6
-block scope
-not hoisted

typeof
typeof(undefined) = undefined
typeof(null)= object


prototypal inheritance
car.prototype.getmodel = 
every object has prototype as parent


function declaration vs expression
E -> let f = function(){}
doesnt get hoisted
can pass to other func as param
function a(){}
D-> gets hoisted
cannot pass to other func as param


arrow func vs normal func
ease of use
holds the context
but doesnt handle args well


object.freeze()
doesnt allow you to add new props
seal() - doesnt allow you to add props, but allows you to modify

this
we cant use this in a function as the func has no idea what 'this' is abt
so we use 'call'
so we can cleantable.call(this/this.johnroom/this.garage,'args')

to use this inside inner funtion
-we need to assign that = this
or again use call like innerfunc.call(this,args)
or
innerfunc.bind(this) or just use arrow func


for..in loop
for(let i in arr) is a bad idea.
it should be used with obj props
here's why
https://stackoverflow.com/questions/500504/why-is-using-for-in-for-array-iteration-a-bad-idea
