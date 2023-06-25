import React, { useState } from 'react';
import { delay, motion } from 'framer-motion';
import { Example } from '@/components/TextLoop';

const AnimatedSVG = () => {

  const paths = [
    {"d" : "M372 701.779C403 683.612 471.1 640.979 495.5 615.779", "stroke" : "url(#paint0_linear_1_16)"},
    {"d":"M537.5 565.779C558 543.946 600.679 490.54 609.5 411.779C616.5 349.279 553.457 338.607 533 393.779C516.5 438.279 508.5 578.446 499 645.279", "stroke":"url(#paint1_angular_1_16)"},
    {"d":"M483.5 720.279C489.333 681.446 505.5 603.279 532.5 571.279C562.171 536.113 619.979 527.506 627 585.779C632 627.279 604 689.279 631.5 710.279C659 731.279 728 713.279 757 693.779", "stroke":"url(#paint2_linear_1_16)"},
    {"d":"M761.5 689.651C790 676.151 829.563 646.5 842.5 601C859.187 542.314 794.443 516.791 757 559.779C728.5 592.5 723 660.59 763 690.819", "stroke":"url(#paint3_angular_1_16)"},
    {"d":"M752.5 680.779C779 716.279 868.8 747.479 948 664.279", "stroke":"url(#paint4_linear_1_16)"},
    {"d":"M962 649.279C984.333 621.112 1032.5 555.979 1048.5 498.779C1068.5 427.279 1072.5 376.779 1045.5 363.779C1015.5 349.334 978.5 389.5 962 472C950.377 530.115 948 560.779 948 604.779", "stroke":"url(#paint5_angular_1_16)"},
    {"d":"M948 606.779C947.167 643.779 958 720.179 1022 721.779C1096.5 723.642 1148.83 654.279 1172 619.779", "stroke":"url(#paint6_linear_1_16)"},
    {"d":"M1173.5 617.279C1193.5 586.279 1227.66 517.951 1242 460.779C1258.5 395 1249.71 372.07 1227 364.279C1198.5 354.5 1166.5 393.279 1151 460.779C1136.85 522.393 1122 603.779 1140 655.779", "stroke":"url(#paint7_angular_1_16)"},
    {"d":"M1133.5 626C1137 668 1169.44 719.595 1210 721.279C1263.5 723.5 1301.5 682.779 1326 607.279", "stroke":"url(#paint8_linear_1_16)"},
    {"d":"M1326.5 607.279C1314 660.779 1325.7 723.579 1388.5 720.779C1451.3 717.979 1468.33 655.612 1469 624.779C1471.83 595.279 1461.6 538.779 1402 538.779", "stroke":"url(#paint9_angular_1_16)"},
    {"d":"M1327.5 601.779C1333.5 580.779 1356.1 538.779 1398.5 538.779C1451.5 538.779 1447.5 564.279 1485.5 563.279C1515.9 562.479 1539.83 541.612 1548 531.279", "stroke":"url(#paint10_linear_1_16)"}
  ]

  // const onAnimationComplete = () => {
  //   pathVariants.visible.transition.delay = pathVariants.visible.transition.delay + 2;
  // };

  // const pathVariants = {
  //   hidden: {
  //     opacity: 0,
  //     pathLength: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     pathLength: 1,
  //     transition: {
  //       duration: 1,
  //       ease: 'easeInOut',
  //       delay: 0
  //     }
  //   }
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1920" height="1080" rx="24" fill="white"/>
{paths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          initial={{opacity: 0, pathLength: 0,}}
          animate={{
            opacity: 1,
            pathLength: 1,
            transition: {
              duration: 0.4,
              ease: 'easeInOut',
              delay: index * 0.16}
          }}
          stroke={path.stroke} 
          stroke-width="36"
          stroke-linecap="round"
        />
      ))}
<defs>
<linearGradient id="paint0_linear_1_16" x1="495.5" y1="616.279" x2="341.5" y2="724.279" gradientUnits="userSpaceOnUse">
<stop stop-color="#157B93"/>
<stop offset="1" stop-color="#037A92"/>
</linearGradient>
<radialGradient id="paint1_angular_1_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(543 513) rotate(110.425) scale(255.033 230.511)">
<stop offset="0.0115615" stop-color="#ACD15E"/>
<stop offset="0.735556" stop-color="#29949C"/>
<stop offset="0.881674" stop-color="#23929E"/>
<stop offset="0.955023" stop-color="#1E91A0"/>
</radialGradient>
<linearGradient id="paint2_linear_1_16" x1="483.5" y1="708.279" x2="739.5" y2="720.279" gradientUnits="userSpaceOnUse">
<stop stop-color="#D6D90D"/>
<stop offset="0.494792" stop-color="#FAD500"/>
<stop offset="1" stop-color="#FDD35D"/>
</linearGradient>
<radialGradient id="paint3_angular_1_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(765 664.279) rotate(125.383) scale(150.251 134.59)">
<stop offset="0.149479" stop-color="#FF9932"/>
<stop offset="0.735351" stop-color="#FFD570"/>
</radialGradient>
<linearGradient id="paint4_linear_1_16" x1="936.5" y1="664.279" x2="767.5" y2="693.279" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9246"/>
<stop offset="1" stop-color="#FF9F38"/>
</linearGradient>
<radialGradient id="paint5_angular_1_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1006.5 455.779) rotate(108.021) scale(240.814 84.7293)">
<stop offset="0.0268639" stop-color="#F45343"/>
<stop offset="0.908962" stop-color="#FD9156"/>
</radialGradient>
<linearGradient id="paint6_linear_1_16" x1="956" y1="680.279" x2="1159" y2="722.279" gradientUnits="userSpaceOnUse">
<stop stop-color="#F55544"/>
<stop offset="1" stop-color="#EE7271"/>
</linearGradient>
<radialGradient id="paint7_angular_1_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1184.5 500.779) rotate(103.182) scale(195.142 79.8384)">
<stop offset="0.00079382" stop-color="#EF716F"/>
<stop offset="0.0273104" stop-color="#9174B5"/>
</radialGradient>
<linearGradient id="paint8_linear_1_16" x1="1149.09" y1="680.167" x2="1317.55" y2="708.954" gradientUnits="userSpaceOnUse">
<stop stop-color="#9575B3"/>
<stop offset="1" stop-color="#625EAA"/>
</linearGradient>
<radialGradient id="paint9_angular_1_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1395.73 629.824) rotate(90) scale(91.0452 73.689)">
<stop offset="0.277174" stop-color="#6C9DE2"/>
<stop offset="0.6442" stop-color="#6163B8"/>
</radialGradient>
<linearGradient id="paint10_linear_1_16" x1="1327.5" y1="593.779" x2="1559" y2="557.779" gradientUnits="userSpaceOnUse">
<stop stop-color="#6C99DF"/>
<stop offset="0.586308" stop-color="#51A5D3"/>
<stop offset="1" stop-color="#7FB6DD"/>
</linearGradient>
</defs>
</motion.svg>
    </div>

    
  );
};

export default AnimatedSVG;