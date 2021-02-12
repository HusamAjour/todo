import React from 'react';
import { AuthContext } from '../context/AuthContext';
import Show from './show.js';

class Auth extends React.Component {
    static contextType = AuthContext; // to access this.context
//     <Auth action="delete">
//          <button >Delete User</button>
//     </Auth>
    render() {
       let okToRender = this.context.loggedIn && this.context.isValidAction(this.props.action);

        return (
            <Show condition={okToRender}>
                {this.props.children}
            </Show>
        )
    }
}
export default Auth;

