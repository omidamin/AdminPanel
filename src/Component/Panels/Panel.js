import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import {Button, Container,Input } from 'reactstrap';
import  './css/Panel.scss'

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {


        return (
            <div>
                panel
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Panel));
