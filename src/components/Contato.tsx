'use client';

import { useState } from 'react';
import '../styles/contato.css';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '' });
  const [errors, setErrors] = useState({ nome: '' });
  const [isSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateNome = (value: string) => {
    if (!value.trim()) return 'Nome é obrigatório';
    if (value.trim().length < 3) return 'Nome deve ter pelo menos 3 caracteres';
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) return 'Nome deve conter apenas letras';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = name === 'nome' ? validateNome(value) : '';
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nomeError = validateNome(formData.nome);
    setErrors({ nome: nomeError });
    
    if (nomeError) return;

    const whatsappMessage = `Olá! Meu nome é *${formData.nome}* e gostaria de entrar em contato.`;
    const phone = '554699295745';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <section className="contato" id="contato" aria-labelledby="contato-title">
      <div className="container">
        <h2 className="section-title" id="contato-title">ENTRE EM CONTATO</h2>
        <div className="contato-content">
          <div className="contato-info">
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Endereço</h4>
                <p>Rua Caramuru, 503 - Centro, Pato Branco - PR</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Telefone</h4>
                <p>(46) 9929-5745</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <h4>E-mail</h4>
                <p>escolaburille@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🕐</span>
              <div>
                <h4>Horários</h4>
                <p>Segunda a Sexta: 06h às 22h</p>
                <p>Sábado: 09h às 12h</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📱</span>
              <div>
                <h4>Instagram</h4>
                <p>@escolaburille</p>
              </div>
            </div>
          </div>
          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome" className="visually-hidden">Nome completo</label>
              <input
                id="nome"
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.nome ? 'error' : ''}
                aria-invalid={!!errors.nome}
              />
              {errors.nome && <span className="error-message" role="alert">{errors.nome}</span>}
            </div>
            <button type="submit" className="btn-enviar" disabled={isSubmitting}>
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR VIA WHATSAPP'}
            </button>
            {submitSuccess && (
              <div className="success-message" role="status">Redirecionando para WhatsApp...</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
