
const stateDefault = "./img/product/black-car.jpg";

export const imgCarReducer = (state = stateDefault, action) =>{
    switch (action.type){
        case 'CHANGE_COLOR': {
            //B1: Lấy dữ liệu ra gửi lên từ action
            const {payload} = action;
            state = payload;
            return state;
        }
        default:
            return state;
    }
  }