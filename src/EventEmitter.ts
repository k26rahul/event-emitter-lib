type EventHandler = (event: { payload: any }) => void;

export class EventEmitter {
  private events: Map<string | symbol, Set<EventHandler>> = new Map();
  private isEnabled: boolean = true;

  on(event: string | symbol, handler: EventHandler): void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event)!.add(handler);
  }

  off(event: string | symbol, handler: EventHandler): void {
    if (this.events.has(event)) {
      this.events.get(event)!.delete(handler);
    }
  }

  emit(event: string | symbol, payload: any = null): void {
    if (!this.isEnabled) {
      console.log(
        `EventEmitter is disabled, cannot emit event "${event.toString()}"`
      );
      return;
    }

    const handlers = this.events.get(event);
    if (handlers) {
      handlers.forEach(handler => handler({ payload }));
    }
  }

  setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  isEnabledState(): boolean {
    return this.isEnabled;
  }
}
