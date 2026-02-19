# 🚀 Guia de Deploy - Escola Burille Next.js

Guia completo para fazer deploy do projeto em produção.

---

## 📋 Pré-requisitos

### ✅ Checklist Antes do Deploy

- [x] Build sem erros (`npm run build`)
- [x] Lint sem warnings (`npm run lint`)
- [x] TypeScript sem erros
- [x] Variáveis de ambiente configuradas
- [x] Analytics configurado
- [x] Sitemap presente
- [x] Robots.txt configurado
- [ ] Domínio registrado
- [ ] SSL/HTTPS configurado

---

## 🎯 Opção 1: Deploy na Vercel (Recomendado)

### Por que Vercel?
- ✅ Otimizado para Next.js
- ✅ Deploy automático via Git
- ✅ Preview deployments
- ✅ Edge functions
- ✅ Analytics integrado
- ✅ SSL automático
- ✅ CDN global

### Passo a Passo

#### 1. Criar Conta na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Conecte com GitHub/GitLab/Bitbucket

#### 2. Importar Projeto
1. Clique em "Add New Project"
2. Selecione o repositório `escola-burille-nextjs`
3. Configure as variáveis de ambiente:

```env
NEXT_PUBLIC_SITE_URL=https://escolaburille.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=554699295745
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/escolaburille/
NEXT_PUBLIC_EMAIL=escolaburille@gmail.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (quando disponível)
```

#### 3. Configurar Domínio
1. Vá em "Settings" > "Domains"
2. Adicione seu domínio: `escolaburille.com.br`
3. Configure os DNS conforme instruções:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 4. Deploy
1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. Acesse o site em produção!

### Deploy Automático
Após configuração inicial, todo push para `main` faz deploy automático.

---

## 🌐 Opção 2: Deploy na Netlify

### Passo a Passo

#### 1. Criar Conta
1. Acesse [netlify.com](https://netlify.com)
2. Conecte com GitHub

#### 2. Configurar Build
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 3. Variáveis de Ambiente
Configure em "Site settings" > "Environment variables"

#### 4. Deploy
1. Conecte o repositório
2. Configure build settings
3. Deploy!

---

## ☁️ Opção 3: AWS Amplify

### Passo a Passo

#### 1. Criar App
```bash
npm install -g @aws-amplify/cli
amplify init
```

#### 2. Configurar
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

#### 3. Deploy
```bash
amplify publish
```

---

## 🔧 Configurações Pós-Deploy

### 1. Google Analytics

#### Obter ID do Google Analytics
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Crie uma propriedade
3. Copie o ID (formato: G-XXXXXXXXXX)
4. Adicione em `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Verificar Instalação
1. Acesse seu site
2. Abra DevTools > Network
3. Procure por `gtag/js`
4. Ou use a extensão "Google Analytics Debugger"

### 2. Google Search Console

#### Adicionar Site
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione propriedade
3. Verifique propriedade (via DNS ou arquivo HTML)
4. Envie sitemap: `https://escolaburille.com.br/sitemap.xml`

### 3. SSL/HTTPS

#### Vercel/Netlify
- ✅ Automático! SSL configurado automaticamente

#### Outros Servidores
1. Use Let's Encrypt (gratuito)
2. Configure redirect HTTP → HTTPS
3. Adicione HSTS header

### 4. CDN e Cache

#### Vercel
- ✅ CDN global automático
- ✅ Cache otimizado

#### Cloudflare (Opcional)
1. Adicione site no Cloudflare
2. Configure DNS
3. Ative proxy (nuvem laranja)
4. Configure cache rules

---

## 📊 Monitoramento

### 1. Vercel Analytics
```bash
# Já incluído automaticamente na Vercel
```

### 2. Google Analytics
- Acesse relatórios em tempo real
- Configure metas e conversões
- Monitore páginas mais visitadas

### 3. Sentry (Monitoramento de Erros)

#### Instalação
```bash
npm install @sentry/nextjs
```

#### Configuração
```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  tracesSampleRate: 1.0,
});
```

### 4. Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) - Gratuito
- [Pingdom](https://pingdom.com)
- [StatusCake](https://statuscake.com)

---

## 🔒 Segurança

### Headers de Segurança
Já configurados em `vercel.json`:
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

### Verificar Segurança
1. [securityheaders.com](https://securityheaders.com)
2. [observatory.mozilla.org](https://observatory.mozilla.org)

---

## 🎯 Performance

### Lighthouse Audit
```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Executar audit
lighthouse https://escolaburille.com.br --view
```

### Metas de Performance
- ✅ Performance: >85
- ✅ Accessibility: >90
- ✅ Best Practices: >95
- ✅ SEO: >95

### Core Web Vitals
- ✅ LCP: <2.5s
- ✅ FID: <100ms
- ✅ CLS: <0.1

---

## 🐛 Troubleshooting

### Build Falha
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Variáveis de Ambiente Não Funcionam
- Verifique se começam com `NEXT_PUBLIC_`
- Reinicie o servidor após mudanças
- No Vercel, adicione em "Environment Variables"

### Imagens Não Carregam
- Verifique `next.config.ts`
- Configure `remotePatterns` se usar imagens externas
- Verifique permissões de arquivos

### 404 em Rotas Dinâmicas
- Verifique `generateStaticParams`
- Confirme que páginas foram geradas no build
- Verifique logs do build

---

## 📝 Checklist Final

### Antes do Deploy
- [x] Código revisado
- [x] Build testado localmente
- [x] Variáveis de ambiente configuradas
- [x] Analytics configurado
- [ ] Domínio registrado
- [ ] DNS configurado

### Após Deploy
- [ ] Site acessível
- [ ] SSL ativo (HTTPS)
- [ ] Todas as páginas funcionando
- [ ] Formulários testados
- [ ] Links WhatsApp funcionando
- [ ] Analytics rastreando
- [ ] Sitemap submetido ao Google
- [ ] Lighthouse audit executado

### Monitoramento
- [ ] Google Analytics configurado
- [ ] Search Console configurado
- [ ] Uptime monitoring ativo
- [ ] Alertas configurados

---

## 🎉 Deploy Concluído!

Parabéns! Seu site está no ar. 

### Próximos Passos
1. Monitore analytics nos primeiros dias
2. Ajuste SEO conforme necessário
3. Colete feedback dos usuários
4. Implemente melhorias gradualmente

### Suporte
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Comunidade: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

**Última atualização:** 19/02/2026  
**Versão:** 1.0  
**Status:** ✅ Pronto para deploy
