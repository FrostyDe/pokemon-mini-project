const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {

    //Generate random number
    rand = Math.floor(Math.random() * 100);

    // Check random number
    var isPrime = function(n){
        for (let i = 2; i * i <= n; i++)
            if (n % i === 0)
            return false; 
        return n > 1;
    }

    if(isPrime(rand) == false){
        res.send({data: "release fail", number: rand})
    } else{
        res.send({data: "release success", number: rand});
    }
})

module.exports = router;