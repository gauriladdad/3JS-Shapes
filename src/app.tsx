import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Scene, PerspectiveCamera, WebGLRenderer, Mesh, Color, BoxGeometry, MeshBasicMaterial} from "three";

interface AppState {
  cube: Mesh;
  renderer: WebGLRenderer;
  scene:Scene;
  camera:PerspectiveCamera;
}

class App extends Component<any, AppState> {

  constructor(props: any) {
    super(props);
    
    // 1. create the scene
    const scene = new Scene();
    scene.background = new Color(0xababab);

    // 2. create an locate the camera
    const camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    // camera is at origin (0,0,0) so moving the camera from scene a bit so it sees something
    camera.position.z = 5;
    
    // 3. create and locate the objects on the scene
    const renderer = new WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    // 4. create the geometrical shape you want to show
    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new Mesh( geometry, material);
    
    this.state = { cube, scene, camera, renderer };
  }
  
  componentDidMount() {

    const { cube, scene, renderer } = this.state;

    scene.add( cube );
    
    // 5. create the renderer   
    document.body.appendChild( renderer.domElement );

    this.animate();
  }

  private animate = () => {
    const { cube, renderer, scene, camera } = this.state;
    // requestAnimationFrame is a callback function from browser called each time browser refreshes automatically
    requestAnimationFrame( this.animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
	};

  render() {
    return (
      <div />
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
