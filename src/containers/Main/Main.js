import React, {Component} from "react"
import classes from './Main.module.scss'
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import Wallet from "./components/Wallets/Wallets";
import Graph from "./components/Graph/Graph";
import OperationsList from "./components/OperationsList/OperationsList";
import AddWallet from "./components/Wallets/AddWallets/AddWallet";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import TopBar from "./components/TopBar/TopBar";
import Window from "../../components/UI/Window/Window";
import AddTransactions from "./WIndows/AddTransactions/AddTransactions";

class Main extends Component {

    constructor() {
        super();
        this.state = {
            isWalletWindowOpen: false,
            isTransactionWindowOpen: false,
            wallets: [
                {
                    id: 0,
                    name: 'Bank',
                    cash: '10000',
                    currency: '$'
                },
                {
                    id: 1,
                    name: 'Wallet',
                    cash: '30000',
                    currency: '$'
                },
                {
                    id: 2,
                    name: 'Home',
                    cash: '20000',
                    currency: '$'
                },
                {
                    id: 3,
                    name: 'Wallet',
                    cash: '30000',
                    currency: '$'
                },
            ],
            transactions: [
                {
                    walletId: 0,
                    type: 'Food',
                    date: '12/12/20',
                    cash: 100,
                },
                {
                    walletId: 1,
                    type: 'Clothes',
                    date: '12/12/20',
                    cash: -100,
                },

            ]
        }
    }

    openWalletCreator = props => {
        console.log('create')
        this.setState({
            isWalletWindowOpen: true
        })
    }

    addWallet = (newWallet) => {
        const wallets = [...this.state.wallets]

        wallets.push(newWallet)
        this.setState({
            wallets,
            isWalletWindowOpen: false
        })
    }

    addTransaction = walletId => {
        console.log('Add transaction', walletId)

        this.setState({
            isTransactionWindowOpen: true
        })
    }


    windowCloseHandler = (window) => {
        console.log(222, window)
        this.setState({
            isWalletWindowOpen: false
        })
    }

    removeWallet = (id) => {
        let wallets = [...this.state.wallets]
        wallets = wallets.filter(wallet => wallet.id !== id)

        this.setState({
            wallets
        })
    }



    render() {
        return (
            <Auxiliary>
                {
                    this.state.isWalletWindowOpen
                        ? <Window onClose={this.windowCloseHandler} window={'isWalletWindowOpen'}>
                            <AddWallet
                                onAdd={this.addWallet}
                                state={this.state.wallets}
                            />
                          </Window>
                        : null
                }

                {
                    this.state.isTransactionWindowOpen
                    ? <Window>
                            <AddTransactions/>
                      </Window>
                    : null
                }



                <TopBar/>
                <div className={classes.Main}>

                    <div className={classes.left}>
                        <Graph/>
                        <OperationsList
                            transactions={this.state.transactions}
                            wallets={this.state.wallets}
                        />
                    </div>
                    <div className={classes.right}>
                        <TotalBalance cash={this.state.wallets}/>
                        <Wallet onAdd={this.openWalletCreator}
                                wallets={this.state.wallets}
                                remove={this.removeWallet}
                                addTransaction={this.addTransaction}
                        />
                    </div>
                </div>
            </Auxiliary>
        )
    }
}

export default Main
