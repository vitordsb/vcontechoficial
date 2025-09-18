import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowLeft, ExternalLink } from 'lucide-react';
import blogApi from '../services/blogApi';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const fetchedPost = await blogApi.getPostById(parseInt(id));
      setPost(fetchedPost);
      setError(null);
    } catch (err) {
      console.error('Error fetching post:', err);
      setError('Erro ao carregar post. Usando dados de exemplo.');

      // Fallback to mock data
      const mockPosts = {
        1: {
          id: 1,
          title: "As Tendências de Desenvolvimento Web em 2025",
          description: "Descubra as principais tecnologias e frameworks que estão moldando o futuro do desenvolvimento web.",
          content: `
            <h2>O Futuro do Desenvolvimento Web</h2>
            <p>O desenvolvimento web continua evoluindo rapidamente, e 2025 promete ser um ano de grandes transformações. Neste artigo, vamos explorar as principais tendências que estão moldando o futuro da web.</p>
            
            <h3>1. React e Next.js Dominando o Mercado</h3>
            <p>O React continua sendo a biblioteca JavaScript mais popular para desenvolvimento frontend, e o Next.js está se consolidando como o framework de escolha para aplicações React em produção. Com recursos como Server-Side Rendering (SSR) e Static Site Generation (SSG), o Next.js oferece performance excepcional.</p>
            
            <h3>2. TypeScript se Tornando Padrão</h3>
            <p>O TypeScript não é mais uma opção, mas sim uma necessidade para projetos de médio e grande porte. Sua tipagem estática ajuda a prevenir bugs e melhora a experiência de desenvolvimento.</p>
            
            <h3>3. Jamstack e Edge Computing</h3>
            <p>A arquitetura Jamstack (JavaScript, APIs, e Markup) está revolucionando como construímos aplicações web. Combinada com edge computing, oferece velocidade e escalabilidade sem precedentes.</p>
            
            <h3>4. Web Components e Micro Frontends</h3>
            <p>A modularização está se tornando cada vez mais importante. Web Components e arquiteturas de micro frontends permitem que equipes trabalhem de forma independente em diferentes partes de uma aplicação.</p>
            
            <h3>Conclusão</h3>
            <p>O desenvolvimento web em 2025 será caracterizado por maior performance, melhor experiência do desenvolvedor e arquiteturas mais escaláveis. Na VConTech, estamos sempre atualizados com essas tendências para entregar as melhores soluções aos nossos clientes.</p>
          `,
          author: "VConTech Team",
          created_at: "2025-01-15T00:00:00",
          category: "Desenvolvimento",
          image_url: null,
          links: [
            { title: "React Documentation", url: "https://react.dev" },
            { title: "Next.js Guide", url: "https://nextjs.org" },
            { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" }
          ]
        },
        2: {
          id: 2,
          title: "Como a Inteligência Artificial está Transformando os Negócios",
          description: "Explore como a IA pode ser integrada em soluções empresariais para aumentar a eficiência e competitividade.",
          content: `
            <h2>A Revolução da IA nos Negócios</h2>
            <p>A inteligência artificial não é mais ficção científica. Ela está aqui, transformando a forma como as empresas operam e competem no mercado global.</p>
            
            <h3>Aplicações Práticas da IA</h3>
            <p>Desde chatbots inteligentes até análise preditiva, a IA está sendo aplicada em diversos setores:</p>
            <ul>
              <li><strong>Atendimento ao Cliente:</strong> Chatbots que entendem linguagem natural</li>
              <li><strong>Análise de Dados:</strong> Insights automáticos de grandes volumes de dados</li>
              <li><strong>Automação de Processos:</strong> Redução de tarefas repetitivas</li>
              <li><strong>Personalização:</strong> Experiências customizadas para cada usuário</li>
            </ul>
            
            <h3>Benefícios para Pequenas e Médias Empresas</h3>
            <p>Contrário ao que muitos pensam, a IA não é exclusiva de grandes corporações. PMEs podem se beneficiar significativamente:</p>
            <ul>
              <li>Redução de custos operacionais</li>
              <li>Melhoria na tomada de decisões</li>
              <li>Aumento da produtividade</li>
              <li>Vantagem competitiva</li>
            </ul>
            
            <h3>Como Implementar IA na sua Empresa</h3>
            <p>A implementação deve ser gradual e estratégica. Na VConTech, ajudamos empresas a identificar oportunidades e implementar soluções de IA de forma eficiente e econômica.</p>
          `,
          author: "VConTech Team",
          created_at: "2025-01-10T00:00:00",
          category: "Inteligência Artificial",
          image_url: null,
          links: [
            { title: "OpenAI", url: "https://openai.com" },
            { title: "Google AI", url: "https://ai.google" }
          ]
        },
        3: {
          id: 3,
          title: "Segurança Cibernética: Protegendo sua Empresa na Era Digital",
          description: "Entenda as principais ameaças digitais e como implementar medidas de segurança eficazes.",
          content: `
            <h2>A Importância da Segurança Cibernética</h2>
            <p>Com o aumento das ameaças digitais, a segurança cibernética tornou-se uma prioridade crítica para empresas de todos os tamanhos.</p>
            
            <h3>Principais Ameaças Atuais</h3>
            <ul>
              <li><strong>Ransomware:</strong> Sequestro de dados com pedido de resgate</li>
              <li><strong>Phishing:</strong> Tentativas de roubo de credenciais</li>
              <li><strong>Ataques DDoS:</strong> Sobrecarga de servidores</li>
              <li><strong>Vazamento de Dados:</strong> Exposição de informações sensíveis</li>
            </ul>
            
            <h3>Medidas de Proteção Essenciais</h3>
            <p>Implementar uma estratégia de segurança robusta envolve múltiplas camadas:</p>
            <ul>
              <li>Firewall e antivírus atualizados</li>
              <li>Backup regular e seguro dos dados</li>
              <li>Treinamento de funcionários</li>
              <li>Autenticação de dois fatores</li>
              <li>Monitoramento contínuo</li>
            </ul>
            
            <h3>Conformidade com a LGPD</h3>
            <p>No Brasil, a Lei Geral de Proteção de Dados (LGPD) estabelece regras claras sobre o tratamento de dados pessoais. É fundamental que as empresas estejam em conformidade para evitar multas e proteger a reputação.</p>
            
            <h3>Como a VConTech Pode Ajudar</h3>
            <p>Oferecemos soluções completas de segurança cibernética, incluindo auditoria, implementação de medidas de proteção e adequação à LGPD.</p>
          `,
          author: "VConTech Team",
          created_at: "2025-01-05T00:00:00",
          category: "Segurança",
          image_url: null,
          links: [
            { title: "LGPD Brasil", url: "https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd" },
            { title: "CERT.br", url: "https://cert.br" }
          ]
        }
      };

      setPost(mockPosts[parseInt(id)] || null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
            <p className="text-gray-600 mb-8">O post que você está procurando não existe.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Link>
          </Button>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
            {error}
          </div>
        )}

        {/* Post Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(post.created_at)}
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </CardTitle>
            <p className="text-xl text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
          </CardHeader>
        </Card>

        {/* Post Content */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>

        {/* Reference Links */}
        {post.links && post.links.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Links de Referência</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-900 hover:text-primary">{link.title}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Gostou do conteúdo?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Entre em contato conosco para saber como podemos ajudar sua empresa
            com soluções tecnológicas inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+5511939572807">
                Falar Conosco
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:vcontechdevoficial@gmail.com">
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

