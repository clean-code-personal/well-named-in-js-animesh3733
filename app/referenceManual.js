const MajorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];

const MinorColorNames = [
	"BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

function ColorPair(){
           this.majorColor;
           this.minorColor;
}

ColorPair.prototype.toString=function(){
	return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
}

function getColorFromPairNumber(pairNumber)
{
	let minorSize = MajorColorNames.length;
	let majorSize = MinorColorNames.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new ColorPair();
	pair.majorColor = MajorColorNames[majorIndex];
	pair.minorColor = MinorColorNames[minorIndex];
	return pair;
}

function format_reference_manual(){
    console.log('Color Coding Reference Manual: ');
    for(let i = 1; i <= 25; i++){
        const color_pair = getColorFromPairNumber(i);
        console.log('${i}: ${color_pair.join('-')}');
    }
}

format_reference_manual();
