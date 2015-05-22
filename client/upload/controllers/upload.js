angular.module('ngflowupload').controller('UploadCtrl', [ '$meteor', '$scope', 'FileUpload', 'flowFactory',
	function($meteor, $scope, FileUpload, flowFactory){
		var vm = this;

		$meteor.subscribe('images');

		vm.upload = FileUpload.uploadImg;
	    vm.url    = FileUpload.url;
		vm.images = FileUpload.images;

		$scope.$on('flow::complete', function(event, $flow){
			var file = _.last($flow.files); // only one file uploaded so get the first index
			vm.upload(file);
		});

	}
]);
