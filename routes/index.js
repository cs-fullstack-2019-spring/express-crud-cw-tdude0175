var express = require('express');
var router = express.Router();
var CrimeCollection = require('../models/crimesModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crime Index' });
});

router.get('/getByCategoryCode/:code/:name', (req,res)=>
{
  CrimeCollection.find({category:{code:req.params.code,name:req.params.name}} , (errors,results)=>
  {
    if(errors) res.send(errors);
    else
      {
        console.log(results);
      res.render('results',{list:results});
    }
  })
});

router.get('/updateDateByID/:id/:date', (req,res)=>
{
  CrimeCollection.updateOne({"crime.id":parseInt(req.params.id)},
      {date:req.params.date},(errors,results)=>
      {
        if(errors) res.send(errors);
        else
          {
            console.log(results);
            res.send(results)
          }
      });
});

router.get('/deleteByPersistantId/:id',(req,res)=>
{
  CrimeCollection.deleteOne({'crime.persistent_id':req.params.id}, (errors)=>
  {
    if(errors) res.send(errors);
    else res.send('The Deed Is Done');
  });
});

module.exports = router;
