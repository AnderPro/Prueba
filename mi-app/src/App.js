import { Component } from 'react';

class Button extends Component {
  state = {};
  constructor(props){
    super(props);
    console.log('constructor', props);

  }

  componentDidMount(){
    // se ejecuta al final
    console.log('Component DidMount')
  }

  componentDidUpdate(prevProps, prevState){
    // cuando existe un cambio de estado en el componente se ejecuta esta funcion.
    console.log('component did update', prevProps, prevState);
  }

  componentWillUnmount(){
    console.log('desmontando un componente', this.props, this.state);
  }

  render(){
    console.log('render en el button ', this.state);
    return (
      <button onClick={() => this.setState({prop: 1})}>
      Enviar
    </button>
    )
  }
}

class Input extends Component {
  //state = { valor: '' };
  
  //handleChange = (value) => {
    //this.setState({ valor: value });
  //}

  componentDidUpdate(prevProps, prevState){
    // cuando existe un cambio de estado en el componente se ejecuta esta funcion.
    console.log('component did update', prevProps, prevState);
  }

  render(){
    return (
    //<input
     //value={this.state.valor}
      //onChange={e => this.handleChange(e.target.value)}/>
      <input 
        value={this.props.value}
        onChange={this.props.onChange}
      />

    )
  }
}
class App extends Component {

  state = {
    valor: 3,
    nombre: '',
    apellido: '',
  }

  updateValues = (prop, value) => {
    this.setState({[prop]: value});
  }


  // la funcion render se ejecuta cada vez que el estado del componente ha sido cambiado y cuando el metodo redender de un componnte padre es llamado y tbn los hacen los hijos.
  //
  render(){ 
    console.log(this.state);
    return (
      <div>
        <p>Hola Mundo</p>


        {this.state.valor === 3? <Button chanchito='feliz' /> : null}
        <button 
          className={`${this.state.valor}`} 
          onClick={() => this.setState({ valor: 2}) }>
          Enviar App
        </button>

        <p>Nombre: {`${this.state.nombre}`} </p>
        <Input 
          value={this.state.nombre}
          onChange={(e) => this.updateValues('nombre', e.target.value)}
        />
        <p>Apellido: {`${this.state.apellido}`}</p>
        <Input 
          value={this.state.apellido}
          onChange={(e) => this.updateValues('apellido', e.target.value)}
        />

      </div>
    )
  }
}
export default App;

