import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'
import useFormulario from './hooks/useFormulario'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange] = useFormulario({name:'', lastname: '', email: ''})

  const submit = (e) => {
    e.preventDefault()
    setUsuarios([ 
      ...usuarios,
      formulario
    ])
  }
  console.log(formulario, 'el ', usuarios)
  return (

    <Container>
      <Card>
        <div style={{padding: 20}}>
          <form onSubmit={submit} >
            <Input 
              label="Nombre" 
              name="name" 
              value={formulario.name} 
              onChange={handleChange}/>

            <Input 
              label="Apellido" 
              name="lastname" 
              value={formulario.lastname} 
              onChange={handleChange}/>

            <Input 
              label="Correo" 
              name="email" 
              value={formulario.email} 
              onChange={handleChange}/>

            <Button>Enviar</Button>

          </form>

        </div>
      </Card>
    </Container>
  );
}

export default App;
