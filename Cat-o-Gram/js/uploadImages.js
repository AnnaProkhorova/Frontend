var uploader = document.getElementById('uploader');
var imagesList = document.querySelector('.images');
var images = JSON.parse(localStorage.getItem('images')) || [];

function assignRemoveEvent() {
  for (let idx = 0; idx < images.length; idx++) {
    var elem = document.getElementById(`remove-${idx}`);
    elem.addEventListener('click', removeImage);
  }
}

function queryEditButtons() {
  for (let idx = 0; idx < images.length; idx++) {
    var labelelem = document.getElementById(`edit-${idx}`);
    var txtelem = document.getElementById(`nameField-${idx}`);
    labelelem.addEventListener('click', displayEditBlock);
    var extension = images[idx].name.slice(images[idx].name.lastIndexOf('.'));
    txtelem.value = images[idx].name.slice(0, images[idx].name.lastIndexOf('.') - 1);

    txtelem.onkeypress = function (event) {
      if (event.charCode == 13) {
        editName(this.value + extension, this.dataset.index);
      }
    }
    txtelem.onchange = function (event) {
      editName(this.value + extension, this.dataset.index);
    }
  }
}

function uploadImage() {
  let i, files = this.files, fileLength = files.length, image;
  if(FileReader) {
    for(i = 0; i < fileLength; i += 1) {
      let fileReader = new FileReader(), file = files[i];
      fileReader.addEventListener('load', function (event) {
        image = {};
        image['name'] = file.name;
        image['size'] = file.size;
        image['url'] = event.target.result;
        images.push(image);
        displayImages(imagesList, images);
        localStorage.setItem('images', JSON.stringify(images));
        assignRemoveEvent();
        queryEditButtons();
      });
      fileReader.readAsDataURL(file);
    }
  }
}

displayImages(imagesList, images);
uploader.addEventListener('change', uploadImage);
assignRemoveEvent();
queryEditButtons();
