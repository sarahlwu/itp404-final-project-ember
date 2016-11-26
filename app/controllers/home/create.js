import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(e) {
      e.preventDefault();

      var item = this.get('itemname');
      var description = this.get('description');
      var price = this.get('price');
      var name = this.get('sellername');
      var phonenumber = this.get('phonenumber');

      var promise = $.ajax({
        type: 'post', //create
        url: 'localhost:3000',
        data: {
          "item": item,
          "description": description,
          "price": price,
          "name": name,
          "phone": phonenumber
        }
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
        var newListings = songs.concat(response.listing);
        this.set('home.feed', newListings);

        //after creating a new array/setting, triggers ember to update
      }, function() {
        alert('error');
      });

      console.log("form submitted");
      // alert("posted successfully");
      // this.transitionToRoute('home.feed');
      //nested route name
    }
  }
});
