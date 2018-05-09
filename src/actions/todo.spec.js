import { fetchItems } from './todo'
import nock from 'nock'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { TEST_URL } from './fetch-utils'

const mockStore = configureStore([thunk])

describe('todo actions', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  describe('fetchItems()', () => {

    it('dispara LOADING y luego LOADED con los items que recibe del server', async () => {
      nock(TEST_URL)
        .get('/todos')
        .reply(200, {
          status: 'ok', 
          data: [{ id: 1, text: 'hola' }]
        })
      
      const store = mockStore()
      
      await store.dispatch(fetchItems())
      
      expect(store.getActions()).toEqual([
        { type: 'LOADING_ITEMS' },
        { type: 'LOADED_ITEMS', items: [{ id: 1, text: 'hola' }] }
      ])
    })

    it('dispara LOADING_ERROR si el server responde con error', async () => {
      nock(TEST_URL)
        .get('/todos')
        .reply(500, {
          status: 'error', 
          error: 'algo se rompió'
        })
      
      const store = mockStore()
      
      await store.dispatch(fetchItems())
      
      expect(store.getActions()).toEqual([
        { type: 'LOADING_ITEMS' },
        { type: 'ERROR_LOADING_ITEMS', error: 'Server error 500' }
      ])
    })

  })

})