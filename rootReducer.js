const initState = {
    value : 0
}

const reducer = (state = initState, action) => {
    if(action.type == 'positive'){
        let value = state.value + 1;
        return {value: value};
    }else{
        if(action.type == 'negetive'){
            let value = state.value - 1;
            return {value: value};
        }else{
            let value = state.value;
            return {value: value};
        }
    }

}

export default reducer;