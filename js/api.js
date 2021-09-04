const loadsingleUser = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => displaySingleuser(data.results[0]))
}
loadsingleUser()

//meal db
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}
const searchMeal = () => {

    const searchText = document.getElementById('search-field').value;
    toggleSpinner('block');
    toggleSearchResult('none');
    loadMeals(searchText);
    document.getElementById('search-field').value = '';
}

const displaySingleuser = user => {
    // console.log(user);
}


const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = (meals) => {
    const mealscontainer = document.getElementById('meals');
    mealscontainer.textContent = '';
    meals?.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>${meal.strMeal}</h1>
        <p>${meal.strIngredient18 ? meal.strIngredient18 : ''}</p>
        <button onclick="loadMealDetail('${meal.strMeal}')">Click Me</button>`;

        mealscontainer.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('block');
}

const loadMealDetail = mealName => {
    console.log(mealName);
}