import React, {Component} from "react"
import classes from './AddTransactions.module.scss'
    import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button/Button";
import 'react-day-picker/lib/style.css';
import {validate, validateForm} from "../../../../form/FormFramework";

class AddTransactions extends Component {

    state = {
        isFormValid: false,
        formControls: {
            cash: {
                value: '',
                type: 'number',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            },
            date: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }
        }
    }

    onChangeHandler(event, name) {

        const formControls = {...this.state.formControls}
        const control = {...formControls[name]}
        control.touched = true
        control.valid = validate(event.target.value, control.validation)
        control.value = event.target.value


        formControls[name] = control
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
        console.log(this.state.formControls.name)
    }

    render() {
        return (
            <div className={classes.AddTransactions}>
                <div className={classes.title}>Add transaction</div>
                <div className={classes.row}>
                    <Input
                        valid = {this.state.formControls.cash.valid}
                        type={this.state.formControls.cash.type}
                        touched = {this.state.formControls.cash.touched}
                        placeholder={'Cash'}
                        onChange={event => this.onChangeHandler(event, 'cash')}
                    />
                    <Input
                        valid = {this.state.formControls.date.valid}
                        type={this.state.formControls.date.type}
                        touched = {this.state.formControls.date.touched}
                        placeholder={'Date'}
                        onChange={event => this.onChangeHandler(event, 'date')}
                    />
                </div>

                <Button
                    disabled={!this.state.isFormValid}
                >Add transaction</Button>
            </div>

        )
    }

}

export default AddTransactions
