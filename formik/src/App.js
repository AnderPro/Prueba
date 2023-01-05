import { Formik, Form, Field, ErrorMessage } from 'formik'
import InputText from './components/InputText'
import CheckBox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'

const validate = (values) => { // validatte se ejecuta cuando tocamos el campo
  const errors = {}

  if(!values.name){
    errors.name = 'Requerido'
  } else if(values.name.length < 5){
    errors.name = 'El nombre es muy corto'
  }


  if(!values.lastname){
    errors.lastname = 'Requerido'
  } else if(values.lastname.length < 5){
    errors.lastname = 'El apellido es muy corto'
  }


  if(!values.email){
    errors.email = 'Requerido'
  } else if(values.email.length < 5){
    errors.email = 'El email es muy corto'
  }


  if(!values.radio){
    errors.radio = 'Requerido'
  }
  console.log(values)

  return errors;
} 

function App() {
  return (
    <Formik 
      initialValues={{ name: '', lastname: '', email: '', pan: '', radio: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
        <Form>
         
          <InputText name='name' label='Nombre'/>
          <br />

          <label>Apellido</label>
          <Field name='lastname' type='text'/>
          <ErrorMessage name='lastname'/>

          <br />
          <label>Email</label>
          <Field name='email' type='email'/>
          <ErrorMessage name='email'/>

          <Select name='pan' label='Tipo de pan'>
            <option value=''>Seleccione un pan</option>
            <option value='pan-rico'>Pan Rico</option>
            <option value='pan-dulce'>Pan Dulce</option>
            <option value='pan-sal'>Pan Sal</option>
          </Select>

          <CheckBox name='accept'>Acepto Terminos y condiciones</CheckBox> 

          <Radio name='radio' value='radio1' label='radio1'></Radio>
          <Radio name='radio' value='radio2' label='radio2'></Radio>
          <Radio name='radio' value='radio3' label='radio3'></Radio>
          <ErrorMessage name='radio'/>
            <button type='submit'>Enviar</button>

        </Form>

    </Formik>
  );
}
export default App;
