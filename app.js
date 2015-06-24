var recipe_text = "";
var parseQueryString = function parseQueryString(options) {
    var query_string = window.location.search.slice(1);
    var parameters = {};
    var pairs = query_string.split("&");
    for (var i in pairs) {
        var pair = pairs[i].split("=");
        parameters[pair[0]] = pair[1];
    }
    return parameters;
};

function displayAllRecipes() {
    for (var i = 0; i < recipes.length; i++) {
        var recipe = recipes[i];
        recipe_text += recipe["id"] + ":" + recipe["name"] + ":" + recipe["explain"] + "\n";
    }
    alert(recipe_text);
}

function displayRecipe(id) {
    for (var i = 0; i < recipes.length; i++) {
        var recipe = recipes[i];
        if (recipe["id"] === id) {
            recipe_text += recipe["id"] + ":" + recipe["name"] + ":" + recipe["explain"] + "\n";
            alert(recipe_text);
            return;
        }
    }
    alert("Recipe not found: " + id);
}

var parameters = parseQueryString();
var target_id = parameters["id"];

if (target_id) {
    displayRecipe(parseInt(target_id));
} else {
    displayAllRecipes();
}


