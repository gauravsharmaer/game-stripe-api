const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MhtWwSJ01cJVv4Aeb4PWa3DcAoTUz6TLh9kuUYZ7YEetupZpwMVdmOWqa8quO9ehknl7T6G6CFbZNQCT04JuRoh00nGX7mG5Z');

const app = express();
app.use(cors());
app.use(express.static('public'))
app.use(express.json());

app.post('/checkout', async (req, res) => {
    const items = req.body.items;
    let lineItems = []
    items.forEach(item => {
        lineItems.push(
            {
                price: item.ids,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create(
        {
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        }
    )

    res.send(JSON.stringify({
        url: session.url
    }))
})


app.listen(4000, () => console.log('listening to port'))