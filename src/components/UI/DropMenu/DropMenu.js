import React, {Component} from "react"
import classes from './DropMenu.module.scss'
import {MoreHorizontal, Trash} from "react-feather";

class DropMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openDropMenu: false
        }

        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }


    arr = this.props.functions

    showMenu(event) {
        event.preventDefault();

        this.setState({ openDropMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    closeMenu(event) {
        this.setState({ openDropMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu)
        })
    }



    render() {
        const list = this.arr.map((el,  index) => (
            <div className={classes.list}
                 key={index}
                 onClick={() => el.fn(this.props.id)}
            >
                <div className={classes.icon}>
                    {el.icon}
                </div>
                {/*<Trash className={classes.icon} size={22}/>*/}
                {el.text}
            </div>
        ))

        let menu = this.state.openDropMenu ? (
            <div className={classes.DropMenu}>
                {list}
            </div>
        ) : null

        return (
            <div onClick={this.showMenu.bind(this)}
                 ref={(element) => { this.dropMenu = element }}
            >
                { menu }
                <MoreHorizontal className={classes.button}/>
            </div>
        )
    }


}

export default DropMenu
