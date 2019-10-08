const getImageData = async (url = '') => {
    const data = await fetch(url);
    try {
        const imageData = await data.json();
        return imageData;
    } catch(error) {

    }
}

export default getImageData;