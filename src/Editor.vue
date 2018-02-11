<template>
  <div>
      <section class='section'>
          <h1 class='title'>Typer</h1>
          <h2 class='subtitle'>The easiest and fastest way to record your tutorial videos <a class='is-pulled-right tag is-info'>Show Options</a></h2>
          <hr />
          <codemirror v-model="code" :options="cmOption" class='code-editor'></codemirror>
          <a class='button is-fullwidth is-info no-radious' @click='typeIt()'>Type it!</a>
      </section>

  </div>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/base16-dark.css'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
// language
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/monokai.css'
// require active-line.js
import'codemirror/addon/selection/active-line.js'
// styleSelectedText
import'codemirror/addon/selection/mark-selection.js'
import'codemirror/addon/search/searchcursor.js'
// hint
import'codemirror/addon/hint/show-hint.js'
import'codemirror/addon/hint/show-hint.css'
import'codemirror/addon/hint/javascript-hint.js'
import'codemirror/addon/selection/active-line.js'
// highlightSelectionMatches
import'codemirror/addon/scroll/annotatescrollbar.js'
import'codemirror/addon/search/matchesonscrollbar.js'
import'codemirror/addon/search/searchcursor.js'
import'codemirror/addon/search/match-highlighter.js'
// keyMap
import'codemirror/mode/clike/clike.js'
import'codemirror/addon/edit/matchbrackets.js'
import'codemirror/addon/comment/comment.js'
import'codemirror/addon/dialog/dialog.js'
import'codemirror/addon/dialog/dialog.css'
import'codemirror/addon/search/searchcursor.js'
import'codemirror/addon/search/search.js'
import'codemirror/keymap/sublime.js'
// foldGutter
import'codemirror/addon/fold/foldgutter.css'
import'codemirror/addon/fold/brace-fold.js'
import'codemirror/addon/fold/comment-fold.js'
import'codemirror/addon/fold/foldcode.js'
import'codemirror/addon/fold/foldgutter.js'
import'codemirror/addon/fold/indent-fold.js'
import'codemirror/addon/fold/markdown-fold.js'
import'codemirror/addon/fold/xml-fold.js'


export default {
  name: 'home',
  components: {codemirror},
  data () {
    return {
      code: "console.log('hello use typer to type faster and avoid typos!')",
      speed:100,
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        foldGutter: true,
        styleSelectedText: true,
        mode: 'text/javascript',
        keyMap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "monokai",
        extraKeys: { "Ctrl": "autocomplete" },
        hintOptions:{
          completeSingle: false
        }
      }
    }
},

  methods: {
      typeIt(){
        const speed = this.speed
        const message = this.code
        this.code = ''
        let i = 0;
        const interval = setInterval(() => {
        this.code += message.charAt(i);
        i++;
        if (i > message.length){
        clearInterval(interval);
        }
        }, speed);
        }
    },

}
</script>

<style>
.no-radious{
    border-radius: 0px;
}
</style>
