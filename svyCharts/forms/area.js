/**
 * @properties={typeid:35,uuid:"9652C141-9FBB-4F2B-BC86-72EDC32E4398",variableType:-4}
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
 * @properties={typeid:35,uuid:"318CD3B4-5EBE-4CC6-85AC-068D871AA95B"}
 */
var chartStr = '';

/**
 * @properties={typeid:24,uuid:"7BBF2277-0D19-4033-8304-93240E4A35B6"}
 */
function getName(){
	return 'Area Chart';
}

/**
 * @properties={typeid:24,uuid:"4081EAEC-8CF2-44B6-8E4F-DB7F457E241A"}
 */
function getParent(){
	return forms.parent;
}

/**
 * @properties={typeid:24,uuid:"09BFF289-85A6-4D7C-81DC-5CD32D364455"}
 */
function getDescription(){
	return 'Area chart description'
}

/**
 * @properties={typeid:24,uuid:"A7D30E73-4512-4897-9544-A8D6C0E061B0"}
 */
function getIconStyleClass() {
	return 'fa-area-chart'
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"03B8EB35-2281-4CCF-8BC8-1185398B901A"}
 */
function btn_showEditor(event) {
	if(forms.jsonEditor.setProperties(controller.getName(),'static_Chart_1',JSON.stringify(chartJson, undefined, 2))) {
		var dialog = application.createWindow('codeEditor',JSWindow.DIALOG);
		dialog.undecorated = true;
		dialog.setLocation(application.getWindow().getWidth() - forms.jsonEditor.controller.getFormWidth(),0)
		dialog.show('jsonEditor');
	}
}
