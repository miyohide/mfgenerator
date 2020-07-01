import { shallowMount } from '@vue/test-utils'
import ManifestForm from '@/components/ManifestForm.vue'

describe('ManifestForm.vue', () => {
  it('renders application name', () => {
    const wrapper = shallowMount(ManifestForm)
    wrapper.find('#appName').setValue('applicationName')
    expect(wrapper.vm.manifest).toContain('- name: applicationName')
  })
})
