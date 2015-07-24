import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import methodOverride from 'method-override';
import exphbs from 'express-handlebars';
import router from './routes/router';
import env from './env.json';

var config = env[process.env.NODE_ENV || 'development']

var app = express();

// static files
app.use(express.static('public'));

// Body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cookie parsing
app.use(cookieParser(config.app.secret))

// CSRF
app.use(csrf({ cookie: true }));
app.use((req, res, next) => {
  res.locals.csrf = req.csrfToken();
  next();
});

// Request methods
app.use(methodOverride('_method'))

// View engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
router.initialize(app);

app.listen(config.app.port);
