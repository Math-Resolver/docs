## História de Usuário

**Como** usuário autenticado,
**Quero** consultar meu histórico de equações resolvidas,
**Para que** eu possa revisar resoluções anteriores.

---

## Critérios de Aceitação

- [ ] O endpoint `GET /v1/equation/history` deve exigir JWT válido via header
      `Authorization: Bearer <token>`
- [ ] Sem token ou token inválido: retornar `401 Unauthorized`
- [ ] Retornar os registros do usuário autenticado ordenados por `createdAt` DESC
- [ ] Por padrão, retornar os **3 primeiros registros** da página (MVP)
- [ ] Suportar paginação via query params: `?page=1&limit=3`
- [ ] Cada item do array deve conter: `equation`, `result`, `steps[]`
- [ ] A requisição deve respeitar **token de cancelamento**: se o cliente
      desconectar, abandonar a consulta ao banco
- [ ] Não expor dados de outros usuários (filtrar sempre por `username` do JWT)

---

## Notas Técnicas

- Implementar paginação com `skip` e `limit` no MongoDB:
  `skip = (page - 1) * limit`
- Retornar header `X-Total-Count` com total de registros do usuário
  para o Flutter controlar a paginação no cliente
- Checar `request.is_disconnected()` antes e após a query ao banco

---

**Labels:** `feature` `backend` `database` `mongodb` `auth`
**Story Points:** 3