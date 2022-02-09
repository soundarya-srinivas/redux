import { ADD_TO_CART } from "../constants";
import { REMOVE_CART } from "../constantsToremoveCart";


export default function cardItems(state = [],action){
    
    console.warn("action1",action);
    
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                {cardData:action.data}
            ]
            break;
            case REMOVE_CART:
                state.pop();
                return [
                    ...state,
                   
                ]
                break;

            default:
                return state
    }
}