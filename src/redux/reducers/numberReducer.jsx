const stateDefault = 10;

//Nơi chứa các state của ứng dụng 
export const numberReducer =   (state = stateDefault, action) => {
  switch (action.type) {
    case "TANG_SL": {
      //B1: lấy giá trị payload từ action gửi lên
      const { payload } = action;
      //B2: Thay đổi state {this.setState}
      state += payload;
      //B3: return về state mới
      return state;
    }
  }
  return state;
}