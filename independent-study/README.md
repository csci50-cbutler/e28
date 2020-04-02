# Developing Web-Based Augmented Reality & Virtual Reality -- AR/VR
# By Cecilia Butler

## Introduction
AR/VR has been around for a while but has grown in popularity in recent years.  One of the main reasons is that the equipment, many of know as goggles, allow many to experience it simply and easily with little money if you get cardboard goggles.

## Exactly What is AR & VR? 
AR/VR is used interchangeably at times and many often think it is the same.  They are not quite the same but complementary. AR creates the interactive experience by superimposing (enhancing) a real world environment over a real world object or image.  For instance.  Take an image of picture of yourself. Now create an image of a room and superimpose that over the image of yourself.     

VR complements by creating a multi-dimensional recreation of a real world environment or even a completely imagined world like Hogwarts.  An object can then be placed into this virtual reality to create the AR/VR experience. 

Many desktop developer tools like Unity use 3D to develop that AR/VR experience.  Web-based AR/VR frameworks use 2D or 3D as well.  Some of the frameworks that enable developers to create these experiences enabled through the browser are WebAR and WebVR, A-Frame (AR?? or both or XR??), WebGL, three.js.  JavaScript is used to develop the AR/VR experience and HTML5 is used to render that experience using a browser.  Let's look at how that is done with some of the frameworks previously mentioned. 
 

## How To Develop AR/VR for the Browser
I selected a few to review more closely.  WebGL is used by many frameworks because it provides JavaScript APIs for 2D and 3D imagery.  I will also explore A-Frame which is built on JavaScript as well to enable development in JavaScript with special tags for HTML5. 

## WebGL
WebGL (Web Graphics Library) is a cross-platform web standard that enables browser based AR/VR without plugins.  WebGL supports 2D/3D development by the use of shaders.  What!? Shaders??  Wait!?? Now this paper will not get into the nuts and bolts of computer-generated graphics because the beauty of these solutions allow developers to get started without fully understanding the underlying technology and terms.  However, I will have to mention a few of them and explain them as I go along.  A shader is basically the way the computer shades in 2D and 3D scenes.  You need 2 shaders for 2D and 3 for 3D.  

WebGL libraries and APIs also take care of positioning which helps the object positioning as that object moves about the simulated environment.  There is support for "texture".  This manages the imagery and objects within an environment.  WebGL 1.0 and 2.0 is supported by most major browsers including stable releases of Apple Safari, Opera, Google Chrome, Firefox, Internet Explorer, 

- Placeholder for teleporting & controller support.  Note if arrow or keyboard mapping or assignment is supported to control movement. 

### ***WebGL Examples***
 - How-to style segment showing code snippet &/or link to an example if available.
 - Show snapshot of end result
 
### ***WebGL & HTML5***
- Illustrate how WebGL is worked into HTML5

## A-Frame
Placeholder for overview of framework.
### ***A-Frame Examples***
- Code Snippets to show example of development
### **A-Frame & HTML5***
- HTML5 examples 

## WebAR (Now WebXR) & three.js 
Note:  Use this section(s) if more words are needed to go into WebAR &/or three.js.  If meeting word requirement, mention in a section "Additional Tools..." because of popularity & because many frameworks are also built on three.js.  Note:  WebAR and WebVR has been merged into WebXR. While some sites are still available usign WebVR or WebAR, WebXR framework is mostly managed by Mozilla.

## Additional Tools & Frameworks
 - Mozilla Mixed Reality site.  (or move to "Other Tools...")  
 - As it grows in popularity more native support with HTML5, including use video shot in 360 for a similar experience. 
 - Many well known software toolkits like Unity, Apple(??), UnReal(??) and Blender(??) are now supporting development for the browser.

## Conclusion

 - Highlight features/issues
	 - Browser based, No Need for Goggles
	 - Code only & render via HTML
	 - Browser compatibility.  

	 
## Resources

 1. WebGL: https://www.khronos.org/webgl/
 2. A-Frame:  https://aframe.io
 3. Three.js: https://threejs.org
 4. WebAR Sites: (Now called WebXR by many tools and frameworks): 
	- http://www.createwebxr.com/webAR.html
	- https://mixedreality.mozilla.org/hello-webxr/
	- https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
 5. List any mentioned &/or top software development engines that support browser based AR/VR  or "XR" like Unity, UnReal, Blender, Apple.
