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
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BdIgBgBIgBgCIAAgYIABgCIACgBIASgCQAGgBAEgFQAEgFACgIIAAgCIgriAIAAgBQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAgAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAVBUIAAABIABgBIAWhUQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIAfAAIADABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgtCGQgHAUgHAJQgFAJgNAEQgMAFgWAAg");
	this.shape_12.setTransform(97.575,80.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLBOQgLgIAAgTIAAhFQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgPAAIgCgBIgBgDIAAgWIABgDIACgBIAPAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgfIABgCIACgBIAdAAIACABIABACIAAAfQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAZAAIACABIABADIAAAWIgBADIgCABIgZAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAA3QAAAJADADQAEAEAIABIAIAAIACAAIABACIAAAZQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgPABQgVAAgLgHg");
	this.shape_13.setTransform(85.95,76.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBbIgCgBIgBgCIAAivIABgCIACgBIAdAAIADABIABACIAACvIgBACIgDABg");
	this.shape_14.setTransform(77.95,75.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguA7QgNgJAAgUQABgUAOgLQAPgLAYABIAaAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgHQAAgIgEgFQgGgEgKgBQgHABgGACQgFADgBAFQgBABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgfgFQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQACgNAHgHQAIgKANgEQALgFAQAAQAQAAAOAFQANAHAIAJQAHALAAANIAABWIgBADIgCABIgfAAIgCgBIgBgDIAAgIIAAgBIgBAAQgLAPgXAAQgUAAgNgKgAgPAOQgGAFgBAHQAAAIAGADQAFAFAHAAQALAAAHgHQAJgFgBgKIAAgJQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIgSAAQgLAAgHAFg");
	this.shape_15.setTransform(67.6,78.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BdIgBgBIgBgCIAAgYIABgCIADgBIARgCQAHgBADgFQAEgFACgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgriBQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAgAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABIAVBUIABABIAAgBIAWhUQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIAgAAIACABIAAADIgtCGQgGAUgHAJQgGAJgMAEQgMAFgXAAg");
	this.shape_16.setTransform(55.125,80.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkA6QgQgMgGgUQgDgNAAgNQAAgOADgNQAHgUAPgKQAPgLAWAAQAVAAAPALQAPALAGASQAFAOAAAOQAAALgEAOQgGAVgPAMQgQALgWAAQgUAAgQgLgAgOgfQgGAEgDAJQgBAJAAAJQAAAMABAGQACAIAHAGQAHAGAHgBQAIABAGgGQAHgGACgIQACgLABgHQgBgIgCgKQgCgJgHgEQgFgGgJAAQgIAAgGAGg");
	this.shape_17.setTransform(42.05,78.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag7BbIgCgBIgBgCIAAivIABgCIACgBIAeAAIADABIAAACIAACRQAAABABAAQAAAAAAAAQAAABAAAAQABAAAAAAIBUAAIACAAIABADIAAAZIgBACIgCABg");
	this.shape_18.setTransform(27.8,75.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglBEIgDgBIgBgDIAAh+IABgCIADgBIAeAAIACABIABACIAAAKIABABIAAgBQALgPARAAQAJAAAGAEQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgGAfQAAAAAAABQgBAAAAAAQgBABAAgBQgBAAgBAAIgJgBIgFABQgKABgGAFQgGAGAAAKIAABGIgBADIgCABg");
	this.shape_19.setTransform(114.125,46.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggA7QgQgKgHgSQgFgOAAgUQAAgOAEgLQAGgSAPgLQAOgLAVAAQAaAAAPAPQAQAPADAZQACALgBAKQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIhQAAIgBABIADAKQAHAPAUAAQARAAAJgOQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIABABIATASIABADIgBACQgIAKgOAGQgNAGgQAAQgWAAgPgKgAgVgVIgCAIQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAsAAQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIgCgHQgCgHgGgFQgGgEgIAAQgQAAgFAPg");
	this.shape_20.setTransform(101.5813,46.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA+BEIgCgBIgBgDIAAhNQAAgJgFgHQgGgHgJABQgJgBgGAHQgGAHAAAJIAABNIAAADIgDABIgdAAIgCgBIgBgDIAAhNQAAgKgGgGQgGgHgJABQgIAAgGAEQgFAFgBAJIAABRIgBADIgCABIgfAAIgCgBIgBgDIAAh+IABgCIACgBIAfAAIACABIABACIAAAKIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQALgPAWAAQAOAAAJAFQAJAGAFAKQAAAAABABQAAAAAAAAQAAAAABAAQAAgBAAAAQAGgLAKgFQAJgFANAAQAUAAALAMQAMAMAAAXIAABUIgBADIgCABg");
	this.shape_21.setTransform(83.675,46.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkA5QgQgKgGgVQgDgLAAgPQAAgQADgLQAGgTAQgLQAPgLAVAAQAWAAAPALQAPALAGATQAEAMAAAPQAAAOgDAMQgGAUgPALQgQAMgWAAQgUAAgQgMgAgOggQgGAFgCAJQgCAGAAAMQAAALABAHQADAIAGAGQAHAGAHgBQAIABAHgGQAGgGACgIQACgHAAgLQAAgLgCgHQgDgJgGgFQgFgEgJAAQgIAAgGAEg");
	this.shape_22.setTransform(65.475,46.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLBOQgKgIgBgTIAAhFIgBgBIgPAAIgCgBIgBgDIAAgXIABgCIACgBIAPAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgfIABgCIACgBIAcAAIADABIABACIAAAfQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAZAAIACABIABACIAAAXIgBADIgCABIgZAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAA3QgBAIAEAEQAEAFAHAAIAJAAIACAAIABADIAAAYQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgPABQgVAAgLgHg");
	this.shape_23.setTransform(53.35,45.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdBAQgMgFgIgJQgHgIAAgMIAAgDIABgCIACgBIAdAAIACABIABACIAAABQAAAGAHADQAFAEAJAAQAKAAAFgDQAFgDAAgGQAAgEgFgDIgPgFQgMgDgGgDQgRgFgKgIQgKgIAAgQQABgTAPgLQAPgMAYAAQAPAAANAGQANAFAHAKQAGAKAAAMIgBACIgBABIgcAAIgCgBIgBgCQgBgGgFgEQgHgEgIAAQgIAAgGADQgFADgBAGQABAFAFADQAHADAKACIAOAEQATAGAKAHQALAJAAAQQAAATgPALQgPALgbAAQgQAAgNgFg");
	this.shape_24.setTransform(42.1,46.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgsA4QgNgMAAgWIAAhWIABgCIADgBIAdAAIADABIABACIAABNQAAALAFAGQAGAHAJAAQAIAAAHgGQAFgFABgJIAAhRIABgCIADgBIAeAAIACABIABACIAAB/IgBACIgCABIgeAAIgDgBIgBgCIAAgJIAAgBIgBABQgLAOgUAAQgUAAgNgMg");
	this.shape_25.setTransform(28.3,46.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjBVQgPgIgIgOQgJgPAAgSIAAg7QAAgTAJgOQAIgOAPgJQAQgHATAAQAUAAAPAHQAPAHAJAOQAJAOAAASQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgeABIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgNgJgKQgIgIgOAAQgNAAgIAIQgJAJAAAOIAAA9QAAAOAJAIQAIAJANAAQAOAAAIgJQAJgIAAgOQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIAeABIADABIABABQAAASgJAOQgKAPgOAHQgPAHgUAAQgSAAgRgIg");
	this.shape_26.setTransform(13.425,44.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8361A8").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_27.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
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
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_2.setTransform(62.5,62.5);

	// Layer_3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgpBKIgBgBIgBgBIAAgTIABgCIACAAIAOgCQAFgBADgEQADgEABgGQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIgihoIAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAaAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIARBDIAAABIABgBIAShDQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAaAAIACABIAAABIgkBsQgFAOgGAJQgFAIgJADQgJAEgTgBg");
	this.shape_28.setTransform(110.275,76.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWBKQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgWQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAOACQAMAAAHgGQAIgFAAgOIAAgBIgBABQgJAJgOgBQgNAAgMgGQgLgHgEgPQgEgHAAgQQAAgQAEgKQAFgOAJgHQALgIAOAAQAPAAAJAKIABAAIAAgGIABgBIABgBIAZAAIABABIABABIAABfQAAAbgQAMQgQALgXAAIgQgBgAgJgtQgEADgCAGQgDAGgBALQAAALADAFQADAGAEACQAEAEAGAAQAHAAAEgEQAFgCABgGQABgGABgKIAAgLIgCgGQgDgGgDgDQgEgEgHAAQgGAAgEAEg");
	this.shape_29.setTransform(99.1,76.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAuQgMgIgFgRQgDgJAAgMQAAgLADgKQAFgPAMgJQANgJAQAAQARAAANAJQALAIAGAQQADAMAAAJQAAALgDAKQgEAPgNAKQgNAJgRAAQgQAAgNgJgAgLgZQgFAFgCAGQgCAFAAAJQABAKABAFQACAHAFAEQAFAEAGAAQAGAAAGgEQAEgEACgHQACgHAAgIQAAgIgCgGQgCgHgEgEQgGgEgGAAQgGAAgFAEg");
	this.shape_30.setTransform(87.65,74.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLBJIgCAAIgBgDIAAiLIABgCIACgBIAXAAIACABIABACIAACLIgBADIgCAAg");
	this.shape_31.setTransform(79.325,72.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAuQgNgJgEgQQgDgJAAgMQAAgLADgKQAGgQAMgIQALgJASAAQAQAAAMAJQANAIAEAQQAEAKAAALQAAALgDAKQgFAQgMAJQgMAJgSAAQgQAAgNgJgAgLgZQgEAEgCAHQgCAHAAAHQAAAKABAFQACAHAFAEQAFAEAGAAQAGAAAGgEQAFgFACgGQABgGAAgJQAAgIgBgGQgDgHgFgEQgEgEgHAAQgGAAgFAEg");
	this.shape_32.setTransform(70.95,74.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AATA2IgBAAIgBgCIAAg9QAAgJgEgFQgFgFgIAAQgHAAgEAFQgFAFAAAJIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIAAABIABAAQAJgMAPgBQARAAAKALQAKAKAAARIAABEIgBACIgBAAg");
	this.shape_33.setTransform(59.55,74.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAUBJIgCAAIgBgDIAAg+QAAgIgEgEQgFgFgIgBQgHABgFAFQgEAEAAAIIAAA+IgBADIgCAAIgYAAIgCAAIgBgDIAAiLIABgCIACgBIAYAAIACABIABACIAAAuIABABIAAAAQAIgNARAAQAQAAALALQAJAJABARIAABEIgBADIgCAAg");
	this.shape_34.setTransform(48.15,72.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbAvQgMgIgFgPQgEgKAAgOQAAgOAEgKQAFgOAMgIQANgIAPAAQAQAAANAIQANAIAEANIACAIIAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgYADIgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgDQgBgGgFgDQgFgEgHAAQgGAAgEAEQgFADgCAGQgCAGAAAKQAAAJACAIQACAGAEAEQAFADAGAAQAGAAAFgDQAFgFACgFIAAgBIAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAYAEQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgBAHQgEAOgNAHQgMAIgRAAQgQAAgMgIg");
	this.shape_35.setTransform(36.925,74.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgLAAgQQAAgMADgIQAFgPAMgIQAMgJAQAAQAUAAANAMQAMAMADAUQABAJAAAIQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIgBABIACAJQAGALAPAAQAOAAAHgKIACgCIACABIAPAPIABACIgBABQgHAJgLAFQgLAEgNAAQgRAAgMgIgAgRgRIgBAHIABABIAjAAIABgBIgBgGQgDgHgEgCQgFgEgGAAQgNAAgEAMg");
	this.shape_36.setTransform(25.6063,74.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMBJIgCAAIAAgDIAAh0IgBgBIgkAAIgCAAIgBgCIAAgUIABgCIACgBIBoAAIACABIAAACIAAAUIAAACIgCAAIgmAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAB0IgBADIgCAAg");
	this.shape_37.setTransform(15.5,72.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWBKQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIABgVQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOACQAMAAAIgGQAHgGAAgNIgBAAIgBAAQgHAJgPAAQgNAAgMgHQgMgHgEgOQgDgJAAgPQAAgRAEgJQAEgNAKgIQAMgIANAAQAOAAAJAKIABAAIABAAIAAgGIAAgCIACAAIAZAAIABAAIABACIAABfQAAAagQAMQgQAMgXAAIgQgBgAgJgtQgEADgCAGQgDAGgBALQAAAKADAHQABAEAFAEQAFADAGAAQAHAAAEgDQADgEADgEQABgGABgLIgBgKIgBgHQgCgFgEgEQgEgDgHAAQgGAAgEADg");
	this.shape_38.setTransform(102.25,51.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg+QAAgHgEgGQgFgFgIAAQgHAAgFAFQgEAGAAAHIAAA+IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIABABIAAAAQAIgNARAAQAQAAALALQAJAKABARIAABEIgBACIgCAAg");
	this.shape_39.setTransform(90.9,49.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLBMIgCAAIgBgCIAAhmIABgCIACAAIAXAAIACAAIAAACIAABmIAAACIgCAAgAgLgvQgEgFAAgGQAAgIAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAIQAAAGgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape_40.setTransform(82.525,47.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIA/QgJgHAAgPIAAg3IgBgBIgMAAIgCgBIgBgBIAAgTIABgCIACgBIAMAAIABgBIAAgYIABgCIABgBIAXAAIACABIAAACIAAAYIABABIAUAAIACABIAAACIAAATIAAABIgCABIgUAAIgBABIAAArQAAAHADADQADADAGABIAHAAIABABIABABIAAAUQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgMABQgRAAgIgFg");
	this.shape_41.setTransform(75.8,48);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgLAAgQQAAgKADgKQAFgPAMgIQAMgJAQAAQAUAAANAMQAMALADAVIABARQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAJQAFALAQAAQAOAAAHgKIACgCIACABIAPAPIABACIgBABQgHAJgLAFQgKAEgOAAQgRAAgMgIgAgRgRIgBAHIABABIAjAAIABgBIgBgGQgDgHgEgCQgFgEgGAAQgMAAgFAMg");
	this.shape_42.setTransform(66.5583,49.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAUBJQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgVgxIAAAAIgBAAIgNARIAAABIAAAfIgBACIgCAAIgYAAIgCAAIgBgCIAAiMIABgCIACgBIAYAAIACABIABACIAABFIAAABIABAAIAbghIADgBIAcAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAACIgbAhIAAABIAeBCIABACQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_43.setTransform(56.55,47.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeA2IgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAIIAAAAIABAAQAIgMAOAAQAHAAAFADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAXQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgIgBIgEAAQgHABgGAFQgEAFAAAIIAAA4IgBACIgCAAg");
	this.shape_44.setTransform(47.1063,49.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgkAvQgLgHABgQQAAgQALgIQALgJAVAAIAUAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgEQAAgHgEgEQgDgEgKAAQgFAAgEACQgFADgBAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgZgDQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQABgIAGgIQAGgHALgEQAKgEALAAQAMAAAMAFQALAFAGAHQAFAJAAAKIAABFIAAACIgCABIgYAAIgCgBIgBgCIAAgHIAAAAIgBAAQgIALgTAAQgQAAgKgIgAgLALQgGAEAAAGQAAAGAEADQAFAEAGAAQAHAAAHgFQAGgFAAgIIAAgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgPAAQgIAAgFADg");
	this.shape_45.setTransform(36.95,49.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAjBJIgCAAIAAgCIAAhcIgBAAIgBAAIgWAiQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgLAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgWgiIgBAAIAAABIAABbIgBACIgCAAIgYAAIgCAAIgBgCIAAiMIABgCIACgBIAYAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAfAwQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAfgwQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAYAAIACABIABACIAACMIgBACIgCAAg");
	this.shape_46.setTransform(24.225,47.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CD539F").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_47.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
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
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_3.setTransform(62.5,62.5);

	// Layer_3
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWBJQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIABgWQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAOABQAMAAAIgFQAHgGAAgNIgBgBIgBAAQgHAJgPAAQgOAAgLgGQgMgIgEgOQgDgIAAgPQAAgRAEgKQAEgMAKgJQALgHAOAAQAPAAAIAKIABAAIABgBIAAgFIAAgBIACgBIAZAAIABABIABABIAABeQAAAbgQAMQgPAMgYAAgAgJgtQgEADgCAGQgDAGgBALQAAALADAFQABAEAFAEQAFAEAGAAQAHAAAEgEQADgDADgFQABgGABgKIgBgLIgBgGQgCgFgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_48.setTransform(102.25,77.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg9QAAgIgEgGQgFgFgIAAQgGAAgGAFQgEAGAAAIIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIABABIAAAAQAIgMARAAQAQAAALAKQAJALABARIAABDIgBACIgCAAg");
	this.shape_49.setTransform(90.9,75.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgLBMIgCgBIgBgBIAAhmIABgCIACAAIAXAAIACAAIAAACIAABmIAAABIgCABgAgLgvQgEgEAAgIQAAgGAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAGQAAAIgEAEQgFAFgHAAQgGAAgFgFg");
	this.shape_50.setTransform(82.525,73);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgIA+QgJgFAAgRIAAg2IgBgBIgMAAIgCgBIgBgCIAAgTIABgBIACgBIAMAAIABgBIAAgZIABgCIABAAIAXAAIACAAIAAACIAAAZIABABIAUAAIACABIAAABIAAATIAAACIgCABIgUAAIgBABIAAArQAAAHADADQADAEAGgBIAHAAIABABIABACIAAAUQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgMABQgRAAgIgGg");
	this.shape_51.setTransform(75.8,73.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgaAvQgNgIgFgPQgEgKAAgQQAAgKADgKQAFgPAMgJQALgIARAAQAUAAANAMQAMAMADAUIABARQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIgBABIACAIQAGAMAPAAQANAAAIgLIACgBIACABIAPAPIABACIgBABQgHAJgLAEQgKAFgOAAQgQAAgNgIgAgRgRIgBAHIABABIAjAAIABgBIgBgGQgCgGgFgEQgGgDgFAAQgMAAgFAMg");
	this.shape_52.setTransform(66.5583,75.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAUBJQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgVgxIAAAAIgBAAIgNARIAAABIAAAeIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAIACABIABACIAABFIAAABIABgBIAbggIADgBIAcAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIgbAhIAAABIAfBDQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_53.setTransform(56.55,73.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeA2IgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAIIAAABIABgBQAIgMAOAAQAHAAAFADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAYQAAAAAAABQgBAAAAAAQAAABgBAAQAAgBgBAAIgIgBIgEABQgHAAgGAFQgEAFAAAIIAAA4IgBACIgCAAg");
	this.shape_54.setTransform(47.1063,75.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkAvQgLgIABgPQAAgQALgIQALgJAVAAIAUAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgEQAAgHgEgEQgEgEgJAAQgFAAgEACQgFADgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgZgEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQABgJAGgHQAHgIAKgDQAKgEALAAQAOAAAKAEQAMAGAFAHQAFAJAAAJIAABGIAAACIgCAAIgYAAIgCAAIgBgCIAAgHIAAgBIgBABQgJALgSAAQgQAAgKgIgAgLALQgGAEAAAGQAAAFAEAEQAEADAHAAQAIAAAGgFQAGgFAAgHIAAgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgPAAQgJAAgEADg");
	this.shape_55.setTransform(36.95,75.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAjBJIgCgBIAAgCIAAhaIgBgBIgBAAIgWAiQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgWgiIgBAAIAAABIAABaIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIAfAwQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAfgwQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAYAAIACABIABACIAACLIgBACIgCABg");
	this.shape_56.setTransform(24.225,73.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgIA+QgJgFAAgRIAAg3IgBgBIgMAAIgCAAIgBgCIAAgSIABgCIACgBIAMAAIABgBIAAgYIABgDIABAAIAXAAIABAAIABADIAAAYIABABIAUAAIACABIABACIAAASIgBACIgCAAIgUAAIgBABIAAAsQAAAGADAEQADAEAGAAIAHAAIACAAIAAACIAAATQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgNABQgQAAgIgGg");
	this.shape_57.setTransform(95.475,48.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAUA2IgDAAIAAgCIAAg9QAAgIgEgGQgGgFgHAAQgHAAgFAFQgEAGAAAIIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIABABIAAAAQAIgMARAAQAQAAAKAKQALAKAAASIAABDIgBACIgCAAg");
	this.shape_58.setTransform(85.95,50.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgPQgEgKAAgQQAAgLADgJQAFgPAMgJQAMgIAQAAQAVAAALAMQANAMADAUIABARQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIg/AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAIQAGAMAQAAQAMAAAIgLIACgBIACABIAOAPIABACIAAABQgHAJgLAEQgKAFgNAAQgQAAgOgIgAgRgRIgCAHQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAjAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAIgBgGQAAgFgGgFQgFgDgGAAQgNAAgEAMg");
	this.shape_59.setTransform(74.6,50.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgIA+QgJgFAAgRIAAg3IgBgBIgMAAIgCAAIgBgCIAAgSIABgCIACgBIAMAAIABgBIAAgYIABgDIABAAIAXAAIABAAIABADIAAAYIABABIAUAAIACABIABACIAAASIgBACIgCAAIgUAAIgBABIAAAsQAAAGADAEQADAEAGAAIAHAAIACAAIAAACIAAATQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgNABQgQAAgIgGg");
	this.shape_60.setTransform(64.925,48.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AATA2IgBAAIgBgCIAAg9QAAgIgFgGQgEgFgIAAQgGAAgFAFQgFAGAAAIIAAA9IgBACIgBAAIgZAAIgCAAIAAgCIAAhlIAAgCIACgBIAZAAIABABIABACIAAAHIAAABIABAAQAIgMAQAAQAQAAALAKQALALgBARIAABDIAAACIgCAAg");
	this.shape_61.setTransform(55.4,50.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdAuQgMgJgFgQQgDgLAAgKQAAgKADgLQAFgQAMgJQANgIAQAAQARAAAMAIQANAKAFAOQADALAAALQAAALgDAJQgFARgMAJQgMAJgSAAQgRAAgMgJgAgLgZQgEAEgDAHQgBAFAAAJQAAAJABAFQACAHAFAFQAEAEAHAAQAIAAAEgEQAFgFACgHQABgGAAgIQAAgIgBgGQgCgGgFgFQgGgEgGAAQgGAAgFAEg");
	this.shape_62.setTransform(43.875,50.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgbBEQgNgGgGgMQgHgLAAgPIAAgvQAAgPAHgMQAGgLANgGQAOgHANAAQARAAALAGQANAGAGALQAHALAAAPQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgYABIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgLgHgHQgGgGgMAAQgLAAgGAGQgGAHgBALIAAAxQABALAGAHQAGAGALAAQAMAAAGgGQAHgHAAgLQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAYABIACABIAAABQAAAPgHALQgGALgNAGQgLAGgRAAQgPAAgMgHg");
	this.shape_63.setTransform(31.8,48.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5F62AA").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_64.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
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
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_4.setTransform(62.5,62.5);

	// Layer_3
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgWBHQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgVQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIANABQAMABAHgGQAHgFAAgNIgBAAIgBAAQgHAIgOAAQgNAAgKgGQgLgGgFgOQgDgIAAgPQAAgQAEgKQAEgMAKgHQAKgHANgBQAPAAAHAKIABAAIABgBIAAgEIAAgCIACgBIAXAAIACABIABACIAABaQAAAagPALQgPALgXgBIgQAAgAgJgrQgDADgDAFQgDAHAAAKQAAAKADAGQACADAEAFQAFACAFABQAHgBADgCQAEgEACgEQACgGAAgKIgBgKIgBgHQgCgFgEgDQgEgDgGAAQgFAAgFADg");
	this.shape_65.setTransform(100.425,76.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AASA0IgBgBIAAgBIAAg7QgBgHgEgGQgEgFgIAAQgGAAgFAFQgEAGgBAHIAAA7IAAABIgBABIgYAAIgCgBIgBgBIAAhhIABgBIACgBIAYAAIABABIAAABIAAAHIABABIAAAAQAJgMAPAAQAPAAALAKQAKAKgBARIAABAIAAABIgCABg");
	this.shape_66.setTransform(89.6,74.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIAAgCIAAhgIAAgCIACgBIAWAAIACABIABACIAABgIgBACIgCABgAgKgsQgFgFAAgHQAAgHAFgFQAEgDAGAAQAGAAAFADQAFAFAAAHQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_67.setTransform(81.625,72.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgIA7QgJgFAAgPIAAg0IgBgBIgKAAIgCgBIgBgBIAAgSIABgCIACgBIAKAAIABgBIAAgXIABgCIACgBIAWAAIABABIAAACIAAAXIABABIATAAIADABIAAACIAAASIAAABIgDABIgTAAIgBABIAAApQAAAGADAEQADADAGAAIAGAAIACAAIABACIAAATQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgLAAQgQAAgIgGg");
	this.shape_68.setTransform(75.2,73.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgYAtQgNgJgEgNQgFgJAAgQQAAgKADgJQAFgOALgIQAMgJAPAAQATAAAMAMQANALACAUQABAIAAAHQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIg8AAIgBABIACAIQAFALAPAAQANAAAHgKIACgCIAQAPIABACIgBACQgGAIgLAEQgKAFgNAAQgQAAgLgIgAgQgQIgBAHIABABIAhAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgBgGQgCgGgEgDQgFgEgGAAQgMAAgEAMg");
	this.shape_69.setTransform(66.3813,74.675);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AATBGQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgSguIgBgBIgBABIgMAQIgBABIAAAdIAAACIgCABIgXAAIgCgBIgBgCIAAiGIABgBIACgBIAXAAIACABIAAABIAABDIABABIAAgBIAagfIADgBIAbAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIgBADIgZAeIAAABIAdA/IABACQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_70.setTransform(56.825,72.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgdA0IgBgBIgBgCIAAhgIABgCIABAAIAYAAIABAAIABACIAAAIIABAAQAIgMANAAQAHAAAEADQABAAAAAAQAAABAAAAQABAAAAABQAAAAgBABIgEAXQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgHgBIgFAAQgHABgFAFQgEAEAAAIIAAA1IgBACIgBABg");
	this.shape_71.setTransform(47.8063,74.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAACIgCAAIgXAAIgCAAIgBgCIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_72.setTransform(38.125,74.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAhBGIgBgBIgBgCIAAhWIAAgBIgBAAIgWAgQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgLAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgVggIgBAAIAAABIAABWIAAACIgCABIgYAAIgBgBIgBgCIAAiGIABgBIABgBIAYAAIACACIAeAuQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAIAfguQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAYAAIABABIABABIAACGIgBACIgBABg");
	this.shape_73.setTransform(26,72.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgLBGIgBgBIgBgCIAAiFIABgCIABgBIAXAAIABABIABACIAACFIgBACIgBABg");
	this.shape_74.setTransform(107.45,48.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAABIgCABIgXAAIgCgBIgBgBIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_75.setTransform(99.525,50.825);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AATA0IgCgBIgBgBIAAg7QAAgHgEgGQgFgFgHAAQgGAAgFAFQgEAGAAAHIAAA7IgBABIgCABIgXAAIgCgBIAAgBIAAhhIAAgBIACgBIAXAAIACABIABABIAAAHIAAABIABAAQAIgMAPAAQAQAAAKAKQAJAJAAASIAABAIAAABIgCABg");
	this.shape_76.setTransform(89.075,50.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgbAsQgMgIgFgQQgDgJAAgLQAAgLADgJQAFgPAMgIQAMgJAPAAQARAAALAJQAMAIAFAPQADAKAAAKQAAAKgDAKQgEAPgMAJQgMAJgRAAQgPAAgMgJgAgKgYQgEAEgDAHQgBAEAAAJQAAAJABAFQACAHAFAEQAFAEAFAAQAGAAAFgEQAFgEACgHQABgGAAgIQAAgHgBgGQgDgHgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_77.setTransform(78.075,50.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIAAgCIAAhgIAAgCIACgBIAWAAIACABIABACIAABgIgBACIgCABgAgKgtQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_78.setTransform(70.025,48.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgIA7QgIgFgBgPIAAg0IgBgBIgKAAIgCgBIgBgBIAAgSIABgCIACgBIAKAAIABgBIAAgXIABgCIACgBIAVAAIACABIAAACIAAAXIABABIAUAAIACABIAAACIAAASIAAABIgCABIgUAAIgBABIAAApQAAAGAEAEQACADAGgBIAGAAIACABIABACIAAATQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgLAAQgQAAgIgGg");
	this.shape_79.setTransform(63.6,49.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgLBJIgBgBIgBgCIAAhgIABgCIABgBIAXAAIABABIABACIAABgIgBACIgBABgAgKgtQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAFAFQAEAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_80.setTransform(57.375,48.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgcA+QgLgHgEgOQgDgKAAgOQAAgOADgJQAFgMAKgJQAKgHAPAAQAMAAAIAKIABABIAAgsIABgBIACgBIAXAAIACABIABABIAACGIgBABIgCABIgXAAIgCgBIgBgBIAAgIIgBAAQgHALgPAAQgNAAgKgIgAgMgCQgGAHABANQAAAMAEAIQAEAJAJAAQAJAAAGgJQADgIAAgMQAAgOgEgGQgFgIgIAAQgJAAgEAIg");
	this.shape_81.setTransform(49.1,49.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAABIgCABIgXAAIgCgBIgBgBIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_82.setTransform(38.125,50.825);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgdA0IgBgBIgBgCIAAhgIABgCIABgBIAYAAIABABIABACIAAAHIABABIAAAAQAIgMANAAQAIAAADADQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgFAWQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgHgBIgFAAQgIABgEAFQgEAEAAAIIAAA1IgBACIgBABg");
	this.shape_83.setTransform(29.825,50.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLBGIgCgBIgBgCIAAhuIAAgBIgjAAIgBgBIgBgCIAAgTIABgCIABgBIBjAAIACABIABACIAAATIgBACIgCABIgkAAIgBABIAABuIAAACIgCABg");
	this.shape_84.setTransform(20.9,48.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F8D075").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_85.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
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
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("ApmJnIAAzNITNAAIAATNg");
	mask_5.setTransform(61.5,61.5);

	// Layer_3
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgWBJQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgVQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAIANABQAMAAAHgGQAHgFAAgNIAAgBIgBAAQgIAJgOAAQgNAAgLgHQgLgGgFgPQgDgHAAgQQAAgPAEgLQAEgNAKgHQALgIANAAQAPAAAIAKIABAAIAAgBIAAgFIABgBIACgBIAYAAIACABIAAABIAABdQAAAbgPALQgQAMgXAAIgQgBgAgJgtQgEAEgCAFQgDAIAAAJQAAANADADQABAFAFADQAFAEAFAAQAHAAAEgEQAEgDACgEQABgGAAgLIgBgRQgDgFgEgEQgDgDgHAAQgFAAgFADg");
	this.shape_86.setTransform(100.625,76.575);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AATA2IgBgBIgBgCIAAg8QAAgIgFgGQgEgEgIAAQgHAAgEAEQgFAGAAAIIAAA8IAAACIgCABIgYAAIgCgBIgBgCIAAhkIABgBIACgBIAYAAIACABIAAABIAAAIIABAAIAAAAQAJgMAPABQARgBAKAKQAKALAAARIAABCIgBACIgCABg");
	this.shape_87.setTransform(89.475,74.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgLBLIgCgBIgBgCIAAhjIABgCIACgBIAXAAIACABIAAACIAABjIAAACIgCABgAgKguQgFgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgFAFgHAAQgFAAgFgFg");
	this.shape_88.setTransform(81.225,72.425);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAQBDQgRAAgHgGQgJgFAAgQIAAg2IgBgBIgMAAIgBgBIgBgBIAAgTIABgBIABgBIAMAAIABgBIAAgZIABgBIACgBIAVAAIACABIABABIAAAZIABABIAUAAIABABIABABIAAATIgBABIgBABIgUAAIgBABIAAArQAAAGADAEQADADAGAAIAGAAIACABIABABIAAAUQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_89.setTransform(74.625,73.275);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgZAuQgMgHgGgPQgEgKAAgQQAAgLADgJQAFgPALgIQAMgIAQAAQAUAAAMALQANAMACAUQACAJgBAIQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIg/AAIgBABIADAIQAFAMAPAAQAOAAAHgLIACgBIABABIAPAOIABACIgBACQgHAJgKAEQgLAEgMAAQgSAAgLgIgAgQgQIgCAGIABABIAjAAQAAAAAAAAQAAAAABAAQAAAAAAAAQgBgBAAAAIgBgFQgBgGgFgEQgFgDgGAAQgMAAgEAMg");
	this.shape_90.setTransform(65.5313,74.625);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAUBIQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgTgwIgBgBIgBABIgNAQIAAABIAAAeIgBACIgCABIgYAAIgCgBIAAgCIAAiJIAAgCIACgBIAYAAIACABIABACIAABEIAAABIABgBIAbgfIADgCIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAACIgaAgIgBABIAfBBIAAABQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_91.setTransform(55.675,72.725);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgdA2IgCgBIgBgCIAAhkIABgBIACgBIAYAAIABABIABABIAAAIIABABIAAAAQAIgMAOAAQAIAAADACQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgFAXQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBgBIgHgBIgEABQgIABgFAFQgEAEAAAIIAAA3IgBACIgBABg");
	this.shape_92.setTransform(46.375,74.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkAvQgKgJAAgOQAAgPALgJQAMgJAUAAIAUAAIABgBIAAgEQAAgHgEgEQgEgDgIAAQgGAAgEACQgFACAAAEQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgZgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAgIAHgHQAFgHALgEQAKgEALAAQANAAALAEQAKAFAGAIQAGAIAAAKIAABEIgBACIgCABIgYAAIgBgBIgBgCIAAgHIgBAAQgJALgSAAQgQAAgKgHgAgLALQgGAEAAAGQAAAGAEADQAEADAHAAQAIAAAGgFQAGgEAAgIIAAgHIgBgBIgPAAQgIAAgFADg");
	this.shape_93.setTransform(36.375,74.625);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAiBIIgBgBIgBgCIAAhZIgBgBIAAABIgWAhQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgLAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgWghIgBgBIAABaIgBACIgBABIgYAAIgCgBIgBgCIAAiJIABgCIACgBIAYAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAfAwQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAIAfgwIADgCIAYAAIACABIABACIAACJIgBACIgCABg");
	this.shape_94.setTransform(23.875,72.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgJA+QgIgHAAgPIAAg2IgBgBIgMAAIgBgBIgBgBIAAgTIABgBIABgBIAMAAIABgBIAAgYIAAgCIADgBIAVAAIACABIABACIAAAYIABABIAUAAIABABIABABIAAATIgBABIgBABIgUAAIgBABIAAArQAAAGADAEQACADAHAAIAHAAIABABIABABIAAAUQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgNABQgQAAgJgFg");
	this.shape_95.setTransform(83.6,48.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AATA1IgCAAIAAgCIAAg9QAAgHgFgFQgEgFgIgBQgHABgEAFQgFAFAAAHIAAA9IgBACIgBAAIgYAAIgCAAIgBgCIAAhkIABgBIACgBIAYAAIABABIABABIAAAJIABAAQAJgMAPAAQAQAAALAKQAKAJAAASIAABCIgBACIgCAAg");
	this.shape_96.setTransform(74.225,49.95);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgZAuQgMgHgGgOQgEgLAAgPQAAgMADgIQAFgQAMgHQALgKAQAAQAUAAAMAMQANAMACAVQACAIgBAIQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIg/AAIgBABIADAIQAFAMAPAAQAOAAAHgLIACgBIAQAQIABABIgBACQgHAJgKAEQgLAEgMAAQgSABgLgJgAgQgQIgCAHIABAAIAjAAIABAAIgBgHQgCgFgFgEQgEgDgHAAQgMAAgEAMg");
	this.shape_97.setTransform(63.0313,50);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgMA1QgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIghhlQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAABAAIAaAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAQA9IAAABIABgBIARg9QAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAbABIACAAIAAACIggBkQgBAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_98.setTransform(52.7,50.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgvBIIgBgBIgBgCIAAiJIABgCIABgBIBfAAIABABIABACIAAAUIgBABIgBABIhDAAIgBABIAAAgIABABIArAAIACABIAAABIAAATIAAACIgCABIgrAAIgBABIAAAhIABABIBDAAIABABIABABIAAAUIgBACIgBABg");
	this.shape_99.setTransform(41.65,48.125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EF9F52").s().p("AmxGyQi1i0AAj+QAAj9C1i0QC0i1D9AAQD+AAC0C1QC1C0AAD9QAAD+i1C0Qi0C1j+AAQj9AAi0i1g");
	this.shape_100.setTransform(61.5,61.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgWAyQgJgDgHgIQgGgHAAgIIAAgDIABgBIACgBIAWAAIACABIABABIAAABQAAAEAFADQAGAEAFAAQAHAAAFgDQAEgDAAgEQAAgEgEgCIgMgDIgOgFQgOgFgHgFQgIgHAAgMQAAgPAMgJQAMgJATAAQAMAAAKAEQAKAFAFAHQAGAIAAAJIgBACIgCABIgVAAIgCgBIgBgCQAAgEgFgDQgEgDgHAAQgHAAgEACQgEACAAAFQAAAEAEACQAEACAJACIALADQAPAFAIAFQAJAHAAANQAAAPgMAIQgMAJgUAAQgOAAgJgEg");
	this.shape_101.setTransform(99.025,74.575);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AATA1IgCgBIAAgBIAAg8QAAgIgFgFQgEgGgIAAQgHAAgEAGQgFAFAAAIIAAA8IAAABIgCABIgYAAIgCgBIgBgBIAAhjIABgCIACAAIAYAAIACAAIAAACIAAAHIABABIAAAAQAJgNAPAAQAQABALAJQAKAMAAAQIAABCIgBABIgCABg");
	this.shape_102.setTransform(88.275,74.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgcAtQgNgJgEgPQgDgLAAgKQAAgKADgLQAFgPAMgIQANgJAPAAQAQAAANAIQAMAJAFAPQADAKAAALQAAAJgDALQgEAQgNAJQgMAJgRAAQgQAAgMgJgAgLgYQgEADgCAHQgCAGAAAIQAAAJACAFQABAHAFAEQAFAEAGAAQAHAAAFgEQAEgDACgIQACgGAAgIQAAgIgCgGQgCgGgFgEQgEgEgHAAQgHAAgEAEg");
	this.shape_103.setTransform(76.975,74.575);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgMBLIgBgBIgBgCIAAhjIABgCIABgBIAXAAIACABIABACIAABjIgBACIgCABgAgKguQgFgEAAgHQAAgIAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAIQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_104.setTransform(68.7,72.375);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgIA9QgIgFgBgQIAAg2IgBgBIgMAAIgBgBIgBgBIAAgSIABgCIABgBIAMAAIABgBIAAgYIABgCIACgBIAVAAIADABIAAACIAAAYIABABIAUAAIABABIABACIAAASIgBABIgBABIgUAAIgBABIAAAqQAAAHADADQACAEAHAAIAHAAIABAAIABACIAAAUQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgNABQgQAAgIgGg");
	this.shape_105.setTransform(62.1,73.225);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgkAuQgKgHAAgPQAAgQAMgIQAKgJAVAAIAUAAIABgBIAAgEQAAgHgEgEQgEgDgJAAQgFAAgEACQgEACgBAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgZgDQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgIAHgHQAGgIAKgDQAKgEALAAQAOAAAKAFQAKAFAGAHQAGAIAAAKIAABEIgBACIgCABIgYAAIgBgBIgBgCIAAgHIgBAAIAAAAQgJALgSAAQgQAAgKgIgAgLALQgGADAAAHQAAAFAEAEQAEADAHAAQAIAAAGgFQAGgFAAgHIAAgHIgBgBIgPAAQgIAAgFADg");
	this.shape_106.setTransform(52.925,74.575);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgLBHIgCgBIAAgBIAAiJIAAgCIACgBIAXAAIACABIAAACIAACJIAAABIgCABg");
	this.shape_107.setTransform(45.275,72.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgZAuQgNgIgFgOQgEgKAAgQQAAgLADgJQAFgNALgKQANgIAPAAQAUAAAMAMQAMALADAUIABARQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg+AAIgBABIADAIQAFAMAPAAQANAAAIgLIACgBIABABIAPAOIABACIgBACQgHAIgKAFQgLAEgNAAQgRAAgLgIgAgQgQIgCAGIABABIAiAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBgBIgBgFQgBgGgFgEQgEgDgHAAQgMAAgEAMg");
	this.shape_108.setTransform(37.2583,74.575);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAZBHQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgZg5IgBgBIgTAAIgBABIAAA4IgBABIgCABIgXAAIgCgBIgBgBIAAiJIABgCIACgBIA5AAQANABAKAFQAKAEAFALQAGAKAAAMQAAAOgHAKQgHAJgNAEIAAABIAcA8QAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAgXgtIAAAjIABABIAaAAQAJAAAFgFQAFgFAAgJQAAgIgFgEQgGgGgIAAIgaAAg");
	this.shape_109.setTransform(25.775,72.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgaAuQgMgHgFgPQgEgKAAgOQAAgOAEgJQAFgOAMgIQANgIAOAAQAQAAANAIQANAJADAMIACAHQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgYADIAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAgDQgCgGgEgDQgFgDgHAAQgGAAgEADQgFAEgBAFQgDAGAAAKQAAALACAFQADAHAEADQAEADAGAAQAGAAAFgDQAFgDACgGIAAgBIAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAXAEQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIgBAGQgEAOgMAHQgNAIgQAAQgPAAgMgIg");
	this.shape_110.setTransform(84.275,50.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgLBLIgCgBIgBgCIAAhjIABgCIACgBIAXAAIABABIABACIAABjIgBACIgBABgAgLguQgEgEAAgHQAAgIAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAIQAAAGgFAFQgEAFgHAAQgGAAgFgFg");
	this.shape_111.setTransform(76.125,47.875);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgLBHIgCAAIAAgCIAAiJIAAgCIACgBIAXAAIACABIAAACIAACJIAAACIgCAAg");
	this.shape_112.setTransform(71.025,48.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgRA9IgBAAIAAAAIAAAHIgBACIgCABIgYAAIgBgBIgBgCIAAiJIABgCIABAAIAYAAIACAAIABACIAAAsIAAABIABgBQAIgKAOAAQAPAAAKAIQAKAHAEANQAEAKAAAPQAAAOgDAKQgFAOgKAIQgLAIgOAAQgNAAgJgLgAgOgCQgEAGAAAOQAAAOAEAHQAFAIAJAAQAJAAAFgIQAEgIAAgNQAAgOgEgGQgFgIgJAAQgJAAgFAIg");
	this.shape_113.setTransform(62.875,48.275);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgjAsQgKgKAAgQIAAhEIABgBIACgBIAYAAIABABIABABIAAA9QAAAHAFAFQAEAGAHAAQAHAAAEgFQAFgEABgHIAAg/IAAgBIACgBIAYAAIACABIAAABIAABjIAAACIgCABIgYAAIgCgBIAAgCIAAgIIgBABQgIALgRAAQgPAAgLgJg");
	this.shape_114.setTransform(51.35,50.15);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgxBIIgCgBIAAgCIAAiJIAAgCIACgBIA4AAQAOAAAKAGQAKAGAGAKQAGAKgBANQAAANgFAJQgGAIgKAHQgLAFgOAAIgcAAIgBABIAAA0IAAACIgCABgAgXgtIAAAmIABABIAZAAQAKAAAFgGQAGgFAAgJQAAgJgGgFQgFgGgKAAIgZAAg");
	this.shape_115.setTransform(40.05,48.175);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E87144").s().p("AmwGxQi0i0AAj9QAAj7C0i0QC1i1D7ABQD9gBC0C1QC0C0AAD7QAAD9i0C0Qi0Czj9ABQj7gBi1izg");
	this.shape_116.setTransform(61.65,61.5);

	var maskedShapeInstanceList = [this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, rect = new cjs.Rectangle(0,0,123,123), [rect]);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
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
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_6.setTransform(62.5,62.5);

	// Layer_3
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgLANQgGgFAAgIQAAgGAFgGQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgEgFg");
	this.shape_117.setTransform(80.15,108.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgZBRQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgXQAAgBAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAPACQANgBAIgGQAIgHAAgNIAAgBIgBAAQgJAKgPAAQgPAAgNgIQgMgHgFgQQgEgJAAgRQAAgSAEgLQAGgPALgHQALgJAPAAQARAAAJALIABAAIAAgBIAAgGIABgCIACAAIAbAAIACAAIABACIAABoQAAAegSANQgRAMgaAAIgSgBgAgKgyQgFAFgCAFQgDAIAAALQAAAMACAGQADAFAFAEQAFADAGABQAIgBAEgDQAEgDADgGQABgHAAgMIAAgLQAAgDgCgEQgCgGgFgEQgFgDgGAAQgGAAgFADg");
	this.shape_118.setTransform(70.725,106.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAWBQQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgWg2IAAAAIgBAAIgPASIAAACIAAAhIgBACIgCABIgbAAIgCgBIgBgCIAAiZIABgCIACgBIAbAAIACABIABACIAABMIAAABIABgBIAegjQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAdAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBACIgdAkIAAABIAiBJIAAABQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_119.setTransform(59.55,102.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAmBQIgCgBIAAgCIAAhkIgBAAIgBAAIgYAlQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgNAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIgYglIgBAAIAAABIAABjIgBACIgCABIgbAAIgCgBIgBgCIAAiZIABgCIACgBIAbAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAiA1QAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAig1QAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAIACABIABACIAACZIgBACIgCABg");
	this.shape_120.setTransform(44.925,102.225);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AggBIQgMgJgFgQQgEgMAAgPQAAgPAEgMQAFgPAMgJQALgIARAAQAPAAAJALIABABIABgBIAAgxIABgCIACgBIAaAAIACABIABACIAACZIgBACIgCABIgaAAIgCgBIgBgCIAAgHIgBgBIgBAAQgJANgQAAQgQAAgLgJgAgOgDQgGAIAAAQQAAAOAFAIQAGAKAKAAQAKAAAGgKQAFgIAAgPQAAgOgFgJQgFgJgLAAQgJAAgGAJg");
	this.shape_121.setTransform(84.925,74.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgcAzQgOgIgGgRQgFgKAAgSQAAgOAEgIQAFgRANgJQANgJASAAQAXgBANANQAOAOADAWIABASQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIhGAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIADAKQAGAMARAAQAOAAAJgLIACgCIACABIAQAQIABACIgBACQgIAJgLAGQgMAEgOAAQgTABgNgKgAgSgTIgCAIQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAnAAIABgBIgCgHQgBgGgGgEQgFgEgHAAQgOAAgEANg");
	this.shape_122.setTransform(72.475,76.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgZA4QgMgFgFgHQgHgIAAgKIAAgCIABgCIACgBIAZAAIACABIABACQAAAFAFAEQAIADAGAAQAIAAAEgDQAFgDAAgFQAAgDgEgDIgNgEQgHgCgJgDQgPgFgJgHQgJgHAAgOQAAgQAOgLQANgJAVAAQAOAAALAEQAKAFAHAIQAGAJAAALIAAABIgCABIgZAAIgCgBIgBgBQAAgGgFgDQgFgDgIAAQgGAAgGACQgFADABAFQgBAFAFACIAPAFIAMADQARAFAIAGQAKAIAAAOQAAARgNAKQgOAJgWAAQgPAAgLgEg");
	this.shape_123.setTransform(60.5,76.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgoA0QgLgJAAgRQAAgRAMgJQANgKAWAAIAXAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgFQAAgHgEgFQgEgEgKAAQgEAAgGACQgFADgCAFQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgcgDQgBgBAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQABgKAHgIQAHgHALgFQAMgFAMABQAQAAAKAEQALAGAIAJQAGAJAAAKIAABNIgBACIgCAAIgbAAIgCAAIgBgCIAAgIIAAAAQgKAMgVAAQgRAAgLgIgAgNANQgGAEAAAGQAAAGAEAEQAEAEAIAAQAJgBAHgFQAGgEAAgJIAAgIIAAgCIgRAAQgJABgGAEg");
	this.shape_124.setTransform(48.45,76.95);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("Ag2BQIgCgBIgBgCIAAiZIABgCIACgBIA4AAQA2AAAAAsQAAAXgTAKQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAVAKAAAaQAAAXgPALQgOALgZAAgAgZANIAAAmQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIAcAAQAKAAAGgFQAGgFAAgKQAAgJgGgGQgGgFgKAAIgcAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAgZgyIAAAkIABABIAaAAQAKAAAHgFQAGgFAAgJQAAgJgGgFQgGgFgLAAIgaAAg");
	this.shape_125.setTransform(35.775,74.825);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgJBEQgJgFgBgTIAAg7QAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgNAAIgCgBIgBgCIAAgUIABgCIACAAIANAAIABgCIAAgbIABgCIACgBIAYAAIACABIABACIAAAbIABACIAWAAIACAAIABACIAAAUIgBACIgCABIgWAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABIAAAvQAAAHADAEQADAEAHAAIAIAAIACABIAAACIAAAVQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAIgOABQgTAAgIgHg");
	this.shape_126.setTransform(98.375,48.05);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAVA8IgBgBIgBgCIAAhDQAAgKgFgFQgFgGgJAAQgHAAgGAGQgFAGAAAJIAABDIAAACIgCABIgbAAIgCgBIgBgCIAAhvIABgCIACgBIAbAAIACABIAAACIAAAIIABABIAAAAQAKgOARAAQASAAAMAMQALAKAAAUIAABKIgBACIgCABg");
	this.shape_127.setTransform(87.925,49.475);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgnAxQgLgLAAgTIAAhLIABgCIACAAIAbAAIABAAIABACIAABDQAAAKAFAFQAFAGAIAAQAIAAAFgFQAEgFACgHIAAhHIAAgCIACAAIAbAAIACAAIABACIAABvIgBACIgCABIgbAAIgCgBIAAgCIAAgIIgBgBIgBABQgJANgSAAQgRAAgMgLg");
	this.shape_128.setTransform(75.375,49.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AggAzQgNgKgGgSQgCgLAAgMQAAgMACgMQAGgQANgKQAPgKASAAQARAAAOAKQAOALAFAPQADALABANQAAAMgDALQgGARgNALQgOAJgTABQgSgBgOgJgAgMgbQgFAEgCAHQgCAHAAAJQAAAKACAGQACAIAFAEQAGAFAGAAQAIAAAFgFQAFgEACgIIACgQQAAgGgCgKQgBgGgHgFQgEgFgIAAQgGAAgGAFg");
	this.shape_129.setTransform(62.85,49.55);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgeA0QgMgJgHgQQgDgOAAgNQAAgOADgMQAGgPANgKQAOgIARgBQATABANAIQAOAKAEAOQADAFAAADIAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIgaAEIgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBIAAgDQgCgGgFgEQgGgEgHAAQgGAAgGAEQgEAEgCAGQgDAHAAALQAAALADAHQABAHAFAEQAGAEAGAAQAHAAAFgEQAFgDADgHIAAgCIAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAABIAaADQABABABAAQAAAAAAABQABAAAAAAQAAABAAAAIgCAHQgEAPgOAJQgOAJgSAAQgRgBgOgIg");
	this.shape_130.setTransform(50.6,49.55);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgdA0QgOgKgFgPQgFgLAAgQQAAgQAFgKQAEgPAOgKQAOgIARgBQASABAOAIQAOAKAEAOIACAIIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgaAEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIgBgDQgBgGgGgEQgHgEgGAAQgGAAgGAEQgFAEgCAGQgCAGAAAMQAAANACAFQADAIAEADQAFAEAHAAQAGAAAGgEQAFgDADgHIAAgCIAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABABIAaADQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIgCAHQgFAPgNAJQgPAJgRAAQgRgBgNgIg");
	this.shape_131.setTransform(38.5,49.55);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAnBQQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIgHgWIgBgBIg3AAIgBABIgHAWQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgdAAIgCgBIAAgDIAxiZQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIAjAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAxCZIAAABQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAgAAAgnIgUBDQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAnAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgVhDIAAgBg");
	this.shape_132.setTransform(24.975,47.45);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAnBQIgCgBIgBgCIAAhjIgBgBIgBAAIgYAlQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgLAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgYglIgBAAIAAABIAABjIgBACIgCABIgbAAIgCgBIgBgCIAAiZIABgCIACgBIAbAAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABIAiA1QAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBABAAIAig1QAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAaAAIACABIAAACIAACZIAAACIgCABg");
	this.shape_133.setTransform(74.8,20.05);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("Ag2BQIgDgBIAAgCIAAiZIAAgCIADgBIA4AAQA2AAAAAsQAAAXgTAKQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAQAVAKAAAaQAAAWgPAMQgPALgZAAgAgZANIAAAmIABABIAbAAQAKAAAHgGQAGgEAAgKQAAgJgGgGQgGgFgLAAIgbAAIgBABgAgZgyIAAAkIABABIAaAAQALgBAGgFQAFgEABgJQgBgKgFgEQgHgGgKAAIgaAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_134.setTransform(59.7,20.05);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAnBQQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgHgXIgBgBIg3AAIgBABIgHAXQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgdAAIgCgBIAAgCIAxiZQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAjAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABABABIAxCZIAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAAAgnIgUBDQAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAIAnAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIgVhDIAAAAg");
	this.shape_135.setTransform(44.825,20.05);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#86C98D").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_136.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
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
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_7.setTransform(62.5,62.5);

	// Layer_3
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("Ag0BdIgBgBIgBgCIAAgYIABgCIACgBIASgCQAGgBAEgFQAEgFACgIIAAgCIgriAIAAgBQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAgAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAVBUIAAABIABgBIAWhUQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIAfAAIADABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgtCGQgHAUgHAJQgFAJgNAEQgMAFgWAAg");
	this.shape_137.setTransform(97.575,80.65);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgLBOQgLgIAAgTIAAhFQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgPAAIgCgBIgBgDIAAgWIABgDIACgBIAPAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgfIABgCIACgBIAdAAIACABIABACIAAAfQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAZAAIACABIABADIAAAWIgBADIgCABIgZAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAA3QAAAJADADQAEAEAIABIAIAAIACAAIABACIAAAZQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgPABQgVAAgLgHg");
	this.shape_138.setTransform(85.95,76.35);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgOBbIgCgBIgBgCIAAivIABgCIACgBIAdAAIADABIABACIAACvIgBACIgDABg");
	this.shape_139.setTransform(77.95,75.675);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AguA7QgNgJAAgUQABgUAOgLQAPgLAYABIAaAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgHQAAgIgEgFQgGgEgKgBQgHABgGACQgFADgBAFQgBABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgfgFQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQACgNAHgHQAIgKANgEQALgFAQAAQAQAAAOAFQANAHAIAJQAHALAAANIAABWIgBADIgCABIgfAAIgCgBIgBgDIAAgIIAAgBIgBAAQgLAPgXAAQgUAAgNgKgAgPAOQgGAFgBAHQAAAIAGADQAFAFAHAAQALAAAHgHQAJgFgBgKIAAgJQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIgSAAQgLAAgHAFg");
	this.shape_140.setTransform(67.6,78.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("Ag0BdIgBgBIgBgCIAAgYIABgCIADgBIARgCQAHgBADgFQAEgFACgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgriBQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAgAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABIAVBUIABABIAAgBIAWhUQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIAgAAIACABIAAADIgtCGQgGAUgHAJQgGAJgMAEQgMAFgXAAg");
	this.shape_141.setTransform(55.125,80.65);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgkA6QgQgMgGgUQgDgNAAgNQAAgOADgNQAHgUAPgKQAPgLAWAAQAVAAAPALQAPALAGASQAFAOAAAOQAAALgEAOQgGAVgPAMQgQALgWAAQgUAAgQgLgAgOgfQgGAEgDAJQgBAJAAAJQAAAMABAGQACAIAHAGQAHAGAHgBQAIABAGgGQAHgGACgIQACgLABgHQgBgIgCgKQgCgJgHgEQgFgGgJAAQgIAAgGAGg");
	this.shape_142.setTransform(42.05,78.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("Ag7BbIgCgBIgBgCIAAivIABgCIACgBIAeAAIADABIAAACIAACRQAAABABAAQAAAAAAAAQAAABAAAAQABAAAAAAIBUAAIACAAIABADIAAAZIgBACIgCABg");
	this.shape_143.setTransform(27.8,75.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AglBEIgDgBIgBgDIAAh+IABgCIADgBIAeAAIACABIABACIAAAKIABABIAAgBQALgPARAAQAJAAAGAEQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgGAfQAAAAAAABQgBAAAAAAQgBABAAgBQgBAAgBAAIgJgBIgFABQgKABgGAFQgGAGAAAKIAABGIgBADIgCABg");
	this.shape_144.setTransform(114.125,46.75);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AggA7QgQgKgHgSQgFgOAAgUQAAgOAEgLQAGgSAPgLQAOgLAVAAQAaAAAPAPQAQAPADAZQACALgBAKQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIhQAAIgBABIADAKQAHAPAUAAQARAAAJgOQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIABABIATASIABADIgBACQgIAKgOAGQgNAGgQAAQgWAAgPgKgAgVgVIgCAIQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAsAAQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIgCgHQgCgHgGgFQgGgEgIAAQgQAAgFAPg");
	this.shape_145.setTransform(101.5813,46.825);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AA+BEIgCgBIgBgDIAAhNQAAgJgFgHQgGgHgJABQgJgBgGAHQgGAHAAAJIAABNIAAADIgDABIgdAAIgCgBIgBgDIAAhNQAAgKgGgGQgGgHgJABQgIAAgGAEQgFAFgBAJIAABRIgBADIgCABIgfAAIgCgBIgBgDIAAh+IABgCIACgBIAfAAIACABIABACIAAAKIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQALgPAWAAQAOAAAJAFQAJAGAFAKQAAAAABABQAAAAAAAAQAAAAABAAQAAgBAAAAQAGgLAKgFQAJgFANAAQAUAAALAMQAMAMAAAXIAABUIgBADIgCABg");
	this.shape_146.setTransform(83.675,46.75);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgkA5QgQgKgGgVQgDgLAAgPQAAgQADgLQAGgTAQgLQAPgLAVAAQAWAAAPALQAPALAGATQAEAMAAAPQAAAOgDAMQgGAUgPALQgQAMgWAAQgUAAgQgMgAgOggQgGAFgCAJQgCAGAAAMQAAALABAHQADAIAGAGQAHAGAHgBQAIABAHgGQAGgGACgIQACgHAAgLQAAgLgCgHQgDgJgGgFQgFgEgJAAQgIAAgGAEg");
	this.shape_147.setTransform(65.475,46.85);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgLBOQgKgIgBgTIAAhFIgBgBIgPAAIgCgBIgBgDIAAgXIABgCIACgBIAPAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgfIABgCIACgBIAcAAIADABIABACIAAAfQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAZAAIACABIABACIAAAXIgBADIgCABIgZAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAA3QgBAIAEAEQAEAFAHAAIAJAAIACAAIABADIAAAYQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgPABQgVAAgLgHg");
	this.shape_148.setTransform(53.35,45.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgdBAQgMgFgIgJQgHgIAAgMIAAgDIABgCIACgBIAdAAIACABIABACIAAABQAAAGAHADQAFAEAJAAQAKAAAFgDQAFgDAAgGQAAgEgFgDIgPgFQgMgDgGgDQgRgFgKgIQgKgIAAgQQABgTAPgLQAPgMAYAAQAPAAANAGQANAFAHAKQAGAKAAAMIgBACIgBABIgcAAIgCgBIgBgCQgBgGgFgEQgHgEgIAAQgIAAgGADQgFADgBAGQABAFAFADQAHADAKACIAOAEQATAGAKAHQALAJAAAQQAAATgPALQgPALgbAAQgQAAgNgFg");
	this.shape_149.setTransform(42.1,46.825);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgsA4QgNgMAAgWIAAhWIABgCIADgBIAdAAIADABIABACIAABNQAAALAFAGQAGAHAJAAQAIAAAHgGQAFgFABgJIAAhRIABgCIADgBIAeAAIACABIABACIAAB/IgBACIgCABIgeAAIgDgBIgBgCIAAgJIAAgBIgBABQgLAOgUAAQgUAAgNgMg");
	this.shape_150.setTransform(28.3,46.925);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgjBVQgPgIgIgOQgJgPAAgSIAAg7QAAgTAJgOQAIgOAPgJQAQgHATAAQAUAAAPAHQAPAHAJAOQAJAOAAASQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgeABIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgNgJgKQgIgIgOAAQgNAAgIAIQgJAJAAAOIAAA9QAAAOAJAIQAIAJANAAQAOAAAIgJQAJgIAAgOQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIAeABIADABIABABQAAASgJAOQgKAPgOAHQgPAHgUAAQgSAAgRgIg");
	this.shape_151.setTransform(13.425,44.425);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#8361A8").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_152.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
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
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_8.setTransform(62.5,62.5);

	// Layer_3
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgWBKQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgVQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOACQAMAAAIgGQAHgGAAgNIgBgBIgBABQgHAIgPAAQgOAAgLgGQgMgHgEgOQgDgJAAgPQAAgRAEgKQAEgMAKgIQALgIAOAAQAPAAAIAKIABAAIABgBIAAgFIAAgBIACgBIAZAAIABABIABABIAABeQAAAbgQAMQgPAMgYAAIgQgBgAgJgtQgEADgCAGQgDAHgBAKQAAALADAFQABAFAFADQAFAEAGAAQAHAAAEgEQADgCADgFQABgHABgKIgBgKIgBgHQgCgEgEgFQgFgEgGAAQgFAAgFAEg");
	this.shape_153.setTransform(102.25,77.725);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg9QAAgIgEgGQgFgFgIAAQgGAAgGAFQgEAGAAAIIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIABABIAAAAQAIgMARAAQAQAAALAKQAJALABARIAABDIgBACIgCAAg");
	this.shape_154.setTransform(90.9,75.675);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgLBMIgCAAIgBgDIAAhkIABgCIACgBIAXAAIACABIAAACIAABkIAAADIgCAAgAgLguQgEgFAAgHQAAgIAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAIQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_155.setTransform(82.525,73.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgIA+QgJgGAAgPIAAg4IgBgBIgMAAIgCAAIgBgCIAAgSIABgCIACgBIAMAAIABgBIAAgYIABgCIABgBIAXAAIACABIAAACIAAAYIABABIAUAAIACABIAAACIAAASIAAACIgCAAIgUAAIgBABIAAAsQAAAHADADQADADAGABIAHAAIABAAIABACIAAATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgMAAQgRAAgIgGg");
	this.shape_156.setTransform(75.8,74.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgLAAgQQAAgJADgLQAFgOAMgKQAMgJAQAAQAUAAANANQAMAMADAUIABARQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIg/AAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAIACAIQAGANAPAAQAOgBAHgLIACgBIACABIAPAPIABABIgBACQgHAJgLAFQgKAEgOAAQgQABgNgJgAgRgRIgBAHIABABIAjAAIABgBIgBgGQgCgGgFgEQgGgDgFAAQgMAAgFAMg");
	this.shape_157.setTransform(66.5583,75.75);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAUBJQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgVgxIAAAAIgBAAIgNARIAAABIAAAeIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAIACABIABACIAABFIAAABIABgBIAbggIADgBIAcAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIgbAgIAAACIAeBCIABABQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_158.setTransform(56.55,73.825);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgeA2IgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAIIAAABIABgBQAIgMAOAAQAHAAAFADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAYQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBgBIgIgBIgEAAQgHABgGAFQgEAFAAAIIAAA4IgBACIgCAAg");
	this.shape_159.setTransform(47.1063,75.675);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgkAvQgLgIABgPQAAgQALgIQALgJAVAAIAUAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgFQAAgGgEgEQgEgEgJAAQgFAAgEACQgFADgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgZgEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQABgJAGgHQAGgHALgEQAIgEANAAQAOAAAKAEQALAFAGAIQAFAJAAAJIAABGIAAACIgCAAIgYAAIgCAAIgBgCIAAgHIAAgBIgBABQgJALgSAAQgPAAgLgIgAgLALQgGADAAAHQAAAGAEADQAEADAHAAQAIAAAGgFQAGgFAAgHIAAgHQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgPAAQgJAAgEADg");
	this.shape_160.setTransform(36.95,75.775);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAjBJIgCgBIAAgCIAAhaIgBgBIgBAAIgWAiQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgLAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgWgiIgBAAIAAABIAABaIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIAfAwQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAfgwQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAYAAIACABIABACIAACLIgBACIgCABg");
	this.shape_161.setTransform(24.225,73.825);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIgBgCIAAiLIABgCIACgBIAXAAIACABIABACIAACLIgBACIgCABg");
	this.shape_162.setTransform(89.475,48.825);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgkAvQgLgIAAgPQAAgQAMgIQALgJAVAAIAUAAIABgBIAAgFQAAgHgEgDQgFgEgHAAQgGAAgEACQgFADgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgagEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQABgJAGgHQAGgHAKgEQAJgEANAAQANAAALAEQALAFAFAIQAHAJgBAJIAABGIAAACIgCAAIgZAAIgBAAIgBgCIAAgHIAAgBIgBABQgJALgSAAQgQAAgKgIgAgMALQgFADAAAHQAAAGAEADQAEADAGAAQAIAAAHgFQAGgEAAgIIAAgHIgBgBIgPAAQgIAAgGADg");
	this.shape_163.setTransform(81.2,50.775);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgIA+QgJgGAAgPIAAg3IgBgBIgMAAIgCgBIgBgCIAAgTIABgBIACgBIAMAAIABgBIAAgZIABgBIABgBIAXAAIABABIABABIAAAZIABABIAUAAIACABIABABIAAATIgBACIgCABIgUAAIgBABIAAArQAAAHADADQADADAGAAIAHAAIACABIAAACIAAAUQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABIgNAAQgQAAgIgGg");
	this.shape_164.setTransform(71.875,49.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgMBMIgBAAIgBgCIAAhmIABgBIABgBIAYAAIACABIAAABIAABmIAAACIgCAAgAgLgvQgEgFAAgGQAAgIAEgFQAFgEAGAAQAIAAAEAEQAFAFgBAIQABAGgFAFQgEAFgIAAQgGAAgFgFg");
	this.shape_165.setTransform(65.35,48.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgWBKQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgVQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOACQAMAAAHgGQAIgGAAgNIgBgBIgBABQgHAIgPAAQgNAAgMgGQgLgHgFgOQgDgJAAgPQAAgRAEgKQAEgMAKgIQALgIAOAAQAPAAAIAKIABAAIABgBIAAgFIAAgBIACgBIAZAAIABABIABABIAABeQAAAcgQALQgPAMgYAAIgQgBgAgJgtQgEADgCAGQgDAHgBAKQAAALADAFQABAFAFADQAFAEAGAAQAHAAAEgEQAEgDACgEQABgHABgKIgBgKQAAgEgBgDQgCgFgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_166.setTransform(56.8,52.725);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgLBMIgCAAIgBgCIAAhmIABgBIACgBIAXAAIACABIAAABIAABmIAAACIgCAAgAgLgvQgEgFAAgGQAAgIAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAIQAAAGgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape_167.setTransform(48.475,48.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgyBJIgBgBIgBgCIAAiLIABgCIABgBIAzAAQARAAALAGQAMAFAGAKQAGAKAAANIAAA5QAAANgGAKQgGAKgMAFQgLAGgRAAgAgXguIAABdIABABIAYAAQAKAAAGgHQAGgGAAgLIAAgvQAAgKgGgHQgGgHgKAAIgYAAg");
	this.shape_168.setTransform(39.525,48.825);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#81C556").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_169.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
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
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_9.setTransform(62.5,62.5);

	// Layer_3
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgXBKQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgVQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIAOACQANAAAGgGQAIgGAAgNIgBgBIgBABQgHAIgPAAQgOAAgLgGQgLgHgFgOQgDgJAAgPQAAgRAEgKQAEgMALgIQAKgIAOAAQAPAAAIAKIABAAIABgBIAAgFIAAgBIACgBIAYAAIACABIABABIAABeQAAAcgQALQgPAMgYAAIgRgBgAgJgtQgFAEgBAFQgDAHAAAKQAAANACADQACAFAFADQAEAEAGAAQAHAAAEgEQAEgDACgEQACgGAAgLIgBgKIgBgHQgDgGgEgDQgEgEgGAAQgFAAgFAEg");
	this.shape_170.setTransform(88.025,77.725);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg9QAAgIgFgGQgFgFgHAAQgHAAgFAFQgEAGAAAIIAAA9IgBACIgBAAIgZAAIgCAAIAAgCIAAhlIAAgCIACgBIAZAAIABABIABACIAAAHIABABIAAAAQAJgMAQAAQAQAAAKAKQALAKAAASIAABDIgBACIgCAAg");
	this.shape_171.setTransform(76.7,75.675);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgMBMIgBAAIgBgDIAAhkIABgCIABgBIAYAAIACABIAAACIAABkIAAADIgCAAgAgLguQgEgHAAgFQAAgHAEgGQAFgEAGAAQAHAAAFAEQAFAFgBAIQABAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_172.setTransform(68.3,73.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgpBKIgBAAIAAgVIAAgCIACgBQAIAAAGgBQAFgCADgDQADgDACgHIAAgCIgjhoQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAaAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAABABIAQBDIABABIAAgBIAShDQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAaAAIACAAIAAADIglBrQgDANgHAKQgEAHgKAEQgJADgTAAg");
	this.shape_173.setTransform(60.4,77.825);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgjAtQgKgKAAgRIAAhFIAAgBIACgBIAYAAIACABIABABIAAA+QAAAIAEAFQAFAFAHAAQAGAAAFgEQAFgEABgHIAAhBIABgBIACgBIAYAAIACABIAAABIAABlIAAACIgCABIgYAAIgCgBIgBgCIAAgHIAAAAIgBAAQgIALgRAAQgQAAgKgJg");
	this.shape_174.setTransform(49.425,75.825);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgxBJIgDgBIAAgCIAAiLIAAgCIADgBIAyAAQAyAAAAAoQAAAVgSAJIAAABQAUAJAAAYQAAAUgNALQgPAKgWAAgAgXAMIAAAiQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAZAAQAJAAAGgFQAFgFABgJQgBgJgFgEQgFgFgKAAIgZAAgAgXguIAAAhIABABIAXAAQAKAAAGgFQAFgEAAgIQAAgIgFgFQgGgFgKAAIgXAAg");
	this.shape_175.setTransform(37.6,73.825);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgdBBQgLgHgEgPQgEgMAAgNQAAgPAEgKQAEgNALgIQAKgIAPAAQAPAAAIALIABAAIAAgtIABgCIABgBIAZAAIACABIAAACIAACLIAAACIgCABIgZAAIgBgBIgBgCIAAgHIgBAAQgJAMgOAAQgOAAgLgJgAgNgDQgFAHAAAPQAAAMAFAIQAFAJAJAAQAKAAAFgJQAEgIAAgNQAAgNgFgIQgFgIgJAAQgIAAgGAIg");
	this.shape_176.setTransform(69.125,48.925);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAjBJQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgHgVIgBAAIgyAAIgBAAIgGAVQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgaAAIgCgBIAAgCIAtiMQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAgAAQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAtCNQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAAAgjIgSA9QgBAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAkAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgTg9IAAgBg");
	this.shape_177.setTransform(56.775,48.825);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFF533").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_178.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
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
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_10.setTransform(62.5,62.5);

	// Layer_3
	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AATBJIgCgBIAAgCIAAg+QAAgIgFgEQgFgGgHAAQgHAAgEAGQgFAEgBAIIAAA+IAAACIgCABIgYAAIgCgBIgBgCIAAiMIABgCIACAAIAYAAIACAAIAAACIAAAvIABABIABgBQAJgMAPAAQARAAAKAKQALALgBAQIAABEIgBACIgBABg");
	this.shape_179.setTransform(100.15,74.95);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgbAvQgMgIgFgPQgEgJAAgPQAAgOAEgKQAEgOANgIQANgIAPAAQAQAAANAIQANAJAEAMIACAIIAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgYAEQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgDQgCgGgFgDQgEgEgHAAQgGAAgFADQgEAEgCAGQgCAFAAALQAAALACAGQABAGAFADQAFAEAGAAQAGAAAFgDQAEgEADgGIAAgBIAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAYAEQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgBAGQgFAPgMAHQgNAIgQAAQgPAAgNgIg");
	this.shape_180.setTransform(88.925,76.875);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgeA2IgCgBIAAgBIAAhmIAAgBIACgBIAZAAIABABIABABIAAAJIABAAQAHgMAPAAQAHAAAFACQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgEAXQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgHgBIgFAAQgIABgFAFQgEAEAAAJIAAA4IgBABIgBABg");
	this.shape_181.setTransform(79.925,76.825);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgkAvQgLgHABgQQgBgQAMgIQALgJAVAAIAUAAIABgBIAAgEQAAgHgEgEQgEgEgJAAQgGAAgEACQgDACgCAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgZgDQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQABgJAGgHQAGgIAKgDQAKgEALAAQAPAAAKAFQALAEAGAIQAFAJAAAJIAABGIgBACIgBABIgZAAIgCgBIAAgCIAAgHIgBgBIAAABQgJALgSAAQgRAAgJgIgAgMALQgFAEAAAGQAAAGAEADQAEADAHAAQAHAAAGgEQAHgFAAgIIAAgHIgBgBIgPAAQgJAAgFADg");
	this.shape_182.setTransform(69.8,76.875);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgaAvQgNgIgFgPQgEgKAAgQQAAgLADgJQAFgOAMgKQAMgIAQAAQAVAAAMAMQAMALADAVIABARQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAIhAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACAJQAGALAQAAQAMAAAIgLIACgBIABABIAQAPIAAACIAAABQgGAIgMAGQgLAEgNAAQgRAAgMgIgAgRgRIgBAHQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAkAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIAAgGQgCgGgFgEQgFgDgGAAQgNAAgEAMg");
	this.shape_183.setTransform(59,76.875);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgXAzQgLgFgFgGQgGgIAAgIIAAgDIABgBIACgBIAXAAIACABIAAABIAAABQAAAEAGADQAEAEAHAAQAHAAAFgDQAEgDAAgEQAAgEgEgBQgCgCgKgDQgKgCgEgCQgOgFgIgFQgHgHAAgMQAAgQAMgJQAMgJATAAQANAAAKAEQAJAFAGAHQAGAIAAAKIgBACIgCAAIgWAAIgCAAIgBgCQAAgFgEgDQgEgEgIAAQgHAAgEADQgEADAAAEQAAAEAEACIAZAIQANAEAKAGQAJAHAAANQAAAPgNAJQgMAJgUAAQgNAAgLgEg");
	this.shape_184.setTransform(48.075,76.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgPQgEgKAAgQQAAgLADgJQAGgPALgJQANgIAPAAQAUAAANAMQANANACATIABARQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIg/AAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACAJQAGALAQAAQAMAAAJgLIABgBIACABIAPAPIABACIgBABQgFAIgNAGQgLAEgNAAQgRAAgMgIgAgRgRQgBADAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAjAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIAAgGQgCgGgFgEQgFgDgGAAQgNAAgEAMg");
	this.shape_185.setTransform(37.3,76.875);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAaBJQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgZg6IgBAAIgTAAIgBABIAAA4IgBACIgCABIgYAAIgCgBIgBgCIAAiMIABgCIACAAIA6AAQANAAALAGQAJAEAHALQAFAKAAANQAAAOgHAKQgHAJgNAEIgBACIAdA8QAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAgXguIAAAkIABABIAaAAQAIAAAGgFQAFgGAAgIQAAgJgFgEQgGgGgIAAIgaAAg");
	this.shape_186.setTransform(25.55,74.95);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgIA+QgJgFAAgRIAAg2IgBgBIgMAAIgCgBIgBgBIAAgTIABgCIACgBIAMAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgZIABgCIABAAIAXAAIABAAIABACIAAAZQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAUAAIACABIABACIAAATIgBABIgCABIgUAAIgBABIAAArQAAAHADADQADAEAGgBIAHAAIACABIAAACIAAAUQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNABQgQAAgIgGg");
	this.shape_187.setTransform(89.825,50.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgaAvQgNgIgFgPQgEgKAAgQQAAgLADgJQAFgPAMgJQANgIAPAAQAVAAAMAMQAMALADAVIABARQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAIg/AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAJQAGALAQAAQAMAAAJgLIABgBIABABIAPAPIABACIAAABQgGAIgMAGQgLAEgNAAQgRAAgMgIgAgRgRIgBAHQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAjAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBgGQgBgGgFgEQgFgDgGAAQgNAAgEAMg");
	this.shape_188.setTransform(80.6,51.875);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAUBJQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgTgxIgCAAIAAAAIgNARIgBABIAAAeIAAACIgCABIgYAAIgCgBIgBgCIAAiLIABgDIACAAIAYAAIACAAIAAADIAABFIABABIAAgBIAbggIAEgBIAcAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgBACIgaAhIAAABIAfBDQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_189.setTransform(70.6,49.95);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgeA2IgCgBIAAgBIAAhmIAAgBIACgBIAZAAIABABIABABIAAAIIABABIAAAAQAHgMAPAAQAIAAAEACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgEAXQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgHgBIgFAAQgIABgFAFQgEAEAAAJIAAA4IgBABIgBABg");
	this.shape_190.setTransform(61.125,51.825);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AglAvQgKgHABgQQgBgQALgIQAMgJAVAAIAUAAIABgBIAAgEQAAgHgEgEQgEgEgJAAQgGAAgEACQgDACgCAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgZgDQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgHQAHgIAJgDQALgEAKAAQAPAAAKAFQALAEAGAIQAFAJAAAJIAABGIgBACIgBABIgZAAIgCgBIAAgCIAAgHIgBgBIgBABQgIALgSAAQgRAAgKgIgAgLALQgGAEAAAGQAAAFAEAEQAEADAHAAQAHAAAGgEQAHgFAAgIIAAgHIgBgBIgPAAQgJAAgEADg");
	this.shape_191.setTransform(51,51.875);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAjBJIgCgBIgBgCIAAhbIAAAAIgBAAIgWAiQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgLAAIgDgBIgWgiIgBAAIAABbIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgDIACAAIAYAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAfAwQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAIAggwIADgCIAYAAIACAAIABADIAACLIgBACIgCABg");
	this.shape_192.setTransform(38.275,49.95);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E33844").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_193.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
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
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_11.setTransform(62.5,62.5);

	// Layer_3
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgWBJQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIABgWQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAOABQAMAAAIgFQAHgGAAgNIgBgBIgBAAQgHAJgPAAQgOAAgLgGQgMgIgEgOQgDgIAAgPQAAgRAEgKQAEgMAKgJQALgHAOAAQAPAAAIAKIABAAIABgBIAAgFIAAgBIACgBIAZAAIABABIABABIAABeQAAAbgQAMQgPAMgYAAgAgJgtQgEADgCAGQgDAGgBALQAAALADAFQABAEAFAEQAFAEAGAAQAHAAAEgEQADgDADgFQABgGABgKIgBgLIgBgGQgCgFgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_194.setTransform(102.25,77.25);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg9QAAgIgEgGQgFgFgIAAQgGAAgGAFQgEAGAAAIIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIABABIAAAAQAIgMARAAQAQAAALAKQAJALABARIAABDIgBACIgCAAg");
	this.shape_195.setTransform(90.9,75.175);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgLBMIgCgBIgBgBIAAhmIABgCIACAAIAXAAIACAAIAAACIAABmIAAABIgCABgAgLgvQgEgEAAgIQAAgGAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAGQAAAIgEAEQgFAFgHAAQgGAAgFgFg");
	this.shape_196.setTransform(82.525,73);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgIA+QgJgFAAgRIAAg2IgBgBIgMAAIgCgBIgBgCIAAgTIABgBIACgBIAMAAIABgBIAAgZIABgCIABAAIAXAAIACAAIAAACIAAAZIABABIAUAAIACABIAAABIAAATIAAACIgCABIgUAAIgBABIAAArQAAAHADADQADAEAGgBIAHAAIABABIABACIAAAUQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgMABQgRAAgIgGg");
	this.shape_197.setTransform(75.8,73.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgaAvQgNgIgFgPQgEgKAAgQQAAgKADgKQAFgPAMgJQALgIARAAQAUAAANAMQAMAMADAUIABARQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIgBABIACAIQAGAMAPAAQANAAAIgLIACgBIACABIAPAPIABACIgBABQgHAJgLAEQgKAFgOAAQgQAAgNgIgAgRgRIgBAHIABABIAjAAIABgBIgBgGQgCgGgFgEQgGgDgFAAQgMAAgFAMg");
	this.shape_198.setTransform(66.5583,75.275);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAUBJQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgVgxIAAAAIgBAAIgNARIAAABIAAAeIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAIACABIABACIAABFIAAABIABgBIAbggIADgBIAcAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIgbAhIAAABIAfBDQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_199.setTransform(56.55,73.325);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgeA2IgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAIIAAABIABgBQAIgMAOAAQAHAAAFADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAYQAAAAAAABQgBAAAAAAQAAABgBAAQAAgBgBAAIgIgBIgEABQgHAAgGAFQgEAFAAAIIAAA4IgBACIgCAAg");
	this.shape_200.setTransform(47.1063,75.175);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgkAvQgLgIABgPQAAgQALgIQALgJAVAAIAUAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgEQAAgHgEgEQgEgEgJAAQgFAAgEACQgFADgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgZgEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQABgJAGgHQAHgIAKgDQAKgEALAAQAOAAAKAEQAMAGAFAHQAFAJAAAJIAABGIAAACIgCAAIgYAAIgCAAIgBgCIAAgHIAAgBIgBABQgJALgSAAQgQAAgKgIgAgLALQgGAEAAAGQAAAFAEAEQAEADAHAAQAIAAAGgFQAGgFAAgHIAAgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgPAAQgJAAgEADg");
	this.shape_201.setTransform(36.95,75.275);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAjBJIgCgBIAAgCIAAhaIgBgBIgBAAIgWAiQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgLAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgWgiIgBAAIAAABIAABaIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIAfAwQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAfgwQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAYAAIACABIABACIAACLIgBACIgCABg");
	this.shape_202.setTransform(24.225,73.325);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgIA+QgJgFAAgRIAAg3IgBgBIgMAAIgCAAIgBgCIAAgSIABgCIACgBIAMAAIABgBIAAgYIABgDIABAAIAXAAIABAAIABADIAAAYIABABIAUAAIACABIABACIAAASIgBACIgCAAIgUAAIgBABIAAAsQAAAGADAEQADAEAGAAIAHAAIACAAIAAACIAAATQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgNABQgQAAgIgGg");
	this.shape_203.setTransform(95.475,48.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAUA2IgDAAIAAgCIAAg9QAAgIgEgGQgGgFgHAAQgHAAgFAFQgEAGAAAIIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIABABIAAAAQAIgMARAAQAQAAAKAKQALAKAAASIAABDIgBACIgCAAg");
	this.shape_204.setTransform(85.95,50.175);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgPQgEgKAAgQQAAgLADgJQAFgPAMgJQAMgIAQAAQAVAAALAMQANAMADAUIABARQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIg/AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAIQAGAMAQAAQAMAAAIgLIACgBIACABIAOAPIABACIAAABQgHAJgLAEQgKAFgNAAQgQAAgOgIgAgRgRIgCAHQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAjAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAIgBgGQAAgFgGgFQgFgDgGAAQgNAAgEAMg");
	this.shape_205.setTransform(74.6,50.275);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgIA+QgJgFAAgRIAAg3IgBgBIgMAAIgCAAIgBgCIAAgSIABgCIACgBIAMAAIABgBIAAgYIABgDIABAAIAXAAIABAAIABADIAAAYIABABIAUAAIACABIABACIAAASIgBACIgCAAIgUAAIgBABIAAAsQAAAGADAEQADAEAGAAIAHAAIACAAIAAACIAAATQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgNABQgQAAgIgGg");
	this.shape_206.setTransform(64.925,48.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AATA2IgBAAIgBgCIAAg9QAAgIgFgGQgEgFgIAAQgGAAgFAFQgFAGAAAIIAAA9IgBACIgBAAIgZAAIgCAAIAAgCIAAhlIAAgCIACgBIAZAAIABABIABACIAAAHIAAABIABAAQAIgMAQAAQAQAAALAKQALALgBARIAABDIAAACIgCAAg");
	this.shape_207.setTransform(55.4,50.175);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgdAuQgMgJgFgQQgDgLAAgKQAAgKADgLQAFgQAMgJQANgIAQAAQARAAAMAIQANAKAFAOQADALAAALQAAALgDAJQgFARgMAJQgMAJgSAAQgRAAgMgJgAgLgZQgEAEgDAHQgBAFAAAJQAAAJABAFQACAHAFAFQAEAEAHAAQAIAAAEgEQAFgFACgHQABgGAAgIQAAgIgBgGQgCgGgFgFQgGgEgGAAQgGAAgFAEg");
	this.shape_208.setTransform(43.875,50.275);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgbBEQgNgGgGgMQgHgLAAgPIAAgvQAAgPAHgMQAGgLANgGQAOgHANAAQARAAALAGQANAGAGALQAHALAAAPQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgYABIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgLgHgHQgGgGgMAAQgLAAgGAGQgGAHgBALIAAAxQABALAGAHQAGAGALAAQAMAAAGgGQAHgHAAgLQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAYABIACABIAAABQAAAPgHALQgGALgNAGQgLAGgRAAQgPAAgMgHg");
	this.shape_209.setTransform(31.8,48.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#5F62AA").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_210.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
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
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	mask_12.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_12.setTransform(62.5,62.5);

	// Layer_3
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAQBEQgQAAgJgGQgIgFAAgQIAAg3IgBgBIgMAAIgCAAIgBgDIAAgSIABgCIACAAIAMAAIABgBIAAgaIAAgBIACgBIAWAAIACABIABABIAAAaIABABIAUAAIACAAIABACIAAASIgBADIgCAAIgUAAIgBABIAAArQAAAHADAEQADADAGAAIAHAAIACAAIABACIAAAUQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_211.setTransform(118.05,72.35);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg9QAAgJgFgFQgFgFgHAAQgGAAgFAFQgFAGAAAIIAAA9IgBACIgCAAIgYAAIgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAHIAAABIABAAQAJgMAPAAQARAAAKAKQAKAKAAARIAABEIAAACIgCAAg");
	this.shape_212.setTransform(108.525,73.675);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgaAvQgLgHgHgPQgEgKAAgRQAAgLADgJQAFgPAMgIQAMgJAQAAQAUAAANAMQAMAMADAUIABARQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIg/AAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAEACAFQAFALAQAAQAOAAAHgKIACgCIACABIAPAPIABACIgBACQgHAIgLAFQgKAEgNAAQgSAAgMgIgAgRgQIgBAGIABABIAjAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgBgGQgCgGgFgDQgEgEgHAAQgMAAgFANg");
	this.shape_213.setTransform(97.1833,73.725);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAyA2IgCAAIgBgCIAAg+QAAgIgEgFQgEgFgIAAQgHAAgEAFQgFAFAAAIIAAA+IgBACIgCAAIgXAAIgCAAIAAgCIAAg+QAAgIgFgFQgEgFgIAAQgGAAgFAEQgEAEgBAHIAABBIgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAIIAAABIABgBQAIgMATAAQAKAAAIAEQAFADAGAJQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAFgIAIgEQAGgEALAAQARAAAJAJQAJAKAAASIAABEIgBACIgCAAg");
	this.shape_214.setTransform(82.825,73.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgLAAgQQAAgMADgIQAFgPAMgIQAMgJAQAAQAUAAANAMQAMAMADAUIABARQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIgBABIACAJQAFALAQAAQAOAAAHgKIACgCIACABIAPAPIABACIgBACQgHAIgLAFQgLAEgNAAQgRAAgMgIgAgRgQIgBAGIABABIAjAAIABgBIgBgGQgCgGgFgDQgFgEgGAAQgNAAgEANg");
	this.shape_215.setTransform(68.4583,73.725);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgWBKQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgVQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOACQAMAAAHgGQAIgGAAgNIgBgBIAAABQgJAIgOAAQgMAAgNgGQgKgHgGgPQgDgIAAgPQAAgQAEgLQAEgNAKgHQALgIAOAAQAOAAAKAKIAAAAIABgBIAAgFIABgCIABAAIAZAAIABAAIABACIAABeQAAAbgQAMQgQAMgXAAIgQgBgAgJgtQgEADgCAGQgDAGgBALQAAAKADAGQACAFAEADQAGAEAFAAQAHAAAEgEQAFgDABgEQABgHABgLIgBgKQAAgDgBgDQgCgFgEgEQgEgEgHAAQgGAAgEAEg");
	this.shape_216.setTransform(56.8,75.725);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgkAvQgKgIAAgPQAAgQALgIQALgJAVAAIAUAAIABgBIAAgFQAAgGgEgEQgFgEgIAAQgFAAgEADQgEACgCAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgZgEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQABgIAGgHQAGgHALgEQAIgEANAAQANAAALAEQAKAFAHAJQAFAHAAALIAABFIAAACIgCABIgZAAIgBgBIgBgCIAAgHIAAAAIgBAAQgJALgSAAQgQAAgKgIgAgLALQgGADAAAHQAAAGAEADQADAEAIAAQAHgBAHgFQAGgEAAgHIAAgIQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgPAAQgIAAgFADg");
	this.shape_217.setTransform(45.4,73.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AATA2IgBAAIgBgCIAAg9QAAgJgEgFQgGgFgHAAQgGAAgFAFQgFAFAAAJIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIAAABIABAAQAJgMAPAAQASAAAJAKQAKALAAAQIAABEIAAACIgCAAg");
	this.shape_218.setTransform(34.45,73.675);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgkAvQgLgIABgPQAAgQALgIQALgJAVAAIAUAAIABgBIAAgFQAAgGgEgEQgFgEgIAAQgFAAgEADQgFACgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgZgEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQABgIAGgHQAGgHALgEQAIgEANAAQAOAAAKAEQAKAFAHAJQAFAHAAALIAABFIAAACIgCABIgZAAIgBgBIgBgCIAAgHQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQgJALgSAAQgQAAgKgIgAgLALQgGADAAAHQAAAGAEADQAEAEAHAAQAIgBAGgFQAGgEAAgHIAAgIQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgPAAQgIAAgFADg");
	this.shape_219.setTransform(23,73.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAjBJIgCgBIAAgCIAAhaIgBgBIgBABIgWAhIgDACIgLAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgWghIgBgBIAAABIAABaIgBACIgCABIgYAAIgCgBIgBgCIAAiMIABgBIACgBIAYAAIADACIAfAxQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAfgxQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAYAAIACABIABABIAACMIgBACIgCABg");
	this.shape_220.setTransform(10.275,71.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgdBCQgLgIgFgOQgDgNAAgNQAAgOAEgKQAEgNALgJQAKgHAPAAQAOAAAJAKIAAAAIABAAIAAgtIABgCIABgBIAZAAIACABIAAACIAACMIAAACIgCAAIgZAAIgBAAIgBgCIAAgHIgBgBIAAABQgJALgOAAQgPAAgKgIgAgNgCQgFAHAAAOQAAAMAEAJQAGAJAJAAQAKAAAEgJQAFgIAAgNQAAgOgFgHQgFgIgJAAQgJAAgFAIg");
	this.shape_221.setTransform(83.875,46.875);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg9QAAgJgFgFQgFgFgHAAQgGAAgFAFQgFAFAAAJIAAA9IgBACIgCAAIgYAAIgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAHIAAABIABAAQAJgMAPAAQARAAAKAKQAKAKAAARIAABEIAAACIgCAAg");
	this.shape_222.setTransform(72.525,48.675);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgkAvQgKgIAAgPQgBgQAMgIQALgJAVAAIAVAAIABgBIAAgFQgBgGgEgEQgEgEgIAAQgFAAgFACQgFADgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgagDQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQABgIAGgHQAHgHAJgEQAJgEANAAQANAAALAFQALAEAGAIQAFAJAAAJIAABGIAAACIgCAAIgYAAIgCAAIAAgCIAAgHIgBgBIgBABQgJALgSAAQgQAAgKgIgAgMALQgEAEAAAHQAAAFADADQAEADAHABQAIAAAGgGQAGgEABgIIAAgHQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgQAAQgIgBgGAEg");
	this.shape_223.setTransform(61.05,48.75);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgeA2IgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAIIAAAAIABAAQAIgMAOAAQAHAAAFADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAYQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBgBQgDgBgFAAIgEAAQgHABgGAFQgEAFAAAIIAAA4IgBACIgCAAg");
	this.shape_224.setTransform(52.3563,48.675);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgyBJIgBAAIgBgDIAAiLIABgCIABgBIA0AAQAxAAAAAoQAAAVgSAJQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAUAKAAAXQAAAUgOALQgNAKgXAAgAgXAMIAAAjIABABIAZAAQAKgBAGgEQAFgGAAgHQAAgKgFgEQgGgFgKAAIgZAAIgBABgAgXguIAAAhIABABIAYAAQAKAAAFgEQAGgFgBgIQABgHgGgGQgFgEgKgBIgYAAIgBABg");
	this.shape_225.setTransform(41.6,46.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#ABD350").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_226.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
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
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	mask_13.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_13.setTransform(62.5,62.5);

	// Layer_3
	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgpBKIgBgBIgBgBIAAgTIABgCIACAAIAOgCQAFgBADgEQADgEABgGQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIgihoIAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAaAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIARBDIAAABIABgBIAShDQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAaAAIACABIAAABIgkBsQgFAOgGAJQgFAIgJADQgJAEgTgBg");
	this.shape_227.setTransform(110.275,76.45);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgWBKQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgWQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAOACQAMAAAHgGQAIgFAAgOIAAgBIgBABQgJAJgOgBQgNAAgMgGQgLgHgEgPQgEgHAAgQQAAgQAEgKQAFgOAJgHQALgIAOAAQAPAAAJAKIABAAIAAgGIABgBIABgBIAZAAIABABIABABIAABfQAAAbgQAMQgQALgXAAIgQgBgAgJgtQgEADgCAGQgDAGgBALQAAALADAFQADAGAEACQAEAEAGAAQAHAAAEgEQAFgCABgGQABgGABgKIAAgLIgCgGQgDgGgDgDQgEgEgHAAQgGAAgEAEg");
	this.shape_228.setTransform(99.1,76.35);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgdAuQgMgIgFgRQgDgJAAgMQAAgLADgKQAFgPAMgJQANgJAQAAQARAAANAJQALAIAGAQQADAMAAAJQAAALgDAKQgEAPgNAKQgNAJgRAAQgQAAgNgJgAgLgZQgFAFgCAGQgCAFAAAJQABAKABAFQACAHAFAEQAFAEAGAAQAGAAAGgEQAEgEACgHQACgHAAgIQAAgIgCgGQgCgHgEgEQgGgEgGAAQgGAAgFAEg");
	this.shape_229.setTransform(87.65,74.375);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgLBJIgCAAIgBgDIAAiLIABgCIACgBIAXAAIACABIABACIAACLIgBADIgCAAg");
	this.shape_230.setTransform(79.325,72.45);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgdAuQgNgJgEgQQgDgJAAgMQAAgLADgKQAGgQAMgIQALgJASAAQAQAAAMAJQANAIAEAQQAEAKAAALQAAALgDAKQgFAQgMAJQgMAJgSAAQgQAAgNgJgAgLgZQgEAEgCAHQgCAHAAAHQAAAKABAFQACAHAFAEQAFAEAGAAQAGAAAGgEQAFgFACgGQABgGAAgJQAAgIgBgGQgDgHgFgEQgEgEgHAAQgGAAgFAEg");
	this.shape_231.setTransform(70.95,74.375);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AATA2IgBAAIgBgCIAAg9QAAgJgEgFQgFgFgIAAQgHAAgEAFQgFAFAAAJIAAA9IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIAAABIABAAQAJgMAPgBQARAAAKALQAKAKAAARIAABEIgBACIgBAAg");
	this.shape_232.setTransform(59.55,74.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAUBJIgCAAIgBgDIAAg+QAAgIgEgEQgFgFgIgBQgHABgFAFQgEAEAAAIIAAA+IgBADIgCAAIgYAAIgCAAIgBgDIAAiLIABgCIACgBIAYAAIACABIABACIAAAuIABABIAAAAQAIgNARAAQAQAAALALQAJAJABARIAABEIgBADIgCAAg");
	this.shape_233.setTransform(48.15,72.45);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgbAvQgMgIgFgPQgEgKAAgOQAAgOAEgKQAFgOAMgIQANgIAPAAQAQAAANAIQANAIAEANIACAIIAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgYADIgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgDQgBgGgFgDQgFgEgHAAQgGAAgEAEQgFADgCAGQgCAGAAAKQAAAJACAIQACAGAEAEQAFADAGAAQAGAAAFgDQAFgFACgFIAAgBIAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAYAEQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgBAHQgEAOgNAHQgMAIgRAAQgQAAgMgIg");
	this.shape_234.setTransform(36.925,74.375);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgLAAgQQAAgMADgIQAFgPAMgIQAMgJAQAAQAUAAANAMQAMAMADAUQABAJAAAIQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIgBABIACAJQAGALAPAAQAOAAAHgKIACgCIACABIAPAPIABACIgBABQgHAJgLAFQgLAEgNAAQgRAAgMgIgAgRgRIgBAHIABABIAjAAIABgBIgBgGQgDgHgEgCQgFgEgGAAQgNAAgEAMg");
	this.shape_235.setTransform(25.6063,74.375);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgMBJIgCAAIAAgDIAAh0IgBgBIgkAAIgCAAIgBgCIAAgUIABgCIACgBIBoAAIACABIAAACIAAAUIAAACIgCAAIgmAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAB0IgBADIgCAAg");
	this.shape_236.setTransform(15.5,72.45);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgWBKQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIABgVQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOACQAMAAAIgGQAHgGAAgNIgBAAIgBAAQgHAJgPAAQgNAAgMgHQgMgHgEgOQgDgJAAgPQAAgRAEgJQAEgNAKgIQAMgIANAAQAOAAAJAKIABAAIABAAIAAgGIAAgCIACAAIAZAAIABAAIABACIAABfQAAAagQAMQgQAMgXAAIgQgBgAgJgtQgEADgCAGQgDAGgBALQAAAKADAHQABAEAFAEQAFADAGAAQAHAAAEgDQADgEADgEQABgGABgLIgBgKIgBgHQgCgFgEgEQgEgDgHAAQgGAAgEADg");
	this.shape_237.setTransform(102.25,51.35);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AAUA2IgCAAIgBgCIAAg+QAAgHgEgGQgFgFgIAAQgHAAgFAFQgEAGAAAHIAAA+IgBACIgCAAIgYAAIgCAAIgBgCIAAhlIABgCIACgBIAYAAIACABIABACIAAAHIABABIAAAAQAIgNARAAQAQAAALALQAJAKABARIAABEIgBACIgCAAg");
	this.shape_238.setTransform(90.9,49.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgLBMIgCAAIgBgCIAAhmIABgCIACAAIAXAAIACAAIAAACIAABmIAAACIgCAAgAgLgvQgEgFAAgGQAAgIAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAIQAAAGgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape_239.setTransform(82.525,47.15);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgIA/QgJgHAAgPIAAg3IgBgBIgMAAIgCgBIgBgBIAAgTIABgCIACgBIAMAAIABgBIAAgYIABgCIABgBIAXAAIACABIAAACIAAAYIABABIAUAAIACABIAAACIAAATIAAABIgCABIgUAAIgBABIAAArQAAAHADADQADADAGABIAHAAIABABIABABIAAAUQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgMABQgRAAgIgFg");
	this.shape_240.setTransform(75.8,48);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgLAAgQQAAgKADgKQAFgPAMgIQAMgJAQAAQAUAAANAMQAMALADAVIABARQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAJQAFALAQAAQAOAAAHgKIACgCIACABIAPAPIABACIgBABQgHAJgLAFQgKAEgOAAQgRAAgMgIgAgRgRIgBAHIABABIAjAAIABgBIgBgGQgDgHgEgCQgFgEgGAAQgMAAgFAMg");
	this.shape_241.setTransform(66.5583,49.375);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AAUBJQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgVgxIAAAAIgBAAIgNARIAAABIAAAfIgBACIgCAAIgYAAIgCAAIgBgCIAAiMIABgCIACgBIAYAAIACABIABACIAABFIAAABIABAAIAbghIADgBIAcAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAACIgbAhIAAABIAeBCIABACQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_242.setTransform(56.55,47.45);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgeA2IgCAAIAAgCIAAhlIAAgCIACgBIAYAAIACABIABACIAAAIIAAAAIABAAQAIgMAOAAQAHAAAFADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAXQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgIgBIgEAAQgHABgGAFQgEAFAAAIIAAA4IgBACIgCAAg");
	this.shape_243.setTransform(47.1063,49.325);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgkAvQgLgHABgQQAAgQALgIQALgJAVAAIAUAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgEQAAgHgEgEQgDgEgKAAQgFAAgEACQgFADgBAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgZgDQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQABgIAGgIQAGgHALgEQAKgEALAAQAMAAAMAFQALAFAGAHQAFAJAAAKIAABFIAAACIgCABIgYAAIgCgBIgBgCIAAgHIAAAAIgBAAQgIALgTAAQgQAAgKgIgAgLALQgGAEAAAGQAAAGAEADQAFAEAGAAQAHAAAHgFQAGgFAAgIIAAgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgPAAQgIAAgFADg");
	this.shape_244.setTransform(36.95,49.375);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAjBJIgCAAIAAgCIAAhcIgBAAIgBAAIgWAiQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgLAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgWgiIgBAAIAAABIAABbIgBACIgCAAIgYAAIgCAAIgBgCIAAiMIABgCIACgBIAYAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAfAwQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAfgwQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAYAAIACABIABACIAACMIgBACIgCAAg");
	this.shape_245.setTransform(24.225,47.45);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#CD539F").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_246.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
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
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	mask_14.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_14.setTransform(62.5,62.5);

	// Layer_3
	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AglAvQgKgIAAgPQABgQAKgIQALgJAWAAIAUAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgFQAAgGgEgEQgFgEgHAAQgFAAgGACQgEACgBAFQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgZgEQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQABgJAGgGQAGgHAKgEQAJgEAMAAQAOAAALAEQAKAFAHAIQAFAJABAJIAABGIgBACIgCAAIgYAAIgDAAIAAgCIAAgHIgBgBIgBABQgIALgTAAQgPAAgLgIgAgMALQgFADAAAHQAAAGAEADQAEADAHAAQAIAAAGgFQAGgEAAgIIAAgHIgBgBIgPAAQgJAAgFADg");
	this.shape_247.setTransform(85.85,77.375);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgLBMIgCgBIgBgCIAAhkIABgCIACgBIAXAAIACABIABACIAABkIgBACIgCABgAgKguQgGgGAAgHQAAgHAGgFQAEgEAGAAQAIAAAEAEQAEAFABAHQgBAHgEAGQgEAEgIAAQgGAAgEgEg");
	this.shape_248.setTransform(77.9,75.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgdBBQgLgIgFgOQgDgKAAgPQAAgQADgJQAGgNAKgIQAKgIAQAAQAOAAAHALIACAAIAAgBIAAgsIABgCIACgBIAYAAIACABIAAACIAACLIAAACIgCABIgYAAIgCgBIgBgCIAAgHIAAAAIgCAAQgIAMgOAAQgOAAgLgJgAgMgDQgGAIAAAOQAAAMAFAIQAFAJAJAAQAKAAAEgJQAEgIABgNQAAgNgFgIQgFgIgJAAQgJAAgEAIg");
	this.shape_249.setTransform(69.2,75.525);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgaAvQgMgIgGgOQgEgMAAgPQAAgLADgJQAEgPAMgIQAMgKARABQAUgBANAMQAMANADAUIABARQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIhAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACAIQAGAMAPAAQAOAAAHgLIACgBIACABIAOAPIABACIAAABQgJAJgJAFQgLAEgMAAQgRAAgNgIgAgRgRIgCAHIABABIAjAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAIgBgGQgBgFgFgFQgEgDgHAAQgNAAgEAMg");
	this.shape_250.setTransform(57.85,77.35);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AAjBJIgCgBIgBgCIAAhbIgBAAIgWAiIgDACIgLAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgWgiIgBAAIAAABIAABaIgBACIgCABIgYAAIgCgBIgBgCIAAiLIABgCIACgBIAYAAIADACIAfAwQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAfgwQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAYAAIACABIABACIAACLIgBACIgCABg");
	this.shape_251.setTransform(44.625,75.425);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIgBgCIAAiLIABgCIACgBIAXAAIACABIABACIAACLIgBACIgCABg");
	this.shape_252.setTransform(88.15,50.425);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgkAvQgLgIAAgPQAAgQAMgIQAKgJAWAAIAVAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgFQgBgGgEgEQgEgEgIAAQgFAAgFACQgFADgBAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgagEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQABgIAGgHQAHgIAJgDQAJgEANAAQANAAALAEQAKAFAHAIQAFAJAAAJIAABGIAAACIgCAAIgYAAIgCAAIAAgCIAAgHIgBgBIgBABQgJALgSAAQgQAAgKgIgAgMALQgEADAAAHQgBAGAEADQAEADAHAAQAJAAAFgFQAGgFABgHIAAgHIgBgBIgQAAQgIAAgGADg");
	this.shape_253.setTransform(79.85,52.375);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgLBMIgDAAIAAgDIAAhlIAAgBIADgBIAXAAIABABIACABIAABlIgCADIgBAAgAgLguQgEgFgBgHQABgIAEgFQAEgEAHAAQAHAAAFAEQAEAFABAIQgBAHgEAFQgFAEgHAAQgFAAgGgEg");
	this.shape_254.setTransform(71.95,50.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgbAvQgMgJgFgOQgEgMAAgMQAAgMAEgMQAFgOAMgIQAMgIAQAAQASAAALAIQANAJAEAMIACAHIAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgYAEIgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgBgEQgBgFgFgEQgGgDgGAAQgGAAgEADQgFAEgCAFQgCAHAAAKQAAAKACAGQACAHAFADQAEAEAGAAQAHAAAEgEQAFgCACgHIAAgCQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIAYAEQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAGQgEAOgNAIQgNAIgQAAQgPAAgNgIg");
	this.shape_255.setTransform(63.775,52.375);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgdAuQgNgJgEgQQgDgKAAgLQAAgLADgKQAEgPANgKQANgIARAAQAQAAANAIQALAJAGAPQADANAAAJQAAALgDAJQgFAQgMAKQgOAJgQAAQgPAAgOgJgAgLgZQgFAEgBAHQgDAEAAAKQAAAJACAFQACAHAFAFQAGAEAFAAQAHAAAFgEQAFgEACgIQACgJAAgFQAAgGgCgIQgDgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_256.setTransform(52.3,52.375);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgbBFQgMgFgIgKQgGgKAAgNIAAgFIAAgBIACgBIAYAAIACABIAAABIAAAEQAAAHAIAHQAIAFAMAAQALAAAFgEQAGgEAAgIQAAgFgDgDQgEgEgGgCIgRgIIgXgJQgKgFgHgIQgGgIAAgNQAAgOAGgIQAHgJALgGQANgFAOAAQAOAAANAGQANAGAGAKQAHAKAAANIAAADIAAACIgCABIgYAAIgCgBIgBgCIAAgBQAAgJgHgGQgHgGgMAAQgKAAgFAEQgFAEAAAHQAAAGADADQACADAHADIAqARQAJAEAGAIQAHAHAAAOQAAAUgOALQgPAMgYAAQgPAAgNgGg");
	this.shape_257.setTransform(40.275,50.425);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#68C7F3").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_258.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.ClipGroup_15 = function(mode,startPosition,loop,reversed) {
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
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	mask_15.graphics.p("ApkJkIAAzIITIAAIAATIg");
	mask_15.setTransform(61.25,61.25);

	// Layer_3
	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgWAyQgLgEgFgHQgGgGAAgKIAAgBIABgCIACgBIAXAAIABABIABACQAAAEAFAEQAFACAHAAQAGAAAFgCQAEgCAAgFQAAgEgEgBQgCgCgKgDQgGgBgIgDQgNgFgIgGQgHgFAAgNQAAgPALgJQAMgJATAAQAMAAAKAEQALAFAFAHQAFAIAAAJIgBACIgBABIgWAAIgCgBIgBgCQAAgFgEgDQgFgDgHAAQgGABgEACQgFADAAADQAAAEAEADIAZAHQAOAEAJAGQAIAHAAANQAAAPgMAJQgNAIgTAAQgMAAgLgEg");
	this.shape_259.setTransform(98.575,74.35);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AATA1IgBgBIgBgBIAAg8QAAgIgFgGQgEgFgIAAQgGAAgFAFQgFAGABAIIAAA8IgBABIgCABIgYAAIgCgBIAAgBIAAhjIAAgCIACgBIAYAAIACABIABACIAAAIIABgBQAIgLAPAAQARAAAKAKQAJAKABARIAABCIgBABIgCABg");
	this.shape_260.setTransform(87.85,74.275);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgcAtQgMgJgFgPQgDgKAAgLQAAgLADgKQAFgPAMgIQAMgJAQAAQARAAAMAJQAMAIAEAPQAEAJAAAMQAAAKgDAKQgFAQgMAJQgMAJgRAAQgQAAgMgJgAgKgYQgGAEgCAGQgBAFAAAJQAAAJABAFQACAHAGAEQAEAFAGAAQAGAAAFgFQAGgFABgGQACgGAAgIQAAgIgCgGQgBgGgGgEQgFgFgGAAQgGAAgEAFg");
	this.shape_261.setTransform(76.55,74.35);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgLBKIgCgBIgBgBIAAhkIABgBIACAAIAXAAIABAAIABABIAABkIgBABIgBABgAgLguQgEgFAAgGQAAgIAEgEQAFgEAGAAQAHAAAFAEQAEAEAAAIQAAAGgFAFQgEAFgHgBQgGABgFgFg");
	this.shape_262.setTransform(68.275,72.15);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgJA9QgIgGAAgPIAAg2IgBgBIgLAAIgDAAIAAgCIAAgSIAAgCIADgBIALAAIABgBIAAgYIAAgCIACgBIAXAAIABABIABACIAAAYIABABIATAAIACABIABACIAAASIgBACIgCAAIgTAAIgBABIAAArQAAAHACADQAEADAFAAIAHAAIACABIAAABIAAAUQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgMABQgQAAgJgGg");
	this.shape_263.setTransform(61.7,72.975);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgjAvQgKgJAAgPQAAgPALgIQALgJAUABIAUAAIABgCIAAgEQAAgGgFgEQgDgFgJAAQgEAAgFADQgEACgCAEQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgZgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgIAGgIQAGgGAJgFQALgDALAAQANAAALAEQAKAFAGAIQAFAJAAAJIAABEIAAABIgCABIgYAAIgBgBIgBgBIAAgHIAAgBIgBABQgIALgTAAQgPAAgKgHgAgMALQgEAEAAAGQAAAGADADQAFACAGAAQAIABAFgFQAHgFAAgHIAAgHIgBgCIgPAAQgIAAgGAEg");
	this.shape_264.setTransform(52.5,74.35);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgLBHIgCgBIgBgBIAAiJIABgCIACAAIAXAAIACAAIAAACIAACJIAAABIgCABg");
	this.shape_265.setTransform(44.85,72.45);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgZAuQgMgHgGgPQgEgLAAgPQAAgLADgIQAFgPAMgJQAMgIAPAAQAUAAAMAMQANAMACATIABARQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg+AAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAABAAIABAIQAFAMARAAQANAAAHgLIABgBIACABIAPAOIABACIgBACQgHAJgKAEQgLAEgNAAQgQAAgMgIgAgRgQIgBAGIABABIAjAAIABgBIgBgFQgDgHgEgDQgEgDgHAAQgMAAgFAMg");
	this.shape_266.setTransform(36.85,74.325);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AAZBHQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIgZg4IgBgBIgTAAIgBABIAAA4IgBABIgCABIgXAAIgCgBIgBgBIAAiJIABgCIACAAIA5AAQANgBAKAGQAKAGAFAJQAFAJABANQAAAPgIAKQgGAIgNAFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAcA5IAAACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAgAgXgtIAAAjIABABIAaAAQAIAAAFgFQAGgGAAgHQAAgIgGgFQgFgGgIAAIgaAAIgBABg");
	this.shape_267.setTransform(25.35,72.45);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgaAuQgNgJgEgNQgEgLAAgNQAAgOAEgJQAEgPAMgHQANgIAPAAQAQAAANAIQAMAIAEANQACAEAAADIAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgYADIAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgDQgCgFgFgEQgEgDgHgBQgGABgEADQgEADgDAGQgCAGAAAKQAAALACAFQACAHAFADQAFAEAFAAQAGAAAFgEQAFgFABgFIABgBIAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAXADQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBAHQgEANgNAJQgMAHgQAAQgQAAgLgIg");
	this.shape_268.setTransform(83.875,49.85);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgMBKIgBgBIgBgBIAAhjIABgCIABgBIAYAAIABABIABACIAABjIgBABIgBABgAgLguQgEgEAAgIQAAgGAEgFQAFgFAGABQAHgBAFAFQAEAFAAAGQAAAIgEAEQgFAFgHgBQgGABgFgFg");
	this.shape_269.setTransform(75.7,47.65);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgLBHIgCgBIgBgBIAAiJIABgCIACgBIAXAAIABABIACACIAACJIgCABIgBABg");
	this.shape_270.setTransform(70.6,47.95);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgRA9IgBAAIgBAAIAAAHIAAACIgCABIgYAAIgCgBIAAgCIAAiJIAAgCIACAAIAYAAIACAAIAAACIAAAsIABABIABgBQAHgKAOAAQAQAAAJAIQALAHAEANQAEALAAAOQAAAMgDAMQgGAPgJAHQgKAIgPAAQgOAAgIgLgAgOgCQgEAGAAAOQAAAOAEAHQAFAJAJAAQAJAAAFgJQAEgIAAgNQAAgOgFgGQgEgIgJAAQgJAAgFAIg");
	this.shape_271.setTransform(62.475,48.025);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgiAsQgKgKAAgRIAAhDIAAgCIACAAIAXAAIADAAIAAACIAAA8QAAAJAEAEQAFAGAHAAQAGAAAFgFQAFgEAAgHIAAg/IABgCIACAAIAYAAIACAAIABACIAABjIgBACIgCABIgYAAIgCgBIgBgCIAAgHIAAAAIgBAAQgIALgQAAQgPAAgKgJg");
	this.shape_272.setTransform(50.95,49.925);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgxBIIgCgBIgBgCIAAiJIABgCIACgBIA4AAQAOAAAKAGQALAGAFAKQAGAKAAANQAAANgGAJQgGAJgLAGQgLAFgNAAIgcAAIgBABIAAA0IgBACIgBABgAgXgtIAAAmIABABIAZAAQAJAAAGgFQAGgFAAgKQAAgJgGgFQgGgGgJAAIgZAAg");
	this.shape_273.setTransform(39.625,47.925);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#E87144").s().p("AmwGwQizizgBj9QABj8Czi0QC0izD8gBQD9ABCzCzQC0C0AAD8QAAD9i0CzQizC0j9AAQj8AAi0i0g");
	this.shape_274.setTransform(61.25,61.25);

	var maskedShapeInstanceList = [this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, rect = new cjs.Rectangle(0,0,122.5,122.5), [rect]);


(lib.ClipGroup_16 = function(mode,startPosition,loop,reversed) {
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
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	mask_16.graphics.p("ApwJxIAAzhIThAAIAAThg");
	mask_16.setTransform(62.5,62.5);

	// Layer_3
	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgWBHQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgVQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIANABQAMABAHgGQAHgFAAgNIgBAAIgBAAQgHAIgOAAQgNAAgKgGQgLgGgFgOQgDgIAAgPQAAgQAEgKQAEgMAKgHQAKgHANgBQAPAAAHAKIABAAIABgBIAAgEIAAgCIACgBIAXAAIACABIABACIAABaQAAAagPALQgPALgXgBIgQAAgAgJgrQgDADgDAFQgDAHAAAKQAAAKADAGQACADAEAFQAFACAFABQAHgBADgCQAEgEACgEQACgGAAgKIgBgKIgBgHQgCgFgEgDQgEgDgGAAQgFAAgFADg");
	this.shape_275.setTransform(100.425,76.55);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AASA0IgBgBIAAgBIAAg7QgBgHgEgGQgEgFgIAAQgGAAgFAFQgEAGgBAHIAAA7IAAABIgBABIgYAAIgCgBIgBgBIAAhhIABgBIACgBIAYAAIABABIAAABIAAAHIABABIAAAAQAJgMAPAAQAPAAALAKQAKAKgBARIAABAIAAABIgCABg");
	this.shape_276.setTransform(89.6,74.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIAAgCIAAhgIAAgCIACgBIAWAAIACABIABACIAABgIgBACIgCABgAgKgsQgFgFAAgHQAAgHAFgFQAEgDAGAAQAGAAAFADQAFAFAAAHQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_277.setTransform(81.625,72.55);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgIA7QgJgFAAgPIAAg0IgBgBIgKAAIgCgBIgBgBIAAgSIABgCIACgBIAKAAIABgBIAAgXIABgCIACgBIAWAAIABABIAAACIAAAXIABABIATAAIADABIAAACIAAASIAAABIgDABIgTAAIgBABIAAApQAAAGADAEQADADAGAAIAGAAIACAAIABACIAAATQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgLAAQgQAAgIgGg");
	this.shape_278.setTransform(75.2,73.35);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgYAtQgNgJgEgNQgFgJAAgQQAAgKADgJQAFgOALgIQAMgJAPAAQATAAAMAMQANALACAUQABAIAAAHQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIg8AAIgBABIACAIQAFALAPAAQANAAAHgKIACgCIAQAPIABACIgBACQgGAIgLAEQgKAFgNAAQgQAAgLgIgAgQgQIgBAHIABABIAhAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgBgGQgCgGgEgDQgFgEgGAAQgMAAgEAMg");
	this.shape_279.setTransform(66.3813,74.675);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AATBGQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgSguIgBgBIgBABIgMAQIgBABIAAAdIAAACIgCABIgXAAIgCgBIgBgCIAAiGIABgBIACgBIAXAAIACABIAAABIAABDIABABIAAgBIAagfIADgBIAbAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIgBADIgZAeIAAABIAdA/IABACQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_280.setTransform(56.825,72.85);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgdA0IgBgBIgBgCIAAhgIABgCIABAAIAYAAIABAAIABACIAAAIIABAAQAIgMANAAQAHAAAEADQABAAAAAAQAAABAAAAQABAAAAABQAAAAgBABIgEAXQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgHgBIgFAAQgHABgFAFQgEAEAAAIIAAA1IgBACIgBABg");
	this.shape_281.setTransform(47.8063,74.625);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAACIgCAAIgXAAIgCAAIgBgCIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_282.setTransform(38.125,74.675);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAhBGIgBgBIgBgCIAAhWIAAgBIgBAAIgWAgQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgLAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgVggIgBAAIAAABIAABWIAAACIgCABIgYAAIgBgBIgBgCIAAiGIABgBIABgBIAYAAIACACIAeAuQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAIAfguQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAYAAIABABIABABIAACGIgBACIgBABg");
	this.shape_283.setTransform(26,72.85);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgLBGIgBgBIgBgCIAAiFIABgCIABgBIAXAAIABABIABACIAACFIgBACIgBABg");
	this.shape_284.setTransform(107.45,48.975);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAABIgCABIgXAAIgCgBIgBgBIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_285.setTransform(99.525,50.825);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AATA0IgCgBIgBgBIAAg7QAAgHgEgGQgFgFgHAAQgGAAgFAFQgEAGAAAHIAAA7IgBABIgCABIgXAAIgCgBIAAgBIAAhhIAAgBIACgBIAXAAIACABIABABIAAAHIAAABIABAAQAIgMAPAAQAQAAAKAKQAJAJAAASIAABAIAAABIgCABg");
	this.shape_286.setTransform(89.075,50.75);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgbAsQgMgIgFgQQgDgJAAgLQAAgLADgJQAFgPAMgIQAMgJAPAAQARAAALAJQAMAIAFAPQADAKAAAKQAAAKgDAKQgEAPgMAJQgMAJgRAAQgPAAgMgJgAgKgYQgEAEgDAHQgBAEAAAJQAAAJABAFQACAHAFAEQAFAEAFAAQAGAAAFgEQAFgEACgHQABgGAAgIQAAgHgBgGQgDgHgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_287.setTransform(78.075,50.825);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgLBJIgCgBIAAgCIAAhgIAAgCIACgBIAWAAIACABIABACIAABgIgBACIgCABgAgKgtQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAHQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_288.setTransform(70.025,48.675);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgIA7QgIgFgBgPIAAg0IgBgBIgKAAIgCgBIgBgBIAAgSIABgCIACgBIAKAAIABgBIAAgXIABgCIACgBIAVAAIACABIAAACIAAAXIABABIAUAAIACABIAAACIAAASIAAABIgCABIgUAAIgBABIAAApQAAAGAEAEQACADAGgBIAGAAIACABIABACIAAATQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgLAAQgQAAgIgGg");
	this.shape_289.setTransform(63.6,49.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgLBJIgBgBIgBgCIAAhgIABgCIABgBIAXAAIABABIABACIAABgIgBACIgBABgAgKgtQgFgEAAgHQAAgHAFgEQAEgFAGAAQAHAAAFAFQAEAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_290.setTransform(57.375,48.675);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgcA+QgLgHgEgOQgDgKAAgOQAAgOADgJQAFgMAKgJQAKgHAPAAQAMAAAIAKIABABIAAgsIABgBIACgBIAXAAIACABIABABIAACGIgBABIgCABIgXAAIgCgBIgBgBIAAgIIgBAAQgHALgPAAQgNAAgKgIgAgMgCQgGAHABANQAAAMAEAIQAEAJAJAAQAJAAAGgJQADgIAAgMQAAgOgEgGQgFgIgIAAQgJAAgEAIg");
	this.shape_291.setTransform(49.1,49.05);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgjAtQgJgHAAgPQAAgPAKgIQAMgIATAAIATAAIABgBIAAgFQAAgGgEgEQgEgEgIAAQgFAAgEADQgEACgBAEQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgYgDQAAgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgJAGgGQAGgHAJgEQALgEAKAAQANAAAKAFQAKAEAGAIQAFAIAAAJIAABDIAAABIgCABIgXAAIgCgBIgBgBIAAgHIAAgBIgBABQgIALgSAAQgPAAgKgIgAgLALQgFAEAAAFQAAAGAEADQAEADAGAAQAHAAAGgFQAGgEAAgHIAAgIIgBgBIgOAAQgHAAgGAEg");
	this.shape_292.setTransform(38.125,50.825);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgdA0IgBgBIgBgCIAAhgIABgCIABgBIAYAAIABABIABACIAAAHIABABIAAAAQAIgMANAAQAIAAADADQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgFAWQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgHgBIgFAAQgIABgEAFQgEAEAAAIIAAA1IgBACIgBABg");
	this.shape_293.setTransform(29.825,50.775);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgLBGIgCgBIgBgCIAAhuIAAgBIgjAAIgBgBIgBgCIAAgTIABgCIABgBIBjAAIACABIABACIAAATIgBACIgCABIgkAAIgBABIAABuIAAACIgCABg");
	this.shape_294.setTransform(20.9,48.975);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F8D075").s().p("Am4G6Qi4i4AAkCQAAkAC4i4QC3i4EBAAQECAAC4C4QC3C4AAEAQAAECi3C4Qi4C3kCAAQkBAAi3i3g");
	this.shape_295.setTransform(62.5,62.5);

	var maskedShapeInstanceList = [this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, rect = new cjs.Rectangle(0,0,125,125), [rect]);


(lib.Traditional = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_16();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.SymbolDM = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,125,125);
p.frameBounds = [rect];


(lib.Symbol_TM = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Traditional();
	this.instance.setTransform(9,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Traditional(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-31.2,187.5,187.5);
p.frameBounds = [rect];


(lib.Symbol_PR = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_15();
	this.instance.setTransform(61.2,61.2,1,1,0,0,0,61.2,61.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,122.5,122.5);
p.frameBounds = [rect];


(lib.symbol_MR = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,125,125);
p.frameBounds = [rect];


(lib.Symbol_BM = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,125,125);
p.frameBounds = [rect];


(lib.Symbol_ABM = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,125,125);
p.frameBounds = [rect];


(lib.Symbol_AB = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,125,125);
p.frameBounds = [rect];


(lib.Social = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_14();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.PR = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol_PR();
	this.instance.setTransform(53.45,-0.05,1,1,0,0,0,61.2,61.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ClipGroup_15();
	this.instance_1.setTransform(53.45,-0.05,1.5,1.5,0,0,0,61.2,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5,x:53.45}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:54.45}}]},1).to({state:[{t:this.instance_1,p:{scaleX:2.25,scaleY:2.25,x:53.45}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.7,-61.2,122.5,122.5);
p.frameBounds = [rect, new cjs.Rectangle(-38.3,-91.8,183.8,183.8), new cjs.Rectangle(-6.7,-61.2,122.5,122.5), new cjs.Rectangle(-84.2,-137.7,275.7,275.7)];


(lib.Martech = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_13();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.marketresearch = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.symbol_MR();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ClipGroup_10();
	this.instance_1.setTransform(53.5,0,1.5,1.5,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.Loyalty = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.Digital = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SymbolDM();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ClipGroup_8();
	this.instance_1.setTransform(53.5,0,1.5,1.5,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.Content = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_11();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.BrandManagement = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol_BM();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ClipGroup_12();
	this.instance_1.setTransform(53.5,0,1.5,1.5,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5,x:53.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:53.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5,x:54.75}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-62,-116.7,237,236)];


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
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(60,0.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-62,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-33.7,-93.2,187.5,187.5), new cjs.Rectangle(-2.5,-62,125,125), new cjs.Rectangle(-33.7,-93.2,187.5,187.5)];


(lib.b_social = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(60,0.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-62,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-33.7,-93.2,187.5,187.5), new cjs.Rectangle(-2.5,-62,125,125), new cjs.Rectangle(-33.7,-93.2,187.5,187.5)];


(lib.b_Martech = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(60,0.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-62,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-33.7,-93.2,187.5,187.5), new cjs.Rectangle(-2.5,-62,125,125), new cjs.Rectangle(-33.7,-93.2,187.5,187.5)];


(lib.b_loyalty = function(mode,startPosition,loop,reversed) {
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


(lib.B_Event_Mar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(60,0.5,1,1,0,0,0,61.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:70},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-61,123,123);
p.frameBounds = [rect, new cjs.Rectangle(-32.2,-91.7,184.5,184.5), new cjs.Rectangle(-1.5,-61,123,123), new cjs.Rectangle(-22.2,-91.7,184.5,184.5)];


(lib.b_Content = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(60,0.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-62,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-33.7,-93.2,187.5,187.5), new cjs.Rectangle(-2.5,-62,125,125), new cjs.Rectangle(-33.7,-93.2,187.5,187.5)];


(lib.Adbuying = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol_AB();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.setTransform(53.5,0,1.5,1.5,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.ABM = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol_ABM();
	this.instance.setTransform(53.5,0,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ClipGroup_6();
	this.instance_1.setTransform(53.5,0,1.5,1.5,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-62.5,125,125);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-93.7,187.5,187.5), new cjs.Rectangle(-9,-62.5,125,125), new cjs.Rectangle(-40.2,-93.7,187.5,187.5)];


(lib.SymbolSM = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Social();
	this.instance.setTransform(9,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Social(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-31.2,187.5,187.5);
p.frameBounds = [rect];


(lib.SymbolCM = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Content();
	this.instance.setTransform(9,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Content(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-31.2,187.5,187.5);
p.frameBounds = [rect];


(lib.Symbol_MT = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Martech();
	this.instance.setTransform(9,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Martech(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-31.2,187.5,187.5);
p.frameBounds = [rect];


(lib.Symbol_CL = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Loyalty();
	this.instance.setTransform(9,62.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Loyalty(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-31.2,187.5,187.5);
p.frameBounds = [rect];


// stage content:
(lib.atomanimateredo = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(442.95,203.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.b_Traditional(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.b_social();
	this.instance_1.setTransform(285.1,787.95);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.b_social(), 3);

	this.instance_2 = new lib.b_loyalty();
	this.instance_2.setTransform(615.5,787.95);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.b_loyalty(), 3);

	this.instance_3 = new lib.b_Martech();
	this.instance_3.setTransform(731,668.95);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.b_Martech(), 3);

	this.instance_4 = new lib.b_Content();
	this.instance_4.setTransform(442.95,835.4);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.b_Content(), 3);

	this.instance_5 = new lib.B_Event_Mar();
	this.instance_5.setTransform(596.85,239.35);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.B_Event_Mar(), 3);

	this.instance_6 = new lib.Symbol_MT();
	this.instance_6.setTransform(1127.15,544.45,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.instance_7 = new lib.Symbol_CL();
	this.instance_7.setTransform(1120.15,460.95,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.instance_8 = new lib.SymbolCM();
	this.instance_8.setTransform(1143.15,642.4,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.instance_9 = new lib.SymbolSM();
	this.instance_9.setTransform(1115.15,816.95,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.instance_10 = new lib.Symbol_TM();
	this.instance_10.setTransform(1139.15,727.45,1,1,0,0,0,62.5,62.5);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.instance_11 = new lib.ABM();
	this.instance_11.setTransform(182.6,669.45);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.ABM(), 3);

	this.instance_12 = new lib.Digital();
	this.instance_12.setTransform(141.15,511.25);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib.Digital(), 3);

	this.instance_13 = new lib.Adbuying();
	this.instance_13.setTransform(291.6,240.85);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.Adbuying(), 3);

	this.instance_14 = new lib.marketresearch();
	this.instance_14.setTransform(767.4,511.25);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 2, false, new lib.marketresearch(), 3);

	this.instance_15 = new lib.BrandManagement();
	this.instance_15.setTransform(198.6,356.5);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib.BrandManagement(), 3);

	this.instance_16 = new lib.PR();
	this.instance_16.setTransform(738.75,347.75);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.PR(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#656667").ss(10).p("EgxTAAAQAAqBD4pKQDvo3G1m1QG1m0I2jwQJLj4KBAAQKCAAJLD4QI2DwG1G0QG1G1DvI3QD4JKAAKBQAAKCj4JLQjvI2m1G1Qm1G1o2DvQpLD4qCAAQqBAApLj4Qo2jvm1m1Qm1m1jvo2Qj4pLAAqCg");
	this.shape.setTransform(509.5,519.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(612.9,622.4,1136,819.3);
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