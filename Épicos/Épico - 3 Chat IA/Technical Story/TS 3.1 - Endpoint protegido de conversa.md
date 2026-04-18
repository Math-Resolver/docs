# TS 3.1 — Endpoint protegido de conversa

## Objetivo

Implementar o endpoint de chat com autenticação JWT.

## Tarefas

- [ ] Criar router `POST /v1/conversation`
- [ ] Exigir header `Authorization: Bearer <token>`
- [ ] Retornar `401 Unauthorized` para token ausente ou inválido
- [ ] Criar schema Pydantic para o body: `{ topic: str }`
- [ ] Criar schema Pydantic para a resposta: `{ message: str, example: str | null }`

**Labels:** `backend` `auth`
**Story Points:** 2