import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(e) {
      e.preventDefault();

      var title = this.get('title');
      var description = this.get('description');
      var price = this.get('price');
      var name = this.get('sellername');
      var phonenumber = this.get('phonenumber');

      console.log(title, description, price);

      var promise = Ember.$.ajax({
        type: 'post', //create
        url: 'http://localhost:3000/munchie',
        contentType: 'application/json',
        data: JSON.stringify({
          "title": "test",
          "description": description,
          "price": price,
          "name": name,
          "phone": phonenumber
        })
      });

      promise.then((response) => {
        alert('yay');
        this.set('itemname', null);
        this.set('description', null);
        this.set('price', null);
        this.set('sellername', null);
        this.set('phonenumber', null);
        var listings = this.get('home.feed');
        // songs.pushObject(response.song);
        //modifies the same array, ember can't detect data has changed
        var newListings = listings.concat(response.listing);
        this.set('home.feed', newListings);

        //after creating a new array/setting, triggers ember to update
      }, function(err) {
        alert(err);
      });

      console.log("form submitted");
      // alert("posted successfully");
      // this.transitionToRoute('home.feed');
      //nested route name
    }
  }
});
