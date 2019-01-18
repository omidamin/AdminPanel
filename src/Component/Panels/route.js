import React, {Component} from 'react';
import {Route, Switch, withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Ax from '../../tools/Ax'
import Panel from './Panel'
import Home from '../Home/Home'

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {

    }

    render() {

        return (

            <Ax>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/admin" exact component={Panel}/>
                    <Redirect from="/" to='/'/>
                </Switch >
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
