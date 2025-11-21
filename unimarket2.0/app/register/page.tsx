'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 relative">
      {/* Elemento decorativo de fondo animado */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-b from-blue-200 to-transparent rounded-full opacity-30 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-t from-blue-200 to-transparent rounded-full opacity-30 blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-tr from-indigo-200 to-transparent rounded-full opacity-20 blur-3xl animate-float animation-delay-4000" />
      </div>

      {/* Contenedor principal */}
      <div className="relative w-full max-w-sm">
        {/* Header con logo */}
        <div className="text-center mb-6 animate-fade-in-down">
          <div className="flex justify-center items-center space-x-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl group hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <Image 
                src="/globe.svg" 
                alt="UniMarket Logo" 
                width={36} 
                height={36}
                className="drop-shadow-lg invert brightness-0 invert transition-all group-hover:scale-125 duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight text-left">
                UniMarket
              </h1>
              <p className="text-gray-500 text-sm font-medium text-left">
                Tu marketplace universitario
              </p>
            </div>
          </div>
        </div>

        {/* Línea decorativa arriba del card */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-t-3xl shadow-xl shadow-blue-500/40 animate-fade-in-up" />

        {/* Tarjeta de registro */}
        <div className="bg-white/95 backdrop-blur-lg rounded-b-3xl shadow-2xl overflow-hidden border border-white/80 border-t-0 hover:shadow-3xl hover:border-white transition-all duration-300 animate-fade-in-up animation-delay-200">
          
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center tracking-tight">
              Crear cuenta
            </h2>
            <p className="text-gray-500 text-sm mb-6 text-center font-medium">
              Regístrate para comenzar a usar UniMarket
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo
                </label>
                <div className="relative group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Juan Pérez"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300 group-focus-within:border-blue-500"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <div className="relative group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@correo.edu.co"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300 group-focus-within:border-blue-500"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Campo Contraseña */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative group">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300 group-focus-within:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Campo Confirmar Contraseña */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirmar Contraseña
                </label>
                <div className="relative group">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300 group-focus-within:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Términos y condiciones */}
              <div className="flex items-center pt-1">
                <label className="flex items-center cursor-pointer group hover:opacity-80 transition-opacity">
                  <input
                    type="checkbox"
                    name="terms"
                    required
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                  />
                  <span className="ml-2 text-xs font-medium text-gray-700">
                    Acepto los{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                      términos y condiciones
                    </a>
                  </span>
                </label>
              </div>

              {/* Botón Registrarse */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md text-sm mt-5"
              >
                Crear cuenta en UniMarket
              </button>
            </form>

            {/* Divisor */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
              <span className="text-xs text-gray-500 font-medium">O continúa con</span>
              <div className="flex-1 h-px bg-gradient-to-l from-gray-200 to-transparent" />
            </div>

            {/* Botones sociales */}
            <div className="mt-4">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border-2 border-gray-200 rounded-xl bg-white hover:bg-gray-50 hover:border-blue-300 text-gray-700 font-semibold transition-all duration-200 hover:shadow-md hover:shadow-blue-100 text-sm group"
              >
                <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continuar con Google
              </button>
            </div>

            {/* Enlace para iniciar sesión */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-xs">
                ¿Ya tienes una cuenta?{' '}
                <a 
                  href="/login" 
                  className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
                >
                  Inicia sesión
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-600">
          <p>© 2025 UniMarket. Todos los derechos reservados.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0px); }
          50% { transform: translate(0, 20px); }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.7s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

