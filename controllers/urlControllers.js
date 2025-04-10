const fs = require("fs")
const path = require("path")
const shortid = require('shortid');
const dbPath = path.resolve("model", "data.json")

//sent routes controllers
const sent = (req, res) => {
    const data = req.query.text
    const id = shortid.generate();
    const newData = {
        id, original: data
    }

    if(!data){
      return  res.render("index",{short:"not found"})
    }
    //reading the database data
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.send(err)
        }

        let finalData = JSON.parse(data)
        finalData.push(newData)

        //writing the data into the database finally
        fs.writeFile(dbPath, JSON.stringify(finalData, null, 2), (err) => {
            if (err) {
                return
            }

            const fullUrl = req.protocol + '://' + req.get('host') + '/goto/' + id
    res.render("index",{short:fullUrl})

        })
    })
}

//redirecting controllers
const goto = (req, res) => {
    const userID = req.params.id

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.send(err)
        }

        const finalData = JSON.parse(data)
        const filtered = finalData.filter((d) => d.id == userID)
        console.log(filtered.original)
        // res.json(filtered)
        return res.redirect(filtered[0].original)//Redirecting into the any page

    })
}

module.exports = { sent, goto }