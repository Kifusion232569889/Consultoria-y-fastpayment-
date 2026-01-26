
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success'>('idle');

  const startScan = () => {
    setIsScanning(true);
    setStatus('scanning');
    
    // Simulación de proceso de autenticación WebAuthn
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onLogin();
      }, 1000);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-[#001A33] flex items-center justify-center z-[1000] p-6">
      <div className="max-w-md w-full bg-[#002244] rounded-[50px] p-12 text-center shadow-2xl border border-white/5">
        <div className="mb-10">
          <h1 className="text-white text-3xl font-black tracking-tighter mb-2">PACKENGERS <span className="text-[#FF8C00]">+</span></h1>
          <p className="text-blue-300/60 uppercase text-xs font-bold tracking-[0.3em]">Secure Digital Access</p>
        </div>

        <div className="pks-biometric-scanner">
          {status === 'scanning' && <div className="pks-scan-line"></div>}
          <div className="pks-pulse-ring"></div>
          <i className={`fa-solid ${status === 'success' ? 'fa-check text-green-400' : 'fa-fingerprint text-white/20'} text-6xl transition-all duration-500 ${status === 'scanning' ? 'text-[#FF8C00] scale-110' : ''}`}></i>
        </div>

        <div className="mt-8 mb-12">
          <h2 className="text-white text-2xl font-bold mb-2">
            {status === 'idle' && 'Bienvenido de nuevo'}
            {status === 'scanning' && 'Verificando Identidad...'}
            {status === 'success' && 'Identidad Confirmada'}
          </h2>
          <p className="text-blue-200/50 text-sm">
            {status === 'idle' && 'Utiliza tu sensor biométrico para acceder a tu panel logístico.'}
            {status === 'scanning' && 'Por favor, mantén tu dedo en el sensor o mira a la cámara.'}
            {status === 'success' && 'Acceso concedido. Cargando sistema...'}
          </p>
        </div>

        {status === 'idle' && (
          <button 
            onClick={startScan}
            className="w-full bg-[#FF8C00] text-white py-6 rounded-2xl text-lg font-black uppercase shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Acceder ahora
          </button>
        )}

        <div className="mt-8 flex justify-center gap-4 text-white/20 text-xs font-bold uppercase tracking-widest">
          <span><i className="fa-solid fa-shield-check mr-1"></i> FIDO2</span>
          <span><i className="fa-solid fa-lock mr-1"></i> AES-256</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
