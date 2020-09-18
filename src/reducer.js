export const initialState={
    user:null,
    token:'BQALDrw9ELc45L-xL83mK18rsO2vEwNaeNJPjHoWWf2-MxGcBy…OdSpQNdGsP9oeOPCgty4FyZtxdbr5DTO62nFUC9sxsBh5ga3e',
    playlists:[],
    playing:false,
    item:null
}

const reducer = (state, action) =>{
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return {
                ...state, 
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state, 
                token:action.token
                }
        case 'SET_PLAYLISTS':
            return {
                
                    ...state,
                    playlists: action.playlists
                }
            
        default:
            return state
    }
}

export default reducer