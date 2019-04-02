import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = (event) => {
    this.setState({
        settings: {
          bitrate: 12,
          video: {
            resolution: this.state.settings.video.resolution
          }
        }
    })
  }

  handleResolution = (event) => {
    this.setState({
      settings: {
        bitrate: this.state.settings.bitrate,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <button className='bitrate' onClick={this.handleBitrate}>Bitrate</button>
      <button className='resolution' onClick={this.handleResolution}>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
