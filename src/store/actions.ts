import { ActionTree } from "vuex"

const actions :ActionTree<any,any> = {
    async setUser({state,commit},user:any){
        commit("SET_USER",user)
    }
};

export default actions;