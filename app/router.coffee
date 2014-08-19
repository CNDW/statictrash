App.Router = Ember.Router.extend()

App.Router.map ->
  this.route('application')
  this.route 'blog'
  this.route 'gallery'
  this.route 'about'
  this.route 'catalogue'
  this.route 'custom'
  this.route 'instock'