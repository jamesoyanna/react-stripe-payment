const cors = require('cors');
const express = require('express');
const stripe = require("stripe")(
  ""
);
const uuid = require("uuid/v4");

const app= express();

app.use(express.json());
app.use(cors())

//Routes
app.get('/', (req, res)=>{
    res.send('It works great !!!')
})


app.post('/payment', (req, res)=>{
    const {product, token} = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    const idempotencyKey = uuid();

    return stripe.customers.create({
        email: token.eamil,
        source: token.id
    }).then(customer =>{
        stripe.charges.create({
            amount: product.price *100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }

        }, {idempotencyKey})
    })
    .then(result =>res.status(200).json(result))
    .catch(err = console.log(err))
})






//listen
app.listen(2000, ()=> console.log("Listening on port 2000"));