// Write your code here
function  breakfast(meal, drink) {
   this.meal=meal;
   this.drink = drink;
   this.sayHello = function() {
     console.log(`${this.year},${this.drink}`);
   };
 }
   let breakfast = new breakfast('eggs', 'juice')
   breakfast.breakfast();

   function lunch (salade,soup,drink) {
     this.salade=salade;
     this.soup=soup;
     this.drink = drink;
     this.sayHello = function() {
       console.log(`${this.salade},${this.soup},${this.drink}`);
     };
   }
   let newlunch = new lunch('side salad','broccoli cheddar soup','iced tea')
     newlunch.lunch();

  function dinner (salade,soup,starter,dessert) {
         this.salade = salade;
         this.soup = soup;
         this.starter = starter;
         this._dessert = dessert;
         this.sayHello = function() {
           console.log(`${this.soup},${this.starter},${this._dessert}`);
         };
       }
     let newdinner = new dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
         newdinner.dinner();