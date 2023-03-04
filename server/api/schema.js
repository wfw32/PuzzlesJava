
const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
} = require('graphql')

const Recipe = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    uri: {type: GraphQLString},
    url: {type: GraphQLString},
    label: {type: GraphQLString},
    image: {type: GraphQLString},
    calories: {type: GraphQLFloat},
    totalTime: {type: GraphQLFloat},
    ingredientLines: {type: new GraphQLList(GraphQLString)},
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    searchRecipes: {
      type: new GraphQLList(Recipe),
      args: {
        food: {type: GraphQLString},
      },
      resolve(parentValue, args) {
        return axios
          .get(
            `https://api.edamam.com/search?q=${args.food}&from=0&to=50&app_id=${process.env.ApiKey3Id}&app_key=${process.env.ApiKey3Key}`
          )
          .then((res) => res.data)
          .then((data) => data.hits.map((recipes) => recipes.recipe))
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})