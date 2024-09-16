import { EventEmitter } from './EventEmitter';

describe('EventEmitter', () => {
  let emitter: EventEmitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should register event listeners', () => {
    const handler = jest.fn();
    emitter.on('testEvent', handler);
    emitter.emit('testEvent', { data: 123 });

    expect(handler).toHaveBeenCalledWith({ payload: { data: 123 } });
  });

  it('should unregister event listeners', () => {
    const handler = jest.fn();
    emitter.on('testEvent', handler);
    emitter.off('testEvent', handler);
    emitter.emit('testEvent', { data: 123 });

    expect(handler).not.toHaveBeenCalled();
  });

  it('should not emit events if disabled', () => {
    const handler = jest.fn();
    emitter.on('testEvent', handler);
    emitter.setEnabled(false);
    emitter.emit('testEvent', { data: 123 });

    expect(handler).not.toHaveBeenCalled();
  });

  it('should emit events if re-enabled', () => {
    const handler = jest.fn();
    emitter.on('testEvent', handler);
    emitter.setEnabled(false);
    emitter.emit('testEvent', { data: 123 });

    emitter.setEnabled(true);
    emitter.emit('testEvent', { data: 456 });

    expect(handler).toHaveBeenCalledWith({ payload: { data: 456 } });
  });
});
