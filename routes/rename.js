const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    const str = req.body.name;
    const number = req.body.id;

    // return fibonacci number
    var fib = function(n){
        if (n < 1){
            return 0;
        } else if (n == 1){
            return 1;
        } else {
            var arr = fib(n - 1) + fib(n - 2);
            return arr;
        }
    }

    res.send(JSON.stringify(str + '-' + fib(number)));
})

module.exports = router;