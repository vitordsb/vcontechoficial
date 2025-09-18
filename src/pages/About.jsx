import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Building, Target, Award, Users } from 'lucide-react';

const About = () => {
  const companies = [
    "Grupo EGP",
    "ArqDoor", 
    "BSM TOPOGRAFIA",
    "GAP ADS"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem somos nós?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nós somos a VConTech, uma empresa profissional em consultoria e 
            implementação de software para todas as plataformas: Web, Mobile e Desktop.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                Nosso Objetivo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Temos como objetivo entregar soluções tecnológicas modernas e escaláveis 
                para MEIs, PE e ME, desenvolvendo e implementando soluções tecnológicas 
                inovadoras que tragam diferencial competitivo, melhorias em processos 
                existentes, criação de novos produtos ou serviços.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Empresa Registrada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Razão Social:</strong> VCONTECH INOVA SIMPLES (I.S.)</p>
                <p><strong>CNPJ:</strong> 62.370.008/0001-05</p>
                <p><strong>Data de Abertura:</strong> 23/08/2025</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Situação: ATIVA
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Atividade Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Consultoria em tecnologia da informação</p>
              <p className="text-sm text-gray-600 mt-2">CNAE: 6204-0/00</p>
              <div className="mt-4">
                <p className="text-sm font-medium">Atividade Secundária:</p>
                <p className="text-sm text-gray-600">
                  Suporte técnico, manutenção e outros serviços em TI
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Certificação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-primary">Inova Simples</p>
              <p className="text-sm text-gray-600 mt-2">
                Empresa certificada para desenvolvimento de soluções inovadoras 
                com foco em diferencial competitivo e novas tecnologias.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Innovation Focus */}
        <div className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                Foco em Inovação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
                Nosso escopo de inovação é desenvolver e implementar soluções tecnológicas 
                inovadoras que tragam diferencial competitivo, melhorias em processos 
                existentes, criação de novos produtos ou serviços, e que atendam a 
                demandas emergentes do mercado.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-center text-gray-700">
                  <strong>O foco é gerar valor agregado</strong> tanto para os consumidores 
                  quanto para o ambiente de negócios em geral, por meio da aplicação de 
                  novas tecnologias ou modelos de negócios disruptivos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trusted Companies */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Como nós podemos provar nossa qualidade?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Empresas que já confiam na nossa qualidade, integridade e suporte tecnológico:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {companies.map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-gray-900">{company}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-lg text-primary font-medium">
            E brevemente você...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

