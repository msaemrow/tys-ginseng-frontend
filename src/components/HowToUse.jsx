import React from "react";
import "../css/HowToUse.css";

const HowToUse = () => {
  return (
    <div className="how-to-use-page">
      <h2 className="pt-5 text-decoration-underline">How to use Ginseng</h2>
      <div className="How-to-use-recipe">
        <h4 className="How-to-use-title">Ginseng Lemonade</h4>
        <p className="How-to-use-instructions">
          Mix ¼-½ tsp of ginseng powder with 16oz of lemonade
        </p>
      </div>
      <div className="How-to-use-recipe">
        <h4 className="How-to-use-title">Ginseng Oatmeal</h4>
        <p className="How-to-use-instructions">
          Sprinkle ¼-½ teaspoon of ginseng powder on your oatmeal
        </p>
      </div>
      <div className="How-to-use-recipe pb-4">
        <h4 className="How-to-use-title">Ginseng Raspberry Tea</h4>
        <p className="How-to-use-instructions mb-0">
          Mix ¼-½ teaspoon of ginseng powder with ½ teaspoon of raspberry tea
        </p>
      </div>
      <div className="How-to-use-recipe pb-4">
        <h4 className="How-to-use-title">Tropical Ginseng Smoothie</h4>
        <p className="How-to-use-instructions mb-0">
          Add all the ingredients below to the blender. Start on a low speed
          until smooth. If needed, gradually add higher speed until smooth.
        </p>
        <p className="mb-0">Ingredients:</p>
        <p className="mb-0">- 8oz coconut water</p>
        <p className="mb-0">- ½ cup fresh mango</p>
        <p className="mb-0">- ½ cup fresh pineapple chunks</p>
        <p className="mb-0">- ½ teaspoon ginseng powder</p>
        <p className="mb-0">- ½ teaspoon cinnamon</p>
      </div>
      <div className="How-to-use-recipe pb-4">
        <h4 className="How-to-use-title">Ginseng Soup</h4>
        <p className="How-to-use-instructions mb-0">
          Sprinkle ¼-½ teaspoon ginseng powder in any soup of your choice
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
