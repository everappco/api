/**
 * TagDataController
 *
 * @description :: Server-side logic for managing tagdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getData: function(req, res) {
		tagData.findOne(youtubeID: req.body.youtubeID).exec(function (err, found){
			if (found) {
				res.send(found)
			}
			else {
				res.send(false)
			}
		})
	},

};
