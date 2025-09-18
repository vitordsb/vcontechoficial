import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Palette, 
  Shield, 
  Wrench, 
  Brain,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Design para diversos seguimentos",
      details: [
        "Interface moderna e intuitiva",
        "Experiência do usuário otimizada",
        "Design responsivo para todos os dispositivos",
        "Prototipagem e wireframes"
      ],
      badge: "Design"
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e escaláveis",
      details: [
        "Sites institucionais e e-commerce",
        "Sistemas web personalizados",
        "APIs e integrações",
        "Tecnologias modernas (React, Node.js, etc.)"
      ],
      badge: "Web"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android",
      details: [
        "Desenvolvimento nativo (iOS/Android)",
        "Apps híbridos (React Native, Flutter)",
        "Publicação nas lojas de aplicativos",
        "Manutenção e atualizações"
      ],
      badge: "Mobile"
    },
    {
      icon: <Monitor className="h-10 w-10 text-primary" />,
      title: "Software Desktop",
      description: "Soluções desktop personalizadas",
      details: [
        "Aplicações Windows, Mac e Linux",
        "Sistemas de gestão empresarial",
        "Automação de processos",
        "Integração com hardware"
      ],
      badge: "Desktop"
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Consultoria e Treinamento",
      description: "Consultoria para solução tecnológica",
      details: [
        "Análise de necessidades tecnológicas",
        "Planejamento de projetos",
        "Treinamento de equipes",
        "Otimização de processos"
      ],
      badge: "Consultoria"
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Hardware e Infraestrutura",
      description: "Montagem e manutenção de hardware",
      details: [
        "Montagem de computadores",
        "Configuração de redes",
        "Manutenção preventiva",
        "Suporte técnico especializado"
      ],
      badge: "Hardware"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Segurança Cibernética",
      description: "Proteção de dados e documentação LGPD",
      details: [
        "Auditoria de segurança",
        "Implementação de proteções",
        "Conformidade com LGPD",
        "Backup e recuperação de dados"
      ],
      badge: "Segurança"
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Inteligência Artificial",
      description: "Integração com Inteligência Artificial",
      details: [
        "Chatbots inteligentes",
        "Automação com IA",
        "Análise de dados com ML",
        "Soluções personalizadas com IA"
      ],
      badge: "IA"
    }
  ];

  const processSteps = [
    {
      step: "1º",
      title: "Idealização do projeto",
      description: "Material e referências"
    },
    {
      step: "2º",
      title: "Levantamento de componentes",
      description: "Necessidade e alternativas para realização do projeto"
    },
    {
      step: "3º",
      title: "Apresentação do planejamento",
      description: "Construção de simulações e exemplos"
    },
    {
      step: "4º",
      title: "Desenvolvimento do MVP",
      description: "Com base nos critérios revisados"
    },
    {
      step: "5º",
      title: "Feedbacks pós-MVP",
      description: "E correção"
    },
    {
      step: "6º",
      title: "Testes e homologação",
      description: "Testes funcionais e não funcionais. Homologação com clientes"
    },
    {
      step: "7º",
      title: "Implantação e Transferência",
      description: "De Conhecimento"
    },
    {
      step: "8º",
      title: "Suporte e Evolução",
      description: "Contínua !!!"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serviços Oferecidos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos os serviços são feitos sob medida para o seu negócio e podem incluir:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    {service.icon}
                  </div>
                  <Badge variant="secondary">{service.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How We Work Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como nós Trabalhamos?
            </h2>
            <p className="text-lg text-gray-600">
              Nosso processo de desenvolvimento de software em 8 etapas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos discutir como podemos ajudar 
            a transformar suas ideias em soluções tecnológicas inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+5511939572807">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:vcontechdevoficial@gmail.com">
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

