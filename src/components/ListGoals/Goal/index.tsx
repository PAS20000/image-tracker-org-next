import * as React from 'react'
import css from './index.module.css'
import ProgressBar from "@ramonak/react-progress-bar";

type Header =  {
    value : string
    icon : React.ReactNode
    billing_target : number
}

interface Props {
    header ?: Header
    content : Omit<Header, 'billing_target'>
    text : string
}

const Goal = ({
    header,
    content,
    text
} : Props) => {
    const init = 114.98
    const CalcPercentGoal = (billing_target : number) => {
        return (init * 100 / billing_target).toFixed(2)
    }
    return (
        <>    
            {header?.icon && header.value &&
              <div className={css['header-container']}>
                <h3>
                    <span className={css['icon']}>
                        {header.icon}
                    </span>
                    <div>{header.value}</div>
                </h3>
                <div className={css['header-goal']}>
                    <h4 className={css['goal-values']}>
                        <span className={css['goal-values-init']}>
                            ${init.toFixed(2)}
                        </span> 
                        {' -> '}
                        <span className={css['goal-values-billing-target']}>
                            ${header.billing_target.toFixed(2)}
                        </span>
                    </h4>
                    <ProgressBar 
                        completed={CalcPercentGoal(header.billing_target)}
                        bgColor='linear-gradient(#4413F2, #EE05F2)'
                        customLabel={`${CalcPercentGoal(header.billing_target)}%`}
                        labelSize='1rem'
                        barContainerClassName={css['background-progress-bar']}
                    />
                </div>
              </div>
            }
            <li>
                <h4 style={{display:'flex'}}>
                    <div className={css['list-title-icon']}>{content.icon}</div>
                    <div>{content.value}</div>
                </h4>
                <p>
                    {text}
                </p>
            </li>
        </>
    )
}

export default Goal