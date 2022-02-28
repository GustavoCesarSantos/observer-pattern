import { Listener } from './eventListener';

export interface EventManager {
	attach(eventType: string, listener: Listener): void;
	detach(item: ListenersHashMap): void;
	notify(eventType: string, data: string): void;
}

type ListenersHashMap = {
	eventType: string;
	listener: Listener;
};

export class ConcreteEventManager implements EventManager {
	public listeners: ListenersHashMap[] = [];

	attach(eventType: string, listener: Listener): void {
		const item: ListenersHashMap = {
			eventType,
			listener,
		};
		if (!this.listeners.includes(item)) this.listeners.push(item);
	}

	detach(item: ListenersHashMap): void {
		const itemIndex = this.listeners.indexOf(item);
		const isExist = itemIndex > -1;
		if (isExist) this.listeners.splice(itemIndex, 1);
	}

	notify(eventType: string, data: string): void {
		const listenersToNodtify = this.listeners.filter(item => {
			return item.eventType === eventType;
		});
		listenersToNodtify.forEach(item => item.listener.update(data));
	}
}
