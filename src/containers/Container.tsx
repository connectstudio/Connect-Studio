import React from 'react'
import Section from '../components/Section'
import Limiter from '../components/Limiter'
import localFont from 'next/font/local'

function Container({
  title,
  component
}:any) {
  return (
    <Section>
      <div className=' w-full h-full flex items-center justify-center '>
        <Limiter>
          <div className="gap-16 items-center mx-auto flex text-black bg-white p-6 rounded-lg py-20  ">
              <div className="">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">{title}</h2>
                  {component}
              </div>
          </div>
        </Limiter>
      </div>
    </Section>

  )
}

export default Container