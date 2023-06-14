import React, { Component } from "react";
import style from "../styles/style.module.scss";
import img1 from "../images/cup.png";
import img2 from "../images/Untitled.jpg";
import img3 from "../images/coffee-cup.jpg";

const images = [img1, img2, img3];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            image: images,
        };
    }

    nextImage = () => {
        if (this.state.counter < images.length - 1) {
            this.setState((pervState) => ({
                counter: pervState.counter + 1,
            }));
        } else {
            this.setState({
                counter: 0,
            });
        }
    };

    pervImage = () => {
        if (this.state.counter > 0) {
            this.setState((pervState) => ({
                counter: pervState.counter - 1,
            }));
        } else {
            this.setState({
                counter: images.length - 1,
            });
        }
    };

    render() {
        const { counter, image } = this.state;
        return (
            <div>
                <div className={style["slider-box"]}>
                    <button className={style.next} onClick={this.nextImage}>
                        Next
                    </button>
                    <img
                        src={image[counter]}
                        value={this.state.nextImg}
                        alt="cup"
                    />
                    <button className={style.perv} onClick={this.pervImage}>
                        Pervious
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;
