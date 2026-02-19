# Escola Burille - Next.js

Site institucional da Escola Burille de Artes Marciais migrado para Next.js 15.

## 🚀 Início Rápido

**Projeto 100% pronto para deploy!** Veja: **[COMECE-AQUI.md](./COMECE-AQUI.md)**

Para deploy em 5 minutos: **[CONFIGURACAO-RAPIDA.md](./CONFIGURACAO-RAPIDA.md)**

## Tecnologias

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- CSS Modules

## Estrutura do Projeto

```
escola-burille-nextjs/
├── src/
│   ├── app/                    # App Router
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial
│   │   ├── globals.css         # Estilos globais
│   │   └── modalidade/[slug]/  # Páginas dinâmicas de modalidades
│   ├── components/             # Componentes React
│   ├── hooks/                  # Custom hooks
│   └── styles/                 # CSS modules
├── public/                     # Arquivos estáticos
│   ├── images/                 # Imagens
│   └── horarios/               # PDFs de horários
└── next.config.ts              # Configuração do Next.js
```

## Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## Diferenças do Vite

### Roteamento
- **Vite**: React Router com rotas definidas em código
- **Next.js**: File-based routing (App Router)

### Imagens
- **Vite**: Import direto ou path público
- **Next.js**: Componente `<Image>` otimizado (opcional)

### SEO
- **Vite**: Client-side rendering
- **Next.js**: Server-side rendering + Static generation

### Deploy
- Vercel (recomendado)
- Netlify
- Qualquer servidor Node.js

## Melhorias do Next.js

1. **SEO Otimizado**: Renderização no servidor
2. **Performance**: Image optimization automática
3. **Rotas API**: Backend integrado (se necessário)
4. **Static Generation**: Páginas pré-renderizadas
5. **Code Splitting**: Automático e otimizado

## Próximos Passos

- [x] Adicionar sitemap.xml
- [x] Configurar robots.txt
- [x] Adicionar página 404 personalizada
- [ ] Implementar Analytics
- [ ] Adicionar PWA
- [ ] Integrar com CMS (futuro)
- [ ] Adicionar e-commerce (futuro)

## Melhorias Recentes

### ✅ Correções Implementadas
- Corrigidos todos os erros de TypeScript/ESLint
- Removido uso de `any` e adicionadas interfaces tipadas
- Corrigido async/await em rotas dinâmicas
- Removidos imports não utilizados
- Escapados caracteres especiais em JSX
- Otimizadas todas as imagens com Next/Image

### ✅ Arquivos Adicionados
- `sitemap.xml` e `sitemap.ts` - SEO otimizado
- `robots.ts` - Configuração para crawlers
- `not-found.tsx` - Página 404 personalizada
- `.env.example` - Template de variáveis de ambiente
- `.gitattributes` - Configuração Git
- `MELHORIAS.md` - Documentação detalhada de melhorias

### ✅ Status Final
- Build: ✅ Sucesso (sem erros)
- Lint: ✅ Zero warnings
- TypeScript: ✅ Sem erros
- Pontuação: 9.0/10

## 📚 Documentação

Para documentação completa, consulte:
- **[DOCS-INDEX.md](./DOCS-INDEX.md)** - Índice completo de documentação
- **[STATUS.md](./STATUS.md)** - Status e métricas do projeto
- **[RESUMO-REVISAO.md](./RESUMO-REVISAO.md)** - Resumo da revisão
- **[MELHORIAS.md](./MELHORIAS.md)** - Detalhes de melhorias

## Contato

Escola Burille - Pato Branco, PR
WhatsApp: (46) 9929-5745
