import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Ax from '../../tools/Ax'
import Login from './Login'
import Register from './Register'
import Logout from './Register'
import Forget from './Forget'

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {

    }

    render() {

        let routes

        if (this.props.get.isAuthenticated){
            routes = (
                <Switch>
                    <Route path="/logout" exact component={Logout}/>
                </Switch >
            );
        }
        else {
            routes = (
            <Switch>
                <Route path="/login"  component={Login}/>
                <Route path="/register"  component={Register}/>
                <Route path="/forget"  component={Forget}/>
            </Switch >
            );
        }


        return (

            <Ax>
                {routes}
            </Ax>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Services));
