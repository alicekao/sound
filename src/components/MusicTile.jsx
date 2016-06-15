import React from 'react';

export default class MusicTile extends React.Component {


  render() {
    return (
      <div
      className = "col-md-2 col-sm-3 col-xs-6"
      onClick={() => {this.props.enqueue(this.props.data)}}>
        <a href="#" className = "thumbnail">
          <img src={this.props.data.artwork_url}/>
        </a>
        {this.props.data.title }
      </div>
    );
  }
};
