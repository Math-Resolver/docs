# TS 3.2 — Cache de respostas por tópico com Redis

## Objetivo

Evitar chamadas desnecessárias à LLM reaproveitando respostas recentes por tópico.

## Tarefas

- [ ] Consultar o Redis antes de chamar a LLM
- [ ] Utilizar chave baseada no tópico consultado
- [ ] Definir TTL para considerar uma resposta como recente
- [ ] Se houver cache válido, retornar a resposta armazenada
- [ ] Se não houver cache, permitir continuidade do fluxo para a LLM
- [ ] Armazenar a resposta gerada pela LLM no Redis após sucesso

**Labels:** `backend` `redis` `cache`
**Story Points:** 2