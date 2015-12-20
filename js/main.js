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
  var songs = this.props.album.songs.map(function() {
    return(
      
    );
  });
  render: function() {
    return (      
<div className="modal fade" id={this.props.album.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">{this.props.album.albumTitle}</h4>
      </div>
      <div className="modal-body">
        <ol>
          {songs}
        </ol>
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
    albumImage: "http://funkfinger.com/xmas/albums/2015/cover.jpg", 
    albumTitle: "#18: Xmas Card 2015: JOY!"
  },
  {
    id: 2014,
    albumImage: "http://funkfinger.com/xmas/images/2014/cover.jpeg",
    albumTitle: "#17: Xmas Card 2014: Fa La La La La La La La La"
  },
  {
    id: 2013,
    albumImage: "http://funkfinger.com/xmas/images/2013/cover.jpeg",
    albumTitle: "#16: Xmas Card 2013: Sleigh the Season"
  },
  {
    id: 2012,
    albumImage: "http://funkfinger.com/xmas/images/2012/cover.jpeg",
    albumTitle: "#15: Xmas Card 2012: Christmastime Terror"
  },
  {
    id: 2011,
    albumImage: "http://funkfinger.com/xmas/images/2011/cover.jpeg",
    albumTitle: "#14: Xmas Card 2011: Christmas Bundle"
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