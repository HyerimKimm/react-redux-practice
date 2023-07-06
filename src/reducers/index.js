const initialState = '버튼을 눌러봐!';

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'HELLO': 
            return 'hello!';
        case 'LONG_TIME_NO_SEE': 
            return 'Long time no see!';
        default: return state;
    }
}

export default reducer;