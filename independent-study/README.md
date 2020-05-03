# Developing Web Augmented Reality & Virtual Reality
## By:  Cecilia Butler

## Introduction
Augmented reality and virtual reality, or AR/VR, has been around for a while but has grown in popularity in recent years.  One reason is that the equipment, like the headsets, allow many to experience AR/VR easily and with little expense.

Another reason why AR/VR is on the rise is that open source has allowed many developers to create games, interactive scenes, and videos with little investment in software.  There are desktop development software engines, like Unity, that provide a free version that includes AR/VR development. Some of the open source frameworks that enable developers to create these experiences using web technologies are WebGL, WebXR, and A-Frame.  These frameworks use HTML and JavaScript to create browser-based AR/VR experiences.  

Web Graphics Library (WebGL) is a framework used as a foundation, or core, by other web AR/VR frameworks because it is built on JavaScript and provides APIs for 2D and 3D imagery.  A-Frame is built on three.js which uses WebGL as its core.  A-Frame simplifies AR/VR development by using something called *primitives* and components.  These are special tags that allow for development using HTML and the components anchor the object's position in a scene to support object movement and control.  WebXR is also built on WebGL and includes libraries and APIs that support integration with external controller devices. 

These frameworks support most browsers including Apple Safari, Opera, Google Chrome, Firefox, Internet Explorer.  Let's look at these frameworks and some core concepts required to develop an AR/VR scene.

## Exactly What is AR & VR? 
AR/VR is often used interchangeably and many think it is the same.  They are not the same but they are complementary. AR creates the interactive experience by superimposing (enhancing) a real world environment over a real world object.  For instance, take a picture of yourself.  Next, take an image of a real room or landscape and superimpose that over the image of yourself.  Multi-dimensional aspects can be added to create 360-degree viewing.  In addition, virtual objects can be added to the experience.

VR places an object into a virtual world.  That virtual world can be a re-creation of a known place or a completely imagined world like the imaginary school of wizardry, Hogwarts.  An object can then be placed into this virtual world.  For example, inserting an object that resembles a person into the virtual world of Hogwarts and simulating the person moving around.   This is often referred to as immersive as it simulates an object moving about a scene as if they were really in that environment.


## WebGL
WebGL is a cross-platform web standard that enables browser-based AR/VR viewing without plugins.  WebGL supports 2D/3D development by the use of shaders.  What are shaders?  I will not go into the nuts and bolts of computer-generated graphics because the beauty of these frameworks is that it allows developers to get started without fully understanding the underlying technology and terms.  However, I will try to simplify some of the terms in order to understand some of the basic components of web AR/VR development.

WebGL allows for development of movement and control of the movement.  The movement is creating the experience of an object moving about a space or scene.  The control allows for an external device, programmed keys, gaze (via the camera) or hand gestures to control the direction of an object.

### What is a Shader?
A simple explanation of a shader is that it is a program that tells the computer how to render pixels to create a shading effect.  You need 2 shaders for 2D models and 3 for 3D.  This is required for development for any type of AR/VR experience.  WebGL uses JavaScript libraries for 2D and 3D graphics.   It simplifies the development of 2D and 3D models without needing to know how to develop the shaders.   

There is support for "texture" as well.  Texture helps create the imagery within an environment.   Texture is used to add the look and feel of a person, animal, landscape, building or any other object, that can appear in a virtual environment.

After these multi-dimensional objects are created, motion and control is added to create movement throughout a scene and provide a mechanism for a user to guide the movement of an object within a virtual or augmented environment.

In the next sections, I will explore some web AR/VR frameworks and provide sample code for creating a basic AR/VR scene and controlling movement.

### WebGL and Controllers
Once objects are created, positioning and controlling movement of the objects will need to be addressed.  WebGL libraries and APIs are used to manage positioning that enable movement in a simulated environment.  

For movement control, many early releases of web-based AR and VR allowed for programming keyboard arrow keys to control movement.  Now, HTML5 supports external controllers with the [Gamepad](https://www.w3.org/TR/gamepad/) API.   This API uses HTML tags `<canvas>, <audio>, and <video>` to define the scene location on an HTML page and JavaScript and the Gamepad API enable movement via an external controller.   Mozilla Developer Network, heretofore known as MDN, provides a sample of the JavaScript to connect and disconnect a controller using the Gamepad API.  Below is the JavaScript template from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) for a basic connect and disconnect of a controller. 


JavaScript to connect a controller:

    window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length);
    });
   

JavaScript to disconnect a controller:  
```
window.addEventListener("gamepaddisconnected",
function(e) {
  console.log("Gamepad disconnected from index %d: %s",
    e.gamepad.index, e.gamepad.id);
});
```

MDN also has information on how to manage multiple controllers and browsers for multi-player experiences.  For more information, see the [MDN Gamepad Specification](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).  It also provides a list of supported controllers.  

When developing, you'll need to test with those controllers and various browsers.  My "fun find" helps with that.  Developers can test controllers with the [HTML5 Gamepad Tester](https://html5gamepad.com/).  This is not a site managed by MDN and all controllers supported by MDN may not be supported by Gamepad Tester.

Next, I will take a look at positioning.  The controller may direct the movement of an object.  However, the object will not go anywhere without programmatically managing the movement.


### Positioning
WebGL libraries and APIs also take care of positioning which creates the appearance of an object moving about the simulated environment.   The positioning of a 2D or 3D object, like a car, which can be created by a series of textures, color, and shaders, can appear to move by defining multiple positions.  The controllers can then direct the object from one position or location to another within a scene.   A car can appear to be driving down the road or make you feel like you're driving the car down the road.  

