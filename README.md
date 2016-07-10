### About
Service Generates gradient strips between two colors.

Built on top of [TinyColor](https://github.com/bgrins/TinyColor) and [TinyGradient](https://github.com/mistic100/tinygradient)

### How to use
Incule `gradientService` in app.

##### Exposed Functions
Returns an array of color in hex format.
```
gradientService.HSVGradient(color1,color2,no_of_slices)
or
gradientService.HSVGradient(color1,midcolor,color2,no_of_slices)
```

and

```
gradientService.RGBGradient(color1,color2,no_of_slices)
or
gradientService.RGBGradient(color1,midcolor,color2,no_of_slices)
```

### Features

- Colors can be passed in any format (thanks to tinycolor)
    - rgb
    - rgba
    - hex
    - even by name
- Positon can be given to middle color (Coming soon)

### Example
```
colorsHSV = gradientService.HSVGradient([
			  '#ff0000',
			  '#fff',
			],10);
```
colorHSV :  `["#ff0000","#ff1c1c","#ff3939","#ff5555","#ff7171","#ff8e8e","#ffaaaa","#ffc6c6","#ffe3e3","#ffffff"]`
![example](https://raw.githubusercontent.com/jainmukul/gradientService/master/red.png)



```
colorsRGB = gradientService.RGBGradient([
			  '#ff0000',
			  '#fff',
			],10);
```
colorRGB : `["#ff0000","#ff1c1c","#ff3939","#ff5555","#ff7171","#ff8e8e","#ffaaaa","#ffc6c6","#ffe3e3","#ffffff"]`

![example](https://raw.githubusercontent.com/jainmukul/gradientService/master/red.png)


```
colorsHSV = gradientService.HSVGradient([
			  '#F44336',
			  '#4CAF50',
			],10);
```
colorHSV :  `["#f44336","#ec6d3a","#e5923d","#ddb241","#d5cd43","#b7ce46","#96c648","#78be4a","#5eb74b","#4caf50"]`
![HSV](https://raw.githubusercontent.com/jainmukul/gradientService/master/hsv.png)

```
colorsRGB = gradientService.RGBGradient([
			  '#F44336',
			  '#4CAF50',
			],10);
```
colorRGB : `["#f44336","#e14f39","#cf5b3c","#bc673f","#a97342","#977f44","#848b47","#71974a","#5fa34d","#4caf50"]`
![RGB](https://raw.githubusercontent.com/jainmukul/gradientService/master/rgb.png)