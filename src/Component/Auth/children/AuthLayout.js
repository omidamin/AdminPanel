import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import  '../css/Auth.scss'

class AuthLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {


        return (
            <div className="AuthLayout">
                <div className="centered">
                    <div className="AuthBox">

                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        get: state.main
    };
};

const mapDispatchToProps = dispatch => {
    return {
        set: (data, type) => dispatch({type: type, data: data}),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthLayout));
