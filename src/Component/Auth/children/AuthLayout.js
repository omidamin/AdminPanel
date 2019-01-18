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
                <div className="centeredAuth">
                    <div className="AuthBox">
                        <div className="Header">
                            <img className="logo" src="/images/svg/logo_splash.svg" alt="logo"/>
                        </div>
                        {this.props.children}
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
