// The file for the current environment will overwrite this one during build
// Different environments can be found in config/environment.{dev|prod}.ts
// The build system defaults to the dev environment

export const environment = {
  production: false,
  ubus: {
    endpoint: '/ubus'
  },
  webcam: {
    host: 'localhost',
    port: 8080,
    path: '/?action=stream'
  }
};
