import { useLazyQuery } from "@apollo/client"
import { useEffect } from "react"
import { useState } from "react"
import { FIND_PERSON } from "../queries"
import PersonForm from "./PersonForm"

const Persons = ({ persons }) => {

  const [getPerson, result] = useLazyQuery(FIND_PERSON)
  const [person, setPerson] = useState(null)
  const [showPersonForm, setShowPersonForm] = useState(false)

  const showPerson = (name) => {
    getPerson({ variables: { nameToSearch: name } })
  }


  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson)
    }
  }, [result])


  if (person) {
    return(
      <div>
        <h2>{person.name}</h2>
        <div>{person.address.street} {person.address.city}</div>
        <div>{person.phone}</div>
        <button onClick={() => setPerson(null)}>close</button>
      </div>
    )
  }

  if (showPersonForm) {
    return (
      <PersonForm setCloseForm={() => setShowPersonForm(false)} />
    )
  }

  return (
    <div>
      <h2>Persons</h2>
      {persons.map(p =>
        <div key={p.name}>
          {p.name} {p.phone}

          <button onClick={() => showPerson(p.name)} >
            show address
          </button>
        </div>
      )}
        <button onClick={() => setShowPersonForm(!showPersonForm)}>show person form</button>
    </div>
  )
}

export default Persons