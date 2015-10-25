/**
 * Created by Solovyov on 25.10.2015.
 */
function Article() {

    Article.created = new Date();

    Article.count++;

    Article.showStats = function() {
        return 'Всего: ' + Article.count + ', Последняя: ' + Article.created;
    };

}

Article.count = 0;

new Article();

new Article();

console.log(Article.showStats());