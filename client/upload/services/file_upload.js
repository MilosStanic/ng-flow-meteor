var FileUpload = function($meteor, $meteorCollection, $log, $q){

		function FileUploadKlass(){
			var self = this;
			self.images = $meteor.collection(Images, false);
			self.currentFile = null;
		}

		FileUploadKlass.prototype.url = function(image, store){
		if (!image || !image.url) return null;
		return image.copies && image.copies[store] ? image.url({store: store}) + '&updatedAt=' + image.copies[store].updatedAt.getTime() : '';
	};

	FileUploadKlass.prototype.uploadImg = function() {
			var d = $q.defer();
			self.currentFile = null;
		$('<input type="file">').bind("change", function (event) {
			// There is a bug in angular-meteor that causes this code not to
			// work. Once it is solves should be possible with:
			//$scope.images.save(event.target.files[0]);

			// this is temporary

			Images.insert(event.target.files[0], function(error, result) {
				if (error) {
					console.log('error', error);
					d.reject(err);
				}
				else {
					// setting factory currentFile to last uploaded file, i.e. file currently uploading
					// this is very important
					self.currentFile = result;
					d.resolve(result);
				}
			});

		}).click();

		return d.promise;
	};

	FileUploadKlass.prototype.getProgress = function() {
		if (angular.isDefined(self.currentFile))
			if (self.currentFile !== null)
				return self.currentFile.uploadProgress();
	  return null;
	};

	FileUploadKlass.prototype.isUploaded = function(){
		if (angular.isDefined(self.currentFile))
			if (self.currentFile !== null)
				return self.currentFile.isUploaded();
		return true;
	}

	var FileUploadFactory = new FileUploadKlass();

	return FileUploadFactory;
};

FileUpload.$inject = ['$meteor', '$meteorCollection', '$log', '$q'];

angular.module('ngflowupload').factory('FileUpload', FileUpload);

