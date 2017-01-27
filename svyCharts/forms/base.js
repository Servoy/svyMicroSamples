/**
 * @type {Object}
 * @properties={typeid:35,uuid:"709A5061-AED1-459E-9382-FC44A0887387",variableType:-4}
 */
var chartJson = {
		type: 'bar',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "My First dataset",

				// The properties below allow an array to be specified to change the value of the item at the given index
				// String  or array - the bar color
				backgroundColor: "#46BFBD",

				// String or array - bar stroke color
				borderColor: "rgba(220,220,220,1)",

				// Number or array - bar border width
				borderWidth: 1,

				// String or array - fill color when hovered
				hoverBackgroundColor: "#46bf81",

				// String or array - border color when hovered
				hoverBorderColor: "rgba(220,220,220,1)",
				pointBorderColor: "rgba(220,220,220,1)",
				data: [28, 48, 40, 19, 86, 27, 90]

			}]
		},
		options: {

			title: {
				text: 'Bar chart'
			},
			responsive: false,
			tooltips: {
				mode: 'label'
			},
			elements: {
				line: {
					fill: false
				}
			},
			scales: {
				xAxes: [{
					display: true,
					gridLines: {
						display: false
					},
					labels: {
						show: true
					},
					scaleLabel: {
						display: true,
						labelString: 'First 7 months',
						fontSize: 10
					}
				}],
				yAxes: [{
					type: "linear",
					display: true,
					position: "left",
					id: "y-axis-1",
					gridLines: {
						display: false
					},
					labels: {
						show: true
					},
					scaleLabel: {
						display: true,
						labelString: 'Numbers per month',
						fontSize: 10
					}
				}]
			}
		}
	};
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3FC3A9E2-2DBD-4CD3-B277-922AB0D1744F"}
 */
var chartStr = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5FB0B947-70CB-4977-9E70-5853509AABF6"}
 */
function onRun(event) {
	if(chartStr){
		chartJson = JSON.parse(chartStr);
		//elements.static_Chart_1.data = [28, 48, 40, 19, 86, 27, 90];
		//elements.static_Chart_1.xLabels = ["January", "February", "March", "April", "May", "June", "July"]
		elements.static_Chart_1.configAdvancedChart(chartJson);		//	var node = 
	}
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"6EA51698-16BC-478F-8786-8DF8E642E733"}
 */
function onShow(firstShow, event) {
	elements.static_Chart_1.configAdvancedChart(chartJson);
	chartStr = JSON.stringify(chartJson, undefined, 2);
	// TODO Auto-generated method stub
}

/**
 * @properties={typeid:24,uuid:"8CBFF8A5-81B8-417A-97D3-C91BF6A2DB34"}
 */
function getName(){
	return 'base';
}

/**
 * @properties={typeid:24,uuid:"CAA688FB-D8EA-4DE1-8CF1-8B8D7FA9C9E6"}
 */
function getParent(){
	return null;
}
/**
 * @properties={typeid:24,uuid:"E4E38669-0299-4D03-8F3D-A7554166E1A4"}
 */
function getDescription(){
	return "Description JSFiddle"
}