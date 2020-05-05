import React, {Component} from "react"
import classes from './OperationsList.module.scss'

class OperationsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            transactions: [

            ]
        }
    }

    componentDidMount() {
        console.time('a')
        this.props.transactions.forEach(transaction => {
            const wallet = this.props.wallets.find(wallet => wallet.id === transaction.walletId)
            console.log(wallet)

            transaction.wallet = wallet.name
            transaction.currency = wallet.currency
        })

        console.log(this.props.transactions)


        this.setState({
            transactions: this.props.transactions
        })

        console.log(this.state)
    }

    arr = [
        {
            text: {
                    name: 'Food',
                    wallet: 'Bank'
                },
            data: '12/12/2020',
            cash: 100
        },
        {
            text: {
                name: 'Food',
                wallet: 'Bank'
            },
            data: '12/12/2020',
            cash: -100
        },
        {
            text: {
                name: 'Food',
                wallet: 'Bank'
            },
            data: '12/12/2020',
            cash: 100
        },
    ]



    render() {
        this.item = this.state.transactions.map((transaction, item) => {
            const clsCash = [classes.cash]

            transaction.cash > 0
                ? clsCash.push(classes.income)
                : clsCash.push(classes.expensive)

            return (
                <div className={classes.item} key={item}>
                    <div className={classes.text}>
                        <div className={classes.type}>{transaction.type}</div>
                        <div className={classes.wallet}>{transaction.wallet}</div>
                    </div>

                    <div className={classes.date}>
                        {transaction.date}
                    </div>

                    <div className={clsCash.join(' ')}>
                        {transaction.cash}
                    </div>
                </div>
            )
        })
        return (
            <div className={classes.OperationsList}>
                <div className={classes.title}>
                    Transactions
                </div>

                <div className={classes.list}>
                    {this.item}
                </div>


            </div>
        )
    }


}

export default OperationsList
