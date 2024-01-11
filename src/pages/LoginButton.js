'use client'

import {signIn} from "next-auth/react";

export default function LoginButton() {
  return (
      <button
          className="login-button"
            onClick={() => {
                signIn();
            }}
      >
        Login
      </button>
  )
}
