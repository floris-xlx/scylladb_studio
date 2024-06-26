import React from "react";


const Xylex = ({ size }) => {
    let height, width;
    if (size === "small") {
        height = "20px";
        width = "105px";
    } else if (size === "medium") {
        height = "30px";
        width = "157.5px";
    } else if (size === "lg") {
        height = "50px";
        width = "262.5px";

    } else if (size === "large") {
        height = "60px";
        width = "315px";
        {

        }
    } else if (size === "xl") {
        height = "80px";
        width = "420px";
    } else {
        height = "40px";
        width = "210px";
    }
    return (
        <div>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} viewBox="0 0 3113.000000 415.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,415.000000) scale(0.100000,-0.100000)"
                    fill="var(--color-text-primary)" stroke="none" className="text-primary h-6 w-auto">
                    <path d="M22140 4129 c-85 -34 -221 -190 -299 -341 -83 -163 -145 -268 -187
                    -320 -23 -28 -45 -63 -48 -79 -8 -40 -44 -118 -71 -154 -13 -16 -39 -60 -58
                    -97 -20 -37 -54 -91 -76 -120 -42 -56 -71 -115 -71 -144 0 -10 -17 -40 -38
                    -68 -36 -48 -122 -191 -122 -203 0 -3 -16 -28 -36 -55 -20 -28 -53 -87 -73
                    -132 -21 -44 -50 -95 -64 -112 -51 -60 -67 -116 -67 -229 0 -115 9 -144 68
                    -227 18 -26 49 -78 69 -115 20 -38 43 -79 53 -93 9 -14 40 -73 69 -133 28 -59
                    66 -124 85 -145 18 -20 47 -64 64 -97 16 -33 53 -100 82 -150 29 -49 58 -107
                    66 -128 7 -21 24 -52 36 -70 41 -55 146 -229 213 -352 36 -66 84 -152 108
                    -191 23 -39 68 -113 99 -166 60 -99 103 -139 169 -158 19 -6 142 -10 275 -10
                    275 0 319 8 386 68 39 35 40 38 36 90 -3 34 -12 62 -27 80 -12 15 -28 42 -36
                    60 -9 18 -32 60 -53 95 -39 63 -82 150 -82 165 0 4 -14 24 -31 45 -17 20 -55
                    86 -84 146 -30 59 -66 123 -81 140 -15 18 -40 60 -56 94 -31 66 -95 174 -189
                    323 -32 49 -70 117 -84 150 -15 32 -37 73 -50 89 -12 17 -42 73 -68 125 -25
                    52 -65 121 -89 153 -49 64 -88 169 -88 235 0 48 25 98 108 213 19 25 53 88 76
                    140 23 52 58 119 78 149 86 135 112 182 163 288 30 62 95 173 143 246 49 73
                    109 177 134 232 42 95 79 155 185 308 73 104 91 136 113 200 40 119 20 204
                    -56 242 -35 17 -65 19 -304 21 -161 1 -275 -2 -290 -8z"/>
                    <path d="M18228 4088 c-22 -6 -50 -24 -68 -44 -25 -29 -30 -43 -30 -89 0 -49
                    5 -61 54 -132 29 -44 63 -100 75 -126 48 -107 64 -138 136 -252 41 -66 80
                    -131 85 -145 6 -13 26 -49 44 -80 18 -30 55 -95 81 -145 26 -49 66 -114 88
                    -144 22 -30 54 -82 70 -115 16 -34 44 -83 62 -111 18 -27 48 -83 68 -123 20
                    -40 57 -102 81 -137 25 -36 54 -91 66 -122 11 -30 43 -97 70 -148 28 -50 50
                    -103 50 -116 0 -24 -80 -169 -166 -302 -24 -37 -62 -105 -83 -151 -22 -47 -55
                    -109 -74 -138 -19 -29 -53 -87 -75 -128 -21 -41 -53 -96 -71 -122 -17 -25 -39
                    -64 -47 -85 -9 -21 -35 -65 -59 -98 -23 -33 -57 -89 -75 -125 -18 -36 -48 -88
                    -67 -117 -18 -28 -33 -54 -33 -57 0 -13 -46 -104 -77 -154 -41 -64 -93 -163
                    -93 -177 0 -5 -20 -41 -45 -79 -55 -86 -67 -144 -39 -196 35 -66 57 -70 347
                    -70 288 0 331 6 393 56 54 44 148 190 284 444 46 85 101 179 122 208 22 30 60
                    94 85 144 24 50 57 107 73 127 33 42 50 71 138 241 78 151 162 300 219 386 23
                    35 74 124 113 199 86 164 95 210 60 307 -24 66 -71 152 -127 230 -18 25 -55
                    93 -82 150 -53 113 -108 207 -180 308 -25 36 -58 92 -72 125 -24 56 -125 236
                    -216 385 -22 36 -52 92 -67 125 -15 32 -37 73 -50 90 -12 16 -42 66 -65 110
                    -24 44 -49 87 -56 95 -8 8 -32 51 -55 95 -49 93 -101 160 -138 179 -15 7 -65
                    19 -111 25 -102 13 -491 13 -543 -1z"/>
                    <path d="M15020 4081 c-993 -5 -1260 -9 -1277 -19 -56 -32 -53 95 -53 -1998
                    l0 -1927 32 -29 32 -28 430 -2 c237 -2 717 -3 1066 -3 498 0 664 -3 770 -15
                    86 -10 231 -15 400 -15 263 0 265 0 298 24 43 30 127 144 178 241 22 41 67
                    122 100 180 51 91 59 111 58 156 0 61 -22 100 -67 119 -26 10 -280 13 -1280
                    14 -1084 1 -1252 4 -1271 16 -44 29 -47 64 -44 490 l3 400 595 1 c734 0 1145
                    11 1180 29 15 8 44 33 66 57 39 42 65 83 169 268 26 47 61 108 76 135 32 56
                    37 107 15 159 -30 71 52 66 -1084 66 l-1023 0 3 438 c3 493 3 489 75 513 29 9
                    213 10 818 5 429 -3 924 -9 1100 -12 l321 -7 30 29 c54 51 105 121 153 211 26
                    48 74 135 107 193 51 91 59 111 59 155 -1 66 -29 106 -92 133 -44 18 -74 20
                    -368 24 -176 2 -885 2 -1575 -1z"/>
                    <path d="M5722 4047 c-28 -29 -32 -39 -32 -89 0 -52 4 -63 53 -135 53 -76 63
                    -96 106 -197 12 -28 32 -64 45 -80 13 -17 38 -60 56 -96 18 -36 42 -78 54 -95
                    13 -16 47 -75 76 -130 29 -55 65 -118 80 -140 21 -32 91 -146 150 -245 26 -43
                    93 -166 135 -245 26 -49 69 -120 96 -156 26 -36 58 -87 69 -115 12 -27 36 -71
                    54 -99 18 -27 50 -83 70 -124 21 -41 55 -100 77 -131 21 -31 54 -92 72 -136
                    18 -43 50 -108 71 -144 51 -86 60 -162 26 -223 -13 -23 -29 -49 -35 -57 -7 -8
                    -34 -55 -60 -105 -26 -49 -53 -97 -60 -105 -7 -8 -28 -44 -46 -80 -17 -36 -51
                    -92 -74 -125 -23 -33 -57 -89 -76 -125 -18 -36 -48 -88 -66 -117 -18 -29 -33
                    -54 -33 -57 0 -16 -56 -125 -85 -165 -32 -45 -85 -150 -85 -169 0 -6 -16 -34
                    -36 -63 -48 -71 -64 -110 -64 -156 1 -42 9 -55 58 -96 l34 -27 264 0 c295 0
                    338 6 400 56 55 44 152 196 293 459 51 93 103 181 116 195 13 14 47 72 76 130
                    28 58 64 121 79 140 30 39 133 220 155 274 17 40 144 260 208 361 25 39 65
                    108 90 155 77 146 167 288 332 525 92 133 141 207 253 385 23 36 62 110 87
                    164 25 55 60 120 77 145 115 170 150 227 187 311 23 52 54 113 70 135 64 90
                    152 246 191 338 26 63 27 151 1 193 -39 63 -66 69 -362 71 -259 3 -267 2 -308
                    -20 -55 -30 -184 -177 -220 -252 -45 -92 -163 -294 -203 -347 -20 -26 -46 -76
                    -58 -113 -12 -36 -37 -87 -56 -115 -18 -27 -49 -78 -68 -114 -19 -36 -53 -89
                    -75 -118 -39 -53 -80 -131 -81 -156 0 -15 -219 -399 -262 -458 -37 -51 -51
                    -54 -75 -16 -10 15 -32 46 -50 70 -18 24 -33 48 -33 54 0 27 -94 200 -227 418
                    -22 36 -52 91 -66 123 -15 32 -36 71 -47 87 -11 16 -37 62 -57 102 -19 40 -48
                    92 -64 114 -16 23 -50 82 -75 130 -26 49 -58 104 -73 123 -30 38 -33 43 -85
                    136 -22 39 -54 91 -72 116 -17 25 -35 56 -39 70 -13 38 -54 100 -98 147 l-41
                    42 -341 0 -341 0 -32 -33z"/>
                    <path d="M10323 4065 c-66 -29 -61 136 -66 -2003 l-4 -1943 21 -15 c17 -12
                    182 -14 1148 -14 l1128 0 39 50 c22 28 59 85 82 128 23 42 74 131 113 197 63
                    108 70 125 70 175 1 66 -27 113 -77 129 -54 18 -165 21 -974 29 l-782 7 -23
                    23 -23 23 -5 1532 c-5 1348 -8 1540 -22 1596 -25 104 -15 101 -327 101 -203
                    -1 -273 -4 -298 -15z"/>
                    <path d="M26624 4061 c-59 -36 -238 -302 -314 -466 -20 -44 -72 -132 -114
                    -195 -43 -63 -102 -164 -131 -225 -30 -60 -75 -141 -100 -179 -25 -38 -45 -74
                    -45 -81 0 -6 -25 -50 -55 -96 -30 -46 -55 -87 -55 -91 0 -4 -11 -32 -25 -62
                    -14 -30 -25 -58 -25 -63 0 -7 -50 -83 -147 -223 -14 -19 -51 -90 -83 -157 -32
                    -66 -104 -189 -159 -272 -54 -83 -111 -183 -126 -222 -15 -38 -43 -92 -62
                    -120 -51 -75 -87 -137 -173 -299 -84 -159 -143 -258 -201 -336 -20 -28 -56
                    -89 -79 -135 -37 -77 -81 -153 -173 -299 -59 -94 -157 -293 -163 -331 -8 -46
                    16 -93 59 -116 29 -16 64 -18 333 -18 l301 0 35 27 c22 17 53 61 88 127 29 55
                    63 113 76 128 13 15 44 68 70 118 25 49 63 124 85 166 21 42 57 98 80 125 22
                    27 57 85 78 129 48 101 190 368 200 375 5 3 32 50 61 105 29 55 65 116 80 135
                    15 19 40 60 55 90 15 30 43 76 61 102 19 25 49 77 67 115 48 102 146 281 187
                    343 20 30 58 98 84 151 54 112 111 203 216 349 21 30 42 67 45 82 4 15 25 55
                    47 90 22 34 56 95 75 134 35 76 69 116 116 141 25 12 31 12 50 0 23 -15 137
                    -210 180 -307 13 -30 62 -116 109 -190 47 -75 104 -176 127 -225 42 -89 74
                    -144 177 -300 28 -44 73 -129 100 -189 26 -59 63 -129 83 -155 60 -76 117
                    -170 162 -266 23 -49 57 -110 74 -135 18 -25 43 -65 55 -90 13 -25 41 -72 63
                    -105 22 -32 55 -96 73 -141 18 -48 54 -110 84 -150 29 -37 55 -75 58 -84 3 -8
                    31 -58 62 -110 30 -52 70 -126 89 -165 18 -38 44 -84 57 -102 13 -17 40 -65
                    60 -107 44 -90 100 -158 158 -189 40 -21 51 -22 333 -22 280 0 293 1 320 21
                    68 50 68 127 -1 227 -24 34 -62 101 -85 147 -24 47 -53 99 -66 116 -13 16 -42
                    66 -64 109 -23 44 -53 94 -67 112 -14 18 -43 72 -65 120 -22 48 -73 137 -113
                    198 -73 110 -105 166 -146 260 -13 27 -34 67 -49 88 -61 91 -154 249 -206 350
                    -30 59 -89 159 -129 221 -68 104 -121 205 -156 296 -8 19 -55 98 -105 175 -50
                    77 -108 176 -130 220 -21 44 -81 144 -132 221 -51 78 -100 159 -109 180 -44
                    111 -65 149 -199 359 -53 83 -85 141 -85 154 0 51 -134 263 -216 343 -89 86
                    -99 88 -363 88 -204 0 -229 -2 -257 -19z"/>
                    <path d="M55 4046 l-40 -13 -3 -108 -3 -108 36 -58 c19 -31 35 -59 35 -62 0
                    -12 82 -177 98 -198 10 -13 42 -64 71 -114 29 -49 56 -97 61 -105 18 -30 115
                    -207 150 -273 20 -37 57 -96 83 -132 26 -35 56 -85 68 -112 11 -26 35 -70 53
                    -98 18 -27 50 -83 70 -123 20 -40 53 -99 74 -130 50 -74 192 -366 192 -395 0
                    -22 -82 -171 -166 -300 -24 -37 -62 -105 -83 -151 -22 -47 -55 -109 -74 -138
                    -20 -29 -50 -82 -67 -118 -18 -36 -43 -80 -56 -97 -14 -18 -43 -67 -66 -110
                    -22 -43 -55 -98 -73 -123 -34 -47 -99 -165 -171 -310 -23 -47 -62 -116 -87
                    -153 -25 -38 -55 -92 -66 -120 -11 -29 -33 -77 -50 -107 -27 -49 -31 -64 -31
                    -135 1 -87 10 -108 54 -125 16 -6 131 -10 285 -10 281 0 323 6 387 55 50 38
                    151 196 284 445 46 85 101 180 124 210 22 30 58 91 79 135 22 44 54 100 72
                    125 35 49 80 129 161 287 29 56 69 127 88 157 19 30 45 74 57 98 12 24 45 79
                    74 123 29 44 80 136 114 205 49 99 61 134 61 172 0 76 -55 202 -145 328 -36
                    51 -57 89 -114 210 -22 47 -74 137 -116 200 -43 63 -90 142 -105 176 -33 72
                    -151 282 -191 340 -16 23 -49 84 -75 135 -25 52 -56 108 -69 124 -13 17 -42
                    67 -65 110 -23 44 -55 98 -70 120 -15 22 -40 66 -56 98 -34 71 -93 140 -131
                    155 -57 22 -190 32 -401 31 -141 -1 -231 -5 -257 -13z"/>
                    <path d="M3933 4045 c-58 -25 -213 -201 -243 -276 -22 -54 -145 -268 -194
                    -338 -26 -36 -46 -72 -46 -81 0 -19 -53 -125 -74 -149 -7 -9 -32 -51 -55 -94
                    -22 -43 -56 -97 -75 -121 -34 -41 -67 -105 -79 -157 -4 -14 -21 -45 -40 -70
                    -32 -42 -117 -185 -117 -196 0 -3 -16 -28 -35 -54 -35 -49 -85 -144 -85 -162
                    0 -5 -19 -37 -43 -71 -69 -100 -77 -123 -77 -242 0 -114 6 -134 75 -239 56
                    -86 140 -236 183 -326 23 -47 59 -109 81 -136 22 -28 53 -78 70 -111 17 -33
                    55 -102 84 -154 30 -51 59 -108 65 -127 7 -19 24 -50 40 -70 34 -45 124 -195
                    197 -331 56 -103 91 -164 165 -285 20 -33 52 -86 71 -118 19 -32 49 -70 66
                    -83 65 -49 96 -54 367 -54 236 1 254 2 305 23 33 13 65 36 82 57 26 33 27 38
                    18 90 -6 30 -21 72 -35 92 -13 21 -24 40 -24 44 0 4 -19 39 -43 78 -45 74 -87
                    159 -87 175 0 5 -16 29 -36 53 -20 23 -58 88 -84 143 -25 55 -61 117 -78 136
                    -18 20 -32 41 -32 45 0 22 -136 261 -198 348 -19 27 -59 97 -89 155 -30 58
                    -61 113 -67 121 -7 8 -32 56 -55 105 -24 50 -57 108 -75 130 -48 60 -61 84
                    -84 154 -40 119 -24 179 84 316 18 22 41 60 52 85 11 25 31 70 45 100 13 30
                    57 107 96 170 40 63 97 167 128 230 31 63 95 174 142 245 48 72 106 173 130
                    225 23 52 66 130 96 175 64 96 132 220 163 294 44 107 22 213 -53 251 -43 22
                    -554 26 -602 5z"/>
                    <path d="M30988 4049 c-45 -12 -316 -197 -405 -277 -106 -94 -130 -139 -154
                    -281 -14 -86 -13 -3280 1 -3333 14 -50 38 -100 54 -110 6 -4 124 -8 262 -8
                    286 0 326 7 359 63 20 31 20 68 23 1917 2 1037 0 1909 -3 1938 -5 40 -12 56
                    -30 68 -34 22 -77 32 -107 23z"/>
                    <path d="M23442 660 c-52 -24 -64 -35 -91 -88 -19 -37 -21 -58 -21 -214 0
                    -169 1 -174 28 -223 23 -42 35 -53 82 -72 49 -20 73 -22 210 -22 137 0 161 2
                    210 22 47 19 59 30 82 72 27 49 28 54 28 217 0 154 -2 172 -23 220 -27 61 -35
                    68 -97 91 -71 26 -349 24 -408 -3z"/>
                </g>
            </svg>

        </div>
    );
}

export default Xylex;