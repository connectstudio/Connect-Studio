"use client"

import React from 'react'
import Form from './Form'
import Section from '../components/Section'
import Limiter from '../components/Limiter'
import { z } from 'zod'

function Buy({
    description,
    title,
    subtitle,
    attributes
}:any) {
  return (
    <Section>
        <Limiter>
      <div className="block  bg-black bg-opacity-30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="flex flex-wrap ">
        <Form
          inputs={ [
              {name:"email",label:"E-Mail"},
              {name:"name",label:"Nome"}
            ]}
          schema={ z.object({
              name:z.string().nonempty("Campo Obrigatório"),
              email:z.string().nonempty("Campo Obrigatório").email("Email Inválido")
          })}
          submit={
            ()=>{}
          }
          ></Form>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 pb-2 text-4xl font-bold">{title}</h2>
            <h2 className="mb-6 pb-2 text-1xl font-bold">{subtitle}</h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                {description}
            </p>
            <div className="mb-6 flex flex-wrap">

            {attributes.map((p:any,index:any)=>
              <div key={index} className="mb-6 w-full md:w-4/12 lg:w-6/12 xl:w-4/12 flex gap-3">
                <p className="flex ">
                    <svg className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </p>
                <p>{p}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
        </Limiter>
    </Section>

  )
}

export default Buy