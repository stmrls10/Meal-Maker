const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this.courses.appetizers = appetizers;
  },
  set mains(mains){
    this.courses.mains = mains;
  },
  set desserts(desserts){
    this.courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, for a total price $${totalPrice} dollars`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 4.50);
menu.addDishToCourse('appetizers', 'fries', 5.00);

menu.addDishToCourse('mains', 'steak', 14.00);
menu.addDishToCourse('mains', 'salmon', 16.50);
menu.addDishToCourse('mains', 'tofu', 12.00);

menu.addDishToCourse('desserts', 'ice cream', 6.00);
menu.addDishToCourse('desserts', 'waffles', 7.50);
menu.addDishToCourse('desserts', 'banana split', 8.00);


const meal = menu.generateRandomMeal();
console.log(meal);




