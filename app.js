import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

let hitList = [];

const data = {
    cursedName: "",
    cursedReason: "",
    hitList: [],
}

function addToHitList (victimData) {
    hitList.push(victimData);
    return hitList;
}


app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    let newData = {}
    newData.cursedName = req.body["cursed-name"];
    newData.cursedReason = req.body["cursed-reason"];
    addToHitList(newData);
    data.hitList = hitList;

    data.cursedName = req.body["cursed-name"];
    data.cursedReason = req.body["cursed-reason"];

    
    res.render("index.ejs", data);
});

app.get("/submit", (req, res) => {
    res.redirect("/")
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})


app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}!`)
});