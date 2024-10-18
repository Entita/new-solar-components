import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment } from "@react-three/drei"
import Loading from './Loading'
import { ProductAdjustments, ProductModel } from '@/types/Model'

export default function RenderModel({ model }: { model: ProductModel }) {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas style={{ position: 'absolute', width: 'calc(100% - 3rem)', height: 'calc(100% - 3rem)', backgroundColor: 'rgb(var(--background))' }} shadows camera={{ position: [-2, 1, -3.8], fov: 45 }}>
        <Environment preset='sunset' resolution={256} blur={1} />
        <Model model={model} />
        <OrbitControls autoRotate autoRotateSpeed={0.5} maxDistance={5} minDistance={1.5} enableZoom minZoom={.1} maxZoom={2} enablePan={false} />
      </Canvas>
    </Suspense>
  )
}

function Model({ model }: { model: ProductModel }) {
  const { nodes } = useGLTF(`/models/${model}/${model}.gltf`)
  const modelAdjustment = React.useMemo(() => adjustments[model], [model, adjustments])

  return (
    <>
      <group>
        {Object.values(nodes).filter((node: any) => node.isMesh).map((node: any, index) =>
          <mesh key={index} {...modelAdjustment} receiveShadow castShadow geometry={node.geometry} material={node.material} />
        )}
      </group>
    </>
  )
}

const adjustments: ProductAdjustments = {
  'hak': {
    scale: 0.0125,
    position: [0.1, -0.35, -0.8],
  },
  'imbus': {
    scale: 0.05,
    position: [0, -0.1, 1],
  },
  'hex': {
    scale: 0.05,
    position: [0, -0.1, 1],
  },
  'matice_limec': {
    scale: 0.075,
  },
  'matice': {
    scale: 0.075,
  },
  't_sroub': {
    scale: 0.05,
    position: [0, -0.1, 0.25],
  },
  'stredova_prichytka': {
    scale: 0.04,
    position: [-0.5, -0.8, -0.25],
  },
  'krajova_prichytka': {
    scale: 0.03,
    position: [-0.25, -0.55, 0.5],
  },
  'vrut': {
    scale: 0.05,
    position: [0, -0.1, 0.25],
  },
  'kombisroub': {
    scale: 0.05,
    position: [0, -0.1, 0.25],
  },
  'drzak_na_falc': {
    scale: 0.04,
    position: [-1.5, 0.5, 0.75],
  },
  'spojka_na_profil': {
    scale: 0.04,
    position: [-1.5, 0.5, 0.75],
  },
}