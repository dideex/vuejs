var Vue = require('vue'),
	hello = require('vue!./components/hello.vue')

new Vue({
	el: 'body',
	components: {
		hello: hello
	}
})