import React from 'react-native';

import {
  contentText,
  StyledText16,
  StyledText20,
} from '../../../styles/form-text';

import {DiagnoseResultCard} from '../../../styles/form-container';

function CardDiagnoseResult({
  isDarkMode,
  result,
  severity,
  duration,
  specification,
  showResult,
}: any) {
  const contentStyle = contentText(isDarkMode);

  let severe;
  let time;
  let specs;

  if (severity === 0) {
    severe = '(F44.4) ';
  } else if (severity === 1) {
    severe = '(F44.5) ';
  } else if (severity === 2) {
    severe = '(F44.6) ';
  } else if (severity === 3) {
    severe = '(F44.7) ';
  } else if (severity === 4) {
    severe = 'Mild ';
  } else if (severity === 5) {
    severe = 'Moderate ';
  } else if (severity === 6) {
    severe = 'Severe ';
  } else if (severity === 7) {
    severe = '(G47.411) ';
  } else if (severity === 8) {
    severe = '(G47.419) ';
  } else if (severity === 9) {
    severe = '(G47.421) ';
  } else if (severity === 10) {
    severe = '(G47.429) ';
  } else if (severity === 11) {
    severe = '(G47.31) ';
  } else if (severity === 12) {
    severe = '(R06.3) ';
  } else if (severity === 13) {
    severe = '(G47.37) ';
  } else if (severity === 14) {
    severe = '(G47.34) ';
  } else if (severity === 15) {
    severe = '(G47.35) ';
  } else if (severity === 16) {
    severe = '(G47.36) ';
  } else if (severity === 17) {
    severe = '(G47.21) ';
  } else if (severity === 18) {
    severe = '(G47.22) ';
  } else if (severity === 19) {
    severe = '(G47.23) ';
  } else if (severity === 20) {
    severe = '(G47.24) ';
  } else if (severity === 21) {
    severe = '(G47.26) ';
  } else if (severity === 22) {
    severe = '(G47.20) ';
  } else if (severity === 23) {
    severe = '(F51.3) ';
  } else if (severity === 24) {
    severe = '(F51.4) ';
  } else if (severity === 25) {
    severe = '(F10.182) ';
  } else if (severity === 26) {
    severe = '(F10.282) ';
  } else if (severity === 27) {
    severe = '(F10.982) ';
  } else if (severity === 28) {
    severe = '(F15.982) ';
  } else if (severity === 29) {
    severe = '(F12.188) ';
  } else if (severity === 30) {
    severe = '(F12.288) ';
  } else if (severity === 31) {
    severe = '(F12.988) ';
  } else if (severity === 32) {
    severe = '(F11.182) ';
  } else if (severity === 33) {
    severe = '(F11.282) ';
  } else if (severity === 34) {
    severe = '(F11.982) ';
  } else if (severity === 35) {
    severe = '(F13.182) ';
  } else if (severity === 36) {
    severe = '(F13.282) ';
  } else if (severity === 37) {
    severe = '(F13.982) ';
  } else if (severity === 38) {
    severe = '(F15.182) ';
  } else if (severity === 39) {
    severe = '(F15.282) ';
  } else if (severity === 40) {
    severe = '(F15.982) ';
  } else if (severity === 41) {
    severe = '(F14.182) ';
  } else if (severity === 42) {
    severe = '(F14.282) ';
  } else if (severity === 43) {
    severe = '(F14.982) ';
  } else if (severity === 44) {
    severe = '(F14.282) ';
  } else if (severity === 45) {
    severe = '(F19.182) ';
  } else if (severity === 46) {
    severe = '(F19.282) ';
  } else if (severity === 47) {
    severe = '(F14.982) ';
  } else if (severity === 48) {
    severe = '(F10.181) ';
  } else if (severity === 49) {
    severe = '(F10.281) ';
  } else if (severity === 50) {
    severe = '(F10.981) ';
  } else if (severity === 51) {
    severe = '(F11.181) ';
  } else if (severity === 52) {
    severe = '(F11.281) ';
  } else if (severity === 53) {
    severe = '(F11.981) ';
  } else if (severity === 54) {
    severe = '(F13.181) ';
  } else if (severity === 55) {
    severe = '(F13.281) ';
  } else if (severity === 56) {
    severe = '(F13.981) ';
  } else if (severity === 57) {
    severe = '(F15.181) ';
  } else if (severity === 58) {
    severe = '(F15.281) ';
  } else if (severity === 59) {
    severe = '(F15.981) ';
  } else if (severity === 60) {
    severe = '(F14.181) ';
  } else if (severity === 61) {
    severe = '(F14.281) ';
  } else if (severity === 62) {
    severe = '(F14.981) ';
  } else if (severity === 63) {
    severe = '(F19.181) ';
  } else if (severity === 64) {
    severe = '(F19.281) ';
  } else if (severity === 65) {
    severe = '(F19.981) ';
  } else if (severity === 66) {
    severe = '(Erotomanic type) ';
  } else if (severity === 67) {
    severe = '(Grandiose type) ';
  } else if (severity === 68) {
    severe = '(Jealous type) ';
  } else if (severity === 69) {
    severe = '(Persecutory type) ';
  } else if (severity === 70) {
    severe = '(Somatic type) ';
  } else if (severity === 71) {
    severe = '(Mixed type) ';
  } else if (severity === 72) {
    severe = '(Unspecified type) ';
  } else if (severity === 73) {
    severe = '(F25.0 Bipolar type) ';
  } else if (severity === 74) {
    severe = '(F25.1 Depressive type) ';
  } else if (severity === 75) {
    severe = '(F06.2 with delusions) ';
  } else if (severity === 76) {
    severe = '(F06.0 with hallucinations: ) ';
  } else if (severity === 77) {
    severe = '(Mixed type) ';
  } else if (severity === 78) {
    severe = '(Paranoid type) ';
  } else if (severity === 79) {
    severe = '(Other type) ';
  } else if (severity === 80) {
    severe = '(Combined type) ';
  } else if (severity === 81) {
    severe = '(Exclusive type) ';
  } else if (severity === 82) {
    severe = '(Nonexclusive type) ';
  } else if (severity === 83) {
    severe = '(Body Parts) ';
  } else if (severity === 84) {
    severe = '(Non Living Objects) ';
  } else if (severity === 85) {
    severe = '(Other) ';
  } else if (severity === 86) {
    severe = '(F10.10 Mild) ';
  } else if (severity === 87) {
    severe = '(F10.11 Mild) ';
  } else if (severity === 88) {
    severe = '(F10.20 Moderate) ';
  } else if (severity === 89) {
    severe = '(F10.21 Moderate) ';
  } else if (severity === 90) {
    severe = '(F10.20 Severe) ';
  } else if (severity === 91) {
    severe = '(F10.21 Severe) ';
  } else if (severity === 93) {
    severe = '(F10.130) ';
  } else if (severity === 94) {
    severe = '(F10.230) ';
  } else if (severity === 95) {
    severe = '(F10.930) ';
  } else if (severity === 96) {
    severe = '(F10.132) ';
  } else if (severity === 97) {
    severe = '(F10.232) ';
  } else if (severity === 98) {
    severe = '(F10.932) ';
  } else if (severity === 99) {
    severe = '(12.10 Mild) ';
  } else if (severity === 100) {
    severe = '(12.11 Mild) ';
  } else if (severity === 101) {
    severe = '(12.20 Moderate) ';
  } else if (severity === 102) {
    severe = '(12.21 Moderate) ';
  } else if (severity === 103) {
    severe = '(12.20 Severe) ';
  } else if (severity === 104) {
    severe = '(12.21 Severe) ';
  } else if (severity === 105) {
    severe = '(F12.120) ';
  } else if (severity === 106) {
    severe = '(F12.220) ';
  } else if (severity === 107) {
    severe = '(F12.290) ';
  } else if (severity === 108) {
    severe = '(F12.122) ';
  } else if (severity === 109) {
    severe = '(F12.222) ';
  } else if (severity === 110) {
    severe = '(F12.292) ';
  } else if (severity === 111) {
    severe = '(16.10 Mild) ';
  } else if (severity === 112) {
    severe = '(16.11 Mild) ';
  } else if (severity === 113) {
    severe = '(16.20 Moderate) ';
  } else if (severity === 114) {
    severe = '(16.21 Moderate) ';
  } else if (severity === 115) {
    severe = '(16.20 Severe) ';
  } else if (severity === 116) {
    severe = '(16.21 Severe) ';
  } else if (severity === 117) {
    severe = '(F16.120) ';
  } else if (severity === 118) {
    severe = '(F16.220) ';
  } else if (severity === 119) {
    severe = '(F16.920) ';
  } else if (severity === 120) {
    severe = '(18.10 Mild) ';
  } else if (severity === 121) {
    severe = '(18.11 Mild) ';
  } else if (severity === 122) {
    severe = '(18.20 Moderate) ';
  } else if (severity === 123) {
    severe = '(18.21 Moderate) ';
  } else if (severity === 124) {
    severe = '(18.20 Severe) ';
  } else if (severity === 125) {
    severe = '(18.21 Severe) ';
  } else if (severity === 126) {
    severe = '(11.10 Mild) ';
  } else if (severity === 127) {
    severe = '(11.11 Mild) ';
  } else if (severity === 128) {
    severe = '(11.20 Moderate) ';
  } else if (severity === 129) {
    severe = '(11.21 Moderate) ';
  } else if (severity === 130) {
    severe = '(11.20 Severe) ';
  } else if (severity === 131) {
    severe = '(11.21 Severe) ';
  } else if (severity === 132) {
    severe = '(F11.120) ';
  } else if (severity === 133) {
    severe = '(F11.220) ';
  } else if (severity === 134) {
    severe = '(F11.290) ';
  } else if (severity === 135) {
    severe = '(F11.122) ';
  } else if (severity === 136) {
    severe = '(F11.222) ';
  } else if (severity === 137) {
    severe = '(F11.292) ';
  } else if (severity === 138) {
    severe = '(13.10 Mild) ';
  } else if (severity === 139) {
    severe = '(13.11 Mild) ';
  } else if (severity === 140) {
    severe = '(13.20 Moderate) ';
  } else if (severity === 141) {
    severe = '(13.21 Moderate) ';
  } else if (severity === 142) {
    severe = '(13.20 Severe) ';
  } else if (severity === 143) {
    severe = '(13.21 Severe) ';
  } else if (severity === 144) {
    severe = '(F13.120) ';
  } else if (severity === 145) {
    severe = '(F13.220) ';
  } else if (severity === 146) {
    severe = '(F13.920) ';
  } else if (severity === 147) {
    severe = '(F13.130) ';
  } else if (severity === 148) {
    severe = '(F13.230) ';
  } else if (severity === 149) {
    severe = '(F13.930) ';
  } else if (severity === 150) {
    severe = '(F13.132) ';
  } else if (severity === 151) {
    severe = '(F13.232) ';
  } else if (severity === 152) {
    severe = '(F13.932) ';
  } else if (severity === 153) {
    severe = '(F14.10) ';
  } else if (severity === 154) {
    severe = '(F15.10) ';
  } else if (severity === 155) {
    severe = '(F14.11) ';
  } else if (severity === 156) {
    severe = '(F15.11) ';
  } else if (severity === 157) {
    severe = '(F14.20) ';
  } else if (severity === 158) {
    severe = '(F15.20) ';
  } else if (severity === 159) {
    severe = '(F14.21) ';
  } else if (severity === 160) {
    severe = '(F15.21) ';
  } else if (severity === 161) {
    severe = '(F15.120) ';
  } else if (severity === 162) {
    severe = '(F15.220) ';
  } else if (severity === 163) {
    severe = '(F15.920) ';
  } else if (severity === 164) {
    severe = '(F14.120) ';
  } else if (severity === 165) {
    severe = '(F14.220) ';
  } else if (severity === 166) {
    severe = '(F14.920) ';
  } else if (severity === 167) {
    severe = '(F15.122) ';
  } else if (severity === 168) {
    severe = '(F15.222) ';
  } else if (severity === 169) {
    severe = '(F15.922) ';
  } else if (severity === 170) {
    severe = '(F14.122) ';
  } else if (severity === 171) {
    severe = '(F14.222) ';
  } else if (severity === 172) {
    severe = '(F14.922) ';
  } else if (severity === 173) {
    severe = '(F17.200) ';
  } else if (severity === 174) {
    severe = '(F17.201) ';
  } else if (severity === 175) {
    severe = '(19.10 Mild) ';
  } else if (severity === 176) {
    severe = '(19.11 Mild) ';
  } else if (severity === 177) {
    severe = '(19.20 Moderate) ';
  } else if (severity === 178) {
    severe = '(19.21 Moderate) ';
  } else if (severity === 179) {
    severe = '(19.20 Severe) ';
  } else if (severity === 180) {
    severe = '(19.21 Severe) ';
  } else if (severity === 181) {
    severe = '(F19.130) ';
  } else if (severity === 182) {
    severe = '(F19.230) ';
  } else if (severity === 183) {
    severe = '(F19.930) ';
  } else if (severity === 184) {
    severe = '(F19.132) ';
  } else if (severity === 185) {
    severe = '(F19.232) ';
  } else if (severity === 186) {
    severe = '(F19.932) ';
  } else if (severity === 187) {
    severe = '(F40.218) ';
  } else if (severity === 188) {
    severe = '(F40.228) ';
  } else if (severity === 189) {
    severe = '(F40.23x) ';
  } else if (severity === 190) {
    severe = '(F40.230) ';
  } else if (severity === 191) {
    severe = '(F40.231) ';
  } else if (severity === 192) {
    severe = '(F40.232) ';
  } else if (severity === 193) {
    severe = '(F40.233) ';
  } else if (severity === 194) {
    severe = '(F40.248) ';
  } else if (severity === 195) {
    severe = '(F40.298) ';
  } else if (severity === 196) {
    severe = '(F10.180) ';
  } else if (severity === 197) {
    severe = '(F10.280) ';
  } else if (severity === 198) {
    severe = '(F10.980) ';
  } else if (severity === 199) {
    severe = '(F15.980) ';
  } else if (severity === 200) {
    severe = '(F12.180) ';
  } else if (severity === 201) {
    severe = '(F12.280) ';
  } else if (severity === 202) {
    severe = '(F12.980) ';
  } else if (severity === 203) {
    severe = '(F11.188) ';
  } else if (severity === 204) {
    severe = '(F11.288) ';
  } else if (severity === 205) {
    severe = '(F11.988) ';
  } else if (severity === 206) {
    severe = '(F13.180) ';
  } else if (severity === 207) {
    severe = '(F13.280) ';
  } else if (severity === 208) {
    severe = '(F13.980) ';
  } else if (severity === 209) {
    severe = '(F15.180) ';
  } else if (severity === 210) {
    severe = '(F15.280) ';
  } else if (severity === 211) {
    severe = '(F15.980) ';
  } else if (severity === 212) {
    severe = '(F14.180) ';
  } else if (severity === 213) {
    severe = '(F14.280) ';
  } else if (severity === 214) {
    severe = '(F14.980) ';
  } else if (severity === 215) {
    severe = '(F19.180) ';
  } else if (severity === 216) {
    severe = '(F19.280) ';
  } else if (severity === 217) {
    severe = '(F19.980) ';
  } else if (severity === 218) {
    severe = '(F18.180) ';
  } else if (severity === 219) {
    severe = '(F18.280) ';
  } else if (severity === 220) {
    severe = '(F18.980) ';
  } else if (severity === 221) {
    severe = '(F16.180) ';
  } else if (severity === 222) {
    severe = '(F16.280) ';
  } else if (severity === 223) {
    severe = '(F16.980) ';
  } else if (severity === 224) {
    severe = '(Early onset) ';
  } else if (severity === 225) {
    severe = '(Late onset) ';
  } else if (severity === 226) {
    severe = '(F06.31 With depressive features) ';
  } else if (severity === 227) {
    severe = '(F06.32 With major depressive–like episode) ';
  } else if (severity === 228) {
    severe = '(F06.34 With mixed features) ';
  } else if (severity === 229) {
    severe = '(F32.0 / F33.0) ';
  } else if (severity === 230) {
    severe = '(F32.1 / F33.1) ';
  } else if (severity === 231) {
    severe = '(F32.2 / F33.2) ';
  } else if (severity === 232) {
    severe = '(F32.3 / F33.3) ';
  } else if (severity === 233) {
    severe = '(F32.4 / F33.4) ';
  } else if (severity === 234) {
    severe = '(F32.5 / F33.5) ';
  } else if (severity === 235) {
    severe = '(F32.9 / F33.9) ';
  } else if (severity === 236) {
    severe = 'Moderate-severe ';
  } else if (severity === 237) {
    severe = '(G10 Huntington’s disease F02.81) ';
  } else if (severity === 238) {
    severe = '(G10 Huntington’s disease F02.80) ';
  } else if (severity === 239) {
    severe = '(G20 Parkinson’s disease F02.81) ';
  } else if (severity === 240) {
    severe = '(G20 Parkinson’s disease F02.80) ';
  } else if (severity === 241) {
    severe = '(G31.84) ';
  } else if (severity === 242) {
    severe = '(F06.0) ';
  } else if (severity === 243) {
    severe = '(F06.31) ';
  } else if (severity === 244) {
    severe = '(F07.0) ';
  } else if (severity === 245) {
    severe = '(A81.9 prion disease F02.81) ';
  } else if (severity === 246) {
    severe = '(A81.9 prion disease F02.80) ';
  } else if (severity === 247) {
    severe = '(F06.2) ';
  } else if (severity === 248) {
    severe = '(F06.32) ';
  } else if (severity === 249) {
    severe = '(B20 HIV infection F02.81) ';
  } else if (severity === 250) {
    severe = '(B20 HIV infection F02.80) ';
  } else if (severity === 251) {
    severe = '(F10.27) ';
  } else if (severity === 252) {
    severe = '(F10.97) ';
  } else if (severity === 253) {
    severe = '(F10.26) ';
  } else if (severity === 254) {
    severe = '(F10.96) ';
  } else if (severity === 255) {
    severe = '(F18.17) ';
  } else if (severity === 256) {
    severe = '(F18.27) ';
  } else if (severity === 257) {
    severe = '(F18.97) ';
  } else if (severity === 258) {
    severe = '(F13.27) ';
  } else if (severity === 259) {
    severe = '(F13.97) ';
  } else if (severity === 260) {
    severe = '(F19.17) ';
  } else if (severity === 261) {
    severe = '(F19.27) ';
  } else if (severity === 262) {
    severe = '(F19.97) ';
  } else if (severity === 263) {
    severe = '(F10.188) ';
  } else if (severity === 264) {
    severe = '(F10.288) ';
  } else if (severity === 265) {
    severe = '(F10.988) ';
  } else if (severity === 266) {
    severe = '(F18.188) ';
  } else if (severity === 267) {
    severe = '(F18.188) ';
  } else if (severity === 268) {
    severe = '(F18.188) ';
  } else if (severity === 269) {
    severe = '(F13.188) ';
  } else if (severity === 270) {
    severe = '(F13.288) ';
  } else if (severity === 271) {
    severe = '(F13.988) ';
  } else if (severity === 272) {
    severe = '(F15.188) ';
  } else if (severity === 273) {
    severe = '(F15.288) ';
  } else if (severity === 274) {
    severe = '(F15.988) ';
  } else if (severity === 275) {
    severe = '(F14.188) ';
  } else if (severity === 276) {
    severe = '(F14.288) ';
  } else if (severity === 277) {
    severe = '(F14.988) ';
  } else if (severity === 278) {
    severe = '(F19.188) ';
  } else if (severity === 279) {
    severe = '(F19.288) ';
  } else if (severity === 280) {
    severe = '(F19.988) ';
  } else if (severity === 281) {
    severe = '(S06.2X9S / F02.81) ';
  } else if (severity === 282) {
    severe = '(S06.2X9S / F02.82) ';
  } else if (severity === 283) {
    severe = '(F06.34) ';
  } else if (severity === 284) {
    severe = '(F01.51) ';
  } else if (severity === 285) {
    severe = '(F01.50) ';
  } else if (severity === 286) {
    severe = '(G31.09 frontotemporal degeneration F02.81) ';
  } else if (severity === 287) {
    severe = '(G31.09 frontotemporal degeneration F02.80) ';
  } else if (severity === 288) {
    severe = '(G30.9) ';
  } else if (severity === 289) {
    severe = '(F02.8x b) ';
  } else if (severity === 290) {
    severe = '(G31.84 c) ';
  } else if (severity === 291) {
    severe = '(G31.09) ';
  } else if (severity === 292) {
    severe = '(G31.83) ';
  } else if (severity === 293) {
    severe = '(F01.5x b) ';
  } else if (severity === 294) {
    severe = '(S06.2X9S) ';
  } else if (severity === 295) {
    severe = '(B20) ';
  } else if (severity === 296) {
    severe = '(A81.9) ';
  } else if (severity === 297) {
    severe = '(G20) ';
  } else if (severity === 298) {
    severe = '(G10) ';
  } else if (severity === 299) {
    severe = '(R41.9 c) ';
  } else if (severity === 300) {
    severe = '(R41.9 c) ';
  } else if (severity === 301) {
    severe = '(G30.9 Alzheimer’s disease F02.81) ';
  } else if (severity === 302) {
    severe = '(G30.9 Alzheimer’s disease F02.80) ';
  } else if (severity === 303) {
    severe = '(G30.9 Alzheimer’s disease F06.2) ';
  } else if (severity === 304) {
    severe = '(G30.9 Alzheimer’s disease F06.32) ';
  } else if (severity === 305) {
    severe = '(G31.83 Lewy body disease F02.81) ';
  } else if (severity === 306) {
    severe = '(G31.83 Lewy body disease F02.80) ';
  } else if (severity === 307) {
    severe = '(F06.33) ';
  } else if (severity === 308) {
    severe = '(Medication-induced delirium) ';
  } else if (severity === 309) {
    severe = '(F05 Delirium due to another medical condition) ';
  } else if (severity === 310) {
    severe = '(F05 Delirium due to multiple etiologies) ';
  } else if (severity === 311) {
    severe = '(F10.131) ';
  } else if (severity === 312) {
    severe = '(F10.231) ';
  } else if (severity === 313) {
    severe = '(F10.931) ';
  } else if (severity === 314) {
    severe = '(F11.188) ';
  } else if (severity === 315) {
    severe = '(F11.288) ';
  } else if (severity === 316) {
    severe = '(F11.988) ';
  } else if (severity === 317) {
    severe = '(F13.131) ';
  } else if (severity === 318) {
    severe = '(F13.231) ';
  } else if (severity === 319) {
    severe = '(F13.931) ';
  } else if (severity === 320) {
    severe = '(F19.131) ';
  } else if (severity === 321) {
    severe = '(F19.231) ';
  } else if (severity === 322) {
    severe = '(F19.931) ';
  } else if (severity === 323) {
    severe = '(F10.121) ';
  } else if (severity === 324) {
    severe = '(F10.221) ';
  } else if (severity === 325) {
    severe = '(F10.921) ';
  } else if (severity === 326) {
    severe = '(F12.121) ';
  } else if (severity === 327) {
    severe = '(F12.221) ';
  } else if (severity === 328) {
    severe = '(F12.921) ';
  } else if (severity === 329) {
    severe = '(F16.121) ';
  } else if (severity === 330) {
    severe = '(F16.221) ';
  } else if (severity === 331) {
    severe = '(F16.921) ';
  } else if (severity === 332) {
    severe = '(F18.121) ';
  } else if (severity === 333) {
    severe = '(F18.221) ';
  } else if (severity === 334) {
    severe = '(F18.921) ';
  } else if (severity === 335) {
    severe = '(F11.121) ';
  } else if (severity === 336) {
    severe = '(F11.221) ';
  } else if (severity === 337) {
    severe = '(F11.921) ';
  } else if (severity === 338) {
    severe = '(F13.121) ';
  } else if (severity === 339) {
    severe = '(F13.221) ';
  } else if (severity === 340) {
    severe = '(F13.921) ';
  } else if (severity === 341) {
    severe = '(F15.121) ';
  } else if (severity === 342) {
    severe = '(F15.221) ';
  } else if (severity === 343) {
    severe = '(F15.921) ';
  } else if (severity === 344) {
    severe = '(F14.121) ';
  } else if (severity === 345) {
    severe = '(F14.221) ';
  } else if (severity === 346) {
    severe = '(F14.921) ';
  } else if (severity === 347) {
    severe = '(F19.121) ';
  } else if (severity === 348) {
    severe = '(F19.221) ';
  } else if (severity === 349) {
    severe = '(F19.921) ';
  } else if (severity === 350) {
    severe = '(F06.33 With manic features) ';
  } else if (severity === 351) {
    severe = '(F06.33 With manic- or hypomanic-like episode) ';
  } else if (severity === 352) {
    severe = '(F06.34 With mixed features) ';
  } else if (severity === 353) {
    severe = '(F10.14) ';
  } else if (severity === 354) {
    severe = '(F10.24) ';
  } else if (severity === 355) {
    severe = '(F10.94) ';
  } else if (severity === 356) {
    severe = '(F16.14) ';
  } else if (severity === 357) {
    severe = '(F16.24) ';
  } else if (severity === 358) {
    severe = '(F16.94) ';
  } else if (severity === 359) {
    severe = '(F13.14) ';
  } else if (severity === 360) {
    severe = '(F13.24) ';
  } else if (severity === 361) {
    severe = '(F13.94) ';
  } else if (severity === 362) {
    severe = '(F15.14) ';
  } else if (severity === 363) {
    severe = '(F15.24) ';
  } else if (severity === 364) {
    severe = '(F15.94) ';
  } else if (severity === 365) {
    severe = '(F14.14) ';
  } else if (severity === 366) {
    severe = '(F14.24) ';
  } else if (severity === 367) {
    severe = '(F14.94) ';
  } else if (severity === 368) {
    severe = '(F19.14) ';
  } else if (severity === 369) {
    severe = '(F19.24) ';
  } else if (severity === 370) {
    severe = '(F19.94) ';
  } else if (severity === 371) {
    severe = '() ';
  } else if (severity === 372) {
    severe = '(Apathetic type) ';
  } else {
    severe = '';
  }

  if (duration === 0) {
    time = 'Acute ';
  } else if (duration === 1) {
    time = 'Persistent ';
  } else if (duration === 2) {
    time = 'Mild ';
  } else if (duration === 3) {
    time = 'Moderate ';
  } else if (duration === 4) {
    time = 'Severe ';
  } else if (duration === 5) {
    time = 'Extreme ';
  } else if (duration === 6) {
    time = 'Single ';
  } else if (duration === 7) {
    time = 'Recurrent ';
  } else if (duration === 8) {
    time = 'Episodic ';
  } else if (duration === 9) {
    time = 'Subacute ';
  } else if (duration === 10) {
    time = 'Lifelong ';
  } else if (duration === 11) {
    time = 'Acquired ';
  } else if (duration === 12) {
    time = 'Generalized ';
  } else if (duration === 13) {
    time = 'Situational ';
  } else if (duration === 14) {
    time = 'First episode, currently in acute episode ';
  } else if (duration === 15) {
    time = 'First episode, currently in partial remission ';
  } else if (duration === 16) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 17) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 18) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 19) {
    time = 'First episode, currently in full remission ';
  } else if (duration === 20) {
    time = 'Continuous ';
  } else if (duration === 21) {
    time = 'Unspecified ';
  } else if (duration === 22) {
    time = '(In a controlled environment) ';
  } else if (duration === 23) {
    time = '(In full remission) ';
  } else if (duration === 24) {
    time = '(F90.2 Combined presentation) ';
  } else if (duration === 25) {
    time = '(F90.0 Predominantly inattentive presentation) ';
  } else if (duration === 26) {
    time = '(F90.1 Predominantly hyperactive/impulsive presentation) ';
  } else if (duration === 27) {
    time = '(In patial remission) ';
  } else if (duration === 28) {
    time = '(F81.0 With impairment in reading) ';
  } else if (duration === 29) {
    time = '(F81.81 With impairment in written expression) ';
  } else if (duration === 30) {
    time = '(F81.2 With impairment in mathematics) ';
  } else if (duration === 31) {
    time = '(In early remission) ';
  } else if (duration === 32) {
    time = '(In sustained remission) ';
  } else if (duration === 33) {
    time = '(In partial remission) ';
  } else {
    time = '';
  }

  if (specification === 0) {
    specs = ' (Without psychological stressor)';
  } else if (specification === 1) {
    specs = ' (With psychological stressor)';
  } else if (specification === 2) {
    specs = ' (By self)';
  } else if (specification === 3) {
    specs = ' (By proxy)';
  } else if (specification === 4) {
    specs = ' (With medical condition)';
  } else if (specification === 5) {
    specs = ' (With mental disorder)';
  } else if (specification === 6) {
    specs = ' (With another sleep disorder)';
  } else if (specification === 7) {
    specs = ' (NT1)';
  } else if (specification === 8) {
    specs = ' (NT2)';
  } else if (specification === 9) {
    specs = ' (Familial)';
  } else if (specification === 10) {
    specs = ' (Overlapping with non-24-hour sleep-wake type)';
  } else if (specification === 11) {
    specs = ' (During sleep onset)';
  } else if (specification === 12) {
    specs = ' (Insomnia Type)';
  } else if (specification === 13) {
    specs = ' (Daytime sleepiness type)';
  } else if (specification === 14) {
    specs = ' (Parasomnia type)';
  } else if (specification === 15) {
    specs = ' (Mixed type)';
  } else if (specification === 16) {
    specs = ' (With onset during intoxication)';
  } else if (specification === 17) {
    specs = ' (With onset during withdrawal)';
  } else if (specification === 18) {
    specs = ' (With onset after medication use)';
  } else if (specification === 19) {
    specs = ' (With Bizarre Content)';
  } else if (specification === 20) {
    specs = ' (With marked stressor(s))';
  } else if (specification === 21) {
    specs = ' (Without marked stressor(s))';
  } else if (specification === 22) {
    specs = ' (With peripartum onset)';
  } else if (specification === 23) {
    specs = ' (With catatonia)';
  } else if (specification === 24) {
    specs = ' (With good prognostic features)';
  } else if (specification === 25) {
    specs = ' (Without good prognostic features)';
  } else if (specification === 26) {
    specs = ' (Persistent auditory hallucinations)';
  } else if (specification === 27) {
    specs = ' (Delusions with significant overlapping mood episodes)';
  } else if (specification === 28) {
    specs = ' (Attenuated psychosis syndrome)';
  } else if (specification === 29) {
    specs = ' (Sexually aroused by exposing genitals to prepubertal children)';
  } else if (specification === 30) {
    specs =
      ' (Sexually aroused by exposing genitals to physically mature individuals)';
  } else if (specification === 31) {
    specs =
      ' (Sexually aroused by exposing genitals to prepubertal children and to physically mature individuals)';
  } else if (specification === 32) {
    specs = ' (With asphyxiophilia)';
  } else if (specification === 33) {
    specs = ' (Sexually attracted to males)';
  } else if (specification === 34) {
    specs = ' (Sexually attracted to females)';
  } else if (specification === 35) {
    specs = ' (Sexually attracted to both)';
  } else if (specification === 36) {
    specs = ' (Limited to incest)';
  } else if (specification === 37) {
    specs = ' (With Fetishism)';
  } else if (specification === 38) {
    specs = ' (With Autogynephilia)';
  } else if (specification === 39) {
    specs = ' (With good or fair insight)';
  } else if (specification === 40) {
    specs = ' (With poor insight)';
  } else if (specification === 41) {
    specs = ' (With absent insight/delusional beliefs)';
  } else if (specification === 42) {
    specs = ' (Tic-related)';
  } else if (specification === 44) {
    specs = ' (With excessive acquisition)';
  } else if (specification === 45) {
    specs = ' (With obsessive compulsive disorder-like symptoms)';
  } else if (specification === 46) {
    specs = ' (With appearance preoccupation)';
  } else if (specification === 47) {
    specs = ' (With hoarding symptoms)';
  } else if (specification === 48) {
    specs = ' (With hair-pulling symptoms)';
  } else if (specification === 49) {
    specs = ' (With skin-picking symptoms)';
  } else if (specification === 50) {
    specs = ' (Requiring very substantial support)';
  } else if (specification === 51) {
    specs = ' (Requiring substantial support)';
  } else if (specification === 52) {
    specs = ' (Requiring support)';
  } else if (specification === 53) {
    specs = ' (With or without accompanying intellectual impairment)';
  } else if (specification === 54) {
    specs = ' (With or without accompanying language impairment)';
  } else if (specification === 55) {
    specs =
      ' (Associated with a known genetic or other medical condition or environmental factor)';
  } else if (specification === 56) {
    specs =
      ' (Associated with a neurodevelopmental, mental, or behavioral problem)';
  } else if (specification === 57) {
    specs = ' (With self-injurious behavior)';
  } else if (specification === 58) {
    specs = ' (Without self-injurious behavior)';
  } else if (specification === 59) {
    specs =
      ' (Associated with a known genetic or other medical condition, neurodevelopmental disorder, or environmental factor)';
  } else if (specification === 60) {
    specs = ' (With motor tics only)';
  } else if (specification === 61) {
    specs = ' (With vocal tics only)';
  } else if (specification === 62) {
    specs = ' (With perceptual disturbances)';
  } else if (specification === 63) {
    specs = ' (On maintenance therapy)';
  } else if (specification === 64) {
    specs = ' (In a controlled environment)';
  } else if (specification === 65) {
    specs = ' (Performance only)';
  } else if (specification === 66) {
    specs = ' (With anxious distress)';
  } else if (specification === 67) {
    specs = ' (With atypical features)';
  } else if (specification === 68) {
    specs = ' (With psychotic features)';
  } else if (specification === 69) {
    specs = ' (With mood-congruent psychotic features)';
  } else if (specification === 70) {
    specs = ' (With mood-incongruent psychotic features)';
  } else if (specification === 71) {
    specs = ' (Without behavioral disturbance)';
  } else if (specification === 72) {
    specs = ' (With behavioral disturbance)';
  } else if (specification === 73) {
    specs = ' (Due to Alzheimer’s disease)';
  } else if (specification === 74) {
    specs = ' (Hyperactive)';
  } else if (specification === 75) {
    specs = ' (Hypoactive)';
  } else if (specification === 76) {
    specs = ' (Mixed level of activity)';
  } else {
    specs = '';
  }

  return (
    <>
      <StyledText16 style={contentStyle.bold}>Result:</StyledText16>
      <DiagnoseResultCard
        style={{
          backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
          padding: 10,
        }}>
        {showResult && (
          <StyledText20 style={contentStyle.bold}>
            {severe + time + result + specs}
          </StyledText20>
        )}
      </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
