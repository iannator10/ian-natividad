const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
    email: String,
    subject: String,
    message: String
});

const contactModel = mongoose.model("contactModel", contactSchema);

mongoose.connect('mongodb+srv://iannator10:Passwordniian@@@ign-web-contact-7ixha.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => res.render('index'));
app.get('/contact', (req, res) => res.render('contact'));
app.post('/api/contact', async (req, res) => {
    let contact = new contactModel(req.body)

    try {
        await contact.save();
        res.json({ msg: "Sent Successfully" })
    } catch (err) {
        res.status(500).send(err);
        res.json({ msg: "Message Not Sent" })
    }
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));