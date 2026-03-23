## História de Usuário

**Como** usuário autenticado,
**Quero** que minhas equações resolvidas sejam salvas automaticamente,
**Para que** eu possa consultá-las no histórico depois.

---

## Critérios de Aceitação

- [ ] Após resolver a equação, verificar se o request contém JWT válido
      (fornecido pelo módulo de auth do colega)
- [ ] Se **logado**: persistir no MongoDB na collection `EquationHistory`
      com os campos: `username`, `equation`, `result`, `steps[]`, `createdAt`
- [ ] Se **não logado**: retornar o resultado normalmente **sem** persistir
      (não retornar erro)
- [ ] A persistência **não deve bloquear** a resposta ao cliente — usar
      operação assíncrona (fire-and-forget com tratamento de erro em background)
- [ ] Em caso de falha na persistência, **não propagar erro** para o cliente;
      logar o erro internamente
- [ ] A operação de escrita deve ser **idempotente**: usar `upsert` com chave
      composta `(username, equation, createdAt)` para evitar duplicatas em retentativas

---

## Notas Técnicas

- Usar `motor` (driver async do MongoDB para Python)
- O token JWT será validado via módulo compartilhado com o colega responsável pela auth
- Garantir índice único no MongoDB: `{ username: 1, equation: 1, createdAt: 1 }`

---

**Labels:** `feature` `backend` `database` `mongodb`
**Story Points:** 3
