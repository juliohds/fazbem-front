interface IWindow {
  initialReduxState: any;
}

declare interface IServiceWorkerConfig {
  onSuccess(registration: ServiceWorkerRegistration): void;
  onUpdate(registration: ServiceWorkerRegistration): void;
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
