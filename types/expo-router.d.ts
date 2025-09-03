// Tipos personalizados para o Expo Router
declare module 'expo-router' {
  interface Router {
    push(href: string): void;
    replace(href: string): void;
    back(): void;
  }
}
