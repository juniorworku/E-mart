import { createSignal, lazy } from 'solid-js';
import { HashRouter, Route, A } from "@solidjs/router";

import banner from './assets/banner.png';

const Home =  lazy(() => import('./pages/Home'));
const Cart =  lazy(() => import('./pages/Cart'));
const Product =  lazy(() => import('./pages/Product'));

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


      <HashRouter>        
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
      </HashRouter>
      
    </div>
  );
}

export default App;