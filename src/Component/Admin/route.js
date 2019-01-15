import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Ax from '../../tools/Ax'
import Admin from './Admin'
import Test from './Test/Test'

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
                    <Route path="/" exact component={Admin}/>
                    <Route path="/test"  component={Test}/>
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
