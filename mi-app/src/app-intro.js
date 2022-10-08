import Button from './Button';

const arr = [
  'lobo feliz',
  'lobo triste',
  'lobo emocionado'
];

const App = () => {
  const miVariable = false;

  if(miVariable){
    return <p>Mi varible dio true!</p>
  }

  return (
    <div>
      <h1 onClick={(e) => console.log('click',e)}>Hola Mundo</h1>

      {arr.map(el => <p key={el}>{el}</p>)}
      <Button onClick={()=> console.log('clickeando')}>Enviar</Button>
    </div>
  )
}

export default App;
