import { MutationTree } from "vuex"

const mutations:MutationTree<any> = {
    SET_USER(state:any,user:any):void{
        state.user = user;
    }
}

export default mutations;