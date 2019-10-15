function removeImage(event) {
  var confirmRemove = confirm("Are you sure?");
  if(confirmRemove) {
    var index = event.target.dataset.index;
    if(index) {
      images.splice(index, 1);
      displayImages(imagesList, images);
      localStorage.setItem('images', JSON.stringify(images));
      assignRemoveEvent();
      queryEditButtons();
    }
  }
}
