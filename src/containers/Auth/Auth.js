import React, {Component} from "react";
import classes from './Auth.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import {Logo} from "../Main/components/Logo/Logo";
import {validate, validateForm} from "../../form/FormFramework";
import {connect} from "react-redux";
import {auth} from "../../store/actions/auth";


class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                placeholder: 'E-mail',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                placeholder: 'Password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        )
    }

    registration = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        )
    }
    submitHandler = (event) => {
        event.preventDefault()
    };

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }
        control.value = event.target.value
        control.touched = true
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control
        const isFormValid = validateForm(formControls)

        this.setState({
            formControls,
            isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    type={control.type}
                    placeholder={control.placeholder}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }


    render() {


        return (
            <div className={classes.Auth}>
                <div className={classes.Container}>
                    <Logo/>
                    <form
                        onSubmit={this.submitHandler}
                        className={classes.Authform}
                    >
                        <div className={classes.col}>
                            {this.renderInputs()}
                        </div>

                        <div className={classes.col}>
                            <Button
                                type={'prime'}
                                onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}
                            >
                                Log in
                            </Button>

                            <Button
                                onClick={this.registration}
                                disabled={!this.state.isFormValid}
                            >
                                Sigh up
                            </Button>
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }

}

export default connect(null, mapDispatchToProps)(Auth)