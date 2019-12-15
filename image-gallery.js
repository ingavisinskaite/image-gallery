let url = "https://picsum.photos/v2/list"

createImage = (img) => {
    image = document.createElement('img');
    imagesContainer = document.getElementById('container');
    image.classList.add("image");
    image.src = img.download_url;
    image.addEventListener('click', e => {enlargeImage(img), false});
    imagesContainer.appendChild(image);
}

enlargeImage = (img) => {
    enlargedImage = document.createElement('img');
    enlargedImageContainer = document.getElementById('enlarged-image-container');
    imageInfo = document.createElement('p');
    enlargedImage.src = img.download_url;
    enlargedImage.id = 'enlarged-image';
    imageInfo.innerHTML = `${img.author} ${img.height}x${img.width}`;
    enlargedImageContainer.appendChild(enlargedImage);
    enlargedImageContainer.appendChild(imageInfo);
}

fetch(url)
.then( resp => resp.json())
.then( data => {
    data.forEach(image => {
        createImage(image)
    })
})