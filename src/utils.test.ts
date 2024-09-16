import { EventEmitter } from './EventEmitter';
import { enable, disable } from './utils';

describe('utils', () => {
  let emitter: EventEmitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should enable the event emitter', () => {
    disable(emitter);
    expect(emitter.isEnabledState()).toBe(false);

    enable(emitter);
    expect(emitter.isEnabledState()).toBe(true);
  });

  it('should disable the event emitter', () => {
    enable(emitter);
    expect(emitter.isEnabledState()).toBe(true);

    disable(emitter);
    expect(emitter.isEnabledState()).toBe(false);
  });
});
