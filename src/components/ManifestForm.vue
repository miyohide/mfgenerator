<template>
  <div class="form-container container">
    <form>
      <div class="form-group">
        <label for="appName" class="col-form-label col-sm-2">名前</label>
        <input v-model="appName" id="appName" type="text" class="form-control">
      </div>
      <div class="form-group">
        <textarea v-model="manifest" name="manifest" id="" cols="30" rows="10" class="form-control" readonly></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ManifestForm',
  data: function () {
    return {
      appName: ''
    }
  },
  computed: {
    manifest: function () {
      return "---\napplications:\n- name: " + this.appName
    }
  }
}
</script>
