
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('../db')
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 8080
const app = express()
const cors = require('cors')
const schema = require('./schema')
const Question = require('../db/models/questions')
const nodemailer = require('nodemailer')

module.exports = app

// eslint-disable-next-line camelcase
const express_graphql = require('express-graphql')

app.use(cors())
app.use(bodyParser.json())

const createApp = () => {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use(compression())

  app.use(
    '/graphql',
    express_graphql({
      schema: schema,
      graphiql: true
    })
  )


  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

app.get('/questions', async (req, res, next) => {
  const questions = await Question.findAll({
    order: [['id', 'ASC']]
  })
  res.send(questions)
})

app.post('/send', function(req, res, next) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EmailUser,
        pass: process.env.EmailPassword
      }
    })

    const mailOptions = {
      from: `${req.body.email}`,
      to: `${req.body.email}`,
      subject: `Meal.Match: List of ingredients!`,
      text: `${req.body.message}`,
      replyTo: process.env.EmailUser
    }

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error('there was an error: ', err)
      } else {
        console.log('here is the res: ', res)
      }
    })

    res.json('It worked?!?!')
  } catch (error) {
    console.error(error)
  }
})

app.post('/sendtext', (req, res, next) => {
  const accountSid = process.env.TwilioAccountSID
  const authToken = process.env.TwilioAuthToken
  const text = require('twilio')(accountSid, authToken)
  const messageToSend = `Thanks for using Meal.Match! Here are the ingredients that you need for ${
    req.body.name
  }! ${req.body.ingredients.join(',')} Full recipe: ${req.body.url}`

  text.messages
    .create({
      body: JSON.stringify(messageToSend),
      from: process.env.TwilioFrom,
      to: JSON.stringify(req.body.to)
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err))
})
// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== 'production') require('../../secrets')

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )
}

const syncDb = () => db.sync()

async function bootApp() {
  await sessionStore.sync()
  await syncDb()
  await createApp()
  await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}