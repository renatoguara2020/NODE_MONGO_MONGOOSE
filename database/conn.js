const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo_mongoose');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));