import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(e) {
      e.preventDefault();

      var formData = new FormData();
      formData.append("title", this.get('title'));
      formData.append("description", this.get('description'));
      formData.append("price", this.get('price'));
      formData.append("name", this.get('sellername'));
      formData.append("number", this.get('phonenumber'));
      var fileInputElement = Ember.$("input[type=file]")[0];
      formData.append("image", fileInputElement.files[0]);

      var promise = Ember.$.ajax({
        type: 'post', //create
        url: 'http://localhost:3000/munchie',
        processData: false,
        contentType: false,
        data: formData
      });

      promise.then((response) => {
        alert('yay');
        this.set('title', null);
        this.set('description', null);
        this.set('price', null);
        this.set('sellername', null);
        this.set('phonenumber', null);
        this.set('image', null);
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
