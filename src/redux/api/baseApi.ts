/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types'
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
// import { getBaseURL } from '@/helpers/config/envConfig'

//**  */ Define a service using a base URL and expected endpoints

export const baseAPI = createApi({
  reducerPath: 'api',
  // baseQuery: axiosBaseQuery({ baseUrl: getBaseURL() }),
  baseQuery: axiosBaseQuery({ baseUrl: `https://countries.trevorblades.com/` }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
})
