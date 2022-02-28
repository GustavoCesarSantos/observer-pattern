export interface Listener {
	update(message: string): void;
}

export class Logger implements Listener {
	update(message: string): void {
		console.log(`Log info: ${message}`);
	}
}

export class EmailSender implements Listener {
	update(message: string): void {
		console.log(`Sending e-mail with this message: ${message}`);
	}
}
