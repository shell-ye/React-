import Home from 'Pages/home'
import Mine from 'Pages/mine'
import Details from 'Pages/details'
import Search from 'Pages/search'
import Cinemas from 'Pages/cinemas'
import Download from 'Pages/download'
import Video from 'Pages/video'
import VideoPlayer from 'Pages/videoplayer'
import ShortVideo from 'Pages/shortvideo'
import ShortVideoPlayer from 'Pages/shortvideoplayer'
import CinemaList from 'Pages/cinemalist'
import MovieList from 'Pages/movielist'

const table = [{
    path: '/home',
    component: Home
}, {
    path: '/mine',
    component: Mine
}, {
    path: '/details',
    component: Details
}, {
    path: '/search',
    component: Search
}, {
    path: '/cinemas',
    component: Cinemas
}, {
    path: '/download',
    component: Download
}, {
    path: '/video',
    component: Video
}, {
    path: '/videoplayer',
    component: VideoPlayer
}, {
    path: '/shortvideo',
    component: ShortVideo
}, {
    path: '/shortvideoplayer',
    component: ShortVideoPlayer
}, {
    path: '/cinemalist',
    component: CinemaList
}, {
    path: '/movielist',
    component: MovieList
}]

export default table