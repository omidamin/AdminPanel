import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import {Button, Container,Input } from 'reactstrap';
import  './css/Auth.scss'
import Layout from './children/AuthLayout'
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <Layout>

                </Layout>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
