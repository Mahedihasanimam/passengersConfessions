import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import podcastvideo from '../../assets/podcast.mp4';

const Podcast = () => {
    const VideoComponent = ({ videoSrc }) => {
        const [isPlaying, setIsPlaying] = useState(false);
        const videoRef = useRef(null);

        const handlePlayPause = () => {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        };

        return (
            <div className="relative w-full h-56">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="w-full h-56 object-cover rounded-md"
                    onClick={handlePlayPause}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    controls={true} // Hide default controls
                />
                {!isPlaying && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                        <button
                            onClick={handlePlayPause}
                            className="text-white text-4xl"
                            aria-label="Play Video"
                        >
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 6C30.0666 6 24.2664 7.75947 19.3329 11.0559C14.3994 14.3524 10.5543 19.0377 8.28363 24.5195C6.013 30.0013 5.4189 36.0333 6.57646 41.8527C7.73401 47.6721 10.5912 53.0176 14.7868 57.2132C18.9824 61.4088 24.3279 64.266 30.1473 65.4236C35.9667 66.5811 41.9987 65.987 47.4805 63.7164C52.9623 61.4458 57.6477 57.6006 60.9441 52.6671C64.2405 47.7336 66 41.9334 66 36C66 32.0603 65.224 28.1593 63.7164 24.5195C62.2088 20.8797 59.999 17.5726 57.2132 14.7868C54.4275 12.001 51.1203 9.79126 47.4805 8.28361C43.8408 6.77597 39.9397 6 36 6ZM30 49.5V22.5L48 36L30 49.5Z" fill="#B0B0B0" fill-opacity="0.5" />
                            </svg>

                        </button>
                    </div>
                )}
            </div>
        );
    };

    const podcasData = [
        {
            id: 1,
            title: 'Secrets I Can No Longer Keep',
            author: 'Author name',
            pvideo: podcastvideo,
        },
        {
            id: 2,
            title: 'Secrets I Can No Longer Keep',
            author: 'Author name',
            pvideo: podcastvideo,
        },
        {
            id: 3,
            title: 'Secrets I Can No Longer Keep',
            author: 'Author name',
            pvideo: podcastvideo,
        },
        {
            id: 4,
            title: 'Secrets I Can No Longer Keep',
            author: 'Author name',
            pvideo: podcastvideo,
        },
        {
            id: 5,
            title: 'Secrets I Can No Longer Keep',
            author: 'Author name',
            pvideo: podcastvideo,
        },
        {
            id: 6,
            title: 'What I’ve Never Told Anyone',
            author: 'Author name',
            pvideo: podcastvideo,
        },
        {
            id: 7,
            title: 'What I’ve Never Told Anyone',
            author: 'Author name',
            pvideo: podcastvideo,
        },
        {
            id: 8,
            title: 'What I’ve Never Told Anyone',
            author: 'Author name',
            pvideo: podcastvideo,
        },
    ];

    return (
        <div className="container mx-auto px-4 pb-[80px]">
            <div className="max-w-4xl mx-auto">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-center mt-8 text-secondary pb-2">
                    Podcast
                </h1>
                <p className="text-center mt-2 mb-8 text-tertiary">
                    Podcast is a form of digital media that allows people to listen to audio content on-demand, often in the format of a series of episodes or shows.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {podcasData.map((book) => (
                    <div key={book.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]">
                        {/* Using VideoComponent */}
                        <VideoComponent videoSrc={book.pvideo} />
                        <h2 className="text-[20px] font-semibold text-secondary max-w-[250px]">{book.title}</h2>
                        <p className="text-tertiary">{book.author}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-20">
                <Button
                    type="primary"
                    style={{
                        backgroundColor: '#FF0048',
                        color: 'white',
                        height: '35px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                    className="w-1/2 border-none text-white px-6 py-2 rounded-lg"
                >
                    Browse more
                </Button>
            </div>
        </div>
    );
};

export default Podcast;
