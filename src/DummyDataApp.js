import React, {Component} from "react";
import YoutubeVideo from "./YoutubeVideo";
import dummyData from "./DummyData";

// export default class App extends Component {
//     render() {
//         return(
//             <div className= "App">
//                 {dummyData.map(d => {
//                 return(
//                 <YoutubeVideo 
//                     key={d.videoId}
//                     videoId={d.videoId}
//                     videoName={d.videoName}
//                     videoLength={d.videoLength}
//                     videoDescription= {d.videoDescription}
//                 >
//                 </YoutubeVideo>
//                 )
//                 }
//                 )
//                 }
//             </div>
//         )
//     }
// }

function App() {
    return (
        <div className="App">
        {dummyData.map(d => {
        return(
            <YoutubeVideo 
                key={d.vidoeId}
                videoId={d.vidoeId}
                videoName={d.videoName}
                videoLength={d.videoLength}
                videoDescription={d.videoDescription}
        ></YoutubeVideo>
        )
        }
        )}
        </div>
    );
}
export default App;