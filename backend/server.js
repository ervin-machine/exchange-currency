const express = require('express');
const app = express();
const session = require('express-session');
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
require('express-async-errors')
const cors = require('cors')
const routes = require('./routes');

// Define allowed origins (e.g., http://localhost:3000 for React frontend)
const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:5173'];

// CORS configuration
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    target: 'http://localhost:5000/', //original url
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies or authorization headers
    optionsSuccessStatus: 204, // For legacy browsers
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
};

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var isProduction = process.env.NODE_ENV === 'production';

//------------ Express session Configuration ------------//
app.use(
    session({
        secret: 'secret',
        cookie: {maxAge: 60000},
        resave: true,
        saveUninitialized: true
    })
);

//------------ Routes ------------//
app.use('/api', routes);

//------------ middleware ------------//
app.use(require('./middlewares/ErrorHandler'))

app.use((req, res, next) => {
	res.status(404).json({
		code: 404,
		message: 'Not found',
	})
})

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
    app.use(function(err, req, res, next) {
      console.log(err.stack);

      res.status(err.status || 500);

      res.json({'errors': {
        message: err.message,
        error: err
      }});
    });
  }

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        'errors': {
            message: err.message,
            error: {}
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, function() {
    console.log(`Server running on PORT ${PORT}`);
});
