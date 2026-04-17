

const sayHello = (req,res,next) => {
    res.send("<h1> Hello World</h>")
    next()
}


module.exports = sayHello;
