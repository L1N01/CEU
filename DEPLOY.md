# 🚀 Guia Completo de Deploy no GitHub Pages

## 📋 Pré-requisitos
- Conta no GitHub
- Git instalado no seu computador
- Node.js instalado (já tem)

---

## 🔧 Passo 1: Configurar o Repositório no GitHub

### 1.1 Criar Repositório
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde)
3. Preencha:
   - **Repository name**: `ceu-student-house-site` (ou o nome que preferir)
   - **Description**: "Site da CEU - Casa do Estudante Universitário"
   - Marque como **Public** (necessário para GitHub Pages gratuito)
   - **NÃO** marque "Initialize with README"
4. Clique em **"Create repository"**

### 1.2 Verificar o Nome do Repositório
- Se for `username.github.io` → deixe `base: '/'` no vite.config.ts ✅
- Se for outro nome (ex: `ceu-student-house-site`) → altere para `base: '/ceu-student-house-site/'`

**Para alterar o base (se necessário):**
```typescript
// vite.config.ts
return {
  plugins: [react()],
  base: '/ceu-student-house-site/', // ⚠️ Substitua pelo nome do seu repositório
  // ... resto da configuração
}
```

---

## 💻 Passo 2: Subir o Código para o GitHub

### 2.1 Inicializar Git (se ainda não foi feito)
Abra o terminal no VS Code (Ctrl + `) e execute:

```bash
git init
git add .
git commit -m "Initial commit: CEU Student House website"
```

### 2.2 Conectar ao Repositório Remoto
Substitua `SEU-USUARIO` e `NOME-DO-REPO` pelos valores corretos:

```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

**Exemplo real:**
```bash
git remote add origin https://github.com/joaosilva/ceu-student-house-site.git
git push -u origin main
```

---

## ⚙️ Passo 3: Configurar GitHub Pages

### 3.1 Acessar Configurações
1. Vá para o seu repositório no GitHub
2. Clique na aba **"Settings"** (Configurações)
3. No menu lateral esquerdo, clique em **"Pages"**

### 3.2 Configurar Source
Em **"Build and deployment"**:
- **Source**: Selecione **"GitHub Actions"**
- Não precisa selecionar branch manualmente (o workflow fará isso)

### 3.3 Salvar
As configurações são salvas automaticamente.

---

## 🎯 Passo 4: Deploy Automático

### 4.1 Primeiro Deploy
Após o push do código (Passo 2), o GitHub Actions iniciará automaticamente:
1. Vá para a aba **"Actions"** no seu repositório
2. Você verá o workflow **"Deploy to GitHub Pages"** rodando
3. Aguarde finalizar (geralmente 2-3 minutos)
4. ✅ Quando aparecer um ✓ verde, está pronto!

### 4.2 Acessar o Site
Após o deploy, o site estará disponível em:
- **Site de usuário**: `https://SEU-USUARIO.github.io/`
- **Site de projeto**: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`

**Exemplo:**
- `https://joaosilva.github.io/ceu-student-house-site/`

---

## 🔄 Passo 5: Atualizações Futuras

Para fazer alterações no site:

```bash
# 1. Faça as alterações no código
# 2. Commit as mudanças
git add .
git commit -m "Descrição das alterações"

# 3. Envie para o GitHub
git push

# 4. O deploy automático acontecerá em 2-3 minutos
```

---

## 🐛 Solução de Problemas

### Problema 1: Site não carrega (página em branco)
**Causa**: Base path incorreto no vite.config.ts

**Solução:**
- Se o repo é `username.github.io` → use `base: '/'`
- Se o repo é `projeto-nome` → use `base: '/projeto-nome/'`

### Problema 2: CSS/JS não carregam
**Causa**: Mesmo que acima

**Solução:** Verifique o console do navegador (F12) e ajuste o `base` no vite.config.ts

### Problema 3: Deploy falhou
**Causa**: Erro de build ou permissões

**Solução:**
1. Vá em **Settings** > **Actions** > **General**
2. Em **"Workflow permissions"**, selecione **"Read and write permissions"**
3. Marque **"Allow GitHub Actions to create and approve pull requests"**
4. Clique em **"Save"**
5. Vá em **Actions** e clique em **"Re-run all jobs"**

### Problema 4: Erro 404 ao acessar
**Causa**: GitHub Pages ainda não foi ativado

**Solução:**
1. Vá em **Settings** > **Pages**
2. Verifique se **Source** está como **"GitHub Actions"**
3. Aguarde alguns minutos

---

## 📝 Checklist Final

Antes de considerar completo, verifique:

- [ ] Repositório criado no GitHub
- [ ] Código enviado com `git push`
- [ ] GitHub Pages configurado em Settings > Pages
- [ ] Workflow executado com sucesso (Actions)
- [ ] Site acessível na URL do GitHub Pages
- [ ] Todas as páginas funcionando (Home, Sobre, FAQ, Contato)
- [ ] Imagens carregando corretamente
- [ ] Vídeo do YouTube funcionando
- [ ] Seletor de idiomas funcionando
- [ ] Design responsivo em mobile

---

## 🎉 Pronto!

Seu site da CEU agora está no ar! 🚀

**Links importantes:**
- Repositório: `https://github.com/SEU-USUARIO/NOME-DO-REPO`
- Site: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`
- Actions (logs): `https://github.com/SEU-USUARIO/NOME-DO-REPO/actions`

---

## 💡 Dicas Extras

### Domínio Personalizado (Opcional)
Se quiser usar um domínio próprio (ex: `ceu.com.br`):
1. Vá em **Settings** > **Pages**
2. Em **"Custom domain"**, digite seu domínio
3. Configure os DNS do seu domínio apontando para o GitHub Pages

### HTTPS Automático
O GitHub Pages fornece HTTPS gratuitamente via Let's Encrypt. Certifique-se de que:
- Em **Settings** > **Pages**, a opção **"Enforce HTTPS"** está marcada

### Analytics (Opcional)
Para monitorar visitas, adicione Google Analytics ou similar no `index.html`.

---

**Dúvidas?** Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/pages)
