/**
 * Created by satyavrat on 28/02/16.
 */
import webpack from 'webpack' ;
import config from '../webpack.config.js' ;

(function ( options ) {
  var bundler = webpack( config );
  var bundlerRunCount = 0;

  bundler.run( function ( error, stats ) {
    if ( error ) {
      console.log( "bundling failed with error:", error );
      return;
    }
    console.log( "done bundeling" );
  } );
})();

