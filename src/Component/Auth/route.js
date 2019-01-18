import React, {Component} from 'react';
import {Route, Switch, withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './Login'
import Register from './Register'
import Forget from './Forget'
import ResetPass from './Forget'
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
                    <Route path="/" exact component={Login}/>
                    <Route path="/signUp"  component={Register}/>
                    <Route path="/forget"  component={Forget}/>
                    <Route path="/resetPass"  component={ResetPass}/>
                    <Redirect from="/" to='/'/>
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
