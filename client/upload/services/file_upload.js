angular.module('ngflowupload').factory('FileUpload', [ '$meteor', '$meteorCollection', '$log', '$q',
	function($meteor, $meteorCollection, $log, $q){
		return {
        images:    $meteor.collection(Images, false),
        url:       url,
        uploadImg: uploadImg
    };

    function url(image, store) {
        if (!image || !image.url) return null;

        return image.copies && image.copies[store] ? image.url({store: store}) + '&updatedAt=' + image.copies[store].updatedAt.getTime() : '';
    }

    function uploadImg(data) {

        var d = $q.defer();

        Images.insert(data.file, function (err, fileObj) {
            if (err) {
          	  $log.error('Error', err);
              d.reject(err);
            } else {
              d.resolve();
            }
        });

        return d.promise;
    }

	}
]);
