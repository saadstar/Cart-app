const initialState = {
    cart: []
};

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD":
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      case "REMOVE":
        const data = state.cart.filter((i) => i.id !== payload.id);
        return { ...state, cart: data };
      case "INCREMENT":
        const itemIndex = state.cart.findIndex(
          (item) => item.id === payload.id
        );
        const itemIndexDec = state.cart.findIndex(
          (item) => item.id === payload.id
        );
        if (state.cart[itemIndexDec] >= 1) {
          state.cart[itemIndex].qty += 1;
          return {
            ...state,
            cart: [...state.cart],
          };
        } else if (state.cart[itemIndexDec] === 1) {
          const data = state.cart.filter((e) => e.id !== payload.id);
          return {
            ...state,
            cart: data,
          };
        }
        case "DECREMENT":
        if (state.cart[itemIndexDec] >= 1) {
          state.cart[itemIndex].qty -= 1;
          return {
            ...state,
            cart: [...state.cart],
          };
        } else if (state.cart[itemIndexDec] === 1) {
            const data= state.cart.filter((e)=> e.id !== payload.id)
            return {
              ...state,
              cart: data,
            };
        }
      default:
        return state;
    }
}