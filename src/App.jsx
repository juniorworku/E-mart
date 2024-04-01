import { createSignal } from 'solid-js';
import { Router, Route, A } from "@solidjs/router";

import banner from './assets/banner.png';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  return (
    <div class="container m-auto bg">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4 justify-end"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span 
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >light_mode</span>
        <h1 class="mr-auto">E-mart</h1>

        <a href="/">Home</a>
        <a href="/cart">Cart</a>

      </header>
      
      <img class="rounded-md" src={banner} alt="site banner" />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Router>
      
    </div>
  );
}

export default App;