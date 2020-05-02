# Developing Web-Based Augmented Reality & Virtual Reality -- AR/VR
## By:  Cecilia Butler

## Introduction
AR/VR has been around for a while but has grown in popularity in recent years.  One of the main reasons is that the equipment, like the headsets or goggles, allow many to experience AR/VR easily and with little expense.

Another reason why AR/VR is on the rise is that open source has allowed many developers to create games, interactive scenes, and videos with little investment in software.  There are desktop software solutions, like Unity, that provide a free version for AR/VR development. Some of the open source frameworks that enable developers to create these experiences using web technologies are WebGL, WebXR, and A-Frame.  These frameworks use HTML and JavaScript to create browser-enabled AR/VR experiences.  

Web Graphics Library, or WebGL, is a framework used as a foundation, or core, by other web-enabled AR/VR frameworks because it built on JavaScript APIs for 2D and 3D imagery.  A-Frame, which is built on frameworks that are built on WebGL and JavaScript, is another framework that simplifies the development by using what they call primitives.  These are special tags that allow for development using HTML.   

These frameworks support most browsers including Apple Safari, Opera, Google Chrome, Firefox, Internet Explorer.  Let's look at these frameworks and some core concepts required to develop an AR/VR scene.

## Exactly What is AR & VR? 
AR/VR is used interchangeably at times and many think it is the same.  They are not the same but they are complementary. AR creates the interactive experience by superimposing (enhancing) a real world environment over a real world object.  For instance, take an image of picture of yourself. Now create an image of a room and superimpose that over the image of yourself.  Multi-dimensional aspects can be added to create 360-degree viewing.  In addition, virtual objects can be added to the experience.

VR places an object into a virtual world.  That virtual world can be a recreation of a known place or a completely imagined world like the imaginary school of wizardry, Hogwarts.  An object can then be placed into this virtual reality to create an immersive experience and not just multi-dimensional.  For example, creating an experience where you are the object placed into Hogwarts, as you move about you feel like you are now in Hogwarts roaming around.  This is often referred to as immersive.


## WebGL
WebGL is a cross-platform web standard that enables browser-based AR/VR without plugins.  WebGL supports 2D/3D development by the use of shaders.  What are shaders?  I will not go into the nuts and bolts of computer-generated graphics because the beauty of these frameworks is that it allows developers to get started without fully understanding the underlying technology and terms.  However, I will try to simplify some of the terms in order to understand some of the basic components of web AR/VR development.

WebGL allows for development of movement and control of the movement.  The movement is creating the experience of an object moving about a space or scene.  The control allows for an external device, programmed keys, gaze (via the camera) or hand gestures to control the direction of an object.  In this article, I will mostly focus on the technology that now enables external controllers.

### What is a Shader?
A simple explanation of a shader is that it is a program that tells the computer how to render pixels to create a shading effect.  You need 2 shaders for 2D models and 3 for 3D.  This is required for development for any type of AR/VR experience.  WebGL uses JavaScript libraries for 2D and 3D graphics.   It simplifies the development of 2D and 3D models without needing to know how to develop the shaders that create the 2D and 3D effects.   

There is support for "texture" as well.  This manages the imagery within an environment.   Texture is used to add the look and feel of a person, animal, landscape, building or any other thing, that helps create a scene.

After these multi-dimensional objects are created, movement and control is added to create movement throughout a scene and a way for a user to control the movement.  

In the next sections, I will explore some web-based frameworks that support development of AR/VR and provide sample code for creating a basic AR/VR scene and controlling movement.

### WebGL and Controllers
Once objects are created, positioning and controlling movement of the objects will need to be addressed.  WebGL libraries and APIs are used to manage positioning that enable movement in a simulated environment.  

For movement control, many early releases of web-based AR and VR allowed for programming keyboard arrow keys to control movement.  Now, HTML5 supports external controllers with the [Gamepad](https://www.w3.org/TR/gamepad/) API.   This API uses HTML tags `<canvas>, <audio>, and <video>` to define the scene location on an HTML page and JavaScript and the Gamepad API enable movement via an external controller.   Mozilla Developer Network, heretofore known as MDN, provides a sample of the JavaScript to connect and disconnect a controller using the Gamepad API.  Below is the JavaScript template from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) for a basic connect and disconnect of a controller. 


Below is the sample JavaScript to connect a controller:

    window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length);
    });
   

