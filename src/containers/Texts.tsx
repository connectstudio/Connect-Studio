import React from 'react'
import Section from '../components/Section'
import Limiter from '../components/Limiter'

function Texts({
    title,
    component
  }:any) {
    return (
      <Section>
        <div className=' w-full h-full flex items-center justify-center text-white '>
            <Limiter>
            <div className="gap-16 items-center mx-auto flex ">
                <div className=" ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">{title}</h2>
                        {component}
                    </div>
                </div>
            </Limiter>
        </div>
      </Section>
  )
}

export default Texts