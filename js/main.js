// var AlbumRow = React.createClass({
//   render: function() {
//     return (
//       <div className="row">
//         <AlbumBox />
//       </div>
//     );
//   }
// });

var AlbumGrid = React.createClass({
  render: function() {
    var albumTable = [];
    var rows = this.props.data.map(function(row, i) {
      return (
        <AlbumRow row={row} key={i} />
      );
    });
    return (
      <div className="x">
        {rows}
      </div>
    );
  }
});


var AlbumRow = React.createClass({
  render: function() {
    var albumNodes = this.props.row.map(function(album, i) {
      return (
        <AlbumBox album={album} key={i} />
      );
    });
    return (
      <div className="row">
        {albumNodes}
      </div>
    );
  }
});

var AlbumBox = React.createClass({
  render: function() {
    return (
      <div className="col-xs-6 col-md-3">
        <AlbumThumb album={this.props.album} />
        <AlbumModal album={this.props.album} />
      </div>
    );
  }
});

var AlbumThumb = React.createClass({
  render: function() {
    return (
      <a href="#" className="thumbnail" data-toggle="modal" data-target={"#" + this.props.album.id} title={this.props.album.albumTitle}>
        <img src={this.props.album.albumImage} alt={this.props.album.albumTitle} className='cover_thumb' />
        <p className="caption">{this.props.album.albumTitle}</p>
      </a>
      
    );
  }
});

