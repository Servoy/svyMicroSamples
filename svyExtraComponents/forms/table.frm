customProperties:"formComponent:false",
dataSource:"db:/example_data/customers",
encapsulation:60,
extendsID:"1046CC5D-E653-4F9C-B8B9-E3FCDA83A211",
items:[
{
extendsID:"CCD8084B-3484-41E7-8FBA-CBF44DD9BF67",
height:480,
typeid:19,
uuid:"0931947F-55CA-4CC3-9872-626A7F85AE4F"
},
{
location:"5,428",
onActionMethodID:"FE5E08C7-444C-4A42-87F9-A24CC56446AA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"176,42",
styleClass:"my-button",
text:"Remove Last Column",
typeid:7,
uuid:"2274CC58-2670-477F-BD90-BD1628568556",
visible:false
},
{
anchors:11,
json:{
anchors:11,
columns:[
{
dataprovider:"customerid",
headerText:"ID",
svyUUID:"4FEFE473-E75A-4574-9F9A-06DD3DE7A662"
},
{
dataprovider:"contactname",
headerText:"Name",
svyUUID:"DEE3548D-A783-4393-813E-7C69DB4E1D90"
},
{
dataprovider:"address",
headerText:"Address",
svyUUID:"6F7976E5-E707-438B-92DC-BC388CB4DDB4"
},
{
dataprovider:"city",
headerText:"City",
svyUUID:"699B77ED-B1CC-45BC-A23D-655BCC33A1DF"
},
{
dataprovider:"country",
headerText:"Country",
svyUUID:"A1860EF3-4E13-41B5-BEB4-468468D89C77"
}
],
foundset:{
foundsetSelector:""
},
location:{
x:10,
y:15
},
size:{
height:403,
width:551
}
},
location:"10,15",
name:"table_811",
size:"551,403",
typeName:"servoyextra-table",
typeid:47,
uuid:"736AFAF2-36F5-4F2F-8F34-F0967167F34B"
}
],
name:"table",
showInMenu:true,
size:"571,480",
typeid:3,
uuid:"18ECF1B2-D9B8-40EF-84AB-4E1B5756DC98"