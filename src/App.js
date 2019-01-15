import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Spiner from './tools/Spinner/SpinnerSimple'
import Ax from "./tools/Ax";
import Admin from './Component/Admin/route'

class App extends Component {


    render() {

        let routes = (
            <Ax>
              <Admin/>
            </Ax>
        );

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

