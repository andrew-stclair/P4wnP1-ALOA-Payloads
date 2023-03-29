//Hogwarts Legacy Automated Potions
//Enter the number of each type of potion in the job array
//and hit run
console.log("Crafting");
layout("US");
typingSpeed(100,200);

//Job
var job = [
    {recipe: "wiggenweld",      count: 0}, // Max 25
    {recipe: "edurus",          count: 0},
    {recipe: "maxima",          count: 0}, // Max 12
    {recipe: "invisibility",    count: 0},
    {recipe: "focus",           count: 0},
    {recipe: "thunderbrew",     count: 0}
]

//Recipes
var recipes = {
    wiggenweld: {
        x: 0.717,
        y: 0.190,
        delay: 15000
    },
    edurus: {
        x: 0.790,
        y: 0.190,
        delay: 30000
    },
    maxima: {
        x: 0.863,
        y: 0.190,
        delay: 30000
    },
    invisibility: {
        x: 0.936,
        y: 0.190,
        delay: 60000
    },
    focus: {
        x: 0.717,
        y: 0.320,
        delay: 60000
    },
    thunderbrew: {
        x: 0.790,
        y: 0.320,
        delay: 90000
    }
}

function doRecipe(item) {
    for(var i=0; i < item['count']; i++) {
        moveTo(recipes[item['recipe']]['x'],recipes[item['recipe']]['y']);
        delay(100);
        click(BT1);
        delay(recipes[item['recipe']]['delay'] + 1000);
        type("f");
        delay(1000);
    }
}

job.forEach(doRecipe);
moveTo(0.5,0.5);
