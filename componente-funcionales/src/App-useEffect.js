
import { useState, useEffect } from 'react'

/*
  Reglas de hooks
  * no se llaman en loops, ni condiciones, ni while etc.
  * el useState debe estar en el nivel mas alto.
  * solo se llaman en 2 partes:  Componentes de react y Custom Hooks
  * cuando se crear un hoook llamarlo empenzandno con 'use'
 */
// useEffect =>  actualizar dom, leer, escribir base de datos, conectarnos una api.


const useContador = (inicial) => {

  const [contador, setContador] = useState(inicial)

  const incrementarDesdeHook = () => {
    setContador(contador + 1)
  }
  return [contador, incrementarDesdeHook]

}

const Interval = ({ contador }) => {
  useEffect(()=>{
    const i = setInterval(()=> console.log(contador), 1000)
    return () => clearInterval(i)
  }, [contador])
  return (
  <div>Interval</div>
  )

}
  
const App = () => {
  const [contador, incrementar] = useContador(0)
  useEffect(() => { console.log('soy un efecto')}, [contador])
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}> Incrementar </button>
      <Interval contador={contador}/>
    </div>
  )
}

export default App
