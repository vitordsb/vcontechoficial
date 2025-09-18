import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Calendar, User, Search, ArrowRight, ExternalLink } from 'lucide-react';
import blogApi from '../services/blogApi';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await blogApi.getAllPosts();
      setPosts(fetchedPosts);
      setError(null);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Erro ao carregar posts. Usando dados de exemplo.');
      // Fallback to mock data if API fails
      setPosts([
        {
          id: 1,
          title: "As Tendências de Desenvolvimento Web em 2025",
          description: "Descubra as principais tecnologias e frameworks que estão moldando o futuro do desenvolvimento web.",
          content: "O desenvolvimento web continua evoluindo rapidamente...",
          author: "VConTech Team",
          created_at: "2025-01-15T00:00:00",
          category: "Desenvolvimento",
          image_url: null,
          links: [
            { title: "React Documentation", url: "https://react.dev" },
            { title: "Next.js Guide", url: "https://nextjs.org" }
          ]
        },
        {
          id: 2,
          title: "Como a Inteligência Artificial está Transformando os Negócios",
          description: "Explore como a IA pode ser integrada em soluções empresariais para aumentar a eficiência e competitividade.",
          content: "A inteligência artificial não é mais ficção científica...",
          author: "VConTech Team",
          created_at: "2025-01-10T00:00:00",
          category: "Inteligência Artificial",
          image_url: null,
          links: [
            { title: "OpenAI", url: "https://openai.com" }
          ]
        },
        {
          id: 3,
          title: "Segurança Cibernética: Protegendo sua Empresa na Era Digital",
          description: "Entenda as principais ameaças digitais e como implementar medidas de segurança eficazes.",
          content: "Com o aumento das ameaças digitais...",
          author: "VConTech Team",
          created_at: "2025-01-05T00:00:00",
          category: "Segurança",
          image_url: null,
          links: [
            { title: "LGPD Brasil", url: "https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd" }
          ]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await blogApi.getCategories();
      setCategories(fetchedCategories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      // Fallback categories
      setCategories(['Desenvolvimento', 'Inteligência Artificial', 'Segurança']);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog VConTech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tendências e novidades do mundo da tecnologia
          </p>
          {error && (
            <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
              {error}
            </div>
          )}
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={searchTerm === '' ? "default" : "outline"}
                size="sm"
                onClick={() => setSearchTerm('')}
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchTerm(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {searchTerm ? 'Nenhum post encontrado para sua busca.' : 'Nenhum post disponível no momento.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.created_at)}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Ler mais
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Links de referência */}
                  {post.links && post.links.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-medium text-gray-700 mb-2">Links de referência:</p>
                      <div className="space-y-1">
                        {post.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            {link.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Fique por dentro das novidades
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Quer receber conteúdos exclusivos sobre tecnologia e inovação?
            Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:vcontechdevoficial@gmail.com">
                Entrar em Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+5511939572807">
                Falar Conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

