

const stateDefault = {
    commentInfo: {
        name: 'Nguyen Van E',
        content: 'Solo Yasuuuu'
    },
    arrComment: [
        {name:'Nguyễn Văn A', content:'Like like like'},
        {name:'Nguyễn Văn B', content:'Like like like'},
        {name:'Lê Thị C', content:'Sleep sleeppp'}
    ]
}

export const commentReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'HANDLE_CHANGE': {
            //B1: lấy ra dữ liệu action gửi lên 
            const { id, value} = action.payload;
            //B2: Đối với state là Object or Array thì clone state ra
            let commetInforUpdate = {...state.commentInfo}
            //B3: Thay đổi state
            commetInforUpdate[id] = value;
            //B4: Gán state cũ bằng state update
            state.commentInfo = commetInforUpdate;
            return {...state}; //Immutable: tính bất biến của Redux
        }
        default:
            return state;
    }
}