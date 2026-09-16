/**
 * Helpers de rastreamento (Meta Pixel e Google Analytics).
 *
 * Todas as funções verificam se o script correspondente foi carregado
 * antes de disparar qualquer evento, então a página funciona
 * normalmente mesmo sem as variáveis de ambiente configuradas.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackViewContent() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "ViewContent");
  }
}

export function trackInitiateCheckout() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout");
  }
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "begin_checkout");
  }
}
