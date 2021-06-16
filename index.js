// Write your code here
function  Breakfast(food, drink) {
   this.food=food;
   this.drink = drink;
   this.sayHello = function() {
     console.log(`${this.year},${this.drink}`);
   };
 }
   let bfast = new Breakfast('eggs', 'juice')
   bfast.Breakfast();

   function Lunch (salad,soup,drink) {
     this.salad=salad;
     this.soup=soup;
     this.drink = drink;
     this.sayHello = function() {
       console.log(`${this.salad},${this.soup},${this.drink}`);
     };
   }
   let newlunch = new Lunch('side salad','broccoli cheddar soup','iced tea')
     newlunch.Lunch();

       function Dinner (salad,soup,entree,dessert) {

         this.salad = salad;
         this.soup = soup;
         this.entree = entree;
         this._dessert = dessert;
         this.sayHello = function() {
           console.log(`${this.soup},${this.entree},${this._dessert}`);
         };
       }
     let newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
         newdinner.Dinner();
