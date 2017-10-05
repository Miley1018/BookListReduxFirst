export default function(state=null,action){//if state if undefined, set it to null. as we can't return state when it's undefined .state is not app state
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}