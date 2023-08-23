import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Input from '@/components/Input';
import Button from '@/components/Button';



function Form({ inputs, schema, submit }:any) {

  const { handleSubmit, formState,register } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="bg-white text-black flex-1 flex flex-col p-7 sm:p-10 items-center justify-center">
      <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
        Experimentar
      </h3>
      <p className="text-center">Experiência gratuita</p>
      <form onSubmit={handleSubmit(submit)}>
        {inputs.map((item:any, index:any) => (
          <Input key={index} error={formState.errors[item.name]?.message} name={item.name} label={item.label} register={register}/>
        ))}
        <div className="mt-4 mb-2 sm:mb-4">
          <Button submit={handleSubmit(()=>{})}>Avançar</Button>
        </div>
        <p className="text-xs text-gray-600 sm:text-sm">Nós respeitamos sua privacidade.</p>
        <p className="text-xs text-gray-600 sm:text-sm">Cancelamento da inscrição a qualquer momento.</p>
      </form>
    </div>
  );
};

export default Form;
