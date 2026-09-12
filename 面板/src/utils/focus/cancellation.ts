/** 小程序逻辑层未必提供浏览器 AbortController，不依赖 DOM 全局。 */
export class OperationSignal {
  aborted = false;
  private listeners = new Set<() => void>();
  addEventListener(_event: 'abort', fn: () => void) { this.listeners.add(fn); }
  removeEventListener(_event: 'abort', fn: () => void) { this.listeners.delete(fn); }
  abort() {
    if (this.aborted) return;
    this.aborted = true; this.listeners.forEach(fn => fn()); this.listeners.clear();
  }
}
export class OperationController {
  signal = new OperationSignal();
  abort() { this.signal.abort(); }
}
