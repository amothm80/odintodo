import chickenSalad1 from './assets/images/chicken-salad-1.jpg';
import chickenSalad2 from './assets/images/chicken-salad-2.jpg';
import chickenSalad3 from './assets/images/chicken-salad-3.jpg';
import chickenSalad4 from './assets/images/chicken-salad-4.jpg';
import chickenSalad5 from './assets/images/chicken-salad-5.jpg';

export const chickenMenu = (function () {
  const chickenSaladImages = [
    chickenSalad1,
    chickenSalad2,
    chickenSalad3,
    chickenSalad4,
    chickenSalad5,
  ];
  const chickenSaladDesc = [
    'Exquisite Chicken Salad #1 $20',
    'Exquisite Chicken Salad #2 $15',
    'Exquisite Chicken Salad #3 $17',
    'Exquisite Chicken Salad #4 $22',
    'Exquisite Chicken Salad #5 $30',
  ];

  const buildMenu = () => {
    const menuImages = chickenSaladImages;
    const menuDesc = chickenSaladDesc;

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
