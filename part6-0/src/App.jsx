import { useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import { useEffect } from 'react'
import notes from './services/notes'
import { setNotes } from './reducers/noteReducer'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
  notes
    .getAll().then(notes => dispatch(setNotes(notes)))
}, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App