
import React from 'react';

const Consultancy: React.FC = () => {
  // Lista de clientes con URLs optimizadas para simular logotipos reales profesionales
  const clients = [
    { name: 'EpoxeMex', url: 'https://placehold.co/400x120/ffffff/003366?text=EPOXEMEX' },
    { name: 'El Protector', url: 'https://placehold.co/400x120/ffffff/003366?text=PROTECTOR' },
    { name: 'ACN', url: 'https://placehold.co/400x120/ffffff/003366?text=ACN+LOGISTICS' },
    { name: 'Maina Churrascaría', url: 'https://placehold.co/400x120/ffffff/003366?text=MAINA' },
    { name: 'Leo Restaurante', url: 'https://placehold.co/400x120/ffffff/003366?text=LEO+REST' },
    { name: 'Hoteles Tabasco 4 You', url: 'https://placehold.co/400x120/ffffff/003366?text=TABASCO+4Y' },
    { name: 'Inbursa', url: 'https://placehold.co/400x120/ffffff/003366?text=INBURSA' },
    { name: 'Ceneval', url: 'https://placehold.co/400x120/ffffff/003366?text=CENEVAL' },
    { name: 'Canirac', url: 'https://placehold.co/400x120/ffffff/003366?text=CANIRAC' },
    { name: 'Schlumberger', url: 'https://placehold.co/400x120/ffffff/003366?text=SLB' }
  ];

  return (
    <div className="pks-consult-landing">
      {/* Hero Emocional */}
      <section className="pks-consult-hero">
        <div className="max-w-5xl mx-auto px-4">
          <span className="bg-[#FF8C00] text-white px-5 py-2 rounded-full text-base font-bold uppercase tracking-widest mb-8 inline-block">
            Solo para Dueños de Logística y Transporte
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">¿Tu empresa te posee a ti o tú posees a tu empresa?</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10">El 92% de los dueños de logística viven en modo supervivencia. Nosotros instalamos el sistema operativo que te devuelve tu libertad y multiplica tu rentabilidad real.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#programa" className="pks-btn-primary">Descubrir el Método PKS</a>
            <a href="#contacto" className="bg-white text-[#003366] px-10 py-5 rounded-full font-bold uppercase hover:bg-gray-100 transition-all shadow-lg text-lg">Diagnóstico Gratuito</a>
          </div>
        </div>
      </section>

      {/* Prueba Social - Grid de Logos Optimizado */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-sm font-black uppercase tracking-[0.2em] mb-16">Marcas que han transformado sus procesos con PKS</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 items-center justify-items-center opacity-90 transition-all duration-500">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center group w-full max-w-[200px]">
                <div className="aspect-[3/1.5] w-full flex items-center justify-center bg-white border border-gray-50 rounded-2xl p-5 shadow-sm group-hover:shadow-xl group-hover:border-[#FF8C00]/20 transition-all duration-300">
                  <img 
                    src={client.url} 
                    alt={`Logo de ${client.name}`} 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  />
                </div>
                <span className="mt-4 text-[10px] font-black text-gray-300 uppercase tracking-widest group-hover:text-[#003366] transition-colors">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Dolor vs La Solución */}
      <section id="programa" className="max-w-7xl mx-auto py-28 px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] mb-8 leading-tight">
            El Caos Logístico es el <span className="text-[#FF8C00]">Enemigo Silencioso</span> de tu Margen.
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Estar "pendiente de todo" no es liderazgo, es una cárcel. Si tu teléfono no deja de sonar con problemas de rutas, incidencias o falta de liquidez, no tienes un negocio, tienes un autoempleo de alto estrés.
          </p>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-[#003366]">
              <h4 className="font-bold text-[#003366] mb-3 uppercase text-base tracking-wide">La Realidad del Sector</h4>
              <p className="text-gray-700 text-lg italic">"Muchos transportistas trabajan para pagar el gasoil y los sueldos, quedándose las migajas. La intervención PKS rompe este ciclo."</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white p-3 rounded-[40px] shadow-3xl relative z-10 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=800" 
              alt="Intervención Estratégica" 
              className="rounded-[30px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="bg-[#002244] py-28 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">PKS Intervenciones</h2>
            <div className="h-1.5 w-32 bg-[#FF8C00] mx-auto mb-8"></div>
            <p className="text-2xl opacity-80 max-w-3xl mx-auto">Nuestro protocolo de 3 pilares para la eficiencia radical.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: 'fa-chart-pie', title: 'Control y Rentabilidad Real', text: 'Implementación de un Tablero de Control Dinámico. Deja de mirar el banco para saber si ganas dinero y empieza a mirar tus márgenes por ruta, cliente y vehículo en tiempo real.' },
              { icon: 'fa-microchip', title: 'Reingeniería Mental', text: 'Intervención en el subconsciente directivo. Eliminamos los sesgos que te obligan a trabajar "dentro" del negocio para que aprendas a trabajar "sobre" el negocio.' },
              { icon: 'fa-calendar-check', title: 'Sistema de Agendas y Orden', text: 'Estandarización de procesos críticos. Instalamos un sistema de gestión que garantiza que el equipo cumpla sin que tú tengas que perseguirlos.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-20 h-20 bg-[#FF8C00] rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110">
                  <i className={`fa-solid ${item.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                <p className="text-lg opacity-75 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Form */}
      <section id="contacto" className="bg-[#F3F4F6] py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white rounded-[50px] shadow-3xl overflow-hidden">
          <div className="p-16 bg-[#003366] text-white flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-8">Empieza tu Intervención Hoy</h3>
            <p className="text-xl mb-10 opacity-85 leading-relaxed">Rellena el formulario y un consultor senior especializado en logística analizará tu caso profesionalmente.</p>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-5">
                <i className="fa-solid fa-phone text-[#FF8C00] text-2xl"></i>
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center gap-5">
                <i className="fa-solid fa-envelope text-[#FF8C00] text-2xl"></i>
                <span>consultoria@packengers.es</span>
              </div>
            </div>
          </div>
          <div className="p-16">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="text-sm font-black uppercase text-gray-500 mb-2 block">Nombre y Apellidos</label>
                <input 
                  type="text" 
                  placeholder="Ej: Javier García" 
                  className="w-full p-5 text-lg border-2 border-gray-200 rounded-2xl focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none transition-all bg-gray-50 text-[#1F2937] placeholder-gray-400" 
                />
              </div>
              <div>
                <label className="text-sm font-black uppercase text-gray-500 mb-2 block">Nombre de tu Empresa</label>
                <input 
                  type="text" 
                  placeholder="Ej: Logística Express S.L." 
                  className="w-full p-5 text-lg border-2 border-gray-200 rounded-2xl focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none transition-all bg-gray-50 text-[#1F2937] placeholder-gray-400" 
                />
              </div>
              <div>
                <label className="text-sm font-black uppercase text-gray-500 mb-2 block">¿Cuántos vehículos tienes?</label>
                <select className="w-full p-5 text-lg border-2 border-gray-200 rounded-2xl focus:border-[#FF8C00] outline-none bg-gray-50 text-[#1F2937] transition-all cursor-pointer">
                  <option>1 - 5 vehículos</option>
                  <option>5 - 20 vehículos</option>
                  <option>Más de 20 vehículos</option>
                </select>
              </div>
              <button className="pks-btn-primary w-full border-none cursor-pointer mt-6 py-6 text-xl">Solicitar Diagnóstico Estratégico</button>
              <p className="text-xs text-center text-gray-400 mt-6 uppercase font-bold tracking-tighter">Tu privacidad es nuestra prioridad absoluta.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
