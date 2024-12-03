const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const productsRouter = require('../e-commerce-backend/routes/product');
const wishlistRouter = require('../e-commerce-backend/routes/wishlist');
const cartRouter = require('../e-commerce-backend/routes/cart');
const inventoryRouter = require('../e-commerce-backend/routes/inventory');


mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



app.use('/products', productsRouter);
app.use('/wishlist', wishlistRouter);
app.use('/cart', cartRouter);
app.use('/inventory', inventoryRouter);
