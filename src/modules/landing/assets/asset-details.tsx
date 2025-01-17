//@ts-nocheck
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../../../components/reusables/loader";

// Replace modelUrl with a sample URL of a 3D model
const modelUrl =
  "https://res.cloudinary.com/do2kojulq/image/upload/v1736172274/bmqhfyyut6cljlt8bpbp.glb";

// Component to load and display the 3D model
function Model({ url }) {
  const { scene } = useGLTF(url); // Load the 3D model from URL
  return <primitive object={scene} />;
}

// Loader Component
const ModelLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      position: "absolute",
      width: "100%",
      height: "100%",
      color: "#ffffff",
      fontSize: "20px",
    }}
  >
    Loading Model...
  </div>
);

// Main Component to render the 3D model
const ThreeDViewer = ({ modelUrl }) => {
  return (
    <div style={{ height: "80vh", position: "relative" }}>
      <Canvas>
        {/* Add ambient light for overall illumination */}
        <ambientLight intensity={1} color="#ffffff" />

        {/* Add hemisphere light for natural top-down lighting */}
        <hemisphereLight
          skyColor="#ffffff"
          groundColor="#b3b3b3"
          intensity={1.2}
          position={[0, 50, 0]}
        />

        {/* Add directional light for shadows and highlights */}
        <directionalLight
          position={[5, 10, 7.5]}
          intensity={1.5}
          color="#ffffff"
          castShadow
        />

        {/* Add a spotlight to focus on the model */}
        <spotLight
          position={[10, 15, 10]}
          angle={0.4}
          penumbra={0.5}
          intensity={1.8}
          castShadow
        />

        {/* Add a point light for additional glowing effect */}
        <pointLight position={[0, 10, 0]} intensity={2} color="#ffffff" />

        {/* Load and render the 3D model from the URL */}
        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>

        {/* Enable user interaction with orbit controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const AssetDetailsIndex = () => {
  const params = useParams();
  const { id } = params;

  const [assetUrl, setAssetUrl] = useState("");
  const [assetName, setassetName] = useState("");
  const [loading, setLoading] = useState(false);

  const getModel = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://weimmerse.greenmouseacademy.com.ng/v1/api/view/digital/asset?id=${id}`
      );
      console.log(data);
      setAssetUrl(data?.data?.assetUpload);
      setassetName(data?.data?.assetName);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getModel();
  }, []);

  console.log(assetUrl);
  if (loading) return <Loader />;

  return (
    <div className="box">
      <p className="unbound fw-500 text-2xl lg:text-4xl !leading-[46px]">
        {assetName}
      </p>
      {assetUrl && <ThreeDViewer modelUrl={assetUrl} />}
    </div>
  );
};

export default AssetDetailsIndex;
