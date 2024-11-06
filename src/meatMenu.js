import meatSalad1 from './assets/images/meat-salad-1.jpg';
import meatSalad2 from './assets/images/meat-salad-2.jpg';
import meatSalad3 from './assets/images/meat-salad-3.jpg';
import meatSalad4 from './assets/images/meat-salad-4.jpg';
import meatSalad5 from './assets/images/meat-salad-5.jpg';

export const meatMenu = (function () {
  const meatSaladImages = [
    meatSalad1,
    meatSalad2,
    meatSalad3,
    meatSalad4,
    meatSalad5,
  ];

  const meatSaladDesc = [
    'Exquisite Meat Salad #1 $20',
    'Exquisite Meat Salad #2 $15',
    'Exquisite Meat Salad #3 $17',
    'Exquisite Meat Salad #4 $22',
    'Exquisite Meat Salad #5 $30',
  ];

  const buildMenu = () => {
    let menuImages = meatSaladImages;
    let menuDesc = meatSaladDesc;

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
