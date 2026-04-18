# Killmath - Documentação

## 1. Identificação do Grupo

- Número do grupo: preencher

### Integrantes

- Matheus Caldana Ferreira Bernardo Terzini - RA: 924106937
- Domingos Lobito Capewa - RA: 924120184
- Juliana Vieira Santos - RA: 924118221
- Richard Ryan dos Santos Camargo - RA: 924100027
- Wagner Sousa de Araujo - RA: 923210738
- Arthur Aguiar Costa - RA: 924106342
- Luiz Gustavo Brasil de Assis - RA: 926117718
- Vinícius Viana de Aguiar - RA: 924114067
- Vinicius Ventura Ribeiro - RA: 924105577
- Nome completo - RA: preencher

## 2. Definição do Problema e Modelo de Negócio

### Descrição do Problema

Muitos estudantes enfrentam dificuldades na resolução de equações matemáticas por não terem acompanhamento imediato durante o estudo. Em diversos contextos, a dúvida surge fora do horário de aula e o aluno não consegue validar se está seguindo o raciocínio correto, o que compromete a autonomia, a confiança e a continuidade da aprendizagem.

Além disso, ferramentas existentes costumam focar apenas no resultado final, sem oferecer explicação clara do processo de resolução. Isso reduz o valor pedagógico da solução e mantém a dependência de reforço externo, muitas vezes inacessível para parte da população.

O Killmath propõe uma plataforma digital capaz de resolver equações, identificar seu tipo, apresentar explicações passo a passo, armazenar o histórico do usuário e oferecer apoio complementar por meio de um chat com IA voltado para tópicos matemáticos.

### Público-Alvo e Contexto Social

#### Público-alvo

- Estudantes do ensino fundamental, médio e superior.
- Alunos em preparação para vestibulares, ENEM e provas escolares.
- Pessoas em reforço educacional ou retomando conteúdos básicos de matemática.
- Instituições de ensino que desejam oferecer suporte digital ao estudo.

#### Contexto social e comunitário

O projeto possui caráter de extensão universitária ao buscar ampliar o acesso a uma ferramenta educacional de apoio, especialmente para estudantes com menor acesso a acompanhamento individual, monitorias privadas ou plataformas pagas. A proposta contribui para o fortalecimento do estudo independente e para a democratização do aprendizado de matemática em comunidades com restrições econômicas e educacionais.

Nesse contexto, o Killmath pode ser utilizado como instrumento de apoio complementar fora da sala de aula, promovendo inclusão educacional, autonomia do estudante e maior continuidade no processo de aprendizagem.

### Modelo de Negócio SaaS - Business Model Canvas

| Bloco do Canvas | Descrição |
| --- | --- |
| Proposta de valor | Resolver equações de forma rápida e confiável, explicar o passo a passo da resolução, oferecer histórico pessoal de consultas e disponibilizar suporte complementar com IA para dúvidas matemáticas. |
| Segmentos de clientes | Estudantes, escolas, cursos preparatórios, instituições de ensino e plataformas educacionais parceiras. |
| Canais | Aplicativo mobile, futura aplicação web, parcerias com escolas, divulgação acadêmica e redes sociais. |
| Relacionamento com clientes | Autoatendimento digital, experiência personalizada por conta autenticada, histórico de uso e suporte orientado por IA. |
| Fontes de receita | Plano gratuito com limitações, assinatura premium com recursos avançados, licenciamento institucional para escolas e possíveis parcerias educacionais. |
| Recursos principais | Infraestrutura em nuvem, API de autenticação segura, motor de resolução de equações, integração com IA, banco de dados e equipe de desenvolvimento. |
| Atividades-chave | Desenvolvimento da plataforma, manutenção da infraestrutura, evolução dos solvers matemáticos, garantia de segurança, testes e suporte operacional. |
| Parcerias principais | Instituições de ensino, provedores de nuvem, serviços de autenticação e provedores de IA generativa. |
| Estrutura de custos | Hospedagem em nuvem, banco de dados, serviços de IA, desenvolvimento, manutenção, observabilidade, testes e suporte técnico. |

