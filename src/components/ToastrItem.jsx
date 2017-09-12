import React, {Component} from 'react';
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
    title: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
    toastrType: React.PropTypes.string
}

ToastrItem.defaultProps = {
    toastrType: 'success'
}