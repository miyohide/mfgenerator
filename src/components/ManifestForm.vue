<template>
    <div class="form-container container">
        <div class="form-group">
            <label for="appName" class="col-form-label col-sm-2">名前</label>
            <input v-model="appName" id="appName" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="target">実行環境（ビルドパック）</label>
            <select v-model="target" name="target" id="target" class="form-control">
                <option disabled value="">選択してください</option>
                <option>Java</option>
                <option>Ruby</option>
                <option>その他</option>
            </select>
        </div>
        <div v-for="(env, index) in envs" v-bind:key="index" class="form-row">
            <div class="form-group col-md-5">
                <label>キー</label>
                <input type="text" v-model="env.key" class="form-control">
            </div>
            <div class="form-group col-md-5">
                <label>値</label>
                <input type="text" v-model="env.val" class="form-control">
            </div>
            <div class="form-group col-md-2">
                <label>操作</label>
                <button class="btn btn-danger form-control" @click="deleteEnv(index)">削除</button>
            </div>
        </div>
        <div class="form-group">
            <button class="btn btn-primary" @click="addEnv">新しい環境変数</button>
        </div>
        <div class="form-group">
            <label for="manifest">manifest.yml</label>
            <textarea v-model="manifest" name="manifest" id="manifest" cols="30" rows="10" class="form-control"
                      readonly></textarea>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ManifestForm',
    data: function () {
      return {
        appName: '',
        target: '',
        envs: [
          {key: '', val: ''}
        ]
      }
    },
    computed: {
      manifest: function () {
        let mfList = []
        mfList = mfList.concat(this.init())
        mfList = mfList.concat(this.buildpack())
        return mfList.join('\n')
      },
    },
    methods: {
      init: function () {
        let rval = []
        rval.push('---')
        rval.push('applications:')
        rval.push('- name: ' + this.appName)
        return rval
      },
      buildpack: function () {
        let rval = []
        rval.push('  buildpacks:')
        rval.push('    - ' + this.target)
        return rval
      },
      addEnv: function () {
        this.envs.push({key: '', val: ''})
      },
      deleteEnv: function (index) {
        this.envs.splice(index, 1)
      }
    }
  }
</script>
