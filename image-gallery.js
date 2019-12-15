let url = "https://picsum.photos/v2/list";

fetch(url)
  .then(resp => resp.json())
  .then(data => {
    data.forEach(image => {
      createImage(image);
    });
  });

createImage = img => {
  let image = document.createElement("img");
  let imagesContainer = document.getElementById("images-container");

  image.classList.add("image");
  image.src = img.download_url;
  image.addEventListener("click", e => {
    enlargeImage(img);
  });

  imagesContainer.appendChild(image);
};

enlargeImage = img => {
  let imageGallery = document.getElementById("image-gallery");
  if (imageGallery.childNodes.length > 1) {
    imageGallery.lastChild.remove();
  }

  let enlargedImageContainer = document.createElement("div");
  let enlargedImage = document.createElement("img");
  let imageInfo = document.createElement("div");
  let imageAuthor = document.createElement("span");
  let imageSize = document.createElement("span");

  enlargedImageContainer.id = "enlarged-image-container";
  enlargedImage.src = img.download_url;
  enlargedImage.id = "enlarged-image";
  imageAuthor.id = "image-author";
  imageSize.id = "image-size";
  imageAuthor.innerHTML = img.author;
  imageSize.innerHTML = ` ${img.height}x${img.width}`;

  imageInfo.appendChild(imageAuthor);
  imageInfo.appendChild(imageSize);
  enlargedImageContainer.appendChild(enlargedImage);
  enlargedImageContainer.appendChild(imageInfo);
  imageGallery.appendChild(enlargedImageContainer);
};
