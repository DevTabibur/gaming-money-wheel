/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'redux-persist/integration/react' {
  export const PersistGate: React.ComponentType<any>
}

declare module 'redux-persist/lib/storage' {
  const storage: any
  export default storage
}
