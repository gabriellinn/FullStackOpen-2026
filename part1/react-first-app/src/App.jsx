const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part={content.part[0]} exercise={content.exercises[0]} />
      <Part part={content.part[1]} exercise={content.exercises[1]} />
      <Part part={content.part[2]} exercise={content.exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const exercises = [10,7,14];
  const parts = ['Fundamentals of React','Using props to pass data',' State of a component'];

  return (
    <>
      <Header course = {course} />
      <Content part={parts} exercises={exercises}  />
      <Total sum={exercises[0] + exercises[1] + exercises[2]} />
    </>
  )
}

export default App