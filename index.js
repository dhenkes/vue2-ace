const ace = require('brace');

module.exports = {
  template: "<div class=\"ace-editor\"></div>",
  props: {
    content: {
      type: String,
      required: true
    },
    lang: String,
    theme: String
  },
  data: () => {
    return {
      editor: null
    }
  },
  mounted: () => {
    const vm = this;
    let lang = vm.lang || 'javascript';
    let theme = vm.theme || 'chrome';
    let editor = vm.editor = ace.edit(vm.$el);
    editor.$blockScrolling = Infinity;
    editor.getSession().setMode('ace/mode/' + lang);
    editor.setTheme('ace/theme' + theme);
  }
}