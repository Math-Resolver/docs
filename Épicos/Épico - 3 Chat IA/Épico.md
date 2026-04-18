# Épico — Chat IA

## Objetivo

Integrar um assistente de IA ao app Killmath para responder dúvidas sobre tópicos matemáticos, usando autenticação obrigatória, cache de respostas recentes e integração com a Gemini Developer API.

## Escopo

- Endpoint protegido `POST /v1/conversation`
- Cliente autenticado via JWT
- Receber um tópico matemático no body da requisição
- Consultar o Redis antes de chamar a LLM
- Reaproveitar resposta recente em cache para o tópico solicitado
- Chamar a Gemini Developer API quando não houver cache válido
- Retornar uma resposta textual da IA ao cliente
- Retornar `401 Unauthorized` quando o usuário não estiver autenticado

## Histórias de Usuário

| ID   | Título |
|------|--------|
| US 3.1 | Enviar um tópico matemático e receber uma explicação da IA |

## Tarefas Técnicas

| ID     | Título |
|--------|--------|
| TS 3.1 | Endpoint protegido de conversa |
| TS 3.2 | Cache de respostas por tópico com Redis |
| TS 3.3 | Integração com Gemini Developer API |
| TS 3.4 | Segurança, contrato e testes |

## Dependências

- Módulo JWT do Épico 0
- Redis para cache temporário por tópico
- Gemini Developer API como provedor externo de inferência

## Próximos passos sugeridos

- Definir o TTL do cache para caracterizar resposta recente
- Refinar o contrato final da resposta para o app Flutter
- Avaliar se a chave de cache será apenas por tópico ou por usuário e tópico

**Labels:** `chat` `ia` `backend` `redis`