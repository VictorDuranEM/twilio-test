const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  sendSMS()
  res.send('Message send!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function sendSMS() {
  require('dotenv').config()

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhone = process.env.FROM_PHONE
  const toPhone = process.env.TO_PHONE

  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'Hello there',
      from: fromPhone,
      to: toPhone
    })
    .then(message => console.log(message.sid));
}