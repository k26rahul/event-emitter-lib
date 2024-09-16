# Event Emitter Library

A minimal event emitter library built with TypeScript for browsers. Exposes three versions: CommonJS (CJS), ES Modules (ESM), and UMD (for browsers).

## Usage

```typescript
import { EventEmitter, enable, disable } from 'event-emitter-lib';

const emitter = new EventEmitter();

// Register an event listener
emitter.on('myEvent', event => {
  console.log('Event received:', event.payload);
});

// Emit the event
emitter.emit('myEvent', { message: 'Hello World' });
```

## How to Build

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Build: `npm run build`.

## API

### EventEmitter

- `on(event: string | symbol, handler: (event: { payload: any }) => void): void`  
  Registers an event listener for the specified event.

- `off(event: string | symbol, handler: (event: { payload: any }) => void): void`  
  Removes the event listener for the specified event.

- `emit(event: string | symbol, payload: any): void`  
  Triggers the specified event and passes the payload to the handler.

- `setEnabled(isEnabled: boolean): void`  
  Enables or disables event emission.

- `isEnabledState(): boolean`  
  Returns the current state (enabled/disabled) of the emitter.

### Utils

- `enable(emitter: EventEmitter): void`  
  Enables event emission for the given emitter.

- `disable(emitter: EventEmitter): void`  
  Disables event emission for the given emitter.

## Dist Versions

- **CJS**: `dist/index.cjs.js`
- **ESM**: `dist/index.esm.js`
- **UMD**: `dist/index.umd.js`
