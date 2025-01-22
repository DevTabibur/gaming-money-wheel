/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'redux-persist-cookie-storage' {
  import { Storage } from 'redux-persist'

  export default function cookieStorage(config: any): Storage
}
