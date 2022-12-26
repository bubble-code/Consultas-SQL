void main() {
    vec3 color = vec3(0.34, 0.53, 0.96);
    gl_FragColor = vec4(color, 1.0);
}

// in float vDistance;

// void main() {
//     vec3 color = vec3(0.86, 0.95, 0.08);
//     float strength = distance(gl_PointCoord, vec2(0.5));
//     strength = 1.0 - strength;
//     strength = pow(strength, 3.0);
//     color = mix(color, vec3(0.7412, 0.3843, 0.051), vDistance * 0.5);
//     color = mix(vec3(0.0), color, strength);
//     gl_FragColor = vec4(color, strength);

// }