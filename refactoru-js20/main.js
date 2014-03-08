
var menuItems = [];

$(document).on('ready', function(){

	//Helper functions
	var addToOrder = function(name, price){
		var myOrder = {};
		myOrder[name] = price;

		var order = new Order(myOrder);

		var source = $('#order').html();
		var orderTemplate = Handlebars.compile(source);
		$('.order-container').append(orderTemplate(order));

		updateTotal(totalOrder());

	};

	var blink = function(selector, togClass, interval){
		setInterval(function(){
			selector.toggleClass(togClass);
		}, interval)

	}

	var buildMenuSectionStr = function(arr){
		var menuSecStr = '';
		for(var i = 0; i < arr.length; i++){
			menuSecStr += arr[i].toDOMString();
		}

		return $(menuSecStr);
	};

	var highlightMenuItem = function(arr, filter){
		var menuItems = $('.menu-container').find('.name');
		var filteredMenuItems = [];

		for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < menuItems.length; j++){
				if(arr[i].name === $(menuItems[j]).html()){
					filteredMenuItems.push($(menuItems[j]));
				}
			}
		}

		resetFilterClass();

		switch(filter){
			case 'vegan':
				$(filteredMenuItems).toggleClass('vegan');
			break;
			case 'gluten free':
				$(filteredMenuItems).toggleClass('gf');
			break;
			case 'citrus free':
				$(filteredMenuItems).toggleClass('cf');
			break;
			default:
		}

		

	};

	var menuInit = function(){
		var burritos = filterByCategory(menuItems, 'burrito');
		var tacos = filterByCategory(menuItems, 'taco');
		var nachos = filterByCategory(menuItems, 'nacho');
		var drinks = filterByCategory(menuItems, 'drink');
		
		$('#burrito').append(buildMenuSectionStr(burritos));
		$('#taco').append(buildMenuSectionStr(tacos));
     	$('#nacho').append(buildMenuSectionStr(nachos));
		$('#drink').append(buildMenuSectionStr(drinks));

	};

	var filterByCategory = function(arr, category){
		var filterArr = arr.filter(function(item){
			return item.category === category;
		});

		return filterArr
	};

	var resetFilterClass = function(){
		var itemList = $('.menu-container').find('.name');

		itemList.each(function(i){
			if($(itemList[i]).hasClass('vegan')){
				$(itemList[i]).toggleClass('vegan');
			}else if($(itemList[i]).hasClass('gf')){
				$(itemList[i]).toggleClass('gf');
			}else if($(itemList[i]).hasClass('cf')){
				$(itemList[i]).toggleClass('cf');
			}
		});
	};

	var totalOrder = function(){
		var orderFood = ($('.order-container').find('.order-name'))
		var priceTotal = 0;
		orderFood.each(function(i){
			priceTotal += parseFloat(($(this).attr('data-price')));


		})
			
			return priceTotal;

	}

	var updateTotal = function(total){
		$('.total-display h2').html('Total: $' + total.toFixed(2));
	}


	//Classes
	var Food = function(){

	};
	Food.prototype.isVegan = function(){
	        for(var i = 0; i < this.foodItems.length; i++){
	                if(!this.foodItems[i].vegan){
	                        return false;
	                }

	        }

	        return true;
	}

	Food.prototype.isGlutenFree = function(){
	        for(var i = 0; i < this.foodItems.length ; i++){
	                if(!this.foodItems[i].glutenFree){
	                        return false;
	                }
	        }

	        return true;
	}

	Food.prototype.isCitrusFree = function(){
	        for(var i = 0; i < this.foodItems.length ; i++){
	                if(!this.foodItems[i].citrusFree){
	                        return false;
	                }
	        }

	        return true;
	}

	var Customer = function(dietaryPreference){
	        this.dietaryPreference = dietaryPreference;
	}

	Customer.prototype.toString = function(){
	        return 'Dietary preference: ' + this.dietaryPreference;
	}

	var Drink = function(name, description, category, price, foodItems){
	        this.name = name;
	        this.description = description;
	        this.category = category;
	        this.price = price;
	        this.foodItems = foodItems;
	};
	Drink.prototype = new Food();

	Drink.prototype.toDOMString = function(){
	        var descripOpen = '<p class="item-descrip">';
	        var descrip = '<span class ="name">' + this.name + '</span> - ' + this.description + ' with ';
	        var foodItemStr = '';
	        var priceStr = '<p class="item-price">$' + this.price + '</p>';
			
			for(var i = 0; i < this.foodItems.length; i++){
	        	foodItemStr += this.foodItems[i].toString();
	        }

	        foodItemStr = foodItemStr.substring(0, foodItemStr.length - 1);

	        return descripOpen + descrip + foodItemStr + priceStr;
	}

	var FoodItem = function(name, calories, vegan , glutenFree, citrusFree){
	        this.name = name;
	        this.calories = calories;
	        this.vegan = vegan;
	        this.glutenFree = glutenFree;
	        this.citrusFree = citrusFree;
	}

	FoodItem.prototype.toString = function(){
	        var nameStr = this.name;

	        return ' ' + nameStr + ',';
	}

	var Menu = function(plates){
	        this.plates = plates;
	}

	var Order = function(obj){
	     this.orderItem = obj;
	}

	var Plate = function(name, description, category, price ,foodItems){
	        this.name = name;
	        this.description = description;
	        this.category = category
	        this.price = price;
	        this.foodItems = foodItems;
	};
	Plate.prototype = new Food()
	Plate.prototype.toDOMString = function(){
	        var descripOpen = '<p class="item-descrip">';
	        var descrip = '<span class="name">' + this.name + '</span> - ' + this.description + ' with ';
	        var foodItemStr = '';
	        var priceStr = '<p class="item-price">$' + this.price + '</p>';
			
			for(var i = 0; i < this.foodItems.length; i++){
	        	foodItemStr += this.foodItems[i].toString();
	        }

	        foodItemStr = foodItemStr.substring(0, foodItemStr.length - 1);

	        return descripOpen + descrip + foodItemStr + priceStr;

	}


	//Handlers
	blink($('#logo'), 'blink', 1000);

	$(document).on('click', '.menu-section-head', function(){
		$(this).siblings('.menu-section').slideToggle();
	});

	$(document).on('click', '.item-descrip', function(){
		var targetName = $(this).find('.name').text();
		for(var i = 0; i < menuItems.length; i++){	
			if(targetName === menuItems[i].name){
				addToOrder(menuItems[i].name, menuItems[i].price);
			}
		}

		totalOrder();

	});

	$(document).on('click', '.order-name', function(){
		$(this).next().remove();
		$(this).remove();

		updateTotal(totalOrder());
	});


	//Filters
	$(document).on('click', '.filter-v', function(){
		var vArr = menuItems.filter(function(item){
			return item.isVegan();
		});

		highlightMenuItem(vArr, 'vegan');
	});

	$(document).on('click', '.filter-gf', function(){
		var vArr = menuItems.filter(function(item){
			return item.isGlutenFree();
		});

		highlightMenuItem(vArr, 'gluten free');
	});

	$(document).on('click', '.filter-cf', function(){
		var vArr = menuItems.filter(function(item){
			return item.isCitrusFree();
		});

		highlightMenuItem(vArr, 'citrus free');
	});

	var menuCreate = function(){
                var menuArr = [];

                //Burritos
                var chxBurrito = [];

                chxBurrito.push(new FoodItem('chicken', 10000, false, false, false));
                chxBurrito.push(new FoodItem('beans', 10, true, true, true));
                chxBurrito.push(new FoodItem('rice', 20, true, true, true));

                var chickenBurrito = new Plate('Chicken Burrito',
                        'really freaking delicious burrito', 'burrito', 9.99, chxBurrito);

                var stkBurritoItems = [];

                stkBurritoItems.push(new FoodItem('steak' , 750 , false, true, true));
                stkBurritoItems.push(new FoodItem('cheese' , 500 , false, true , true));
                stkBurritoItems.push(new FoodItem('beans', 10, true, true, true));
                stkBurritoItems.push(new FoodItem('rice', 20, true, true, true));

                var steakBurrito = new Plate('Steak Burrito' ,
                        'un burrito gordo' , 'burrito' , 9.99 , stkBurritoItems );

                var beanAndcheese = [];

                beanAndcheese.push(new FoodItem('beans', 100 , true , true , true));
                beanAndcheese.push(new FoodItem('cheese' , 500 , false , true , true));

                var beanBurrito = new Plate ('Bean and Cheese Burrito' ,
                        'Eduardo\'s favorite made' , 'burrito' , 5.99 , beanAndcheese);

                //Tacos

                var pastor = [];

                pastor.push(new FoodItem('carne al pastor' , 400 , false , true , true));
                pastor.push(new FoodItem('onion' , 50 , true , true , true ));
                pastor.push(new FoodItem('cilantro' , 10 , true , true , true));

                var tacoPastor = new Plate ('Taco al Pastor'
                        , 'delicious taco made' , 'taco' , 2.99 , pastor);

                var asada = [];

                asada.push(new FoodItem('carne asada' , 400 , false , true , true));
                asada.push(new FoodItem('onion' , 50 , true , true , true ));
                asada.push(new FoodItem('cilantro' , 10 , true , true , true));

                var tacoAsada = new Plate ('Taco de Asada' ,
                        'bomb taco made' , 'taco' , 2.99 , asada);

                var seafood = [];

                seafood.push(new FoodItem('special salsa' , 100 , true , true , false));
                seafood.push(new FoodItem('some kind of fish' , 200 , false , true , true));

                var tacoSeafood = new Plate ('Taco de Camarones' , 'eduardo\'s catch of the day made' , 'taco' , 2.99 , seafood);

                //Nachos

                plainNacho = [];

                plainNacho.push(new FoodItem('tortilla chips' , 300 , true , true , true));
                plainNacho.push(new FoodItem('guac' , 300 , true , true , false));
                plainNacho.push(new FoodItem('salsa' , 100 , true , true , false));
                plainNacho.push(new FoodItem('beans' , 200 , true, true , true));
                plainNacho.push(new FoodItem('cheese' , 300 , false , true , true));

                var nachos = new Plate('Plain Nachos' , 'classic nachos made' , 'nacho' , 7.99 , plainNacho);

                //Drinks
                var margaritaItems = [];
                margaritaItems.push(new FoodItem('tequila' , 300 , true , true, true));
                margaritaItems.push(new FoodItem('lime' , 50 , true , true , false));
                margaritaItems.push(new FoodItem('orange juice' , 60 , true , true , false));
                margaritaItems.push(new FoodItem('triple sec' , 60 , true , true, true));
                var margarita = new Drink('Margarita', 'delicious margarita', 'drink',
                         8.00 , margaritaItems);

                cervezaItems = [];

                cervezaItems.push(new FoodItem('beer' , 300 , true , false ,true));
                var cerveza = new Plate('Cerveza de Mexico' , 'bebida tipica de mexico' , 'drink' ,
                 2.99 , cervezaItems);

                tequilaItems = [];

                tequilaItems.push(new FoodItem('tequila' , 100 , true , true , true));
                tequilaItems.push(new FoodItem('lime' , 10 , true , true , false));
                tequilaItems.push(new FoodItem('salt' , 5 , true , true , true));
                var tequilashot = new Plate('Tequila' , 'delicious shot of tequila' , 'drink' , 1.00 , tequilaItems);

                menuArr.push(chickenBurrito, steakBurrito, beanBurrito ,
                        tacoPastor, tacoAsada, tacoSeafood,
                        nachos,
                        cerveza , margarita , tequilashot );


                return menuArr;

	};

	//Main
	menuItems = menuCreate();
	menuInit();

})




