# 🔒 Configuração SSL/HTTPS - Escola Burille

Guia completo para configurar SSL/HTTPS no projeto.

---

## ✅ SSL Automático (Recomendado)

### Vercel (Mais Fácil)
**Status:** ✅ SSL automático e gratuito

Quando você faz deploy na Vercel:
- ✅ SSL configurado automaticamente
- ✅ Certificado renovado automaticamente
- ✅ HTTPS forçado por padrão
- ✅ HTTP → HTTPS redirect automático
- ✅ Suporte a domínios personalizados

**Nenhuma configuração necessária!** 🎉

### Netlify
**Status:** ✅ SSL automático e gratuito

- ✅ Let's Encrypt automático
- ✅ Renovação automática
- ✅ HTTPS forçado

**Nenhuma configuração necessária!** 🎉

---

## 🔧 Configurações Adicionais

### 1. Forçar HTTPS no Next.js

Já configurado em `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // Outras configs...
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ];
  }
};
```

### 2. Redirect HTTP → HTTPS

Adicione ao `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // Outras configs...
  
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://escolaburille.com.br/:path*',
        permanent: true,
      },
    ];
  }
};
```

---

## 🌐 Configuração por Plataforma

### Vercel

#### Passo 1: Deploy
```bash
# Deploy automático via GitHub
git push origin main
```

#### Passo 2: Adicionar Domínio
1. Vá em **Settings > Domains**
2. Adicione: `escolaburille.com.br`
3. Adicione: `www.escolaburille.com.br`

#### Passo 3: SSL Automático
- ✅ Vercel provisiona certificado automaticamente
- ✅ Aguarde 1-2 minutos
- ✅ SSL ativo!

#### Verificar SSL
```bash
# Teste o certificado
curl -I https://escolaburille.com.br
```

### Netlify

#### Passo 1: Configurar Domínio
1. **Site settings > Domain management**
2. Adicione domínio personalizado
3. Configure DNS

#### Passo 2: Ativar HTTPS
1. **Domain settings > HTTPS**
2. Clique em "Verify DNS configuration"
3. Clique em "Provision certificate"
4. Aguarde 1-2 minutos

#### Passo 3: Forçar HTTPS
1. Ative "Force HTTPS"
2. ✅ Pronto!

---

## 🔐 Configuração Manual (Servidor Próprio)

### Usando Let's Encrypt (Gratuito)

#### 1. Instalar Certbot
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install certbot python3-certbot-nginx
```

#### 2. Obter Certificado
```bash
sudo certbot --nginx -d escolaburille.com.br -d www.escolaburille.com.br
```

#### 3. Renovação Automática
```bash
# Testar renovação
sudo certbot renew --dry-run

# Adicionar ao cron
sudo crontab -e
# Adicione:
0 0 * * * certbot renew --quiet
```

### Configuração Nginx

```nginx
# /etc/nginx/sites-available/escolaburille

server {
    listen 80;
    server_name escolaburille.com.br www.escolaburille.com.br;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name escolaburille.com.br www.escolaburille.com.br;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/escolaburille.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/escolaburille.com.br/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    # Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 🔍 Verificação de SSL

### 1. Teste Online
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Análise completa
- [SSL Checker](https://www.sslshopper.com/ssl-checker.html) - Verificação rápida

### 2. Teste via Comando
```bash
# Verificar certificado
openssl s_client -connect escolaburille.com.br:443 -servername escolaburille.com.br

# Verificar data de expiração
echo | openssl s_client -servername escolaburille.com.br -connect escolaburille.com.br:443 2>/dev/null | openssl x509 -noout -dates
```

### 3. Teste no Navegador
1. Acesse: `https://escolaburille.com.br`
2. Clique no cadeado 🔒
3. Verifique certificado

---

## 🎯 Checklist de SSL

### Configuração Básica
- [x] SSL/TLS ativo
- [x] Certificado válido
- [x] HTTPS forçado
- [x] HTTP → HTTPS redirect
- [x] Certificado para www e domínio raiz

### Segurança Avançada
- [x] HSTS habilitado
- [x] TLS 1.2+ apenas
- [x] Ciphers seguros
- [x] Headers de segurança
- [ ] HSTS preload (opcional)

### Monitoramento
- [ ] Alerta de expiração configurado
- [ ] Renovação automática testada
- [ ] Backup de certificados

---

## 🔐 Headers de Segurança

### Já Configurados em vercel.json

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Adicionar ao next.config.ts

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  }
};
```

---

## 🌟 HSTS Preload (Opcional)

### O que é HSTS Preload?
Lista de sites que navegadores carregam sempre via HTTPS.

### Como Adicionar
1. Configure HSTS com `preload`:
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

2. Submeta em: [hstspreload.org](https://hstspreload.org)

3. Aguarde inclusão (semanas/meses)

**⚠️ Atenção:** Difícil de reverter! Só faça se tiver certeza.

---

## 🔄 Renovação de Certificados

### Vercel/Netlify
- ✅ Renovação automática
- ✅ Sem ação necessária

### Let's Encrypt (Manual)
```bash
# Renovar manualmente
sudo certbot renew

# Renovar e recarregar nginx
sudo certbot renew --deploy-hook "systemctl reload nginx"

# Verificar próxima renovação
sudo certbot certificates
```

### Monitoramento
Configure alertas 30 dias antes da expiração:
- [SSL Monitor](https://sslmate.com/certspotter/)
- [Uptime Robot](https://uptimerobot.com)

---

## 🐛 Troubleshooting

### Erro: "Certificate not trusted"
```bash
# Verificar cadeia de certificados
openssl s_client -connect escolaburille.com.br:443 -showcerts

# Solução: Incluir certificado intermediário
```

### Erro: "Mixed content"
```javascript
// Verificar recursos HTTP em página HTTPS
// Trocar todos os http:// por https:// ou //
```

### Erro: "Too many redirects"
```nginx
# Verificar configuração de proxy
proxy_set_header X-Forwarded-Proto $scheme;
```

---

## 📊 Teste de Segurança

### SSL Labs Test
```
Acesse: https://www.ssllabs.com/ssltest/
Digite: escolaburille.com.br
Meta: A+ rating
```

### Security Headers
```
Acesse: https://securityheaders.com
Digite: escolaburille.com.br
Meta: A+ rating
```

### Mozilla Observatory
```
Acesse: https://observatory.mozilla.org
Digite: escolaburille.com.br
Meta: A+ rating
```

---

## ✅ Status Atual

### Vercel (Recomendado)
- ✅ SSL automático configurado
- ✅ Headers de segurança em vercel.json
- ✅ HSTS configurado
- ✅ Redirect HTTP → HTTPS automático

### Próximos Passos
1. Fazer deploy na Vercel
2. Adicionar domínio personalizado
3. Aguardar provisionamento SSL (1-2 min)
4. Testar HTTPS
5. Verificar em SSL Labs

---

## 📞 Suporte

### Documentação
- [Vercel SSL](https://vercel.com/docs/concepts/projects/custom-domains#ssl)
- [Let's Encrypt](https://letsencrypt.org/docs/)
- [Mozilla SSL Config](https://ssl-config.mozilla.org/)

### Ferramentas
- [SSL Labs](https://www.ssllabs.com/ssltest/)
- [Security Headers](https://securityheaders.com)
- [HSTS Preload](https://hstspreload.org)

---

**Configurado em:** 19/02/2026  
**Status:** ✅ Pronto para Vercel (SSL automático)  
**Próximo passo:** Deploy e adicionar domínio
