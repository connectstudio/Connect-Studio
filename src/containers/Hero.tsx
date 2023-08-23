import React from 'react'
import Main from '../components/Main'
import Limiter from '../components/Limiter'

function Hero({
  title,
  link,
  paragraph,
  href,
  customRight
}:any) {
  return (
    <Main>
      <Limiter>
        <div className=" rounded-lg overflow-hidden min-h-screen lgmax-w-none lg:gap-6 lg:flex-row  flex-col lg:flex flex lg:justify-between justify-center lg:pt-20 pt-40 gap-20 lg:items-center ">
          <div className="flex flex-col  justify-center h-min flex-1">
            <h2 className="lg:max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              {title}
            </h2>
            <p className="lg:max-w-xl mb-4 text-base font-bold text-gray-400 text-bold md:text-lg">
              {paragraph}
            </p>
            <a
              href={href}
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              {link}
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>  
          {customRight}
        </div>  
      </Limiter>
    </Main>
    
  )
}

export default Hero