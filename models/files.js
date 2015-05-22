Images = new FS.Collection('images', {
	stores: [
		new FS.Store.GridFS('original'),
		new FS.Store.GridFS('thumbnail', {
			transformWrite: function(fileObj, readStream, writeStream) {
				gm(readStream, fileObj.name()).resize('112', '112', '!').stream().pipe(writeStream);
			}
		})
	],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});

Images.allow({
  insert: function (userId, user) {
    return true;
  },
  update: function (userId, user, fields, modifier) {
    return true;
  },
  remove: function (userId, user) {
    return true;
  },
  download: function(userId, user) {
  	return true;
  }
});

if (Meteor.isServer) {
    Meteor.methods({
        setThumbnail: function(_id, size) {
            var image = Images.findOne(_id);
            var readStream = image.createReadStream('original');
            var writeStream = image.createWriteStream('thumbnail');

            //The following line should be avoided
            writeStream.safeOn('stored', function() {
                image.updatedAt(new Date(), {store: 'thumbnail'});
            });

            gm(readStream).crop(size.width, size.height, size.x, size.y).stream().pipe(writeStream);
        }
    });
}
