AR VR Readme
# Developing Web-Based Augmented Reality & Virtual Reality -- AR/VR
## By Cecilia Butler

## Introduction
AR/VR has been around for a while but has grown in popularity in recent years.  One of the main reasons is that the equipment, many of know as goggles, allow many to experience it simply and easily with little money if you get cardboard goggles.

## Exactly What is AR & VR? 
AR/VR is used interchangeably at times and many often think it is the same.  They are not quite the same but complementary. AR creates the interactive experience by superimposing (enhancing) a real world environment over a real world object or image.  For instance.  Take an image of picture of yourself. Now create an image of a room and superimpose that over the image of yourself.     

VR complements by creating a multi-dimensional recreation of a real world environment or even a completely imagined world like Hogwarts.  An object can then be placed into this virtual reality to create the AR/VR experience. 

Many desktop developer tools like Unity use 3D to develop that AR/VR experience.  Web-based AR/VR frameworks use 2D or 3D as well.  Some of the frameworks that enable developers to create these experiences enabled through the browser are WebAR and WebVR, A-Frame (AR?? or both or XR??), WebGL, three.js.  JavaScript is used to develop the AR/VR experience and HTML5 is used to render that experience using a browser.  Let's look at how that is done with some of the frameworks previously mentioned. 
 

## How To Develop AR/VR for the Browser
I selected a few to review more closely.  WebGL is used by many frameworks because it provides JavaScript APIs for 2D and 3D imagery.  I will also explore A-Frame which is built on JavaScript as well to enable development in JavaScript with special tags for HTML5. 

## WebGL
WebGL (Web Graphics Library) is a cross-platform web standard that enables browser based AR/VR without plugins.  WebGL supports 2D/3D development by the use of shaders.  What!? Shaders??  Wait!?? Now this paper will not get into the nuts and bolts of computer-generated graphics because the beauty of these solutions allow developers to get started without fully understanding the underlying technology and terms.  However, I will have to mention a few of them and explain them as I go along.  

### What is a Shader?
A shader is basically the way the computer shades in 2D and 3D scenes.  You need 2 shaders for 2D and 3 for 3D.  This is required for development for any type of AR/VR experience.  

### WebGL and Controllers
WebGL libraries and APIs also take care of positioning which helps the object positioning as that object moves about the simulated environment.  There is support for "texture".  This manages the imagery and objects within an environment.  WebGL 1.0 and 2.0 is supported by most major browsers including stable releases of Apple Safari, Opera, Google Chrome, Firefox, Internet Explorer.

