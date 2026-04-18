# TS 3.3 — Integração com Gemini Developer API

## Objetivo

Buscar a resposta da IA na Gemini Developer API quando não houver cache válido.

## Tarefas

- [ ] Implementar client HTTP para a Gemini Developer API
- [ ] Montar prompt usando o `topic` enviado pelo cliente
- [ ] Tratar a resposta textual da LLM para o contrato da API interna
- [ ] Mapear falhas de integração para erro HTTP adequado
- [ ] Salvar a resposta obtida em cache no Redis após sucesso

**Labels:** `backend` `ia` `integration`
**Story Points:** 3