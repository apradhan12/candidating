import React from 'react';

function Button(props) {
 return (
   <button onClick={() => window.location.href = '/CreateAccount'}>Sign Up</button>
 )
}

export default Button;