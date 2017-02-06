import Ember from 'ember';

const names = [
  'brenna',
  'taylor',
  'alex'
]

export default Ember.Route.extend({
  model() {
    return names;
  }
});
