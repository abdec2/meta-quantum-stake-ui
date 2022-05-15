import classNames from "classnames"
import { useState } from "react"

export type stakeDetail = {
    plan: number
    duration: string
    apy: string
}
const plans = [
    {
        plan: 1,
        duration: '6 Months', 
        apy: '40%'
    },
    {
        plan: 2,
        duration: '1 Years', 
        apy: '80%'
    },
    {
        plan: 3,
        duration: '3 Years', 
        apy: '180%'
    }
]

const StakeDetails = () => {
    const [plan, setPlan] = useState<stakeDetail>(plans[0])
    
    return (
        <>
            <div className="p-6 flex items-center justify-center space-x-8">
                <button className={classNames('uppercase truncate text-sm font-bold px-2 py-1 border-2 border-[color:var(--border-color)] hover:text-yellow-500', {'text-yellow-500': plan.plan == 1})} onClick={()=> setPlan(plans[0])}>6 Months</button>
                <button className={classNames('uppercase truncate text-sm font-bold px-2 py-1 border-2 border-[color:var(--border-color)] hover:text-yellow-500', {'text-yellow-500': plan.plan == 2})} onClick={()=> setPlan(plans[1])}>1 Years</button>
                <button className={classNames('uppercase truncate text-sm font-bold px-2 py-1 border-2 border-[color:var(--border-color)] hover:text-yellow-500', {'text-yellow-500': plan.plan == 3})} onClick={()=> setPlan(plans[2])}>3 Years</button>
            </div>
            <div className="mt-4 flex items-start justify-between">
                <div className="space-y-4 text-sm mr-4">
                    <p>Lock period: {plan.duration}</p>
                    <p>Re-locks on registration: Yes</p>
                    <p>Status: Locked</p>
                </div>
                <div className="text-center md:mr-6">
                    <h3 className="uppercase text-2xl font-light">APY</h3>
                    <h1 className="font-bold text-4xl text-yellow-500">{plan.apy}</h1>
                </div>
            </div>
        </>
    )
}

export default StakeDetails