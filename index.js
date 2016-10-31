const ace = require('brace');

module.exports = {
  template: "<div :style=\"{height: '300px', width: '100%'}\"></div>",

  props: {
    content: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'chrome'
    }
  },

  data () {
    return {
      editor: null,
    }
  },

  mounted () {
    const vm = this;
    let lang = vm.lang || 'javascript';
    let theme = vm.theme || 'chrome';
    let editor = vm.editor = ace.edit(vm.$el);
    editor.$blockScrolling = Infinity;
    editor.getSession().setMode('ace/mode/' + lang);
    editor.setTheme('ace/theme/' + theme);
    editor.setValue(vm.content, 1);
  }
}