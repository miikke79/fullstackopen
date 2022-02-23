import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td><td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return (<p>No feedback given</p>)
  }

  else if (props.all === 1) {
    return (
      <div>
        <table>
          <tbody>
           <StatisticLine text="good" value ={props.good} />
           <StatisticLine text="neutral" value ={props.neutral} />
           <StatisticLine text="bad" value ={props.bad} />
           <StatisticLine text="all" value ={props.all} />
         </tbody>
       </table>
     </div>
    )
  }

  else {

    return(

  <div>
    <table>
        <tbody>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all" value ={props.all} />
          <StatisticLine text="average" value ={props.average} />
          <StatisticLine text="positive" value ={props.positive} />
        </tbody>
    </table>
  </div>
)
    }
  }

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  console.log(good, neutral, bad)



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => {setGood(good+1), setAll(all+1), setAverage((good-bad)/all), setPositive((good/all)*100)}} text="good" />
      <Button handleClick={() => {setNeutral(neutral+1), setAll(all+1), setAverage((good-bad)/all), setPositive((good/all)*100)}} text="neutral" />
      <Button handleClick={() => {setBad(bad + 1), setAll(all+1), setAverage((good-bad)/all), setPositive((good/all)*100)}} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all= {all} average= {average} positive= {positive} />
    </div>
    
  )
}

export default App;