## 3. Requisitos do Sistema

### Requisitos Funcionais

- RF01. O sistema deve permitir o cadastro de usuários por autenticação sem senha utilizando WebAuthn/passkeys.
- RF02. O sistema deve permitir que o usuário inicie o processo de login e receba um challenge de autenticação.
- RF03. O sistema deve validar a credencial biométrica enviada pelo usuário e concluir o login com segurança.
- RF04. O sistema deve emitir access token e refresh token após autenticação bem-sucedida.
- RF05. O sistema deve permitir a renovação do access token por meio de refresh token válido.
- RF06. O sistema deve receber uma equação enviada pelo usuário e identificar automaticamente seu tipo.
- RF07. O sistema deve resolver equações suportadas e retornar o resultado com explicação passo a passo.
- RF08. O sistema deve persistir no histórico as equações resolvidas por usuários autenticados.
- RF09. O sistema deve disponibilizar um endpoint protegido para consulta do histórico individual do usuário.
- RF10. O sistema deve permitir paginação e ordenação do histórico de equações resolvidas.
- RF11. O sistema deve isolar os dados por usuário autenticado, impedindo acesso ao histórico de terceiros.
- RF12. O sistema deve oferecer um endpoint protegido de chat para que o usuário envie tópicos matemáticos e receba explicações geradas por IA.

### Requisitos Não Funcionais

- RNF01. Segurança: o sistema deve utilizar autenticação forte com WebAuthn e proteger tokens e dados sensíveis. Justificativa: a plataforma lida com identidade de usuários e exige proteção contra acesso indevido.
- RNF02. Desempenho: operações de resolução e consulta devem apresentar resposta adequada para uso interativo. Justificativa: o usuário espera retorno rápido para manter o fluxo de estudo.
- RNF03. Escalabilidade: a solução deve suportar crescimento gradual da base de usuários e volume de requisições. Justificativa: o modelo SaaS depende de expansão sem reestruturação frequente da arquitetura.
- RNF04. Disponibilidade: os serviços principais devem permanecer acessíveis na maior parte do tempo. Justificativa: estudantes podem utilizar a plataforma em horários variados, inclusive fora do ambiente escolar.
- RNF05. Manutenibilidade e testabilidade: a aplicação deve possuir testes automatizados e componentes organizados por responsabilidade. Justificativa: isso reduz regressões e facilita evolução contínua dos épicos planejados.

## 4. User Stories e Kanban

### User Stories

- US01. Como estudante, quero criar minha conta com passkey para acessar a plataforma sem depender de senha.
- US02. Como estudante, quero fazer login com biometria para entrar de forma rápida e segura.
- US03. Como estudante, quero enviar uma equação para o sistema para obter sua resolução automaticamente.
- US04. Como estudante, quero que o sistema identifique o tipo da equação para receber o método de resolução adequado.
- US05. Como estudante, quero visualizar o passo a passo da resolução para compreender o raciocínio matemático.
- US06. Como usuário autenticado, quero que minhas equações resolvidas sejam salvas para consultar meu histórico depois.
- US07. Como usuário autenticado, quero visualizar meu histórico com paginação e ordenação para localizar resoluções anteriores com facilidade.
- US08. Como usuário autenticado, quero ter meu histórico isolado para garantir privacidade dos meus dados.
- US09. Como estudante, quero renovar meu access token sem fazer login novamente para continuar usando a plataforma sem interrupção.
- US10. Como estudante, quero enviar um tópico matemático ao chat de IA para receber explicações complementares ao meu estudo.

### Kanban

- Link do quadro Kanban no GitHub Projects: [Board](https://github.com/orgs/Math-Resolver/projects/2/views/1)
- Colunas: A Fazer, Refinando, Planejado, Em Progresso, Em Revisão, Implantando, Concluído

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
