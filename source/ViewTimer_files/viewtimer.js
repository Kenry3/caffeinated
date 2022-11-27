window.addEventListener('DOMContentLoaded', init);

function init() {
    let selectRecipe = localStorage.getItem('selectRecipe');
    let recipe = JSON.parse(localStorage.getItem(selectRecipe));
    let input = document.querySelectorAll('input');
    input.forEach((el) => {
        el.value = recipe[el.name];
    });
    
}
