# 🎟️ Sistema de Gestão de Eventos — Prática com Laravel

Projeto desenvolvido para praticar recursos avançados do framework **Laravel** através da criação de um sistema completo de gestão de eventos.

A aplicação permite que usuários criem eventos, gerenciem participantes e realizem inscrições.

O objetivo é explorar **boas práticas de desenvolvimento, arquitetura e recursos avançados do Laravel**.

---

# 🚀 Funcionalidades

## 👤 1. Usuários e Autenticação

Sistema completo de gerenciamento de usuários.

### Funcionalidades

- Registro de usuário
- Login / Logout
- Recuperação de senha
- Verificação de e-mail
- Perfil do usuário
- Alterar senha
- Upload de avatar
- Sessões ativas do usuário

### Recursos utilizados

- Auth
- Sessions
- Mail
- Storage

---

# 🎫 2. Gestão de Eventos

Permite que organizadores criem e administrem eventos.

### Funcionalidades

- Criar evento
- Editar evento
- Excluir evento
- Página pública do evento
- Upload de banner do evento
- Localização do evento
- Data e horário
- Limite de vagas

### Recursos utilizados

- Migrations
- Eloquent ORM
- Storage
- FormRequest

---

# 📝 3. Sistema de Inscrições

Usuários podem se inscrever em eventos e acompanhar sua participação.

### Funcionalidades

- Inscrição em eventos
- Lista de participantes
- Confirmação de inscrição por e-mail
- Contador de vagas restantes

### Recursos utilizados

- Mailables
- Jobs
- Queue
- Events

---

# 🔐 4. Permissões e Segurança

Controle de acesso e proteção das funcionalidades do sistema.

### Funcionalidades

- Apenas organizador pode editar evento
- Apenas administrador pode excluir evento
- Usuário só vê suas inscrições
- Rate limit em inscrições
- Middleware de verificação de email
- Logs de atividade

### Recursos utilizados

- Gates
- Policies
- Middleware

---

# ⚙️ 5. Automação

Automação de tarefas importantes do sistema.

### Funcionalidades

- Job para enviar lembrete antes do evento
- Email automático 1 dia antes do evento

### Recursos utilizados

- Jobs
- Scheduler
- Queue

---

# 📦 Recursos do Laravel praticados

Este projeto utiliza diversos recursos do framework:

- Migrations
- Seeders
- Factories
- Eloquent ORM
- Relacionamentos
- FormRequest
- Middleware
- Authentication
- Mailables
- Notifications
- Events
- Listeners
- Jobs
- Queue
- Cache
- Storage
- Policies
- Gates
- Websockets
- Scheduler
- Artisan Commands

# 📌 Objetivo

Este projeto foi criado com o objetivo de **praticar profundamente o ecossistema Laravel** e construir um **projeto robusto para portfólio de desenvolvedor backend**.