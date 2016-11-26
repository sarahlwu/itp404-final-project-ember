import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', function() {
    this.route('feed');
    this.route('FAQ');
    this.route('create');
    this.route('login');
    this.route('logout');
    this.route('manage');
    this.route('faq');
  });
});

export default Router;
