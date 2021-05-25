import React from "react";
import renderer from "react-test-renderer";
import reducer from '../../itemReducer/'
import {ITEMS_REQUEST} from '../../../actions/actionTypes/itemTypes'

describe('reducer initial state', () => {
   it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([
         {
            isLoading: false,
         }
      ])
   })
   it('should handle ITEMS_REQUEST', () => {
      expect(
         reducer(
            {
               isLoading: false,
            },
            {
               type: ITEMS_REQUEST,
               payload: { isLoading: true }
            }
         )
      ).toEqual({
         isLoading: true
      })
   })
})