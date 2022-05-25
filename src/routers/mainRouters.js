import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const DashBoard = React.lazy(() => import('../pages/DashBoard'))
const NotFound = React.lazy(() => import('../pages/NotFound'))


const routers = [
    {
        path: '/',
        exact: true,
        component: DashBoard
    },

    {
        path: '*',
        component: NotFound
    },
]
const MainRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <Switch>
                {
                    routers.map(({ component, path, ...rest }, index) =>
                        <Route key={index} component={component} path={path} {...rest} />
                    )
                }
            </Switch>
        </Suspense>
    )
}
export default MainRouter