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

  data: function () {
    return {
      editor: null,
    };
  },

  mounted: function () {
    const vm = this;
    var lang = vm.lang;
    var theme = vm.theme;
    var editor = vm.editor = ace.edit(vm.$el);
    editor.$blockScrolling = Infinity;
    editor.getSession().setMode('ace/mode/' + lang);
    editor.setTheme('ace/theme/' + theme);
    editor.setValue(vm.content, 1);
    editor.on('change', function () {
      vm.$parent.$emit('editor-update', editor.getValue());
    });
  },

  watch: {
    theme: function (newTheme) {
      const vm = this;
      vm.editor.setTheme('ace/theme/' + newTheme);
    }
  }
};
