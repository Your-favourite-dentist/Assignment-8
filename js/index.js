const meals = [
  { name: "BBQ Pulled Pork", image: "images/BBQ Pulled Pork.avif" },
  { name: "Beef Tacos", image: "images/Beef Tacos.avif" },
  { name: "Caesar Salad", image: "images/Caesar Salad.avif" },
  { name: "Caprese Sandwich", image: "images/Caprese Sandwich.avif" },
  { name: "Chicken Stir-Fry", image: "images/Chicken Stir-Fry.avif" },
  { name: "Chicken Tikka", image: "images/chicken-tikka.avif" },
  { name: "Creamy Spaghetti Carbonara", image: "images/Creamy Spaghetti Carbonara.avif" },
  { name: "Fresh Onion Soup", image: "images/fresh onion soup.avif" },
  { name: "Greek Moussaka", image: "images/Greek Moussaka.avif" },
  { name: "Honey Garlic Salmon", image: "images/Honey Garlic Salmon.avif" },
  { name: "Lasagna Bolognese", image: "images/Lasagna Bolognese.avif" },
  { name: "Mediterranean Quinoa Bowl", image: "images/Mediterranean Quinoa Bowl.avif" },
  { name: "Pad Thai", image: "images/Pad Thai.avif" },
  { name: "Margherita Pizza", image: "images/photo-pizza.avif" },
  { name: "Shrimp Scampi", image: "images/Shrimp Scampi.avif" },
  { name: "Teriyaki Chicken Bowl", image: "images/Teriyaki Chicken Bowl.avif" },
  { name: "Vegetable Curry", image: "images/vegetable curry.avif" },
  { name: "Classic Beef Burger", image: "images/classic beef burger.avif" },
  { name: "Thai Green Curry", image: "images/Thai Green Curry.avif" },
];

