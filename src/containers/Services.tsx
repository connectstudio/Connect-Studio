import React from 'react'
import Section from '../components/Section'
import Limiter from '../components/Limiter'
import LampIcon from '../assets/lamp.svg'
import Image from 'next/image'
import Link from 'next/link'

function Services({
  components
  }:any) {

  return (
    <Section>
      <div className=' w-full h-full flex items-center justify-center '>
        <Limiter>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {components.map( (p:any,index:any)=>
                  <div key={index} className="flex-1 px-6 py-8 lg:p-12 text-zinc-800 rounded bg-zinc-200">
                    <h3 className="text-2xl font-extrabold md:text-3xl">{p.title}</h3>
                    <p className="mt-6 text-base  sm:text-lg">
                        {p.subtitle}
                    </p>
                    <Link className='mt-6 font-bold text-black' href={p.href}>Ler mais...</Link>
                    <div className="mt-8 justify-between flex flex-col items-start">
                        <div className="flex items-center">
                            <div className="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul role="list" className="mt-8 space-y-5 md:space-y-0 md:grid lg:grid-cols-2 md:gap-x-8 md:gap-y-5">
                            {p.attributes.map((a:any,index:any)=>
                              <li key={index} className="flex items-start lg:col-span-1">
                                  <div className="flex-shrink-0">
                                      <svg className="h-5 w-5 text-green-400"
                                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                          aria-hidden="true">
                                          <path fill-rule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clip-rule="evenodd"></path>
                                      </svg>
                                    </div>
                                  <p className="ml-3">{a}</p>
                              </li>
                            )}
                        </ul>
                    </div>
                  </div>
                )}
              </div>  
        </Limiter>
      </div>
    </Section>

  )
}

export default Services