declare var BASE_CONFIG: { [key: string]: any }

declare module '*.png' {
  const value: string
  export = value
}
