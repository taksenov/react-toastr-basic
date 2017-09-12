'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pop = Pop;
exports.RemoveFirstToastr = RemoveFirstToastr;

var _ToastrDispatcher = require('../ToastrDispatcher');

var _ToastrDispatcher2 = _interopRequireDefault(_ToastrDispatcher);

var _ToastrTypes = require('../common/ToastrTypes');

var _ToastrTypes2 = _interopRequireDefault(_ToastrTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pop(title, message, toastrType) {
    if (!toastrType) {
        toastrType = _ToastrTypes2.default.default;
    }

    if (toastrType == _ToastrTypes2.default.default) {
        _ToastrDispatcher2.default.dispatch({
            type: _ToastrDispatcher.dispatchActions.TOAST,
            payload: {
                message: message,
                title: title
            }
        });
    } else if (toastrType == _ToastrTypes2.default.danger) {
        _ToastrDispatcher2.default.dispatch({
            type: _ToastrDispatcher.dispatchActions.TOAST_DANGER,
            payload: {
                message: message,
                title: title
            }
        });
    } else if (toastrType == _ToastrTypes2.default.success) {
        _ToastrDispatcher2.default.dispatch({
            type: _ToastrDispatcher.dispatchActions.TOAST_SUCCESS,
            payload: {
                message: message,
                title: title
            }
        });
    }

    setTimeout(function () {
        RemoveFirstToastr();
    }, 5000);
}

function RemoveFirstToastr() {
    _ToastrDispatcher2.default.dispatch({
        type: _ToastrDispatcher.dispatchActions.CLEAR_PREVIOUS
    });
}