const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post("/", (req, res) => {
    //set probability 50%
    rand = Math.round(Math.random());
    var id = parseInt(req.body.id);

    if(id == 0){
      res.send("invalid id")
    } else {
      if(rand == 0){
        res.send("catch fail");
      }
      else {
        var getPokemonData = function(id){
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resData => {
              const catched = ({
                "name" : resData.data.name,
                "img"  : resData.data.sprites.other.home.front_default,
              })
              res.send(JSON.stringify(catched))})
            .catch((error) => {
                console.error(error);
                res.status(500);
            })
        };

        getPokemonData(id);
      }
      
    }
})

module.exports = router;