# ÉPICO — Autenticação: Login (WebAuthn)

---

## US 5.1 — Iniciar login e receber challenge

### História de Usuário

**Como** usuário já cadastrado,  
**Quero** informar meu e-mail para iniciar o login,  
**Para que** eu receba um challenge para autenticar com a biometria do meu dispositivo.

---

### Critérios de Aceitação

- [ ] O endpoint `POST /v1/auth/login` deve aceitar: `{ "email": "user@email.com" }`
- [ ] Buscar as credenciais do usuário na collection `Users`
- [ ] Se o usuário não existir ou não tiver `credentialId`, retornar `404 Not Found`
- [ ] Gerar um novo challenge e persistir na collection `Challenges` com `expirationDate` de 5 minutos
- [ ] O challenge **nunca deve ser reutilizado**
- [ ] A resposta deve conter: `challenge`, `relyingParty`, `user.id` e `user.username`
- [ ] O endpoint deve aparecer no menu do app como opção de login (anotação de UX do diagrama)

---

### Tasks

- [ ] Criar router `POST /v1/auth/login` no FastAPI
- [ ] Criar schema Pydantic para o body: `email: str`
- [ ] Criar schema Pydantic para a resposta: `challenge`, `relyingParty`, `user`
- [ ] Implementar service `get_user_credentials()`: busca usuário e valida que tem credencial registrada
- [ ] Reutilizar service `generate_challenge()` do fluxo de cadastro
- [ ] Mapear usuário não encontrado ou sem credencial para HTTP 404
- [ ] Escrever teste: e-mail válido com credencial cadastrada → 200 + challenge gerado
- [ ] Escrever teste: e-mail não cadastrado → 404
- [ ] Escrever teste: usuário sem credencial registrada → 404

---

**Labels:** `feature` `backend` `auth` `webauthn`  
**Story Points:** 3

---

## US 5.2 — Finalizar login e receber tokens de acesso

### História de Usuário

**Como** usuário já cadastrado,  
**Quero** enviar minha credencial biométrica para concluir o login,  
**Para que** eu receba um `access_token` e um `refresh_token` para acessar o app.

---

### Critérios de Aceitação

- [ ] O endpoint `POST /v1/auth/login/finish` deve aceitar: `{ "credential": "hashASAHASD..." }`
- [ ] Recuperar o challenge salvo correspondente à credencial
- [ ] Buscar a `publicKey` do usuário na collection `Users`
- [ ] Validar a credencial usando a `publicKey`
- [ ] Se inválida, retornar `401 Unauthorized`
- [ ] Se válida: gerar `access_token` (JWT de curta duração) e `refresh_token`
- [ ] Persistir o `refresh_token` na collection `RefreshTokens` com `isRevoked: false` e `expirationDate` de 7 dias
- [ ] O hash do `refresh_token` deve ser salvo (não o token em texto plano)
- [ ] Invalidar o challenge após uso
- [ ] A resposta deve conter: `{ "access_token": "...", "refresh_token": "..." }`

---

### Tasks

- [ ] Criar router `POST /v1/auth/login/finish` no FastAPI
- [ ] Criar schema Pydantic para o body: `credential: str`
- [ ] Criar schema Pydantic para a resposta: `access_token: str`, `refresh_token: str`
- [ ] Implementar service `get_challenge_by_credential()` (reutilizar do cadastro)
- [ ] Implementar service `get_public_key_by_user()`: busca `publicKey` na collection `Users`
- [ ] Implementar service `validate_credential_with_public_key()`: valida assinatura
- [ ] Implementar service `generate_tokens()`: gera JWT (access) e refresh token
- [ ] Implementar service `persist_refresh_token()`: salva hash do token em `RefreshTokens`
- [ ] Implementar invalidação do challenge após uso
- [ ] Criar índice TTL na collection `RefreshTokens` pelo campo `expirationDate`
- [ ] Mapear credencial inválida para HTTP 401
- [ ] Escrever teste: credencial válida → 200 + access_token + refresh_token persistido
- [ ] Escrever teste: credencial inválida → 401
- [ ] Escrever teste: challenge expirado → 400
- [ ] Escrever teste: refresh_token salvo com isRevoked: false

---

**Labels:** `feature` `backend` `auth` `webauthn` `jwt`  
**Story Points:** 5
