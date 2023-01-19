export const add = (product) => {
    return{
        type:"ADD",
        payload:product,
    }
}
export const remove = (product) => {
    return{
        type:"REMOVE",
        payload:product,
    }
}
export const increment = (product) => {
    return{
        type:"INCREMENT",
        payload:product,
    }
}
export const decrement = (product) => {
    return {
        type:"DECREMENT",
        payload:product,
    }
}