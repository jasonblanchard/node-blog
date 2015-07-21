import express from 'express';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import posts from './post-fixtures';
import router from './router/router';

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router(app);

app.listen(8080);
