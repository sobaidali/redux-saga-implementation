import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions'

import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error, loadImages } = this.props;

        console.log("this is images: ", images)
        return (
            <div className="content">
                <section className="grid">
                    {Object.entries(images).map(([key, image]) => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                <a onClick={() => loadImages()}>Load Images</a>
                {error && <div className='error'>{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
