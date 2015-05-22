/* global Meteor */
/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/meteor/all-definitions.d.ts" />

angular.module('ngflowupload',[
  'angular-meteor',
  'ngMaterial',
  'flow'
]);

var configFn = ['$mdIconProvider', '$mdThemingProvider', 'flowFactoryProvider',
	function ($mdIconProvider, $mdThemingProvider, flowFactoryProvider) {

  $mdIconProvider
    .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
    .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg", 24)
    .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
    .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg", 24)
    .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
    .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
    .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg")
    .iconSet('editor', '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-editor.svg');

  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('orange')
    .warnPalette('red');

	flowFactoryProvider.on('catchAll', function (event) {
		console.log('catchAll ', arguments, event);
	  });

}];

angular.module('ngflowupload')
  .config(configFn);

function onReady() {
  angular.bootstrap(document, ['ngflowupload'], {
	  strictDi: true
	});
}

if (Meteor.isCordova)
  angular.element(document).on('deviceready', onReady);
else
  angular.element(document).ready(onReady);
