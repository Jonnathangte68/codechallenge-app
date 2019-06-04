import { gql } from 'apollo-boost'


export const ADD_NAME = gql`
  mutation createNames($name: String!) {
    createNames(name: $name) {
      name
      id
    }
  }
`