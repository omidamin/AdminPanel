import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './children/AuthLayout'

class Forget extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {


        return (
            <div>
                <Layout>
                    Forget
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Forget));
