function initGlobal() {
  let header, footer;

  header = document.getElementById("header");
  header.classList.add("section", "justify-center");
  header.innerHTML = getHTML_header();

  footer = document.getElementById("footer");
  footer.classList.add("section");
  footer.innerHTML = getHTML_footer();
}

function toggleMobMenu() {
  let mobMenu;

  mobMenu = document.getElementById("mob-menu");
  mobMenu.classList.toggle("hide");
}

function init() {
  initGlobal();
}

function initStart() {
  let start;

  initGlobal();
  start = document.getElementById("start");
  start.innerHTML = getHTML_start();
}

function initRecipe() {
  let recipe;

  initGlobal();
  recipe = document.getElementById("recipe");
  recipe.innerHTML = getHTML_recipe();
  setRecipeMetas();
  generateRecipeList();
}

function setRecipeMetas() {
  let recipeTitleElem, banner, durations, authorMeta, i;

  recipeTitleElem = document.getElementById("recipe-title");
  recipeTitleElem.innerHTML = recipeTitle;

  banner = document.getElementById("recipe-banner");
  banner.style.backgroundImage = `url(img/${recipeBannerImg})`;

  durations = document.getElementsByClassName("recipe-duration");
  for (i = 0; i < durations.length; i++) {
    durations[i].innerHTML = recipeDuration;
  }

  document.getElementById("recipe-duration-tot").innerHTML = recipeDurationTot;
  document.getElementById("recipe-level").innerHTML = recipeLevel;
  document.getElementById("recipe-publ-date").innerHTML = recipePublDate;
  document.getElementById("recipe-description").innerHTML = recipeDescription;

  authorMeta = document.getElementById("author-meta");
  authorMeta.innerHTML = `<img src="img/${authorImg}" alt="${authorImgAlt}">${author}`;
}

function generateRecipeList() {
  let portionInput, portions, recipeList, i, qtyNew, recipeQtyUnit;

  portionInput = document.getElementById("portion-input");
  portions = parseFloat(portionInput.value) || 0;

  if (portions <= 0 || portions > 999) {
    document.getElementById("portion-input-notice").classList.remove("hide");
    return;
  }

  portions = Math.round(portions * 2) / 2; // Round to nearest 0.5
  portionInput.value = portions;

  recipeList = "";
  for (i = 0; i < recipeQty.length; i++) {
    qtyNew = Math.round((portions / portionBase) * recipeQty[i] * 20) / 20;
    if (recipeUnit[i] === "g") qtyNew = Math.round(qtyNew);
    recipeQtyUnit = `${qtyNew} ${recipeUnit[i]}`;
    recipeList += getHTML_recipeListItem(recipeQtyUnit, i);
  }

  document.getElementById("recipe-list").innerHTML = recipeList;
}

function recipeInputValidation() {
  let portions, valid;

  portions = document.getElementById("portion-input").value;
  valid = portions > 0 && portions <= 50;
  document.getElementById("calc-ingr-btn").classList.toggle("refresh", valid);
  document
    .getElementById("portion-input-notice")
    .classList.toggle("hide", valid);
}
