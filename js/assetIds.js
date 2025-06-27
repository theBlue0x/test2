assetIds = {
	'9448003344528502385':{
		"code": "USDX",
		"description": "United States Dollar"
	},
	'2663399179527265695':{
		"code": "AUDX",
		"description": "Australian Dollar"
	}
}


assetIds_0 = [
	{
    "name": "USDX",
    "description": "United States Dollar",
    "asset": "9448003344528502385"
	},
	{
    "name": "AUDX",
    "description": "Australian Dollar",
    "asset": "2663399179527265695"
	}
]
    



function getAssetId(code) {
const assets = assetIds_0
  for (let i = 0; i < assets.length; i++) { 
  	if(code == assets[i].name) {
  		return assets[i].asset
  	}
	}
}

function getAssetName(code) {
const assets = assetIds_0
  for (let i = 0; i < assets.length; i++) { 
  	if(code == assets[i].name) {
  		return assets[i].description
  	}
	}
}
