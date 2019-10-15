function countSummary() {
    var obj = document.getElementById('totals');
    var cartCatIDs = localStorage.getItem('cartCatIDs');
    var catID = JSON.parse(cartCatIDs);
    var totals = 0;
    for(var i = 0; i < catID['catID'].length; i++) {
        var name = `cat${catID['catID'][i]}`;
        var cat = JSON.parse(localStorage[name]);
        totals += parseInt(cat.price);
    }
    obj.innerHTML = `Эти котики обойдутся Вам в ${totals}грн.`;
}
function delFromCart(catid) {
    var name = `cat${catid}`;
    localStorage.removeItem(name);
    var cartCatIDs = localStorage.getItem('cartCatIDs');
    var catID = JSON.parse(cartCatIDs);
    var idx = catID['catID'].indexOf(catid);
    if (idx > -1) {
        catID['catID'].splice(idx, 1);
        localStorage.setItem('cartCatIDs', JSON.stringify(catID));
    }
    drawCart();
}
function drawCart() {
    var cartCatIDs = localStorage.getItem('cartCatIDs');
    var catID = JSON.parse(cartCatIDs);
    var products = document.getElementById('products');
    products.innerHTML = "";
    for(var i = 0; i < catID['catID'].length; i++) {
        var name = `cat${catID['catID'][i]}`;
        try {
            var cat = JSON.parse(localStorage[name]);
        }
        catch {
            continue;
        }
        products.innerHTML += 
                `<table>
                    <tr>
                        <td id="kitty${cat.img}"><img src="./img/${cat.img}.jpg"></td>
                        <td width="100px">${cat.breedname}</td>
                        <td width="100px">${cat.sex}</td>
                        <td width="100px">${cat.age}</td>
                        <td width="100px">${cat.price}</td>
                        
                        <td>
                            <button onclick="delFromCart(${catID['catID'][i]})">Удалить</button>
                        </td>
                    </tr>
                </table>`;
    }
    countSummary();
}
drawCart();