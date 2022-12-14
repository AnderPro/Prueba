import { useState } from "react"

const App = () => {
  const [value, setValue] = useState({normal: 'Value by default', texto: '', select: '', check: true, estado: '12GB'})
  const handleChange = ({target}) => {
    setValue((state)=>(
      {
        ...state,
        [target.name]: target.type === 'checkbox' ? 
          target.checked : target.value
      }))
  }
  console.log(value)

  return (

    <div>
      {value.length < 5 ? <span>Longitud minima de 5</span> : null}
      <input type='text' name='normal' value={value.normal} onChange={handleChange}/>
      <textarea name='texto' onChange={handleChange} value={value.texto}/>

      <select name='select' value={value.select} onChange={handleChange}>
        <option value=''>--Selecione--</option>
        <option value='hogar'>hogar</option>
        <option value='casa'>casa</option>
        <option value='departamento'>departamento</option>
      </select>

      <input type='checkbox' name='check' checked={value.check} onChange={handleChange} />

      <div >
        <label>RAM</label>
        <input onChange={handleChange} type='radio' value='12GB' name='estado' checked={value.estado === '12GB'}/>12GB
        <input onChange={handleChange} type='radio' value='8GB' name='estado' checked={value.estado === '8GB'} />8GB
        <input onChange={handleChange} type='radio' value='4GB' name='estado' checked={value.estado === '4GB'}/>4GB

      </div>

    </div>
  )
}
export default App
