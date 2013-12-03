// From Twitter -- FVCP
$.getJSON('http://search.twitter.com/search.json?q=%23sass&callback=?&rpp=5', function(tweets) {
    var $ul = $('<ul> </ul>');
    $.each(tweets.results, function(index, result) {
      console.log(result);

      $('<li>'+ result.from_user_name + ': ' + result.text +'</li>').appendTo($ul);
    });

    $ul.appendTo('#container');
});

// Backup Plan
//tweets = [
  //{
    //created_at: "Tue, 10 Apr 2012 14:36:52 +0000",
    //from_user: "gikochi",
    //from_user_id: 210384115,
    //from_user_id_str: "210384115",
    //from_user_name: "Gikochi",
    //geo: null,
    //id: 189723629267861500,
    //id_str: "189723629267861505",
    //iso_language_code: "en",
    //profile_image_url: "http://a0.twimg.com/profile_images/1161497442/tomare-panda_normal.jpg",
    //profile_image_url_https: "https://si0.twimg.com/profile_images/1161497442/tomare-panda_normal.jpg",
    //source: "&lt;a href=&quot;http://twitter.com/tweetbutton&quot; rel=&quot;nofollow&quot;&gt;Tweet Button&lt;/a&gt;",
    //text: "Futurico UI HTML - Free User Interface Elements for Developers http://t.co/a67k1bnD #coding #html #css #js #haml #sass via @designmodo",
    //to_user: null,
    //to_user_id: null,
    //to_user_id_str: null,
    //to_user_name: null
  //},
  //{
    //created_at: "Tue, 10 Apr 2012 14:30:56 +0000",
    //from_user: "DKelley_35",
    //from_user_id: 305643265,
    //from_user_id_str: "305643265",
    //from_user_name: "Dillon Kelley",
    //geo: null,
    //id: 189722133390299140,
    //id_str: "189722133390299136",
    //iso_language_code: "de",
    //profile_image_url: "http://a0.twimg.com/profile_images/1814428289/image_normal.jpg",
    //profile_image_url_https: "https://si0.twimg.com/profile_images/1814428289/image_normal.jpg",
    //source: "&lt;a href=&quot;http://twitter.com/devices&quot; rel=&quot;nofollow&quot;&gt;txt&lt;/a&gt;",
    //text: "@TendyBunny #sass #botharegreatprograms #tendysgetthegirls",
    //to_user: "TendyBunny",
    //to_user_id: 540019456,
    //to_user_id_str: "540019456",
    //to_user_name: "TendiesTurnMeOn"
  //},
  //{
    //created_at: "Tue, 10 Apr 2012 14:30:47 +0000",
    //from_user: "fatemokid",
    //from_user_id: 28205633,
    //from_user_id_str: "28205633",
    //from_user_name: "fatemokid",
    //geo: null,
    //id: 189722099177373700,
    //id_str: "189722099177373697",
    //in_reply_to_status_id: 189697954972581900,
    //in_reply_to_status_id_str: "189697954972581889",
    //iso_language_code: "en",
    //profile_image_url: "http://a0.twimg.com/profile_images/124265730/newl2_normal.JPG",
    //profile_image_url_https: "https://si0.twimg.com/profile_images/124265730/newl2_normal.JPG",
    //source: "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;",
    //text: "@WhiteTamale you are just full of #sass lately cc @valowpee",
    //to_user: "WhiteTamale",
    //to_user_id: 116960911,
    //to_user_id_str: "116960911",
    //to_user_name: "Meagan McGuinness"
  //},
  //{
    //created_at: "Tue, 10 Apr 2012 14:24:21 +0000",
    //from_user: "suhajdab",
    //from_user_id: 59740840,
    //from_user_id_str: "59740840",
    //from_user_name: "Balázs Suhajda",
    //geo: null,
    //id: 189720479689486340,
    //id_str: "189720479689486337",
    //iso_language_code: "en",
    //profile_image_url: "http://a0.twimg.com/profile_images/329696693/suhicon_normal.jpg",
    //profile_image_url_https: "https://si0.twimg.com/profile_images/329696693/suhicon_normal.jpg",
    //source: "&lt;a href=&quot;http://twitter.com/tweetbutton&quot; rel=&quot;nofollow&quot;&gt;Tweet Button&lt;/a&gt;",
    //text: "Futurico UI HTML - Free User Interface Elements for Developers http://t.co/5BmBhG5A #coding #html #css #js #haml #sass via @designmodo",
    //to_user: null,
    //to_user_id: null,
    //to_user_id_str: null,
    //to_user_name: null
  //},
  //{
    //created_at: "Tue, 10 Apr 2012 14:13:15 +0000",
    //from_user: "pygle",
    //from_user_id: 419857353,
    //from_user_id_str: "419857353",
    //from_user_name: "Paula Iglesias",
    //geo: null,
    //id: 189717686534668300,
    //id_str: "189717686534668288",
    //iso_language_code: "en",
    //profile_image_url: "http://a0.twimg.com/profile_images/1842384834/102_3033_normal.JPG",
    //profile_image_url_https: "https://si0.twimg.com/profile_images/1842384834/102_3033_normal.JPG",
    //source: "&lt;a href=&quot;http://twitter.com/tweetbutton&quot; rel=&quot;nofollow&quot;&gt;Tweet Button&lt;/a&gt;",
    //text: "Futurico UI HTML - Free User Interface Elements for Developers http://t.co/8SBa7Xgu #coding #html #css #js #haml #sass vía @designmodo",
    //to_user: null,
    //to_user_id: null,
    //to_user_id_str: null,
    //to_user_name: null
  //}
//];

//var $ul = $('<ul> </ul>');
//$.each(tweets, function(index, result) {
  //console.log(result['from_user_name']);

  //$('<li>'+ result["from_user_name"] + ': ' + result.text +'</li>').appendTo($ul);
//});

//$ul.appendTo('#container');
