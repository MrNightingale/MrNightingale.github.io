$(function() {

    var RSSReader = function () {

        this.feedUrl = 'http://node.dev.puzankov.com/rss/data';

        this.articlesList = $('.articles');

        this.articleTmpl = $('.article_tmpl');

        this.init();
    };

    RSSReader.prototype.init = function () {
        var __self = this;

        this.getFeed(__self.getUrlHash());

        this.updateMenu();

        $(window).on('hashchange', function (e) {
            __self.getFeed(__self.getUrlHash());
            __self.updateMenu();
        });
    };

    RSSReader.prototype.updateMenu = function () {
        var current = this.getUrlHash();

        $('.sf-menu li').each(function (i, item) {
            $(item).removeClass('current-menu-item');
        });

        $('.menu__li_' + current).addClass('current-menu-item')
    };

    RSSReader.prototype.getUrlHash = function () {
        var hash = window.location.hash || 'habr';
        return hash.replace('#', '');
    };

    RSSReader.prototype.getFeed = function (feedId) {
        $.ajax({
            url: this.feedUrl,
            data: { kind: feedId },
            method: 'GET',
            dataType: 'json'
        })
        .success(this.onGetData.bind(this))
        .error(function (error) {
            console.log(error);
        });
    };

    RSSReader.prototype.onGetData = function (data) {
        this.renderFeed(data.items);
    };


    RSSReader.prototype.renderFeed = function (dataList) {
        var __self = this,
            listHtml = [];

        dataList.forEach(function (item) {
            listHtml.push(__self.renderItem(item));
        });

        this.articlesList.html(listHtml);

    };

    RSSReader.prototype.convertDate = function (date) {
        var stringDate = new Date(date);

        //  TODO: make date format

        return stringDate;
    };

    RSSReader.prototype.renderItem = function (item) {
        var newItem = this.articleTmpl.clone().removeClass('article_tmpl');

        newItem
            .find('.post-heading')
            .html(item.title);

        newItem
            .find('.excerpt')
            .html(item.summary);

        newItem
            .find('.author')
            .html(item.author);

        newItem
            .find('.date')
            .html(this.convertDate(item.pubDate));

        newItem
            .find('.action-button')
            .attr('href', item.guid);

        return newItem;
    };



    window.rssReader = new RSSReader();

});
