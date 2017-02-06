import Ember from 'ember';

const user = "Tay tay"
export default Ember.Route.extend({
  model() {
    return user;
  }
});