const recipeDetails = {
  "Chicken Tikka": {
    description: "Rich and creamy Indian curry with tender chicken pieces",
    rating: 4.7,
    reviews: 389,
    difficulty: "Intermediate",
    category: "Asian",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan."
    ],
    nutrition: { calories: "450 kcal", protein: "38g", carbs: "24g", fat: "22g", fiber: "4g", sodium: "760mg" },
    tips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice"
    ]
  },
  "BBQ Pulled Pork": {
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    rating: 4.7,
    reviews: 412,
    difficulty: "Easy",
    category: "American",
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving"
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top."
    ],
    nutrition: { calories: "620 kcal", protein: "48g", carbs: "52g", fat: "22g", fiber: "3g", sodium: "1180mg" },
    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months"
    ]
  },
  "Shrimp Scampi": {
  description: "Garlicky shrimp in white wine butter sauce",
  rating: 4.8,
  reviews: 356,
  difficulty: "Easy",
  category: "Seafood",
  prepTime: "10 min",
  cookTime: "15 min",
  servings: "2 people",
  ingredients: [
    "400g large shrimp, peeled",
    "300g linguine pasta",
    "6 cloves garlic, minced",
    "1/2 cup white wine",
    "4 tablespoons butter",
    "2 tablespoons olive oil",
    "Fresh parsley, chopped",
    "Lemon juice and zest",
    "Red pepper flakes"
  ],
  instructions: [
    "Cook linguine according to package directions. Reserve 1 cup pasta water.",
    "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
    "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
    "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
    "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
    "Garnish with parsley, lemon zest, and serve immediately."
  ],
  nutrition: { calories: "520 kcal", protein: "36g", carbs: "54g", fat: "18g", fiber: "3g", sodium: "620mg" },
  tips: [
    "Don't overcook shrimp - they cook very quickly",
    "Use good quality white wine for best flavor",
    "Toss pasta in sauce for maximum flavor absorption",
    "Add extra lemon for bright, fresh taste"
  ]
},
"Caesar Salad": {
  description: "Classic salad with crispy romaine and creamy dressing",
  rating: 4.4,
  reviews: 198,
  difficulty: "Easy",
  category: "Mediterranean",
  prepTime: "15 min",
  cookTime: "0 min",
  servings: "2 people",
  ingredients: [
    "1 large romaine lettuce",
    "1/2 cup Caesar dressing",
    "1/2 cup parmesan cheese, shaved",
    "1 cup croutons",
    "2 anchovy fillets (optional)",
    "Lemon wedges",
    "Black pepper"
  ],
  instructions: [
    "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
    "Place lettuce in a large salad bowl.",
    "Add Caesar dressing and toss until evenly coated.",
    "Add croutons and half the parmesan cheese. Toss gently.",
    "Top with remaining parmesan shavings and anchovies if using.",
    "Serve immediately with lemon wedges and fresh black pepper."
  ],
  nutrition: { calories: "320 kcal", protein: "12g", carbs: "18g", fat: "22g", fiber: "3g", sodium: "680mg" },
  tips: [
    "Use cold, crisp lettuce for best texture",
    "Make homemade croutons for better flavor",
    "Add grilled chicken for a complete meal",
    "Don't dress salad until ready to serve"
  ]
},
"Classic Beef Burger": {
  description: "Juicy grilled beef patty with all the classic toppings",
  rating: 4.6,
  reviews: 275,
  difficulty: "Easy",
  category: "American",
  prepTime: "15 min",
  cookTime: "15 min",
  servings: "4 people",
  ingredients: [
    "800g ground beef (80/20)",
    "4 burger buns",
    "4 slices cheddar cheese",
    "1 tomato, sliced",
    "1 onion, sliced",
    "Lettuce leaves",
    "Pickles",
    "2 tablespoons Worcestershire sauce",
    "Salt and black pepper",
    "Ketchup and mustard for serving"
  ],
  instructions: [
    "In a bowl, mix ground beef with Worcestershire sauce, salt, and pepper. Do not overmix.",
    "Divide into 4 equal portions and shape into patties slightly wider than the buns.",
    "Heat a grill or skillet over medium-high heat. Cook patties 4-5 minutes per side.",
    "Add cheese slice on top of each patty during the last minute of cooking to melt.",
    "Toast the buns lightly on the grill or skillet.",
    "Assemble burgers with lettuce, tomato, onion, pickles, and patty. Add ketchup and mustard as desired."
  ],
  nutrition: { calories: "580 kcal", protein: "34g", carbs: "30g", fat: "34g", fiber: "2g", sodium: "820mg" },
  tips: [
    "Don't press the patties while cooking - it squeezes out the juices",
    "Let the meat rest a couple minutes before serving",
    "Toast the buns for extra texture and to prevent sogginess",
    "Use an 80/20 beef ratio for the juiciest burgers"
  ]
},
"Chicken Stir-Fry": {
  description: "Quick and healthy stir-fry with colorful vegetables",
  rating: 4.5,
  reviews: 324,
  difficulty: "Easy",
  category: "Asian",
  prepTime: "15 min",
  cookTime: "15 min",
  servings: "4 people",
  ingredients: [
    "500g chicken breast, sliced",
    "2 bell peppers, sliced",
    "1 broccoli head, florets",
    "2 carrots, julienned",
    "3 tablespoons soy sauce",
    "2 tablespoons oyster sauce",
    "1 tablespoon sesame oil",
    "2 cloves garlic, minced",
    "Fresh ginger, grated"
  ],
  instructions: [
    "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    "Serve immediately over steamed rice or noodles."
  ],
  nutrition: { calories: "320 kcal", protein: "34g", carbs: "18g", fat: "12g", fiber: "5g", sodium: "840mg" },
  tips: [
    "Cut all ingredients before starting to cook",
    "Keep heat high for authentic stir-fry texture",
    "Don't overcrowd the wok or vegetables will steam",
    "Add cashews or peanuts for extra crunch"
  ]
},
"Beef Tacos": {
  description: "Flavorful Mexican tacos with seasoned ground beef",
  rating: 4.6,
  reviews: 278,
  difficulty: "Easy",
  category: "American",
  prepTime: "15 min",
  cookTime: "20 min",
  servings: "4 people",
  ingredients: [
    "500g ground beef",
    "8 taco shells",
    "1 onion, diced",
    "2 tablespoons taco seasoning",
    "Shredded lettuce",
    "Diced tomatoes",
    "Shredded cheddar cheese",
    "Sour cream",
    "Salsa"
  ],
  instructions: [
    "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
    "Add diced onion and cook until softened, about 5 minutes.",
    "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
    "Warm taco shells according to package directions.",
    "Fill each shell with seasoned beef.",
    "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
  ],
  nutrition: { calories: "420 kcal", protein: "26g", carbs: "32g", fat: "20g", fiber: "4g", sodium: "780mg" },
  tips: [
    "Drain excess fat from beef for healthier tacos",
    "Warm shells in oven for better texture",
    "Prepare all toppings before cooking beef",
    "Use ground turkey for a lighter option"
  ]
},
"Mediterranean Quinoa Bowl": {
  description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
  rating: 4.5,
  reviews: 156,
  difficulty: "Easy",
  category: "Mediterranean",
  prepTime: "20 min",
  cookTime: "35 min",
  servings: "2 people",
  ingredients: [
    "1 cup quinoa",
    "Cherry tomatoes, halved",
    "Cucumber, diced",
    "Red onion, sliced",
    "Kalamata olives",
    "Feta cheese, crumbled",
    "Fresh parsley",
    "Tahini dressing"
  ],
  instructions: [
    "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
    "While quinoa cooks, prepare all vegetables and set aside.",
    "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
    "Fluff cooked quinoa with a fork and let cool slightly.",
    "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
  ],
  nutrition: { calories: "480 kcal", protein: "18g", carbs: "58g", fat: "20g", fiber: "10g", sodium: "540mg" },
  tips: [
    "Rinse quinoa well to remove bitter coating",
    "Let quinoa cool before adding fresh ingredients",
    "Make extra tahini dressing - it keeps well in the fridge",
    "Add grilled chicken or chickpeas for extra protein"
  ]
},
"Creamy Spaghetti Carbonara": {
  description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
  rating: 4.8,
  reviews: 234,
  difficulty: "Easy",
  category: "Italian",
  prepTime: "15 min",
  cookTime: "20 min",
  servings: "4 people",
  ingredients: [
    "400g spaghetti pasta",
    "200g pancetta or guanciale, diced",
    "4 large eggs",
    "100g Pecorino Romano cheese, grated",
    "50g Parmesan cheese, grated",
    "Freshly ground black pepper",
    "Salt for pasta water"
  ],
  instructions: [
    "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
    "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
    "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
    "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
    "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
    "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
  ],
  nutrition: { calories: "520 kcal", protein: "28g", carbs: "62g", fat: "18g", fiber: "3g", sodium: "680mg" },
  tips: [
    "Use room temperature eggs for a smoother sauce consistency",
    "Work quickly when mixing eggs with hot pasta to avoid scrambling",
    "Reserve extra pasta water - it's the secret to perfect creaminess",
    "Freshly grated cheese makes all the difference in flavor",
    "Never add cream - authentic carbonara is made with eggs only"
  ]
},
"Honey Garlic Salmon": {
  description: "Pan-seared salmon with a sweet and savory glaze",
  rating: 4.9,
  reviews: 187,
  difficulty: "Easy",
  category: "Seafood",
  prepTime: "10 min",
  cookTime: "15 min",
  servings: "2 people",
  ingredients: [
    "2 salmon fillets (6oz each)",
    "3 tablespoons honey",
    "2 tablespoons soy sauce",
    "4 cloves garlic, minced",
    "1 tablespoon olive oil",
    "1 teaspoon fresh ginger, grated",
    "Sesame seeds for garnish",
    "Green onions, sliced"
  ],
  instructions: [
    "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
    "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
    "Heat olive oil in a large skillet over medium-high heat.",
    "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
    "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
    "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
  ],
  nutrition: {
    calories: "380 kcal",
    protein: "35g",
    carbs: "28g",
    fat: "14g",
    fiber: "0g",
    sodium: "720mg"
  },
  tips: [
    "Don't overcook salmon - it should be slightly pink in the center",
    "Use wild-caught salmon for best flavor and nutrition",
    "Let the sauce caramelize slightly for deeper flavor",
    "Pair with steamed broccoli or asparagus for a complete meal"
  ]
},
"Pad Thai": {
  description: "Popular Thai stir-fried noodles with shrimp and peanuts",
  rating: 4.8,
  reviews: 320,
  difficulty: "Intermediate",
  category: "Asian",
  prepTime: "15 min",
  cookTime: "15 min",
  servings: "2 people",
  ingredients: [
    "200g rice noodles",
    "150g shrimp or tofu, cubed",
    "2 large eggs",
    "1 cup bean sprouts",
    "3 tablespoons pad Thai sauce",
    "2 tablespoons crushed peanuts",
    "2 tablespoons olive oil",
    "Green onions, chopped",
    "Lime wedges for serving"
  ],
  instructions: [
    "Soak rice noodles in warm water for 30 minutes until softened, then drain.",
    "Heat olive oil in a large skillet or wok over medium-high heat. Add shrimp or tofu and cook until golden brown. Push to one side of the pan.",
    "Crack the eggs into the empty side of the pan and scramble them until fully cooked.",
    "Add the soaked noodles and pad Thai sauce to the pan. Toss everything together rapidly over high heat for 2-3 minutes.",
    "Stir in the bean sprouts and chopped green onions. Cook for another 1 minute.",
    "Remove from heat, garnish with crushed peanuts, and serve hot with lime wedges."
  ],
  nutrition: {
    calories: "460 kcal",
    protein: "18g",
    carbs: "62g",
    fat: "14g",
    fiber: "3g",
    sodium: "850mg"
  },
  tips: [
    "Don't overcook the noodles while soaking; they should still be slightly firm before stir-frying",
    "High heat is essential for a traditional stir-fry texture",
    "Adjust the lime juice and tamarind in the sauce for a better balance of sweet and sour",
    "Substitute shrimp with chicken or extra tofu if preferred"
  ],
  warning: {
    show: false
  }
},
"Teriyaki Chicken Bowl": {
  description: "Sweet and savory chicken over rice with vegetables",
  rating: 4.7,
  reviews: 367,
  difficulty: "Easy",
  category: "Asian",
  prepTime: "15 min",
  cookTime: "20 min",
  servings: "2 people",
  ingredients: [
    "400g chicken thighs, sliced",
    "1/2 cup teriyaki sauce",
    "2 cups cooked rice",
    "1 broccoli head, florets",
    "1 carrot, julienned",
    "Sesame seeds",
    "Green onions, sliced",
    "1 tablespoon sesame oil"
  ],
  instructions: [
    "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
    "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
    "Meanwhile, steam broccoli and carrots until tender-crisp.",
    "Divide rice between bowls.",
    "Top with teriyaki chicken and steamed vegetables.",
    "Garnish with sesame seeds and green onions. Serve hot."
  ],
  nutrition: { 
    calories: "540 kcal", 
    protein: "42g", 
    carbs: "58g", 
    fat: "14g", 
    fiber: "4g", 
    sodium: "1240mg" 
  },
  tips: [
    "Use chicken thighs for juicier meat",
    "Make homemade teriyaki sauce for better flavor control",
    "Add edamame for extra protein",
    "Meal prep by cooking rice and chicken ahead"
  ]
},
"Lasagna Bolognese": {
  description: "Layered Italian pasta with rich meat sauce and béchamel",
  rating: 4.9,
  reviews: 478,
  difficulty: "Intermediate",
  category: "Italian",
  prepTime: "30 min",
  cookTime: "90 min",
  servings: "4 people",
  ingredients: [
    "12 lasagna sheets",
    "500g ground beef",
    "400g canned tomatoes",
    "1 onion, diced",
    "2 carrots, diced",
    "500ml béchamel sauce",
    "200g mozzarella, grated",
    "100g parmesan cheese",
    "Fresh basil"
  ],
  instructions: [
    "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    "Cook lasagna sheets according to package directions. Drain and set aside.",
    "Preheat oven to 180°C (350°F).",
    "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    "Top final layer with béchamel, mozzarella, and parmesan cheese.",
    "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
  ],
  nutrition: { 
    calories: "680 kcal", 
    protein: "42g", 
    carbs: "58g", 
    fat: "28g", 
    fiber: "6g", 
    sodium: "920mg" 
  },
  tips: [
    "Make bolognese sauce a day ahead for better flavor",
    "Don't skip the resting time after baking",
    "Use fresh pasta sheets for best texture",
    "Freeze leftovers in individual portions"
  ],
  warning: {
    show: true
  }
},
"Greek Moussaka": {
    description: "Traditional layered eggplant casserole with lamb",
    rating: 4.8,
    reviews: 234,
    difficulty: "Intermediate",
    category: "Mediterranean",
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil"
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
    ],
    nutrition: { 
      calories: "580 kcal", 
      protein: "36g", 
      carbs: "32g", 
      fat: "32g", 
      fiber: "8g", 
      sodium: "820mg" 
    },
    tips: [
      "Salt eggplant to remove bitterness",
      "Don’t skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving"
    ]
  },
  "Caprese Sandwich": {
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    rating: 4.5,
    reviews: 189,
    difficulty: "Easy",
    category: "Italian",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately."
    ],
    nutrition: { 
      calories: "480 kcal", 
      protein: "22g", 
      carbs: "48g", 
      fat: "22g", 
      fiber: "3g", 
      sodium: "680mg" 
    },
    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich"
    ]
  },
  "Margherita Pizza": {
    description: "Classic Italian pizza with fresh mozzarella and basil",
    rating: 4.9,
    reviews: 512,
    difficulty: "Intermediate",
    category: "Italian",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping"
    ],
    instructions: [
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden.",
      "Top with fresh basil and parmesan after baking."
    ],
    nutrition: { 
      calories: "580 kcal", 
      protein: "24g", 
      carbs: "68g", 
      fat: "22g", 
      fiber: "4g", 
      sodium: "920mg" 
    },
    tips: [
      "Use a pizza stone for crispier crust",
      "Don’t overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture"
    ]
  },
  "Thai Green Curry": {
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    rating: 4.7,
    reviews: 312,
    difficulty: "Intermediate",
    category: "Asian",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves"
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
    ],
    nutrition: { 
      calories: "420 kcal", 
      protein: "26g", 
      carbs: "22g", 
      fat: "26g", 
      fiber: "5g", 
      sodium: "890mg" 
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce"
    ]
  },
  "Vegetable Curry": {
    description: "Hearty vegetarian curry with coconut milk",
    rating: 4.6,
    reviews: 289,
    difficulty: "Easy",
    category: "Asian",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach"
    ],
    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread."
    ],
    nutrition: { 
      calories: "380 kcal", 
      protein: "14g", 
      carbs: "48g", 
      fat: "16g", 
      fiber: "12g", 
      sodium: "480mg" 
    },
    tips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired"
    ]
  },
  "Fresh Onion Soup": {
    description: "Rich beef broth with caramelized onions and melted cheese",
    rating: 4.7,
    reviews: 267,
    difficulty: "Intermediate",
    category: "Mediterranean",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated"
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
    ],
    nutrition: { 
      calories: "380 kcal", 
      protein: "18g", 
      carbs: "36g", 
      fat: "18g", 
      fiber: "4g", 
      sodium: "980mg" 
    },
    tips: [
      "Patience is key - don’t rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning"
    ]
  },
};

