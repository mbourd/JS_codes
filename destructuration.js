function MyFunction() {
  ({ ok: this.ok } = { ok: 'ok' });
}
class MyClass {
  constructor() {
    ({ ok: this.ok } = { ok: 'ok' });
  }
}
