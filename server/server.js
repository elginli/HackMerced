const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})
app.listen(80, () => {console.log("Server started on port 80")})


//testing
const { auth } = require('express-openid-connect');
console.log(auth)

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '-RThkMAAJy31ASdb0FgVHGfrQNcKD1NcxvzD0K9bQZxxw5bgOkXRc2oC5vG4ek3Mv',
  baseURL: 'http://localhost:3000',
  clientID: '18pwbDRgJaFWrqqyv7TbzOvSBkFlZ1zx',
  issuerBaseURL: 'https://dev-xo2t3urnf411ozm0.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });