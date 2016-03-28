/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	collectAPI: function(req, res) {
		API.findOne({uniqueID: req.body.uniqueID}).exec(function (err, found){
			if (found){
				res.send(found.api)
			}
			else {
				res.send(false)
			}
		})
	}

};
