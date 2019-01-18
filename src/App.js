import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Spiner from './tools/Spinner/SpinnerSimple'

import Ax from "./tools/Ax";
import Auth from './Component/Auth/route'
import Admin from './Component/Admin/route'
import './tools/scss/public.scss'

class App extends Component {


    render() {

        let routes

        if (this.props.get.isAuthenticated){
            routes = (
                <Ax>
                    <Auth/>
                </Ax>
            );
        }
        else {
            routes = (
                <Ax>
                    <Auth/>
                    <Admin/>
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

