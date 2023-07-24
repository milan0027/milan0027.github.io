import React from 'react'

const ErrorPage = () => {
  return (
    <div className='error-page'>
    <h1>404</h1>
    <h2>OOPS! You have come to wrong page.</h2>
    <a href="/"><button className='btn'>Go to main page</button></a>
    </div>
  )
}

export default ErrorPage