
import React, { useState, useEffect } from 'react';

const FastPayment: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [days, setDays] = useState<number>(30);
  const [received, setReceived] = useState<number>(0);

  useEffect(() => {
    const baseRate = 3;
    const extraDays = days - 30;
    const variableRate = extraDays * (3 / 90);
    const totalCommissionRate = baseRate + variableRate;
    
    const commission = (amount * totalCommissionRate) / 100;
    setReceived(Number((amount - commission).toFixed(2)));
  }, [amount, days]);

  const dayOptions = [
    { value: 30, rate: '3%' },
    { value: 45, rate: '3.5%' },
    { value: 60, rate: '4%' },
    { value: 90, rate: '5%' },
    { value: 120, rate: '6%' }
  ];

  return (
    <div className="pks-fastpayment-container">
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="bg-blue-100 text-[#003366] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6 inline-block">
              Liquidez Inmediata
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-[#003366] mb-8">
              ¿Qué es <span className="text-[#FF8C00]">Fast Payment</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Es nuestra solución financiera diseñada exclusivamente para transportistas. 
              Transformamos tus facturas pendientes en efectivo en menos de 24 horas. 
              Elimina la espera de 60, 90 o 120 días y mantén tu flota en movimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '1', title: 'Sube tu Factura', desc: 'Carga la documentación de tu envío directamente en nuestra plataforma segura.' },
              { num: '2', title: 'Validación Exprés', desc: 'Nuestro equipo analiza el riesgo y valida la factura en un máximo de 4 horas.' },
              { icon: 'fa-euro-sign', title: 'Cobro al Instante', desc: 'Recibe el importe neto de forma inmediata. Paga gasoil, nóminas y seguros hoy.' }
            ].map((step, i) => (
              <div key={i} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 text-center transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-[#003366] text-white rounded-full flex items-center justify-center mx-auto mb-8 text-3xl font-bold">
                  {step.num || <i className={`fa-solid ${step.icon}`}></i>}
                </div>
                <h3 className="font-bold text-2xl text-[#003366] mb-6">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#003366] uppercase tracking-tight">Simulador de Liquidación</h2>
          <p className="text-xl text-gray-500 mt-4">Calcula tu flujo de caja en tiempo real.</p>
        </div>

        <div className="pks-calculator">
          <div className="mb-10">
            <label className="pks-calc__label">Importe Factura</label>
            <div className="relative">
               <input 
                type="number" 
                className="pks-calc__field" 
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <span className="absolute right-6 top-6 text-4xl font-bold text-[#003366]">€</span>
            </div>
          </div>

          <div className="mb-10">
            <label className="pks-calc__label">Días para el vencimiento</label>
            <div className="pks-days-grid">
              {dayOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`pks-day-btn ${days === opt.value ? 'border-[#FF8C00] bg-[#FFF8F0] shadow-md' : 'border-gray-200'}`}
                  onClick={() => setDays(opt.value)}
                >
                  <strong>{opt.value}</strong>
                  <span className="text-[#FF8C00]">{opt.rate}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pks-result-box bg-white border-2 border-dashed border-[#003366]/20">
            <h4 className="text-[#003366] font-bold uppercase tracking-wider">Neto a transferir</h4>
            <span className="amount">{received} €</span>
            <p className="text-xs text-gray-400 mt-6 font-bold uppercase tracking-widest">Sin gastos ocultos · Transferencia SEPA inmediata</p>
          </div>

          <button className="w-full mt-10 p-6 bg-[#FF8C00] text-white text-xl font-black uppercase rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">
            Solicitar Transferencia
          </button>
        </div>
      </section>
    </div>
  );
};

export default FastPayment;
