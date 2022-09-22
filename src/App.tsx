interface ButtonProps {
  title?: string
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Hello World"/>
    </div>
  
  )
}

export default App
