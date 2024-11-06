import veganSalad1 from './assets/images/vegan-salad-1.jpg';
import veganSalad2 from './assets/images/vegan-salad-2.jpg';
import veganSalad3 from './assets/images/vegan-salad-3.jpg';

export const veganMenu = (function () {
  const veganSaladImages = [veganSalad1, veganSalad2, veganSalad3];

  const veganSaladDesc = [
    'Vegan Salad #1 $20',
    'Vegan Salad #2 $15',
    'Vegan Salad #3 $17',
  ];

  const buildMenu = () => {
    let menuImages = veganSaladImages;
    let menuDesc = veganSaladDesc;

    let mealCells = [];
    for (let i in menuImages) {
      const mealCell = document.createElement('div');
      mealCell.className = 'meal-cell';

      let mealImageCell = document.createElement('div');
      mealImageCell.className = 'meal-image-cell';

      let mealImage = document.createElement('img');
      mealImage.className = 'meal-image';
      mealImage.src = menuImages[i];

      let mealDescription = document.createElement('div');
      mealDescription.className = 'meal-description';
      mealDescription.innerHTML = `<p>${menuDesc[i]}</p>`;

      mealImageCell.appendChild(mealImage);

      mealCell.appendChild(mealImageCell);
      mealCell.appendChild(mealDescription);
      mealCells.push(mealCell);
    }
    return mealCells;
  };

  return { buildMenu };
})();
