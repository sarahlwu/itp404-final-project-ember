// import Ember from 'ember';
// import ApplicationRouteMixin from
// 'ember-simple-auth/mixins/application-route-mixin';
//
// export default Ember.Route.extend(ApplicationRouteMixin);
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.toString(), params.id);
    if (!params.id) {
      this.transitionTo('home.feed');
    }
  }
});
