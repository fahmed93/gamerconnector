import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      displayIgnInputs: false,
      handle: '',
      team: '',
      website: '',
      games: '',
      location: '',
      status: '',
      twitch: '',
      bio: '',
      twitter: '',
      facebook: '',
      youtube: '',
      instagram: '',
      playstation: '',
      xbox: '',
      steam: '',
      switch: '',
      discord: '',
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Change games array to CSV string
      const gamesCSV = profile.games.join(',');
      profile.games = gamesCSV;
      // Check for empty profile fields
      profile.team = !isEmpty(profile.team) ? profile.team : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : '';
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : '';
      profile.twitch = !isEmpty(profile.social.twitch)
        ? profile.social.twitch
        : '';
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : '';
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : '';
      profile.ingamenames = !isEmpty(profile.ingamenames)
        ? profile.ingamenames
        : {};
      profile.playstation = !isEmpty(profile.ingamenames.playstation)
        ? profile.ingamenames.playstation
        : '';
      profile.xbox = !isEmpty(profile.ingamenames.xbox)
        ? profile.ingamenames.xbox
        : '';
      profile.switch = !isEmpty(profile.ingamenames.switch)
        ? profile.ingamenames.switch
        : '';
      profile.steam = !isEmpty(profile.ingamenames.steam)
        ? profile.ingamenames.steam
        : '';
      profile.discord = !isEmpty(profile.ingamenames.discord)
        ? profile.ingamenames.discord
        : '';
      // Set component fields state
      this.setState({
        handle: profile.handle,
        team: profile.team,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        games: profile.games,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        twitch: profile.twitch,
        youtube: profile.youtube,
        instagram: profile.instagram,
        playstation: profile.playstation,
        xbox: profile.xbox,
        steam: profile.steam,
        switch: profile.switch,
        discord: profile.discord
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      team: this.state.team,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      games: this.state.games,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      twitch: this.state.twitch,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
      playstation: this.state.playstation,
      xbox: this.state.xbox,
      steam: this.state.steam,
      switch: this.state.switch,
      discord: this.state.discord
    };
    this.props.createProfile(profileData, this.props.history);
  };

  render() {
    const { errors, displaySocialInputs, displayIgnInputs } = this.state;

    let ignInputs;
    if (displayIgnInputs) {
      ignInputs = (
        <div>
          <InputGroup
            placeholder="Playstation Network Name"
            name="playstation"
            icon="fab fa-playstation"
            value={this.state.playstation}
            onChange={this.onChange}
            error={errors.playstation}
          />

          <InputGroup
            placeholder="Xbox Gamertag"
            name="xbox"
            icon="fab fa-xbox"
            value={this.state.xbox}
            onChange={this.onChange}
            error={errors.xbox}
          />

          <InputGroup
            placeholder="Nintendo Switch Friend Code"
            name="switch"
            icon="fab fa-nintendo-switch"
            value={this.state.switch}
            onChange={this.onChange}
            error={errors.switch}
          />

          <InputGroup
            placeholder="Steam Username"
            name="steam"
            icon="fab fa-steam"
            value={this.state.steam}
            onChange={this.onChange}
            error={errors.steam}
          />

          <InputGroup
            placeholder="Discord Username"
            name="discord"
            icon="fab fa-discord"
            value={this.state.discord}
            onChange={this.onChange}
            error={errors.discord}
          />
        </div>
      );
    }

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Twitch Channel URL"
            name="twitch"
            icon="fab fa-twitch"
            value={this.state.twitch}
            onChange={this.onChange}
            error={errors.twitch}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select Status', value: 0 },
      { label: 'Professional', value: 'Professional' },
      { label: 'Semi-Professional', value: 'Semi-Professional' },
      { label: 'Streamer', value: 'Streamer' },
      { label: 'Coach', value: 'Coach' },
      { label: 'Analyst', value: 'Analyst' },
      { label: 'Caster', value: 'Caster' },
      { label: 'Free Agent', value: 'Free Agent' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, team name, nickname, etc"
                />

                <SelectListGroup
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="Give us an idea of where you are at in your career"
                />

                <TextFieldGroup
                  placeholder="Team"
                  name="team"
                  value={this.state.team}
                  onChange={this.onChange}
                  error={errors.team}
                  info="Could be your own team or one you work/play for"
                />

                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own or your team's website"
                />

                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City & state suggested (eg. Boston, MA)"
                />

                <TextFieldGroup
                  placeholder="* Games"
                  name="games"
                  value={this.state.games}
                  onChange={this.onChange}
                  error={errors.games}
                  info="Please use comma separated values (eg. Halo 3,League of Legends,Overwatch)"
                />

                <TextAreaFieldGroup
                  placeholder="Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Networks
                  </button>
                  <span className="text-muted"> Optional</span>
                </div>
                {socialInputs}

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displayIgnInputs: !prevState.displayIgnInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add In Game Usernames
                  </button>
                  <span className="text-muted"> Optional</span>
                </div>
                {ignInputs}

                <input
                  value="Submit"
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
