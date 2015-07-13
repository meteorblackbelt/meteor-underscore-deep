Package.describe({
  name: "meteorblackbelt:underscore-deep",
  summary: "underscore-deep package",
  version: "0.0.4",
  git: "https://github.com/meteorblackbelt/meteor-underscore-deep",
  documentation: null
});


Package.onUse(function (api) {
  api.use(['coffeescript@1.0.6', 'underscore@1.0.3']);
  api.imply('underscore');
  api.addFiles('underscore-deep.coffee');
  api.export('_d');
});
