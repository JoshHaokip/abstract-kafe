import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavBar, Footer, Sidebar} from './components'
import {HomePage, Products, SingleProduct, Cart, Checkout, About} from './pages'
import productLists from './utils/productLists'

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (newItem) => {

    const alreadyInCart = cartItems
      .map((cartItem) => cartItem.id)
      .includes(newItem.id);

    if (alreadyInCart) {
      changeQty(newItem.id, 1);
    } else {
 
      setCartItems([...cartItems, newItem]);
    }
  };

  const deleteCartItem = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  const changeQty = (id, number) =>
    setCartItems(
      cartItems.map(
        (item) => (item.id === id ? { ...item, qty: item.qty + number } : item)
      )
    );

  const findItem = (title) => productLists.find((item) => item.title === title);

  const cartItemsQty = cartItems.reduce((acc, cur) => acc + cur.qty, 0);


  return (
    <Router>
      <NavBar cartItemsQty={cartItemsQty} />
      <Sidebar cartItemsQty={cartItemsQty}/>
      <Switch>
        <Route exact path='/abstract-kafe/'>
          <HomePage />
        </Route>
        <Route exact path='/abstract-kafe/products'>
          <Products items={productLists}/>
        </Route>
        <Route exact path='/abstract-kafe/cart'>
          <Cart 
             items={cartItems}
             deleteCartItem={deleteCartItem}
             changeQty={changeQty}
          />
        </Route>
        <Route exact path='/abstract-kafe/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/abstract-kafe/about'>
          <About />
        </Route>
        <Route 
          exact 
          path='/abstract-kafe/products/:id' 
          render={(routeProps) => (
            <SingleProduct 
              item={findItem(routeProps.match.params.id)}
              addCartItem={addCartItem}
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
