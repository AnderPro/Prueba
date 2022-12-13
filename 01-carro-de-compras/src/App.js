import { Component } from 'react';
import  Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      { name: 'Arbeja', price: 2500, img: '/productos/arbejas.jpg'},
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'}
    ],
    carro: [

      // { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg', cantidad: 1}
    ],
    esCarroVisible: false
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  agregarAlCarro = (producto) => {
    // logica mia bien pedeja
    /*
const existeProducto = this.state.carro.findIndex((product)=> product.name === producto.name);
if(existeProducto >= 0){
let objeto = {...producto, cantidad: this.state.carro[existeProducto].cantidad + 1}
this.state.carro[existeProducto] = objeto;
this.setState({carro: this.state.carro})
}else {
this.setState({
carro: this.state.carro.concat(
{...producto, cantidad: 1}
)
})
}
*/

    const { carro } = this.state;
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(
        itemProd => {
          return itemProd.name === producto.name ? 
            ({ ...itemProd, cantidad: itemProd.cantidad + 1} )
            : itemProd
        })
      return this.setState({carro: newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat(
        {...producto, cantidad: 1}
      )
    })


  }

  render(){

    const { esCarroVisible } = this.state

    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title/>

          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos = { this.state.productos }
            />
        </Layout>
      </div>
    )
  }
}
export default App;
