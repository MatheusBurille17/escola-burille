# Changelog - Escola Burille Next.js

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [0.1.0] - 2026-02-19

### ✅ Adicionado
- Sitemap dinâmico (`sitemap.ts`) para SEO
- Robots.txt dinâmico (`robots.ts`) para crawlers
- Página 404 personalizada (`not-found.tsx`)
- Template de variáveis de ambiente (`.env.example`)
- Configuração Git para arquivos binários (`.gitattributes`)
- Documentação completa de melhorias (`MELHORIAS.md`)
- Análise detalhada do projeto (`REVISAO-PROJETO.md`)
- Resumo executivo da revisão (`RESUMO-REVISAO.md`)
- Este changelog (`CHANGELOG.md`)

### 🔧 Corrigido
- Removido uso de `any` em tipos TypeScript
- Adicionadas interfaces tipadas: `Professor`, `Metodologia`, `ModalidadeData`
- Corrigido async/await em `generateMetadata` e componente de modalidade
- Removidos imports não utilizados (`Image` em GaleriaSlider, `useRef` em Planos)
- Escapados caracteres especiais em JSX (aspas em `Sobre.tsx`)
- Movido `viewport` e `themeColor` para export separado no layout
- Corrigido tipagem em arrays map (removido `: any`)

### ⚡ Otimizado
- Migrado `<img>` para `<Image>` do Next.js em:
  - `src/components/Professores.tsx`
  - `src/app/modalidade/[slug]/page.tsx`
- Implementado lazy loading automático de imagens
- Adicionado suporte a formatos modernos (WebP)
- Melhorado LCP (Largest Contentful Paint)

### 📝 Atualizado
- README.md com status das melhorias
- Documentação de próximos passos

### 🎯 Resultados
- **Build:** ✅ Sucesso (sem erros)
- **Lint:** ✅ Sucesso (ZERO warnings)
- **TypeScript:** ✅ Sem erros
- **Páginas geradas:** 12 (8 estáticas + 4 SSG)
- **Pontuação:** 9.0/10

### 🚀 Performance
- Tempo de build: ~8.2s
- TypeScript check: ~6.0s
- Geração de páginas: ~1.6s
- Todas as páginas pré-renderizadas com sucesso

---

## Tipos de Mudanças
- `✅ Adicionado` - Novas funcionalidades
- `🔧 Corrigido` - Correções de bugs
- `⚡ Otimizado` - Melhorias de performance
- `📝 Atualizado` - Mudanças em documentação
- `🗑️ Removido` - Funcionalidades removidas
- `⚠️ Depreciado` - Funcionalidades que serão removidas

---

## Links Úteis
- [Melhorias Detalhadas](./MELHORIAS.md)
- [Revisão Completa](./REVISAO-PROJETO.md)
- [Resumo Executivo](./RESUMO-REVISAO.md)
- [README](./README.md)
