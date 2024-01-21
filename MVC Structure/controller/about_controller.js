exports.getAbout = (req, res) => {
    let dbData = ['hello', "hy", "tata", "byby"]
    res.render('about', {
        dbData
    })
} 