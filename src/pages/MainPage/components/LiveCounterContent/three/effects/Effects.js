import { useMemo, useEffect } from "react";
import { useLoader, useThree, useFrame } from "react-three-fiber";
import {
  SMAAImageLoader,
  BlendFunction,
  KernelSize,
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  TextureEffect,
  BokehEffect,
  GodRaysEffect,
} from "postprocessing";

import { TextureLoader } from "three";

import scratchesTextureURL from "./scratches.jpg";

// Fix smaa loader signature
// Will not be neccessary next version: https://github.com/vanruesc/postprocessing/commit/f05bb85fc9548458ee5e4a24026f308f0a8b72d4
const _load = SMAAImageLoader.prototype.load;
SMAAImageLoader.prototype.load = function (_, set) {
  return _load.bind(this)(set);
};

export default function Effects({ sun }) {
  const scratchesTexture = useLoader(TextureLoader, scratchesTextureURL);
  const { gl, scene, camera, size } = useThree();
  const smaa = useLoader(SMAAImageLoader);
  const composer = useMemo(() => {
    const composer = new EffectComposer(gl);
    composer.addPass(new RenderPass(scene, camera));

    //antyaliasing postprocessing

    const smaaEffect = new SMAAEffect(...smaa);
    smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(0.1);

    //scratches texture postprocessing

    const textureEffect = new TextureEffect({
      blendFunction: BlendFunction.COLOR_DODGE,
      texture: scratchesTexture,
    });
    textureEffect.blendMode.opacity.value = 0.15;

    //bloom postprocessing

    const bloom = new BloomEffect({
      blendFunction: BlendFunction.ADD,
      kernelSize: KernelSize.MEDIUM,
      luminanceThreshold: 0.825,
      luminanceSmoothing: 0.075,
      height: 480,
    });
    bloom.blendMode.opacity.value = 1;

    //God rays

    const godRaysEffect = new GodRaysEffect(camera, sun.current, {
      kernelSize: KernelSize.HUGE,
      height: 480,
      density: 0.96,
      decay: 0.92,
      weight: 0.3,
      exposure: 0.55,
      samples: 60,
      clampMax: 1.0,
    });

    //DOF postprocessing

    /* const bokehEffect = new BokehEffect({
      focus: 0.009,
      dof: 0.002,
      aperture: 0.5,
      maxBlur: 0.01,
    }); */

    //passing postprocesing

    // composer.addPass(new EffectPass(camera, bokehEffect));

    const effectPass = new EffectPass(
      camera,
      smaaEffect,
      bloom,
      godRaysEffect,
      textureEffect
    );
    effectPass.renderToScreen = true;

    composer.addPass(effectPass);

    composer.pass = true;

    return composer;
  }, []);
  useEffect(() => void composer.setSize(size.width, size.height), [size]);
  return useFrame((_, delta) => composer.render(delta), 1);
}
