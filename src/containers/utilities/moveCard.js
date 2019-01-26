import countCoordinates from './CountCoordinates';

const moveCard = (item, to) => {
    const { YCoordinate, XCoordinate } = countCoordinates(to, item);  
    item.style.transform = `translateY(${YCoordinate}px) translateX(${XCoordinate}px)`;
}

export default moveCard;