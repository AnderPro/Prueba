import logo from './logo.svg';
import './App.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5)'
}

const estilo1 = ({bg = '#222'})=>({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
});

const Li = ({children,estado}) => {
  return (
    <li style={{...estilo2, ...estilo1({bg: '#333'})}} 
        className="clase-li">
        {children} = {estado}
    </li>
  )
}
const App = () => {
  const valor = 'triste';
  return (
    <ul  style={estilo1({bg:'#750'})} className="clase-css">
      <Li estado="feliz">valor de li</Li>
    </ul>
  );
}

export default App;
