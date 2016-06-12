$(function() {
  describe('RSS Feeds', function() {
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // Every feed we plan on accessing has a valid URL. This loops through each of those feeds and checks against the url property.
    it('should have a URL', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe('');
      }
    });

    // Every feed we plan on accessing has a valid name. This loops through each of those feeds and checks against the name property.
    it('should have a name', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe('')
      }
    });
  });

  describe('The menu', function() {

    // The body should contain the menu-hidden class from the start.
    it('should be hidden by default', function() {
      expect($('.menu-hidden').length).not.toBe(0);
    });

    var menuIcon = $('.menu-icon-link');

    // When the menu icon is clicked, the menu-hidden class should disappear and reappear accordingly.
    it('should change visibility when the menu icon is clicked', function() {
      menuIcon.click();
      expect($('.menu-hidden').length).toBe(0);
      menuIcon.click();
      expect($('.menu-hidden').length).not.toBe(0);
    });
  });

  describe("Initial Entries", function() {
    beforeEach(function(done) {
      loadFeed(0, done);
    });


    // There should be existing entries upon loading the feed.
    it('should exist', function() {
      expect($('.entry').length).toBeGreaterThan(0);
    });
  });

  describe("New Feed Selection", function() {
    var feedContent;

    beforeEach(function(done) {
      loadFeed(1, function() {
        feedContent = $('.feed').html();
        done();
      });
    });

    // The displayed feed entries should change upon loading of a different feed.
    it('should load and display the new feed content', function(done) {
      loadFeed(0, function() {
        expect(feedContent).not.toEqual($('.feed').html());
        done();
      });
    });
  });
}());
