import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Target, Eye, Heart, Lightbulb, Users, Zap } from 'lucide-react';

const MissionVisionValues = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Inovação",
      description: "Buscamos constantemente novas tecnologias e soluções disruptivas para entregar valor agregado aos nossos clientes."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Parceria",
      description: "Trabalhamos lado a lado com nossos clientes, oferecendo consultoria completa e suporte em todas as etapas do projeto."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Agilidade",
      description: "Entregamos soluções rápidas sem comprometer a qualidade, utilizando metodologias ágeis de desenvolvimento."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Compromisso",
      description: "Mantemos nosso compromisso com a excelência, oferecendo manutenções gratuitas e suporte contínuo."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Missão, Visão e Valores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os princípios que guiam a VConTech na entrega de soluções tecnológicas inovadoras
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-none">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl md:text-3xl text-primary">
                Nossa Missão
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700">
                Desenvolver e implementar soluções tecnológicas inovadoras que tragam 
                diferencial competitivo, melhorias em processos existentes e criação 
                de novos produtos ou serviços para MEIs, PE e ME, atendendo às demandas 
                emergentes do mercado com excelência e agilidade.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-none">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl md:text-3xl text-primary">
                Nossa Visão
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700">
                Ser reconhecida como a principal referência em consultoria e 
                implementação de soluções tecnológicas inovadoras, gerando valor 
                agregado tanto para consumidores quanto para o ambiente de negócios, 
                através da aplicação de novas tecnologias e modelos disruptivos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600">
              Os princípios que norteiam todas as nossas ações e decisões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Nosso Compromisso
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            Na VConTech, nos comprometemos a entregar soluções que não apenas atendam, 
            mas superem as expectativas dos nossos clientes. Cada projeto é tratado 
            com dedicação e profissionalismo, garantindo resultados que impulsionem 
            o crescimento e a inovação dos negócios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900">Foco no Cliente</h4>
              <p className="text-sm text-gray-600 mt-1">
                Suas necessidades são nossa prioridade
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900">Entrega Rápida</h4>
              <p className="text-sm text-gray-600 mt-1">
                Agilidade sem comprometer a qualidade
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-gray-900">Suporte Contínuo</h4>
              <p className="text-sm text-gray-600 mt-1">
                Manutenções gratuitas e evolução contínua
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;

