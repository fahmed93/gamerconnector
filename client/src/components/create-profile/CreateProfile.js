import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      displayIgnInputs: false,
      handle: '',
      team: '',
      website: '',
      location: '',
      status: '',
      twitch: '',
      bio: '',
      games: '',
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
    console.log(profileData);
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
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
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

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
