module.exports = function(Show) {

	Show.beforeRemote('findFrame',function(ctx,instance,next){
		console.log("i am in update remote" + ctx + "   " + instance);
		next();
	})

	Show.findFrame = function(tvShow,episode,cb){

		console.log(tvShow + " episode " + episode);

		Show.findOne({
			where: {
				"tvshow" : tvShow,
				"episode": episode

			}
		},function(err,theFrame){

			if(err) {
				cb("unable to find the frame");
				return
			}
			if(!theFrame) {
				cb("frame does not exist")
				return
			}
			if(theFrame) {
				console.log("found frame");
				console.log(theFrame)
				var finalFrame = theFrame.frames[0][0]
				cb(null,finalFrame)
			}

		});	// cb(null,"found the object");



	}

	Show.remoteMethod(
        'findFrame', {
            http: {
                path: '/findframe',
                verb: 'post'
            },
            accepts: [
                {arg: 'tvshow', type: 'string', source:'body'},
                {arg: 'episode', type: 'string', source:'body'}

            ],
            returns: {root: true, type: 'string'}
        }
    );

    Show.addFrame = function(tvShow,episode,frameObject,cb){

		console.log(tvShow + " episode " + episode);

		Show.findOne({
			where: {
				"tvshow" : tvShow,
				"episode": episode

			}
		},function(err,theFrame){

			if(err) {
				cb("unable to find the frame");
				return
			}
			if(!theFrame) {
				cb("frame does not exist")
				return
			}
			if(theFrame) {
				console.log("found frame");
				console.log(theFrame)
				console.log(frameObject)

				var newFrame = theFrame.toObject();
				console.log(newFrame.frames[0][0]["public"])
				newFrame.frames[0][0] = frameObject
				// updating the frame
				theFrame.updateAttributes(newFrame,function(err,instance){

						if(err) {
							cb("unable to update the frame");
							return
						}
						if(!instance) {
							cb("frame does not exist")
							return
						}
						if(instance) {
							console.log(instance.toJSON())
							cb(null,"updaed the data successfullly");
						}

					}
				)


			}

		});

		// cb(null,"found the object");



	}

	Show.remoteMethod(
        'addFrame', {
            http: {
                path: '/addFrame',
                verb: 'post'
            },
            accepts: [
                {arg: 'tvshow', type: 'string', source:'body'},
                {arg: 'episode', type: 'string', source:'body'},
                {arg: 'frameObject', type: 'object', http: { source: 'body' }}
            ],
            returns: {root: true, type: 'string'}
        }
    );

};