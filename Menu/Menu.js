
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 

  menu.classlist.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector ('.menu');
console.log (menu);

const menu;
// create a reference to the ".menu-button" class
const menuButton = document.querySelector ('menu-button');

const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener ('click', toggleMenu);

menu.forEach= (menu => new menu(menu));