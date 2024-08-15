(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask.setTransform(62.5,62.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAvQgKgIAAgPQABgQAKgIQALgJAWAAIAUAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgFQAAgGgEgEQgFgEgHAAQgFAAgGACQgEACgBAFQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgZgEQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQABgJAGgGQAGgHAKgEQAJgEAMAAQAOAAALAEQAKAFAHAIQAFAJABAJIAABGIgBACIgCAAIgYAAIgDAAIAAgCIAAgHIgBgBIgBABQgIALgTAAQgPAAgLgIgAgMALQgFADAAAHQAAAGAEADQAEADAHAAQAIAAAGgFQAGgEAAgIIAAgHIgBgBIgPAAQgJAAgFADg");
	this.shape.setTransform(85.85,77.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBMIgCgBIgBgCIAAhkIABgCIACgBIAXAAIACABIABACIAABkIgBACIgCABgAgKguQgGgGAAgHQAAgHAGgFQAEgEAGAAQAIAAAEAEQAEAFABAHQgBAHgEAGQgEAEgIAAQgGAAgEgEg");
	this.shape_1.setTransform(77.9,75.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBBQgLgIgFgOQgDgKAAgPQAAgQADgJQAGgNAKgIQAKgIAQAAQAOAAAHALIACAAIAAgBIAAgsIABgCIACgBIAYAAIACABIAAACIAACLIAAACIgCABIgYAAIgCgBIgBgCIAAgHIAAAAIgCAAQgIAMgOAAQgOAAgLgJgAgMgDQgGAIAAAOQAAAMAFAIQAFAJAJAAQAKAAAEgJQAEgIABgNQAAgNgFgIQgFgIgJAAQgJAAgEAIg");
	this.shape_2.setTransform(69.2,75.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgMAAgPQAAgLADgJQAEgPAMgIQAMgKARABQAUgBANAMQAMANADAUIABARQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIhAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACAIQAGAMAPAAQAOAAAHgLIACgBIACABIAOAPIABACIAAABQgJAJgJAFQgLAEgMAAQgRAAgNgIgAgRgRIgCAHIABABIAjAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAIgBgGQgBgFgFgFQgEgDgHAAQgNAAgEAMg");
	this.shape_3.setTransform(57.85,77.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBJIgCgBIgBgCIAAhbIgBAAIgWAiIgDACIgLAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgWgiIgBAAIAAABIAABaIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAIADACIAfAwQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAfgwQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAYAAIACABIABACIAACLIgBACIgCABg");
	this.shape_4.setTransform(44.625,75.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIgBgCIAAiLIABgCIACgBIAXAAIACABIABACIAACLIgBACIgCABg");
	this.shape_5.setTransform(88.15,50.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAvQgLgIAAgPQAAgQAMgIQAKgJAWAAIAVAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgFQgBgGgEgEQgEgEgIAAQgFAAgFACQgFADgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgagEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQABgIAGgHQAHgIAJgDQAJgEANAAQANAAALAEQAKAFAHAIQAFAJAAAJIAABGIAAACIgCAAIgYAAIgCAAIAAgCIAAgHIgBgBIgBABQgJALgSAAQgQAAgKgIgAgMALQgEADAAAHQgBAGAEADQAEADAHAAQAJAAAFgFQAGgFABgHIAAgHIgBgBIgQAAQgIAAgGADg");
	this.shape_6.setTransform(79.85,52.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBMIgDAAIAAgDIAAhlIAAgBIADgBIAXAAIABABIACABIAABlIgCADIgBAAgAgLguQgEgFgBgHQABgIAEgFQAEgEAHAAQAHAAAFAEQAEAFABAIQgBAHgEAFQgFAEgHAAQgFAAgGgEg");
	this.shape_7.setTransform(71.95,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAvQgMgJgFgOQgEgMAAgMQAAgMAEgMQAFgOAMgIQAMgIAQAAQASAAALAIQANAJAEAMIACAHIAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgYAEIgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgBgEQgBgFgFgEQgGgDgGAAQgGAAgEADQgFAEgCAFQgCAHAAAKQAAAKACAGQACAHAFADQAEAEAGAAQAHAAAEgEQAFgCACgHIAAgCQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIAYAEQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAGQgEAOgNAIQgNAIgQAAQgPAAgNgIg");
	this.shape_8.setTransform(63.775,52.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAuQgNgJgEgQQgDgKAAgLQAAgLADgKQAEgPANgKQANgIARAAQAQAAANAIQALAJAGAPQADANAAAJQAAALgDAJQgFAQgMAKQgOAJgQAAQgPAAgOgJgAgLgZQgFAEgBAHQgDAEAAAKQAAAJACAFQACAHAFAFQAGAEAFAAQAHAAAFgEQAFgEACgIQACgJAAgFQAAgGgCgIQgDgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_9.setTransform(52.3,52.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBFQgMgFgIgKQgGgKAAgNIAAgFIAAgBIACgBIAYAAIACABIAAABIAAAEQAAAHAIAHQAIAFAMAAQALAAAFgEQAGgEAAgIQAAgFgDgDQgEgEgGgCIgRgIIgXgJQgKgFgHgIQgGgIAAgNQAAgOAGgIQAHgJALgGQANgFAOAAQAOAAANAGQANAGAGAKQAHAKAAANIAAADIAAACIgCABIgYAAIgCgBIgBgCIAAgBQAAgJgHgGQgHgGgMAAQgKAAgFAEQgFAEAAAHQAAAGADADQACADAHADIAqARQAJAEAGAIQAHAHAAAOQAAAUgOALQgPAMgYAAQgPAAgNgGg");
	this.shape_10.setTransform(40.275,50.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#68C7F3").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_11.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_1.setTransform(62.5,62.5);

	// Layer_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWBHQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgVQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIANABQAMABAHgGQAHgFAAgNIgBAAIgBAAQgHAIgOAAQgNAAgKgGQgLgGgFgOQgDgIAAgPQAAgQAEgKQAEgMAKgHQAKgHANgBQAPAAAHAKIABAAIABgBIAAgEIAAgCIACgBIAXAAIACABIABACIAABaQAAAagPALQgPALgXgBIgQAAgAgJgrQgDADgDAFQgDAHAAAKQAAAKADAGQACADAEAFQAFACAFABQAHgBADgCQAEgEACgEQACgGAAgKIgBgKIgBgHQgCgFgEgDQgEgDgGAAQgFAAgFADg");
	this.shape_12.setTransform(100.425,76.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASA0IgBgBIAAgBIAAg7QgBgHgEgGQgEgFgIAAQgGAAgFAFQgEAGgBAHIAAA7IAAABIgBABIgYAAIgCgBIgBgBIAAhhIABgBIACgBIAYAAIABABIAAABIAAAHIABABIAAAAQAJgMAPAAQAPAAALAKQAKAKgBARIAABAIAAABIgCABg");
	this.shape_13.setTransform(89.6,74.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIAAgCIAAhgIAAgCIACgBIAWAAIACABIABACIAABgIgBACIgCABgAgKgsQgFgFAAgHQAAgHAFgFQAEgDAGAAQAGAAAFADQAFAFAAAHQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_14.setTransform(81.625,72.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIA7QgJgFAAgPIAAg0IgBgBIgKAAIgCgBIgBgBIAAgSIABgCIACgBIAKAAIABgBIAAgXIABgCIACgBIAWAAIABABIAAACIAAAXIABABIATAAIADABIAAACIAAASIAAABIgDABIgTAAIgBABIAAApQAAAGADAEQADADAGAAIAGAAIACAAIABACIAAATQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgLAAQgQAAgIgGg");
	this.shape_15.setTransform(75.2,73.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAtQgNgJgEgNQgFgJAAgQQAAgKADgJQAFgOALgIQAMgJAPAAQATAAAMAMQANALACAUQABAIAAAHQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIg8AAIgBABIACAIQAFALAPAAQANAAAHgKIACgCIAQAPIABACIgBACQgGAIgLAEQgKAFgNAAQgQAAgLgIgAgQgQIgBAHIABABIAhAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgBgGQgCgGgEgDQgFgEgGAAQgMAAgEAMg");
	this.shape_16.setTransform(66.3813,74.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATBGQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgSguIgBgBIgBABIgMAQIgBABIAAAdIAAACIgCABIgXAAIgCgBIgBgCIAAiGIABgBIACgBIAXAAIACABIAAABIAABDIABABIAAgBIAagfIADgBIAbAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIgBADIgZAeIAAABIAdA/IABACQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_17.setTransform(56.825,72.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdA0IgBgBIgBgCIAAhgIABgCIABAAIAYAAIABAAIABACIAAAIIABAAQAIgMANAAQAHAAAEADQABAAAAAAQAAABAAAAQABAAAAABQAAAAgBABIgEAXQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgHgBIgFAAQgHABgFAFQgEAEAAAIIAAA1IgBACIgBABg");
	this.shape_18.setTransform(47.8063,74.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAACIgCAAIgXAAIgCAAIgBgCIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_19.setTransform(38.125,74.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBGIgBgBIgBgCIAAhWIAAgBIgBAAIgWAgQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgLAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgVggIgBAAIAAABIAABWIAAACIgCABIgYAAIgBgBIgBgCIAAiGIABgBIABgBIAYAAIACACIAeAuQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAIAfguQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAYAAIABABIABABIAACGIgBACIgBABg");
	this.shape_20.setTransform(26,72.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLBGIgBgBIgBgCIAAiFIABgCIABgBIAXAAIABABIABACIAACFIgBACIgBABg");
	this.shape_21.setTransform(107.45,48.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAABIgCABIgXAAIgCgBIgBgBIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_22.setTransform(99.525,50.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AATA0IgCgBIgBgBIAAg7QAAgHgEgGQgFgFgHAAQgGAAgFAFQgEAGAAAHIAAA7IgBABIgCABIgXAAIgCgBIAAgBIAAhhIAAgBIACgBIAXAAIACABIABABIAAAHIAAABIABAAQAIgMAPAAQAQAAAKAKQAJAJAAASIAABAIAAABIgCABg");
	this.shape_23.setTransform(89.075,50.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbAsQgMgIgFgQQgDgJAAgLQAAgLADgJQAFgPAMgIQAMgJAPAAQARAAALAJQAMAIAFAPQADAKAAAKQAAAKgDAKQgEAPgMAJQgMAJgRAAQgPAAgMgJgAgKgYQgEAEgDAHQgBAEAAAJQAAAJABAFQACAHAFAEQAFAEAFAAQAGAAAFgEQAFgEACgHQABgGAAgIQAAgHgBgGQgDgHgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_24.setTransform(78.075,50.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIAAgCIAAhgIAAgCIACgBIAWAAIACABIABACIAABgIgBACIgCABgAgKgtQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_25.setTransform(70.025,48.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA7QgIgFgBgPIAAg0IgBgBIgKAAIgCgBIgBgBIAAgSIABgCIACgBIAKAAIABgBIAAgXIABgCIACgBIAVAAIACABIAAACIAAAXIABABIAUAAIACABIAAACIAAASIAAABIgCABIgUAAIgBABIAAApQAAAGAEAEQACADAGgBIAGAAIACABIABACIAAATQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgLAAQgQAAgIgGg");
	this.shape_26.setTransform(63.6,49.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLBJIgBgBIgBgCIAAhgIABgCIABgBIAXAAIABABIABACIAABgIgBACIgBABgAgKgtQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAFAFQAEAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_27.setTransform(57.375,48.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcA+QgLgHgEgOQgDgKAAgOQAAgOADgJQAFgMAKgJQAKgHAPAAQAMAAAIAKIABABIAAgsIABgBIACgBIAXAAIACABIABABIAACGIgBABIgCABIgXAAIgCgBIgBgBIAAgIIgBAAQgHALgPAAQgNAAgKgIgAgMgCQgGAHABANQAAAMAEAIQAEAJAJAAQAJAAAGgJQADgIAAgMQAAgOgEgGQgFgIgIAAQgJAAgEAIg");
	this.shape_28.setTransform(49.1,49.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAABIgCABIgXAAIgCgBIgBgBIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_29.setTransform(38.125,50.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdA0IgBgBIgBgCIAAhgIABgCIABgBIAYAAIABABIABACIAAAHIABABIAAAAQAIgMANAAQAIAAADADQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgFAWQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgHgBIgFAAQgIABgEAFQgEAEAAAIIAAA1IgBACIgBABg");
	this.shape_30.setTransform(29.825,50.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLBGIgCgBIgBgCIAAhuIAAgBIgjAAIgBgBIgBgCIAAgTIABgCIABgBIBjAAIACABIABACIAAATIgBACIgCABIgkAAIgBABIAABuIAAACIgCABg");
	this.shape_31.setTransform(20.9,48.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8D075").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_32.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.Center_TM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("TEST\nSOCIAL", "bold 48px 'Times New Roman'", "#3366FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 55;
	this.text.lineWidth = 252;
	this.text.parent = this;
	this.text.setTransform(316.3,273.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aywf8Qg3hwg6iRQgjhVhCixQg6AEg2AXQg2AYgqAoQAQgyA7geQAqgWBJgPQhCiehciYQirDbjZCuQgMAJgNADQgPACgFgLQDsizC2jpQimlLj2kWQgJgKgCgNQgCgOALgCQCLBPC5BJQBvAtDiBOQAaAJAPgDQATgEAWggIC4kQQAwBhAVBrQAVBsgJBrIHJDLQAaALANAKQAVAOAIARQAJAUgFAYQgEAWgPASQgVAagzAZQheAuh+AiQhMAViaAfIhcJMQgDAXgIAPQgLATgSABIgBABQgYAAgUgqgAx3WzIhYAYQhGAUheARQAiBFBHDBQA+CnA0BaQAIAMAFADQAKAHAIgGQAPiMAeiCIAUhcQAHglAHhKIAMiIQgmABgzAMgA0XNWQgJAEgNARQhfCTh/B8QgTATgBAOQAAALANARQAjAzAlBOIA+CHQAHANAFADQAGAEAPgBQA3gDBjgdQBogdAygFQAQgCAGgGQAGgFACgRQARiwgDkAQAAgOgEgGQgFgIgSgEQhogXhiguQgOgGgGgCIgKgBQgFAAgEACgAwCWFIC7gqQBWgUArgMQBHgVA1gaQAigQATgUQAagaAAgeQAAgVgKgMQgKgMgXgJInMjKQAFDpgVDsgA8kL6QA1BMBDBwIBxDAQAFAHAEABQAHACAHgJQCJiLBvilIltiFQhwgpg6geIhDgkQgogWgcgLQBPBHBXB9gAxgJDQgVAsg/BOQg/BNgVAuQB4A/CDAWQAMi7hDivQgPADgNAdgAcjeAQANgnAGglQAGgfAHhUQAGhJAKgpQAEgRAKACQAKACgDARIgMByQgIBRgGAsQgEAZgEANQgIAVgOAKgAHXbPQhQgJgugbQgdgRgUgaQgUgcgEggQgMARgTALQgTAKgVAAQAEgOATgNQAZgSAGgHQAMgQgBgcIgEgxQgBgQAEgpQADglgDgVQgFgZgVgoQgfg+gJgXQgUgxgEgpQgEgxAUgsQAVguAqgSQAZgLA4gCQBSgDArAEQBFAFAyAXIAnATQAXAKASACQAYAEAdgJQATgFAggPIBQglQASgIAGAJQAEAGgGAHQgFAGgJADIiSA/QAIACATANQAQALALgBQAGgBAHgFIALgHQATgLAXAGQAWAGARAQQANAOAMAWIAUAoQAZAxA8BPQBABXAXAoQArBKgIA4QgFAhgVAeQgUAbgeAUQgtAehSAUQipAsiZAAQg+AAg6gHgAE8YMQgWAcAAAbQACAbAZAcQAeAfArAPQAZAJAhAEQAXADAlABQDGAGCeggQBrgVA6gpQApgdALghQAIgWgDgiQgGgzghg4QgUgigvg8QAgBdACBjQABAygMAcQgRAngrAaQgpAZg8AIQglAFhIABQgsAAgWgCQglgDgcgIQgfgKgigVQgUgMgogdQhPg7gqglQgkAhgIAIgAL8RfQgGAAgHAKQgWAhgbAcQgaAbg4AwQgPAOgwAyQgmAngaAWIgzApQgfAZgSATQgKALABAIQABAGAKAJQBHA5AzAkQAaASAQAKQAYAOAWAGQAcAJBCAAIBggBQAxAAAXgFQApgHAjgWQAegSAKgWQAIgRAAgkQABhJgGgjQgEgggWhDQgOgrgOgVQgQgXgmgfQgxgog2gqQgGgFgEAAIgBAAgAEhYGIAIgFQAYgWAZgdQgfgggaglgAKaQ1QgTADgWALIgnAWIg/AjQgnAUgXARQglAbglAsQgXAbgoA4QgPAVgDAOQgEATAMAVQAIAPASAVQANAPALAAQAIAAANgLQC6igCpi3QgHgTgWgKQgQgGgQAAIgNABgAFCPoQgaABgOADQgWADgPAJQgRALgMATQgLATgDAWQgGAgALA1QAXBiA3BTQAOgQAvg9QAlgwAbgbQArgqBDgmQAogXBTgnQg8grhdgMQgogFg9AAIhDABgAMPROICCBlIg/hjQgGgLgHgDIgMgCIgEAAQgdAAgJAOgAfUQRQgEmogGjUQgJlggZkZQgNiYgQhrQgViNgghzQAEgHALABQAJABAGAHQAIAJACAYQAGA7ARBdIAbCXQAMBNAHBiQAFA6AGB1QAUGeAGDPQAKFagJEUQgBAjgSAGgAg+t3QAQgRArgIQBOgPBigJQA/gGB0gHQEOgRCKgFQCNgGDEgEIDpgGQAMgBAJAEQALAEABAJQiQARiPADQglABiLAAQhtAAhDADQg/ADiJANQiCANhGACQhkACgyACQhWAFg9AQQggAJgNABIgNABQgSAAgNgHgA9WycQQmmoQBnhQgIAegWAXQgVAXgeAKQgJADgJgFQgKgFAGgHQu2G8vHGDQgYALgSAAQgPAAgKgJgAz8ykQB7ghDOhEQDxhQBXgaQCeguDvg3IGQhbQHghyEjiVQAkgTAQAQQkRCYmqBtQh3Aej3A3QjzA2h8AgQkrBOmHCKQgxASgdAFQgPACgPAAQgaAAgVgIg");
	this.shape.setTransform(299.741,310.2012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgjOAjPQumumAA0pQAA0oOmumQOmumUoAAQUpAAOmOmQOmOmAAUoQAAUpumOmQumOm0pAAQ0oAAumumgA3halQA6CRA3BvQAUAqAZAAQASgCALgSQAIgQAEgXIBbpMQCagfBMgVQB+ghBegvQAzgYAWgaQAOgTAFgWQAEgXgJgVQgIgRgVgOQgNgJgagMInJjLQAJhrgVhsQgVhrgwhgIi4EPQgWAggTAFQgPADgagKQjihOhvgtQi5hJiLhOQgLABACAOQACANAJALQD2EVCmFLQi2DqjrCyQAEAMAPgDQANgCAMgKQDZiuCsjbQBcCZBBCdQhJAPgpAWQg8AegQAyQAqgoA3gXQA2gYA5gEQBCCxAjBWgAaUX4QgLAqgGBIQgHBUgFAfQgHAlgMAoIANAGQANgKAIgUQAFgOADgZQAGgsAJhRIALhyQADgRgKgBIgCgBQgIAAgDAPgABoYpQAUAaAeASQAtAaBQAJQDNAYDtg8QBTgVAsgeQAegUAUgbQAWgeAEggQAIg5gqhKQgYgohAhXQg8hPgYgxIgVgoQgMgWgNgNQgRgRgWgGQgXgFgSAKIgMAIQgHAEgFABQgMACgPgMQgUgNgIgBICSg/QAJgEAFgGQAGgHgEgGQgGgIgSAHIhQAlQggAPgSAFQgeAJgYgDQgSgCgXgLIgngTQgygXhFgFQgqgEhSADQg4ACgaALQgpASgVAvQgUArAFAxQADApATAxQAKAXAeA+QAWAoAEAaQAEAUgEAlQgEApABARIAEAxQABAcgMAQQgFAGgaASQgTAOgDAOQAUgBATgKQAUgKAMgSQADAgAUAcgAaWs9QAhByAUCNQAQBsANCYQAZEZAJFfQAGDVAEGnIACC9QASgHABgjQAKkUgLlaQgFjPgVmeQgGh1gFg6QgHhigMhNIgbiXQgRhdgGg7QgCgYgHgIQgHgIgJAAIgDgBQgIAAgEAHgARywyIjpAGQjEAEiNAGQiJAFkOASQh1AGg9AGQhjAJhPAPQgrAIgQASQASAIAagDQANgBAigJQA8gQBXgEQAwgDBkgCQBGgCCDgMQCIgNA/gDQBEgEBsAAQCLAAAlgBQCPgDCQgRQgBgIgLgFQgIgDgKAAIgDAAgEggVgTzQAUARAugSQPHmEO3m8QgGAHALAFQAIAFAKgDQAdgJAVgYQAWgXAHgeQwBHhwlGogAL1+RQkiCVngBzImQBbQjwA2ieAuQhXAajxBQQjOBEh7AhQAhANAsgHQAdgFAxgSQGHiKEshOQB7gfDzg2QD5g4B1geQGrhtEQiYQgHgHgLAAQgOAAgUAKgA1LevQgFgDgHgMQg0hag/inQhHjBgihFQBfgRBFgUIBYgYQAzgMAmAAIgMCHQgHBKgHAlIgUBdQgeCBgPCMQgDADgFAAQgFAAgFgEgAFAZiQglgBgWgDQgigEgZgIQgrgQgegfQgZgcgCgbQAAgbAXgcQAHgIAkggQAqAkBQA7QAnAdAUANQAjAUAeAKQAcAIAlAEQAWABAsAAQBJgBAkgFQA8gIApgZQArgaARgnQAMgcgBgxQgBhkghhdQAwA8ATAjQAhA3AGAzQADAigIAWQgLAhgpAdQg6AphrAVQiFAbihAAIg+gBgAGdYcQgWgHgYgOQgPgKgbgSQgzgkhHg5QgKgIgBgHQgBgIAKgLQASgTAfgZIAzgoQAagXAmgnQAwgxAPgOQA5gxAZgbQAbgcAXggQAHgKAFAAQAFgBAGAFQA2AqAxAoQAmAfAQAXQAPAVANArQAWBDAEAgQAGAjgBBJQAAAkgIARQgKAWgeATQgiAVgpAIQgYAEgwAAIhhABQhCAAgcgIgABiUzQAZAkAgAgQgaAdgXAWIgIAGgA5AV4QgFgDgGgMIg+iHQgmhPgjgzQgNgRAAgLQABgNATgTQB/h9BfiTQANgRAJgEQAJgEALADQAFACAOAGQBiAvBoAXQASAEAFAHQAFAGgBAOQADEAgRCwQgCARgGAGQgFAFgRACQgyAFhoAdQhjAdg3AEIgFAAQgLAAgFgEgACUVTQgSgVgIgPQgLgVADgTQADgOAQgVQAng4AXgaQAlgtAlgaQAXgRAngVIBAgiIAmgXQAWgKAUgEQAXgDAVAIQAWAKAIAUQiqC2i6ChQgMAKgJAAQgLAAgNgPgAyyNZIHMDKQAXAJAKAMQAKAMAAAVQAAAegaAbQgTATgiARQg0AahHAUQgsANhWATIi7AqQAWjsgGjpgAAQQ9QgMg0AGghQAEgWALgTQALgTASgLQAOgJAXgDQANgDAagBQBtgEA8AJQBcAMA8ArQhTAmgoAXQhCAmgsArQgbAaglAwQguA9gPARQg3hUgWhigAJPP4QAKgPAgAAIANACQAGAEAGAKIA/BjgA7yQoQgEgCgFgHIhxjAQhDhwg1hLQhWh9hQhIQAcALAoAWIBDAlQA6AdBxApIFsCFQhvCliJCLQgGAIgGAAIgCAAgA3ILiQAVgvA/hNQA/hOAVgsQANgdAPgDQBECvgNC7QiDgWh4g+g");
	this.shape_1.setTransform(318.9,318.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,637.8,637.8);
p.frameBounds = [rect];


(lib.Social_Media = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-1,0.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-62,125,125);
p.frameBounds = [rect];


(lib.b_Traditional = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(60,0.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-62,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-33.7,-93.2,187.5,187.5), new cjs.Rectangle(-2.5,-62,125,125), new cjs.Rectangle(-33.7,-93.2,187.5,187.5)];


(lib.a_SM_BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Social_Media();
	this.instance.setTransform(1,-0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-62.5,125,125);
p.frameBounds = [rect];


(lib._1_TM_BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.b_Traditional();
	this.instance.setTransform(2.5,62);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.b_Traditional(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5,x:-28.8},0).wait(1).to({scaleX:1,scaleY:1,x:2.5},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:-29.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-31.2,187.5,187.5);
p.frameBounds = [rect, new cjs.Rectangle(-79.4,-77.8,281.3,281.3), new cjs.Rectangle(-31.2,-31.2,187.5,187.5), new cjs.Rectangle(-80.4,-77.8,281.3,281.3)];


// stage content:
(lib.atomanimateredo_BUTTON_WIPE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		
		// Enable mouseover events
		stage.enableMouseOver(3);
		
		// Mouseover event for TRADITIONAL MEDIA
		_this.a_TM_BUTTON.on('mouseover', function () {
			_this.Center_TM.visible = true;
		});
		
		// Mouseout event for TRADITIONAL MEDIA
		_this.a_TM_BUTTON.on('mouseout', function () {
			_this.Center_TM.visible = false;
		});
		var _this = this;
		
		// Enable mouseover events
		stage.enableMouseOver(30);
		
		// Mouseover event for SOCIAL MEDIA
		_this.a_SM_BUTTON.on('mouseover', function () {
			_this.Center_SM.visible = true;
		});
		
		// Mouseout event for SOCIAL MEDIA
		_this.a_SM_BUTTON.on('mouseout', function () {
			_this.Center_SM.visible = false;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.a_TM_BUTTON = new lib._1_TM_BUTTON();
	this.a_TM_BUTTON.name = "a_TM_BUTTON";
	this.a_TM_BUTTON.setTransform(495.25,204.45,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.a_TM_BUTTON, 0, 1, 2, false, new lib._1_TM_BUTTON(), 3);

	this.Center_TM = new lib.Center_TM();
	this.Center_TM.name = "Center_TM";
	this.Center_TM.setTransform(487.35,485.35);
	this.Center_TM.visible = false;
	new cjs.ButtonHelper(this.Center_TM, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Center_TM},{t:this.a_TM_BUTTON}]}).wait(1));

	// Layer_1
	this.a_SM_BUTTON = new lib.a_SM_BUTTON();
	this.a_SM_BUTTON.name = "a_SM_BUTTON";
	this.a_SM_BUTTON.setTransform(370.25,803.05);
	new cjs.ButtonHelper(this.a_SM_BUTTON, 0, 1, 1);

	this.Center_SM = new lib.Center_TM();
	this.Center_SM.name = "Center_SM";
	this.Center_SM.setTransform(792.6,460.85,1,1,0,0,0,318.9,318.9);
	this.Center_SM.visible = false;
	new cjs.ButtonHelper(this.Center_SM, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Center_SM},{t:this.a_SM_BUTTON}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#656667").ss(10).p("EgxTAAAQAAqBD4pKQDvo3G1m1QG1m0I2jwQJLj4KBAAQKCAAJLD4QI2DwG1G0QG1G1DvI3QD4JKAAKBQAAKCj4JLQjvI2m1G1Qm1G1o2DvQpLD4qCAAQqBAApLj4Qo2jvm1m1Qm1m1jvo2Qj4pLAAqCg");
	this.shape.setTransform(509.5,519.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(700.9,576.1,936.3,1059.1);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '6A2501881A36E940B82778FDDB5B77C7',
	width: 1024,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6A2501881A36E940B82778FDDB5B77C7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;