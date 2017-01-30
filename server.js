/**
 * React form server.The simplest server ever.
 *
 * This Express application serves the contact form with its
 * assets and processes the submission. A lot of aspects
 * of a real life application have been omitted here
 * for the sake of simplicity such as form validation and
 * security.
 */

require('node-jsx').install({extension: '.jsx'})
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const React = require('react')
const PostMailFormFactory = React.createFactory(require('./src/__.jsx'))

// Exposes public assets such as index.html and JavaScript files.
app.use(express.static('public'))

// Sets the path that stores views and defines the template engine (Jade).
app.set('views', './views')
app.set('view engine', 'jade')

// Returns the form.
app.get('/', function (req, res) {
  const PostMailForm = React.renderToString(PostMailFormFactory())
  res.render('index', { Content: PostMailForm })
})

// Adds support for JSON-encoded bodies used in POST requests.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Processes the form submission.
app.post('/send', function (req, res) {
  // Here is an example of how we could send the form data by email.
  // var Email = require('emailjs/email')
  // var server = Email.server.connect({
  //   host: 'localhost'
  // })
  // server.send({
  //   'text': body,
  //   'from': req.body.email,
  //   'to': someone@example.com,
  //   'reply-to': req.body.email,
  //   'subject': 'Tell us about your project: ' + req.body.company
  // }, function(error) {
  //   if (error) {
  //     return res.send({status: 'KO'})
  //   } else {
  //     return res.send({status: 'OK'})
  //   }
  // })

  // For this example, we just log the form data and return OK.
  console.log(req.body)
  // This is a dummy loop to simulate a slow connection.
  for (i = 0; i < 99999999; i++) { }
  // Return a successful response.
  return res.send({status: 'OK'})
})

// Starts the web application.
app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function () {
  console.log(`App is running at http://localhost:${app.get('port')}`)
})
