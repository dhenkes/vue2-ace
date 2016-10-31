const ace = require('brace');

module.exports = {
  template: '<div :style="{height: height, width: width}"></div>',

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
    },
    height: {
      type: String,
      default: '300px'
    },
    width: {
      type: String,
      default: '100%'
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
    editor.on('change', () => {
      vm.$parent.$emit('editor-update', editor.getValue());
    });
  }
}