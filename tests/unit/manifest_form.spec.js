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

  it('renders env', () => {
    wrapper.find('#envKey0').setValue('env_key_0')
    expect(wrapper.vm.manifest).not.toContain('  env:')
    wrapper.find('#envVal0').setValue('env_val_0')
    expect(wrapper.vm.manifest).toContain('  env:')
    expect(wrapper.vm.manifest).toContain('    env_key_0: env_val_0')
  })
})
