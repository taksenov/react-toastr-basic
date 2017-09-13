import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ToastrTypes from '../common/ToastrTypes';

export default class ToastrItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: ''
        }
    }

    componentWillMount(){
        let className = 'toaster animated';
        if(this.props.toastrType == ToastrTypes.danger){
            className += ' danger shake';
        } else if (this.props.toastrType === ToastrTypes.success) {
            className += ' success';
        } else {
            className += ' fadeIn';
        }
        this.setState({className:className})
    }

    render(){
            return (
                <div className={this.state.className}>
                    <strong>{this.props.title}</strong>
                    <br />
                    {this.props.message}
                </div>
            )
    }
}

ToastrItem.propType = {
    title      : PropTypes.string.isRequired,
    message    : PropTypes.string.isRequired,
    toastrType : PropTypes.string
}

ToastrItem.defaultProps = {
    toastrType: 'default'
}