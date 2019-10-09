function calcDate(date) {
    const now = new Date();

    date += '000';
    const future = new Date(Number(date));

    const dateObj = {
        countDate: (future - now) / 1000/ 3600 / 24,
        future: `${future.getMonth() + 1}/${future.getDate()}/${future.getFullYear()}`
    }

    return dateObj;
}

export default calcDate;