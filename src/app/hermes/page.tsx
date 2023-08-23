import Buy from '@/containers/Buy';
import Container from '@/containers/Container';
import Hero from '@/containers/Hero';
import React from 'react';
import hermesLogo from '@/assets/hermes.svg';
import Image from 'next/image';

function Hermes() {
  return (
    <React.Fragment>
      <Hero
        customRight={
          <div className='flex-1 flex justify-center items-center'>
            <Image className='w-56' src={hermesLogo} alt='' />
          </div>
        }
        title={'Ganhe clientes no seu negócio enquanto dorme com Hermes'}
        link={'Transformar seu negócio'}
        paragraph={
          'Nós sabemos o quanto seu tempo é importante. Cada minuto que você gasta fazendo tarefas repetitivas é uma oportunidade perdida para impulsionar seu negócio. Já pensou como seria se você pudesse automatizar processos na sua empresa, como agendamentos ou apresentação de seus trabalhos?'
        }
        href={''}
      />
      <Container
        title={'Hermes'}
        component={
          <React.Fragment>
            <p className='mb-4'>
              O Hermes representa a solução ideal para aqueles que buscam aprimorar a eficiência e a sofisticação do seu negócio. Com a nossa equipe dedicada, você terá a capacidade de desenvolver um website impecável, proporcionando a divulgação perfeita para o seu empreendimento. Nossa plataforma oferece uma ampla gama de funcionalidades, incluindo um sistema de agendamento altamente conveniente para atender às necessidades dos seus clientes. Além disso, disponibilizamos um painel de administração intuitivo, permitindo que você gerencie seus clientes e supervisione todas as marcações efetuadas.
            </p>
            <p>
              Para garantir uma experiência completa, integramos nossa plataforma com o Mercado Pago, oferecendo-lhe a opção de receber pagamentos antecipados pelos seus serviços, se assim o desejar. Através do Hermes, você estará no controle total do seu negócio, otimizando operações e oferecendo aos seus clientes um serviço de excelência.
            </p>
          </React.Fragment>
        }
      />
      <Buy
        description={''}
        title={'Teste Gratuitamente'}
        subtitle={'Para obter todos os recursos, assine agora por R$ 100 mensais'}
        attributes={[
          '100% de segurança sua e de seus clientes',
          'Os clientes podem fazer agendamentos por sua própria página',
          'Pagamentos pelo Aplicativo direto para sua conta',
          'Interface simples, eficiente e completa',
          'Administração de vários usuários no aplicativo',
          'Clientes fazem agendamentos por sua própria página',
        ]}
      />
    </React.Fragment>
  );
}

export default Hermes;
