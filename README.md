# &lt;link rel="service-worker" href scope/&gt;

Web Component wrapper for service worker's proposed declarative syntax.

> Maintained by [Alex Routledge](https://github.com/alexroutledge).

## Demo

> [Check it live](https://alexroutledge.github.io/serviceworker/index.html).

## Usage

1. Import declarative syntax polyfill. Note, it's vital that the script is inlined before the service worker resource link tag - this ensures the script executes before the preload scanner sees the link tag.

	```html
	<script>
	document.registerElement('service-worker', {
    	  prototype: Object.create(
      	    HTMLLinkElement.prototype, {
              createdCallback: {
                value: function() {
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register(this.getAttribute('href'), {
                      scope: this.getAttribute('scope')
                  });
                }
              }
            }
         }),
         extends: 'link'
  	});
        </script>
	```

2. Start using it!

	```html
	<link is="service-worker" rel="serviceworker" href="sw.js" scope="./"/>
	```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.1 February 17, 2016
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)
