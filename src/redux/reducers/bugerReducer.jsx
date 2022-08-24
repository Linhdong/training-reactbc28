const initialState = {
    burger: [
        {id: 'salad', price: 10, quantity: 2},
        {id: 'cheese', price: 5, quantity: 3},
        {id: 'beef', price: 20, quantity: 2}
    ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_TOPPING": {
        //B1: lấy dữ liệu từ payload ra
        const { id, quantity } = payload;
        //b2: clone state.burger
        let burgerUpdate = [...state.burger];
        let item = burgerUpdate.find((it) => it.id === id);
        if (item) {
          item.quantity += quantity;
          if (item.quantity === 0) {
            alert("Tối thiểu là 1");
            item.quantity = 1;
          }
        }
        //b3; update lại state
        state.burger = burgerUpdate;
        return { ...state };
      }
   
  default:
    return state
  }
}
