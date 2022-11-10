/*
{
  "CATEGORIES" : [
    "Pattern", "Color"
  ],
  "DESCRIPTION" : "Generates a basic brick pattern",
  "ISFVSN" : "2",
  "INPUTS" : [ ],
  "CREDIT" : "patriciogv"
}
*/

#include <lygia/space/ratio.glsl>
#include <lygia/math/decimation.glsl>
#include <lygia/draw/circle.glsl>

void main(void) {
    vec3 color = vec3(0.0);
    vec2 st = gl_FragCoord.xy/RENDERSIZE.xy;
    st = ratio(st, RENDERSIZE);
    
    color = vec3(st.x,st.y,abs(sin(TIME)));
    color = decimation(color, 20.);
    color += circle(st, .5, .1);
    
    gl_FragColor = vec4(color, 1.0);
}
