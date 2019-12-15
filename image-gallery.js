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
  let enlargedImageContainer = document.getElementById('enlarged-image-container');
  let enlargedImage = document.getElementById('enlarged-image');
  let imageAuthor = document.getElementById('image-author')
  let imageSize = document.getElementById('image-size');

  enlargedImage.src = img.download_url;
  imageAuthor.innerHTML = img.author;
  imageSize.innerHTML = ` ${img.height}x${img.width}`;

  enlargedImageContainer.style.display = "block";
};
