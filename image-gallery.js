let url = "https://picsum.photos/v2/list"

createImage = (url) => {
    image = document.createElement('img');
    imagesContainer = document.getElementById('container');
    image.id = "image"
    image.src = url;
    imagesContainer.appendChild(image);
}

fetch(url)
.then( resp => resp.json())
.then( data => {
    data.forEach(image => {
        createImage(image.url)
    })
})