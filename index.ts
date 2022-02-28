import { ConcreteEventManager } from './eventManager';
import { Editor } from './editor';
import { EmailSender, Logger } from './eventListener';

const editor = new Editor(
	new ConcreteEventManager(),
	new Logger(),
	new EmailSender(),
);
editor.doSomething();
editor.doSomething2();
