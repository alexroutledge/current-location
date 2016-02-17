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