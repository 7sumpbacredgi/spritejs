const {Scene} = spritejs;
const {Mesh3d, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 45,
    pos: [-2, 2, 2],
  },
  directionalLight: [0.5, 1.0, -0.3],
  directionalLightColor: [1, 1, 1, 0.15],
});

const program = layer.createProgram(shaders.NORMAL);

const model = layer.loadModel('https://s2.ssl.qhres2.com/static/bf607b5f64a91492.json');
const macow = new Mesh3d(program, {model, mode: 'LINE_STRIP'});
layer.append(macow);
layer.setOrbit({target: [0, 0.7, 0]});

/* globals dat */
const initGui = () => {
  const gui = new dat.GUI();
  gui.add({mode: 'LINE_STRIP'}, 'mode', ['LINES', 'LINE_LOOP', 'LINE_STRIP', 'TRIANGLES']).onChange((val) => {
    macow.attributes.mode = val;
  });
};

initGui();