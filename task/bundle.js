/**
 * Created by satyavrat on 28/02/16.
 */
import webpack from 'webpack' ;
import config from '../webpack.config.js' ;

var bundle = function ( options, callback ) {
  var bundler = webpack( config );
  var bundlerRunCount = 0;

  function postBundle( error, stats ) {
    if ( error ) {
      //throw new plugins.util.PluginError('webpack', error);
    }

    if ( ++bundlerRunCount === (options.watch ? config.length : 1) ) {
      return callback();
    }
  }

  if ( options.watch ) {
    bundler.watch( 200, bundle );
  } else {
    bundler.run( postBundle );
  }
}

bundle( {} , function () {
  console.log( "done bundling" );
} );

