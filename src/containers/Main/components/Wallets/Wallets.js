import React from "react"
import classes from './Wallets.module.scss'
import Button from "../../../../components/UI/Button/Button";
import {MoreHorizontal, Trash, PlusCircle, Plus} from "react-feather";
import DropMenu from "../../../../components/UI/DropMenu/DropMenu";

const Wallet = props => {

    let wallets
    const fn = [
        {fn: props.remove, text: 'Delete', icon: <Trash size={22}/>},
        {fn: props.addTransaction, text: 'Add transaction',  icon: <Plus size={22}/>}
        ]

    if (props.wallets.length !== 0) {
        wallets = props.wallets.map((wallet, index) => {
            return (
                <div className={classes.account} key={index}>
                    <div className={classes.title}>
                        {wallet.name}
                        <DropMenu id={wallet.id} functions={fn}/>
                    </div>
                    <div className={classes.score}>
                        <div className={classes.currency}>{wallet.currency}</div>
                        <div className={classes.balance}>{wallet.cash}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={classes.Wallets}>
            { wallets }
            <div className={classes.add}>
                <Button onClick={props.onAdd}>Add wallet</Button>
            </div>
        </div>
    )
}

export default Wallet

