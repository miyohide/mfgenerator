import {mount} from '@vue/test-utils'
import Component from '@/App'

describe('ManifestForm', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})