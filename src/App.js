import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Main } from './containers/Main/Main';
import Cart from './containers/Cart/Cart';
import Description from './components/Description/Description';
import { catalog } from './utilities/catalog';
import { displayRandomMessage } from './utilities/utilities'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      toggleCart: false,
      showMessage: false,
      showDescription: false,
      currentDisplayObject: '',
      currentSearch: '',
      currentItems: catalog

    }
    this.toggleCart = this.toggleCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.closeDescription = this.closeDescription.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  addToCart(element) {
    this.setState(state => ({
      cart: [...state.cart, element],
    }))
    if (this.state.showMessage === true) return
    this.setState(state => ({
      showMessage: !state.showMessage
    }))
    setTimeout(() => this.setState(state => ({
      showMessage: !state.showMessage
    })), 1500);
  }

  toggleCart() {
    this.setState(state => ({
      toggleCart: !state.toggleCart
    }))
  }

  showDescription(target) {
    this.setState(state => ({
      showDescription: true,
      currentDisplayObject: target
    }))
  }
  closeDescription() {
    this.setState(() => ({ showDescription: false }))
  }
  searchItem(e) {
    let value = e.target.value;
    let regex = new RegExp(`${value}`, 'i');
    if (value === '') { return this.setState(state => ({ currentItems: catalog })) }
    this.setState(state => ({
      currentItems: [...state.currentItems.filter(element => regex.test(element.title) || regex.test(element.author))]
    }))
  }

  render() {
    return (
      <div className='wrapper'>
        <NavBar firstLink='Home' secondLink='About' onClick={this.toggleCart} handleSearch={this.searchItem} />
        <Main catalog={this.state.currentItems} click={this.addToCart} showDescription={this.showDescription} />
        {this.state.toggleCart ? <Cart clickToggle={this.toggleCart}  showDescription={this.showDescription} cart={this.state.cart}/> : null}
        {this.state.showMessage ? displayRandomMessage() : null}
        {this.state.showDescription ? <Description displayObject={this.state.currentDisplayObject} onClick={this.closeDescription} /> : null}
      </div>
    )
  }
}




export default App;
