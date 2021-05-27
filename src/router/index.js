import { renderRoutes } from 'react-router-config'
import routes from './router.config'

function renderChildren(o) { // 可能是props或者routes。props:props.route.routes
  let routes = []
  if (Object.prototype.toString.call(o) === '[object Array]') {
    routes = o
  } else if (Object.prototype.toString.call(o) === '[object Object]') {
    routes = o.route?.routes || []
  }

  return renderRoutes(routes)
}

export {
  routes,
  renderChildren
}

