function displayImages(imagesList, images) {
  imagesList.innerHTML = images.map(function (image, index) {
    return `
      <li>
        <figure>
          <img src=${image.url} alt="Image ${index + 1}">
          <figcaption>
            <p class='imageName' id="imageName-${index}">${image.name}
              <i class="fas fa-pencil-alt" id="edit-${index}" data-index="${index}"></i>
            </p>
            <input type="text" id="nameField-${index}" style="display: none" data-index="${index}">
            <p>${(image.size / 1000).toFixed(1)} kB</p>
          </figcaption>
          <button class="removeButton" id="remove-${index}" data-index="${index}">Remove</button>
        </figure>
      </li>
    `
  }).join('');
}