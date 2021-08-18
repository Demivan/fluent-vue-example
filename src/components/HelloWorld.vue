<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i18n path="description-text" tag="p">
      <template #vue-cli-docs-link="{ vueCliDocsLinkText }">
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{ vueCliDocsLinkText }}</a>
      </template>
    </i18n>
    <h3 v-t:cli-plugins-title />
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3 v-t:essential-links-title />
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">{{ $t('core-docs-link') }}</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{ $t('forum-link') }}</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ $t('community-chat-link') }}</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ $t('twitter-link') }}</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ $t('news-link') }}</a></li>
    </ul>
    <h3 v-t:ecosystem-title />
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<fluent locale="en">
description-text = For a guide and recipes on how to configure / customize this project, check out the {$vue-cli-docs-link}.
  .vue-cli-docs-link-text = vue-cli documentation
cli-plugins-title = Installed CLI Plugins
essential-links-title = Essential Links
ecosystem-title = Ecosystem
core-docs-link = Core Docs
forum-link = Forum
community-chat-link = Community Chat
twitter-link = Twitter
news-link = News
</fluent>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
