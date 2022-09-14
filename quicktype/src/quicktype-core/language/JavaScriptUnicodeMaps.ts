// Taken from https://github.com/Microsoft/TypeScript

function lookupInUnicodeMap(code: number, map: ReadonlyArray<number>): boolean {
    // Bail out quickly if it couldn't possibly be in the map.
    if (code < map[0]) {
        return false;
    }

    // Perform binary search in one of the Unicode range maps
    let lo = 0;
    let hi: number = map.length;
    let mid: number;

    while (lo + 1 < hi) {
        mid = lo + (hi - lo) / 2;
        // mid has to be even to catch a range's beginning
        mid -= mid % 2;
        if (map[mid] <= code && code <= map[mid + 1]) {
            return true;
        }

        if (code < map[mid]) {
            hi = mid;
        } else {
            lo = mid + 2;
        }
    }

    return false;
}

const enum CharacterCodes {
    maxAsciiCharacter = 0x7f,

    _ = 0x5f,
    $ = 0x24,

    _0 = 0x30,
    _9 = 0x39,

    a = 0x61,
    z = 0x7a,

    A = 0x41,
    Z = 0x5a
}

export function isES3IdentifierStart(ch: number): boolean {
    return (
        (ch >= CharacterCodes.A && ch <= CharacterCodes.Z) ||
        (ch >= CharacterCodes.a && ch <= CharacterCodes.z) ||
        ch === CharacterCodes.$ ||
        ch === CharacterCodes._ ||
        (ch > CharacterCodes.maxAsciiCharacter && lookupInUnicodeMap(ch, unicodeES3IdentifierStart))
    );
}

export function isES3IdentifierPart(ch: number): boolean {
    return (
        (ch >= CharacterCodes.A && ch <= CharacterCodes.Z) ||
        (ch >= CharacterCodes.a && ch <= CharacterCodes.z) ||
        (ch >= CharacterCodes._0 && ch <= CharacterCodes._9) ||
        ch === CharacterCodes.$ ||
        ch === CharacterCodes._ ||
        (ch > CharacterCodes.maxAsciiCharacter && lookupInUnicodeMap(ch, unicodeES3IdentifierPart))
    );
}

