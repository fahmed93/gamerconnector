import React, { Component } from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

class ProfileTwitch extends Component {
  render() {
    const { profile } = this.props;
    let profileTwitch;
    let twitchUsername;

    if (profile.social && profile.social.twitch) {
      twitchUsername = profile.social.twitch.substring(
        profile.social.twitch.indexOf('twitch.tv/') + 9
      );

      profileTwitch = (
        <div>
          <hr />
          <h3 className="mb-4">Twitch Stream</h3>
          <ReactTwitchEmbedVideo channel={twitchUsername} theme="dark" />
        </div>
      );
    }
    return <div>{profileTwitch}</div>;
  }
}

export default ProfileTwitch;
