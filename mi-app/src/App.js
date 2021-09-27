import logo from './logo.svg';
import './App.css';

const Li = ({children,estado}) => {
  return (
    <li className="clase-li">{children} = {estado}</li>
  )
}
const App = () => {
  const valor = 'triste';
  return (
    <ul className="clase-css">
      <Li estado="feliz">valor de li</Li>
    </ul>
  );
}

export default App;
