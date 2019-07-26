import React from 'react';
import './Problem.css';

const getRate = (passed,attemped) =>{
    if (attemped===0) return "0%";
    let tempRate=passed / attemped;
    tempRate*=100;
    return `${parseInt(tempRate.toPrecision(2))}%`
}
const Problem = (props) =>{
    const prob=props.prob;
    return(
        <tr className={`problem-component ${props.attemp?(props.solved?"solved":"unsolved"):""}`}>
            <td>{prob.id}</td>
            <td>{prob.title}</td>
            <td>{prob.tags.reduce((cur,next)=>{return cur+next;})}</td>
            <td>{prob.difficulty}</td>
            <td>{getRate(prob.passed,prob.attemp)}</td>
        
        </tr>
    )
}

export default Problem;