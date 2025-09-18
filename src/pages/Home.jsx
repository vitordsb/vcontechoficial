import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Monitor, Shield, Zap, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import logoImage from '../assets/LogoVConTechsemfundogrande.png';

const Home = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e responsivas"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android"
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Software Desktop",
      description: "Soluções desktop personalizadas"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Segurança Cibernética",
      description: "Proteção de dados e conformidade LGPD"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Entrega Rápida",
      description: "Desenvolvimento ágil com qualidade"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Suporte Completo",
      description: "Acompanhamento em todas as etapas"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Deseja um software{' '}
                <span className="text-primary">totalmente personalizado?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Está no lugar certo! Somos especialistas em consultoria e implementação
                de software para todas as plataformas: Web, Mobile e Desktop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/servicos">
                    Nossos Serviços
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a target="_blank" href="https://wa.me/+5511939572806">
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={logoImage}
                alt="VConTech Logo"
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Online Presence Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sua marca online? Hoje é tendência!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Não é de hoje que a presença online é a porta de entrada para todas as empresas,
              seja ela de qualquer seguimento. É o portal para apresentação, dúvidas, contato,
              prospecção e até mesmo pós venda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600">
              Soluções tecnológicas completas para o seu negócio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a VConTech?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">de arrepiar softwares</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custo benefício</h3>
              <p className="text-gray-600">que surpreende</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Você não pensa sozinho!</h3>
              <p className="text-gray-600">Consultoria completa</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Manutenções grátis</h3>
              <p className="text-gray-600">em softwares</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            E aí? Quer alavancar sua empresa?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não perca tempo! Entre em contato conosco agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a target="_blank" href="https://wa.me/5511939572807">
                (11) 93957-2807
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a target="_blank" href="mailto:vcontechdevoficial@gmail.com">
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

