var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TRUSSLE' });
});

router.post('/', function(req, res, next) {
  var v = req.body.numeric;  
  console.log(v)
  if (!v.match(/[1234567890 ]/i)) {
  		z = "Sorry, please only use numbers and spaces";
  		 res.render('index', { output: z });

 		}  else {
	  const anum={
		1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h',
		9: 'i', 10: 'j', 11: 'k', 
		12: 'l', 13: 'm', 14: 'n',15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 
		21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'}
	  let y = [];
	  let z = [];
	  var x = v.split(' ').map(Number);
	  console.log(x)
	  for (i=0; i<x.length; i++) {
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
	    z.push(anum[y[k]] || ' ')
	  }
	  z = z.join("");
	  res.render('index', { title: 'TRUSSLE', output: z });
		}	
});

module.exports = router;
