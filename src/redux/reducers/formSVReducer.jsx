const stateDefault = {
  svInfor: {
    maSV: "",
    sdtSV: "",
    tenSV: "",
    emailSV: "",
  },

  svError: {
    maSV: "",
    sdtSV: "",
    tenSV: "",
    emailSV: "",
  },

  arrSinhVien: [
    {
      maSV: 1,
      sdtSV: "0938111222",
      tenSV: "NguyenVanA",
      emailSV: "nguyenvana@gmail.com",
    },
    {
      maSV: 2,
      sdtSV: "0938323232",
      tenSV: "NguyenVanB",
      emailSV: "nguyenvanb@gmail.com",
    },
  ],

  tenSVSearch: ''
};

export const formSVReducer = (state = stateDefault, action) => {
  // console.log(action);
  switch (action.type) {
    case "HANDLE_CHANGE": {
      let {id, value, dataType} = action.payload;
      //Xử lý dữ liệu đầu vào
      let svInforChange = { ...state.svInfor };
      svInforChange[id] = value;
      //Xử lý lỗi
      let svInforError = {...state.svError};
      let notice = ''
      if(value.trim() === ''){
        notice = id + " không được để trống !!";
      }else{
            if(dataType === 'maSV'){
                let regexmaSV =  /^[0-9]+$/;
                if(!regexmaSV.test(value)){
                    notice = id + ' phải là số !!!'
            }
            }
            if(dataType === 'sdt'){
                let regexsdt = /^[0-9]+$/;
                if(!regexsdt.test(value)){
                    notice = id + ' phải là số !!!'
                }
            }
            if(dataType === 'tenSV'){
                let regextenSV = /^[A-Za-z]+$/;
                if(!regextenSV.test(value)){
                    notice = id + ' viết liền nhau và là các ký tự từ A - Z !!!'
                }
            }
            if(dataType === 'emailSV'){
                let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!regexEmail.test(value)){
                    notice = 'Vui lòng điền email như sau examle@gmail.com!!!'
                }
            }
      } 
      svInforError[id] = notice;
      //set State cho các svInfor và svError
      state.svError = svInforError;
      state.svInfor = svInforChange;
      return { ...state };
    }
    
    case "HANDLE_SUBMIT": {
      let ttsv = action.payload;
      console.log(ttsv);
      let themSV = [...state.arrSinhVien];
      themSV.push(ttsv);
      state.arrSinhVien = themSV;
      return { ...state };
    }
    case "HANDLE_DELETE": {
      let tenSV = action.payload;
      let xoaSinhVien = [...state.arrSinhVien];
      let newArrSV = xoaSinhVien.filter((sv) => sv.tenSV != tenSV);
      state.arrSinhVien = newArrSV;
      return { ...state };
    }
    case "HANDLE_EDIT": {
      let maSV = action.payload;
      let editArrSV = [...state.arrSinhVien];
      let index = editArrSV.findIndex((sv) => sv.maSV === maSV);
      state.svInfor = editArrSV[index];
      return { ...state };
    }
    case "HANDLE_UPDATE": {
      let arrInfor = [...state.arrSinhVien];
      let svInfor = arrInfor.find((sv) => sv.maSV == state.svInfor.maSV);
      if (svInfor) {
        svInfor.tenSV = state.svInfor.tenSV;
        svInfor.sdtSV = state.svInfor.sdtSV;
        svInfor.emailSV = state.svInfor.emailSV;
      }
      state.arrSinhVien = arrInfor;
      return { ...state };
    }
    // case "HANDLE_SEARCH":{
    //   let tenSV = action.payload;
    //   console.log(tenSV)
    //   let timSinhVien = [...state.arrSinhVien];
    //   let newArrSV = timSinhVien.filter((sv) => sv.tenSV === tenSV);
    //   state.arrSinhVien = newArrSV;
      
    //   return {...state};
    // }
    case "HANDLE_SEARCH":{
      let tenSV = action.payload;
      let newValue = {...state.tenSVSearch};
      newValue = tenSV;
      console.log('HANDLE_SEARCH: ',tenSV);
      state.tenSVSearch = newValue;
      return {...state};
    }

    case "HANDLE_SUBMIT_SEARCH":{
      let tenSV = action.payload;
      let timSinhVien = [...state.arrSinhVien];
      let newArrSV = timSinhVien.filter((sv) => sv.tenSV === tenSV);
      state.arrSinhVien = newArrSV;
      return {...state};
    }

    default: {
      return state;
    }
  }
};
