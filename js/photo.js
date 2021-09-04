const loadPhoto = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

loadPhoto()

const displayPhotos = (photos) => {
    photos.forEach(photo => {
        console.log(photo.url);
    })
}