inlets = 1;


var interp = this.patcher.getnamed("interpPrep");
var nmf;
var output;

var source;
var target;
var activations;


function setSource(m)
{
	source = m;
}

function setTarget(m)
{
	target = m;
}

function setActivations(m)
{
	activations = m;
}

function createObject()
{
	if(nmf)
		this.patcher.remove(nmf);
	if(output)
	this.patcher.remove(output);
		
	nmf = this.patcher.newdefault(2575, 780, "fluid.nmfmorph~");
	output = this.patcher.newdefault(2575, 815, "s", "morphout");
	nmf.message("source", source);
	nmf.message("target", target);
	nmf.message("activations", activations);
	this.patcher.connect(interp, 0, nmf, 0);
	this.patcher.connect(nmf, 0, output, 0);
	
}