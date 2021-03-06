/**
@module ember
@submodule ember-template-compiler
*/

import Ember from "ember-metal/core";
import plugins from "ember-template-compiler/plugins";

/**
  @private
  @property compileOptions
*/
export default function() {
  var disableComponentGeneration = true;
  if (Ember.FEATURES.isEnabled('ember-htmlbars-component-generation')) {
    disableComponentGeneration = false;
  }

  return {
    disableComponentGeneration: disableComponentGeneration,

    plugins: plugins
  };
}
