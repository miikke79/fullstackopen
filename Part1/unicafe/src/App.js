import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (

  <div>
   <p>good {props.good}</p>
   <p>neutral {props.neutral}</p>
   <p>bad {props.bad}</p>
   <p>all {props.all}</p>
   <p>average {props.average}</p>
   <p>positive {props.positive} %</p>
  </div>
  
)

const App = () => {
  
  // save clicks of each button to its own state
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
