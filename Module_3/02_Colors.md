02 - Colors:

- The standard color system available in modern computers supports 24-bit colors, displaying about 16.7 million distinct colors
via a communcation of rgb cheels with 256 different values per channel.


Color Keywords:
<named-color> - Data type contains a very finite numebr of color values, not common on websites with design langauge.
- Named colors are used in code to tell the user what color is expected.

02_cssTest.html
Implement:
<div class="wrapper">
  <div class="box one">antiquewhite</div>
  <div class="box two">blueviolet</div>
  <div class="box three">greenyellow</div>
</div>

01_styles.css
Implement:
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}



Hexadecimal RGB Values:
- Uses 16 characters from 0-9 and a-f. Each hex color value consists of a hash/pound sybmol (#) followed by six hexadecimal characters.
- Each pair of a hexadecimal cahracters represent one of the channels of an RGB color.
EX:
HTML:
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">#128a7d</div>
</div>

CSS:
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}





RGB Values:
- The rgb() function takes three parameters representing the 3 channel values of the color, with a fourth separated by a slash
representing opacity.
- This ranges from 0 and 255 or a percentage ranging from 0% to 100%:
HTML:
<div class="wrapper">
  <div class="box one">rgb(2 121 139)</div>
  <div class="box two">rgb(197 93 161)</div>
  <div class="box three">rgb(18 138 125)</div>
</div>

CSS:
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: rgb(2 121 139);
}

.two {
  background-color: rgb(197 93 161);
}

.three {
  background-color: rgb(18 138 125);
}

Example with Opacity:
- This sets the transparency of the color, from 0 (fully transparent) to 1 (fully opaque):
HTML:
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>

CSS:
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: rgb(2 121 139 / 0.3);
}

.two {
  background-color: rgb(197 93 161 / 0.7);
}

.three {
  background-color: rgb(18 138 125 / 0.9);
}





Using Hues to Specify a Color:
- <hue> is the value type that specifies the difference or similarity between colors.
- <angle> used to specify a hue value in degrees, with 0deg being red, 120deg being green, and 240deg being blue.

- Additional functions are hsl(), hwb(), and lch() which are used to specify colors in different ways, but all use the hue value as a base.
- lab(), also to define colors based on what user can see.


HWB:
- Specifies a srgb() color using three parts:
• Hue: The base shade of the color. Take a <hue> value between 0 and 360, representing the angle on a color wheel.
• Whiteness: The amount of white in the color, specified as a percentage between 0% and 100%.
• Blackness: The amount of black in the color, specified as a percentage between 0% and 100%.


HSL:
- Specifies a srgb() color using three parts:
• Hue: The base shade of the color. Take a <hue> value between 0 and 360, representing the angle on a color wheel.
• Saturation: The intensity of the color, specified as a percentage between 0% and 100%.
• Lightness: The amount of light in the color, specified as a percentage between 0% and 100%.

- Additionally, the hsl() function can take a fourth parameter for alpha, which specifies the opacity of the color. This value ranges 
from 0 (fully transparent) to 1 (fully opaque).

HTML:
<div class="wrapper">
  <div class="box one">hsl(188 97% 28%)</div>
  <div class="box two">hsl(321 47% 57%)</div>
  <div class="box three">hsl(174 77% 31%)</div>
</div>

CSS:
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28%);
}

.two {
  background-color: hsl(321 47% 57%);
}

.three {
  background-color: hsl(174 77% 31%);
}


CSS with HSL and Opacity:
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28% / 0.3);
}

.two {
  background-color: hsl(321 47% 57% / 0.7);
}

.three {
  background-color: hsl(174 77% 31% / 0.9);
}




Altenative syntax for HSL: hsl(from <color> H S L[ / A])
- from <color> is a color value that specifies the color space to use for the HSL values. The H S L values are the same as in the 
standard hsl() function, and the optional A value specifies the alpha channel (opacity) of the color.

- H, A <number>, an <angle> or a keyword none represnting the output color's <hue> angle.

- S, L <percentage> or a keyword none representing the output color's <saturation> and <lightness> values.

- A <number> or a keyword none representing the output color's <alpha> value.


EX:
hsl(from rgb(255 0 0) 240 60% 70%)
- This specifies a color in the HSL color space that is derived from the RGB color (255, 0, 0) (which is pure red). 
The hue is set to 240 degrees (which corresponds to blue), the saturation is set to 60%, and the lightness is set to 70%. 
The resulting color will be a light blue shade.


EX:
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */


EX:
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
- This specifies a color in the HSL color space that is derived from the RGB color (255, 0, 0) with an alpha value of 0.8.
- The hue is calculated by adding 60 to the original hue value, the saturation is calculated by subtracting 20 from the original 
saturation value, the lightness is calculated by subtracting 10 from the original lightness value, and the alpha value is calculated 
by subtracting 0.1 from the original alpha value.



Conic-gradient()
- A function that creates a conic gradient, which is a type of gradient that transitions colors around a central point in a circular fashion. 
EX:
CSS:
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}