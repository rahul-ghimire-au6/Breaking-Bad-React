import * as action_type from '../actions/action_type'

const initial_state={
    data:[]
}

const reducer=(state=initial_state,action)=>{
    switch(action.type){
        case action_type.Fetch_data: return {
            data : state.data=action.payload
        }
        case action_type.Fetch_specific_data: return {
            data : state.data=action.payload
        }
        default : return state
    }

}

export default reducer