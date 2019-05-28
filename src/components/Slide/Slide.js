import React from 'react';
import './Slide.css';

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: null,
      animateTitle: '',
      animateSubtitle: '',
    }
  }

  componentDidMount() {
    this.setState({
      index: this.props.index.index,
      viewType: this.props.viewType,
    });
  }

  componentDidUpdate() {
    const newViewType = this.props.viewType;
    if (this.state.viewType !== newViewType) {
      if (newViewType === 'full') { // this slide is in view
        if (this.props.index.prevIndex < this.props.index.index) {
          this.setState({
            animateTitle: 'slide-from-right',
            animateSubtitle: 'slide-from-right-slow',
          });
        }
        else if (this.props.index.prevIndex > this.props.index.index) {
          this.setState({
            animateTitle: 'slide-from-left',
            animateSubtitle: 'slide-from-left-slow',
          });
        }
      }
      else { // this slide is out of view
        this.setState({
          animateTitle: 'hidden',
          animateSubtitle: 'hidden',
        })
      }
      this.setState({
        viewType: newViewType,
      });
    }
  }

  render() {
    let numberCircle = "number-circle " + this.props.gradient;
    let bottomHalf = 'split bottom background-photo '
      + this.props.backgroundPhoto;
    return (
      <div style={{height: "100vh"}}>
        <div className="split top">
          <div className="centered">
            <div className={numberCircle}>
              <div className="number">
                {this.props.number}
              </div>
            </div>
            <div className={`place-title ${this.state.animateTitle}`}>
              {this.props.placeTitle}
            </div>
            <div className={`place-subtitle ${this.state.animateSubtitle}`}>
              {this.props.placeSubtitle}
            </div>
          </div>
        </div>
        <div className={bottomHalf}>
          <div className="centered">
            <div className="white-circle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
