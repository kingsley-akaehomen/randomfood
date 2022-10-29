const express = require("express");
const _ = require("lodash");

const app = express();

//Defining an endpoint that that randomly predicts what to eat....
app.get("/", (req, res) => {
    res.send({
        developer: 'Kingsley',
        email: 'thep0cketjuice@gmail.com'
    });
})

app.get("/chao", (req, res) => {
    const morning = ["akara and pap", "bread and tea", "waffles and coffee", "cornflakes"];
    const afternoon = ["meatpie and cola", "fried-rice", "Jollof-rice", "porridge", "beans and plantain"];
    const evening = ["poundo and okro", "eba and okro", "yam and egg", "rice and gravy"]

    res.json({
        breakfast: _.sample(morning),
        lunch: _.sample(afternoon),
        dinner: _.sample(evening)
    })

})

app.listen(5000, () => console.log(`API serving is running.....`));