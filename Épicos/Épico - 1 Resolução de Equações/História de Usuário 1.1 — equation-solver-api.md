## História de Usuário

**Como** usuário do app,
**Quero** enviar uma equação matemática e receber o resultado com os passos da resolução,
**Para que** eu possa entender como a equação foi resolvida.

---

## Critérios de Aceitação

- [x] O endpoint `POST /v1/equation/solve` deve aceitar o corpo:
      `{ "equation": "2*x + 5 = 15", "showSteps": true }`
- [x] A resposta deve conter `result` e, se `showSteps: true`, o array `steps`
      com `rule`, `before` e `after` em cada passo
- [ ] O endpoint deve suportar equações **lineares**, **quadráticas** e
      **sistemas de equações**
- [x] Se a equação for inválida, retornar `400 Bad Request` com mensagem descritiva
- [ ] Se o tipo de equação não for suportado, retornar `422 Unprocessable Entity`
- [x] A requisição deve ser **idempotente**: a mesma equação enviada múltiplas
      vezes deve retornar sempre o mesmo resultado sem efeitos colaterais
      (a persistência é responsabilidade de outra task)
- [ ] O endpoint deve respeitar um **token de cancelamento**: se o cliente
      encerrar a conexão antes da resposta, o processamento deve ser interrompido

---

## Notas Técnicas

- Usar `asyncio.CancelledError` ou checar `request.is_disconnected()`
  (FastAPI/Starlette) para implementar o token de cancelamento
- O parser deve identificar o tipo da equação antes de despachar para o solver correto
- Retornar HTTP 200 mesmo quando `showSteps: false` (não omitir a chave, enviar array vazio)

---

**Labels:** `feature` `backend` `solver`
**Story Points:** 5
