import Limiter from '@/components/Limiter';
import Section from '@/components/Section';
import Link from 'next/link';
import React from 'react';

function Custom404() {
  return (
    <Section>
      <Limiter>
        <div className='h-screen flex items-center justify-center flex-col gap-12'>
          <h1 className='font-bold text-4xl'>404</h1>
          <p>Ops... A página não foi encontrada. Ela pode não existir ou estar em manutenção no momento.</p>
          <Link href={'/'} className='font-bold'>
            Voltar para a página inicial...
          </Link>
        </div>
      </Limiter>
    </Section>
  );
}

export default Custom404;
