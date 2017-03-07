import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import App from "../Components/App"
import {firedux} from "../Server/index"
import {signUp} from "../Actions/actions"
import {Login} from "../Actions/actions"
import {Logins} from "../Reducer/Login"
import {Details} from "../Reducer/Detail"
import {signOut} from "../Actions/actions"
// import {fetchBloodGroup} from "../Actions/actions"

function mapStateToProps(state) {
   return {
     login : state.Logins,
     fire: state.firedux,
     Detail: state.Details
   }
}
const mapDispatchToProps = (dispatch) => ({
  signUp: bindActionCreators(signUp, dispatch),
  Login: bindActionCreators(Login,dispatch),
  signOut: bindActionCreators(signOut,dispatch),
  // bloodGroup: bindActionCreators(fetchBloodGroup,dispatch),
});
const Main = connect(mapStateToProps,mapDispatchToProps)(App)

export default Main