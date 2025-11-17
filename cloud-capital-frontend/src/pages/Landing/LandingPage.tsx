import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  ChevronDown,
  Star,
  Check
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { Button, Card, Badge } from '@/components/ui'

// Landing Page
export const LandingPage = () => {
  const { setCurrentView } = useAuthStore()

  // FAQ Data
  const faqData = [
    { question: '¿Cómo funciona el modelo de inversión de Could Capital?', answer: 'Could Capital combina minería de criptomonedas con energía limpia y servicios en la nube para startups. Tu inversión se integra en operaciones reales respaldadas por infraestructura tecnológica y centros de datos ecológicos.' },
    { question: '¿De dónde provienen las ganancias?', answer: 'Las ganancias provienen de la minería sostenible de criptomonedas y de los servicios cloud empresariales, generando ingresos estables y escalables.' },
    { question: '¿Qué necesito para empezar a invertir?', answer: 'Solo necesitas crear una cuenta, verificar tu identidad y realizar un depósito mínimo en criptomonedas. Desde tu panel podrás elegir un plan y monitorear tus rendimientos en tiempo real.' },
    { question: '¿Cuánto puedo ganar y con qué frecuencia?', answer: 'Dependiendo del plan, puedes obtener entre un 2% semanal y un 2% diario. Los rendimientos se acreditan automáticamente y puedes reinvertirlos o retirarlos cuando desees.' },
    { question: '¿Puedo invitar a otras personas?', answer: 'Sí. Contamos con un Programa de Embajadores mediante el cual puedes obtener comisiones adicionales por cada inversor que se registre con tu enlace personal. Es una forma de convertir tu red en ingresos pasivos.' },
    { question: '¿Mi inversión está segura?', answer: 'Sí. Trabajamos con carteras frías de custodia, encriptación avanzada y centros de datos certificados. Todo el sistema está diseñado para ofrecer máxima transparencia y protección.' },
    { question: '¿Puedo retirar mi dinero en cualquier momento?', answer: 'Sí, los retiros están habilitados las 24 horas y pueden solicitarse en cualquier momento. Los desembolsos se procesan cada viernes y se acreditan directamente a tu billetera sin intermediarios ni demoras.' },
    { question: '¿Qué diferencia a Could Capital de otras plataformas?', answer: 'A diferencia de los modelos especulativos, Could Capital no depende de entradas nuevas para sostener ganancias. Nuestra rentabilidad proviene de operaciones reales, con un compromiso ecológico y sostenible.' },
    { question: '¿Cómo sé que mis rendimientos son reales?', answer: 'Podrás verificar tus resultados desde tu panel personal con métricas actualizadas e informes automáticos. Publicamos reportes semanales de rendimiento y consumo energético.' },
    { question: '¿Dónde puedo recibir soporte o asistencia?', answer: 'Nuestro equipo de soporte está disponible 24/7 a través del chat en línea y correo electrónico. También contamos con canales oficiales en Telegram y Discord para comunicación directa.' }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="landing-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-cc-text">
                <a href="/"><span className="text-cc-accent">Cloud</span>Capital</a>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-cc-subtext hover:text-cc-accent transition-colors">
                Características
              </a>
              <a href="#plans" className="text-cc-subtext hover:text-cc-accent transition-colors">
                Planes
              </a>
              <a href="#faq" className="text-cc-subtext hover:text-cc-accent transition-colors">
                FAQ
              </a>
            </nav>
            <Button 
              onClick={() => setCurrentView('login')}
              variant="primary"
              className="text-sm"
            >
              Acceder
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-cc-text mb-6">
              Inversión Inteligente en{' '}
              <span className="text-cc-accent">Cripto Mining</span>
            </h1>
            <p className="text-xl text-cc-subtext mb-8 max-w-3xl mx-auto">
              Plataforma profesional de inversión y minería de criptomonedas. 
              Rendimientos consistentes con tecnología de punta y soporte 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setCurrentView('login')}
                variant="primary" 
                size="lg"
                className="px-8"
              >
                Comenzar a invertir
              </Button>
              <Button
                variant="outline" 
                size="lg"
                className="px-8"
              >
                Ver planes
              </Button>
            </div>
            
            {/* Métricas destacadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cc-accent mb-2">98.7%</div>
                <div className="text-cc-subtext">Tiempo de actividad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cc-profit mb-2">$2.8M+</div>
                <div className="text-cc-subtext">Capital gestionado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cc-admin mb-2">1,200+</div>
                <div className="text-cc-subtext">Inversores activos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cc-text mb-4">
              ¿Por qué elegir Cloud Capital?
            </h2>
            <p className="text-lg text-cc-subtext max-w-2xl mx-auto">
              Tecnología avanzada, seguridad empresarial y rendimientos consistentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card variant="landing" className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cc-accent/10 text-cc-accent mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-cc-text mb-2">
                Minería Automatizada
              </h3>
              <p className="text-cc-subtext text-sm">
                Algoritmos inteligentes que optimizan la minería 24/7 sin intervención manual.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card variant="landing" className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cc-profit/10 text-cc-profit mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-cc-text mb-2">
                Máxima Seguridad
              </h3>
              <p className="text-cc-subtext text-sm">
                Protocolos de seguridad de nivel bancario y autenticación multifactor.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card variant="landing" className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cc-admin/10 text-cc-admin mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-cc-text mb-2">
                Rendimientos Altos
              </h3>
              <p className="text-cc-subtext text-sm">
                Hasta 2.2% diario con nuestro plan Diamond y tecnología de punta.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card variant="landing" className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cc-super-admin/10 text-cc-super-admin mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-cc-text mb-2">
                Soporte 24/7
              </h3>
              <p className="text-cc-subtext text-sm">
                Equipo técnico especializado disponible en todo momento.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cc-text mb-4">
              Planes de Inversión
            </h2>
            <p className="text-lg text-cc-subtext max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu perfil de inversión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plan Bronce */}
            <Card variant="landing" className="p-8 relative">
              <div className="text-center">
                <h3 className="text-xl font-bold text-cc-text mb-2">BRONCE</h3>
                <div className="text-3xl font-bold text-cc-profit mb-4">3%</div>
                <div className="text-cc-subtext mb-6">Mensual</div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">Inversión mínima: $100</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">Ideal para principiantes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">Sin referidos requeridos</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setCurrentView('login')}
                  variant="outline" 
                  className="w-full"
                >
                  Empezar
                </Button>
              </div>
            </Card>

            {/* Plan Silver */}
            <Card variant="landing" className="p-8 relative border-cc-accent">
              <Badge 
                variant="profit" 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              >
                POPULAR
              </Badge>
              <div className="text-center">
                <h3 className="text-xl font-bold text-cc-text mb-2">SILVER</h3>
                <div className="text-3xl font-bold text-cc-profit mb-4">0.8-1.1%</div>
                <div className="text-cc-subtext mb-6">Diario</div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">Inversión mínima: $250</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">7-7.5 meses duplicación</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">Comisión 8.5% mensual</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setCurrentView('login')}
                  variant="primary" 
                  className="w-full"
                >
                  Empezar
                </Button>
              </div>
            </Card>

            {/* Plan Diamond */}
            <Card variant="landing" className="p-8 relative">
              <div className="text-center">
                <h3 className="text-xl font-bold text-cc-text mb-2">DIAMOND</h3>
                <div className="text-3xl font-bold text-cc-profit mb-4">1.8-2.2%</div>
                <div className="text-cc-subtext mb-6">Diario</div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">Inversión mínima: $5,000</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">4.5-5 meses duplicación</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-cc-profit mr-2" />
                    <span className="text-cc-subtext">Soporte VIP dedicado</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setCurrentView('login')}
                  variant="admin" 
                  className="w-full"
                >
                  Empezar
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cc-text mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-cc-subtext">
              Resolvemos tus dudas sobre Cloud Capital.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} variant="landing" className="p-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-cc-text pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-cc-accent group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-cc-border">
                    <p className="text-cc-subtext leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="landing" className="p-12">
            <h2 className="text-3xl font-bold text-cc-text mb-4">
              ¿Listo para comenzar tu inversión?
            </h2>
            <p className="text-lg text-cc-subtext mb-8 max-w-2xl mx-auto">
              Únete a miles de inversores que ya están generando ingresos pasivos 
              con Cloud Capital. Regístrate ahora y comienza a hacer crecer tu capital.
            </p>
            <Button 
              onClick={() => setCurrentView('login')}
              variant="primary" 
              size="lg"
              className="px-8"
            >
              Acceder al Dashboard
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cc-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-cc-subtext">
            <p>&copy; 2024 Cloud Capital. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">
              Plataforma profesional de inversión en criptomonedas y minería digital.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
