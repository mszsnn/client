<template>
      <div id="index">
         <div class="main">
              <div id="glFullscreen">
					<canvas id="example"></canvas>
			  </div>

              <div class="mask">
                  <span class="">WEB DESIGN</span>
                  <span class="">专业的企业网站建设</span>
                  <span class="">Art is a language that loves life</span>
                  
                  
                  <div class="plus ">
                      <i class="iconfont icon-iconjia "></i>
                  </div>
                  
              </div>
              <div class="case ">
                  <div class="caseBox">
                      <img src="./index_list_03.png">
                  </div>
                  <div class="caseLeft">
                      <i class="iconfont icon-yuan-jiantou-zuo"></i>
                  </div>
                  <div class="caseRight">
                      <i class="iconfont icon-jiantou-you-shixin-yuanxing"></i>
                  </div>
                  <div class="latestCase">▪最新案例</div>

              </div>

          </div>
      </div>
</template>
<script>
    export default {
      name:'index',
      data(){
        return {
            data:'abc'
        }
      },
      methods:{

      },
      mounted(){

  var lon = 90,lat = 0, 
  phi = 0, theta = 0;

  var WWOBJLoader2Example = (function () {

	var Validator = THREE.LoaderSupport.Validator;

	function WWOBJLoader2Example( elementToBindTo ) {
		this.renderer = null;
		this.canvas = elementToBindTo;
		this.aspectRatio = 1;
		this.recalcAspectRatio();

		this.scene = null;
		this.cameraDefaults = {
			posCamera: new THREE.Vector3( 900.0, 500.0, 1100.0 ),
			posCameraTarget: new THREE.Vector3( 0, 0, 0 ),
			near: 0.1,
			far: 10000,
			fov: 45
		};
		this.camera = null;
		this.cameraTarget = this.cameraDefaults.posCameraTarget;

		this.controls = null;

		this.flatShading = false;
		this.doubleSide = false;

		this.cube = null;
		this.pivot = null;
	}

	WWOBJLoader2Example.prototype.initGL = function () {
		this.renderer = new THREE.WebGLRenderer( {
			canvas: this.canvas,
			antialias: true,
			autoClear: true
		} );
		this.renderer.setClearColor( 0xffffff );

		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera( this.cameraDefaults.fov, this.aspectRatio, this.cameraDefaults.near, this.cameraDefaults.far );
		this.resetCamera();
		this.controls = new THREE.TrackballControls( this.camera, this.renderer.domElement );

		var ambientLight = new THREE.AmbientLight( 0xeed3c9);
        var directionalLight1 = new THREE.SpotLight( 0xFECF82);
        directionalLight1.position.set( -2000, 2000, 2000 );
        directionalLight1.angle = Math.PI / 5;
		directionalLight1.penumbra = 0.3;
		directionalLight1.castShadow = true;
		directionalLight1.shadow.camera.near = 8;
		directionalLight1.shadow.camera.far = 30;
		directionalLight1.shadow.mapSize.width = 1024;
		directionalLight1.shadow.mapSize.height = 1024;
		directionalLight1.shadowDarkness = 0.5;
		directionalLight1.shadowCameraVisible = true;
		this.scene.add( directionalLight1 );
		this.scene.add( ambientLight );

		// 网格部分
		// var helper = new THREE.GridHelper( 1200, 60, 0xFF4444, 0x404040 );
		// this.scene.add( helper );

		this.pivot = new THREE.Object3D();
		this.pivot.name = 'Pivot';
		this.scene.add( this.pivot );
	};

	WWOBJLoader2Example.prototype.useParseSync = function () {
		var modelName = 'ConveyorBelt';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			
			var local = new THREE.Object3D();
			local.name = 'Pivot_ConveyorBelt';
			local.position.set( 220, 130, -630 );
			var scale = 1;
			local.scale.set( scale, scale, scale );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.setUseIndices( true );
			objLoader.load( '/index/obj/chuansongdai(1).obj', callbackOnLoad, null, null, null, false );
		};
		objLoader.loadMtl( '/index/obj/chuansongdai(1).mtl', null, onLoadMtl );
	};


	WWOBJLoader2Example.prototype.useParseAsync = function () {
		var modelName = 'ductsR';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			
			var local = new THREE.Object3D();
			local.name = 'Pivot_ductsR';
			local.position.set( 200, 170, 730 );
			var scale = 1;
			local.scale.set( scale, scale, scale );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.setUseIndices( true );
			objLoader.load( '/index/obj/youcedaoguan.obj', callbackOnLoad, null, null, null, false );
		};
		objLoader.loadMtl( '/index/obj/youcedaoguan.mtl', null, onLoadMtl );
	};

	

	WWOBJLoader2Example.prototype.useLoadAsync = function () {
		var modelName = 'WaltHead';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
            
			var local = new THREE.Object3D();
			local.name = 'Pivot_WaltHead';
			local.position.set(700, 130, 380 );
			var scale = 1;
			local.scale.set( scale, scale, scale );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/qigejiqiren.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/qigejiqiren.mtl', null, onLoadMtl );
	};

	WWOBJLoader2Example.prototype.useQoadSync = function () {
		var modelName = 'ground';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );
		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			
			var local = new THREE.Object3D();
			local.name = 'Pivot_ground';
			local.position.set( 0, 130, 0 );
			var scale = 1;
			local.scale.set( scale, scale, scale );
			// local.rotation.y= Math.PI;
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );	
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/dimian.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/dimian.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useQoadAsync = function () {
		var modelName = 'robot';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			
			var local = new THREE.Object3D();
			local.name = 'Pivot_robot';
			local.position.set( -410, 130, -370 );
			var scale = 1;
			local.scale.set( scale, scale, scale );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/naiyouxiaojiqiren.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/naiyouxiaojiqiren.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useWoadSync = function () {
		var modelName = 'house';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			

			var local = new THREE.Object3D();
			local.name = 'Pivot_house';
			local.position.set( 230, 130, 400 );
			var scale = 1;
			local.scale.set( scale, scale, scale );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/xiaofangzi.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/xiaofangzi.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useWoadAsync = function () {
		var modelName = 'tv';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			
			var local = new THREE.Object3D();
			local.name = 'Pivot_tv';
			local.position.set( 200, 130, 260 );
			var scale = 1;
			local.scale.set( scale, scale, scale );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/xiaodianshi.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/xiaodianshi.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useRoadSync = function () {
		var modelName = 'ductsL';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {

			var local = new THREE.Object3D();
			local.name = 'Pivot_ductsL';
			local.position.set( 500, 220, 30 );
			// local.rotation.z=Math.PI;
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );

			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/zuocedaoguan.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/zuocedaoguan.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useRoadAsync = function () {
		var modelName = 'carL';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			

			var local = new THREE.Object3D();
			local.name = 'Pivot_carL';
			local.position.set( 500, 40, 480 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/zuoceqiche.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/zuoceqiche.mtl', null, onLoadMtl );
	};

	WWOBJLoader2Example.prototype.useToadSync = function () {
		var modelName = 'control';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			

			var local = new THREE.Object3D();
			local.name = 'Pivot_control';
			local.position.set( 104, 130, 160 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/caozuotai.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/caozuotai.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useToadAsync = function () {
		var modelName = 'text';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			

			var local = new THREE.Object3D();
			local.name = 'Pivot_text';
			local.position.set( 270, 140, 540 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );

		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/wenzi.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/wenzi.mtl', null, onLoadMtl );
	};

	WWOBJLoader2Example.prototype.useYoadSync = function () {
		var modelName = 'column';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {

			var local = new THREE.Object3D();
			local.name = 'Pivot_column';
			local.position.set( -10, 130, 450 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/xiaozhuzi.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/xiaozhuzi.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useYoadAsync = function () {
		var modelName = 'waterTank';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {


			var local = new THREE.Object3D();
			local.name = 'Pivot_waterTank';
			local.position.set( 280, 130, 370 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );

		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/shuixiang(1).obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/shuixiang(1).mtl', null, onLoadMtl );
	};



	WWOBJLoader2Example.prototype.useUoadSync = function () {
		var modelName = 'shuan';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {

			var local = new THREE.Object3D();
			local.name = 'Pivot_shuan';
			local.position.set( 205, 130, 200 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setModelName( modelName );
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/xiaofangshuan.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/xiaofangshuan.mtl', null, onLoadMtl );
	};

	WWOBJLoader2Example.prototype.useFoadSync = function () {
		var modelName = 'Clocks';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {
			var local = new THREE.Object3D();
			local.name = 'Pivot_Clocks';
			local.position.set( 1300, 190, 100 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
			scope._reportProgress( { detail: { text: 'Loading complete: ' + event.detail.modelName } } );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/biao.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/biao.mtl', null, onLoadMtl );
	};
    
    WWOBJLoader2Example.prototype.useFoadAsync = function () {
		var modelName = 'guolu';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {

			var local = new THREE.Object3D();
			local.name = 'Pivot_guolu';
			local.position.set( 170, 130, 318 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
		};

		var onLoadMtl = function ( materials ) {
			
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/guolu.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/guolu.mtl', null, onLoadMtl );
	};

	WWOBJLoader2Example.prototype.useGoadSync = function () {
		var modelName = 'GearRack';
		this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );

		var scope = this;
		var objLoader = new THREE.OBJLoader2();
		var callbackOnLoad = function ( event ) {

			var local = new THREE.Object3D();
			local.name = 'Pivot_GearRack';
			local.position.set( -500, 130, 330 );
			scope.pivot.add( local );
			local.add( event.detail.loaderRootNode );
		};

		var onLoadMtl = function ( materials ) {
			objLoader.setMaterials( materials );
			objLoader.terminateWorkerOnLoad = false;
			objLoader.load( '/index/obj/zhuzi.obj', callbackOnLoad, null, null, null, true );
		};
		objLoader.loadMtl( '/index/obj/zhuzi.mtl', null, onLoadMtl );
	};






	WWOBJLoader2Example.prototype.finalize = function () {
		this._reportProgress( { detail: { text: '' } } );
	};

	WWOBJLoader2Example.prototype._reportProgress = function( event ) {
		var output = Validator.verifyInput( event.detail.text, '' );
		// document.getElementById( 'feedback' ).innerHTML = output;
	};

	WWOBJLoader2Example.prototype.resizeDisplayGL = function () {
		this.controls.handleResize();

		this.recalcAspectRatio();
		this.renderer.setSize( this.canvas.offsetWidth, this.canvas.offsetHeight, false );

		this.updateCamera();
	};

	WWOBJLoader2Example.prototype.recalcAspectRatio = function () {
		this.aspectRatio = ( this.canvas.offsetHeight === 0 ) ? 1 : this.canvas.offsetWidth / this.canvas.offsetHeight;
	};

	WWOBJLoader2Example.prototype.resetCamera = function () {
		this.camera.position.copy( this.cameraDefaults.posCamera );
		this.cameraTarget.copy( this.cameraDefaults.posCameraTarget );

		this.updateCamera();
	};

	WWOBJLoader2Example.prototype.updateCamera = function () {
		this.camera.aspect = this.aspectRatio;
		this.camera.lookAt( this.cameraTarget );
		this.camera.updateProjectionMatrix();
	};

	WWOBJLoader2Example.prototype.render = function () {
		if ( ! this.renderer.autoClear ) this.renderer.clear();

		this.controls.update();
		this.renderer.render( this.scene, this.camera );
	};

	WWOBJLoader2Example.prototype.alterShading = function () {
		var scope = this;
		scope.flatShading = ! scope.flatShading;

		scope.traversalFunction = function ( material ) {
			material.flatShading = scope.flatShading;
			material.needsUpdate = true;
		};
		var scopeTraverse = function ( object3d ) {
			scope.traverseScene( object3d );
		};
		scope.pivot.traverse( scopeTraverse );
	};

	WWOBJLoader2Example.prototype.alterDouble = function () {
		var scope = this;
		scope.doubleSide = ! scope.doubleSide;

		scope.traversalFunction  = function ( material ) {
			material.side = scope.doubleSide ? THREE.DoubleSide : THREE.FrontSide;
		};

		var scopeTraverse = function ( object3d ) {
			scope.traverseScene( object3d );
		};
		scope.pivot.traverse( scopeTraverse );
	};

	WWOBJLoader2Example.prototype.traverseScene = function ( object3d ) {
		if ( object3d.material instanceof THREE.MultiMaterial ) {

			var materials = object3d.material.materials;
			for ( var name in materials ) {

				if ( materials.hasOwnProperty( name ) )	this.traversalFunction( materials[ name ] );

			}

		} else if ( object3d.material ) {

			this.traversalFunction( object3d.material );

		}
	};

	return WWOBJLoader2Example;

})();

	var app = new WWOBJLoader2Example( document.getElementById( 'example' ) );

	var wwObjLoader2Control = {
		flatShading: app.flatShading,
		doubleSide: app.doubleSide
	};
	var resizeWindow = function () {
		app.resizeDisplayGL();
	};

	var render = function () {
		requestAnimationFrame( render );
		app.render();
	};
	window.addEventListener( 'resize', resizeWindow, false );

	app.initGL();
	app.resizeDisplayGL();

	// kick render loop
	render();
    
	animate();

	function animate() {

		requestAnimationFrame( animate );
		update();

	}

	function update() {

		lon += 0.3;

		lat = Math.max( - 85, Math.min( 85, lat ) );
		phi = THREE.Math.degToRad( 90 - lat );
		theta = THREE.Math.degToRad( lon );

		app.cameraTarget.x = 500 * Math.sin( phi ) * Math.cos( theta );
		app.cameraTarget.y = 500 * Math.cos( phi );
		app.cameraTarget.z = 500 * Math.sin( phi ) * Math.sin( theta );

		app.camera.lookAt( app.cameraTarget );

		app.renderer.render( app.scene, app.camera );

	}








	// 加载传送带
	app.useParseSync();

	// 加载右侧导管
	app.useParseAsync();

	// 加载切割机器
	app.useLoadAsync();
	// 加载地面
	app.useQoadSync();
	//加载奶油小机器人
	app.useQoadAsync();
	// 加载小房子
	app.useWoadSync();
	// 加载小电视
	app.useWoadAsync();
	// 加载左侧墙壁导管
	app.useRoadSync();
	// 加载左侧汽车
	app.useRoadAsync();

	// 加载操控台
	app.useToadSync();
	// 加载文字
	app.useToadAsync();

	// 加载柱子
	app.useYoadSync();
	// 加载水箱
	app.useYoadAsync();

	// 加载消防栓
	app.useUoadSync();
	// 加载环境灯


	// 加载钟表
	app.useFoadSync();
	// 加载锅炉
	app.useFoadAsync();
	//加载齿轮架子
	app.useGoadSync();

	app.finalize();


           this.$http.get('/api/test',{aa:1}).then((val)=>{
             this.data=val.body;
           })
      }
    }
</script>
<style lang="" scoped="">
    @import "./animate.css";
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    body,html{
        height:100%;
    }

    #index{
        width:100%;
        height: 100%;
    }
    #index .main{
        width:100%;
        height: 100%;
    }
    #glFullscreen {
		width: 100%;
		height: 100vh;
		min-width: 640px;
		min-height: 360px;
		position: relative;
		overflow: hidden;
	}
	#example {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
    #index .main .bgpicture{
        display: block;
        width:100%;
        height:100%;
    }
    #index .main .mask{
        width:304px;
        height:106px;

        background: rgba(33,77,136,0.5);
        position: absolute;
        top:43px;
        right:73px;
        padding-top: 23px;
        padding-left: 31px;
    }
    #index .main .mask .more{
        display: block;
        text-decoration: none;
        width:77px;
        height: 22px;
        background: #fff;
        border: 1px double #85d4f1;
        border-radius: 22px;
        position: absolute;
        right:341px;
        bottom:37px;
        color:#01a5e2;
        font-style: italic;
        text-align: center;
        line-height: 22px;
        animation-delay: 1.8s;
    }
    #index .main .mask .more:hover{
        line-height: 15px;
        text-decoration: underline;
    }
    #index .main .mask .vertical{
        width: 106px;
        position: absolute;
        right:364px;
        bottom:121px;
        transform: rotate(90deg);
    }
    #index .main .mask .vertical .lineText{
        width:100%;
        color:#fff;
        font-style: italic;
        font-size: 10px;
    }
    #index .main .mask .vertical .line{
        width:23px;
        height:2px;
        background: #46d65a;
        margin-top:7px;
    }
    #index .main .mask .design{
        margin-top: 28px;
        animation-delay: 1.6s;

    }
    #index .main .mask .design img{
        display: block;
        float: left;


    }
    #index .main .mask .design .text{
        display: block;
        color:#fff;
        float: left;
        font-size: 14px;
        margin-top: 20px;
        margin-left: 8px;
    }

    #index .main .news .plus{
        width:19px;
        height:19px;
        background: #eee;
        border-radius:50%;
        position: absolute;
        top:-6px;
        left:-7px;
        color:#01a5e2;
        text-align: center;
        line-height: 13px;
        z-index: 2;
    }
    #index .main .news .plus i{
        font-size: 8px;
    }

    #index .main .case{
        width:227px;
        height:193px;
        position: absolute;
        bottom:13px;
        right:38px;
        overflow: hidden;
        animation-delay: 1s;
    }
    #index .main .caseBox{
        width:229px;
        height: 161px;
        border:2px solid #f8f8f8;
        background: #eee;
        margin:28px auto 0 auto;
    }
    #index .main .caseBox img{
        display: block;
        margin:14px;
    }
    #index .main .caseLeft,#index .main .caseRight{
        width: 14px;
        height:14px;
        position: absolute;
        top:9px;
        text-align: center;
        line-height: 14px;
        color:#fff;
    }
    #index .main .caseLeft{
        right:19px;
    }
    #index .main .caseRight{
        right:3px;
    }
    #index .main .latestCase{
        width:78px;
        height:25px;
        background: #01a8e2;
        color:#fff;
        text-align: center;
        line-height: 25px;
        position: absolute;
        top:0;
        left:0;
    }
    #index .main .mask span{
        display: block;
        color:#fff;
    }
    #index .main .mask span:nth-of-type(1){
        font-size: 36px;
        font-weight: 800;
        font-style: italic;
        animation-delay: 1s;

    }
    #index .main .mask span:nth-of-type(2){
        font-size: 22px;
        font-family: "宋体";
        animation-delay: 1.2s;
    }
    #index .main .mask span:nth-of-type(3){
        font-size: 4px;
        letter-spacing: 3px;
        font-style: italic;
        animation-delay: 1.4s;
    }
    #index .main .mask .plus{
        position: absolute;
        top:44px;
        left:531px;
        color:#fff;
        animation-delay:1s;
    }

    @font-face {font-family: "iconfont";
        src: url('../../assets/iconfont/iconfont.ttf'); /* IE9*/
    }
    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-icon:before { content: "\e648"; }

    .icon-icon1:before { content: "\e64b"; }

    .icon-chahao:before { content: "\e669"; }

    .icon-jiantoushang:before { content: "\e62c"; }

    .icon-sousuo-:before { content: "\e620"; }

    .icon-iconjia:before { content: "\e600"; }

    .icon-jiantou-you-shixin-yuanxing:before { content: "\e601"; }

    .icon-ArrowDown:before { content: "\e602"; }

    .icon-yuan-jiantou-zuo:before { content: "\e605"; }

    @media screen and (min-width:1920px){
        #index .main .mask{
            width:476px;
            height:166px;
            top:43px;
			right:54px;
			padding-top: 18px;
            padding-left: 49px;
        }
        #index .main .mask span:nth-of-type(1){
            font-size:43px;
        }
		#index .main .mask span:nth-of-type(2){
            font-size:34px;
        }
		#index .main .mask span:nth-of-type(3){
            font-size:7px;
        }
        #index .main .mask .design{
            margin-top:44px;
        }
        #index .main .mask .vertical{
            right:524px;
            bottom:278px;
        }
        #index .main .mask .plus{
            top:75px;
        }
        #index .main .mask .more{
            right:524px;
            bottom:66px;
        }
        #index .main .case{
            bottom:75px;
            right:48px;
        }
    }
</style>
