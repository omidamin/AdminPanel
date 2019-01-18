import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Spiner from './tools/Spinner/SpinnerSimple'

import Ax from "./tools/Ax";
import Auth from './Component/Auth/route'
import Panel from './Component/Panels/route'
import './tools/scss/public.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

class App extends Component {


    render() {

        let routes

        if (this.props.get.isAuthenticated){
            routes = (
                <Ax>
                    <Panel/>
                </Ax>
            );
        }
        else {
            routes = (
                <Ax>
                    <Auth/>
                </Ax>
            );
        }

        return (
            <div>
                {this.props.get.loading ? <Spiner/> : null}
                {routes}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

