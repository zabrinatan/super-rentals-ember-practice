import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | rental-property-type', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders correctly for a Standalone rental', function(assert) {
    this.set('inputValue', 'Estate');

    this.render(hbs`{{rental-property-type inputValue}}`);

    assert.equal(this.$().text().trim(), 'Standalone');
  });
});
test('it renders correctly for a Community rental', function(assert) {
  this.set('inputValue', 'Apartment');

  this.render(hbs`{{rental-property-type inputValue}}`);

  assert.equal(this.$().text().trim(), 'Community');
});