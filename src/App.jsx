import React,{useState} from 'react'
import {BrowserRouter as Router, Routes,Route,Link,Navigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Products from './components/Products'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from '../src/store/store'

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const handleLogin = () => {
    setAuthenticated(true)
  }

  const handleLogout = () => {
    setAuthenticated(false)
  }

  return (
    <Provider store={store}><Products/></Provider>
    // <Router>
    //   <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    //     <div className='container-fluid'>
    //       <ul className='navbar-nav'>
    //         <li className='nav-item'>
    //             <Link className='nav-link' to='/'>Home</Link>
    //         </li>
    //         <li className='nav-item'>
    //             <Link className='nav-link' to='/products'>Products</Link>
    //         </li>
    //         <li className='nav-item'>
    //           {
    //             !isAuthenticated ? (
    //               <Link className='nav-link' to='/login'>Login</Link>
    //             ) : (
    //               <button className='nav-link' onClick={handleLogout}>Logout</button>
    //             )
    //           }
    //             {/* <Link className='nav-link' to='/login'>Login</Link> */}
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    //   <Routes>
    //     <Route  path='/' element={<Home/>}/>
    //     <Route  path='/login' element={<LoginForm onLogin={handleLogin} />}/>
    //     <Route  path='/products' 
    //     element={
    //     <ProtectedRoute isAuthenticated={isAuthenticated}>
    //       <Products onLogout = {handleLogout}/>
    //     </ProtectedRoute>
    //     }
    //     />
    //   </Routes>
    // </Router>
  )
}

function ProtectedRoute({isAuthenticated, children}){
  return isAuthenticated?children:<Navigate to="/login"/>
}

export default App