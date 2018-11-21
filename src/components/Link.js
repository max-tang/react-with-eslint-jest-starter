// Link.react.js
import React from 'react';
import PropTypes from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  _onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    const { page, children } = this.props;
    return (
      <a
        className={this.state.class}
        href={page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
