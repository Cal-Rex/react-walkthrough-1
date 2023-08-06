import React from 'react'

function MethodAsPropsChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site, please finish the following steps:</p>
                <ol>
                    <li>Confirm your Email</li>
                    <li>Complete your Profile</li>
                    <li>Subscribe to the Newsletter</li>
                </ol>
                <button onClick={props.handleSignIn}>Sign out</button>
            </div>
        ) : (
            <div>
            <p>Please sign up</p>
            <button onClick={props.handleSignIn}>Sign in</button>
            </div>
        )}
    </div>
  )
}

export default MethodAsPropsChild