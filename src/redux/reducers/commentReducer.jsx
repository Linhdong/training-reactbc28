

const stateDefault = {
    commentInfo: {
        name: '',
        content: ''
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
        case 'HANDLE_SUBMIT':{
            //B1 lấy ra dữ liệu action gửi lên 
            let commet = action.payload;
            //B2: Đối với state là object hoặc array => clone state ra 
            let arrCommentUpdate = [...state.arrComment];
            //B3: Cập nhật state
            arrCommentUpdate.push(commet);
            state.arrComment = arrCommentUpdate;
            console.log('Arrcomment: ',state.arrComment);
            return {...state};
        }
        case 'DELETE_CONTENT':{
            //B1: Lấy dữ liệu từ payload
            let index = action.payload;
            //B2: clone state state.arrComment và xử lý
            let arrDELETE_CONTENT = [...state.arrComment];
            arrDELETE_CONTENT.splice(index,1);
            state.arrComment = arrDELETE_CONTENT;
            return {...state};
        }
        case 'EDIT_CONTENT':{
            //B1 lấy dữ liệu từ payload
            let index = action.payload;
            //B2: clone state state.arrComment và xử lý
            let commentInfoUpdate = {...state.commentInfo};
            commentInfoUpdate = state.arrComment[index];
            //Cập nhật lại state
            state.commentInfo = commentInfoUpdate;
            return {...state};
        }
        case 'UPDATE_CONTENT':{
            //Clone state.arrComment
            let arrCommentUpdate = [...state.arrComment];
            //Tìm comment có nam và nội dung trong mảng
            let cmt = arrCommentUpdate.find(comment => comment.name === state.commentInfo.name);
            if(cmt){
                cmt.content = state.commentInfo.content;
            }
            state.arrComment = arrCommentUpdate;
            return {...state};
        }
        default:
            return state;
    }
}