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

for (var i = 0; i < recipes.length; i++) {
    var recipe = recipes[i];
    recipe_text += recipe["id"] + ":" + recipe["name"] + "\n";
}

alert(recipe_text);