var AlbumModal = React.createClass({
  render: function() {
    var songs = this.props.album.songs.map(function(song, i) {
      return(
        <li key={i}>
          <a href={song.songUrl}>
        {song.songTitle} / {song.songArtist} [{song.songDuration}]
          </a>
        </li>
      );
    });
    return (
      <div className="modal fade" id={this.props.album.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">{this.props.album.albumTitle}</h4>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img src={this.props.album.albumImage} alt={this.props.album.albumTitle} className='album_image'/>
                  <p clasName="text-center"><a href={this.props.album.albumDownloadUrl} className="btn btn-primary" role="button">Download Album</a></p>
                </div>
                <div className="col-md-6">
                  <ol>
                   {songs}
                 </ol>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

var data = [
  {
    id: 2015, 
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2015/cover.jpg", 
    albumTitle: "#18: Xmas Card 2015: JOY!",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2015/2015.zip",
    songs: [
      {songTitle:"Alone on Christmas Day [feat. Jason Schwartzmann]",songArtist:"Phoenix",songDuration:"2:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/01%20Alone%20on%20Christmas%20Day%20%5Bfeat.%20Jason%20Schwartzmann%5D.mp3"},
      {songTitle:"Disco Claus",songArtist:"The Bionic I",songDuration:"3:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/02%20Disco%20Claus.mp3"},
      {songTitle:"Joy To The World",songArtist:"Chet Baker",songDuration:"2:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/03%20Joy%20To%20The%20World.mp3"},
      {songTitle:"West Indies Carol",songArtist:"Chicago Bronze",songDuration:"1:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/04%20West%20Indies%20Carol.mp3"},
      {songTitle:"Christmas Is Just Around The Corner (From \"Cranberry Christmas\")",songArtist:"Barry Manilow",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/05%20Christmas%20Is%20Just%20Around%20The%20Corner%20(From%20_Cranberry%20Christmas_).mp3"},
      {songTitle:"Cool Yule",songArtist:"Louis Armstrong & The Commanders",songDuration:"2:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/06%20Cool%20Yule.mp3"},
      {songTitle:"Oh It's Christmas",songArtist:"The Rosebuds",songDuration:"3:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/07%20Oh%20It's%20Christmas.mp3"},
      {songTitle:"Don't Believe in Christmas",songArtist:"The Sonics",songDuration:"1:48",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/08%20Don't%20Believe%20in%20Christmas.mp3"},
      {songTitle:"I Want a Present for Christmas (The Complete 1949)",songArtist:"Tiny Grimes",songDuration:"2:35",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/09%20I%20Want%20a%20Present%20for%20Christmas%20(The%20Complete%201949).mp3"},
      {songTitle:"Santa Tell Me",songArtist:"Ariana Grande",songDuration:"3:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/10%20Santa%20Tell%20Me.mp3"},
      {songTitle:"Baby It's Christmas",songArtist:"Bananarama",songDuration:"3:35",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/11%20Baby%20It's%20Christmas.mp3"},
      {songTitle:"Wonderful Christmastime",songArtist:"Cassie Ramone",songDuration:"3:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/12%20Wonderful%20Christmastime.mp3"},
      {songTitle:"Old Toy Trains",songArtist:"Dtcv",songDuration:"2:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/13%20Old%20Toy%20Trains.mp3"},
      {songTitle:"Nutcracker March",songArtist:"Gabriel Staznik",songDuration:"2:46",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/14%20Nutcracker%20March.mp3"},
      {songTitle:"White Christmas (Dubstep Remix)",songArtist:"Iggy Pop",songDuration:"4:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/15%20White%20Christmas%20(Dubstep%20Remix).mp3"},
      {songTitle:"You Wont Have to Wait Till Xmas",songArtist:"Lee Rogers",songDuration:"2:28",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/16%20You%20Wont%20Have%20to%20Wait%20Till%20Xmas.mp3"},
      {songTitle:"When Christmas Comes",songArtist:"Los Campesinos!",songDuration:"3:51",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/17%20When%20Christmas%20Comes.mp3"},
      {songTitle:"Jingle Bells (Feat. The Puppini Sisters)",songArtist:"Michael Bublé",songDuration:"2:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/18%20Jingle%20Bells%20(Feat.%20The%20Puppini%20Sisters).mp3"},
      {songTitle:"The Christmas Song",songArtist:"PHOX",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/19%20The%20Christmas%20Song.mp3"},
      {songTitle:"8 Days of Hannukah",songArtist:"Sharon Jones & The Dap-Kings",songDuration:"3:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/20%208%20Days%20of%20Hannukah.mp3"},
      {songTitle:"Someday At Christmas",songArtist:"Stevie Wonder",songDuration:"2:49",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/21%20Someday%20At%20Christmas.mp3"},
      {songTitle:"I Don't Wanna Wait Til Christmas",songArtist:"Summer Camp",songDuration:"3:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/22%20I%20Don't%20Wanna%20Wait%20Til%20Christmas.mp3"},
      {songTitle:"Il Est Ne",songArtist:"Tom Tom Club",songDuration:"4:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/23%20Il%20Est%20Ne.mp3"},
      {songTitle:"Little Drummer Boy",songArtist:"Louis Bellson",songDuration:"6:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/2015/24%20Little%20Drummer%20Boy.mp3"}
    ]
  },
  {
    id: 2014,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2014/cover.jpeg",
    albumTitle: "#17: Xmas Card 2014: Fa La La La La La La La La",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/2014.zip",
    songs: [
      {songTitle:"'Twas the Night Before Christmas",songArtist:"Jim Carter",songDuration:"3:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/01%20'Twas%20the%20Night%20Before%20Christmas.mp3"},
      {songTitle:"White Winter Hymnal",songArtist:"Fleet Foxes",songDuration:"2:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/02%20White%20Winter%20Hymnal.mp3"},
      {songTitle:"Christmas Party",songArtist:"Dr. Dog",songDuration:"3:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/03%20Christmas%20Party.mp3"},
      {songTitle:"December (Based on \"September\")",songArtist:"Earth Wind & Fire",songDuration:"3:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/04%20December%20(Based%20on%20_September_).mp3"},
      {songTitle:"A Child Is Born",songArtist:"Oscar Peterson",songDuration:"2:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/05%20A%20Child%20Is%20Born.mp3"},
      {songTitle:"Santa's Lost His Mojo",songArtist:"Jeremy Lister",songDuration:"2:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/06%20Santa's%20Lost%20His%20Mojo.mp3"},
      {songTitle:"Christmas Alphabet Medley: Christmas Alphabet/Merry Christmas Polka/Christmas In America",songArtist:"Spike Jones",songDuration:"3:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/07%20Christmas%20Alphabet%20Medley_%20Christmas%20Alphabet_Merry%20Christmas%20Polka_Christmas%20In%20America.mp3"},
      {songTitle:"Let It Snow",songArtist:"The Rosebuds",songDuration:"2:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/08%20Let%20It%20Snow.mp3"},
      {songTitle:"What Christmas Means To Me",songArtist:"Hanson",songDuration:"3:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/09%20What%20Christmas%20Means%20To%20Me.mp3"},
      {songTitle:"Be Claus I Got High",songArtist:"Bob Rivers",songDuration:"3:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/10%20Be%20Claus%20I%20Got%20High.mp3"},
      {songTitle:"Sleigh Ride",songArtist:"Bela Fleck & The Flecktones",songDuration:"3:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/11%20Sleigh%20Ride.mp3"},
      {songTitle:"Trim Up The Tree",songArtist:"Boris Karloff",songDuration:"1:21",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/12%20Trim%20Up%20The%20Tree.mp3"},
      {songTitle:"Little Jack Frost Get Lost [feat. Norah Jones]",songArtist:"Seth MacFarlane",songDuration:"2:34",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/13%20Little%20Jack%20Frost%20Get%20Lost%20%5Bfeat.%20Norah%20Jones%5D.mp3"},
      {songTitle:"Joel the Lump of Coal (feat. Jimmy Kimmel)",songArtist:"The Killers",songDuration:"3:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/14%20Joel%20the%20Lump%20of%20Coal%20(feat.%20Jimmy%20Kimmel).mp3"},
      {songTitle:"Turn Up Ye Merry Gentlemen",songArtist:"Gent & Jawns",songDuration:"3:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/15%20Turn%20Up%20Ye%20Merry%20Gentlemen.mp3"},
      {songTitle:"Christmas is All Around",songArtist:"jen",songDuration:"3:03",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/16%20Christmas%20is%20All%20Around.mp3"},
      {songTitle:"Got Something for You",songArtist:"Best Coast, Wavves",songDuration:"1:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/17%20Got%20Something%20for%20You.mp3"},
      {songTitle:"Rudolph The Red-Nosed Reindeer",songArtist:"Ella Fitzgerald",songDuration:"2:53",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/18%20Rudolph%20The%20Red-Nosed%20Reindeer%20(Album%20Version).mp3"},
      {songTitle:"Come to Christmas",songArtist:"Spirit Animal",songDuration:"3:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/19%20Come%20to%20Christmas.mp3"},
      {songTitle:"Santa Claus Is Coming To Town",songArtist:"Jackson 5",songDuration:"2:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/20%20Santa%20Claus%20Is%20Coming%20To%20Town.mp3"},
      {songTitle:"Santa, Bring My Baby Back (To Me)",songArtist:"Eleanor Friedberger",songDuration:"5:08",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/21%20Santa,%20Bring%20My%20Baby%20Back%20(To%20Me).mp3"},
      {songTitle:"Good King Wenceslas",songArtist:"The Roches",songDuration:"3:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/22%20Good%20King%20Wenceslas.mp3"},
      {songTitle:"Underneath the Tree",songArtist:"Kelly Clarkson",songDuration:"3:50",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/23%20Underneath%20the%20Tree.mp3"},
      {songTitle:"Doo Wop Christmas (That's What Christmas Is All About)",songArtist:"Kem",songDuration:"2:48",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2014/24%20Doo%20Wop%20Christmas%20(That's%20What%20Christmas%20Is%20All%20About)%20(Album%20Version).mp3"}
    ]
  },
  {
    id: 2013,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2013/cover.jpeg",
    albumTitle: "#16: Xmas Card 2013: Sleigh the Season",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/2013.zip",
    songs: [
      {songTitle:"Holiday I.D.",songArtist:"Lou Reed",songDuration:"0:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/01%20Holiday%20I.D..mp3"},
      {songTitle:"Xmas In February",songArtist:"Lou Reed",songDuration:"2:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/02%20Xmas%20In%20February.mp3"},
      {songTitle:"Carol Of The Bells",songArtist:"Pentatonix",songDuration:"3:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/03%20Carol%20Of%20The%20Bells.mp3"},
      {songTitle:"The Christmas Song (Sonny J Remix)",songArtist:"Mel Tormé",songDuration:"6:06",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/04%20The%20Christmas%20Song%20(Sonny%20J%20Remix).mp3"},
      {songTitle:"Do You Hear What I Hear?",songArtist:"The Polyphonic Spree",songDuration:"3:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/05%20Do%20You%20Hear%20What%20I%20Hear_.mp3"},
      {songTitle:"Frosty the Snowman",songArtist:"Julian Koster",songDuration:"1:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/06%20Frosty%20the%20Snowman.mp3"},
      {songTitle:"Gaudete",songArtist:"Erasure",songDuration:"2:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/07%20Gaudete.mp3"},
      {songTitle:"Holiday Mood",songArtist:"The Apples in stereo",songDuration:"2:26",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/08%20Holiday%20Mood.mp3"},
      {songTitle:"Jingle Bells",songArtist:"Brent Lewis",songDuration:"2:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/09%20Jingle%20Bells.mp3"},
      {songTitle:"Little Drummer Boy/Silent Night/Auld Lang Syne",songArtist:"Jimi Hendrix",songDuration:"4:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/10%20Little%20Drummer%20Boy_Silent%20Night_Auld%20Lang%20Syne.mp3"},
      {songTitle:"Rudolph the Red-Nosed Reindeer",songArtist:"John Klein",songDuration:"2:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/11%20Rudolph%20the%20Red-Nosed%20Reindeer.mp3"},
      {songTitle:"Santa's Beard",songArtist:"They Might Be Giants",songDuration:"1:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/12%20Santa's%20Beard.mp3"},
      {songTitle:"Thank God It's Not Christmas",songArtist:"Parenthetical Girls",songDuration:"4:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/13%20Thank%20God%20It's%20Not%20Christmas.mp3"},
      {songTitle:"Under The Mistletoe",songArtist:"The Silhouettes",songDuration:"3:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/14%20Under%20The%20Mistletoe.mp3"},
      {songTitle:"We Wish You A Merry Christmas",songArtist:"Harold Melvin & The Bluenotes",songDuration:"3:17",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/3-15%20We%20Wish%20You%20A%20Merry%20Christmas.mp3"},
      {songTitle:"Winter Wonderland",songArtist:"The Mistletoe Disco Band",songDuration:"3:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/16%20Winter%20Wonderland.mp3"},
      {songTitle:"You Put the X in X-mas",songArtist:"Tiny Little Bigband",songDuration:"2:20",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/17%20You%20Put%20the%20X%20in%20X-mas.mp3"},
      {songTitle:"Your Christmas Whiskey",songArtist:"Minus 5",songDuration:"3:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/18%20Your%20Christmas%20Whiskey.mp3"},
      {songTitle:"Carol Of The Bells",songArtist:"The Bird And The Bee",songDuration:"2:04",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/19%20Carol%20Of%20The%20Bells.mp3"},
      {songTitle:"Rock This Christmas Down",songArtist:"Lita Ford & Cherie Currie",songDuration:"3:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/20%20Rock%20This%20Christmas%20Down.mp3"},
      {songTitle:"7 O'Clock News",songArtist:"Silent Night / Simon & Garfunkel",songDuration:"2:07",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/21%207%20O'Clock%20News%20_%20Silent%20Night.mp3"},
      {songTitle:"And Anyway It’s Christmas",songArtist:"(!!! Chk Chik Chick)",songDuration:"3:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/22%20And%20Anyway%20It_s%20Christmas.mp3"},
      {songTitle:"Christmas Song",songArtist:"The Garlands",songDuration:"3:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/23%20Christmas%20Song.mp3"},
      {songTitle:"I Hate You This Christmas [Explicit]",songArtist:"Kate Nash",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2013/24%20I%20Hate%20You%20This%20Christmas%20%5BExplicit%5D.mp3"}
    ]
  },
  {
    id: 2012,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2012/cover.jpeg",
    albumTitle: "#15: Xmas Card 2012: Christmastime Terror",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/2012.zip",
    songs: [
      {songTitle:"Happy Fucking Holidays [Explicit]",songArtist:"Starfucker",songDuration:"4:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/01%20Happy%20Fucking%20Holidays%20%5BExplicit%5D.mp3"},
      {songTitle:"Wonderful Christmastime",songArtist:"The Shins",songDuration:"2:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/02%20Wonderful%20Christmastime.mp3"},
      {songTitle:"All I Need Is Love (feat. Disney's The Muppets)",songArtist:"CeeLo Green",songDuration:"3:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/03%20All%20I%20Need%20Is%20Love%20(feat.%20Disney's%20The%20Muppets).mp3"},
      {songTitle:"You Trashed My Christmas",songArtist:"The Primitives",songDuration:"2:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/04%20You%20Trashed%20My%20Christmas.mp3"},
      {songTitle:"Santa's Coming in a Whirlybird",songArtist:"Little Lance & His Friends",songDuration:"1:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/05%20Santa's%20Coming%20in%20a%20Whirlybird.mp3"},
      {songTitle:"Lost In The Post",songArtist:"Wombats",songDuration:"3:06",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/06%20Lost%20In%20The%20Post.mp3"},
      {songTitle:"Tijuana Christmas",songArtist:"The Border Brass",songDuration:"2:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/07%20Tijuana%20Christmas.mp3"},
      {songTitle:"Cheap Gold",songArtist:"Frightened Rabbit",songDuration:"2:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/08%20Cheap%20Gold.mp3"},
      {songTitle:"We Three Kings",songArtist:"Dave Brubeck",songDuration:"3:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/09%20We%20Three%20Kings.mp3"},
      {songTitle:"The Chipmunk Song (Christmas Don't Be Late)",songArtist:"Catwalk",songDuration:"3:06",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/10%20The%20Chipmunk%20Song%20(Christmas%20Don't%20Be%20Late).mp3"},
      {songTitle:"Christmas (Baby Please Come Home)",songArtist:"Slow Club",songDuration:"2:52",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/11%20Christmas%20(Baby%20Please%20Come%20Home).mp3"},
      {songTitle:"All I Want is Truth (for Christmas)",songArtist:"The Mynabirds",songDuration:"3:51",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/12%20All%20I%20Want%20is%20Truth%20(for%20Christmas).mp3"},
      {songTitle:"Deck The Halls",songArtist:"11 Acorn Lane",songDuration:"2:17",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/13%20Deck%20The%20Halls.mp3"},
      {songTitle:"Santa Stole My Lady",songArtist:"Fitz & The Tantrums",songDuration:"3:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/14%20Santa%20Stole%20My%20Lady.mp3"},
      {songTitle:"Back Door Santa (Non Album Version)",songArtist:"Jet",songDuration:"2:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/15%20Back%20Door%20Santa%20(Non%20Album%20Version).mp3"},
      {songTitle:"The Happiest Christmas Tree",songArtist:"Nat King Cole",songDuration:"1:51",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/16%20The%20Happiest%20Christmas%20Tree.mp3"},
      {songTitle:"Christmas Wrapping",songArtist:"Summer Camp",songDuration:"3:51",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/17%20Christmas%20Wrapping.mp3"},
      {songTitle:"Christmas Carousel",songArtist:"Peggy Lee",songDuration:"2:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/18%20Christmas%20Carousel.mp3"},
      {songTitle:"Christmas Time is Here [Vince Guaraldi cover]",songArtist:"Woods",songDuration:"2:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/19%20Christmas%20Time%20is%20Here%20%5BVince%20Guaraldi%20cover%5D.mp3"},
      {songTitle:"We Wish You A Merry Christmas",songArtist:"Shonen Knife",songDuration:"1:57",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/20%20We%20Wish%20You%20A%20Merry%20Christmas.mp3"},
      {songTitle:"Grinch 2000",songArtist:"Busta Rhymes",songDuration:"3:35",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/21%20Grinch%202000.mp3"},
      {songTitle:"Grown-Up Christmas List",songArtist:"Whitney Houston Feat Toni Braxton",songDuration:"4:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/22%20Grown-Up%20Christmas%20List.mp3"},
      {songTitle:"My Baby Fell For Ol' St. Nick - Dada",songArtist:"Dada",songDuration:"3:05",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/23%20My%20Baby%20Fell%20For%20Ol'%20St.%20Nick%20-%20Dada.mp3"},
      {songTitle:"Let's Call It Quits",songArtist:"human",songDuration:"2:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2012/24%20Let's%20Call%20It%20Quits.mp3"}
    ]
  },
  {
    id: 2011,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2011/cover.jpeg",
    albumTitle: "#14: Xmas Card 2011: Christmas Bundle",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/2011.zip",
    songs: [
      {songTitle:"Minty",songArtist:"Team Coco",songDuration:"1:05",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/01%20Minty.mp3"},
      {songTitle:"Frosty The Snowman",songArtist:"Zee Avi",songDuration:"2:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/02%20Frosty%20The%20Snowman.mp3"},
      {songTitle:"How Do You Spell Channukkahh?",songArtist:"The LeeVees",songDuration:"4:57",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/03%20How%20Do%20You%20Spell%20Channukkahh_.mp3"},
      {songTitle:"The Nutcracker March",songArtist:"Stella Artois Jazz Band",songDuration:"3:13",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/04%20The%20Nutcracker%20March.mp3"},
      {songTitle:"Song for the Season (Holy Jam)",songArtist:"Baby Jazz",songDuration:"2:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/05%20Song%20for%20the%20Season%20(Holy%20Jam).mp3"},
      {songTitle:"Merry Christmas, Baby (Please Don't Die)",songArtist:"Crocodiles &amp; Dum Dum Girls",songDuration:"3:19",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/06%20Merry%20Christmas,%20Baby%20(Please%20Don't%20Die).mp3"},
      {songTitle:"Artificial Snow (Campfire Metalophone Version)",songArtist:"Atlas Sound",songDuration:"2:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/07%20Artificial%20Snow%20(Campfire%20Metalophone%20Version).mp3"},
      {songTitle:"Christmas In A Chinese Restaurant",songArtist:"Diamond Rugs",songDuration:"3:49",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/08%20Christmas%20In%20A%20Chinese%20Restaurant.mp3"},
      {songTitle:"Wishes",songArtist:"The Bird And The Bee",songDuration:"2:35",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/09%20Wishes.mp3"},
      {songTitle:"Kindle A Flame In Her Heart",songArtist:"Los Campesinos!",songDuration:"4:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/10%20Kindle%20A%20Flame%20In%20Her%20Heart.mp3"},
      {songTitle:"Santa Papi",songArtist:"Maria Isa",songDuration:"3:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/11%20Santa%20Papi.mp3"},
      {songTitle:"Holiday Fortnight",songArtist:"The Specials",songDuration:"2:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/12%20Holiday%20Fortnight.mp3"},
      {songTitle:"Santa Loves To Boogie",songArtist:"Asleep at the Wheel",songDuration:"2:33",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/13%20Santa%20Loves%20To%20Boogie.mp3"},
      {songTitle:"Mean Old Jews Who Crucify My Lord",songArtist:"Sister Albertha Harris Lewis",songDuration:"3:31",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/14%20Mean%20Old%20Jews%20Who%20Crucify%20My%20Lord.mp3"},
      {songTitle:"Have Yourself a Merry Little Christmas",songArtist:"Vanessa Rubin",songDuration:"4:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/15%20Have%20Yourself%20a%20Merry%20Little%20Christmas.mp3"},
      {songTitle:"Jingle Bell Rock",songArtist:"Rogue Wave",songDuration:"2:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/16%20Jingle%20Bell%20Rock.mp3"},
      {songTitle:"Let it Snow, All I Want for Christmas medley",songArtist:"Her Space Holiday",songDuration:"2:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/17%20Let%20it%20Snow,%20All%20I%20Want%20for%20Christmas%20medley.mp3"},
      {songTitle:"Christmas Time Is Here",songArtist:"Mayer Hawthorne",songDuration:"3:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/18%20Christmas%20Time%20Is%20Here.mp3"},
      {songTitle:"I Do Not Care For The Winter Sun",songArtist:"Beach House",songDuration:"3:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/19%20I%20Do%20Not%20Care%20For%20The%20Winter%20Sun.mp3"},
      {songTitle:"Got Something for You",songArtist:"Best Coast, Wavves",songDuration:"1:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/20%20Got%20Something%20for%20You.mp3"},
      {songTitle:"867-5309",songArtist:"Jenny (Christmas Version) / Tommy Tutone",songDuration:"3:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/21%20867-5309%20_%20Jenny%20(Christmas%20Version).mp3"},
      {songTitle:"The Christmas Waltz",songArtist:"She &amp; Him",songDuration:"2:38",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/22%20The%20Christmas%20Waltz.mp3"},
      {songTitle:"Run Away With Me",songArtist:"Jens Lekman",songDuration:"2:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/23%20Run%20Away%20With%20Me.mp3"},
      {songTitle:"Drummer Boy (Feat. Busta Rhymes)",songArtist:"Justin Bieber",songDuration:"3:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/24%20Drummer%20Boy%20(Feat.%20Busta%20Rhymes).mp3"},
      {songTitle:"Mamacita Donde Esta Santa Claus",songArtist:"El Vez",songDuration:"2:10",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2011/25%20Mamacita%20Donde%20Esta%20Santa%20Claus.m4a"}
    ]
  },
  {
    id: 2010,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2010/cover.jpeg",
    albumTitle: "#14: Xmas Card 2010: Happy Ho-Ho Holidays",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/2010.zip",
    songs: [
      {songTitle:"Little Dealer Boy",songArtist:"Stephen Colbert &amp; Willie Nelson",songDuration:"2:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/01%20Little%20Dealer%20Boy.mp3"},
      {songTitle:"Merry Something To You",songArtist:"Devo",songDuration:"1:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/02%20Merry%20Something%20To%20You.mp3"},
      {songTitle:"Christmas Time Is Here Again",songArtist:"The Flirtations",songDuration:"3:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/03%20Christmas%20Time%20Is%20Here%20Again.mp3"},
      {songTitle:"Present Face",songArtist:"Garfunkel and Oates",songDuration:"2:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/04%20Present%20Face.mp3"},
      {songTitle:"Fruitcake",songArtist:"The Superions",songDuration:"3:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/05%20Fruitcake.mp3"},
      {songTitle:"Winter Wonderland",songArtist:"Shirley Horn",songDuration:"4:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/06%20Winter%20Wonderland.mp3"},
      {songTitle:"A Child Is Born",songArtist:"Rihanna",songDuration:"3:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/07%20A%20Child%20Is%20Born.mp3"},
      {songTitle:"Santa Claus",songArtist:"Lee 'Scratch' Perry",songDuration:"3:57",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/08%20Santa%20Claus.mp3"},
      {songTitle:"It Doesn't Often Snow at Christmas",songArtist:"Pet Shop Boys",songDuration:"3:52",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/09%20It%20doesn't%20often%20snow%20at%20Christmas%20(new%20version).mp3"},
      {songTitle:"Winter Weather",songArtist:"Jo Stafford",songDuration:"1:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/10%20Winter%20Weather.mp3"},
      {songTitle:"Give The Jew Girl Toys [Explicit]",songArtist:"Sarah Silverman",songDuration:"2:20",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/11%20Give%20The%20Jew%20Girl%20Toys%20%5BExplicit%5D.mp3"},
      {songTitle:"Purple Snowflakes",songArtist:"Marvin Gaye",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/12%20Purple%20Snowflakes.mp3"},
      {songTitle:"Rated Xmas [Explicit]",songArtist:"The Millionaires",songDuration:"3:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/13%20Rated%20Xmas%20%5BExplicit%5D.mp3"},
      {songTitle:"Christmas Isn't Christmas",songArtist:"The Boy Least Likely To",songDuration:"3:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/14%20Christmas%20Isn't%20Christmas.mp3"},
      {songTitle:"Stay A Little Longer, Santa",songArtist:"Shemekia Copeland",songDuration:"4:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/15%20Stay%20A%20Little%20Longer,%20Santa.mp3"},
      {songTitle:"Mamacita, Donde Esta Santa Claus?",songArtist:"Guster",songDuration:"2:21",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/16%20Mamacita,%20Donde%20Esta%20Santa%20Claus_%20(Non-Album%20Track).mp3"},
      {songTitle:"Mambo Santa Mambo",songArtist:"The Enchanters",songDuration:"2:39",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/17%20Mambo%20Santa%20Mambo.mp3"},
      {songTitle:"Ol' Fatso",songArtist:"Augie Rios",songDuration:"2:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/18%20Ol'%20Fatso.mp3"},
      {songTitle:"Christmas Is",songArtist:"Run D.M.C.",songDuration:"3:20",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/19%20Christmas%20Is.mp3"},
      {songTitle:"Ho! Ho! Ho! (Who'd Be A Turkey At Christmas)",songArtist:"Elton John",songDuration:"4:07",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/20%20Ho!%20Ho!%20Ho!%20(Who'd%20Be%20A%20Turkey%20At%20Christmas).mp3"},
      {songTitle:"It's Christmas",songArtist:"Coconut Records",songDuration:"2:13",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/21%20It's%20Christmas.mp3"},
      {songTitle:"Jake The Flake",songArtist:"Bobby Starr",songDuration:"2:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/22%20Jake%20The%20Flake.mp3"},
      {songTitle:"Clean For Christmas",songArtist:"James Brown",songDuration:"2:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/23%20Clean%20For%20Christmas.mp3"},
      {songTitle:"Stuck At The Airport",songArtist:"Money Mark",songDuration:"3:19",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/24%20Stuck%20At%20The%20Airport.mp3"},
      {songTitle:"Step Into Christmas",songArtist:"The Puppini Sisters",songDuration:"3:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/25%20Step%20Into%20Christmas.mp3"},
      {songTitle:"Everything Is One Big Christmas Tree",songArtist:"The Magnetic Fields",songDuration:"2:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2010/26%20Everything%20Is%20One%20Big%20Christmas%20Tree.mp3"}  
    ]
  },



  {
    id: 2009,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2009/cover.jpeg",
    albumTitle: "#12: Xmas Card 2009: Holiday Cane-ing",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/2009.zip",
    songs: [
      {songTitle:"Please Be Patient",songArtist:"Feist",songDuration:"2:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/01%20Please%20Be%20Patient.mp3"},
      {songTitle:"Last Christmas",songArtist:"Glee Cast",songDuration:"3:38",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/02%20Last%20Christmas.mp3"},
      {songTitle:"The Merriest [Thunderball Mix]",songArtist:"June Christy",songDuration:"3:31",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/03%20The%20Merriest%20%5BThunderball%20Mix%5D.mp3"},
      {songTitle:"My Christmas Bells",songArtist:"Hard Call Christmas",songDuration:"3:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/04%20My%20Christmas%20Bells.mp3"},
      {songTitle:"Fairytale Of New York",songArtist:"Stars",songDuration:"4:05",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/05%20Fairytale%20Of%20New%20York.mp3"},
      {songTitle:"I'm Gonna Lasso Santa Claus",songArtist:"Brenda Lee",songDuration:"2:17",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/06%20I'm%20Gonna%20Lasso%20Santa%20Claus.mp3"},
      {songTitle:"Christmas Tree",songArtist:"Lady GaGa",songDuration:"2:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/07%20Christmas%20Tree.mp3"},
      {songTitle:"The Little Drummer Boy",songArtist:"Salsoul Orchestra",songDuration:"5:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/08%20The%20Little%20Drummer%20Boy.mp3"},
      {songTitle:"X-mas song",songArtist:"fireflies",songDuration:"1:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/09%20X-mas%20song.mp3"},
      {songTitle:"Santa's Goin' To Kokomo",songArtist:"Mike Love",songDuration:"2:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/10%20Santa's%20Goin'%20To%20Kokomo.mp3"},
      {songTitle:"Santa Baby",songArtist:"Latin Jazz Featuring Sheila E.",songDuration:"4:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/11%20Santa%20Baby.mp3"},
      {songTitle:"Jew 4 Xmas",songArtist:"Coconut &amp; the Duke",songDuration:"4:06",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/12%20Jew%204%20Xmas.mp3"},
      {songTitle:"All I Want For Christmas",songArtist:"88 Fingers Louie",songDuration:"1:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/13%20All%20I%20Want%20For%20Christmas.mp3"},
      {songTitle:"Get Your Hump On This Christmas",songArtist:"Earth, Wind &amp; Fire",songDuration:"2:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/14%20Get%20Your%20Hump%20On%20This%20Christmas.mp3"},
      {songTitle:"Wonderful Christmas Time (Paul McCartney Cover)",songArtist:"Mark...",songDuration:"3:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/15%20Wonderful%20Christmas%20Time.mp3"},
      {songTitle:"Super Rock Santa",songArtist:"Fleshtones",songDuration:"1:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/16%20Super%20Rock%20Santa.mp3"},
      {songTitle:"I Wanna Take You Out In Your Holiday Sweater",songArtist:"Pas/Cal",songDuration:"3:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/17%20I%20Wanna%20Take%20You%20Out%20In%20Your%20Holiday%20Sweater.mp3"},
      {songTitle:"Christmas Spirit",songArtist:"The Wailers",songDuration:"3:10",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/18%20Christmas%20Spirit.mp3"},
      {songTitle:"Donna &amp; Blitzen",songArtist:"Badly Drawn Boy",songDuration:"4:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/19%20Donna%20%26%20Blitzen.mp3"},
      {songTitle:"Child's Christmas in Wales",songArtist:"John Cale",songDuration:"3:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/20%20Child's%20Christmas%20in%20Wales.mp3"},
      {songTitle:"In the Bleak Midwinter",songArtist:"The Pipettes",songDuration:"2:01",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/21%20In%20the%20Bleak%20Midwinter.mp3"},
      {songTitle:"Ain't No Chimneys",songArtist:"Sharon Jones &amp; The Dap-Kings",songDuration:"2:21",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/22%20Ain't%20No%20Chimneys.mp3"},
      {songTitle:"Boogaloo Santa Claus",songArtist:"J.D. McDonald",songDuration:"4:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/23%20Boogaloo%20Santa%20Claus.mp3"},
      {songTitle:"Children Go Where I Send Thee",songArtist:"Hall and Oates",songDuration:"4:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2009/24%20Children%20Go%20Where%20I%20Send%20Thee.mp3"}
    ]
  },


  {
    id: 2008,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2008/cover.jpeg",
    albumTitle: "#14: Xmas Card 2008: Holiday Dance-y Dance",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/2008.zip",
    songs: [
      {songTitle:"Another Christmas Song",songArtist:"Stephen Colbert",songDuration:"2:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/01%20Another%20Christmas%20Song.mp3"},
      {songTitle:"Who Took The Merry Out Of Christmas",songArtist:"Darlene Love",songDuration:"3:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/02%20Who%20Took%20The%20Merry%20Out%20Of%20Christmas.mp3"},
      {songTitle:"A Beguiled Christmas Sales",songArtist:"Jason Collett",songDuration:"2:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/03%20A%20Beguiled%20Christmas%20Sales.mp3"},
      {songTitle:"Seven Joys Of Mary",songArtist:"Great Big Sea",songDuration:"2:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/04%20Seven%20Joys%20Of%20Mary.mp3"},
      {songTitle:"Santa Claus Shuffle",songArtist:"Tommy Scott",songDuration:"2:50",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/05%20Santa%20Claus%20Shuffle.mp3"},
      {songTitle:"Merry Christmas (You Won't Get What You Want)",songArtist:"Johnny Bertram",songDuration:"3:08",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/06%20Merry%20Christmas%20(You%20Won't%20Get%20What%20You%20Want).mp3"},
      {songTitle:"Carol Of The Bells",songArtist:"The Polyphonic Spree",songDuration:"1:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/07%20Carol%20Of%20The%20Bells.mp3"},
      {songTitle:"We Wish You a Lousy Xmas",songArtist:"Space Negros",songDuration:"2:03",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/08%20We%20Wish%20You%20a%20Lousy%20Xmas.mp3"},
      {songTitle:"I Won't Be Home For Chirstmas",songArtist:"Blink 182",songDuration:"3:18",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/09%20I%20Won't%20Be%20Home%20For%20Chirstmas.mp3"},
      {songTitle:"I Ate Too Much Over The Holidays",songArtist:"Lee Shot Williams",songDuration:"4:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/10%20I%20Ate%20Too%20Much%20Over%20The%20Holidays.mp3"},
      {songTitle:"Linus and Lucy",songArtist:"Bela Fleck &amp; The Flecktones",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/11%20Linus%20and%20Lucy.mp3"},
      {songTitle:"Christmas Time is Here",songArtist:"Au Revoir Simone",songDuration:"2:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/12%20Christmas%20Time%20is%20Here.mp3"},
      {songTitle:"Christmas Card From a Hooker in Minneapolis",songArtist:"Neko Case",songDuration:"3:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/13%20Christmas%20Card%20From%20a%20Hooker%20in%20Minneapolis.mp3"},
      {songTitle:"I Need A Lover For Christmas",songArtist:"Sheba Potts-Wright",songDuration:"4:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/14%20I%20Need%20A%20Lover%20For%20Christmas.mp3"},
      {songTitle:"Plasma for Christmas",songArtist:"The Reverend Peyton's Big Damn Band",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/15%20Plasma%20for%20Christmas.mp3"},
      {songTitle:"A Christmas Duel",songArtist:"The Hives &amp; Cyndi Lauper",songDuration:"4:49",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/16%20A%20Christmas%20Duel.mp3"},
      {songTitle:"Hannukah Snowman",songArtist:"Phranc",songDuration:"1:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/17%20Hannukah%20Snowman.mp3"},
      {songTitle:"I Need A Man Down My Chimney",songArtist:"Barbara Carr",songDuration:"3:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/18%20I%20Need%20A%20Man%20Down%20My%20Chimney.mp3"},
      {songTitle:"Why Can't It Be Christmastime All Year",songArtist:"Rosie Thomas",songDuration:"4:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/19%20Why%20Can't%20It%20Be%20Christmastime%20All%20Year.mp3"},
      {songTitle:"It's A Marshmallow World",songArtist:"The May Fire",songDuration:"3:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/20%20It's%20A%20Marshmallow%20World.mp3"},
      {songTitle:"Darlin' (Christmas is Coming)",songArtist:"Over The Rhine",songDuration:"3:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/21%20Darlin'%20(Christmas%20is%20Coming).mp3"},
      {songTitle:"The Christmas Sound",songArtist:"The Swimmers",songDuration:"2:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/22%20The%20Christmas%20Sound.mp3"},
      {songTitle:"Christmas Tree's On Fire",songArtist:"Holly Golightly",songDuration:"2:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/23%20Christmas%20Tree's%20On%20Fire.mp3"},
      {songTitle:"Winter Wonderland",songArtist:"Goldfrapp",songDuration:"3:10",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/24%20Winter%20Wonderland.mp3"},
      {songTitle:"Christmas Is Coming Soon",songArtist:"Blitzen Trapper",songDuration:"3:04",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2008/25%20Christmas%20Is%20Coming%20Soon.mp3"}  
    ]
  },


  {
    id: 2007,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2007/cover.jpeg",
    albumTitle: "#10: Xmas Card 2007: Xmas Sweaters",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/2007.zip",
    songs: [
      {songTitle:"X-Mass Wii",songArtist:"Hot Lava",songDuration:"1:52",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/01%20X-Mass%20Wii.mp3"},
      {songTitle:"Last Month of the Year",songArtist:"The Blind Boys of Alabama",songDuration:"3:03",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/02%20Last%20Month%20of%20the%20Year.mp3"},
      {songTitle:"Hanukkah Dance (Alternate Take)",songArtist:"Woody Guthrie",songDuration:"1:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/03%20Hanukkah%20Dance%20(Alternate%20Take).mp3"},
      {songTitle:"Merry Christmas (I Don't Want To Fight Tonight)",songArtist:"Asobi Seksu",songDuration:"3:08",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/04%20Merry%20Christmas%20(I%20Don't%20Want%20To%20Fight%20Tonight).mp3"},
      {songTitle:"Christmas Comes But Once a Year",songArtist:"Amos Milburn with Charles Brown",songDuration:"2:19",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/05%20Christmas%20Comes%20But%20Once%20a%20Year.mp3"},
      {songTitle:"End of the Year",songArtist:"Aaron Robinson",songDuration:"2:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/06%20End%20of%20the%20Year.mp3"},
      {songTitle:" Yeah, I Know, It's Christmastime",songArtist:"Andrew Dost (Anathallo)",songDuration:"2:05",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/07%20%20Yeah,%20I%20Know,%20It's%20Christmastime.mp3"},
      {songTitle:"O Come All Ye Faithful",songArtist:"Chet Baker",songDuration:"4:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/08%20O%20Come%20All%20Ye%20Faithful.mp3"},
      {songTitle:"Have Yourself A Filthy Little Christmas",songArtist:"And What Will Be Left Of Them?",songDuration:"2:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/09%20Have%20Yourself%20A%20Filthy%20Little%20Christmas.mp3"},
      {songTitle:"Holiday Adam",songArtist:"The Promise Ring",songDuration:"3:19",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/10%20A%20Change%20At%20Christmas%20(Say%20It%20Isn't%20So).mp3"},
      {songTitle:"A Change At Christmas (Say It Isn't So)",songArtist:"The Flaming Lips",songDuration:"5:18",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/11%20Holiday%20Adam.mp3"},
      {songTitle:"Merry Christmas Baby",songArtist:"Otis Redding",songDuration:"2:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/12%20Merry%20Christmas%20Baby.mp3"},
      {songTitle:"Wish It Would Snow",songArtist:"The Specimen",songDuration:"3:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/13%20Wish%20It%20Would%20Snow.mp3"},
      {songTitle:"Merry Christmas, Baby",songArtist:"Ike &amp; Tina Turner",songDuration:"2:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/14%20Merry%20Christmas,%20Baby.mp3"},
      {songTitle:"This Christmas",songArtist:"The Dismemberment Plan",songDuration:"3:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/15%20This%20Christmas.mp3"},
      {songTitle:"She Came Home For Christmas",songArtist:"Mew",songDuration:"3:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/16%20She%20Came%20Home%20For%20Christmas.mp3"},
      {songTitle:"Mazel Tonk",songArtist:"Brigid Kaelin",songDuration:"2:38",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/17%20Mazel%20Tonk.mp3"},
      {songTitle:"This Christmas",songArtist:"Louis XIV",songDuration:"3:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/18%20This%20Christmas.mp3"},
      {songTitle:"Lo, How a Rose e're Blooming",songArtist:"Feist",songDuration:"3:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/19%20Lo,%20How%20a%20Rose%20e're%20Blooming.mp3"},
      {songTitle:"Silent Night",songArtist:"Ween",songDuration:"1:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/20%20Silent%20Night.mp3"},
      {songTitle:"Nine Inch Noels",songArtist:"Bad Gods",songDuration:"3:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/21%20Nine%20Inch%20Noels.mp3"},
      {songTitle:"Space Christmas",songArtist:"Shonen Knife",songDuration:"3:01",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/22%20Space%20Christmas.mp3"},
      {songTitle:"All I Want for Christmas",songArtist:"Timbuk 3",songDuration:"3:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/23%20All%20I%20Want%20for%20Christmas.mp3"},
      {songTitle:"Santar Klaws (Poj Masta's Christmas Mix)",songArtist:"Eartha Kitt",songDuration:"2:10",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/24%20Santar%20Klaws%20(Poj%20Masta's%20Christmas%20Mix).mp3"},
      {songTitle:"A Joyous Time Of The Year",songArtist:"Marty Feldman",songDuration:"3:10",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/25%20A%20Joyous%20Time%20Of%20The%20Year.mp3"},
      {songTitle:"Pretty Paper",songArtist:"Roy Orbison",songDuration:"2:39",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2007/26%20Pretty%20Paper.mp3"}
    ]
  },


  {
    id: 2006,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2006/cover.jpeg",
    albumTitle: "#9: Xmas Card 2006: Hung like Ornaments",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/2006.zip",
    songs: [
      {songTitle:"It's Christmas Time",songArtist:"Yo La Tengo",songDuration:"2:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/01%20It's%20Christmas%20Time.mp3"},
      {songTitle:"Santa Bring My Baby Back (To Me)",songArtist:"Elvis Presley",songDuration:"1:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/02%20Santa%20Bring%20My%20Baby%20Back%20(To%20Me)%201.mp3"},
      {songTitle:"Holly Jolly Christmas",songArtist:"The Format",songDuration:"2:49",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/03%20Holly%20Jolly%20Christmas.mp3"},
      {songTitle:"Merry Christmas",songArtist:"Slade",songDuration:"3:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/04%20Merry%20Christmas.mp3"},
      {songTitle:"A Great Big Sled",songArtist:"The Killers",songDuration:"4:21",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/05%20A%20Great%20Big%20Sled.mp3"},
      {songTitle:"Mele Kalikimaka",songArtist:"Beach Boys",songDuration:"2:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/06%20Mele%20Kalikimaka%201.mp3"},
      {songTitle:"Come On! Let's Boogey to the Elf",songArtist:"Sufjan Stevens",songDuration:"3:50",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/07%20Come%20On!%20Let's%20Boogey%20to%20the%20Elf.mp3"},
      {songTitle:"Even Squeaky Fromme Loves Christmas",songArtist:"The Reverend Glen Armstrong",songDuration:"3:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/08%20Even%20Squeaky%20Fromme%20Loves%20Christmas.mp3"},
      {songTitle:"A Marshmellow World",songArtist:"Math and Physics Club",songDuration:"2:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/09%20A%20Marshmellow%20World.mp3"},
      {songTitle:"Christmas Reindeer",songArtist:"The Knife",songDuration:"5:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/10%20Christmas%20Reindeer.mp3"},
      {songTitle:"Christmas in Hollis",songArtist:"Thunderbirds are Now",songDuration:"2:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/11%20Christmas%20in%20Hollis.mp3"},
      {songTitle:"Stone Soul Christmas",songArtist:"Binky Griptite &amp; the Dee-Kay's",songDuration:"4:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/12%20Stone%20Soul%20Christmas.mp3"},
      {songTitle:"The Man In The Santa Suit",songArtist:"Fountains Of Wayne",songDuration:"2:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/13%20The%20Man%20In%20The%20Santa%20Suit.mp3"},
      {songTitle:"Elves on Strike",songArtist:"Ryan Allen",songDuration:"2:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/14%20Elves%20on%20Strike.mp3"},
      {songTitle:"Merry Christmas All",songArtist:"Denise Montana &amp; the Salsoul Orchestra",songDuration:"3:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/15%20Merry%20Christmas%20All.mp3"},
      {songTitle:"The Christmas Song",songArtist:"Ravonettes",songDuration:"2:15",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/16%20The%20Christmas%20Song.mp3"},
      {songTitle:"Drunk Santa",songArtist:"Ryan Adams",songDuration:"2:51",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/17%20Drunk%20Santa.mp3"},
      {songTitle:"Hey America",songArtist:"James Brown",songDuration:"3:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/18%20Hey%20America.mp3"},
      {songTitle:"All the Right Reasons",songArtist:"Dressy Bessy",songDuration:"2:38",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/19%20All%20the%20Right%20Reasons.mp3"},
      {songTitle:"Don't Believe in Christmas",songArtist:"The Sonics",songDuration:"1:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/20%20Don't%20Believe%20in%20Christmas.mp3"},
      {songTitle:"Christmas Is A-Coming (May God Bless You)",songArtist:"The Shitbirds",songDuration:"2:15",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/21%20Christmas%20Is%20A-Coming%20(May%20God%20Bless%20You).mp3"},
      {songTitle:"Swingin' Them Jingle Bells",songArtist:"Fats Waller",songDuration:"3:03",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/22%20Swingin'%20Them%20Jingle%20Bells.mp3"},
      {songTitle:"Please Come Home For Christmas",songArtist:"Etta James",songDuration:"3:52",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/23%20Please%20Come%20Home%20For%20Christmas.mp3"},
      {songTitle:"I Hate Christmas",songArtist:"Sesame Street",songDuration:"1:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/24%20I%20Hate%20Christmas.mp3"},
      {songTitle:"Run Rudolph Run",songArtist:"Richards, Keith",songDuration:"3:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/25%20Run%20Rudolph%20Run.mp3"},
      {songTitle:"We Wish You A Merry Christmas",songArtist:"Blitch Bango",songDuration:"2:05",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2006/26%20We%20Wish%20You%20A%20Merry%20Christmas.mp3"}
    ]
  },


  {
    id: 2005,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2005/cover.jpeg",
    albumTitle: "#8: Xmas Card 2005: Jingle Smells",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/2005.zip",
    songs: [
      {songTitle:"Jingle Smells (Extended Mix)",songArtist:"Pull My Finger",songDuration:"1:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/01%20Jingle%20Smells%20(Extended%20Mix).mp3"},
      {songTitle:"Sugar Rum Cherry (Dance of the Sugar Plum Fairy)",songArtist:"Duke Ellington",songDuration:"3:07",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/02%20Sugar%20Rum%20Cherry%20(Dance%20of%20the%20Sugar%20Plum%20Fairy).mp3"},
      {songTitle:"Christmas Time Is Here",songArtist:"Chomsky",songDuration:"3:33",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/03%20Christmas%20Time%20Is%20Here.mp3"},
      {songTitle:"Silent Night",songArtist:"Craig Le Roq",songDuration:"1:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/04%20Silent%20Night.mp3"},
      {songTitle:"Jingle Bells",songArtist:"Tenchi Muyo",songDuration:"3:03",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/05%20Jingle%20Bells.mp3"},
      {songTitle:"let it snow",songArtist:"bit shifter",songDuration:"1:48",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/06%20let%20it%20snow.mp3"},
      {songTitle:"Everything's Gonna Be Cool This Christmas",songArtist:"E",songDuration:"3:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/07%20Everything's%20Gonna%20Be%20Cool%20This%20Christmas.mp3"},
      {songTitle:"Snowflakes",songArtist:"Pizzicato Five",songDuration:"2:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/08%20Snowflakes.mp3"},
      {songTitle:"Candy Cane Children",songArtist:"White Stripes",songDuration:"2:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/09%20Candy%20Cane%20Children.mp3"},
      {songTitle:"Knockin Boots For Christmas",songArtist:"H-Town",songDuration:"4:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/10%20Knockin%20Boots%20For%20Christmas.mp3"},
      {songTitle:"El Cha Cha Cha De La Navidad",songArtist:"Celia Cruz",songDuration:"2:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/11%20El%20Cha%20Cha%20Cha%20De%20La%20Navidad.mp3"},
      {songTitle:"Santa Claus Is Coming To My House",songArtist:"DeVito, Karla",songDuration:"2:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/12%20Santa%20Claus%20Is%20Coming%20To%20My%20House.mp3"},
      {songTitle:"Jingle Bells (Batman Smells)",songArtist:"Lay To Rest",songDuration:"1:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/13%20_Jingle%20Bells%20(Batman%20Smells)_.mp3"},
      {songTitle:"Go Power at Christmas Time",songArtist:"James Brown",songDuration:"3:17",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/14%20Go%20Power%20at%20Christmas%20Time.mp3"},
      {songTitle:"Gee Whiz, It's Christmas ",songArtist:"Carla Thomas",songDuration:"2:31",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/15%20Gee%20Whiz,%20It's%20Christmas.mp3"},
      {songTitle:"The Hat I Got for Christmas Is Too Big",songArtist:"Speedy Gonzales - Mel Blanc",songDuration:"2:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/16%20The%20Hat%20I%20Got%20for%20Christmas%20Is%20Too%20Big.mp3"},
      {songTitle:"Jing Jing A Ling",songArtist:"Honey &amp; The Bees",songDuration:"2:26",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/17%20Jing%20Jing%20A%20Ling.mp3"},
      {songTitle:"The Only Gift That I Need",songArtist:"Dashboard Confessional",songDuration:"2:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/18%20The%20Only%20Gift%20That%20I%20Need.mp3"},
      {songTitle:"The Bell That Couldn't Jingle",songArtist:"Burt Bacharach - 'Christmas",songDuration:"2:34",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/19%20The%20Bell%20That%20Couldn't%20Jingle%20-%20Burt%20Bacharach.mp3"},
      {songTitle:"Do You Hear What I Hear?",songArtist:"Native Tongue",songDuration:"3:49",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/20%20Do%20You%20Hear%20What%20I%20Hear_.mp3"},
      {songTitle:"Put The Lights On The Tree",songArtist:"Sufjan Stevens",songDuration:"1:49",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/21%20Put%20The%20Lights%20On%20The%20Tree.mp3"},
      {songTitle:"It Happened In Sun Valley",songArtist:"Randy Van Horne Singers",songDuration:"2:04",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/22%20It%20Happened%20In%20Sun%20Valley.mp3"},
      {songTitle:"Thank You, Dreaded Black Ice",songArtist:"Giant Sand",songDuration:"3:30",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/23%20Thank%20You,%20Dreaded%20Black%20Ice.mp3"},
      {songTitle:"Yellin' At the Xmas Tree",songArtist:"Billy Idol",songDuration:"4:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/24%20Yellin'%20At%20the%20Xmas%20Tree.mp3"},
      {songTitle:"Jingle Bells (Greetings from Esquivel)",songArtist:"Esquivel",songDuration:"2:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/25%20Jingle%20Bells%20(Greetings%20from%20Esquivel).mp3"},
      {songTitle:"Little Jack Frost Get Lost",songArtist:"Frankie Carle &amp; Marjorie Hughes",songDuration:"2:46",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2005/26%20Little%20Jack%20Frost%20Get%20Lost.mp3"}
    ]
  },


  {
    id: 2004,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2004/cover.jpeg",
    albumTitle: "#7: Xmas Card 2004: Santa's Little Helpers",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/2004.zip",
    songs: [
      {songTitle:"Snow Miser",songArtist:"Crash Vinyl",songDuration:"1:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/01%20Snow%20Miser.mp3"},
      {songTitle:"Peanuts",songArtist:"Jeff Adkins",songDuration:"2:04",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/02%20Peanuts.mp3"},
      {songTitle:"Baby It's Cold Outside",songArtist:"Leon Redbone/Zooey Deschanel",songDuration:"3:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/03%20Baby%20It's%20Cold%20Outside.mp3"},
      {songTitle:"Merry Christmas I Fucked Your Snowman",songArtist:"Showcase Showdown",songDuration:"2:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/04%20Merry%20Christmas%20I%20Fucked%20Your%20Snowman.mp3"},
      {songTitle:"Jingle Bells",songArtist:"Bob Dalpe",songDuration:"3:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/05%20Jingle%20Bells.mp3"},
      {songTitle:"It's Christmas Time (Celebrate)",songArtist:"Beat Symphony",songDuration:"3:21",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/06%20It's%20Christmas%20Time%20(Celebrate).mp3"},
      {songTitle:"Jingle Bells (Dan the Automator)",songArtist:"Dean Martin",songDuration:"2:47",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/07%20Jingle%20Bells%20(Dan%20the%20Automator).mp3"},
      {songTitle:"A Marshmellow World",songArtist:"Johnny Mathis",songDuration:"2:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/08%20A%20Marshmellow%20World.mp3"},
      {songTitle:"Christmas (Baby Please Come Home)",songArtist:"Death Cab for Cutie",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/09%20Christmas%20(Baby%20Please%20Come%20Home).mp3"},
      {songTitle:"Rudolph The Read-Nosed Reindeer (Japanese Version)",songArtist:"Petty Booka",songDuration:"2:50",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/10%20Rudolph%20The%20Read-Nosed%20Reindeer%20(Japanese%20Version).mp3"},
      {songTitle:"A Wonderful Christmas Time",songArtist:"[DARYL]",songDuration:"3:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/11%20A%20Wonderful%20Christmas%20Time.mp3"},
      {songTitle:"Christmas Rhapsody",songArtist:"Pledge Drive",songDuration:"5:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/12%20Christmas%20Rhapsody.mp3"},
      {songTitle:"River",songArtist:"Travis",songDuration:"3:53",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/13%20River.mp3"},
      {songTitle:"Jingle Bells Hop",songArtist:"Sharpshooters",songDuration:"3:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/14%20Jingle%20Bells%20Hop.mp3"},
      {songTitle:"White Christmas",songArtist:"Zakk Wylde",songDuration:"2:51",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/15%20White%20Christmas.mp3"},
      {songTitle:"O Holy Night",songArtist:"Kaki King",songDuration:"3:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/16%20O%20Holy%20Night.mp3"},
      {songTitle:"Blue Christmas",songArtist:"Bright Eyes",songDuration:"2:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/17%20Blue%20Christmas.mp3"},
      {songTitle:"Donde Esta Santa Claus",songArtist:"Augie Rios",songDuration:"2:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/18%20Donde%20Esta%20Santa%20Claus.mp3"},
      {songTitle:"I Believe In Father Christmas",songArtist:"Greg Lake",songDuration:"3:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/19%20I%20Believe%20In%20Father%20Christmas.mp3"},
      {songTitle:"Mele Kalikimaka",songArtist:"Nick Hexum From 311",songDuration:"2:26",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/20%20Mele%20Kalikimaka.mp3"},
      {songTitle:"Must Be Santa (Polka)",songArtist:"Brave Combo",songDuration:"4:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/21%20Must%20Be%20Santa%20(Polka).mp3"},
      {songTitle:"Last Christmas",songArtist:"Evil Beaver",songDuration:"4:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/22%20Last%20Christmas.mp3"},
      {songTitle:"Snowball",songArtist:"Jimmy Fallon",songDuration:"1:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/23%20Snowball.mp3"},
      {songTitle:"Little Toy Trains",songArtist:"Roger Miller",songDuration:"2:05",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/24%20Little%20Toy%20Trains.mp3"},
      {songTitle:"Just Like Christmas",songArtist:"Low",songDuration:"3:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/25%20Just%20Like%20Christmas.mp3"},
      {songTitle:"Most Wonderful Time of the Year",songArtist:"In Memory",songDuration:"2:21",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2004/26%20Most%20Wonderful%20Time%20of%20the%20Year.mp3"}

    ]
  },


  {
    id: 2003,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2003/cover.jpeg",
    albumTitle: "#6: Xmas Card 2003: Songs for the Steakhouse",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/2003.zip",
    songs: [
      {songTitle:"Leave a Message",songArtist:"Quad City DJ's",songDuration:"0:39",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/01%20Leave%20a%20Message.mp3"},
      {songTitle:"Frosty the Snowman",songArtist:"Danny Kaye",songDuration:"2:33",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/02%20Frosty%20the%20Snowman.mp3"},
      {songTitle:"The Sugar Plum Glutton",songArtist:"Starborg",songDuration:"3:04",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/03%20The%20Sugar%20Plum%20Glutton.mp3"},
      {songTitle:"Santa Train",songArtist:"Patty Loveless",songDuration:"2:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/04%20Santa%20Train.mp3"},
      {songTitle:"Christmas at the Zoo",songArtist:"Flaming Lips",songDuration:"3:07",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/05%20Christmas%20at%20the%20Zoo.mp3"},
      {songTitle:"Nuttin' for Christmas",songArtist:"Spike Jones",songDuration:"1:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/06%20Nuttin'%20for%20Christmas.mp3"},
      {songTitle:"I've Got My Love to Keep Me Warm (Stuhr Remix)",songArtist:"Kay Starr",songDuration:"3:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/07%20I've%20Got%20My%20Love%20to%20Keep%20Me%20Warm%20(Stuhr%20Remix).mp3"},
      {songTitle:"The Peppermint Stick Man",songArtist:"Randall Reed &amp; The Forerunners",songDuration:"2:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/08%20The%20Peppermint%20Stick%20Man.mp3"},
      {songTitle:"Lil' Bass Boi",songArtist:"B-Fast And G-Slow",songDuration:"3:34",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/09%20Lil'%20Bass%20Boi.mp3"},
      {songTitle:"My Two Front Teeth",songArtist:"Petty Booka",songDuration:"2:39",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/10%20My%20Two%20Front%20Teeth.mp3"},
      {songTitle:"What Do The Lonely Do At Christmas",songArtist:"The Emotions",songDuration:"3:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/11%20What%20Do%20The%20Lonely%20Do%20At%20Christmas.mp3"},
      {songTitle:"Step Into Christmas",songArtist:"Elton John",songDuration:"4:26",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/12%20Step%20Into%20Christmas.mp3"},
      {songTitle:"Things I Want",songArtist:"Tenacious D",songDuration:"3:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/13%20Things%20I%20Want.mp3"},
      {songTitle:"Santa Came On A Nuclear Missile",songArtist:"Heather Noel",songDuration:"2:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/14%20Santa%20Came%20On%20A%20Nuclear%20Missile.mp3"},
      {songTitle:"What I Want For Christmas",songArtist:"Macy Gray",songDuration:"3:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/15%20What%20I%20Want%20For%20Christmas.mp3"},
      {songTitle:"Santa Claus Is Back in Town",songArtist:"The Mavericks",songDuration:"3:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/16%20Santa%20Claus%20Is%20Back%20in%20Town.mp3"},
      {songTitle:"Who Took The Merry Out Of Christmas",songArtist:"The Staple Singers",songDuration:"2:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/17%20Who%20Took%20The%20Merry%20Out%20Of%20Christmas.mp3"},
      {songTitle:"Let It Snow!",songArtist:"Trisha Yearw",songDuration:"2:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/18%20Let%20It%20Snow!.mp3"},
      {songTitle:"Deck the Halls",songArtist:"Bring a Torch, Jeannette, Isabella - Smokey Robinson &amp; The Miracles",songDuration:"4:07",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/19%20Deck%20the%20Halls%20_%20Bring%20a%20Torch,%20Jeannette,%20Isabella.mp3"},
      {songTitle:"Dina-A-Ling, The Christmas Bell",songArtist:"Conway Twitty",songDuration:"3:50",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/20%20Dina-A-Ling,%20The%20Christmas%20Bell.mp3"},
      {songTitle:"The Christmas Song",songArtist:"Jimmy Smith",songDuration:"4:34",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/21%20The%20Christmas%20Song.mp3"},
      {songTitle:"Christmas Mem'ries",songArtist:"Rosemary Clooney",songDuration:"3:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/22%20Christmas%20Mem'ries.mp3"},
      {songTitle:"My Christmas List",songArtist:"Simple Plan",songDuration:"3:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/23%20My%20Christmas%20List.mp3"},
      {songTitle:"Rudolph the Red-Nosed Reindeer",songArtist:"Jack Johnson",songDuration:"2:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2003/24%20Rudolph%20the%20Red-Nosed%20Reindeer.mp3"}
    ]
  },


  {
    id: 2002,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2002/cover.jpeg",
    albumTitle: "#5: Xmas Card 2002: Oh Christmas Tree",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/2002.zip",
    songs: [
      {songTitle:"Holiday Road",songArtist:"Lindsey Buckingham",songDuration:"2:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/01%20Holiday%20Road.mp3"},
      {songTitle:"Glow Worm",songArtist:"Mel Torme",songDuration:"3:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/02%20Glow%20Worm.mp3"},
      {songTitle:"Bizarre Christmas Incident",songArtist:"Ben Folds Five",songDuration:"2:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/03%20Bizarre%20Christmas%20Incident.mp3"},
      {songTitle:"Rudolph the Red Nosed Reindeer",songArtist:"Rosemary Clooney",songDuration:"2:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/04%20Rudolph%20the%20Red%20Nosed%20Reindeer.mp3"},
      {songTitle:"Thank God It's Christmas",songArtist:"Queen",songDuration:"4:21",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/05%20Thank%20God%20It's%20Christmas.mp3"},
      {songTitle:"An Old Christmas Card",songArtist:"Jim Reeves",songDuration:"2:52",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/06%20An%20Old%20Christmas%20Card.mp3"},
      {songTitle:"Country Christmas",songArtist:"Loretta Lynn &amp; Conway Twitty",songDuration:"2:07",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/07%20Country%20Christmas.mp3"},
      {songTitle:"Let It Snow",songArtist:"unknown artist",songDuration:"1:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/08%20Let%20It%20Snow.mp3"},
      {songTitle:"If There's A God",songArtist:"Smashing Pumpkins &amp; Radiohead",songDuration:"3:01",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/09%20If%20There's%20A%20God.mp3"},
      {songTitle:"Merry Christmas Babt",songArtist:"Stevie Wonder &amp; Wyclef Jean",songDuration:"5:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/10%20Merry%20Christmas%20Babt.mp3"},
      {songTitle:"Mistletoe &amp; Holly",songArtist:"Frank Sinatra",songDuration:"2:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/11%20Mistletoe%20%26%20Holly.mp3"},
      {songTitle:"God Rest Ye Merry Gentelman",songArtist:"Barenaked Ladies &amp; Sarah McLachlan",songDuration:"3:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/12%20God%20Rest%20Ye%20Merry%20Gentelman.mp3"},
      {songTitle:"Old Toy Trains",songArtist:"Nana Mouskouri",songDuration:"2:52",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/13%20Old%20Toy%20Trains.mp3"},
      {songTitle:"Winter Wonderland",songArtist:"Macy Gray",songDuration:"2:57",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/14%20Winter%20Wonderland.mp3"},
      {songTitle:"The Little Drummer Boy",songArtist:"Alex Lifeson",songDuration:"3:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/15%20The%20Little%20Drummer%20Boy.mp3"},
      {songTitle:"First Noel (I Like Christmas)",songArtist:"Eve 6",songDuration:"2:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/16%20First%20Noel%20(I%20Like%20Christmas).mp3"},
      {songTitle:"Good Old Fashioned Country Christmas",songArtist:"Buck Owens",songDuration:"2:39",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/17%20Good%20Old%20Fashioned%20Country%20Christmas.mp3"},
      {songTitle:"Sleigh Ride",songArtist:"Ronnettes",songDuration:"3:08",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/18%20Sleigh%20Ride.mp3"},
      {songTitle:"Tell Me  A Story (About The Night Before) - Hilary Duff",songArtist:"Lil' Romeo",songDuration:"3:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/19%20Tell%20Me%20%20A%20Story%20(About%20The%20Night%20Before).mp3"},
      {songTitle:"Have Yourself A Merry Little Christmas",songArtist:"Coldplay",songDuration:"2:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/20%20Have%20Yourself%20A%20Merry%20Little%20Christmas.mp3"},
      {songTitle:"Maybe Next Christmas",songArtist:"George  Jones",songDuration:"2:13",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/21%20Maybe%20Next%20Christmas.mp3"},
      {songTitle:"Happy Holiday's Y'all",songArtist:"Robert Earl Keen",songDuration:"9:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2002/22%20Happy%20Holiday's%20Y'all.mp3"}
    ]
  },


  {
    id: 2001,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2001/cover.jpeg",
    albumTitle: "#4: Xmas Card 2001: A Christmas Odyssey",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/2001.zip",
    songs: [
      {songTitle:"Ding Dong, Ding Dong",songArtist:"George Harrison",songDuration:"3:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/01%20Ding%20Dong,%20Ding%20Dong.mp3"},
      {songTitle:"Sleigh Ride",songArtist:"Mel Torme",songDuration:"2:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/02%20Sleigh%20Ride.mp3"},
      {songTitle:"Back Door Santa",songArtist:"Clarence Carter",songDuration:"2:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/03%20Back%20Door%20Santa.mp3"},
      {songTitle:"Christmas Time",songArtist:"The Pretenders",songDuration:"3:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/04%20Christmas%20Time.mp3"},
      {songTitle:"Medly",songArtist:"Henry Mancini",songDuration:"3:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/05%20Medly.mp3"},
      {songTitle:"Christmas In Jamaica",songArtist:"Toni Braxton",songDuration:"4:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/06%20Christmas%20In%20Jamaica.mp3"},
      {songTitle:"Merry Christmas From The Family",songArtist:"Robert Earl Keen",songDuration:"3:57",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/07%20Merry%20Christmas%20From%20The%20Family.mp3"},
      {songTitle:"The Merry Christmas Polka",songArtist:"Jim Reeves",songDuration:"2:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/08%20The%20Merry%20Christmas%20Polka.mp3"},
      {songTitle:"Christmas At K-Mart",songArtist:"Root Boy Slim",songDuration:"2:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/09%20Christmas%20At%20K-Mart.mp3"},
      {songTitle:"Hawaiian Christmas Song",songArtist:"Bing Crosby",songDuration:"2:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/10%20Hawaiian%20Christmas%20Song.mp3"},
      {songTitle:"All I Want For Christmas Is My Methadone",songArtist:"Lonelyland",songDuration:"4:01",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/11%20All%20I%20Want%20For%20Christmas%20Is%20My%20Methadone.mp3"},
      {songTitle:"Santa Looked A Lot Like Daddy",songArtist:"Buck Owens",songDuration:"2:17",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/12%20Santa%20Looked%20A%20Lot%20Like%20Daddy.mp3"},
      {songTitle:"Dominick The Italian Christmas Donkey",songArtist:"Lou Monte",songDuration:"2:35",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/13%20Dominick%20The%20Italian%20Christmas%20Donkey.mp3"},
      {songTitle:"White Christmas",songArtist:"The Drifters",songDuration:"2:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/14%20White%20Christmas.mp3"},
      {songTitle:"Hard Candy Christmas",songArtist:"Dolly Parton",songDuration:"3:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/15%20Hard%20Candy%20Christmas.mp3"},
      {songTitle:"I Want A Hippo For Christmas",songArtist:"Gayla Peevey",songDuration:"2:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/16%20I%20Want%20A%20Hippo%20For%20Christmas.mp3"},
      {songTitle:"Blue Christmas",songArtist:"Miles Davis",songDuration:"2:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/17%20Blue%20Christmas.mp3"},
      {songTitle:"Please Come Home For Christmas",songArtist:"Aaron Neville",songDuration:"2:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/18%20Please%20Come%20Home%20For%20Christmas.mp3"},
      {songTitle:"Father Christmas",songArtist:"The Kinks",songDuration:"3:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/19%20Father%20Christmas.mp3"},
      {songTitle:"Christmas In Prison",songArtist:"John Prine",songDuration:"3:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/20%20Christmas%20In%20Prison.mp3"},
      {songTitle:"Christmas Rappin'",songArtist:"Curtis Blow",songDuration:"4:01",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/21%20Christmas%20Rappin'.mp3"},
      {songTitle:"Christmas Sucks",songArtist:"Tom Waits &amp; Peter Murphy",songDuration:"2:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2001/22%20Christmas%20Sucks.mp3"}
    ]
  },


  {
    id: 2000,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/2000/cover.jpeg",
    albumTitle: "#3: Xmas Card 2000: Another Fruitcake",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/2000.zip",
    songs: [
      {songTitle:"We Just Go Nuts At Christmastime",songArtist:"They Might Be Giants",songDuration:"1:23",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/01%20We%20Just%20Go%20Nuts%20At%20Christmastime.mp3"},
      {songTitle:"Have A Holly Jolly Christmas",songArtist:"Burl Ives",songDuration:"2:20",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/02%20Have%20A%20Holly%20Jolly%20Christmas.mp3"},
      {songTitle:"Little Drummer Boy",songArtist:"Love Spirals Downwards",songDuration:"4:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/03%20Little%20Drummer%20Boy.mp3"},
      {songTitle:"We're A Couple Of Misfits",songArtist:"Rudolph &amp; The Dentist Elf",songDuration:"1:25",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/04%20We're%20A%20Couple%20Of%20Misfits.mp3"},
      {songTitle:"Carol Of The Bells",songArtist:"Harry Connick Jr",songDuration:"3:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/05%20Carol%20Of%20The%20Bells.mp3"},
      {songTitle:"Spread A Little Love On Christmas Day",songArtist:"Destiny's Child",songDuration:"3:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/06%20Spread%20A%20Little%20Love%20On%20Christmas%20Day.mp3"},
      {songTitle:"I Say Mommy Kissing Santa Claus",songArtist:"Tenchi-Muyo! (Sasami)",songDuration:"3:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/07%20I%20Say%20Mommy%20Kissing%20Santa%20Claus.mp3"},
      {songTitle:"I Bought You A Plastiic Star",songArtist:"Michael Franks",songDuration:"5:01",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/08%20I%20Bought%20You%20A%20Plastiic%20Star.mp3"},
      {songTitle:"Santa Baby",songArtist:"Rev Run &amp; The Christmas All-Stars",songDuration:"4:06",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/09%20Santa%20Baby.mp3"},
      {songTitle:"Merry Christmas",songArtist:"The Ramones",songDuration:"2:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/10%20Merry%20Christmas.mp3"},
      {songTitle:"Last Christmas",songArtist:"Wham!",songDuration:"6:48",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/11%20Last%20Christmas.mp3"},
      {songTitle:"Christmas In The City",songArtist:"Mary J Blige",songDuration:"4:40",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/12%20Christmas%20In%20The%20City.mp3"},
      {songTitle:"O' Holly Night",songArtist:"N'Sync",songDuration:"3:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/13%20O'%20Holly%20Night.mp3"},
      {songTitle:"Careless Santa",songArtist:"Mondo Puff",songDuration:"2:18",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/14%20Careless%20Santa.mp3"},
      {songTitle:"I Don't Have A Christmas Tree",songArtist:"Mark Mothersbaugh",songDuration:"5:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/15%20I%20Don't%20Have%20A%20Christmas%20Tree.mp3"},
      {songTitle:"Up On The House Top",songArtist:"The Jackson 5",songDuration:"3:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/16%20Up%20On%20The%20House%20Top.mp3"},
      {songTitle:"My First Christmas As A Woman",songArtist:"The Vandals",songDuration:"2:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/17%20My%20First%20Christmas%20As%20A%20Woman.mp3"},
      {songTitle:"Lonely Christmas Eve",songArtist:"Ben Folds Five",songDuration:"3:22",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/18%20Lonely%20Christmas%20Eve.mp3"},
      {songTitle:"Jesus Was A Dreidel Spinner",songArtist:"Jill Sobule",songDuration:"2:29",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/19%20Jesus%20Was%20A%20Dreidel%20Spinner.mp3"},
      {songTitle:"Christmas Day",songArtist:"Dido",songDuration:"4:03",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_2000/20%20Christmas%20Day.mp3"}
    ]
  },


  {
    id: 1999,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/1999/cover.jpeg",
    albumTitle: "#2: Xmas Card 1999: Worse Than Fruitcake",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/1999.zip",
    songs: [
      {songTitle:"Xmas On A Boat",songArtist:"Coin",songDuration:"0:32",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/01%20Xmas%20On%20A%20Boat.mp3"},
      {songTitle:"Merry Christmas From The Family",songArtist:"Jill Sobule",songDuration:"4:26",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/02%20Merry%20Christmas%20From%20The%20Family%201.mp3"},
      {songTitle:"All I Want For Ismas",songArtist:"Jacob Mille &amp; Ray I",songDuration:"2:59",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/03%20All%20I%20Want%20For%20Ismas.mp3"},
      {songTitle:"(Everybody's Waiting For) The Man With The Bag",songArtist:"Kay Starr",songDuration:"2:44",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/04%20(Everybody's%20Waiting%20For)%20The%20Man%20With%20The%20Bag.mp3"},
      {songTitle:"Millie Pulled A Pistol On Santa",songArtist:"The Roots",songDuration:"4:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/05%20Millie%20Pulled%20A%20Pistol%20On%20Santa.mp3"},
      {songTitle:"Carolina Christmas",songArtist:"Squirrel Nut Zippers",songDuration:"1:54",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/06%20Carolina%20Christmas.mp3"},
      {songTitle:"Frosty The Snowman",songArtist:"Cocteau Twins",songDuration:"3:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/07%20Frosty%20The%20Snowman.mp3"},
      {songTitle:"Overture",songArtist:"Duke Ellington",songDuration:"3:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/08%20Overture.mp3"},
      {songTitle:"Christmas Wrapping",songArtist:"The Waitresses",songDuration:"5:26",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/09%20Christmas%20Wrapping.mp3"},
      {songTitle:"The Christmas Song",songArtist:"Mel Torme",songDuration:"2:11",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/10%20The%20Christmas%20Song.mp3"},
      {songTitle:"25th December",songArtist:"Everything But The Girl",songDuration:"4:05",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/11%2025th%20December.mp3"},
      {songTitle:"Baby It's Cold Outside",songArtist:"Dean Martin",songDuration:"2:24",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/12%20Baby%20It's%20Cold%20Outside.mp3"},
      {songTitle:"Fairytale Of New York (Featuring Kristy MacColl)",songArtist:"The Pogue",songDuration:"4:35",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/13%20Fairytale%20Of%20New%20York%20(Featuring%20Kristy%20MacColl).mp3"},
      {songTitle:"God Rest Ye Merry Gentleman",songArtist:"Viva Voce",songDuration:"2:11",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/14%20God%20Rest%20Ye%20Merry%20Gentleman.mp3"},
      {songTitle:"One Christmas Catalog",songArtist:"Captain Sensible",songDuration:"4:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/15%20One%20Christmas%20Catalog.mp3"},
      {songTitle:"What Will Santa Claus Say When He Finds Everybody Swinging?",songArtist:"Louis Prima",songDuration:"3:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/16%20What%20Will%20Santa%20Claus%20Say%20When%20He%20Finds%20Everybody%20Swinging_.mp3"},
      {songTitle:"Christmas",songArtist:"The Posies",songDuration:"3:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/17%20Christmas.mp3"},
      {songTitle:"Deck The Halls With Boogie Woogie",songArtist:"Katie Webster",songDuration:"3:01",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/18%20Deck%20The%20Halls%20With%20Boogie%20Woogie.mp3"},
      {songTitle:"You're A Mean One Mr. Grinch",songArtist:"Sixpence None The Richer",songDuration:"3:08",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/19%20You're%20A%20Mean%20One%20Mr.%20Grinch.mp3"},
      {songTitle:"Santa Claus Goes Straight To The Ghetto (Featuring Nate Dogg)",songArtist:"Snoop Doggy Dogg",songDuration:"5:52",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/20%20Santa%20Claus%20Goes%20Straight%20To%20The%20Ghetto%20(Featuring%20Nate%20Dogg).mp3"},
      {songTitle:"Rudolph The Manic Reindeer",songArtist:"Los Lobos",songDuration:"1:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/21%20Rudolph%20The%20Manic%20Reindeer.mp3"},
      {songTitle:"The Most Offensive Song Ever",songArtist:"Kenny McCormic &amp; Mr. Hankey",songDuration:"3:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1999/22%20The%20Most%20Offensive%20Song%20Ever.mp3"}
    ]
  },


  {
    id: 1998,
    albumImage: "http://funkfinger.com.s3.amazonaws.com/xmas/images/1998/cover.jpeg",
    albumTitle: "#1: Xmas Card 1998: The Begining",
    albumDownloadUrl: "http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/1998.zip",
    songs: [
      {songTitle:"Heat Miser",songArtist:"Heat Miser (from The Year Without Santa Claus)",songDuration:"1:55",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/01%20Heat%20Miser.mp3"},
      {songTitle:"Papa Noel",songArtist:"Brenda Lee",songDuration:"2:28",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/02%20Papa%20Noel.mp3"},
      {songTitle:"Christmas in Hollis",songArtist:"Run DMC",songDuration:"3:00",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/03%20Christmas%20in%20Hollis.mp3"},
      {songTitle:"Daddy's Drinking Up Our Christmas",songArtist:"Commander Cody",songDuration:"2:34",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/04%20Daddy's%20Drinking%20Up%20Our%20Christmas.mp3"},
      {songTitle:"Little Drummer Boy",songArtist:"The Dandy Warhols",songDuration:"3:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/05%20Little%20Drummer%20Boy.mp3"},
      {songTitle:"Jingle Bells",songArtist:"Herb Alpert &amp; The Tijuana Brass Band",songDuration:"2:37",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/06%20Jingle%20Bells.mp3"},
      {songTitle:"Christmas in the Congo",songArtist:"The Marquees",songDuration:"2:18",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/07%20Christmas%20in%20the%20Congo.mp3"},
      {songTitle:"Here Comes Santa Claus",songArtist:"Elvis",songDuration:"1:58",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/08%20Here%20Comes%20Santa%20Claus.mp3"},
      {songTitle:"Drummer Boy",songArtist:"Michigan &amp; Smiley",songDuration:"3:41",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/09%20Drummer%20Boy.mp3"},
      {songTitle:"Frosty the Snowman",songArtist:"Elle Fitzgerald",songDuration:"2:14",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/10%20Frosty%20the%20Snowman.mp3"},
      {songTitle:"Keegan's Christmas",songArtist:"Marcy Playground",songDuration:"2:45",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/11%20Keegan's%20Christmas.mp3"},
      {songTitle:"Santa Baby",songArtist:"Madonna",songDuration:"2:36",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/12%20Santa%20Baby.mp3"},
      {songTitle:"Merry Christmas Baby",songArtist:"Southern Culture on the Skids",songDuration:"3:12",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/13%20Merry%20Christmas%20Baby.mp3"},
      {songTitle:"Merry Xmess",songArtist:"Sun 60",songDuration:"4:27",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/14%20Merry%20Xmess.mp3"},
      {songTitle:"Santa Claus is Coming to Town (with Cindi Lauper)",songArtist:"Frank Sinatra",songDuration:"2:39",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/15%20Santa%20Claus%20is%20Coming%20to%20Town%20(with%20Cindi%20Lauper).mp3"},
      {songTitle:"Millie Pulled a Pistol on Santa",songArtist:"De La Soul",songDuration:"4:09",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/16%20Millie%20Pulled%20a%20Pistol%20on%20Santa.mp3"},
      {songTitle:"Po' Folks Christmas",songArtist:"Bill Anderson",songDuration:"3:16",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/17%20Po'%20Folks%20Christmas.mp3"},
      {songTitle:"Sleigh Ride",songArtist:"Squirrel Nut Zippers",songDuration:"3:11",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/18%20Sleigh%20Ride.mp3"},
      {songTitle:"The Little Drum Machine Boy",songArtist:"Beck",songDuration:"7:02",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/19%20The%20Little%20Drum%20Machine%20Boy.mp3"},
      {songTitle:"The Night Before Christmas",songArtist:"Carly Simon",songDuration:"3:42",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/20%20The%20Night%20Before%20Christmas.mp3"},
      {songTitle:"Amazing Grace",songArtist:"Ted Hawkins",songDuration:"3:43",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/21%20Amazing%20Grace.mp3"},
      {songTitle:"Hallelujah!",songArtist:"Handel",songDuration:"3:56",songUrl:"http://funkfinger.com.s3.amazonaws.com/xmas/albums/xmas_1998/22%20Hallelujah!.mp3"}
    ]
  }
];

function convertArrayToRows(data, cols) {
  var newArray = [];
  var rowArray = [];
  var counter = 0;
  data.forEach(function(element, index) {
    counter++;
    rowArray.push(element);
    if(counter == cols) {
      newArray.push(rowArray);
      counter = 0;
      rowArray = [];
    }
  });
  if(counter != 0) {
    newArray.push(rowArray);
  }
  return newArray;  
}


ReactDOM.render(
  <AlbumGrid data={convertArrayToRows(data,4)} />,
  document.getElementById('content')
);