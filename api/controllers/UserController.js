/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {},

  /**
   * Testing socket publishUpdate()
   */
   welcome: function(req, res) {
   		// Get all of the users
    	User.find().exec(function (err, users) {
    		User.subscribe(req.socket); //model class room - required?

      		// Subscribe the requesting socket (e.g. req.socket) to all users (e.g. users)
      		User.subscribe(req.socket, users); //instance class room

      		//this will prevent a warning from socket.io for trying to
      		// render HTML over the socket.
      		res.send(200);
    });
   }

  
};