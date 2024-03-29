import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent'
import { Page } from './components/Page/Page'
import { SingleProduct } from './components/Products/SingleProduct'
import { Home } from './components/Home/Home'
import { ProductList } from './components/Products/ProductList'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Page title={"Contact"} description={"Some Contact Description"}/>}/>
            <Route path='/about' element={<Page title={"About us"} description={"Some About Description"}/>}/>
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