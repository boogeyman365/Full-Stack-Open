import { useState } from 'react'
import './App.css';

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Anecdote = (props) => {
  return (
    <div className="anecdote">
      <h2>Anecdote of the day</h2>
      <p>{props.anecdote}</p>
      <p>Votes: {props.votes}</p>
    </div>
  )
}

const MostVotedAnectode = (props) => {

  const anecdote = props.anecdotes[props.votes.indexOf(Math.max(...props.votes))]
  const votes = props.votes[props.votes.indexOf(Math.max(...props.votes))]

  return (
    <div className="anecdote">
      <h2>Anecdote with most votes</h2>
      <p>{ anecdote }</p>
      <p>Votes: { votes }</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text="Vote" onClick={() => vote()} />
      <Button text="Next Anecdote" onClick={() => randomAnecdote()} />
      <MostVotedAnectode anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App