import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { adminRoutes, customerRoutes, publicRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
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
          {publicRoutes.map((route, index) => {
            const Page = route.component
            const Layout = route.layout
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
