import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  ShoppingCart, 
  Users, 
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Sites Institucionais",
      description: "Sites profissionais para apresentar sua empresa",
      features: [
        "Design responsivo e moderno",
        "SEO otimizado",
        "Painel administrativo",
        "Integração com redes sociais"
      ],
      category: "Web",
      price: "A partir de R$ 2.500",
      popular: false
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "E-commerce Completo",
      description: "Loja virtual com todas as funcionalidades",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Gateway de pagamento",
        "Gestão de pedidos e estoque"
      ],
      category: "Web",
      price: "A partir de R$ 5.000",
      popular: true
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "App Mobile Personalizado",
      description: "Aplicativo mobile para iOS e Android",
      features: [
        "Interface nativa",
        "Push notifications",
        "Integração com APIs",
        "Publicação nas lojas"
      ],
      category: "Mobile",
      price: "A partir de R$ 8.000",
      popular: false
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Sistema de Gestão (ERP)",
      description: "Sistema completo para gestão empresarial",
      features: [
        "Gestão de clientes",
        "Controle financeiro",
        "Relatórios gerenciais",
        "Multi-usuário"
      ],
      category: "Desktop",
      price: "A partir de R$ 12.000",
      popular: true
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Dashboard Analytics",
      description: "Painel de controle com métricas e KPIs",
      features: [
        "Visualização de dados",
        "Relatórios em tempo real",
        "Gráficos interativos",
        "Exportação de dados"
      ],
      category: "Web",
      price: "A partir de R$ 4.000",
      popular: false
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Sistema de Segurança",
      description: "Soluções de segurança e monitoramento",
      features: [
        "Controle de acesso",
        "Monitoramento 24/7",
        "Backup automático",
        "Conformidade LGPD"
      ],
      category: "Segurança",
      price: "Sob consulta",
      popular: false
    }
  ];

  const portfolioItems = [
    {
      title: "Sistema de Gestão - Grupo EGP",
      description: "ERP completo para gestão empresarial",
      category: "Desktop",
      image: "🏢"
    },
    {
      title: "E-commerce - ArqDoor",
      description: "Loja virtual para produtos arquitetônicos",
      category: "Web",
      image: "🏗️"
    },
    {
      title: "App Mobile - BSM Topografia",
      description: "Aplicativo para serviços topográficos",
      category: "Mobile",
      image: "📱"
    },
    {
      title: "Site Institucional - GAP ADS",
      description: "Website para agência de publicidade",
      category: "Web",
      image: "🎨"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Produtos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções tecnológicas prontas e personalizáveis para impulsionar seu negócio
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${product.popular ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    {product.icon}
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    {product.popular && (
                      <Badge className="bg-primary text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <p className="text-lg font-semibold text-primary mb-4">{product.price}</p>
                  <Button className="w-full" asChild>
                    <a href="tel:+5511939572807">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfólio de Projetos
            </h2>
            <p className="text-lg text-gray-600">
              Alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{item.image}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {item.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Solutions Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Precisa de algo personalizado?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Desenvolvemos soluções sob medida para atender às necessidades específicas 
            do seu negócio. Conte-nos sobre seu projeto!
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
                Enviar Briefing
              </a>
            </Button>
          </div>
        </div>

        {/* Why Choose Our Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Entrega Rápida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Desenvolvimento ágil com entregas em prazos otimizados
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Qualidade Garantida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Produtos testados e com garantia de funcionamento
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Suporte Contínuo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Manutenções gratuitas e suporte técnico especializado
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;

