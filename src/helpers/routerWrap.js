import { useLocation, useParams } from 'react-router-dom'

const routerWrap = (Component) => {
  const ComponentWithRouterProps = (props) => {
    let location = useLocation()
    let params = useParams()
    return <Component location={location} params={params} {...props} />
  }

  return ComponentWithRouterProps
}

export default routerWrap

// if you use routerWrap for exporting a component
// that component will receive ADDITIONAL PROPS
// these additional props are location and params

// you can use it for wrapping Class Components and still get location and params
// but in this way you'll find them in the props of the wrapped component
