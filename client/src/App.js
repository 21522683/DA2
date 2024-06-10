import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { adminRoutes, customerRoutes, publicRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className='App'>
        <Routes>
          <Route>
            {customerRoutes.map((route, index) => {
              const Layout = route.layout;
              const Page = route.component
              return (
                <Route key={index}
                  path={route.path}
                  element={
                    <Layout >
                      <Page />
                    </Layout>
                  } />
              )
            })}
          </Route>
          <Route>
            {adminRoutes.map((route, index) => {
              const Layout = route.layout;
              const Page = route.component
              return (
                <Route key={index}
                  path={route.path}
                  element={
                    <Layout >
                      <Page />
                    </Layout>
                  } />
              )
            })}
          </Route>
          <Route>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
