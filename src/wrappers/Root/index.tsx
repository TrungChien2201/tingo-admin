import { Navigate, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '@/routes';

import { IRoute } from '@/utils/interface/route';

const RootComponent = () => {
  const accessToken = sessionStorage.getItem('token') || localStorage.getItem('token');
  // const { state, setState } = useContext(AppContext) as AppContextType;

  return (
    <Routes>
      {publicRoutes?.length > 0 &&
        publicRoutes.map((route: IRoute, index: number) => {
          const Page = route.component;
          // const Layout = <div></div>;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                // <Layout>
                <Page />
                // </Layout>
              }
            />
          );
        })}

      {privateRoutes?.length > 0 &&
        // state?.profile?.userId &&
        privateRoutes.map((route: IRoute, index: number) => {
          const Page = route.component;
          // const Layout = !route.layout ? DefaultLayoutAdminPage : DefaultLayoutLoginPage;
          // const isAccessRoute = route?.accessType ? DISABLE(state, route?.accessType) : false;

          const returnElement = () => {
            if (!accessToken) {
              return <Navigate to="/login" />;
            }

            // if (isAccessRoute) {
            //   return <Navigate to="/" />;
            // }

            return (
              <div>
                <Page />
              </div>
            );
          };

          return <Route key={index} path={route.path} element={returnElement()} />;
        })}
    </Routes>
  );
};

export default RootComponent;
