import React from "react";
import "../css/HowToUse.css";

const recipes = [
  {
    title: "Ginseng Lemonade",
    instructions: "Mix ¼-½ tsp of ginseng powder with 16oz of lemonade",
  },
  {
    title: "Ginseng Oatmeal",
    instructions: "Sprinkle ¼-½ teaspoon of ginseng powder on your oatmeal",
  },
  {
    title: "Ginseng Raspberry Tea",
    instructions:
      "Mix ¼-½ teaspoon of ginseng powder with ½ teaspoon of raspberry tea",
  },
  {
    title: "Ginseng Soup",
    instructions:
      "Sprinkle ¼-½ teaspoon ginseng powder in any soup of your choice",
  },
  {
    title: "Tropical Ginseng Smoothie",
    instructions:
      "Add all the ingredients below to the blender. Start on a low speed until smooth. If needed, gradually add higher speed until smooth.",
    ingredients: [
      "8oz coconut water",
      "½ cup fresh mango",
      "½ cup fresh pineapple chunks",
      "½ teaspoon ginseng powder",
      "½ teaspoon cinnamon",
    ],
  },
];

const HowToUse = () => {
  return (
    <div className="how-to-use-page py-5">
      <h1 className="section-title text-center mb-3 mt-1">Ginseng Recipes</h1>
      <div className="recipe-list row justify-content-center">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="col-md-6 col-lg-5 mb-4">
            <div className="recipe-card shadow-sm p-4 rounded bg-white h-100">
              <h4 className="recipe-title mb-2">{recipe.title}</h4>
              <p className="recipe-instructions mb-2">{recipe.instructions}</p>
              {recipe.ingredients && (
                <>
                  <p className="mb-1 fw-bold">Ingredients:</p>
                  <ul className="ingredient-list">
                    {recipe.ingredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
