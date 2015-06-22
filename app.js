var recipe_text = "";

for (var i = 0; i < recipes.length; i++) {
    var recipe = recipes[i];
    recipe_text += recipe["id"] + ":" + recipe["name"] + "\n";
}

alert(recipe_text);
