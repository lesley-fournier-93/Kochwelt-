function getHeader() {
  return `
    <div class="ct-container flex-row gap justify-between xalign-stretch">
        <a href="./"><img src="img/logo.png" alt="logo" class="logo align-center"></a>
    
        <nav class="flex-row">
            
            <a href="./">Start</a>
            <a href="rezept-des-tages.html">Rezept des Tages</a>
            <a href="kontakt.html">Kontakt</a>
            <a href="impressum.html">Impressum</a>
            <img class="trigger-mob-menu" src="icons/menu-burger.svg" alt="burger-menu" onclick="toggleMobMenu()">

            <div id="mob-menu" class="flex-col hide">
                <a href="./">Start</a>
                <a href="rezept-des-tages.html">Rezept des Tages</a>
                <a href="kontakt.html">Kontakt</a>
                <a href="impressum.html">Impressum</a>
                <a href="datenschutz.html">Datenschutz</a>
            </div>

        </nav>
    </div>
    `;
}

function getFooter() {
  return `
    <div class="ct-container ct-footer flex-row">
        <a class="logo-footer" href="index.html">
          <img src="./img/logo_small.png" alt="Logo" /> Kochwelt
        </a>
        <div class="law-link-wrapper">
          <a class="hover" href="./impressum.html">Impressum</a>
          <a class="hover" href="./datenschutz.html">Datenschutz</a>
        </div>
        <div class="social-link-wrapper">
          <a href="https://www.facebook.com" target="_blank"
            ><img src="./img/facebook_white.png" alt="Facebook"
          /></a>
          <a href="https://www.instagram.com" target="_blank"
            ><img src="./img/instagram_white.png" alt="Instagram"
          /></a>
          <a href="https://www.twitter.com" target="_blank"
            ><img src="./img/twitter_white.png" alt="Twitter"
          /></a>
        </div>
    </div>
    `;
}

function getRecipePage() {
  return `
    <section class="hero seamless-y">
        <div class="ct-container">
            <h1 id="recipe-title"></h1>
            <div id="recipe-banner" class="block bg-img-cover"></div>
            <div class="metas">
                <div class="meta">
                    <img src="icons/clock-regular.svg" alt="clock">
                    <span class="recipe-duration"></span>
                </div>
                <div class="meta">
                    <img src="icons/brain-solid.svg" alt="brain">
                    <span id="recipe-level"></span>
                </div>
                <div class="meta">
                    <img src="icons/calendar-alt-regular.svg" alt="calendar">
                    <span id="recipe-publ-date"></span>
                </div>
            </div>
        </div>
    </section>

    <section class="content seamless-y">
        <div class="ct-container ingredients">
            <!-- <h2>Zutaten</h2> -->

            <div class="portion-input-wrapper">
                <label for="portion-input">Zutaten für</label>
                <input oninput="recipeInputValidation()" id="portion-input" type="number" name="portion-input" value="${portionBase}" min="1" max="99">
                <button onclick="renderRecipeList()" id="calc-ingr-btn" class="btn-default">Portionen
                    <img src="icons/calculator-solid_white.svg" alt="calculator"></button>
            </div>
            <div id="portion-input-notice" class="hide"><strong>Bitte einen Wert zwischen 1&nbsp;und&nbsp;99&nbsp;eingeben !</strong>
            </div>
            <table id="recipe-list" class="ingr">
            </table>
        </div>
        <div class="ct-container preparation">
            <h2>Zubereitung</h2>
            <div class="metas">
                <div class="meta">
                    <img src="icons/clock-regular.svg" alt="clock">
                    <span class="recipe-duration"></span>
                </div>
                <div class="meta">
                    <img src="icons/clock-regular.svg" alt="clock">
                    <span id="recipe-duration-tot"></span>
                </div>
            </div>
            <div id="recipe-description">
            </div>
        </div>
        <div class="ct-container author">
            <h3>Rezept erstellt von</h3>
            <div id="author-meta">
            </div>
        </div>
    </section>
    `;
}

function getRecipeListItem(recipeQtyUnit, i) {
  return `<tr>
    <td class="ingr-qty">${recipeQtyUnit}</td>
    <td class="ingr-name">${recipeIngr[i]}</td>
    </tr>`;
}
