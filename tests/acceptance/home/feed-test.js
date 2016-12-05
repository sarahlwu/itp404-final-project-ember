import { test } from 'qunit';
import moduleForAcceptance from 'final-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home/feed');

test('visiting /home/feed shows a list of postings', function(assert) {
  visit('/home/feed');

  andThen(function() {
    assert.equal(currentURL(), '/home/feed');
  });
});

test('visiting /home redirects to /home/feed', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home/feed');
  });
});

test('user can get to home from index page', function(assert) {
  visit('/');
  click('a');
  andThen(function() {
    assert.equal(currentURL(), '/home/feed');
  });
});

// test('single listing is shown on listing page', function(assert) {
//   visit('/home/2');
//   andThen(function() {
//     assert.equal(find('.individual-listing').length, 1);
//   });
// });
