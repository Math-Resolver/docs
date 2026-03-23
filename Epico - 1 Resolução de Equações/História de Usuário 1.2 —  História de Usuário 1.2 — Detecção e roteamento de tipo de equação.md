## História de Usuário

**Como** desenvolvedor da API,
**Quero** que o sistema identifique automaticamente o tipo da equação recebida,
**Para que** ela seja enviada ao solver correto sem intervenção manual.

---

## Critérios de Aceitação

- [ ] O detector de tipo deve classificar corretamente: **linear**, **quadrática**
      e **sistema de equações**
- [ ] A classificação deve ocorrer após o parsing da expressão e antes
      de chamar qualquer solver
- [ ] Se o tipo não for reconhecido, lançar exceção interna que resulte
      em `422 Unprocessable Entity` na resposta
- [ ] A lógica de detecção deve ser **isolada em módulo próprio**,
      sem acoplamento direto ao endpoint

---

## Notas Técnicas

- Criar módulo `equation_type_detector.py`
- Usar `sympy` para análise do grau do polinômio
- Cobrir com testes unitários os três tipos + caso inválido

---

**Labels:** `feature` `backend` `solver` `refactor`
**Story Points:** 3
