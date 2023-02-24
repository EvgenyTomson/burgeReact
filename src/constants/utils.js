export const countTotalPrice = (array) => {
    return array.reduce((total, item) => total + item.count * item.price, 0)
};

export const countTotalCount = (array) => {
    return array.reduce((total, item) => total + item.count, 0)
};