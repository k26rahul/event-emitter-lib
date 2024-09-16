import { EventEmitter } from './EventEmitter';

export function enable(emitter: EventEmitter): void {
  emitter.setEnabled(true);
}

export function disable(emitter: EventEmitter): void {
  emitter.setEnabled(false);
}
