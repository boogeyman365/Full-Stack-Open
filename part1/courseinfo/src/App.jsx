const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    console.log('Header props: ', props);
    return <h1>{props.course.name}</h1>
  }

  const Part = (props) => {
    console.log('Part props: ', props);
    const { name, exercises } = props.part
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }

  const Content = (props) => {
    console.log('Content props: ', props);
    const {parts} = props
    console.log('Content parts: ', parts);
    return (
      <div>
          <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
          </div>
      </div>
    )
  }

  const Total = (props) => {
    const {parts} = props
    const [exercises1, exercises2, exercises3] = parts.map(part => part.exercises)
    return (
        <h3><b>Total of exercises: {exercises1 + exercises2 + exercises3}</b></h3>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App