const defaultDetails = {
  description: "A delicious homemade dish, perfect for any night of the week.",
  rating: 4.5,
  reviews: 150,
  difficulty: "Easy",
  category: "Homemade",
  prepTime: "15 min",
  cookTime: "20 min",
  servings: "4 people",
  ingredients: ["Full ingredients coming soon"],
  instructions: ["Full instructions coming soon"],
  nutrition: { calories: "—", protein: "—", carbs: "—", fat: "—", fiber: "—", sodium: "—" },
  tips: ["Tips coming soon"]
};

function getRandomMeal() {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

const button = document.querySelector("#dinnerBtn");
const display = document.querySelector("#mealDisplay");
const mealImage = document.querySelector("#mealImage");

function renderList(selector, items) {
  const el = document.querySelector(selector);
  el.innerHTML = "";
  items.forEach((item, i) => {
    el.innerHTML += `
      <li class="d-flex align-items-start gap-3 mb-3">
      <span class="badge">${i + 1}</span>
        <span>${item}</span>
      </li>`;
  });
}

function renderMeal(meal) {
  const details = recipeDetails[meal.name] || defaultDetails;

  display.textContent = meal.name;
  mealImage.src = meal.image;
  mealImage.alt = meal.name;

  document.querySelector("#mealDescription").textContent = details.description;
  document.querySelector("#text-rating").textContent = details.rating;
  document.querySelector("#mealReviews").textContent = details.reviews;
  document.querySelector("#mealDifficulty").textContent = details.difficulty;
  document.querySelector("#mealCategory").textContent = details.category;
  document.querySelector("#mealPrepTime").textContent = details.prepTime;
  document.querySelector("#mealCookTime").textContent = details.cookTime;
  document.querySelector("#mealServings").textContent = details.servings;

  renderList("#ingredientsList", details.ingredients);
    renderList("#instructionsList", details.instructions);
    renderList("#tipsList", details.tips);
  
document.querySelector("#nutritionGrid").innerHTML = `
    <div class="col-6 mb-3"><span><i class="fa-solid fa-fire text-danger"></i> Calories</span><strong>${details.nutrition.calories}</strong></div>
    <div class="col-6 mb-3"><span><i class="fa-solid fa-dumbbell text-primary"></i> Protein</span><strong>${details.nutrition.protein}</strong></div>
    <div class="col-6 mb-3"><span><i class="fa-solid fa-wheat-awn text-warning"></i> Carbs</span><strong>${details.nutrition.carbs}</strong></div>
    <div class="col-6 mb-3"><span><i class="fa-solid fa-droplet text-danger"></i> Fat</span><strong>${details.nutrition.fat}</strong></div>
    <div class="col-6 mb-3"><span><i class="fa-solid fa-leaf text-success"></i> Fiber</span><strong>${details.nutrition.fiber}</strong></div>
    <div class="col-6 mb-3"><span><i class="fa-solid fa-cube text-secondary"></i> Sodium</span><strong>${details.nutrition.sodium}</strong></div>
  `;

  const totalMinutes = parseInt(details.prepTime) + parseInt(details.cookTime);
  document.querySelector("#prepWarning").classList.toggle("d-none", totalMinutes <= 45);
}

button.addEventListener("click", () => {
  const meal = getRandomMeal();
  renderMeal(meal);
});

document.querySelectorAll("#recipeTabs .nav-link").forEach(tabBtn => {
  tabBtn.addEventListener("click", () => {
    document.querySelectorAll("#recipeTabs .nav-link").forEach(b => b.classList.remove("active"));
    tabBtn.classList.add("active");
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.add("d-none"));
    document.querySelector("#tab-" + tabBtn.dataset.tab).classList.remove("d-none");
  });
});

renderMeal(meals[0]);