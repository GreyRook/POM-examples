# [POM Examples](http://greyrook.github.io/POM-examples/)

examples for [POM](https://github.com/GreyRook/POM)

Basic Usage:

```
var data = {
    "children":[] //Your JSON Data
} 

var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0xffffff});
document.body.appendChild(renderer.view);

var manager = new POM.Manager(data);
stage.addChild(manager);

animate();
function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}
```

Custom Elements:

```
var data = {
    "children":[
        {
        "type":"customType"
        }
    ] //Your JSON Data
} 

var CustomType = function(manager, data){
    POM.ContainerElement.call(this, manager, data)
}

var p = CustomType.prototype = Object.create(POM.ContainerElement.prototype)

p.updateData = function(data){

    //Your Custom Code
    
    POM.ContainerElement.prototype.updateData.call(this, data)
}

var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0xffffff});
document.body.appendChild(renderer.view);

var manager = new POM.Manager();

manager.registerPrototype("customType", CustomType)
manager.updateData(data)
stage.addChild(manager);

animate();
function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}
```
