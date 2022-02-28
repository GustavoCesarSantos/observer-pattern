import { Listener } from './eventListener';
import { EventManager } from './eventManager';

export class Editor {
	events: EventManager;
	logger: Listener;
	emailSender: Listener;

	constructor(
		eventManager: EventManager,
		logger: Listener,
		emailSender: Listener,
	) {
		this.events = eventManager;
		this.logger = logger;
		this.emailSender = emailSender;
	}

	doSomething() {
		this.events.attach('teste1', this.logger);
		this.events.notify('teste1', 'Teste 1');
	}

	doSomething2() {
		this.events.attach('teste2', this.logger);
		this.events.attach('teste2', this.emailSender);
		this.events.notify('teste2', 'Teste 2');
	}
}
