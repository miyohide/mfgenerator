import { shallowMount } from '@vue/test-utils'
import ManifestForm from '@/components/ManifestForm.vue'

describe('ManifestForm.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ManifestForm)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders application name', () => {
    wrapper.find('#appName').setValue('applicationName')
    expect(wrapper.vm.manifest).toContain('- name: applicationName')
  })

  it('renders buildpack', () => {
    wrapper.find('#target').setValue('Java')
    expect(wrapper.vm.manifest).toContain('    - Java')
  })

  it('renders path', () => {
    wrapper.find('#path').setValue('./lib/hoge.jar')
    expect(wrapper.vm.manifest).toContain('  path: ./lib/hoge.jar')
  })
})
