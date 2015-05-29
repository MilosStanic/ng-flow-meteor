# ng-meteor-upload

This is an attempt to demonstrate usage of [CollectionFS] with [angular-meteor] to upload files to a [Meteor] application.

The whole thing happens in the [controller],  [service] and [model] files.

A lot of the code is directly ripped off from **@netanielgilad**'s [angular-meteor-collectionfs-example], **@pbastowski**'s [meteor-upload-files] and from **@epotvin**'s [thumbnail-example].

Added bonus is utilizing service-to-controller communication to provide upload progress bar. Note that it won't be visible when you run it in local server for small files, because it happens so fast the progress bar doesn't get rendered.

One more thing is that I was unable to make this an Android app, because pressing the button doesn't open file browser on Android. I would appreciate if someone could guide me how to achieve this. 

Please feel free to clone and run it, and file issues and pull requests.




[CollectionFS]:https://github.com/CollectionFS/Meteor-CollectionFS
[angular-meteor]:https://github.com/Urigo/angular-meteor
[Meteor]:https://github.com/meteor/meteor
[controller]:https://github.com/MilosStanic/ng-flow-meteor/blob/master/client/upload/controllers/upload.js 
[service]:ng-flow-meteor/client/upload/services/file_upload.js
[model]:ng-flow-meteor/models/files.js
[angular-meteor-collectionfs-example]:https://github.com/netanelgilad/angular-meteor-collectionfs-example
[meteor-upload-files]:https://github.com/pbastowski/meteor-upload-files
[thumbnail-example]:https://github.com/epotvin/thumbnail-example



