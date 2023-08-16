'use client'
import { Canvas } from '@react-three/fiber'

type Props = {}

const Stargazer = (props: Props) => {

    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    )

}

export default Stargazer