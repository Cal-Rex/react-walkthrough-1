import React from 'react'

function UserMessage(props) {
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
            </div>
        ) : (
            <p>Please sign up</p>
        )}
    </div>
  )
}

export default UserMessage