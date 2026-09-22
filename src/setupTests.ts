import "@testing-library/jest-dom/vitest";
class IntersectionObserverMock {
  root = null;
  rootMargin = "";
  scrollMargin = "";
  thresholds = [];

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

globalThis.IntersectionObserver =
  IntersectionObserverMock as typeof IntersectionObserver;
