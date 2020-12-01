export const initalState = {
    avatar: '',
    favorites: [],
    appointments: []
}

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setAvatar':
            return {...state, avatar:action.playload.avatar};
            breack;
        default:
            return state;
    }
}