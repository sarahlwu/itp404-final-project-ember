import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var listingID = params.id;
    var url = "http://104.131.156.142/munchie/" + listingID;
    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    }).then(function(response){
      return response;
    });

    return promise;
  }
});
