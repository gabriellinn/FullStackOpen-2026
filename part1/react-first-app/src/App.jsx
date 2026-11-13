const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10;
  const friends = ["peter", "maya"];
  return (
    <>
    <h1>Greetings</h1>
      <Hello name="Gabriel" age={16 + 10} />
      <Hello name={name} age={age}/>
      <p>{friends[0]}</p>
    </>
  )
}

export default App