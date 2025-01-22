import { useProgress } from '@react-three/drei'
import './Loader.css'

interface LoaderScreenProps {
  onLoadComplete: () => void
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onLoadComplete }) => {
  const { progress, active } = useProgress()

  // Call onLoadComplete when loading finishes
  if (progress === 100 && active) onLoadComplete()

  return (
    <>
      <div className="bg-yellow-400">
        <h1 className="flex items-center justify-center text-3xl font-bold">
          Loading...
        </h1>
      </div>
      {/* <div className={`loadingScreen ${progress ? "loadingScreen--started" : ""}`}>
                <div className="loadingScreen__progress">
                    <div
                        className="loadingScreen__progress__value"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>
                <div className="loadingScreen__board">
                    <h1 className="loadingScreen__title">Loading...</h1>
                    <button
                        className="loadingScreen__button"
                        disabled={progress < 100}
                        // onClick={onStarted}
                    >
                        Start
                    </button>
                </div>
            </div> */}
      {/* <div className="loadingScreen">
                <h1 className="text-3xl text-white">Loading...</h1>
                <div className="loadingScreen__progress">
                    <div
                        className="loadingScreen__progress__value"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>
            </div> */}
    </>
  )
}

export default LoaderScreen

// old code
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useProgress } from "@react-three/drei";
// import './Loader.css'

// const LoaderScreen = ({ started, onStarted }: any) => {
//     const { progress } = useProgress();
//     return (
//         <>

//         <h1 className="text-3xl text-white">Loading...</h1>
//             {/* <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
//                 <div className="loadingScreen__progress">
//                     <div
//                         className="loadingScreen__progress__value"
//                         style={{
//                             width: `${progress}%`,
//                         }}
//                     />
//                 </div>
//                 <div className="loadingScreen__board">
//                     <h1 className="loadingScreen__title">Please help me!</h1>
//                     <button
//                         className="loadingScreen__button"
//                         disabled={progress < 100}
//                         onClick={onStarted}
//                     >
//                         Start
//                     </button>
//                 </div>
//             </div> */}
//         </>
//     );
// };

// export default LoaderScreen
