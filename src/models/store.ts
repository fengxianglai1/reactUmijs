const UserMode = {
    state:{
        token:'12312412421421' || localStorage.getItem("token"),
        loading:false
    },
    reducers:{
        setToken(state:any,action:any){
            return {...state,token:action.payload}
        },
        setLoading(state:any,action:any){
            return {...state,loading:action.payload}
        },
    }
}

export default UserMode;