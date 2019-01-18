import React, {Component} from 'react';
import {Route, Switch, withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './Login'
import Register from './Register'
import Forget from './Forget'
import  './css/Auth.scss'

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {

    }

    render() {

        return (

                <Switch>
                    <Route path="/signIn"  component={Login}/>
                    <Route path="/signIn"  component={Login}/>
                    <Route path="/signUp"  component={Register}/>
                    <Route path="/forget"  component={Forget}/>
                    <Redirect from="/" to='signIn'/>
                </Switch >

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