The sample code to disconnect a controller is:  
```
window.addEventListener("gamepaddisconnected",
function(e) {
  console.log("Gamepad disconnected from index %d: %s",
    e.gamepad.index, e.gamepad.id);
});
```

MDN also has information on how to manage multiple controllers and browser support as well.  For more information, see the [MDN Gamepad Specification](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).

My "fun find" is the [Gamepad Tester](https://html5gamepad.com/) which allows you to test your code with a controller.

Let's take a look at positioning.  The controller may direct the movement of the object, but the object will not go anywhere without programmatically managing the movement of the object.

### Positioning
WebGL libraries and APIs also take care of positioning which creates the appearance of an object moving about the simulated environment.  There is also support for "texture" which is an array of pixels that simulate the look of an object.  For example, the management of light and pixels to look like a car in a scene.  WebGL manages the imagery, textures, and objects within an environment with JavaScript libraries.  You can customize and create your own depending upon your level of knowledge of how to create and render 2D and 3D objects.

#### Teleporting
A simple way to describe teleporting, in regards to AR/VR, is moving the viewer around a scene or an object around a scene.  Developer software like Unity have robust support for teleporting allowing movement of through various scenes.   At the heart of teleporting in AR/VR is the ability to manage the viewer or object within a space or the physics of moving from one location to another.  MDN has a JavaScript API, [XRReferenceSpace()](https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace), which allows for programming movement by using the objects position offset, or location of that object in a space.  A variety of supported interfaces allows for development of new offsets.  When the browser is launched, an object is located in a starting position or offset and, through the use of a controller to provide direction, that object relocates from one offset to another simulating movement.  The premise is the same with video, however, no controller is needed to view the recorded material.

#### Spatial Tracking
WebGL can also provide spatial tracking.  MDN has an extensive section on [spatial tracking](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking).  The libraries and APIs that allows for an immersive experience.  Spatial tracking can manage the users position to create the feeling that you are part of that environment.  This is done by setting your location and tracking your position and movements as well as the objects within that scene.  

### Positioning Summary
In summary, WebGL has extensive positioning support that allows for a variety of motion and motion management of objects and tracking of the users motion and positions within a scene to create an immersive experience.

###  WebGL  Samples
My "fun find" on samples using WebGL can be found at [WebGL Samples](https://webglsamples.org/).   These samples can be viewed on most browsers.

 
 
## ***WebXR***
[WebXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) is another W3C specification and MDN manages developer standards based upon the W3C specification.  WebXR allows for 3D rendering of virtual worlds and includes an API for headset device integration.  WebXR  is built on WebGL and supports a variety of headsets including cardboard, Google Daydream, and Oculus Rift.  

In some cases, an extension may be required.  In most cases, if you have a headset and an AR/VR/XR compatible phone, the browser option will become available from the home view.  You can then navigate to your web AR/VR experience and *experience it*.

[Google Chrome](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje/related) and [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/) have WebXR simulator extensions available allowing developers the ability to simulate the viewpoint for a variety of popular headset.

## A-Frame
[A-Frame](https://aframe.io/docs/1.0.0/introduction/) is an AR/VR development framework that allows for development using HTML without installing anything.  A script tag is needed in the head of an HTML document.  A-Frame supports more than 3D scene rendering.  It uses an entity-component framework based on [three.js](https://threejs.org/) which is also built on the WebGL framework.  

A-Frame does not always require JavaScript for motion like other frameworks.  Custom JavaScript can be written for more complicated motion and scenes or developing new A-Frame components.  However, to develop a simple web AR/VR experience you just need HTML.  Let's build a scene using A-Frame. 

    <!DOCTYPE html>
    <html>
	    <head>
		    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
	    </head>
	    <body>
		    <a-scene>
			    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
			    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
			    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
			    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
			    <a-sky color="#ECECEC"></a-sky>
			</a-scene>
		</body>
	</html>
    
A-Frame supports most popular headsets including HTC Vive, Windows Mixed Reality, Google Daydream, cardboard goggles, Samsung Gear, and most Oculus brand headsets.  It is not bound to basic 360° content and supports spatial tracking.  A-Frame refers to spatial management as positional tracking,

### Positioning
Because A-Frame does not require JavaScript, it is important to understand the concept of primitives.  A-Frame embraces the [three.js entity-component system](https://en.wikipedia.org/wiki/Entity_component_system) and uses [primitives](https://aframe.io/docs/1.0.0/introduction/html-and-primitives.html) to describe the elements of a scene like `<a-box>` or `<a-sky>`.  Within those tags are attributes that support the position of objects within those primitives.   Here is another A-Frame sample using several primitives with the A-Frame *position* attribute to control an object on a page.

    <html>
	    <head>
		    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
		</head>
		<body>
			<a-scene>
				<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
				<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
				<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
				<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
				<a-sky color="#ECECEC"></a-sky>
			</a-scene>
		</body>
	</html>


 A-Frame components are JavaScript based modules that can be mixed and matched and built on entities to build upon a scenes appearance, behavior, and function.  Developers can customize the JavaScript or create their own primitives and components for more complex scenes. 

### Controllers

For 2-D interaction, [A-Frame uses HTML browser events to interact with controllers](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html).   These are actually pre-built, custom events.  Here's a sample of the code needed to manage controllers.

``` 
// `collide` event emitted by a component such as some collider or physics component.  
document.querySelector('a-entity').addEventListener('collide', function (evt) {  
 console.log('This A-Frame entity collided with another entity!');  
});

```
For more information on the custom events and how they can impact a scene based upon a hover, click or more, check out the A-Frame section on [interaction and controllers.](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html)

The A-Frame section on interaction and controllers also provides details on how to use gaze for controlling a scene.  Gaze is used when a headset does not have a physical controller.  For example, cardboard headsets do not use a controller.  In addition, it supports Gamepad APIs.  A-Frame has specific components for most popular headsets and external controllers that are supported by the Gamepad API.  To learn more about how to use these components, [start here](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html#vr-controllers).

### A-Frame Summary
In short, A-Frame did a lot of the work for you.  It allows developers to create an AR/VR experience with HTML.  However, for 3D modeling, three.js scripts must be called and declared in the HTML head within ```<script>``` tags.  In some cases, special components must also be used.

My A-Frame fun find is [aframe.io](https://aframe.io/).  It allows you to view the source as well to play around and start building your own AR/VR experience.

## Additional Software & Open Source Frameworks
Many AR/VR/XR development software supports WebGL as well.  One of my favorites is [Unity](https://unity.com/).

If you are a Mac user, try [ARKit.](https://developer.apple.com/documentation/arkit)    Reality Composer and RealityKit are apps for developing on the iPad.  This [link](https://developer.apple.com/videos/play/wwdc2019/603/) is a great resource to understand AR/VR development on iOS.  I have not had the pleasure of developing using Apple, but I hope to soon using the Reality Composer on my iPad.

I hope you take a minute to try some of the frameworks or visit the links to preview browser-enabled AR/VR.  More capabilities are being added with every release of many open source frameworks.  In addition, many AR/VR desktop software vendors are embracing WebGL as well allowing for broader cross-platform support. 
	 
## Resources

 1. WebGL: https://www.khronos.org/webgl/
 2. A-Frame:  https://aframe.io
 3. Three.js: https://threejs.org
 4. WebAR Sites: (Now called WebXR by many tools and frameworks): 
	- http://www.createwebxr.com/webAR.html
	- https://mixedreality.mozilla.org/hello-webxr/
	- https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
 5. Gamepad Specification:  [https://www.w3.org/TR/gamepad/](https://www.w3.org/TR/gamepad/)
 6. HTML5:  [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
 7.  Gamepad Tester:  [https://html5gamepad.com/](https://html5gamepad.com/)
 8. MDN Spatial Tracking which includes the API for teleporting:  [https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking)
 9. WebXR Sample Pages is a Github based site that has a list of samples using spatial and teleporting APIs from WebXR.  Please note, some of the development may include other open source AR/VR/XR toolkits and frameworks.
 10.  [WebGL Samples](https://webglsamples.org/) is a site that allows developers to showcase their work using WebGL.
 11. Unity WebGL Support:  [https://docs.unity3d.com/Manual/webgl-gettingstarted.html](https://docs.unity3d.com/Manual/webgl-gettingstarted.html)
 12. Blender: [https://www.blender.org/](https://www.blender.org/)
 13. Apple ARKit:  [https://developer.apple.com/documentation/arkit](https://developer.apple.com/documentation/arkit)
 14. Apple [Reality Composer](https://developer.apple.com/documentation/realitykit/creating_3d_content_with_reality_composer)