import Vue from 'vue'
import App from './App.vue'
import VueCodemirror from 'vue-codemirror'
import Home from './Home.vue'
import Editor from './Editor.vue'

new Vue({
  el: '#app',
  components: {
      'home-view':Home,
      'editor-view':Editor,
      'code-mirror':VueCodemirror,
  },
})
