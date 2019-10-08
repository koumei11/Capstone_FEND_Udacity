function addImage(data) {
    const card = document.querySelector('.travel_list').lastChild;
    const imgTag = document.createElement('img');
    const cityImageSrc = data.hits[0]['webformatURL'];
    imgTag.src = cityImageSrc;
    imgTag.alt = 'city';
    card.insertAdjacentElement('afterbegin', imgTag);
}

export default addImage;