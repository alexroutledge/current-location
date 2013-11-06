# &lt;geolocation&gt;

TODO: Web Component wrapper for geolocation based data using Polymer.

> Maintained by [Alex Routledge](https://github.com/alexroutledge).

## Demo

> [Check it live](http://customelements.github.io/boilerplate-element).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130711/polymer.min.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="src/geolocation.html">
	```

3. Start using it!

	```html
	<polymer-element name="geolocation-wrapper" extends="geolocation">
	 <template>
	   <geolocation position="{{position}}"></geolocation>
	   <template if="{{position}}">
	   	 <content></content>
	     <google-maps zoom="12" type="hybrid" latitude="{{position.coords.latitude}}" longitude="{{position.coords.longitude}}"></google-maps>
	   </template>
	 </template>
	 <script>
	   Polymer('geolocation-wrapper', {
	     applyAuthorStyles: true
	   });
	 </script>
	</polymer-element>
	<geolocation-wrapper>
	  <p>This is a map of your current location</p>
    </geolocation-wrapper>
	```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.1 August 19, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)