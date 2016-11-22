//setup a global objet
/**for local db */
//module.exports = { db: 'mongodb://localhost/comp2068' };
/** for mlab */
module.exports = {
                     db: 'mongodb://deepak:2481053@ds032319.mlab.com:32319/comp2068',
                 secret:'This is awsome',
                    ids:
                        {
                          facebook: {
                                      clientID:'1282717475121948',
                                      clientSecret:'75683a11202c41e978107cfd33eb4dee',
                                      callbackURL: 'https://abcacounting.herokuapp.com/facebook/callbackRemove'/*'http://localhost:3000/facebook/callback'*/
                                    }
                       }
                 };
//