/*
    As per ECMAScript Language Specification 3th Edition, Section 7.6: Identifiers
    IdentifierStart ::
        Can contain Unicode 3.0.0 categories:
        Uppercase letter (Lu),
        Lowercase letter (Ll),
        Titlecase letter (Lt),
        Modifier letter (Lm),
        Other letter (Lo), or
        Letter number (Nl).
    IdentifierPart :: =
        Can contain IdentifierStart + Unicode 3.0.0 categories:
        Non-spacing mark (Mn),
        Combining spacing mark (Mc),
        Decimal number (Nd), or
        Connector punctuation (Pc).
    Codepoint ranges for ES3 Identifiers are extracted from the Unicode 3.0.0 specification at:
    http://www.unicode.org/Public/3.0-Update/UnicodeData-3.0.0.txt
*/
const unicodeES3IdentifierStart = [
    170,
    170,
    181,
    181,
    186,
    186,
    192,
    214,
    216,
    246,
    248,
    543,
    546,
    563,
    592,
    685,
    688,
    696,
    699,
    705,
    720,
    721,
    736,
    740,
    750,
    750,
    890,
    890,
    902,
    902,
    904,
    906,
    908,
    908,
    910,
    929,
    931,
    974,
    976,
    983,
    986,
    1011,
    1024,
    1153,
    1164,
    1220,
    1223,
    1224,
    1227,
    1228,
    1232,
    1269,
    1272,
    1273,
    1329,
    1366,
    1369,
    1369,
    1377,
    1415,
    1488,
    1514,
    1520,
    1522,
    1569,
    1594,
    1600,
    1610,
    1649,
    1747,
    1749,
    1749,
    1765,
    1766,
    1786,
    1788,
    1808,
    1808,
    1810,
    1836,
    1920,
    1957,
    2309,
    2361,
    2365,
    2365,
    2384,
    2384,
    2392,
    2401,
    2437,
    2444,
    2447,
    2448,
    2451,
    2472,
    2474,
    2480,
    2482,
    2482,
    2486,
    2489,
    2524,
    2525,
    2527,
    2529,
    2544,
    2545,
    2565,
    2570,
    2575,
    2576,
    2579,
    2600,
    2602,
    2608,
    2610,
    2611,
    2613,
    2614,
    2616,
    2617,
    2649,
    2652,
    2654,
    2654,
    2674,
    2676,
    2693,
    2699,
    2701,
    2701,
    2703,
    2705,
    2707,
    2728,
    2730,
    2736,
    2738,
    2739,
    2741,
    2745,
    2749,
    2749,
    2768,
    2768,
    2784,
    2784,
    2821,
    2828,
    2831,
    2832,
    2835,
    2856,
    2858,
    2864,
    2866,
    2867,
    2870,
    2873,
    2877,
    2877,
    2908,
    2909,
    2911,
    2913,
    2949,
    2954,
    2958,
    2960,
    2962,
    2965,
    2969,
    2970,
    2972,
    2972,
    2974,
    2975,
    2979,
    2980,
    2984,
    2986,
    2990,
    2997,
    2999,
    3001,
    3077,
    3084,
    3086,
    3088,
    3090,
    3112,
    3114,
    3123,
    3125,
    3129,
    3168,
    3169,
    3205,
    3212,
    3214,
    3216,
    3218,
    3240,
    3242,
    3251,
    3253,
    3257,
    3294,
    3294,
    3296,
    3297,
    3333,
    3340,
    3342,
    3344,
    3346,
    3368,
    3370,
    3385,
    3424,
    3425,
    3461,
    3478,
    3482,
    3505,
    3507,
    3515,
    3517,
    3517,
    3520,
    3526,
    3585,
    3632,
    3634,
    3635,
    3648,
    3654,
    3713,
    3714,
    3716,
    3716,
    3719,
    3720,
    3722,
    3722,
    3725,
    3725,
    3732,
    3735,
    3737,
    3743,
    3745,
    3747,
    3749,
    3749,
    3751,
    3751,
    3754,
    3755,
    3757,
    3760,
    3762,
    3763,
    3773,
    3773,
    3776,
    3780,
    3782,
    3782,
    3804,
    3805,
    3840,
    3840,
    3904,
    3911,
    3913,
    3946,
    3976,
    3979,
    4096,
    4129,
    4131,
    4135,
    4137,
    4138,
    4176,
    4181,
    4256,
    4293,
    4304,
    4342,
    4352,
    4441,
    4447,
    4514,
    4520,
    4601,
    4608,
    4614,
    4616,
    4678,
    4680,
    4680,
    4682,
    4685,
    4688,
    4694,
    4696,
    4696,
    4698,
    4701,
    4704,
    4742,
    4744,
    4744,
    4746,
    4749,
    4752,
    4782,
    4784,
    4784,
    4786,
    4789,
    4792,
    4798,
    4800,
    4800,
    4802,
    4805,
    4808,
    4814,
    4816,
    4822,
    4824,
    4846,
    4848,
    4878,
    4880,
    4880,
    4882,
    4885,
    4888,
    4894,
    4896,
    4934,
    4936,
    4954,
    5024,
    5108,
    5121,
    5740,
    5743,
    5750,
    5761,
    5786,
    5792,
    5866,
    6016,
    6067,
    6176,
    6263,
    6272,
    6312,
    7680,
    7835,
    7840,
    7929,
    7936,
    7957,
    7960,
    7965,
    7968,
    8005,
    8008,
    8013,
    8016,
    8023,
    8025,
    8025,
    8027,
    8027,
    8029,
    8029,
    8031,
    8061,
    8064,
    8116,
    8118,
    8124,
    8126,
    8126,
    8130,
    8132,
    8134,
    8140,
    8144,
    8147,
    8150,
    8155,
    8160,
    8172,
    8178,
    8180,
    8182,
    8188,
    8319,
    8319,
    8450,
    8450,
    8455,
    8455,
    8458,
    8467,
    8469,
    8469,
    8473,
    8477,
    8484,
    8484,
    8486,
    8486,
    8488,
    8488,
    8490,
    8493,
    8495,
    8497,
    8499,
    8505,
    8544,
    8579,
    12293,
    12295,
    12321,
    12329,
    12337,
    12341,
    12344,
    12346,
    12353,
    12436,
    12445,
    12446,
    12449,
    12538,
    12540,
    12542,
    12549,
    12588,
    12593,
    12686,
    12704,
    12727,
    13312,
    19893,
    19968,
    40869,
    40960,
    42124,
    44032,
    55203,
    63744,
    64045,
    64256,
    64262,
    64275,
    64279,
    64285,
    64285,
    64287,
    64296,
    64298,
    64310,
    64312,
    64316,
    64318,
    64318,
    64320,
    64321,
    64323,
    64324,
    64326,
    64433,
    64467,
    64829,
    64848,
    64911,
    64914,
    64967,
    65008,
    65019,
    65136,
    65138,
    65140,
    65140,
    65142,
    65276,
    65313,
    65338,
    65345,
    65370,
    65382,
    65470,
    65474,
    65479,
    65482,
    65487,
    65490,
    65495,
    65498,
    65500
];
const unicodeES3IdentifierPart = [
    170,
    170,
    181,
    181,
    186,
    186,
    192,
    214,
    216,
    246,
    248,
    543,
    546,
    563,
    592,
    685,
    688,
    696,
    699,
    705,
    720,
    721,
    736,
    740,
    750,
    750,
    768,
    846,
    864,
    866,
    890,
    890,
    902,
    902,
    904,
    906,
    908,
    908,
    910,
    929,
    931,
    974,
    976,
    983,
    986,
    1011,
    1024,
    1153,
    1155,
    1158,
    1164,
    1220,
    1223,
    1224,
    1227,
    1228,
    1232,
    1269,
    1272,
    1273,
    1329,
    1366,
    1369,
    1369,
    1377,
    1415,
    1425,
    1441,
    1443,
    1465,
    1467,
    1469,
    1471,
    1471,
    1473,
    1474,
    1476,
    1476,
    1488,
    1514,
    1520,
    1522,
    1569,
    1594,
    1600,
    1621,
    1632,
    1641,
    1648,
    1747,
    1749,
    1756,
    1759,
    1768,
    1770,
    1773,
    1776,
    1788,
    1808,
    1836,
    1840,
    1866,
    1920,
    1968,
    2305,
    2307,
    2309,
    2361,
    2364,
    2381,
    2384,
    2388,
    2392,
    2403,
    2406,
    2415,
    2433,
    2435,
    2437,
    2444,
    2447,
    2448,
    2451,
    2472,
    2474,
    2480,
    2482,
    2482,
    2486,
    2489,
    2492,
    2492,
    2494,
    2500,
    2503,
    2504,
    2507,
    2509,
    2519,
    2519,
    2524,
    2525,
    2527,
    2531,
    2534,
    2545,
    2562,
    2562,
    2565,
    2570,
    2575,
    2576,
    2579,
    2600,
    2602,
    2608,
    2610,
    2611,
    2613,
    2614,
    2616,
    2617,
    2620,
    2620,
    2622,
    2626,
    2631,
    2632,
    2635,
    2637,
    2649,
    2652,
    2654,
    2654,
    2662,
    2676,
    2689,
    2691,
    2693,
    2699,
    2701,
    2701,
    2703,
    2705,
    2707,
    2728,
    2730,
    2736,
    2738,
    2739,
    2741,
    2745,
    2748,
    2757,
    2759,
    2761,
    2763,
    2765,
    2768,
    2768,
    2784,
    2784,
    2790,
    2799,
    2817,
    2819,
    2821,
    2828,
    2831,
    2832,
    2835,
    2856,
    2858,
    2864,
    2866,
    2867,
    2870,
    2873,
    2876,
    2883,
    2887,
    2888,
    2891,
    2893,
    2902,
    2903,
    2908,
    2909,
    2911,
    2913,
    2918,
    2927,
    2946,
    2947,
    2949,
    2954,
    2958,
    2960,
    2962,
    2965,
    2969,
    2970,
    2972,
    2972,
    2974,
    2975,
    2979,
    2980,
    2984,
    2986,
    2990,
    2997,
    2999,
    3001,
    3006,
    3010,
    3014,
    3016,
    3018,
    3021,
    3031,
    3031,
    3047,
    3055,
    3073,
    3075,
    3077,
    3084,
    3086,
    3088,
    3090,
    3112,
    3114,
    3123,
    3125,
    3129,
    3134,
    3140,
    3142,
    3144,
    3146,
    3149,
    3157,
    3158,
    3168,
    3169,
    3174,
    3183,
    3202,
    3203,
    3205,
    3212,
    3214,
    3216,
    3218,
    3240,
    3242,
    3251,
    3253,
    3257,
    3262,
    3268,
    3270,
    3272,
    3274,
    3277,
    3285,
    3286,
    3294,
    3294,
    3296,
    3297,
    3302,
    3311,
    3330,
    3331,
    3333,
    3340,
    3342,
    3344,
    3346,
    3368,
    3370,
    3385,
    3390,
    3395,
    3398,
    3400,
    3402,
    3405,
    3415,
    3415,
    3424,
    3425,
    3430,
    3439,
    3458,
    3459,
    3461,
    3478,
    3482,
    3505,
    3507,
    3515,
    3517,
    3517,
    3520,
    3526,
    3530,
    3530,
    3535,
    3540,
    3542,
    3542,
    3544,
    3551,
    3570,
    3571,
    3585,
    3642,
    3648,
    3662,
    3664,
    3673,
    3713,
    3714,
    3716,
    3716,
    3719,
    3720,
    3722,
    3722,
    3725,
    3725,
    3732,
    3735,
    3737,
    3743,
    3745,
    3747,
    3749,
    3749,
    3751,
    3751,
    3754,
    3755,
    3757,
    3769,
    3771,
    3773,
    3776,
    3780,
    3782,
    3782,
    3784,
    3789,
    3792,
    3801,
    3804,
    3805,
    3840,
    3840,
    3864,
    3865,
    3872,
    3881,
    3893,
    3893,
    3895,
    3895,
    3897,
    3897,
    3902,
    3911,
    3913,
    3946,
    3953,
    3972,
    3974,
    3979,
    3984,
    3991,
    3993,
    4028,
    4038,
    4038,
    4096,
    4129,
    4131,
    4135,
    4137,
    4138,
    4140,
    4146,
    4150,
    4153,
    4160,
    4169,
    4176,
    4185,
    4256,
    4293,
    4304,
    4342,
    4352,
    4441,
    4447,
    4514,
    4520,
    4601,
    4608,
    4614,
    4616,
    4678,
    4680,
    4680,
    4682,
    4685,
    4688,
    4694,
    4696,
    4696,
    4698,
    4701,
    4704,
    4742,
    4744,
    4744,
    4746,
    4749,
    4752,
    4782,
    4784,
    4784,
    4786,
    4789,
    4792,
    4798,
    4800,
    4800,
    4802,
    4805,
    4808,
    4814,
    4816,
    4822,
    4824,
    4846,
    4848,
    4878,
    4880,
    4880,
    4882,
    4885,
    4888,
    4894,
    4896,
    4934,
    4936,
    4954,
    4969,
    4977,
    5024,
    5108,
    5121,
    5740,
    5743,
    5750,
    5761,
    5786,
    5792,
    5866,
    6016,
    6099,
    6112,
    6121,
    6160,
    6169,
    6176,
    6263,
    6272,
    6313,
    7680,
    7835,
    7840,
    7929,
    7936,
    7957,
    7960,
    7965,
    7968,
    8005,
    8008,
    8013,
    8016,
    8023,
    8025,
    8025,
    8027,
    8027,
    8029,
    8029,
    8031,
    8061,
    8064,
    8116,
    8118,
    8124,
    8126,
    8126,
    8130,
    8132,
    8134,
    8140,
    8144,
    8147,
    8150,
    8155,
    8160,
    8172,
    8178,
    8180,
    8182,
    8188,
    8255,
    8256,
    8319,
    8319,
    8400,
    8412,
    8417,
    8417,
    8450,
    8450,
    8455,
    8455,
    8458,
    8467,
    8469,
    8469,
    8473,
    8477,
    8484,
    8484,
    8486,
    8486,
    8488,
    8488,
    8490,
    8493,
    8495,
    8497,
    8499,
    8505,
    8544,
    8579,
    12293,
    12295,
    12321,
    12335,
    12337,
    12341,
    12344,
    12346,
    12353,
    12436,
    12441,
    12442,
    12445,
    12446,
    12449,
    12542,
    12549,
    12588,
    12593,
    12686,
    12704,
    12727,
    13312,
    19893,
    19968,
    40869,
    40960,
    42124,
    44032,
    55203,
    63744,
    64045,
    64256,
    64262,
    64275,
    64279,
    64285,
    64296,
    64298,
    64310,
    64312,
    64316,
    64318,
    64318,
    64320,
    64321,
    64323,
    64324,
    64326,
    64433,
    64467,
    64829,
    64848,
    64911,
    64914,
    64967,
    65008,
    65019,
    65056,
    65059,
    65075,
    65076,
    65101,
    65103,
    65136,
    65138,
    65140,
    65140,
    65142,
    65276,
    65296,
    65305,
    65313,
    65338,
    65343,
    65343,
    65345,
    65370,
    65381,
    65470,
    65474,
    65479,
    65482,
    65487,
    65490,
    65495,
    65498,
    65500
];
