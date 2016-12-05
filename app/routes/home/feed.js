import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = "http://104.131.156.142/munchies";
    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    });

    return promise;
  }
});
