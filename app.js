import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import exphbs from 'express-handlebars';
import router from './routes/router';

var app = express();

app.use(express.static('public'));

app.use(methodOverride('_method'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router.initialize(app);

app.listen(8080);
