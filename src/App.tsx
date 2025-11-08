import ButtonComponent from "./TypeComponents/ButtonComponent"
import Component2Component from "./TypeComponents/Component2Component"
import Container from "./TypeComponents/Container"
import Heading from "./TypeComponents/Heading"
import Input from "./TypeComponents/Input"
import PersonList from "./TypeComponents/PersonList"
import StatusComponent from "./TypeComponents/StatusComponent"

  const PersonDB = [
    {
      id: 1,
      name: "Phinehas",
      age: 32
    },
    {
      id: 2,
      name: "Dadi",
      age: 32
    },
    {
      id: 3,
      name: "Fani",
      age: 32
    },
]

function App() {

  return (
    <>
      <div>
        <PersonList person={PersonDB} />
        <StatusComponent status="loading" />
        <Heading>
          Placeholder text
        </Heading>
        {/* passing a component to a component */}
        {/* <Container styles={{padding:"2px", color:"blue"}}>
           
        </Container> */}
        <Component2Component>
          <Heading >
            <PersonList person = {PersonDB} />
            
          </Heading>
        </Component2Component>
        <Input value="Enter name" handleChange={(event) =>{return console.log(event.currentTarget)}} />
        <ButtonComponent handleClicked={(event)=>{
          console.log(event.target)
        }}/>
      </div>
    </>
  )
}

export default App

// what are 'IntrinsicAttributes & String'.ts(2322)