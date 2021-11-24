import { SVGProps } from "react";

export const CamlWalker = ({
  scale,
  style,
  ...rest
}: { scale: number } & SVGProps<SVGSVGElement>) => (
  <svg
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    style={{
      ...style,
      backgroundColor: "transparent",
      // scale: String(scale),
      transformOrigin: "bottom left",
    }}
  >
    <style></style>
    <g id="caml_leg_group">
      <g
        id="caml_leg_1"
        transform="translate(175.074941,317.172374) rotate(32.446213)"
      >
        <path
          id="caml_leg_1_p"
          d="M209.50749,209.6788L152.97644,383.3833L81.02783,211.73448L209.50749,209.6788Z"
          transform="translate(-145.26766,-233.319058)"
          fill="none"
          stroke="rgb(219,144,9)"
          strokeWidth={2 / scale}
        />
      </g>
      <g
        id="caml_leg_2"
        transform="translate(178.477796,312.487035) rotate(-17.549098)"
      >
        <path
          id="caml_leg_2_p"
          d="M209.50749,209.6788L152.97644,383.3833L81.02783,211.73448L209.50749,209.6788Z"
          transform="translate(-145.26766,-233.319058)"
          fill="none"
          stroke="rgb(219,144,9)"
          strokeWidth={2 / scale}
        />
      </g>
      <g
        id="caml_leg_3"
        transform="translate(411.477517,316.62711) rotate(32.446213)"
      >
        <path
          id="caml_leg_3_p"
          d="M209.50749,209.6788L152.97644,383.3833L81.02783,211.73448L209.50749,209.6788Z"
          transform="translate(-145.26766,-233.319058)"
          fill="none"
          stroke="rgb(219,144,9)"
          strokeWidth={2 / scale}
        />
      </g>
      <g
        id="caml_leg_4"
        transform="translate(414.880373,311.94177) rotate(-17.549098)"
      >
        <path
          id="caml_leg_4_p"
          d="M209,209L152,383L81,211L209,209Z"
          transform="translate(-145,-233)"
          fill="none"
          stroke="rgb(219,144,9)"
          strokeWidth={2 / scale}
        />
      </g>
    </g>
    <g id="humps" transform="translate(287,217)">
      <path
        id="inner_humps"
        d="M490,303L77,311Q180,130,181,130Q182,130,284,219L407,120L490,303Z"
        transform="rotate(-0.35) translate(-284,-215)"
        fill="none"
        stroke="rgb(206,117,0)"
        strokeWidth={2 / scale}
      />
    </g>
    <g
      id="caml_neck_path_tr"
      transform="translate(522.39814,197.30719) rotate(0)"
    >
      <path
        id="caml_neck_path"
        d="M460.128186,240L521.378225,262.212044L562.055674,185.010707L563.083511,123.086578L626.809421,156.231262L580.556745,185.010707L553.832976,296.677202L499.357601,331.142361L460.128186,240Z"
        transform="translate(-538.843536,-227.114469)"
        fill="none"
        stroke="rgb(255,210,80)"
        strokeWidth={3 / scale}
      />
    </g>
  </svg>
);
