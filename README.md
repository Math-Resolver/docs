# Killmath - Documentação

### Identificação do grupo

Integrantes:

- Matheus Caldana Ferreira Bernardo Terzini — RA: 924106937
- Domingos Lobito Capewa — RA: 924120184
- Juliana Vieira Santos — RA: 924118221
- Richard Ryan dos Santos Camargo — RA: 924100027
- Wagner Sousa de Araujo — RA: 923210738
- Arthur Aguiar Costa — RA: 924106342
- Luiz Gustavo Brasil de Assis — RA: 926117718
- Vinícius Viana de Aguiar — RA: 924114067
- Vinicius Ventura Ribeiro — RA: 
- Nome Completo — RA: XXXXXXX

### Definição do problema e modelo de negócio

#### Problema

Muitos estudantes enfrentam dificuldades na resolução de equações matemáticas, especialmente sem acompanhamento imediato. A falta de ferramentas acessíveis e intuitivas dificulta o aprendizado autônomo.

O **Killmath** surge como uma solução digital que permite resolver equações matemáticas de forma rápida, explicativa e acessível.

#### Público alvo e Contexto Social

- Estudantes do ensino fundamental, médio e superior.
- Pessoas em processo de reforço educacional.
- Comunidades com acesso limitado a professores particulares.

#### Aspecto de extensão:

O projeto contribui para democratizar o acesso ao aprendizado matemático, oferecendo uma ferramenta gratuita (ou acessível) que auxilia no estudo independente.

### Modelo de negócio (SaaS)

#### Proposta de Valor

- Resolução automática de equações.
- Explicação passo a passo.
- Acesso seguro via passkeys (sem senha).

#### Segmentos de Clientes

- Estudantes
- Escolas e instituições de ensino
- Plataformas educacionais

#### Canais

- Aplicativo mobile

#### Fontes de Receita

- Plano gratuito com limitações

#### Estrutura de Custos

- Infraestrutura (nuvem)
- Desenvolvimento e manutenção

### Estrutura de Diretórios

```text
.
|-- Arquitetura/
|   |-- Guia de arquitetura.md
|   `-- Killmath.excalidraw
|-- Épicos/
|   |-- Épico - 0 Autenticação e Autorização/
|   |   |-- Épico.md
|   |   |-- Technical Story/
|   |   |   |-- TS 0.1 - Endpoints de cadastro WebAuthn.md
|   |   |   |-- TS 0.2 - Endpoints de login WebAuthn.md
|   |   |   |-- TS 0.3 - Gestão de challenge.md
|   |   |   |-- TS 0.4 - Persistência e segurança de usuário e tokens.md
|   |   |   |-- TS 0.5 - Rotação de refresh token.md
|   |   |   |-- TS 0.6 - Mapeamento de erros HTTP.md
|   |   |   `-- TS 0.7 - Testes automatizados.md
|   |   `-- User Story/
|   |       |-- US 4.1 - Iniciar cadastro e receber challenge.md
|   |       |-- US 4.2 - Finalizar cadastro com credencial biométrica.md
|   |       |-- US 5.1 - Iniciar login e receber challenge.md
|   |       |-- US 5.2 - Finalizar login e receber tokens de acesso.md
|   |       `-- US 6.1 - Renovar access token.md
|   |-- Épico - 1 Resolução de Equações/
|   |   |-- Épico.md
|   |   |-- Technical Story/
|   |   |   |-- TS 1.1 - API de resolução de equações.md
|   |   |   |-- TS 1.2 - Detector de tipo de equação.md
|   |   |   |-- TS 1.3 - Implementação dos solvers.md
|   |   |   |-- TS 1.4 - Tratamento de cancelamento.md
|   |   |   |-- TS 1.5 - Persistência em background.md
|   |   |   |-- TS 1.6 - Idempotência da escrita.md
|   |   |   `-- TS 1.7 - Testes.md
|   |   `-- User Story/
|   |       |-- US 1.1 - Resolver equação via API.md
|   |       |-- US 1.2 - Detectar e rotear tipo de equação.md
|   |       `-- US 1.3 - Persistir resultado para usuário autenticado.md
|   |-- Épico - 2 Histórico de Equações/
|   |   |-- Épico.md
|   |   |-- Technical Story/
|   |   |   |-- TS 2.1 - Endpoint protegido de histórico.md
|   |   |   |-- TS 2.2 - Isolamento por usuário.md
|   |   |   |-- TS 2.3 - Paginação e ordenação.md
|   |   |   |-- TS 2.4 - Contrato e metadados de resposta.md
|   |   |   |-- TS 2.5 - Cancelamento de consulta.md
|   |   |   `-- TS 2.6 - Testes.md
|   |   `-- User Story/
|   |       `-- US 2.1 - Buscar histórico do usuário autenticado.md
|   `-- Épico - Chat IA/
|       |-- Épico.md
|       |-- Technical Story/
|       |   |-- TS 3.1 - Endpoint de histórico protegido.md
|       |   |-- TS 3.2 - Paginação e ordenação.md
|       |   |-- TS 3.3 - Segurança e cancelamento.md
|       |   `-- TS 3.4 - Alinhamento de escopo do épico.md
|       `-- User Story/
|           `-- US 3.1 - Consultar histórico de equações resolvidas.md
`-- README.md
```
