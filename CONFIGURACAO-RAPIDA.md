# ⚡ Configuração Rápida - Deploy em 5 Minutos

Guia rápido para colocar o site no ar.

---

## 🚀 Opção 1: Deploy Rápido na Vercel (Recomendado)

### 1. Criar Conta (1 min)
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Conecte com GitHub

### 2. Importar Projeto (2 min)
1. Clique em "Add New Project"
2. Selecione o repositório
3. Clique em "Deploy"

### 3. Configurar Variáveis (1 min)
Vá em "Settings" > "Environment Variables" e adicione:

```
NEXT_PUBLIC_SITE_URL = https://seu-site.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER = 554699295745
NEXT_PUBLIC_INSTAGRAM_URL = https://www.instagram.com/escolaburille/
NEXT_PUBLIC_EMAIL = escolaburille@gmail.com
```

### 4. Configurar Domínio (1 min)
1. Vá em "Settings" > "Domains"
2. Adicione: `escolaburille.com.br`
3. Configure DNS conforme instruções

**✅ Pronto! Site no ar em ~5 minutos**

---

## 📊 Configurar Google Analytics (Opcional)

### 1. Criar Propriedade (2 min)
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Crie conta/propriedade
3. Copie o ID (G-XXXXXXXXXX)

### 2. Adicionar ao Projeto (1 min)
Na Vercel, adicione variável:
```
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```

**✅ Analytics configurado!**

---

## 🔍 Configurar Google Search Console (Opcional)

### 1. Adicionar Site (2 min)
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione propriedade
3. Verifique via DNS ou arquivo

### 2. Enviar Sitemap (1 min)
Adicione: `https://escolaburille.com.br/sitemap.xml`

**✅ SEO configurado!**

---

## 📋 Checklist Rápido

### Essencial (Obrigatório)
- [ ] Deploy na Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Site acessível via HTTPS

### Recomendado (Importante)
- [ ] Domínio personalizado configurado
- [ ] Google Analytics instalado
- [ ] Search Console configurado

### Opcional (Futuro)
- [ ] Monitoramento de uptime
- [ ] Sentry para erros
- [ ] Cloudflare CDN

---

## 🆘 Problemas Comuns

### Build Falha
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Variáveis Não Funcionam
- Reinicie o deploy após adicionar variáveis
- Verifique se começam com `NEXT_PUBLIC_`

### Domínio Não Funciona
- Aguarde propagação DNS (até 48h)
- Verifique configuração no registrador

---

## 📞 Suporte Rápido

- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Documentação:** [GUIA-DEPLOY.md](./GUIA-DEPLOY.md)
- **Status:** [STATUS.md](./STATUS.md)

---

**Tempo total:** ~5-10 minutos  
**Dificuldade:** ⭐ Fácil  
**Status:** ✅ Pronto para usar
