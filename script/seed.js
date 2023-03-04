
'use strict'

const db = require('../server/db')
const {Question} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const questions = await Promise.all([
    Question.create({
      id: 7,
      question: 'Max time you would like to spend cooking:',
      image: [
        'https://i.ibb.co/Kq6HMB4/30.png',
        'https://i.ibb.co/VJ0TRGp/60.png',
        'https://i.ibb.co/kggKBsr/90.png',
        'https://i.ibb.co/28gKhbZ/120.png'
      ],
      name: ['< 30 mins', '< 60 mins', '< 90 mins', '120 mins +'],
      max: 1
    }),
    Question.create({
      id: 1,
      question: 'What dairy do you have?',
      image: [
        'https://images.pexels.com/photos/94443/pexels-photo-94443.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.unsplash.com/photo-1519411792752-25c2468cccb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/373882/pexels-photo-373882.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
      ],
      name: ['Butter', 'Cheese', 'Milk', 'Yogurt'],
      max: 3
    }),
    Question.create({
      id: 2,
      question: 'What meats and/or proteins do you have?',
      image: [
        'https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/8439/food-eggs.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1881336/pexels-photo-1881336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1359305/pexels-photo-1359305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/265393/pexels-photo-265393.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
      ],
      name: [
        'Bacon',
        'Beef',
        'Chicken',
        'Eggs',
        'Pork',
        'Steak',
        'Tofu',
        'Turkey'
      ],
      max: 2
    }),
    Question.create({
      id: 3,
      question: 'What seafood do you have?',
      image: [
        'https://images.unsplash.com/photo-1537088995-030dbc4d919a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1553659971-f01207815844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1503414382497-bfd17f3c2e41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1515503249716-e0175c9d8fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        'https://images.pexels.com/photos/128388/pexels-photo-128388.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.unsplash.com/photo-1528502499757-107ea9369104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1530260626688-048279320445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      ],
      name: [
        'Clams',
        'Crab',
        'Lobster',
        'Oysters',
        'Salmon',
        'Scallops',
        'Shrimp',
        'Tuna'
      ],
      max: 2
    }),
    Question.create({
      id: 4,
      question: 'What vegetable(s) do you have?',
      image: [
        'https://images.pexels.com/photos/539431/pexels-photo-539431.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.unsplash.com/photo-1522687297221-2d71f8c50fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1540994587294-487f2ffe18f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.unsplash.com/photo-1438118907704-7718ee9a191a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1546520057-a59c8dcde13b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/37641/carrots-basket-vegetables-market-37641.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/461245/pexels-photo-461245.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/37528/cucumber-salad-food-healthy-37528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/928251/pexels-photo-928251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/185473/pexels-photo-185473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1530364694227-5406cc5c6dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/159250/bulb-closeup-close-up-clove-159250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/51157/potatoes-vegetables-field-eat-51157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1751149/pexels-photo-1751149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/89247/pexels-photo-89247.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/5617/red-tomato-vegetable.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.unsplash.com/photo-1556911259-f9849ab65850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      ],
      name: [
        'Asparagus',
        'Avocado',
        'Bell Peppers',
        'Broccoli',
        'Brussel Sprouts',
        'Cabbage',
        'Carrots',
        'Cauliflower',
        'Corn',
        'Cucumber',
        'Garlic',
        'Green Beans',
        'Lettuce',
        'Mushrooms',
        'Onions',
        'Potatoes',
        'Spinach',
        'Sweet Potatoes',
        'Tomatoes',
        'Zucchini'
      ],
      max: 4
    }),
    Question.create({
      id: 5,
      question: 'What fruit(s) do you have?',
      image: [
        'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/8688/food-blueberries-blueberry.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1047261/pexels-photo-1047261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/314780/pexels-photo-314780.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1258264/pexels-photo-1258264.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
      ],
      name: [
        'Apples',
        'Bananas',
        'Blueberries',
        'Lemons',
        'Limes',
        'Oranges',
        'Raspberries',
        'Strawberries'
      ],
      max: 3
    }),
    Question.create({
      id: 6,
      question: 'What grain(s) and pasta do you have?',
      image: [
        'https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/543730/pexels-photo-543730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://media.istockphoto.com/photos/quinoa-seeds-picture-id815162944?k=6&m=815162944&s=612x612&w=0&h=JkIsjvLOjubG7WOaTSBXSu3defI5zXdzgFyYpcGbcHg=',
        'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://cdn.pixabay.com/photo/2015/05/31/12/55/food-791614__480.jpg'
      ],
      name: [
        'Bread',
        'Noodles',
        'Oats',
        'Pasta',
        'Quinoa',
        'Rice',
        'Tortillas'
      ],
      max: 2
    })
  ])
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed