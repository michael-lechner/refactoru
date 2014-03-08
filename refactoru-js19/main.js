
var Customer = function(dietaryPreference){
        this.dietaryPreference = dietaryPreference;
}

Customer.prototype.toString = function(){
        return 'Dietary preference: ' + this.dietaryPreference;
}

var Drink = function(name , description , price , foodItems){
        this.name = name;
        this.description = description;
        this.price = price;
        this.foodItems = foodItems;
};

Drink.prototype.toString = function(){
        var nameStr = 'name: ' + this.name + '\n';
        var descriptionStr = 'description: ' + this.description + '\n';
        var priceStr = 'price: $' + this.price + '\n\n';
        var foodItemsStr = 'Drink Items: ' + '\n\n';

        for(var i = 0; i < this.foodItems.length; i++){
                foodItemsStr += this.foodItems[i].toString();
        }

        return nameStr + descriptionStr + priceStr + foodItemsStr;
}

var FoodItem = function(name, calories, vegan , glutenFree, citrusFree){
        this.name = name;
        this.calories = calories;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
        this.citrusFree = citrusFree;
}
FoodItem.prototype.toString = function(){
        var nameStr = this.name + ':\n';
        var calStr = 'calories: ' + this.calories + '\n';
        var veganStr = 'Vegan: ' + this.vegan + '\n';
        var glutenStr = 'Gluten Free: ' + this.glutenFree + '\n';
        var citrusStr = 'Citrus Free: ' + this.citrusFree + '\n\n';

        return nameStr + calStr + veganStr + glutenStr + citrusStr;
}

var Menu = function(plates){
        this.plates = plates;
}

Menu.prototype.toString = function(){
        var plateStr = 'Plates: \n\n';

        for(var i = 0; i < this.plates.length; i++){
                plateStr+= this.plates[i].toString();
        }

        return plateStr;
}

var Order = function(plates){
        this.plates = plates;

}
Order.prototype.toString = function(){
        var plateStr = 'Order: ';

        for(var i = 0; i < this.plates.length; i++){
                plateStr+= this.plates[i].toString();
        }

        return plateStr;
}

var Plate = function(name, description, price ,foodItems){
        this.name = name;
        this.description = description;
        this.price = price;
        this.foodItems = foodItems;
};
Plate.prototype.toString = function(){
        var nameStr = 'name: ' + this.name + '\n';
        var descriptionStr = 'description: ' + this.description + '\n';
        var priceStr = 'price: $' + this.price + '\n\n';
        var foodItemsStr = 'Food Items: ' + '\n\n'

        for(var i = 0; i < this.foodItems.length; i++){
                foodItemsStr += this.foodItems[i].toString();
        }

        return nameStr + descriptionStr + priceStr + foodItemsStr;
}
Plate.prototype.isVegan = function(){
        for(var i = 0; i < this.foodItems.length; i++){
                if(!this.foodItems[i].vegan){
                        return false;
                }

        }

        return true;
}

Plate.prototype.isGlutenFree = function(){
        for(var i = 0; i < this.foodItems.length ; i++){
                if(!this.foodItems[i].glutenFree){
                        return false;
                }
        }

        return true;
}

Plate.prototype.isCitrusFree = function(){
        for(var i = 0; i < this.foodItems.length ; i++){
                if(!this.foodItems[i].citrusFree){
                        return false;
                }
        }

        return true;
}

var Restaurant = function(name , description , menu){
        this.name = name;
        this.description = description;
        this.menu = menu;
}

Restaurant.prototype.toString = function(){
        var nameStr = 'name: ' + this.name + '\n';
        var descriptionStr = 'description: ' + this.description + '\n\n';
        var menuStr = 'menu: \n\n' + this.menu.toString();

        return nameStr + descriptionStr + menuStr;
}



var orange = new FoodItem('orange' , 2 , true , true , false);
console.log(orange.toString());

var guacamole = new FoodItem('guacamole' , 200 , true , true , false);
console.log(guacamole.toString());

var steak = new FoodItem('steak' , 300 , false , true , true);
console.log(steak.toString());

var chxBurritoItems = [];

chxBurritoItems.push(new FoodItem('chicken', 10000, false, false, false));
chxBurritoItems.push(new FoodItem('beans', 10, true, true, true));
chxBurritoItems.push(new FoodItem('rice', 20, true, true, true));
var chickenBurrito = new Plate('Chicken Burrito', 'really freaking delicious burrito', 9.99, chxBurritoItems);

console.log(chickenBurrito.toString());

var guacamoleItems = [];
guacamoleItems.push(new FoodItem('avocado' , 300 , true , true , true));
guacamoleItems.push(new FoodItem('tomato' , 100 , true , true , true));
guacamoleItems.push(new FoodItem('cilantro' , 20 , true , true , true));
guacamoleItems.push(new FoodItem('onion' , 30 , true , true, true));
guacamoleItems.push(new FoodItem('lime' , 10 , true , true , false));
var guac = new Plate('guacamole' , 'bomb guacamole' , 7.00 , guacamoleItems);

console.log(guac.toString());

var margaritaItems = [];
margaritaItems.push(new FoodItem('tequila' , 300 , true , true, true));
margaritaItems.push(new FoodItem('lime' , 50 , true , true , false));
margaritaItems.push(new FoodItem('orange juice' , 60 , true , true , false));
margaritaItems.push(new FoodItem('triple sec' , 60 , true , true, true));
var margarita = new Drink('margarita' , 'delicious margarita' , 8.00 , margaritaItems);

console.log(margarita.toString());

var menuItems = [];
menuItems.push(chickenBurrito , guac , margarita);
var fullMenu = new Menu(menuItems);

console.log(fullMenu.toString());

var eduardos = new Restaurant('Eduardo\'s' , 'Authentic Mexican Food' , fullMenu);
console.log(eduardos.toString());

