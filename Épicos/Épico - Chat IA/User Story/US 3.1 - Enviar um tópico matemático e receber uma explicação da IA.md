## História de Usuário

**Como** usuário autenticado,
**Quero** enviar um tópico matemático para o chat,
**Para que** eu receba uma explicação gerada por IA.

---

## Critérios de Aceitação

- [ ] O endpoint `POST /v1/conversation` deve exigir JWT válido via header
      `Authorization: Bearer <token>`
- [ ] Sem token ou token inválido: retornar `401 Unauthorized`
- [ ] O body da requisição deve aceitar `{ "topic": "Logarithm" }`
- [ ] Se existir resposta recente em cache para o tópico solicitado, a API deve retornar a resposta armazenada sem chamar a LLM
- [ ] Se não existir resposta recente em cache, a API deve consultar a Gemini Developer API
- [ ] A resposta deve retornar uma mensagem textual da IA ao cliente
- [ ] A resposta pode incluir um exemplo de apoio ao tópico solicitado
- [ ] O fluxo não deve permitir uso do endpoint por usuários não autenticados

---

## Notas Técnicas

- Consultar o Redis antes de chamar a Gemini Developer API
- Em caso de sucesso da LLM, a resposta pode ser armazenada no Redis para reaproveitamento posterior
- O contrato ilustrado no diagrama sugere resposta no formato:
  `{ "message": "...", "example": "..." }`

---

**Labels:** `feature` `backend` `auth` `redis` `ia`
**Story Points:** 3