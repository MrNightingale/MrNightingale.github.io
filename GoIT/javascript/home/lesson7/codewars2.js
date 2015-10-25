/**
 * Created by Solovyov on 23.10.2015.
 */
function createSecretHolder(secret) {

    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };

}

var obj1 = createSecretHolder(5);

console.log(obj1.getSecret());

console.log(obj1.setSecret(2));

console.log(obj1.getSecret());