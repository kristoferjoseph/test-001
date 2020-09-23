import { gql } from '@apollo/client';

export const API_TEST = gql`
  query ($id: Int) { 
    Media (id: $id, type: ANIME) { 
      id
      title {
        romaji
        english
        native
      }
    }
  }`
