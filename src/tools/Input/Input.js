import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as T from '../../tools/translate/actionTranslate';
import * as V from '../../tools/validation/Validation'
import Ax from '../Ax'
import Tooltip from 'antd/lib/tooltip'
import  Select  from 'antd/lib/select';
const Option = Select.Option;

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'',
            errors:'',
        }
    }

    convertPersianToEnglish(value){

        return value
    }

    handleChange(valids,validation={} ,event) {
        console.log(event);
        let convertValue=this.convertPersianToEnglish(event.target.value.toString());
        this.setState({value:this.convertPersianToEnglish(event.target.value.toString())});

        this.handleValidation((valid) => {
            this.handleRequest(valid)
        }, valids,event.target.value, event,validation,convertValue)
    }

    handleChangeSelect(e){

        this.props.onChangeProps(e,this.props.name,true)
    }

    handleValidation(callback, valids,value, event=null,validation,convertValue) {

        let errors = '';
        let formIsValid = true;
          if(convertValue!==undefined){
              value=convertValue
          }
       valids.map((valid)=>{
           let res;
           if (event.target.id !== '') {
                res= V[valid](value,T[event.target.id],validation);
           } else {
                res= V[valid](value,T[event.target.name],validation);
           }

           if (res!=null) {
               formIsValid = false;
               errors=res;
           }
           return 1;
       });

        this.setState({errors}, () => {
            return callback(formIsValid);
        });

    }

    handleRequest(isValid,value) {

        this.props.onChangeProps(this.state.value,this.props.name,isValid);
    }

    render() {
        let inputElement = null;
        let option;

        if (this.props.children !== undefined) {
           option=this.props.children;
        }else {
            if (this.props.option !== undefined) {
                option = this.props.option.map((a, i) =>
                    <Option key={i} value={a.value}>{a.title}</Option>
                )
            }
        }

        switch (this.props.elementType) {
            case ( 'input' ):
                inputElement = <input
                    autoComplete={this.props.autoComplete}
                    disabled={this.props.disabled}
                    type={this.props.type}
                    className={this.props.classes}
                    {...this.props.elementConfig}
                    value={this.props.value}
                    name={this.props.name}
                    id={this.props.name2}
                    placeholder={this.props.placeholder}
                    dir={this.props.dir}
                    onChange={this.handleChange.bind(this,this.props.valids,this.props.validation)}
                />;
                break;
            case ( 'textarea' ):
                inputElement = <textarea
                    placeholder={this.props.placeholder}
                    className={this.props.classes}
                    {...this.props.elementConfig}
                    value={this.props.value}
                    name={this.props.name}
                    onChange={this.handleChange.bind(this,this.props.valids,this.props.validation)}

                />;
                break;
            case ( 'select' ):
                inputElement = (
                    <select
                        className={this.props.classes}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.handleChange.bind(this,this.props.valids,this.props.validation)}
                    >
                        {this.props.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                );
                break;
                case ( 'selectAnt' ):
                inputElement = (
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        value={this.props.value}
                        optionFilterProp="children"
                        onChange={this.handleChangeSelect.bind(this)}
                    >
                        {option}
                    </Select>
                );
                break;
            default:
                inputElement = <input
                    className={this.props.classes}
                    value={this.props.value}
                    onChange={this.handleChange.bind(this,this.props.valids)}
                />;
        }
        let someStyle={height:0};
        if (this.props.label === ''){
             someStyle={height:30}
        }
        return (
            <Ax>

                {this.props.label !== '' ?
                    <label>{this.props.label} {this.props.required && <span style={{'color':'red'}}>*</span>}</label>
                    : ''
                }
                {inputElement}
                {this.props.name===this.props.element?
                <Tooltip
                    visible={(this.props.get.inputError !== ''&& this.props.get.inputError!== undefined &&this.props.id===this.props.get.id)}
                    placement="bottom"
                    title={<span style={{'color': 'red'}}>{this.props.get.inputError}</span>}>
                   <div style={{...someStyle,'width':'100%'}}>

                   </div>
                </Tooltip>:''}

            </Ax>
        );

    }


}


const mapStateToProps = state => {
    return {
        get:state.main
    };
};

const mapDispatchToProps = dispatch => {
    return {
        set: (data, type) => dispatch({type: type, data: data}),
    };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Input ) );































