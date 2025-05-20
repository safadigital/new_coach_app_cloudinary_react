// import React from "react";
import { Navigate, Route, type RoutesProps } from "react-router-dom";

interface Props extends RoutesProps {
isAuth: boolean;
path: string;
element: any;
}

const ProtectedRoute = ({ isAuth, ...routesProps }: Props) => {

  if (isAuth) {
    return <Route {...routesProps} />
  }
  return <Navigate to='/login' />
}

export default ProtectedRoute;


// import React from 'react';
// import { Route, Navigate, type RouteProps, type NonIndexRouteObject } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// interface ProtectedRouteProps {
//   // You can add more props if needed
//   path: NonIndexRouteObject["path"];
//   element: React.ReactNode | null;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={(props: any) =>
//         isAuthenticated ? <Element {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;