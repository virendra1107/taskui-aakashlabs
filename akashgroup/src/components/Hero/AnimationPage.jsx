import { Canvas } from '@react-three/fiber';
import Animation from './Animation';


const AnimationPage = () => {
  return (
    <div className="relative h-screen w-screen bg-transparent z-10">
      <Canvas camera={{ position: [0, 0, 6], fov:60 }}>
        <Animation />
      </Canvas>
    </div>
  )
}

export default AnimationPage