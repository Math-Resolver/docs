#  ÉPICO — Autenticação: Renovação de Token (Refresh)

---

## US 6.1 — Renovar access token via refresh token

### História de Usuário

**Como** usuário autenticado com sessão ativa,  
**Quero** trocar meu refresh token por um novo par de tokens,  
**Para que** minha sessão continue válida sem precisar fazer login novamente.

---

### Critérios de Aceitação

- [ ] O endpoint `POST /v1/auth/refresh-token` deve aceitar: `{ "token": "hashASAHASD..." }`
- [ ] Verificar se o token existe na collection `RefreshTokens`
- [ ] Se não existir, retornar `401 Unauthorized`
- [ ] Verificar se o token não está expirado (`expirationDate`)
- [ ] Se expirado, retornar `401 Unauthorized`
- [ ] Verificar se `isRevoked` é `false`
- [ ] Se revogado (`isRevoked: true`), retornar `401 Unauthorized`
- [ ] Se todas as validações passarem: gerar novo `access_token` e novo `refresh_token`
- [ ] **Revogar o token antigo** — atualizar `isRevoked: true` no documento atual (token rotation)
- [ ] Persistir o novo `refresh_token` na collection `RefreshTokens` com `isRevoked: false` e nova `expirationDate` de 7 dias
- [ ] A resposta deve conter: `{ "access_token": "...", "refresh_token": "..." }`
- [ ] A operação deve ser **atômica**: revogar o antigo e inserir o novo em uma única operação (ou com rollback em caso de falha)

---

### Tasks

- [ ] Criar router `POST /v1/auth/refresh-token` no FastAPI
- [ ] Criar schema Pydantic para o body: `token: str`
- [ ] Criar schema Pydantic para a resposta: `access_token: str`, `refresh_token: str`
- [ ] Implementar service `find_refresh_token()`: busca o token na collection `RefreshTokens`
- [ ] Implementar validação de expiração: comparar `expirationDate` com `datetime.utcnow()`
- [ ] Implementar validação de revogação: checar campo `isRevoked`
- [ ] Implementar service `rotate_refresh_token()`:
  - [ ] Marcar token atual como `isRevoked: true`
  - [ ] Inserir novo documento em `RefreshTokens` com `isRevoked: false`
  - [ ] Usar sessão/transação do MongoDB para garantir atomicidade
- [ ] Reutilizar service `generate_tokens()` do fluxo de login
- [ ] Mapear token inexistente, expirado ou revogado para HTTP 401
- [ ] Escrever teste: token válido → 200 + novo par de tokens + token antigo revogado
- [ ] Escrever teste: token expirado → 401
- [ ] Escrever teste: token revogado → 401
- [ ] Escrever teste: token inexistente → 401
- [ ] Escrever teste: atomicidade — falha na inserção do novo token não deve revogar o antigo

---

**Labels:** `feature` `backend` `auth` `jwt` `security`  
**Story Points:** 5
