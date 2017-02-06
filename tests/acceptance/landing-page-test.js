import { test } from 'qunit';
import moduleForAcceptance from 'in-class-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | landing page');

test('visiting /welcome', function(assert) {
  visit('/welcome');

  andThen(function() {
    assert.equal(currentURL(), '/welcome', 'should have welcome as current url');
    assert.equal(find('.heading').length, 1, 'should see a header');
  });
});
