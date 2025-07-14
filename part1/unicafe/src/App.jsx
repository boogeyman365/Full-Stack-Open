import { useState } from 'react'
import './Assets/styles.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Feedback = (props) => {

  const addGood = () => props.setGood(props.good + 1)
  const addNeutral = () => props.setNeutral(props.neutral + 1)
  const addBad = () => props.setBad(props.bad + 1)
  

  return (
    <div className="card">
      <h2>Give Feedback</h2>
      <div className="buttons-wrapper">
        <Button text="Good" onClick={() => addGood()} />
        <Button text="Neutral" onClick={() => addNeutral()} />
        <Button text="Bad" onClick={() => addBad()} />
      </div>
    </div>
  )
}

const Statistics = (props) => {

  const handleNaN = (num) => isNaN(num) ? 0 : num

  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / (props.good + props.neutral + props.bad)
  const positive = props.good / (props.good + props.bad) * 100

  return (
    <div className="card">
      <h2>Statistics</h2>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Good</td>
            <td className="good">{props.good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td className="neutral">{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td className="bad">{props.bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{handleNaN(all)}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{handleNaN(average)}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td className="positive">{handleNaN(positive)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Feedback 
        good={good} setGood={setGood} 
        neutral={neutral} setNeutral={setNeutral} 
        bad={bad} setBad={setBad} />
      
      {(good > 0 || neutral > 0 || bad > 0) ? (
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  )
}

export default App