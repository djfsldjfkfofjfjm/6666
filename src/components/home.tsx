import React from 'react';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, Share2, Target, Globe, 
  BarChart3, Layout, Store, 
  Instagram, MessageCircle, Youtube,
  ArrowRight, PieChart
} from 'lucide-react';

const Home = () => {
  const sections = [
    {
      title: "Региональные отчеты",
      cards: [
        {
          title: "Воронка РФ",
          description: "Комплексный анализ воронки продаж РФ",
          path: '/rf',
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Казахстан",
          description: "Комплексный анализ показателей Казахстана",
          path: '/kazakhstan',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          title: "ОАЭ",
          description: "Комплексный анализ показателей ОАЭ",
          path: '/uae',
          icon: <Globe className="w-6 h-6" />
        },
        {
          title: "Региональная статистика",
          description: "Сравнительный анализ показателей по регионам",
          path: '/regional',
          icon: <PieChart className="w-6 h-6" />
        }
      ]
    },
    {
      title: "Основные метрики",
      cards: [
        {
          title: "Метрики каналов",
          description: "Анализ эффективности различных каналов привлечения",
          path: '/channel-metrics',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          title: "EQ анализ",
          description: "Анализ эмоционального интеллекта",
          path: '/eq-analysis',
          icon: <PieChart className="w-6 h-6" />
        },
        {
          title: "Воронка конверсии",
          description: "Анализ конверсии по этапам",
          path: '/funnel-conversion',
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    {
      title: "Анализ страниц",
      cards: [
        {
          title: "Лендинги",
          description: "Анализ эффективности посадочных страниц",
          path: '/landing-pages',
          icon: <Layout className="w-6 h-6" />
        },
        {
          title: "Основные страницы",
          description: "Анализ эффективности основных страниц сайта",
          path: '/main-pages',
          icon: <Layout className="w-6 h-6" />
        },
        {
          title: "Страницы магазина",
          description: "Анализ эффективности страниц магазина",
          path: '/store-pages',
          icon: <Store className="w-6 h-6" />
        }
      ]
    },
    {
      title: "Социальные сети и реклама",
      cards: [
        {
          title: "Instagram",
          description: "Анализ эффективности Instagram",
          path: '/instagram-funnel',
          icon: <Instagram className="w-6 h-6" />
        },
        {
          title: "ВКонтакте",
          description: "Анализ эффективности ВКонтакте",
          path: '/vk-funnel',
          icon: <Share2 className="w-6 h-6" />
        },
        {
          title: "Telegram",
          description: "Анализ эффективности Telegram",
          path: '/telegram-funnel',
          icon: <MessageCircle className="w-6 h-6" />
        },
        {
          title: "WhatsApp",
          description: "Анализ эффективности WhatsApp",
          path: '/whatsapp-funnel',
          icon: <MessageCircle className="w-6 h-6" />
        },
        {
          title: "Яндекс",
          description: "Анализ эффективности Яндекс.Директ",
          path: '/yandex-funnels',
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "YouTube",
          description: "Анализ эффективности YouTube",
          path: '/youtube-funnel',
          icon: <Youtube className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Декоративные линии */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white transform -skew-x-45" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white transform -skew-x-45" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white transform -skew-x-45" />
      </div>

      <div className="relative p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-white">Годовой отчет 2024</h1>
          <p className="text-neutral-400 text-center mb-12">Комплексный анализ показателей за год</p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6 text-white">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.cards.map((card, cardIndex) => (
                    <Link key={cardIndex} to={card.path}>
                      <Card className="relative bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 border-neutral-800 hover:border-neutral-700">
                        {/* Декоративная линия */}
                        <div className="absolute top-0 right-6 w-8 h-px bg-white opacity-20 transform -rotate-45" />
                        
                        <div className="relative p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center">
                              <div className="text-white">{card.icon}</div>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white">{card.title}</h3>
                              <p className="text-sm text-neutral-400 mt-1">{card.description}</p>
                            </div>
                          </div>

                          <div className="mt-4 flex justify-end">
                            <ArrowRight className="w-5 h-5 text-neutral-500" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
