# observer-pattern
prova de conceito implementando padrão comportamental [Observer](https://refactoring.guru/pt-br/design-patterns/observer).

## Estrutura:
- eventListener - Arquivo com os subscribers (Logger, EmailSender, SlackNotificationSender...).
- eventManager - Arquivo com o gerenciador de eventos, o gerenciador vai ser o intermediador da comunicação entre o publisher e subscriber.
- editor - Arquivo com o publisher deste exemplo.

```bash
# Instale as dependências
$ npm install

# Execute o arquivo index.ts
$ npx ts-node-dev index.ts
```
