export enum EnvironmentKeys {
  production = 'production',
  apiBaseUrl = 'apiBaseUrl',
}

export interface EnvironmentVars {
  [EnvironmentKeys.production]: boolean;
  [EnvironmentKeys.apiBaseUrl]: string;
}
