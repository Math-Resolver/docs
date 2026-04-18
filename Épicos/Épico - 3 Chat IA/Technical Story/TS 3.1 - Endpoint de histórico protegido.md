# TS 3.1 — Endpoint de histórico protegido

## Objetivo

Implementar o endpoint de consulta de histórico com autenticação JWT.

## Tarefas

- [ ] Criar router `GET /v1/equation/history`
- [ ] Exigir header `Authorization: Bearer <token>`
- [ ] Retornar `401 Unauthorized` para token ausente ou inválido
- [ ] Criar schema Pydantic para resposta: lista de `{ equation, result, steps[] }`

**Labels:** `backend` `auth`
**Story Points:** 2
