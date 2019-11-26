import { AppState } from './app-state'
import { AnyAction } from 'redux'
import { ActionType } from './action-type';


// the reducer function needs to get the AppState as an argument
// nad the needed action to perofrm.
// But it must not change the AppState given object!!
// so we copy the object and return the new state

export function reducer(oldState: AppState, action: AnyAction): AppState {

    const newState = { ...oldState } // spread operator - משכפל כל האוביקט לאוביקט חדש

    switch (action.type) {
        case ActionType.GetAllProducts:
            newState.products = action.payload;
            break;
        case ActionType.AddProduct:
            newState.products.push(action.payload);
            break;
        // etc...
        // case ActionType.AddProduct:
        //     newState.products.push(action.payload);
        //     break;
        // case ActionType.AppProduct:
        //     newState.products.push(action.payload);
        //     break;
        default:
            break;
    }
    return newState;
}