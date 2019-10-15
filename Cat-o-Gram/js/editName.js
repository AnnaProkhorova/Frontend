function editName(value, index) {
    images[index].name = value;
    displayImages(imagesList, images);
    localStorage.setItem('images', JSON.stringify(images));
    assignRemoveEvent();
    queryEditButtons();
}

function displayEditBlock(event) {
    var index = event.target.dataset.index;
    var textelem = document.getElementById(`nameField-${index}`);
    var labelelem = document.getElementById(`imageName-${index}`);
    textelem.style = "";
    labelelem.style = "display: none";
    textelem.focus();
    textelem.select();
}