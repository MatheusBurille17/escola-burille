# Guia de Deploy - Escola Burille Next.js

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado) ⭐

A Vercel é a empresa criadora do Next.js. Deploy é gratuito e otimizado.

#### Passos:

1. **Criar conta na Vercel**
   - Acesse https://vercel.com
   - Faça login com GitHub

2. **Conectar repositório**
   - Clique em "New Project"
   - Importe seu repositório do GitHub
   - Vercel detecta automaticamente que é Next.js

3. **Configurar**
   - Framework Preset: Next.js
   - Root Directory: `escola-burille-nextjs`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde 2-3 minutos
   - Seu site estará no ar!

#### Domínio Personalizado
```
1. Vá em Settings > Domains
2. Adicione seu domínio (ex: escolaburille.com.br)
3. Configure DNS conforme instruções
```

#### Variáveis de Ambiente (se necessário)
```
Settings > Environment Variables
```

---

### 2. Netlify

Alternativa popular e gratuita.

#### Passos:

1. **Criar conta**
   - https://netlify.com
   - Login com GitHub

2. **Novo site**
   - "Add new site" > "Import an existing project"
   - Conecte GitHub

3. **Configurações de Build**
   ```
   Base directory: escola-burille-nextjs
   Build command: npm run build
   Publish directory: .next
   ```

4. **Deploy**
   - Clique em "Deploy site"

---

### 3. Servidor Próprio (VPS)

Para hospedar em servidor próprio (DigitalOcean, AWS, etc).

#### Requisitos:
- Node.js 18+
- PM2 (gerenciador de processos)

#### Passos:

1. **Preparar servidor**
```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2
sudo npm install -g pm2
```

2. **Fazer upload do código**
```bash
# No seu computador
npm run build

# Enviar para servidor (via FTP, Git, etc)
```

3. **No servidor**
```bash
cd /var/www/escola-burille-nextjs
npm install --production
npm run build

# Iniciar com PM2
pm2 start npm --name "escola-burille" -- start
pm2 save
pm2 startup
```

4. **Configurar Nginx**
```nginx
server {
    listen 80;
    server_name escolaburille.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **SSL com Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d escolaburille.com.br
```

---

## 📋 Checklist Pré-Deploy

- [ ] Testar build local: `npm run build`
- [ ] Verificar todas as páginas funcionam
- [ ] Testar em mobile
- [ ] Verificar imagens carregam
- [ ] Testar vídeo do Hero
- [ ] Validar PDFs de horários
- [ ] Testar integração WhatsApp
- [ ] Verificar links de Instagram
- [ ] Testar formulário de contato
- [ ] Validar SEO (títulos, descrições)

---

## 🔧 Configurações Importantes

### 1. Variáveis de Ambiente

Crie `.env.local` (não commitar):
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=554699295745
NEXT_PUBLIC_SITE_URL=https://escolaburille.com.br
```

### 2. Analytics (Opcional)

**Google Analytics:**
```tsx
// src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### 3. Sitemap

Criar `src/app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://escolaburille.com.br',
      lastModified: new Date(),
    },
    {
      url: 'https://escolaburille.com.br/modalidade/jiu-jitsu',
      lastModified: new Date(),
    },
    // ... outras páginas
  ];
}
```

### 4. Robots.txt

Criar `src/app/robots.ts`:
```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://escolaburille.com.br/sitemap.xml',
  };
}
```

---

## 📊 Monitoramento

### Vercel Analytics (Gratuito)
```bash
npm install @vercel/analytics
```

```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🐛 Troubleshooting Deploy

### Erro: "Build failed"
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Erro: "Module not found"
- Verificar imports (case-sensitive)
- Verificar `package.json` tem todas dependências

### Imagens não carregam
- Verificar paths começam com `/`
- Exemplo: `/images/hero/video.mp4`

### CSS não aplica
- Verificar imports em `globals.css`
- Limpar cache do browser

---

## 💰 Custos

| Plataforma | Gratuito | Pago |
|------------|----------|------|
| Vercel | ✅ Sim (hobby) | $20/mês (pro) |
| Netlify | ✅ Sim (starter) | $19/mês (pro) |
| VPS | ❌ Não | $5-50/mês |

**Recomendação:** Comece com Vercel gratuito. Upgrade quando necessário.

---

## 🎯 Após o Deploy

1. **Testar site em produção**
   - Todas as páginas
   - Todos os links
   - Formulários
   - WhatsApp

2. **Configurar domínio**
   - Comprar domínio (Registro.br, GoDaddy, etc)
   - Apontar DNS para Vercel/Netlify

3. **SEO**
   - Submeter sitemap ao Google Search Console
   - Configurar Google My Business
   - Adicionar meta tags Open Graph

4. **Performance**
   - Testar no PageSpeed Insights
   - Otimizar imagens se necessário
   - Configurar CDN

---

## 📞 Suporte

**Vercel:** https://vercel.com/support
**Netlify:** https://www.netlify.com/support/
**Next.js:** https://nextjs.org/docs

---

**Boa sorte com o deploy! 🚀**
