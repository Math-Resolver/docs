# Killmath - Documentação

### Identificação do grupo

Integrantes:

- Nome Completo — RA: XXXXXXX
- Nome Completo — RA: XXXXXXX
- Nome Completo — RA: XXXXXXX
- Nome Completo — RA: XXXXXXX
- Nome Completo — RA: XXXXXXX
- Nome Completo — RA: XXXXXXX
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

- Infraestrutura (servidores)
- Desenvolvimento e manutenção

### Estrutura de Diretórios

```text
.
|-- Arquitetura/
|   |-- Guia de arquitetura.md
|   `-- Mathphoto.excalidraw
|-- Épicos/
|   |-- Épico - 0 Autenticação/
|   |   |-- US-cadastro.md
|   |   |-- US-cadastro-alternativo.md
|   |   |-- US-login.md
|   |   `-- US-refresh-token.md
|   |-- Épico - 1 Resolução de Equações/
|   |   |-- História de Usuário 1.1 — equation-solver-api.md
|   |   |-- História de Usuário 1.2 — Detecção e roteamento de tipo de equação.md
|   |   `-- História de Usuário 1.3 — Persistência do resultado (usuário logado).md
|   `-- Épico - 2 Histórico de Equações/
|       `-- História de Usuário 2.1 — Buscar histórico do usuário autenticado.md
`-- README.md
```
