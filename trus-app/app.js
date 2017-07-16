var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'SECRET27265378TOKEN'}));

/* GET home page. */
app.get('/', function(req, res, next) {
	if (req.session.numeric) {
  res.render('index', { title: 'Trussle', sesh: req.session.numeric  });
} else 
	res.render('index', { title: 'Trussle' });
});

app.anum = {
    1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h',
    9: 'i', 10: 'j', 11: 'k', 
    12: 'l', 13: 'm', 14: 'n',15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 
    21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'}

app.testLogic = function(inp) {
    let y = [];
    let z = [];
    var x = inp.split(' ').map(Number);
    for (i = 0; i < x.length; i++) {
      if (x[i] < 26) {
        y.push(x[i]);
      } else {
        while (x[i] > 26) {
          x[i] = x[i]/ 27;
        }
        y.push(x[i]);
      }
    }
    for (k=0; k< y.length; k++) {
      z.push(app.anum[y[k]] || ' ')
    }
    z = z.join("");
    return z;
}

app.logic = function(req, res) {
  req.session.numeric = req.body.numeric;
  var initial = req.body.numeric; 
  console.log(typeof initial) 
  var hasNumber = /\d/;
  if (!initial) {
    z = "Please type something ! Remember, it has to be a number or space, use 28 for a wordspace.";
    sesh = req.body.numeric;
    res.render('index', { output: z, sesh:req.body.numeric });
  }
  if (/[a-zA-Z,.?;:'"&^()^%$£@!`~|<>+=']/.test(initial)) {
    z = "Sorry, please only use numbers and spaces";
    res.render('index', { output: z, sesh:req.body.numeric });
  } else {
    let y = [];
    let z = [];
    var x = initial.split(' ').map(Number);
    for (i = 0; i < x.length; i++) {
      if (x[i] < 26) {
        y.push(x[i]);
      } else {
        while (x[i] > 26) {
          x[i] = x[i]/ 27;
        }
        y.push(x[i]);
      }
    }
    for (k=0; k< y.length; k++) {
      z.push(app.anum[y[k]] || ' ')
    }
    z = z.join("");
    res.render('index', { title: 'Trussle', output: z, sesh:req.body.numeric});
  } 
}

app.clear = function(res) {
  res.render('index', { output: '', sesh:''});
}

/* POST home page. */
app.post('/', function(req, res) {
  app.logic(req, res);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000);

module.exports = app;

