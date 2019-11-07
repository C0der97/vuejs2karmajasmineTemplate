import Posts from '@/components/Posts'
import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import moxios from 'moxios'
// Arrange
let component = shallowMount(Posts)
describe('Test Component Posts', () => {
  it('Verify if The function GetPosts Exists', () => {
    // Act And assert
    expect(typeof component.vm.getPosts).toBe('function')
  })
})
describe('Mocking Http request with moxios', () => {
  let axius
  beforeEach(function () {
    axius = axios.create()
    moxios.install(axius)
  })
  afterEach(function () {
    moxios.uninstall(axius)
  })
  it('Verify the response of the service', (done) => {
    moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
      status: 200,
      response: {
        userId: 0,
        id: 0,
        title: '',
        body: ''
      }
    })
    axius.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        component.vm.posts = res.data
        expect(res.status).toBe(200)
        expect(Object.keys(res.data)).toContain(
          'userId',
          'id',
          'title',
          'body')
      })
      .finally(done)
  })
  it('Verify the response when function getPosts is called', () => {
    spyOn(component.vm, 'getPosts').and.returnValue({
      userId: 1,
      id: 1
      })
    // Verify if userId exist
    expect(Object.keys(component.vm.getPosts())).toContain('userId')
    // Verify if id exist
    expect(Object.keys(component.vm.getPosts())).toContain('id')
  })
})
