// components/Model.tsx
import { useGLTF } from "@react-three/drei"

export default function Model() {
  const { scene } = useGLTF("/modelo3d.glb")
  return <primitive object={scene} scale={2} />
}
