<template>
    <div class="form-container container">
        <form>
            <div class="form-group">
                <label for="appName" class="col-form-label col-sm-2">名前</label>
                <input v-model="appName" id="appName" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="buildpack">実行環境（ビルドパック）</label>
                <select v-model="buildpack" name="buildpack" id="buildpack" class="form-control">
                    <option disabled value="">選択してください</option>
                    <option>Java</option>
                    <option>Ruby</option>
                    <option>その他</option>
                </select>
            </div>
            <div class="form-group">
                <label for="manifest">manifest.yml</label>
                <textarea v-model="manifest" name="manifest" id="manifest" cols="30" rows="10" class="form-control"
                          readonly></textarea>
            </div>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'ManifestForm',
    data: function () {
      return {
        appName: '',
        buildpack: '',
      }
    },
    computed: {
      manifest: function () {
        let mfList = []
        mfList = mfList.concat(init(this.appName))
        mfList = mfList.concat(buildpack_str(this.buildpack))
        return mfList.join('\n')
      },
    },
  }

  function init (appName) {
    let rval = []
    rval.push('---')
    rval.push('applications:')
    rval.push('- name: ' + appName)
    return rval
  }

  function buildpack_str (buildpack) {
    let rval = []
    rval.push('  buildpacks:')
    rval.push('    - ' + buildpack)
    return rval
  }
</script>
