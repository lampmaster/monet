import React from "react"
import classes from './TotalBalance.module.scss'

const TotalBalance = props => {

    const balance = props.cash.reduce((prev, cur) => prev + +cur.cash, 0)

    return (
        <div className={classes.TotalBalance}>
            <div className={classes.title}>
                Total balance
            </div>
            <div className={classes.balance}>
                {balance + ' $'}
            </div>
            <div className={classes.statistics}>
                <div className={classes.item}>
                    <div className={classes.title}>
                        income
                    </div>
                    <div className={classes.row}>
                        <div className={classes.income}/>
                        <div className={classes.percent}>17%</div>
                    </div>

                </div>

                <div className={classes.item}>
                    <div className={classes.title}>
                        Expensive
                    </div>
                    <div className={classes.row}>
                        <div className={classes.expensive}/>
                        <div className={classes.percent}>17%</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TotalBalance