For game development, it is important to control movement.  The first releases of web-based AR and VR allowed for programming arrow keys and more to control movement.  Now, HTML5 supports external controllers with the [Gamepad](https://www.w3.org/TR/gamepad/) specification through the World Wide Web Consortium, heretofore known as W3C.   The tags `<canvas>, <audio>, and <video>` mark the location on an HTML page and the necessary JavaScript and APIs enable movement via a controller.   Mozilla Developer Network, heretofore known as MDN, provides a sample of the JavaScript to connect and disconnect a controller using the Gamepad API.  Below is the JavaScript template from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) for a basic connect and disconnect of a controller. 


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

My "fun find" is the [Gamepad Tester](https://html5gamepad.com/) which allows you to test your code.  

The controller interaction is very important as it can also manage movement of objects.  Let's take a look at positioning.  There are a few important terms related to positioning; they are teleporting and spatial or positional tracking.  

### Positioning
WebGL libraries and APIs also take care of positioning which helps the object positioning as that object moves about the simulated environment.  There is support for "texture".  This manages the imagery and objects within an environment.  WebGL 1.0 and 2.0 is supported by most major browsers including stable releases of Apple Safari, Opera, Google Chrome, Firefox, Internet Explorer.

#### Teleporting
A simple to describe teleporting, in regards to AR/VR, is moving the viewer around a scene or an object around a scene.  Developer software like Unity have robust support for teleporting allowing movement of through various scenes.   With HTML5, let JavaScript be your friend.  At the heart of teleporting in AR/VR is the ability to manage the viewer or object within a space or the physics of moving from one location to another.  MDN has an API, [XRReferenceSpace()](https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace), which allows a developer to use the offset, or location, of an object, in a space.  It then uses a series of supported interfaces that allows a developer to program a new offset.  When the browser is launched, an object can be located in that offset or the controller can be used to move the object from one location in a scene to another.  

#### Spatial Tracking
MDN has a section for [spatial tracking](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking) that allows for developers to manage movement.  

### Positioning Summary
In summary, WebGL has extensive positioning support that allows for a variety of motion and motion management.

###  WebGL  Samples
My "fun find" on samples using WebGL can be found at [WebGL Samples](https://webglsamples.org/).

 
 
## ***WebXR***
[WebXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) is set of standard developed by the  W3C specification and development standards are maintained by MDN.  WebXR allows for 3D rendering for virtual worlds includes an an API for headset device integration.  WebXR  is built on WebGL and supports a variety of headsets from cardboard, to Google Daydream, to Oculus Rift.  

In some cases, you may need an extension.  However, in most cases, if you have a headset and an AR/VR/XR compatible phone, the browser will become available from the home view.  You can then navigate to your web AR/VR experience and *experience it*.

[Google Chrome](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje/related) and [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/) have also developed extension for headset emulators that allows you to test the headset viewpoint from your browser.  You cannot control it, it just allows the developer the ability to see what is being developed without having to use a device.  

## A-Frame
There are several frameworks.  [A-Frame](https://aframe.io/docs/1.0.0/introduction/) is an AR/VR development framework that allows for development using HTML without installing anything but a script tag is needed in the head of an HTML document.  A-Frame supports more than three more than 3D scene rendering.  It framework has a powerful entity-component framework that provides a declarative, extensible, and composable structure to [three.js](https://threejs.org/).   I will not cover Three.js as it, too, is a framework built on WebGL.  A-Frame does not always require JavaScript for motion like others.  Of course, JavaScript is needed for more complicated motion and scenes.  However, to develop a simple web AR/VR experience you just need HTML.  Let's build a scene using A-Frame. 

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
    
A-Frame supports most well-known headsets including HTC Vive, Windows Mixed Reality, Google Daydream, cardboard goggles, Samsung Gear, and most Oculus brand headsets.  It also supports augmented reality.  It is not bound to basic 360° content but supports spatial or what A-Frame refers to as positional tracking that is managed by controllers.

### Positioning
Because A-Frame does not require JavaScript, it is important to understand the concept of primitives.  A-Frame embraces the [three.js entity-component system](https://en.wikipedia.org/wiki/Entity_component_system)and uses [primitives](https://aframe.io/docs/1.0.0/introduction/html-and-primitives.html) that describe the elements of a scene like `<a-box>` or `<a-sky>`.  Within those tags are attributes that support the position of objects within those primitives.   Here is another A-Frame sample using several primitives with the A-Frame *position* attribute to control an object on a page.

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


With the use of JavaScript, developers can create their own primitives and use the A-Frame framework to build components for more complex scenes.  The A-Frame components are JavaScript based modules that can be mixed and matched and built on entities to build upon a scenes appearance, behavior, and function.

### Controllers

For 2-D interaction, [A-Frame uses HTML browser events to interact with controllers](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html).   There is a little bit more to it.  They are A-Frame pre-built, custom event.  Remember A-Frame is a JavaScript based framework that takes advantage of three.js.  Well guess what three.js is built on?  WebGL.  So here's a sample of the code needed to manage controllers.

``` 
// `collide` event emitted by a component such as some collider or physics component.  
document.querySelector('a-entity').addEventListener('collide', function (evt) {  
 console.log('This A-Frame entity collided with another entity!');  
});

```
For more information on the custom events and how they can impact a scene based upon a hover, click or more, check out the A-Frame section on [interaction and controllers.](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html)

The above section also provides details on how to use gaze for controlling a scene when a headset does not have a physical controller, like cardboard goggles.  In addition, if the Gamepad API  is used, A-Frame has components that are compatible with controller managed headsets.  To learn more about how to get started with headset specific controllers, [start here](https://aframe.io/docs/1.0.0/introduction/interactions-and-controllers.html#vr-controllers).

### A-Frame Summary
In short, A-Frame did a lot of the work for you.  It built an HTML-based framework that allows developers to create an AR/VR experience with HTML.  However, for 3D modeling, three.js scripts must be called and declared in the HTML head within ```<script>``` tags.

My A-Frame fun find is [aframe.io](https://aframe.io/).  It allows you to view the source as well to play around and start building your own.

## Additional Software & Open Source Frameworks
May AR/VR/XR development software supports WebGL as well.  One of my favorites is [Unity](https://unity.com/).

I have not had the pleasure to develop using Apple yet, but if you are a Mac user, try [ARKit.](https://developer.apple.com/documentation/arkit)  Reality Composer and RealityKit are apps for developing on the iPad.  This [link](https://developer.apple.com/videos/play/wwdc2019/603/) is a great resource to understand AR/VR development on iOS.

I hope you take a minute to try some of the frameworks, software, and developer resources.
	 
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
Developing Web-Based Augmented Reality & Virtual Reality – AR/VR
By Cecilia Butler
Introduction
AR/VR has been around for a while but has grown in popularity in recent years. One of the main reasons is that the equipment, many of know as goggles, allow many to experience it simply and easily with little money if you get cardboard goggles.

Exactly What is AR & VR?
AR/VR is used interchangeably at times and many often think it is the same. They are not quite the same but complementary. AR creates the interactive experience by superimposing (enhancing) a real world environment over a real world object or image. For instance. Take an image of picture of yourself. Now create an image of a room and superimpose that over the image of yourself.

VR complements by creating a multi-dimensional recreation of a real world environment or even a completely imagined world like Hogwarts. An object can then be placed into this virtual reality to create the AR/VR experience.

Many desktop developer tools like Unity use 3D to develop that AR/VR experience. Web-based AR/VR frameworks use 2D or 3D as well. Some of the frameworks that enable developers to create these experiences enabled through the browser are WebAR and WebVR, A-Frame (AR?? or both or XR??), WebGL, three.js. JavaScript is used to develop the AR/VR experience and HTML5 is used to render that experience using a browser. Let’s look at how that is done with some of the frameworks previously mentioned.

How To Develop AR/VR for the Browser
I selected a few to review more closely. WebGL is used by many frameworks because it provides JavaScript APIs for 2D and 3D imagery. I will also explore A-Frame which is built on JavaScript as well to enable development in JavaScript with special tags for HTML5.

WebGL
WebGL (Web Graphics Library) is a cross-platform web standard that enables browser based AR/VR without plugins. WebGL supports 2D/3D development by the use of shaders. What!? Shaders?? Wait!?? Now this paper will not get into the nuts and bolts of computer-generated graphics because the beauty of these solutions allow developers to get started without fully understanding the underlying technology and terms. However, I will have to mention a few of them and explain them as I go along.

What is a Shader?
A shader is basically the way the computer shades in 2D and 3D scenes. You need 2 shaders for 2D and 3 for 3D. This is required for development for any type of AR/VR experience.

WebGL and Controllers
WebGL libraries and APIs also take care of positioning which helps the object positioning as that object moves about the simulated environment. There is support for “texture”. This manages the imagery and objects within an environment. WebGL 1.0 and 2.0 is supported by most major browsers including stable releases of Apple Safari, Opera, Google Chrome, Firefox, Internet Explorer.

For game development, it is important to control movement. The first releases of web-based AR and VR allowed for programming arrow keys and more to control movement. Now, HTML5 supports external controllers with the Gamepad specification through the World Wide Web Consortium, heretofore known as W3C. The tags <canvas>, <audio>, and <video> mark the location on an HTML page and the necessary JavaScript and APIs enable movement via a controller. Mozilla Developer Network, heretofore known as MDN, provides a sample of the JavaScript to connect and disconnect a controller using the Gamepad API. Below is the JavaScript template from MDN for a basic connect and disconnect of a controller.

Below is the sample JavaScript to connect a controller:

window.addEventListener("gamepadconnected", function(e) {
console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
e.gamepad.index, e.gamepad.id,
e.gamepad.buttons.length,
e.gamepad.axes.length);
});
The sample code to disconnect a controller is:

window.addEventListener("gamepaddisconnected",
function(e) {
  console.log("Gamepad disconnected from index %d: %s",
    e.gamepad.index, e.gamepad.id);
});
MDN also has information on how to manage multiple controllers and browser support as well. For more information, see the MDN Gamepad Specification.

My “fun find” is the Gamepad Tester which allows you to test your code.

The controller interaction is very important as it can also manage movement of objects. Let’s take a look at positioning. There are a few important terms related to positioning; they are teleporting and spatial or positional tracking.

Positioning
WebGL libraries and APIs also take care of positioning which helps the object positioning as that object moves about the simulated environment. There is support for “texture”. This manages the imagery and objects within an environment. WebGL 1.0 and 2.0 is supported by most major browsers including stable releases of Apple Safari, Opera, Google Chrome, Firefox, Internet Explorer.

Teleporting
A simple to describe teleporting, in regards to AR/VR, is moving the viewer around a scene or an object around a scene. Developer software like Unity have robust support for teleporting allowing movement of through various scenes. With HTML5, let JavaScript be your friend. At the heart of teleporting in AR/VR is the ability to manage the viewer or object within a space or the physics of moving from one location to another. MDN has an API, XRReferenceSpace(), which allows a developer to use the offset, or location, of an object, in a space. It then uses a series of supported interfaces that allows a developer to program a new offset. When the browser is launched, an object can be located in that offset or the controller can be used to move the object from one location in a scene to another.

Spatial Tracking
MDN has a section for spatial tracking that allows for developers to manage movement.

Positioning Summary
In summary, WebGL has extensive positioning support that allows for a variety of motion and motion management.

WebGL Samples
My “fun find” on samples using WebGL can be found at WebGL Samples.

WebXR
WebXR is set of standard developed by the W3C specification and development standards are maintained by MDN. WebXR allows for 3D rendering for virtual worlds includes an an API for headset device integration. WebXR is built on WebGL and supports a variety of headsets from cardboard, to Google Daydream, to Oculus Rift.

In some cases, you may need an extension. However, in most cases, if you have a headset and an AR/VR/XR compatible phone, the browser will become available from the home view. You can then navigate to your web AR/VR experience and experience it.

Google Chrome and Mozilla Firefox have also developed extension for headset emulators that allows you to test the headset viewpoint from your browser. You cannot control it, it just allows the developer the ability to see what is being developed without having to use a device.

A-Frame
There are several frameworks. A-Frame is an AR/VR development framework that allows for development using HTML without installing anything but a script tag is needed in the head of an HTML document. A-Frame supports more than three more than 3D scene rendering. It framework has a powerful entity-component framework that provides a declarative, extensible, and composable structure to three.js. I will not cover Three.js as it, too, is a framework built on WebGL. A-Frame does not always require JavaScript for motion like others. Of course, JavaScript is needed for more complicated motion and scenes. However, to develop a simple web AR/VR experience you just need HTML. Let’s build a scene using A-Frame.

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
A-Frame supports most well-known headsets including HTC Vive, Windows Mixed Reality, Google Daydream, cardboard goggles, Samsung Gear, and most Oculus brand headsets. It also supports augmented reality. It is not bound to basic 360° content but supports spatial or what A-Frame refers to as positional tracking that is managed by controllers.

Positioning
Because A-Frame does not require JavaScript, it is important to understand the concept of primitives. A-Frame embraces the three.js entity-component systemand uses primitives that describe the elements of a scene like <a-box> or <a-sky>. Within those tags are attributes that support the position of objects within those primitives. Here is another A-Frame sample using several primitives with the A-Frame position attribute to control an object on a page.

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
With the use of JavaScript, developers can create their own primitives and use the A-Frame framework to build components for more complex scenes. The A-Frame components are JavaScript based modules that can be mixed and matched and built on entities to build upon a scenes appearance, behavior, and function.

Controllers
For 2-D interaction, A-Frame uses HTML browser events to interact with controllers. There is a little bit more to it. They are A-Frame pre-built, custom event. Remember A-Frame is a JavaScript based framework that takes advantage of three.js. Well guess what three.js is built on? WebGL. So here’s a sample of the code needed to manage controllers.

// `collide` event emitted by a component such as some collider or physics component.  
document.querySelector('a-entity').addEventListener('collide', function (evt) {  
 console.log('This A-Frame entity collided with another entity!');  
});

For more information on the custom events and how they can impact a scene based upon a hover, click or more, check out the A-Frame section on interaction and controllers.

The above section also provides details on how to use gaze for controlling a scene when a headset does not have a physical controller, like cardboard goggles. In addition, if the Gamepad API is used, A-Frame has components that are compatible with controller managed headsets. To learn more about how to get started with headset specific controllers, start here.

A-Frame Summary
In short, A-Frame did a lot of the work for you. It built an HTML-based framework that allows developers to create an AR/VR experience with HTML. However, for 3D modeling, three.js scripts must be called and declared in the HTML head within <script> tags.

My A-Frame fun find is aframe.io. It allows you to view the source as well to play around and start building your own.

Additional Software & Open Source Frameworks
May AR/VR/XR development software supports WebGL as well. One of my favorites is Unity.

I have not had the pleasure to develop using Apple yet, but if you are a Mac user, try ARKit. Reality Composer and RealityKit are apps for developing on the iPad. This link is a great resource to understand AR/VR development on iOS.

I hope you take a minute to try some of the frameworks, software, and developer resources.

Resources
WebGL: https://www.khronos.org/webgl/
A-Frame: https://aframe.io
Three.js: https://threejs.org
WebAR Sites: (Now called WebXR by many tools and frameworks):
http://www.createwebxr.com/webAR.html
https://mixedreality.mozilla.org/hello-webxr/
https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
Gamepad Specification: https://www.w3.org/TR/gamepad/
HTML5: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
Gamepad Tester: https://html5gamepad.com/
MDN Spatial Tracking which includes the API for teleporting: https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking
WebXR Sample Pages is a Github based site that has a list of samples using spatial and teleporting APIs from WebXR. Please note, some of the development may include other open source AR/VR/XR toolkits and frameworks.
WebGL Samples is a site that allows developers to showcase their work using WebGL.
Unity WebGL Support: https://docs.unity3d.com/Manual/webgl-gettingstarted.html
Blender: https://www.blender.org/
Apple ARKit: https://developer.apple.com/documentation/arkit
Apple Reality Composer
Markdown 15066 bytes 1934 words 166 lines Ln 1, Col 0HTML 10907 characters 1893 words 115 paragraphs
MENU
Signed in as Cecilia Butler.
Main workspace synced with your Google Drive app data folder.
