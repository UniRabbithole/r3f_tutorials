import { createRoot } from "react-dom/client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import "./styles.css"

const root = document.getElementById('root')

const App = () => {
    return <>
        <Canvas>
            <GeoComponent />
            <directionalLight intensity={5} color={'#ff00ff'} />
        </Canvas>
    </>
}

const GeoComponent = () => {
    const ref = useRef()

    useFrame(() => {
        ref.current.rotation.y += 0.01
        ref.current.rotation.x += 0.01
        
    })
    
    return <>
        <mesh ref={ref}>
            <octahedronGeometry />
            <meshPhysicalMaterial 
                color={'#ff00ff'}
                metalness={0.1}
                roughness={0}
                transparent={true}
                opacity={0.5}
                transparency={0.2}
                envMapIntensity={1}
                transmission={0.5}
            />
        </mesh>
    </>
}

createRoot(root).render(<App />)