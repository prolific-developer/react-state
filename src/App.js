

import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Matar Chris',
        bio: 'A passionate React developer',
        imgSrc: 'https://www.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_9798950.htm#query=woman%20with%20laptop&position=32&from_view=keyword&track=ais',
        profession: 'Software Engineer'
      },
      show: false,
      interval: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} width={150} height={270}alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since last mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;

  