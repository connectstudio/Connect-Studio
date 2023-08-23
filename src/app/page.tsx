import Image from 'next/image';
import Hero from '@/containers/Hero';
import Container from '@/containers/Container';
import Services from '@/containers/Services';
import React from 'react';
import Texts from '@/containers/Texts';
import localFont from 'next/font/local';
import logo from '@/assets/lamp.svg';

const myFont = localFont({
  src: '../assets/fonts/Southern-Beach.otf',
  variable: '--southern-beach'
});

export default function Home() {
  return (
    <React.Fragment>
      <Hero
        customRight={
          <div className='flex-1 flex justify-center items-center'>
            <Image className='w-56' src={logo} alt={''} />
          </div>
        }
        title={"Trazendo tecnologia para o seu comércio!"}
        link={"Ver Serviços"}
        paragraph={"Nós da Studios Connect somos uma empresa focada no desenvolvimento tecnológico de comércios e outras empresas através dos nossos serviços. Possuímos uma série de atividades e buscamos melhorar a eficiência dos seus processos."}
        href={""}
      />
      <p id='we'></p>
      <Container
        title={"Quem nós somos"}
        component={
          <React.Fragment>
            <p className="mb-4">
              Na Connect Studio, somos especialistas em otimizar processos empresariais e criar presenças online excepcionais. Nossa equipe apaixonada trabalha para aprimorar a eficiência interna das empresas, liberando recursos para impulsionar o crescimento.
            </p>
            <p>
              Além disso, nossa habilidade em criar páginas cativantes e funcionais nos diferencia, unindo design intuitivo com experiências memoráveis para os usuários. Na Connect Studio, valorizamos a inovação, a colaboração e a excelência, sempre em busca de soluções que fazem a diferença no mundo dos negócios modernos. Conecte-se conosco para um futuro mais eficiente e digitalmente impressionante.
            </p>
          </React.Fragment>
        }
      />
      <Texts
        title={"Nossos Serviços"}
        component={
          <React.Fragment>
            <p className="mb-4">
              Nosso estúdio possui uma série de serviços, comprometemo-nos 100% com nossos clientes, buscando entender suas reais necessidades e atendê-las da melhor forma. Nosso principal produto é o nosso serviço de agendamento, ideal para melhorar a performance do seu negócio, automatizando a interação dos seus clientes com a empresa. Esqueça anotações ou blocos de notas, nós oferecemos a ferramenta ideal para se organizar.
            </p>
            <p>
              Além disso, também realizamos a criação de páginas de apresentação de produtos ou serviços, baseadas no seu estilo, buscando entregar algo bonito e atrativo.
            </p>
          </React.Fragment>
        }
      />
      <Services
        components={[
          {
            title: "Hermes",
            subtitle: "Automatize os agendamentos do seu negócio",
            description: "",
            href: "/hermes",
            attributes: [
              "100% de segurança sua e de seus clientes",
              "Os clientes podem fazer os agendamentos por sua própria página",
              "Pagamentos pelo aplicativo direto para sua conta",
              "Interface simples, eficiente e completa",
            ]
          },
          {
            title: "Crie suas próprias páginas",
            subtitle: "Crie páginas personalizadas para apresentar seu negócio",
            href: "create",
            attributes: [
              "Seu site, sua marca, sua cara e seu estilo",
              "Integração com nosso serviço de agendamento",
              "Páginas que funcionam na maioria dos dispositivos",
              "Rápida, bonita, eficiente, leve e pensada para você",
            ]
          }
        ]}
      />
    </React.Fragment>
  );
}
