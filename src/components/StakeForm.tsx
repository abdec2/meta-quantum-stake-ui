import classNames from 'classnames'
import { useState } from 'react'
import * as yup from 'yup'

const schema = yup.object().shape({
    amount: yup.number().required()
})

const StakeForm = () => {
    const [approve, setApprove] = useState<Boolean>(false)
    const [amount, setAmount] = useState<string>('')
    const [balance, setBalance] = useState<string>('')

    const handleApprove = () => {
        setApprove(true)
        schema.isValid({
            amount
        }).then(value => {
            console.log(value)
        })
    }

    const handleStake = () => {
        setApprove(false)
    }

    const handleWithdraw = () => {
        schema.isValid({
            amount: balance
        }).then(value => {
            console.log(value)
        })
    }

    return (
        <div className="ml-8 mt-2 mb-4">
            <div>
                <p className="text-xs font-bold uppercase text-[color:var(--font-color)]">Balance: 0000.00 QTH</p>
                <div className="w-full flex items-center justify-between">
                    <input type="text" name="amount" className="w-3/4 bg-transparent border-2 border-[color:var(--border-color)] text-md focus:outline-none px-2 py-1" value={amount} onChange={e => setAmount(e.target.value)} />
                    <button className={classNames('bg-yellow-500 text-black uppercase px-4 py-2 ml-4 text-sm font-bold hover:text-white', { 'hidden': approve })} onClick={handleApprove}>Approve</button>
                    <button className={classNames('bg-yellow-500 text-black uppercase px-4 py-2 ml-4 text-sm font-bold hover:text-white', { 'hidden': !approve })} onClick={handleStake}>Stake</button>
                </div>
            </div>
            <div className="mt-2">
                <p className="text-xs font-bold uppercase text-[color:var(--font-color)]">Stake Balance: 0000.00 QTH</p>
                <div className="w-full flex items-center justify-between">
                    <input type="text" name="amount" className="w-3/4 bg-transparent border-2 border-[color:var(--border-color)] text-md focus:outline-none px-2 py-1 " value={balance} onChange={e => setBalance(e.target.value)} />
                    <button className="bg-[#3e3f53] uppercase text-[color:var(--font-color)] px-4 py-2 ml-4 text-sm font-semibold hover:text-yellow-500" onClick={handleWithdraw}>Withdraw</button>
                </div>
            </div>
        </div>
    )
}

export default StakeForm