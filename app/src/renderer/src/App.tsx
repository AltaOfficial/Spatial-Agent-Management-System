import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls, Stats } from '@react-three/drei';
import { useState } from 'react';
import { RandomComponent } from './components/RandomComponent';

function App(): React.JSX.Element {
  const [colorBool, setColor] = useState(true);

  return (
    <div>
      <RandomComponent className={'z-10 absolute'} />
      <Canvas className="h-screen!">
        <ambientLight intensity={1} />
        <Grid infiniteGrid={true} sectionColor={'white'} />
        <mesh
          onClick={() => {
            setColor(!colorBool);
          }}
        >
          <sphereGeometry />
          <meshStandardMaterial color={colorBool ? 'hotpink' : 'orange'} />
        </mesh>

        {/* <Stats /> */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

export default App;
