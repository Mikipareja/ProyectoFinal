const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mikipareja:SXqM3TQAPnnJ6bbU@devcamp.dsimwtg.mongodb.net/?retryWrites=true&w=majority&appName=devcamp', {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Conected to MongoDB');
}).catch((err) => {

    console.err('Error connecting to MongoDB:',);


});

module.exports = mongoose;

