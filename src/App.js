
import React, { Fragment  } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {routes} from "./routes/index.js"
import DefaultComponent from './components/DefaultComponent/DefaultComponent.jsx'
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
function App() {
  // useEffect(() => {
  //   fecthApi()
  // }, []);
  // const fecthApi= async() =>{
  //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct`);
  //     return res.data
  // }
  // const query = useQuery({ queryKey:['todos'],queryFn:fecthApi })
  // console.log('query',query)
    return (
      <div>
        <Router>
          <Routes>
          {
            routes.map((route) => {
              const Page = route.page 
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route key={route.path} path={route.path} element={
                  <Layout>
                  <Page />
                  </Layout>
              }/>
              )
            })
          }
          </Routes>
        </Router>
      
      </div>
    )
  }

export default App;
