class Cat {
    constructor(img, breedname, sex, age, price, description){
        this.img = img,
        this.breedname = breedname,
        this.sex = sex,
        this.age = age,
        this.price = price,
        this.description = description	
    }
}

class Shop {
    constructor(name) {
        this.BUTTON_ADD_TO_CART = "Добавить в корзину";
        this.BUTTON_ALREADY_IN_CART = "Увидимся в корзинке!";

        this.count = +document.getElementById("countPerPage").value;
        this.cats = [];
        this.cats_backup = [];
        this.breeds = [];
        this.pages = 0;
        this.name = name;
        this.currentPage = 1;
        try {
            JSON.parse(localStorage.getItem('cart_count'));
        }
        catch {
            localStorage.setItem('cart_count', 0);
        }
        
        try {
            var catID = JSON.parse(localStorage.getItem('cartCatIDs'));
            var cat_count = catID['catID'].length;
            var cart_icon = document.getElementById('cart');
            cart_icon.setAttribute('data-count', cat_count);
        }
        catch {
            localStorage.setItem('cartCatIDs', '{"catID": []}');
        }
    }
    getBreeds() {
        var breeds_obj = document.getElementById('breeds');
        var breeds = [];
        for (var i = 0; i < this.cats.length; i++) {
            if (!breeds.includes(this.cats[i].breedname)) {
                breeds.push(this.cats[i].breedname);
            }
        }
        this.breeds = breeds.sort();
        for (var i = 0; i < this.breeds.length; i++) {
            breeds_obj.innerHTML += `<option value="${this.breeds[i]}">${this.breeds[i]}</option>`;
        }
    }
    calcPageCount() {
        var pages = Math.floor(this.cats.length / this.count);
        if(this.cats.length % this.count != 0) {
            pages++;
        }
        this.pages = pages;
    }
    showCats(catsOnPage, pageNumber) {
        var catID = JSON.parse(localStorage.getItem('cartCatIDs'));
        this.currentPage = pageNumber;
        var catsForSale = document.getElementById("products");
        catsForSale.innerHTML = "";
        var firstIdx = catsOnPage * (pageNumber - 1);
        if(catsOnPage + firstIdx > this.cats.length) {
            var lastIdx = firstIdx + (this.cats.length % catsOnPage) - 1;
        } 
        else {
            var lastIdx = catsOnPage + firstIdx - 1; 
        }
        for(var i = firstIdx; i <= lastIdx; i++) {
            var img_id = parseInt(this.cats[i].img);
            if (catID["catID"].includes(img_id)) {
                var button_msg = this.BUTTON_ALREADY_IN_CART;
            }
            else {
                var button_msg = this.BUTTON_ADD_TO_CART;
            }
            catsForSale.innerHTML += 
                `<div class="cat_block">
                        <div id="kitty${img_id}" onclick="shop.showFullInfo(${img_id})"><img src="./img/${img_id}.jpg"></div>
                        <div>${this.cats[i].breedname}</div>
                        <div>${this.cats[i].sex}</div>
                        <div>${this.cats[i].age}</div>
                        <div>${this.cats[i].price}</div>
                        <button id="btn_cat${img_id}" onclick="shop.addToCart(${img_id})">${button_msg}</button>
                </div>`;
        }
    }
    filterByBreed(breedname) {
        console.log(breedname);
        if (this.cats_backup.length > 0) {
            this.cats = this.cats_backup;
        }
        if (breedname == "all") {
            this.updateCatCount();
            return;
        }
        this.cats_backup = this.cats;
        var new_cats = [];
        for (var i = 0; i < this.cats.length; i++) {
            if (this.cats[i].breedname == breedname) {
                new_cats.push(this.cats[i]);
            }
        }
        this.cats = [];
        this.cats = new_cats;
        this.currentPage = 1;
        this.updateCatCount();
    }
    drawButtons(obj) {
        var elem = document.getElementById("buttons");
        elem.innerHTML = "";
        for(var i = 0; i < this.pages; i++) {
            elem.innerHTML += `<button id="btn${i}" class="selbutton" onClick="shop.showCats(${this.count}, ${i+1})">${i+1}</button>`;
        }
    }
    priceSort(arr){
        arr.sort(function(a, b) {
            return a.price - b.price;
        })
        shop.showCats(this.count, this.currentPage);
    }
    priceSortLow(arr){
        arr.sort(function(a, b) {
            return b.price - a.price;
        })
        shop.showCats(this.count, this.currentPage);
    }
    breednameSort(arr){
        arr.sort(function(a, b) {
            if(a.breedname > b.breedname){
                return 1;
            }
            if(a.breedname < b.breedname){
                return -1;
            }
            else {
                return 0;
            }
        })
        shop.showCats(this.count, this.currentPage);
    }
    breednameSortLow(arr){
        arr.sort(function(a, b) {
            if(b.breedname > a.breedname){
                return 1;
            }
            if(b.breedname < a.breedname){
                return -1;
            }
            else {
                return 0;
            }
        })
        shop.showCats(this.count, this.currentPage);
    }
    updateCatCount(){
        this.count = +document.getElementById("countPerPage").value;
        this.calcPageCount();
        if (this.currentPage > this.pages) {
            this.currentPage = 1;
        }
        this.showCats(this.count, this.currentPage);
        this.drawButtons(this);
    }
    getPreviousProducts(){
        if(this.currentPage - 1 >= 1){
            this.currentPage--;
            this.showCats(this.count, this.currentPage);
        }
    }
    getNextProducts(){
        if(this.currentPage + 1 <= this.pages){
            this.currentPage++;
            this.showCats(this.count, this.currentPage);
        }
    }
    addToCart(cat){
        var cartCatIDs = localStorage.getItem('cartCatIDs');
        var catID = JSON.parse(cartCatIDs);
        if (catID["catID"].includes(cat)) {
            alert("Уже жду тебя в корзинке 😺");
            return;
        }
        var name = `cat${cat}`;
        var f_found = false;
        var found = -1;
        for (var i = 0; i < this.cats.length; i++) {
            if (this.cats[i].img == cat) {
                found = i;
                f_found = true;
                break;
            }
        }
        if (f_found) {
            localStorage.setItem(name, JSON.stringify(this.cats[found]));
            var cart_icon = document.getElementById('cart');
            catID["catID"].push(cat);
            cart_icon.setAttribute('data-count', catID["catID"].length);
            localStorage.setItem('cartCatIDs', JSON.stringify(catID));
            var button = document.getElementById(`btn_cat${cat}`);
            button.innerHTML = "Увидимся в корзинке!";
        }
    }
    showFullInfo(cat){
        var catID = JSON.parse(localStorage.getItem('cartCatIDs'));
        var catDetails = document.getElementById("products");
        catDetails.innerHTML = "";
        var buttons = document.getElementById("buttons");
        buttons.innerHTML = "";
        var found = -1;
        var f_found = false;
        document.getElementById("previous").style.display = "none";
        document.getElementById("next").style.display = "none";
        for (var i = 0; i < this.cats.length; i++) {
            console.log()
            if (this.cats[i].img == cat) {
                var img_id = parseInt(this.cats[i].img);
                if (catID["catID"].includes(img_id)) {
                    var button_msg = this.BUTTON_ALREADY_IN_CART;
                }
                else {
                    var button_msg = this.BUTTON_ADD_TO_CART;
                }
                found = this.cats[i];
                f_found = true;
                break;
            }
        }
        if (!f_found) {
            this.updateCatCount();
            return;
        }

        catDetails.innerHTML += 
        `<div class="cat_block">
            <button style="margin: 10px" onclick="shop.updateCatCount(shop.currentPage)">&larr;</button> 
            <div id="kitty${found.img}"><img src="./img/${found.img}.jpg"></div>
            <div>${found.breedname}</div>
            <div>${found.sex}</div>
            <div>${found.age}</div>
            <div>${found.price}</div>
            <div>${found.description}</div>
            <button id="btn_cat${found.img}" onclick="shop.addToCart(${found.img})">${button_msg}</button>
        </div>`;
    }
}


var shop = new Shop();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pusha.prox.dev/json/cats.json');
xhr.send();
xhr.onload = function() {
    shop.cats = JSON.parse(xhr.response);
    shop.getBreeds();
    shop.updateCatCount();
}