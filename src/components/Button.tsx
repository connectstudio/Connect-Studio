import React from 'react'

function Button({submit,children}:any) {
  return (
    <button
        onClick={submit}
        type="submit"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    >
    {children}
  </button>
  )
}

export default Button