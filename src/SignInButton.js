import React from 'react';


function Button(props) {
 return (
    <button onClick={() => window.location.href = '/CreateAccount'}>Sign In</button>
 );
}
export default Button;