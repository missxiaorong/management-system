<template>
  <div ref="editor"></div>
</template>

<script>
  /* eslint-disable */
  import '../../../assets/js/ueditor/ueditor.config';
  import '../../../assets/js/ueditor/ueditor.all';
  import '../../../assets/js/ueditor/lang/zh-cn/zh-cn';

  import { generateRandonInteger } from '../../../vuex/utils';

  export default {
    data() {
      return {
        id: generateRandonInteger(100000) + 'ueditorId',
      };
    },
    props: {
      value: {
        type: String,
        default: null,
      },
      config: {
        type: Object,
        default: {},
      }
    },
    watch: {
      value: function value(val, oldVal) {
        this.editor = UE.getEditor(this.id, this.config);
        if (val !== null) {
          this.editor.setContent(val);
        }
      },
    },
    mounted() {
      this.$nextTick(function f1() {
        // 保证 this.$el 已经插入文档

        this.$refs.editor.id = this.id;
        this.editor = UE.getEditor(this.id, this.config);

        this.editor.ready(function f2() {
          this.editor.setContent(this.value);

          this.editor.addListener("contentChange", function () {
            const wordCount = this.editor.getContentLength(true);
            const content = this.editor.getContent();
            const plainTxt = this.editor.getPlainTxt();
            this.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt });
          }.bind(this));

          this.$emit('ready', this.editor);
        }.bind(this));
      });
    },
  };
</script>

<style>
    body{
        background-color:#ff0000;
    }
</style>