#### Teleporting
A simple way to describe teleporting is moving the viewer around a scene or an object around a scene.  Developer software like Unity have robust support for teleporting allowing movement of and through various scenes.   At the heart of teleporting is the ability to manage the viewer or object within a space.  This is often referred to as the physics of moving from one location to another.  MDN has a JavaScript API, [XRReferenceSpace()](https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace), which allows for programming movement by using the objects position offset, or location of that object in a space.  This API supports a variety of interfaces that can be defined as new offsets.  When the browser is launched, an object is located in a starting position or offset and, through the use of a controller to provide direction, that object relocates from one offset to another offset simulating teleporting into another scene or locale.  The premise is the same with video, however, no controller is needed for recorded visuals.

#### Spatial Tracking
WebGL can also supports spatial tracking.  MDN has an extensive section on [spatial tracking](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking).  These  libraries and APIs allow for development of deeper immersive experiences.  Spatial tracking is used to manage the user's positions relative to the positions of objects within a virtual or augmented environment.  This is done by setting an object's location, tracking the position and movements while tracking the relative position of other objects within that same environment over time.

### Positioning Summary
In summary, WebGL has extensive positioning support that allows for movement, control, and tracking of objects within a scene to create an immersive experience.

###  WebGL  Samples
My "fun find" on samples using WebGL can be found at [WebGL Samples](https://webglsamples.org/).   These samples can be viewed on most browsers.

 
 
## ***WebXR***
[WebXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) is another W3C specification and the developer standards are also managed by MDN.  WebXR allows for 3D rendering of virtual worlds and includes an API for device integration.  WebXR  is built on WebGL and supports a variety of headsets including cardboard, Google Daydream, and Oculus Rift.  

In some cases, a browser extension may be required.  In most cases, if you have a headset and an AR/VR/XR compatible phone, the browser option will become available from the home view.  You can then navigate to the appropriate URL for a web AR/VR experience.

[Google Chrome](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje/related) and [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/) have WebXR simulator extensions as well.  This enables developers to simulate the viewpoint of most popular headsets.


## A-Frame
[A-Frame](https://aframe.io/docs/1.0.0/introduction/) is an AR/VR development framework that allows for development using HTML without installing anything.  A script tag is needed in the head of an HTML document.  A-Frame supports more than 3D scene rendering.  It uses an entity-component framework based on [three.js](https://threejs.org/) which is also built on the WebGL framework.  A-Frame components serve as an object's anchor position within a scene.

A-Frame does not always require JavaScript for motion like other frameworks.  To develop a simple web AR/VR experience you just need HTML.  Here is sample code for an AR/VR scene using A-Frame. 

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
    
A-Frame supports most popular headsets including HTC Vive, Windows Mixed Reality, Google Daydream, cardboard, Samsung Gear, and most Oculus brand headsets.  

A-Frame It is not bound to basic 360° content and also supports spatial or positional tracking.  A-Frame's primitives and JavaScript components are used to help manage positional tracking.

### Positioning
Because A-Frame does not require JavaScript, it is important to understand the concept of primitives.  A-Frame embraces the [three.js entity-component system](https://en.wikipedia.org/wiki/Entity_component_system) and uses [primitives](https://aframe.io/docs/1.0.0/introduction/html-and-primitives.html) to describe the elements of a scene.  These primitives resemble HTML tags.  Some examples are `<a-box>` or `<a-sky>`.  Within the tags, or primitives, are attributes that support the position of objects.   Here is another A-Frame sample using several primitives with the A-Frame *position* attribute to control an object on a page.

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


 A-Frame components are JavaScript based modules that can be mixed and matched and built on entities to build upon a scene's appearance, behavior, and function.  Developers can customize the component JavaScript or create their own primitives and components for greater flexibility, movement, and control. 

### Controllers

For 2-D interaction, [A-Frame uses HTML browser events to interact with controllers](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html).   These are actually pre-built, custom events.  Here's a sample of the code needed to manage controllers.

``` 
// `collide` event emitted by a component such as some collider or physics component.  
document.querySelector('a-entity').addEventListener('collide', function (evt) {  
 console.log('This A-Frame entity collided with another entity!');  
});

```
For more information on the custom events and how they can impact a scene based upon a hover, click or other events, check out the A-Frame section on [interaction and controllers.](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html)

The A-Frame section on interaction and controllers also provides details on how to use gaze for controlling a scene.  Gaze is used when a headset does not have a physical controller like cardboard headsets.  In addition, it supports the Gamepad API and has specific components for the most of the headsets and external controllers supported by the Gamepad API.  To learn more about how to use these components, [start here](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html#vr-controllers).

### A-Frame Summary
In short, A-Frame did a lot of the work for you.  It allows developers to create an AR/VR experience with HTML.  For 3D modeling, three.js scripts must be called and declared in the HTML head within ```<script>``` tags.  In some cases, special components must also be used.

My A-Frame fun find is [aframe.io](https://aframe.io/).  It allows you to view the source, play around, and start building your own AR/VR experience.

## Additional Software & Open Source Frameworks
Many AR/VR/XR development software supports WebGL as well.  One of my favorites is [Unity](https://unity.com/).

If you are a Mac user, try [ARKit.](https://developer.apple.com/documentation/arkit)    Reality Composer and RealityKit are apps for developing on the iPad.  This [link](https://developer.apple.com/videos/play/wwdc2019/603/) is a great resource to understand AR/VR development on iOS.  I have not had the pleasure of developing using Apple, but I hope to soon using the Reality Composer on my iPad.

I hope you take a minute to try some of the frameworks or visit the links to preview web AR/VR.  More capabilities are being added with every release of the open source frameworks.  In addition, many AR/VR desktop software vendors are embracing WebGL as well allowing for broader cross-platform support. 
	 
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