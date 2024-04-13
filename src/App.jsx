import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent'
import { Page } from './components/Page/Page'
import { SingleProduct } from './components/Products/SingleProduct'
import { Home } from './components/Home/Home'
import { ProductList } from './components/Products/ProductList'
import { Outlet } from 'react-router-dom'
import { AboutUs } from './components/Page/About_Us'
import { Contact } from './components/Page/Contact'
import { Blog } from './components/Page/Blog'
import { Login } from './components/Page/Login'
import { Cart } from './components/cart/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Page title={"Contact"} description={"Contact Descrip"}/>}/>
            <Route path='/about' element={<Page title={"About us"} description={"About Descrip"}/>}/>
            
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/contacts' element={<Contact 
              email = "telesales@gmail.com"
              mob_show = "+385 022 123 321" 
              golub = "Oliver Golubović"
              />} 
            />
            <Route path='/blog' element={<Blog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />

            <Route path='/product' element={<Outlet />}>
              <Route index element={<ProductList title={"Default"} />} />
              <Route path='/product/:id' element={<SingleProduct />} />
            </Route>
          </Route> 
                  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App