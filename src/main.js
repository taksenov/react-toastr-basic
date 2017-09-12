import ToastrContainer from './ToastrContainer';
import * as ToastrActions from './actions/ToastrActions';
import ToastrTypes from './common/ToastrTypes';
import './styles/react-toastr-basic.css';

export default ToastrContainer;

const Toast = ToastrActions.Pop;
const ToastDanger = (title, msg) => {
    ToastrActions.Pop(title, msg, ToastrTypes.danger);
}

const toastrStyle = './styles/react-toastr-basic.css';

const ToastSuccess = (title, msg) => {
     ToastrActions.Pop(title, msg, ToastrTypes.success);
}
export {Toast, ToastrTypes, ToastDanger, ToastSuccess};