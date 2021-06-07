export const initialState = {
    user : null,
    playlists:[],
    playing: false,
    item: null,
   // token: "BQBh5YPCVHfTTOpwgWsXU9SyTzivgsu9X8LHB0BDzIQn4IyIaRjpv1ihwnDLBi2EMOvA1ATSe0s8ew3qiQ0vLVbd0vnAnAgnhuFyMDyOuJ4gbJF-m4XNDHFMvkCk-aonbgbWUrZbmIYiyNTmNJSrBvybpR6E1Ngy5od4j1RfdpedXuvt"
}


const reducer = (state, action)  => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
           return {
                ...state,
                    user: action.user
           };
        case 'SET_TOKEN' : 
           return{
               ...state,
                token: action.token
           };
           case "SET_PLAYLISTS":
            return {
              ...state,
              playlists: action.playlists,
            };
         default:
             return state;
    }
}

export default reducer;