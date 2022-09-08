const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

Recipe.create({
    title: "Brioche Breakfast Bake w/ Crispy Bacon",
    level: ['Easy Peasy'],
    ingredients: ['Eggs, Double Cream', 'Milk', 'Maple Syrup', 'Vanilla Extract', 'Punnet Blueberries', 'Brioche Rolls', 'Pecan Halves', 'Bacon', 'Icing Sugar'],
    cuisine: 'American',
    dishType: ['Breakfast'],
    image: '',
    duration: 25,
    creator: 'Cassie Best',
    created: Date.now
  })
  .then(addedRecipe => console.log(`${addedRecipe} has been added to the DB`))
  .catch(err => console.log(err))