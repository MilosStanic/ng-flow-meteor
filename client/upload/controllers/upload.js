angular.module('ngflowupload').controller('UploadCtrl', [ '$meteor', '$scope', 'FileUpload',
	function($meteor, $scope, FileUpload){
		var vm = this;

		$meteor.subscribe('images');

		vm.upload = FileUpload.uploadImg;
	  vm.url    = FileUpload.url;
		vm.images = FileUpload.images;

		// Binding factory functions as variables.
		// from the view they are called as functions, so they change as factory changes.
		vm.progress = FileUpload.getProgress;
		vm.isUploaded = FileUpload.isUploaded;

	}
]);
