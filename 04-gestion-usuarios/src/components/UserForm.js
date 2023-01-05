import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({submit}) => {
  const [formulario,handleChange, reset] = useFormulario(
    {name:'', lastname: '', email: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formulario)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        name='name' 
        value={formulario.name} 
        onChange={handleChange} 
        label='Nombre: ' 
        placeholder= {'Ingrese un nombre'}
        />

      <Input 
        name='lastname' 
        value={formulario.lastname} 
        onChange={handleChange} 
        label='Apellido: ' 
        placeholder= {'Ingrese un apellido'}
        />

      <Input 
        name='email' 
        value={formulario.email} 
        onChange={handleChange} 
        label='Correo: ' 
        placeholder= {'Ingrese un correo'}
        />

        <Button>Enviar</Button>
    </form>

  )
}

export default UserForm
