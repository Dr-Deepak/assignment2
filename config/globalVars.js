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
                                      clientID:'629676410544637',
                                      clientSecret:'805933a252b4195346188567110f7144',
                                      callbackURL: 'http://localhost:3000/facebook/callback'
                                    }
                       }
                 };
//
