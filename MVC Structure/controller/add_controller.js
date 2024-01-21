exports.getAdd = (req, res ) => {
    res.render('add')
}

exports.postAdd = (req, res) => {
    // console.log(req.body.numberOne)
    // console.log(req.body.numberTwo)

    let numOne = req.body.numberOne
    let numTwo = req.body.numberTwo
    let sum = parseInt(numOne) +  parseInt(numTwo)
    console.log(sum);
    
    res.status(200).send({
        sum: sum
    })
}