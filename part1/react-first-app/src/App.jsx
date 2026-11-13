console.clear()

const Header = props => {
  return (
    <h1>{props.title}</h1>
  )
}

const Part = props => {
  return (
    <p>
      {props.cont}
    </p>
  )
}

const Content = content => {

  const partes = content.part.map((parte) => {
   return <p> {parte.name + ': ' + parte.exercises} </p>;
  });

  return (
    <div>
      <Part cont={partes} />
    </div>
  )
}

 const Total = props => {

   const total = () => { 
    let soma = 0;
    
    for(let i=0;i<props.sum.length;i++){
      soma += props.sum[i].exercises;
    }
    return soma;
    };

   return (
     <p>Number of exercises: {total()}</p>
   )
 }

const App = () => {

  const course = {

    title: 'Half Stack application development',

    parts: [{
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
  ]};

  
  
  return (
    <>
      <Header title={course.title} />
      <Content part={course.parts}  />
      <Total sum={course.parts} />
    </>
  )
}

export default App