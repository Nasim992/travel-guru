import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const { userElement } = useContext(Context);
    const [user] = userElement;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    );
};

export default PrivateRoute;