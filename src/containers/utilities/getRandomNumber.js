const getRandomNumber = (number1, number2) => {
    const randomNumber = Math.floor((Math.random() * (number2 + 1) ) + number1);
    return randomNumber;
}

export default getRandomNumber;