import React, {Component} from "react";
import YoutubeVideo from "./YoutubeVideo";
import dummyData from "./DummyData";

export default class App extends Component {
    render() {
        return(
            <div className= "App">
                {dummyData.map(d => {
                return(
                <YoutubeVideo 
                    key={d.vidoeId}
                    videoId={d.vidoeId}
                    videoName={d.videoName}
                    videoLength={d.videoLength}
                    videoDescription= {d.videoDescription}
                    videoAuthor = "외부에서 전달해주는 작성자"
                >
                    {/* 컨텐츠 삽입 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nr2YyEWL1EI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </YoutubeVideo>
                )
                }
                )
                }
            </div>
        )
    }
}