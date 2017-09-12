import ToastrDispatcher, {dispatchActions} from '../ToastrDispatcher';
import ToastrTypes from '../common/ToastrTypes';

export function Pop(title, message, toastrType){
    if(!toastrType){
        toastrType = ToastrTypes.success;
    }

    if(toastrType == ToastrTypes.success){
        ToastrDispatcher.dispatch({
            type: dispatchActions.TOAST,
            payload: {
                message: message,
                title: title
            }
        })
    }
    
    else if(toastrType == ToastrTypes.danger){
        ToastrDispatcher.dispatch({
            type: dispatchActions.TOAST_DANGER,
            payload: {
                message: message,
                title: title
            }
        })
    }

    setTimeout(() => {
        RemoveFirstToastr();
    }, 5000);
}

export function RemoveFirstToastr(){
    ToastrDispatcher.dispatch({
        type: dispatchActions.CLEAR_PREVIOUS
    })
}