
import * as firebase from 'firebase';
import {store} from "./Store/store"

export default (nextState, replace) => {
    var user = store.getState().Logins.isLogged
  if (!user) {
    replace({
      pathname: '/',
      state: {nextPathname: nextState.location.pathname }
    })
  }
}