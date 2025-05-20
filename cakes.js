function cakes(recipe, available) {
  if (
    typeof recipe === 'object' &&
    typeof available === 'object' &&
    !Array.isArray(recipe) &&
    !Array.isArray(available)
  ) {
    let maxCakes = Infinity;

    for (let ingrediente in recipe) {
      if (!available[ingrediente]) {
        return 0; // Ingrediente faltando
      }

      // Calcula quantas vezes posso usar esse ingrediente
      let possible = Math.floor(available[ingrediente] / recipe[ingrediente]); //available [açucar] / recipe[açucar]
      maxCakes = Math.min(maxCakes, possible); // menor valor entre maxCakes e possible
    }

    return maxCakes;
  } else {
    return 0;
  }
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

console.log(cakes(recipe, available)); // Resultado: 2
