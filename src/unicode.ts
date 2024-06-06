// Unicode v15.1.0 support
/*eslint-disable*/

function isIDContinue(code:number) {
    return (unicodeLookup[(code >>> 5) + 0] >>> code & 31 & 1) !== 0
}
function isIDStart(code:number) {
    return (unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0
}
function mustEscape(code:number) {
    return (unicodeLookup[(code >>> 5) + 69632] >>> code & 31 & 1) !== 0
}
export const unicodeLookup = ((compressed, lookup) => {
    const result = new Uint32Array(104448)
    let index = 0;
    let subIndex = 0
    while (index < 3701) {
        const inst = compressed[index++]
        if (inst < 0) {
            subIndex -= inst
        } else {
            let code = compressed[index++]
            if (inst & 2) code = lookup[code]
            if (inst & 1) {
                result.fill(code, subIndex, subIndex += compressed[index++])
            } else {
                result[subIndex++] = code
            }
        }
    }
    return result
})(
    [-1,2,26,2,27,2,5,-1,0,77595648,3,44,2,3,0,14,2,57,2,58,3,0,3,0,3168796671,0,4294956992,2,1,2,0,2,59,3,0,4,0,4294966523,3,0,4,2,16,2,60,2,0,0,4294836735,0,3221225471,0,4294901942,2,61,0,134152192,3,0,2,0,4294951935,3,0,2,0,2683305983,0,2684354047,2,18,2,0,0,4294961151,3,0,2,2,19,2,0,0,608174079,2,0,2,54,2,7,2,6,0,4278222591,3,0,2,2,1,3,0,3,0,4294901711,2,40,0,4089839103,0,2961209759,0,1342439375,0,4294543342,0,3547201023,0,1577204103,0,4194240,0,4294688750,2,2,0,80831,0,4261478351,0,4294549486,2,2,0,2967484831,0,196559,0,3594373100,0,3288319768,0,8469959,2,200,2,3,0,4093640191,0,660618719,0,65487,0,4294828015,0,4092591615,0,1616920031,0,982991,2,3,2,0,0,2163244511,0,4227923919,0,4236247022,2,66,0,4284449919,0,851904,2,4,2,12,0,67076095,-1,2,67,0,1073741743,0,4093607775,-1,0,50331649,0,3265266687,2,33,0,4294844415,0,4278190047,2,20,2,133,-1,3,0,2,2,23,2,0,2,10,2,0,2,15,2,22,3,0,10,2,69,2,0,2,70,2,71,2,72,2,0,2,73,2,0,2,11,0,261632,2,25,3,0,2,2,13,2,4,3,0,18,2,74,2,5,3,0,2,2,75,0,2151677951,2,29,2,9,0,909311,3,0,2,0,814743551,2,42,0,67090432,3,0,2,2,41,2,0,2,6,2,0,2,30,2,8,0,268374015,2,107,2,48,2,0,2,76,0,134153215,-1,2,7,2,0,2,8,0,2684354559,0,67044351,0,3221160064,2,17,-1,3,0,2,0,67051519,0,1046528,3,0,3,2,9,2,0,2,50,0,4294960127,2,10,2,39,2,11,0,4294377472,2,12,3,0,16,2,13,2,0,2,79,2,10,2,0,2,80,2,81,2,82,2,206,2,129,0,1048577,2,83,2,14,-1,2,14,0,131042,2,84,2,85,2,86,2,0,2,34,-83,3,0,7,0,1046559,2,0,2,15,2,0,0,2147516671,2,21,3,87,2,2,0,-16,2,88,0,524222462,2,4,2,0,0,4269801471,2,4,3,0,2,2,28,2,16,3,0,2,2,17,2,0,-1,2,18,-16,3,0,206,-2,3,0,692,2,68,-1,2,18,2,10,3,0,8,2,90,2,128,2,0,0,3220242431,3,0,3,2,19,2,91,2,92,3,0,2,2,93,2,0,2,94,2,45,2,0,0,4351,2,0,2,9,3,0,2,0,67043391,0,3909091327,2,0,2,24,2,9,2,20,3,0,2,0,67076097,2,8,2,0,2,21,0,67059711,0,4236247039,3,0,2,0,939524103,0,8191999,2,98,2,99,2,22,2,23,3,0,3,0,67057663,3,0,349,2,100,2,101,2,7,-264,3,0,11,2,24,3,0,2,2,32,-1,0,3774349439,2,102,2,103,3,0,2,2,19,2,104,3,0,10,2,10,2,18,2,0,2,46,2,0,2,31,2,105,2,25,0,1638399,2,170,2,106,3,0,3,2,20,2,26,2,27,2,5,2,28,2,0,2,8,2,108,-1,2,109,2,110,2,111,-1,3,0,3,2,12,-2,2,0,2,29,-3,2,159,-4,2,20,2,0,2,36,0,1,2,0,2,62,2,6,2,12,2,10,2,0,2,112,-1,3,0,4,2,10,2,23,2,113,2,7,2,0,2,114,2,0,2,115,2,116,2,117,-2,3,0,9,2,21,2,30,2,31,2,118,2,119,-2,2,120,2,121,2,30,2,21,2,8,-2,2,122,2,30,2,32,-2,2,0,2,38,-2,0,4277137519,0,2269118463,-1,3,20,2,-1,2,33,2,37,2,0,3,30,2,2,35,2,19,-3,3,0,2,2,34,-1,2,0,2,35,2,0,2,35,2,0,2,47,-10,2,0,0,203775,-1,2,164,2,20,2,43,2,36,2,18,2,77,2,18,2,123,2,21,3,0,2,2,37,0,2151677888,2,0,2,12,0,4294901764,2,140,2,0,2,52,2,51,0,5242879,3,0,2,0,402644511,-1,2,125,2,38,0,3,-1,2,126,2,39,2,0,0,67045375,2,40,0,4226678271,0,3766565279,0,2039759,-4,3,0,2,0,3288270847,0,3,3,0,2,0,67043519,-5,2,0,0,4282384383,0,1056964609,-1,3,0,2,0,67043345,-1,2,0,2,41,2,42,-1,2,11,2,55,2,37,-5,2,0,2,12,-3,3,0,2,0,2147484671,2,130,0,4190109695,2,49,-2,2,131,0,4244635647,0,27,2,0,2,8,2,43,2,0,2,63,2,18,2,0,2,41,-8,2,53,2,44,0,67043329,2,45,2,46,0,8388351,-2,2,132,0,3028287487,2,47,2,134,0,33259519,2,42,-9,2,21,0,4294836223,0,3355443199,0,67043335,-2,2,64,-2,3,0,28,2,32,-3,3,0,3,2,17,3,0,6,2,78,-81,2,18,3,0,2,2,36,3,0,33,2,25,2,30,-125,3,0,18,2,37,-269,3,0,17,2,41,2,8,2,23,2,0,2,8,2,23,2,48,2,0,2,21,2,49,2,135,2,25,-21,3,0,2,-4,3,0,2,0,4294936575,2,0,0,4294934783,-2,0,196635,3,0,191,2,50,3,0,38,2,30,-1,2,34,-278,2,136,3,0,9,2,137,2,138,2,51,3,0,11,2,7,-72,3,0,3,2,139,0,1677656575,-147,2,0,2,24,2,37,-16,0,4161266656,0,4071,2,201,-4,0,28,-13,3,0,2,2,52,2,0,2,141,2,142,2,56,2,0,2,143,2,144,2,145,3,0,10,2,146,2,147,2,22,3,52,2,3,148,2,3,53,2,0,4294954999,2,0,-16,2,0,2,89,2,0,0,2105343,0,4160749584,2,174,-34,2,8,2,150,-6,0,4194303871,0,4294903771,2,0,2,54,2,97,-3,2,0,0,1073684479,0,17407,-9,2,18,2,17,2,0,2,32,-14,2,18,2,32,-23,2,151,3,0,6,0,8323103,-1,3,0,2,2,55,-37,2,56,2,152,2,153,2,154,2,155,2,156,-105,2,26,-32,3,0,1335,-1,3,0,129,2,32,3,0,6,2,10,3,0,180,2,157,3,0,233,2,158,3,0,18,2,10,-77,3,0,16,2,10,-47,3,0,154,2,6,3,0,130,2,25,-22250,3,0,7,2,25,-6130,3,5,2,-1,0,69207040,3,44,2,3,0,14,2,57,2,58,-3,0,3168731136,0,4294956864,2,1,2,0,2,59,3,0,4,0,4294966275,3,0,4,2,16,2,60,2,0,2,34,-1,2,18,2,61,-1,2,0,0,2047,0,4294885376,3,0,2,0,3145727,0,2617294944,0,4294770688,2,25,2,62,3,0,2,0,131135,2,95,0,70256639,0,71303167,0,272,2,41,2,6,0,32511,2,0,2,42,-1,2,96,2,63,0,4278255616,0,4294836227,0,4294549473,0,600178175,0,2952806400,0,268632067,0,4294543328,0,57540095,0,1577058304,0,1835008,0,4294688736,2,65,2,64,0,33554435,2,127,2,65,2,160,0,131075,0,3594373096,0,67094296,2,64,-1,0,4294828000,0,603979263,0,654311424,0,3,0,4294828001,0,602930687,2,167,0,393219,0,4294828016,0,671088639,0,2154840064,0,4227858435,0,4236247008,2,66,2,37,-1,2,4,0,917503,2,37,-1,2,67,0,537788335,0,4026531935,-1,0,1,-1,2,33,2,68,0,7936,-3,2,0,0,2147485695,0,1010761728,0,4292984930,0,16387,2,0,2,15,2,22,3,0,10,2,69,2,0,2,70,2,71,2,72,2,0,2,73,2,0,2,12,-1,2,25,3,0,2,2,13,2,4,3,0,18,2,74,2,5,3,0,2,2,75,0,2147745791,3,19,2,0,122879,2,0,2,9,0,276824064,-2,3,0,2,2,41,2,0,0,4294903295,2,0,2,30,2,8,-1,2,18,2,48,2,0,2,76,2,42,-1,2,21,2,0,2,29,-2,0,128,-2,2,28,2,9,0,8160,-1,2,124,0,4227907585,2,0,2,77,2,0,2,78,2,180,2,10,2,39,2,11,-1,0,74440192,3,0,6,-2,3,0,8,2,13,2,0,2,79,2,10,2,0,2,80,2,81,2,82,-3,2,83,2,14,-3,2,84,2,85,2,86,2,0,2,34,-83,3,0,7,0,817183,2,0,2,15,2,0,0,33023,2,21,3,87,2,-17,2,88,0,524157950,2,4,2,0,2,89,2,4,2,0,2,22,2,28,2,16,3,0,2,2,17,2,0,-1,2,18,-16,3,0,206,-2,3,0,692,2,68,-1,2,18,2,10,3,0,8,2,90,0,3072,2,0,0,2147516415,2,10,3,0,2,2,25,2,91,2,92,3,0,2,2,93,2,0,2,94,2,45,0,4294965179,0,7,2,0,2,9,2,92,2,9,-1,0,1761345536,2,95,0,4294901823,2,37,2,20,2,96,2,35,2,97,0,2080440287,2,0,2,34,2,149,0,3296722943,2,0,0,1046675455,0,939524101,0,1837055,2,98,2,99,2,22,2,23,3,0,3,0,7,3,0,349,2,100,2,101,2,7,-264,3,0,11,2,24,3,0,2,2,32,-1,0,2700607615,2,102,2,103,3,0,2,2,19,2,104,3,0,10,2,10,2,18,2,0,2,46,2,0,2,31,2,105,-3,2,106,3,0,3,2,20,-1,3,5,2,2,107,2,0,2,8,2,108,-1,2,109,2,110,2,111,-1,3,0,3,2,12,-2,2,0,2,29,-8,2,20,2,0,2,36,-1,2,0,2,62,2,6,2,30,2,10,2,0,2,112,-1,3,0,4,2,10,2,18,2,113,2,7,2,0,2,114,2,0,2,115,2,116,2,117,-2,3,0,9,2,21,2,30,2,31,2,118,2,119,-2,2,120,2,121,2,30,2,21,2,8,-2,2,122,2,30,2,32,-2,2,0,2,38,-2,0,4277075969,2,30,-1,3,20,2,-1,2,33,2,123,2,0,3,30,2,2,35,2,19,-3,3,0,2,2,34,-1,2,0,2,35,2,0,2,35,2,0,2,78,-10,2,0,0,197631,-2,2,20,2,43,2,77,2,18,0,3,2,18,2,123,2,21,2,124,2,50,-1,0,2490368,2,124,2,25,2,18,2,34,2,124,2,37,0,4294901904,0,4718591,2,124,2,35,0,335544350,-1,2,125,0,2147487743,0,1,-1,2,126,2,39,2,8,-1,2,127,2,65,0,3758161920,0,3,-4,2,0,2,29,0,2147485568,0,3,2,0,2,25,0,176,-5,2,0,2,17,2,188,-1,2,0,2,25,2,205,-1,2,0,0,16779263,-2,2,12,-1,2,37,-5,2,0,2,128,-3,3,0,2,2,129,2,130,0,2147549183,0,2,-2,2,131,2,36,0,10,0,4294965249,0,67633151,0,4026597376,2,0,0,536871935,2,18,2,0,2,41,-8,2,53,2,17,0,1,2,45,2,25,-3,2,132,2,36,2,133,2,134,0,16778239,-10,2,35,0,4294836212,2,9,-3,2,64,-2,3,0,28,2,32,-3,3,0,3,2,17,3,0,6,2,78,-81,2,18,3,0,2,2,36,3,0,33,2,25,0,126,-125,3,0,18,2,37,-269,3,0,17,2,41,2,8,2,18,2,0,2,8,2,18,2,54,2,0,2,25,2,78,2,135,2,25,-21,3,0,2,-4,3,0,2,0,67583,-1,2,104,-2,0,11,3,0,191,2,50,3,0,38,2,30,-1,2,34,-278,2,136,3,0,9,2,137,2,138,2,51,3,0,11,2,7,-72,3,0,3,2,139,2,140,-187,3,0,2,2,52,2,0,2,141,2,142,2,56,2,0,2,143,2,144,2,145,3,0,10,2,146,2,147,2,22,3,52,2,3,148,2,3,53,2,2,149,-57,2,8,2,150,-7,2,18,2,0,2,54,-4,2,0,0,1065361407,0,16384,-9,2,18,2,54,2,0,2,128,-14,2,18,2,128,-23,2,151,3,0,6,2,123,-1,3,0,2,0,2063,-37,2,56,2,152,2,153,2,154,2,155,2,156,-138,3,0,1335,-1,3,0,129,2,32,3,0,6,2,10,3,0,180,2,157,3,0,233,2,158,3,0,18,2,10,-77,3,0,16,2,10,-47,3,0,154,2,6,3,0,130,2,25,-28386,2,0,0,1,-1,2,129,2,0,0,8193,-21,2,198,0,10255,0,4,-11,2,64,2,179,-1,0,71680,-1,2,171,0,4292900864,0,268435519,-5,2,159,-1,2,169,-1,0,6144,-2,2,45,-1,2,163,-1,0,2147532800,2,160,2,166,0,16744448,-2,0,4,-4,2,194,0,205128192,0,1333757536,0,2147483696,0,423953,0,747766272,0,2717763192,0,4286578751,0,278545,2,161,0,4294886464,0,33292336,0,417809,2,161,0,1327482464,0,4278190128,0,700594195,0,1006647527,0,4286497336,0,4160749631,2,162,0,201327104,0,3634348576,0,8323120,2,162,0,202375680,0,2678047264,0,4293984304,2,162,-1,0,983584,0,48,0,58720273,0,3489923072,0,10517376,0,4293066815,0,1,0,2013265920,2,182,2,0,0,2089,0,3221225552,0,201359520,2,0,-2,0,256,0,122880,0,16777216,2,159,0,4160757760,2,0,-6,2,176,-11,0,3263218176,-1,0,49664,0,2160197632,0,8388802,-1,0,12713984,-1,2,163,2,164,2,183,-2,2,172,-20,0,3758096385,-2,2,165,2,191,2,91,2,177,0,4294057984,-2,2,173,2,168,0,4227874816,-2,2,165,-1,2,166,-1,2,178,2,129,0,4026593280,0,14,0,4292919296,-1,2,175,0,939588608,-1,0,805306368,-1,2,129,2,167,2,168,2,169,2,207,2,0,-2,2,170,2,129,-3,0,267386880,-1,0,117440512,0,7168,-1,2,210,2,163,2,171,2,184,-16,2,172,-1,0,1426112704,2,173,-1,2,192,0,271581216,0,2149777408,2,25,2,171,2,129,0,851967,2,185,-1,2,174,2,186,-4,2,175,-20,2,197,2,204,-56,0,3145728,2,187,-10,0,32505856,-1,2,176,-1,0,2147385088,2,91,1,2155905152,2,-3,2,173,2,0,0,67108864,-2,2,177,-6,2,178,2,25,0,1,-1,0,1,-1,2,179,-3,2,123,2,64,-2,2,97,-2,0,32752,2,129,-915,2,170,-1,2,203,-10,2,190,-5,2,181,-6,0,4229232640,2,19,-1,2,180,-1,2,181,-2,0,4227874752,-3,0,2146435072,2,164,-2,0,1006649344,2,129,-1,2,91,0,201375744,-3,0,134217720,2,91,0,4286677377,0,32896,-1,2,175,-3,0,4227907584,-349,0,65520,0,1920,2,182,3,0,264,-11,2,169,-2,2,183,2,0,0,520617856,0,2692743168,0,36,-3,0,524280,-13,2,189,-1,0,4294934272,2,25,2,183,-1,2,213,0,2158720,-3,2,164,0,1,-4,2,129,0,3808625411,0,3489628288,0,4096,0,1207959680,0,3221274624,2,0,-3,2,184,0,120,0,7340032,-2,2,185,2,4,2,25,2,173,3,0,4,2,164,-1,2,186,2,182,-1,0,8176,2,166,2,184,2,211,-1,0,4290773232,2,0,-4,2,173,2,193,0,15728640,2,182,-1,2,171,-1,0,134250480,0,4720640,0,3825467396,3,0,2,-9,2,91,2,178,0,4294967040,2,133,0,4160880640,3,0,2,0,704,0,1849688064,2,187,-1,2,129,0,4294901887,2,0,0,130547712,0,1879048192,2,208,3,0,2,-1,2,188,2,189,-1,0,17829776,0,2025848832,2,212,-2,2,0,-1,0,4286580608,-1,0,29360128,2,196,0,16252928,0,3791388672,2,39,3,0,2,-2,2,202,2,0,-1,2,104,-1,0,66584576,-1,2,195,3,0,9,2,129,-1,0,4294755328,2,0,2,20,-1,2,171,2,183,2,25,2,95,2,25,2,190,2,91,-2,0,245760,2,191,-1,2,159,2,199,0,4227923456,-1,2,192,2,171,2,91,-3,0,4292870145,0,262144,-1,2,92,2,0,0,1073758848,2,193,-1,0,4227921920,2,194,0,68289024,0,528402016,0,4292927536,3,0,4,-2,0,268435456,2,92,-2,2,195,3,0,5,-1,2,196,2,173,2,0,-2,0,4227923936,2,62,-1,2,183,2,95,2,0,2,163,2,175,2,197,3,0,5,-1,2,182,3,0,3,-2,0,2146959360,0,9440640,0,104857600,0,4227923840,3,0,2,0,768,2,198,2,28,-2,2,171,-2,2,199,-1,2,165,2,95,3,0,7,0,512,0,8388608,2,200,2,170,2,189,0,4286578944,3,0,2,0,1152,0,1266679808,2,195,0,576,0,4261707776,2,95,3,0,9,2,165,0,131072,0,939524096,2,183,3,0,2,2,16,-1,0,2147221504,-28,2,183,3,0,3,-3,0,4292902912,-6,2,96,3,0,81,2,25,-2,2,104,-33,2,18,2,178,3,0,125,-18,2,197,3,0,269,-17,2,165,2,129,2,201,-1,2,129,2,193,0,4290822144,-2,0,67174336,0,520093700,2,18,3,0,21,-2,2,184,3,0,3,-2,0,30720,-1,0,32512,3,0,2,0,4294770656,-191,2,181,-38,2,178,2,0,2,202,3,0,278,0,2417033215,-9,0,4294705144,0,4292411391,0,65295,-11,2,182,3,0,72,-3,0,3758159872,0,201391616,3,0,147,-1,2,169,2,203,-3,2,96,2,0,-7,2,178,-1,0,384,-1,0,133693440,-3,2,204,-2,2,107,3,0,3,3,177,2,-2,2,91,2,165,3,0,4,-2,2,192,-1,2,159,0,335552923,2,205,-1,0,538974272,0,2214592512,0,132000,-10,0,192,-8,2,206,-21,0,134213632,2,158,3,0,34,2,129,0,4294965279,3,0,6,0,100663424,0,63524,-1,2,209,2,148,3,0,3,-1,0,3221282816,0,4294917120,3,0,9,2,25,2,207,-1,2,208,3,0,14,2,25,2,183,3,0,23,0,2147520640,-6,0,4286578784,2,0,-2,0,1006694400,3,0,24,2,36,-1,0,4292870144,3,0,2,0,1,2,173,3,0,6,2,205,0,4110942569,0,1432950139,0,2701658217,0,4026532864,0,4026532881,2,0,2,46,3,0,8,-1,2,175,-2,2,177,0,98304,0,65537,2,178,-5,2,209,2,0,2,77,2,199,2,182,0,4294770176,2,107,3,0,4,-30,2,188,0,3758153728,-3,0,125829120,-2,2,183,0,4294897664,2,175,-1,2,195,-1,2,171,0,4294754304,3,0,2,-10,2,177,0,3758145536,2,210,2,211,0,4026548160,2,212,-4,2,213,-1,2,204,0,4227923967,3,0,32,-1335,2,0,-129,2,183,-6,2,173,-180,0,65532,-233,2,174,-18,2,173,3,0,77,-16,2,173,3,0,47,-154,2,166,-130,2,18,3,0,22250,-7,2,18,3,0,6128],
    [4294967295,4294967291,4092460543,4294828031,4294967294,134217726,4294903807,268435455,2147483647,1048575,1073741823,3892314111,134217727,1061158911,536805376,4294910143,4294901759,32767,4294901760,262143,536870911,8388607,4160749567,4294902783,4294918143,65535,67043328,2281701374,4294967264,2097151,4194303,255,67108863,4294967039,511,524287,131071,127,3238002687,4294902271,4294549487,33554431,1023,4294901888,4286578687,4294705152,4294770687,67043583,2047999,67043343,16777215,4294902000,4292870143,4294966783,16383,67047423,4294967279,262083,20511,4290772991,41943039,493567,4294959104,603979775,65536,602799615,805044223,4294965206,8191,1031749119,4294917631,2134769663,4286578493,4282253311,4294942719,33540095,4294905855,63,15,2868854591,1608515583,265232348,534519807,2147614720,1060109444,4093640016,17376,2139062143,224,4169138175,4294909951,4286578688,4294967292,4294965759,65734655,4294966272,4294967280,32768,8289918,4294934399,4294901775,4294965375,1602223615,4294967259,4294443008,268369920,4292804608,4294967232,486341884,4294963199,3087007615,1073692671,4128527,4279238655,4294902015,4160684047,4290246655,469499899,4294967231,134086655,4294966591,2445279231,3670015,31,4294967288,4294705151,3221208447,4294549472,4095,2147483648,4285526655,4294966527,4294966143,64,4294966719,3774873592,1877934080,262151,2555904,536807423,67043839,3758096383,3959414372,3755993023,2080374783,4294835295,4294967103,4160749565,4294934527,4087,2016,2147446655,184024726,2862017156,1593309078,268434431,268434414,4294901763,4294901761,536870912,2952790016,202506752,139264,402653184,3758096384,4261412864,63488,1610612736,4227922944,49152,57344,65280,3233808384,3221225472,65534,61440,57152,4293918720,4290772992,25165824,4227915776,4278190080,4026531840,4227858432,4160749568,3758129152,4294836224,4194304,251658240,196608,4294963200,2143289344,2097152,64512,417808,4227923712,12582912,4294967168,50331648,65528,65472,15360,4294966784,65408,4294965248,16,12288,4294934528,2080374784,4294950912,65024,1073741824,4261477888,524288]
)
export {isIDContinue,isIDStart,mustEscape};
