# TS 3.4 — Segurança, contrato e testes

## Objetivo

Garantir autenticação obrigatória, contrato estável da API e cobertura mínima de testes para o fluxo do chat.

## Tarefas

- [ ] Validar autenticação antes de qualquer acesso ao cache ou chamada externa
- [ ] Garantir retorno `401 Unauthorized` para clientes não autenticados
- [ ] Definir contrato estável da resposta para o app Flutter
- [ ] Tratar indisponibilidade do Redis sem quebrar o fluxo da API
- [ ] Tratar indisponibilidade ou timeout da Gemini Developer API
- [ ] Escrever testes para:
  - usuário autenticado com cache hit
  - usuário autenticado com cache miss e chamada à LLM
  - usuário não autenticado recebendo `401`

**Labels:** `backend` `security` `test`
**Story Points:** 2