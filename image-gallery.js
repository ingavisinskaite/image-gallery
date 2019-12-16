const url = "https://picsum.photos/v2/list";

fetch(url)
  .then(resp => resp.json())
  .then(data => {
    data.forEach(image => {
      createImage(image);
    });
  });

createImage = img => {
  let urlArr = img.download_url.split("/");
  urlArr.length = urlArr.length - 2;
  let url = urlArr.join("/") + "/200";

  const image = document.createElement("img");
  const imagesContainer = document.getElementById("images-container");

  image.classList.add("image");
  image.src = url;
  image.addEventListener("click", e => {
    enlargeImage(img);
  });

  imagesContainer.appendChild(image);
};

enlargeImage = img => {
  const enlargedImageContainer = document.getElementById(
    "enlarged-image-container"
  );
  const enlargedImage = document.getElementById("enlarged-image");
  const imageAuthor = document.getElementById("image-author");
  const imageSize = document.getElementById("image-size");

  enlargedImage.src = img.download_url;
  imageAuthor.innerHTML = img.author;
  imageSize.innerHTML = ` ${img.height}x${img.width}`;

  enlargedImageContainer.style.display = "block";
};
