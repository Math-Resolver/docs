# TS 3.2 — Paginação e ordenação

## Objetivo

Implementar paginação e ordenação no endpoint de histórico.

## Tarefas

- [ ] Aceitar query params `page` (default: `1`) e `limit` (default: `3`)
- [ ] Calcular `skip = (page - 1) * limit`
- [ ] Ordenar resultados por `createdAt` DESC
- [ ] Retornar header `X-Total-Count` com total de registros do usuário

**Labels:** `backend` `mongodb`
**Story Points:** 1
