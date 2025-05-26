// features/session/sessionApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://classbuddy.onrender.com/api/sessions',
    credentials: 'include', 
  }),
  tagTypes: ['Session'],
  endpoints: (builder) => ({
    // Create a new session
    createSession: builder.mutation({
      query: (sessionData) => ({
        url: '/new',
        method: 'POST',
        body: sessionData,
      }),
      invalidatesTags: ['Session'],
    }),

    // Get all sessions
    getAllSessions: builder.query({
      query: () => '/all',
      providesTags: ['Session'],
    }),

    // Get a session by ID
    getSessionById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Session', id }],
    }),

    // Delete a session
    deleteSession: builder.mutation({
      query: (id) => ({
        url: `/remove/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Session'],
    }),
  }),
});

export const {
  useCreateSessionMutation,
  useGetAllSessionsQuery,
  useGetSessionByIdQuery,
  useDeleteSessionMutation,
} = sessionApi;
