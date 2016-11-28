import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var listingID = params.id;
    var url = "http://localhost:3000/munchie/" + listingID;
    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    }).then(function(response){
      return response;
    });

    return promise;
  }
});
