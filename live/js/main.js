function initRecipe() {
  initGlobal();

  let author = "";
  let authorImg = "";

  let recipeTitle = "";
  let recipeDuration = "";
  let recipeDurationTot = "";
  let recipeLevel = "";
  let recipePublDate = "";
  let recipeBannerImg = "";

  let portionBase = 4;
  let portions = portionBase;
  let recipeIngr = [];
  let recipeQty = [];
  let recipeUnit = [];
  let recipeQtyUnit = "";
  let recipeListItem = "";
  let recipeDescription = "";

  document.getElementById("recipe").innerHTML = getRecipePage();

  renderRecipeMetas();
  renderRecipeList();
}

function init() {
  initGlobal();
}

function initGlobal() {
  renderHeader();
  renderFooter();
}

function renderHeader() {
  element = document.getElementById("header");
  element.classList.add("section", "justify-center");
  element.innerHTML = getHeader();
}

function renderFooter() {
  element = document.getElementById("footer");
  element.classList.add("section");
  element.innerHTML = getFooter();
}

function toggleMobMenu() {
  element = document.getElementById("mob-menu");
  element.classList.toggle("hide");
}

function renderRecipeMetas() {
  document.getElementById("recipe-title").innerHTML = recipeTitle;
  let bannerStyle = `background-image: url(img/${recipeBannerImg}`;
  document.getElementById("recipe-banner").setAttribute("style", bannerStyle);
  let ele = document.getElementsByClassName("recipe-duration");
  for (let index = 0; index < ele.length; index++) {
    ele[index].innerHTML = recipeDuration;
  }
  document.getElementById("recipe-duration-tot").innerHTML = recipeDurationTot;
  document.getElementById("recipe-level").innerHTML = recipeLevel;
  document.getElementById("recipe-publ-date").innerHTML = recipePublDate;
  document.getElementById("recipe-description").innerHTML = recipeDescription;
  document.getElementById("author-meta").innerHTML = `<img src="img/${authorImg}"  alt="${authorImgAlt}">${author}`;
}

function recipeInputValidation() {
  document.getElementById("recipe-list").innerHTML = "";
  portions = document.getElementById("portion-input").value;

  if (portions > 0 && portions <= 99) {
    document.getElementById("calc-ingr-btn").classList.add("refresh");
    document.getElementById("portion-input-notice").classList.add("hide");
  } else {
    document.getElementById("calc-ingr-btn").classList.remove("refresh");
    document.getElementById("portion-input-notice").classList.remove("hide");
  }
}

function renderRecipeList() {
  document.getElementById("calc-ingr-btn").classList.remove("refresh");
  document.getElementById("portion-input-notice").classList.add("hide");
  document.getElementById("recipe-list").innerHTML = "";
  recipeListItem = "";
  renderPortionInput();
  renderIngrRows();
} 

function renderPortionInput() {
  portions = document.getElementById("portion-input").value;
  if (portions <= 0 || portions > 999) {
    portions = 0;
    document.getElementById("portion-input-notice").classList.remove("hide");
    return;
  }
  portions = (Math.round(portions / 0.5) * 0.5).toFixed(2);
  portions = parseFloat(portions);
  document.getElementById("portion-input").value = portions;
}

function renderIngrRows() {
  for (let i = 0; i < recipeQty.length; i++) {
    let qtyNew = (portions / portionBase) * recipeQty[i];
    qtyNew = (Math.ceil(qtyNew * 20) / 20).toFixed(2);
    qtyNew = parseFloat(qtyNew);
    if (recipeUnit[i] == 'g') { qtyNew = Math.round(qtyNew); }
    if (recipeQty[i] > 0) { recipeQtyUnit = qtyNew + " " + recipeUnit[i]; }
    else { recipeQtyUnit = recipeUnit[i]; }
    recipeListItem += getRecipeListItem(recipeQtyUnit, i);
  }
  document.getElementById("recipe-list").innerHTML = recipeListItem;
}
