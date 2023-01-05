import { useField } from 'formik'

const InputText = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label>{label}</label>
      <input {...field} {...props}/> 
      {meta.touched && meta.error ? <div>{meta.error}</div>: null}
    </div>
  )
}

export default InputText
