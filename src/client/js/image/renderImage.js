async function addImage(data) {
    const title = document.querySelector('.departure_date');
    const imgTag = document.createElement('img');
    const cityImageSrc = data.hits[0]['webformatURL'];
    imgTag.src = cityImageSrc;
    imgTag.alt = 'city';
    title.insertAdjacentElement('afterend', imgTag);
}

export default addImage;