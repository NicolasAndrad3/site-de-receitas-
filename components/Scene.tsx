"use client"

import { useRef, useEffect, useState } from "react"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"

type SceneProps = {
  autoReturnSpeed?: number
}

function Model() {
  const { scene } = useGLTF("/modelo3d.glb")
  return <primitive object={scene} scale={2} />
}

export default function Scene({ autoReturnSpeed = 1.6 }: SceneProps) {
  const controlsRef = useRef<any>(null)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [shouldReturn, setShouldReturn] = useState(false)
  const clockRef = useRef(0)

  useEffect(() => {
    const controls = controlsRef.current
    if (!controls) return

    const handleStart = () => {
      setIsUserInteracting(true)
      setShouldReturn(false)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    const handleEnd = () => {
      setIsUserInteracting(false)
      timeoutRef.current = setTimeout(() => {
        setShouldReturn(true)
      }, 2000)
    }

    controls.addEventListener("start", handleStart)
    controls.addEventListener("end", handleEnd)

    return () => {
      controls.removeEventListener("start", handleStart)
      controls.removeEventListener("end", handleEnd)
    }
  }, [])

  useFrame(() => {
    const controls = controlsRef.current
    if (!controls) return

    if (!isUserInteracting && !shouldReturn) {
      controls.autoRotate = true
      controls.autoRotateSpeed = 2
    } else {
      controls.autoRotate = false
    }

    if (shouldReturn && !isUserInteracting) {
      const cam = controls.object
      const target = controls.target

      gsap.to(cam.position, {
        x: 0,
        y: 0,
        z: 5,
        duration: autoReturnSpeed,
        ease: "power3.out",
        onUpdate: () => {
          cam.lookAt(target)
          controls.update()
        },
      })

      gsap.to(target, {
        x: 0,
        y: 0,
        z: 0,
        duration: autoReturnSpeed,
        ease: "power3.out"
      })

      setShouldReturn(false)
    }
  })

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI}
        minPolarAngle={-Math.PI}
      />
    </>
  )
}