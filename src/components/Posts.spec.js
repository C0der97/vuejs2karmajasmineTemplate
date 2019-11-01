import Vue from 'vue'
import Posts from '@/components/Posts'
describe('Posts', () => {
  it('The function GetPosts Exists', () => {
    const vm = new Vue(Posts).$mount()
    console.log(vm)
    expect(typeof vm.getPosts()).toBe('function')
  })
})
