import React, {Component} from "react"
import classes from './AddWallet.module.scss'
import Input from "../../../../../components/UI/Input/Input";
import Button from "../../../../../components/UI/Button/Button";
import Select from "../../../../../components/UI/Select/Select";
import {validate, validateForm} from "../../../../../form/FormFramework";

class AddWallet extends Component {

    state = {
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            },
            cash: {
                value: '',
                type: 'number',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            },
            currency: {
                value: '',
                validation: {
                    required: false
                }
            }
        }
    }

    componentDidMount() {
        const formControl = {...this.state.formControls}
        formControl.currency.value = '$'

        this.setState({
            formControl
        })
    }

    onChangeHandler(event, name) {

        const formControls = {...this.state.formControls}
        const control = {...formControls[name]}
        control.touched = true
        control.valid = validate(event.target.value, control.validation)
        control.value = event.target.value


        formControls[name] = control
        console.log(event.target.value, formControls.name)
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
        console.log(this.state.formControls.name)
    }

    parseValue() {

        const formControls = {...this.state.formControls}
        const result = {
            name: '',
            cash: '',
            currency: ''
        }
        for (let key in formControls) {
            result[key] = formControls[key].value
        }

        this.props.onAdd(result)
    }


    render() {
        return (
            <div className={classes.AddWallet}>
                <div>
                    <Input
                        valid = {this.state.formControls.name.valid}
                        touched = {this.state.formControls.name.touched}
                        onChange = {event => this.onChangeHandler(event, 'name')}
                        placeholder="Wallet name"
                    />
                </div>
                <div className={classes.cash}>
                    <div className={classes.input}>
                        <Input
                            valid = {this.state.formControls.cash.valid}
                            type={this.state.formControls.cash.type}
                            touched = {this.state.formControls.cash.touched}
                            onChange={event => this.onChangeHandler(event, 'cash')}
                            placeholder="Cash"
                        />
                    </div>
                    <div className={classes.select}>
                        <Select
                            value={this.state.formControls.currency.value}
                            onChange={event => this.onChangeHandler(event, 'currency')}
                        >
                            <option>$</option>
                            <option>₽</option>
                            <option>฿</option>
                        </Select>
                    </div>
                </div>
                <div className={classes.control}>
                    <Button
                        onClick={this.parseValue.bind(this)}
                        disabled={!this.state.isFormValid}
                    >Add wallet</Button>
                </div>
            </div>
        )
    }


}

export default AddWallet
