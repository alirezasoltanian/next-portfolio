// <!--

//   NOTE: Before cancelling this code on Twitter...

//   Consider that this is sort of a joke and an experiment with defining *everything* in HTML.

//   See the CSS tab for the things I was not able to define via arbirtary properties,
//   perhaps you can help me :)
//  -->

// <div className="grid min-h-screen place-items-center bg-slate-900 p-8">
//   <!-- We set the CSS variables in the parent element -->
//   <div className="relative h-60 w-80 rounded-[length:var(--border-radius)] border-[length:var(--border-width)] border-slate-600 bg-slate-800 [--anchor:100] [--border:1] [--glow:60] [--lightness:50%] [--opacity:1] [--radius:24] [--saturation:100%] [--speed:2] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--hue:300]">
//     <!--
//       You'll notice an important (!) flag on the `mask-clip` and `mask-composite` properties.

//       I did that because these properties were generated _before_ the `mask` property, which reset those two their default values.

//       Is there a better way to control the order in which arbitrary properties are generated?
//      -->
//     <span className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[length:var(--border-radius)] border-[length:var(--border-width)] border-transparent [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] [mask-clip:padding-box,border-box]! [mask-composite:intersect]!">
//       <!--
//       Glowy spinny square
//       ---
//       This could be the :after pseudo element of the parent element,
//       but these repeated after: classes wreck my brain.

//       But you're welcome to prepend `after:` to each class below and move them to the immediate parent elemen.

//       It should work the same (but make the code even more cancel-friendly).
//     -->
//       <span className="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"></span>
//     </span>
//   </div>
// </div>
