/**
 * Created by Yash on 04/03/16.
 */

/** Important **/
/** You should not be committing this file to GitHub **/

export default {
  // Find the appropriate database to connect to, default to localhost if not found.
  db: process.env.MONGOHQ_URL || 'mongodb://localhost/dietFight',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here'
};