import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(e) {
      e.preventDefault();

      var title = this.get('title');
      var description = this.get('description');
      var price = this.get('price');
      var name = this.get('sellername');
      var number = this.get('phonenumber');

      var promise = Ember.$.ajax({
        type: 'post', //create
        url: 'http://localhost:3000/munchie',
        contentType: 'application/json',
        data: JSON.stringify({
          title,
          description,
          price,
          name,
          number
        })
      });

      promise.then((response) => {
        alert('yay');
        this.set('title', null);
        this.set('description', null);
        this.set('price', null);
        this.set('sellername', null);
        this.set('phonenumber', null);
        var listings = this.get('model');
        // songs.pushObject(response.song);
        //modifies the same array, ember can't detect data has changed
        var newListings = listings.concat(response);
        this.set('model', newListings);
        this.transitionToRoute('home.feed');

        //after creating a new array/setting, triggers ember to update
      }, function(err) {
        alert(err);
      });
      // alert("posted successfully");
      //nested route name
    }
  }
});
