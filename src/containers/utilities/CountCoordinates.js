const countCoordinates = (el1, el2) => {
        const YCoordinate = el1.getBoundingClientRect().top - el2.getBoundingClientRect().top;
        const XCoordinate = el1.getBoundingClientRect().right - el2.getBoundingClientRect().right;

        return { YCoordinate, XCoordinate };
    }

export default countCoordinates