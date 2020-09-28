/* eslint-disable */

export enum EAbnormalState
{
  eSLEEP = 1,
  ePOISON = 2,
  eBURN = 3,
  eFROZEN = 4,
  ePARALYSIS = 5,
  eDARKNESS = 6,
  eSILENCE = 7,
  eCURSE = 8,
  eSLOW = 9,
  eSTONE = 10,
  eSTUN = 11,
  eCHARM = 12,
  eALL = 999,
  eSPD_1UP = 2001,
  eSPD_2UP = 2002,
  eSPD_3UP = 2003,
  eSPD_4UP = 2004,
  eSPD_5UP = 2005,
  eSPD_6UP = 2006,
  eSPD_7UP = 2007,
  eSPD_8UP = 2008,
  eSPD_9UP = 2009,
  eSPD_10UP = 2010,
  eSATK_1UP = 2011,
  eSATK_2UP = 2012,
  eSATK_3UP = 2013,
  eSATK_4UP = 2014,
  eSATK_5UP = 2015,
  eSATK_6UP = 2016,
  eSATK_7UP = 2017,
  eSATK_8UP = 2018,
  eSATK_9UP = 2019,
  eSATK_10UP = 2020,
  eMATK_1UP = 2021,
  eMATK_2UP = 2022,
  eMATK_3UP = 2023,
  eMATK_4UP = 2024,
  eMATK_5UP = 2025,
  eMATK_6UP = 2026,
  eMATK_7UP = 2027,
  eMATK_8UP = 2028,
  eMATK_9UP = 2029,
  eMATK_10UP = 2030,
  eSDEF_1UP = 2031,
  eSDEF_2UP = 2032,
  eSDEF_3UP = 2033,
  eSDEF_4UP = 2034,
  eSDEF_5UP = 2035,
  eSDEF_6UP = 2036,
  eSDEF_7UP = 2037,
  eSDEF_8UP = 2038,
  eSDEF_9UP = 2039,
  eSDEF_10UP = 2040,
  eMDEF_1UP = 2041,
  eMDEF_2UP = 2042,
  eMDEF_3UP = 2043,
  eMDEF_4UP = 2044,
  eMDEF_5UP = 2045,
  eMDEF_6UP = 2046,
  eMDEF_7UP = 0x7FF,
  eMDEF_8UP = 0x800,
  eMDEF_9UP = 2049,
  eMDEF_10UP = 2050,
  eSDA_1UP = 2051,
  eSDA_2UP = 2052,
  eSDA_3UP = 2053,
  eSDA_4UP = 2054,
  eSDA_5UP = 2055,
  eSDA_6UP = 2056,
  eSDA_7UP = 2057,
  eSDA_8UP = 2058,
  eSDA_9UP = 2059,
  eSDA_10UP = 2060,
  eDDG_1UP = 2061,
  eDDG_2UP = 2062,
  eDDG_3UP = 2063,
  eDDG_4UP = 2064,
  eDDG_5UP = 2065,
  eDDG_6UP = 2066,
  eDDG_7UP = 2067,
  eDDG_8UP = 2068,
  eDDG_9UP = 2069,
  eDDG_10UP = 2070,
  eQTH_1UP = 2071,
  eQTH_2UP = 2072,
  eQTH_3UP = 2073,
  eQTH_4UP = 2074,
  eQTH_5UP = 2075,
  eQTH_6UP = 2076,
  eQTH_7UP = 2077,
  eQTH_8UP = 2078,
  eQTH_9UP = 2079,
  eQTH_10UP = 2080,
  eSADD_1UP = 2081,
  eSADD_2UP = 2082,
  eSADD_3UP = 2083,
  eSADD_4UP = 2084,
  eSADD_5UP = 2085,
  eSADD_6UP = 2086,
  eSADD_7UP = 2087,
  eSADD_8UP = 2088,
  eSADD_9UP = 2089,
  eSADD_10UP = 2090,
  eEL_FIRE_1UP = 2091,
  eEL_FIRE_2UP = 2092,
  eEL_FIRE_3UP = 2093,
  eEL_FIRE_4UP = 2094,
  eEL_FIRE_5UP = 2095,
  eEL_FIRE_6UP = 2096,
  eEL_FIRE_7UP = 2097,
  eEL_FIRE_8UP = 2098,
  eEL_FIRE_9UP = 2099,
  eEL_FIRE_10UP = 2100,
  eEL_WATER_1UP = 2101,
  eEL_WATER_2UP = 2102,
  eEL_WATER_3UP = 2103,
  eEL_WATER_4UP = 2104,
  eEL_WATER_5UP = 2105,
  eEL_WATER_6UP = 2106,
  eEL_WATER_7UP = 2107,
  eEL_WATER_8UP = 2108,
  eEL_WATER_9UP = 2109,
  eEL_WATER_10UP = 2110,
  eEL_EARTH_1UP = 2111,
  eEL_EARTH_2UP = 2112,
  eEL_EARTH_3UP = 2113,
  eEL_EARTH_4UP = 2114,
  eEL_EARTH_5UP = 2115,
  eEL_EARTH_6UP = 2116,
  eEL_EARTH_7UP = 2117,
  eEL_EARTH_8UP = 2118,
  eEL_EARTH_9UP = 2119,
  eEL_EARTH_10UP = 2120,
  eEL_WIND_1UP = 2121,
  eEL_WIND_2UP = 2122,
  eEL_WIND_3UP = 2123,
  eEL_WIND_4UP = 2124,
  eEL_WIND_5UP = 2125,
  eEL_WIND_6UP = 2126,
  eEL_WIND_7UP = 2127,
  eEL_WIND_8UP = 2128,
  eEL_WIND_9UP = 2129,
  eEL_WIND_10UP = 2130,
  eEL_LIGHT_1UP = 2131,
  eEL_LIGHT_2UP = 2132,
  eEL_LIGHT_3UP = 2133,
  eEL_LIGHT_4UP = 2134,
  eEL_LIGHT_5UP = 2135,
  eEL_LIGHT_6UP = 2136,
  eEL_LIGHT_7UP = 2137,
  eEL_LIGHT_8UP = 2138,
  eEL_LIGHT_9UP = 2139,
  eEL_LIGHT_10UP = 2140,
  eEL_DARK_1UP = 2141,
  eEL_DARK_2UP = 2142,
  eEL_DARK_3UP = 2143,
  eEL_DARK_4UP = 2144,
  eEL_DARK_5UP = 2145,
  eEL_DARK_6UP = 2146,
  eEL_DARK_7UP = 2147,
  eEL_DARK_8UP = 2148,
  eEL_DARK_9UP = 2149,
  eEL_DARK_10UP = 2150,
  eEN_SDEF_UP = 2151,
  eEN_MDEF_UP = 2161,
  eSKILL_2901 = 2901,
  eSPD_1DOWN = 3001,
  eSPD_2DOWN = 3002,
  eSPD_3DOWN = 3003,
  eSPD_4DOWN = 3004,
  eSPD_5DOWN = 3005,
  eSPD_6DOWN = 3006,
  eSPD_7DOWN = 3007,
  eSPD_8DOWN = 3008,
  eSPD_9DOWN = 3009,
  eSPD_10DOWN = 3010,
  eSATK_1DOWN = 3011,
  eSATK_2DOWN = 3012,
  eSATK_3DOWN = 3013,
  eSATK_4DOWN = 3014,
  eSATK_5DOWN = 3015,
  eSATK_6DOWN = 3016,
  eSATK_7DOWN = 3017,
  eSATK_8DOWN = 3018,
  eSATK_9DOWN = 3019,
  eSATK_10DOWN = 3020,
  eMATK_1DOWN = 3021,
  eMATK_2DOWN = 3022,
  eMATK_3DOWN = 3023,
  eMATK_4DOWN = 3024,
  eMATK_5DOWN = 3025,
  eMATK_6DOWN = 3026,
  eMATK_7DOWN = 3027,
  eMATK_8DOWN = 3028,
  eMATK_9DOWN = 3029,
  eMATK_10DOWN = 3030,
  eSDEF_1DOWN = 3031,
  eSDEF_2DOWN = 3032,
  eSDEF_3DOWN = 3033,
  eSDEF_4DOWN = 3034,
  eSDEF_5DOWN = 3035,
  eSDEF_6DOWN = 3036,
  eSDEF_7DOWN = 3037,
  eSDEF_8DOWN = 3038,
  eSDEF_9DOWN = 3039,
  eSDEF_10DOWN = 3040,
  eMDEF_1DOWN = 3041,
  eMDEF_2DOWN = 3042,
  eMDEF_3DOWN = 3043,
  eMDEF_4DOWN = 3044,
  eMDEF_5DOWN = 3045,
  eMDEF_6DOWN = 3046,
  eMDEF_7DOWN = 3047,
  eMDEF_8DOWN = 3048,
  eMDEF_9DOWN = 3049,
  eMDEF_10DOWN = 3050,
  eSDA_1DOWN = 3051,
  eSDA_2DOWN = 3052,
  eSDA_3DOWN = 3053,
  eSDA_4DOWN = 3054,
  eSDA_5DOWN = 3055,
  eSDA_6DOWN = 3056,
  eSDA_7DOWN = 3057,
  eSDA_8DOWN = 3058,
  eSDA_9DOWN = 3059,
  eSDA_10DOWN = 3060,
  eDDG_1DOWN = 3061,
  eDDG_2DOWN = 3062,
  eDDG_3DOWN = 3063,
  eDDG_4DOWN = 3064,
  eDDG_5DOWN = 3065,
  eDDG_6DOWN = 3066,
  eDDG_7DOWN = 3067,
  eDDG_8DOWN = 3068,
  eDDG_9DOWN = 3069,
  eDDG_10DOWN = 3070,
  eQTH_1DOWN = 3071,
  eQTH_2DOWN = 3072,
  eQTH_3DOWN = 3073,
  eQTH_4DOWN = 3074,
  eQTH_5DOWN = 3075,
  eQTH_6DOWN = 3076,
  eQTH_7DOWN = 3077,
  eQTH_8DOWN = 3078,
  eQTH_9DOWN = 3079,
  eQTH_10DOWN = 3080,
  eSADD_1DOWN = 3081,
  eSADD_2DOWN = 3082,
  eSADD_3DOWN = 3083,
  eSADD_4DOWN = 3084,
  eSADD_5DOWN = 3085,
  eSADD_6DOWN = 3086,
  eSADD_7DOWN = 3087,
  eSADD_8DOWN = 3088,
  eSADD_9DOWN = 3089,
  eSADD_10DOWN = 3090,
  eEL_FIRE_1DOWN = 3091,
  eEL_FIRE_2DOWN = 3092,
  eEL_FIRE_3DOWN = 3093,
  eEL_FIRE_4DOWN = 3094,
  eEL_FIRE_5DOWN = 3095,
  eEL_FIRE_6DOWN = 3096,
  eEL_FIRE_7DOWN = 3097,
  eEL_FIRE_8DOWN = 3098,
  eEL_FIRE_9DOWN = 3099,
  eEL_FIRE_10DOWN = 3100,
  eEL_WATER_1DOWN = 3101,
  eEL_WATER_2DOWN = 3102,
  eEL_WATER_3DOWN = 3103,
  eEL_WATER_4DOWN = 3104,
  eEL_WATER_5DOWN = 3105,
  eEL_WATER_6DOWN = 3106,
  eEL_WATER_7DOWN = 3107,
  eEL_WATER_8DOWN = 3108,
  eEL_WATER_9DOWN = 3109,
  eEL_WATER_10DOWN = 3110,
  eEL_EARTH_1DOWN = 3111,
  eEL_EARTH_2DOWN = 3112,
  eEL_EARTH_3DOWN = 3113,
  eEL_EARTH_4DOWN = 3114,
  eEL_EARTH_5DOWN = 3115,
  eEL_EARTH_6DOWN = 3116,
  eEL_EARTH_7DOWN = 3117,
  eEL_EARTH_8DOWN = 3118,
  eEL_EARTH_9DOWN = 3119,
  eEL_EARTH_10DOWN = 3120,
  eEL_WIND_1DOWN = 3121,
  eEL_WIND_2DOWN = 3122,
  eEL_WIND_3DOWN = 3123,
  eEL_WIND_4DOWN = 3124,
  eEL_WIND_5DOWN = 3125,
  eEL_WIND_6DOWN = 3126,
  eEL_WIND_7DOWN = 3127,
  eEL_WIND_8DOWN = 3128,
  eEL_WIND_9DOWN = 3129,
  eEL_WIND_10DOWN = 3130,
  eEL_LIGHT_1DOWN = 3131,
  eEL_LIGHT_2DOWN = 3132,
  eEL_LIGHT_3DOWN = 3133,
  eEL_LIGHT_4DOWN = 3134,
  eEL_LIGHT_5DOWN = 3135,
  eEL_LIGHT_6DOWN = 3136,
  eEL_LIGHT_7DOWN = 3137,
  eEL_LIGHT_8DOWN = 3138,
  eEL_LIGHT_9DOWN = 3139,
  eEL_LIGHT_10DOWN = 3140,
  eEL_DARK_1DOWN = 3141,
  eEL_DARK_2DOWN = 3142,
  eEL_DARK_3DOWN = 3143,
  eEL_DARK_4DOWN = 3144,
  eEL_DARK_5DOWN = 3145,
  eEL_DARK_6DOWN = 3146,
  eEL_DARK_7DOWN = 3147,
  eEL_DARK_8DOWN = 3148,
  eEL_DARK_9DOWN = 3149,
  eEL_DARK_10DOWN = 3150,
  eBR_ALL_10 = 4001,
  eBR_ALL_20 = 4002,
  eBR_ALL_30 = 4003,
  eBR_ALL_40 = 4004,
  eBR_ALL_50 = 4005,
  eBR_ALL_60 = 4006,
  eBR_ALL_70 = 4007,
  eBR_ALL_80 = 4008,
  eBR_ALL_90 = 4009,
  eBR_ALL_100 = 4010,
  eBR_PHY_10 = 4011,
  eBR_PHY_20 = 4012,
  eBR_PHY_30 = 4013,
  eBR_PHY_40 = 4014,
  eBR_PHY_50 = 4015,
  eBR_PHY_60 = 4016,
  eBR_PHY_70 = 4017,
  eBR_PHY_80 = 4018,
  eBR_PHY_90 = 4019,
  eBR_PHY_100 = 4020,
  eBR_MGC_10 = 4021,
  eBR_MGC_20 = 4022,
  eBR_MGC_30 = 4023,
  eBR_MGC_40 = 4024,
  eBR_MGC_50 = 4025,
  eBR_MGC_60 = 4026,
  eBR_MGC_70 = 4027,
  eBR_MGC_80 = 4028,
  eBR_MGC_90 = 4029,
  eBR_MGC_100 = 4030,
  eBR_FIRE_10 = 4031,
  eBR_FIRE_20 = 4032,
  eBR_FIRE_30 = 4033,
  eBR_FIRE_40 = 4034,
  eBR_FIRE_50 = 4035,
  eBR_FIRE_60 = 4036,
  eBR_FIRE_70 = 4037,
  eBR_FIRE_80 = 4038,
  eBR_FIRE_90 = 4039,
  eBR_FIRE_100 = 4040,
  eBR_WATER_10 = 4041,
  eBR_WATER_20 = 4042,
  eBR_WATER_30 = 4043,
  eBR_WATER_40 = 4044,
  eBR_WATER_50 = 4045,
  eBR_WATER_60 = 4046,
  eBR_WATER_70 = 4047,
  eBR_WATER_80 = 4048,
  eBR_WATER_90 = 4049,
  eBR_WATER_100 = 4050,
  eBR_EARTH_10 = 4051,
  eBR_EARTH_20 = 4052,
  eBR_EARTH_30 = 4053,
  eBR_EARTH_40 = 4054,
  eBR_EARTH_50 = 4055,
  eBR_EARTH_60 = 4056,
  eBR_EARTH_70 = 4057,
  eBR_EARTH_80 = 4058,
  eBR_EARTH_90 = 4059,
  eBR_EARTH_100 = 4060,
  eBR_WIND_10 = 4061,
  eBR_WIND_20 = 4062,
  eBR_WIND_30 = 4063,
  eBR_WIND_40 = 4064,
  eBR_WIND_50 = 4065,
  eBR_WIND_60 = 4066,
  eBR_WIND_70 = 4067,
  eBR_WIND_80 = 4068,
  eBR_WIND_90 = 4069,
  eBR_WIND_100 = 4070,
  eBR_LIGHT_10 = 4071,
  eBR_LIGHT_20 = 4072,
  eBR_LIGHT_30 = 4073,
  eBR_LIGHT_40 = 4074,
  eBR_LIGHT_50 = 4075,
  eBR_LIGHT_60 = 4076,
  eBR_LIGHT_70 = 4077,
  eBR_LIGHT_80 = 4078,
  eBR_LIGHT_90 = 4079,
  eBR_LIGHT_100 = 4080,
  eBR_DARK_10 = 4081,
  eBR_DARK_20 = 4082,
  eBR_DARK_30 = 4083,
  eBR_DARK_40 = 4084,
  eBR_DARK_50 = 4085,
  eBR_DARK_60 = 4086,
  eBR_DARK_70 = 4087,
  eBR_DARK_80 = 4088,
  eBR_DARK_90 = 4089,
  eBR_DARK_100 = 4090
}



export enum EAbnormalStateEffect
{
  eSTATE_ACTION_BAN = 1001,
  eSTATE_MANUALITEM_BAN = 1002,
  eSTATE_SKILL_BAN = 1003,
  eSTATE_HP_BAN = 1004,
  eDEF_HALF = 1005,
  eSTATE_RES_HALF = 1006,
  eSTATE_SLIPDAMAGE_POISON = 1021,
  eSTATE_SLIPDAMAGE_BURN = 1031,
  eSTATE_HEALDAMAGE_FROZEN = 1041,
  eSTATE_SDA_5DOWN = 1061,
  eSTATE_LDA_5DOWN = 1062,
  eSTATE_SPD_5DOWN = 1091,
  eSPD_1UP = 2001,
  eSPD_2UP = 2002,
  eSPD_3UP = 2003,
  eSPD_4UP = 2004,
  eSPD_5UP = 2005,
  eSPD_6UP = 2006,
  eSPD_7UP = 2007,
  eSPD_8UP = 2008,
  eSPD_9UP = 2009,
  eSPD_10UP = 2010,
  eSATK_1UP = 2011,
  eSATK_2UP = 2012,
  eSATK_3UP = 2013,
  eSATK_4UP = 2014,
  eSATK_5UP = 2015,
  eSATK_6UP = 2016,
  eSATK_7UP = 2017,
  eSATK_8UP = 2018,
  eSATK_9UP = 2019,
  eSATK_10UP = 2020,
  eMATK_1UP = 2021,
  eMATK_2UP = 2022,
  eMATK_3UP = 2023,
  eMATK_4UP = 2024,
  eMATK_5UP = 2025,
  eMATK_6UP = 2026,
  eMATK_7UP = 2027,
  eMATK_8UP = 2028,
  eMATK_9UP = 2029,
  eMATK_10UP = 2030,
  eSDEF_1UP = 2031,
  eSDEF_2UP = 2032,
  eSDEF_3UP = 2033,
  eSDEF_4UP = 2034,
  eSDEF_5UP = 2035,
  eSDEF_6UP = 2036,
  eSDEF_7UP = 2037,
  eSDEF_8UP = 2038,
  eSDEF_9UP = 2039,
  eSDEF_10UP = 2040,
  eMDEF_1UP = 2041,
  eMDEF_2UP = 2042,
  eMDEF_3UP = 2043,
  eMDEF_4UP = 2044,
  eMDEF_5UP = 2045,
  eMDEF_6UP = 2046,
  eMDEF_7UP = 0x7FF,
  eMDEF_8UP = 0x800,
  eMDEF_9UP = 2049,
  eMDEF_10UP = 2050,
  eSDA_1UP = 2051,
  eSDA_2UP = 2052,
  eSDA_3UP = 2053,
  eSDA_4UP = 2054,
  eSDA_5UP = 2055,
  eSDA_6UP = 2056,
  eSDA_7UP = 2057,
  eSDA_8UP = 2058,
  eSDA_9UP = 2059,
  eSDA_10UP = 2060,
  eDDG_1UP = 2061,
  eDDG_2UP = 2062,
  eDDG_3UP = 2063,
  eDDG_4UP = 2064,
  eDDG_5UP = 2065,
  eDDG_6UP = 2066,
  eDDG_7UP = 2067,
  eDDG_8UP = 2068,
  eDDG_9UP = 2069,
  eDDG_10UP = 2070,
  eQTH_1UP = 2071,
  eQTH_2UP = 2072,
  eQTH_3UP = 2073,
  eQTH_4UP = 2074,
  eQTH_5UP = 2075,
  eQTH_6UP = 2076,
  eQTH_7UP = 2077,
  eQTH_8UP = 2078,
  eQTH_9UP = 2079,
  eQTH_10UP = 2080,
  eSADD_1UP = 2081,
  eSADD_2UP = 2082,
  eSADD_3UP = 2083,
  eSADD_4UP = 2084,
  eSADD_5UP = 2085,
  eSADD_6UP = 2086,
  eSADD_7UP = 2087,
  eSADD_8UP = 2088,
  eSADD_9UP = 2089,
  eSADD_10UP = 2090,
  eEL_FIRE_1UP = 2091,
  eEL_FIRE_2UP = 2092,
  eEL_FIRE_3UP = 2093,
  eEL_FIRE_4UP = 2094,
  eEL_FIRE_5UP = 2095,
  eEL_FIRE_6UP = 2096,
  eEL_FIRE_7UP = 2097,
  eEL_FIRE_8UP = 2098,
  eEL_FIRE_9UP = 2099,
  eEL_FIRE_10UP = 2100,
  eEL_WATER_1UP = 2101,
  eEL_WATER_2UP = 2102,
  eEL_WATER_3UP = 2103,
  eEL_WATER_4UP = 2104,
  eEL_WATER_5UP = 2105,
  eEL_WATER_6UP = 2106,
  eEL_WATER_7UP = 2107,
  eEL_WATER_8UP = 2108,
  eEL_WATER_9UP = 2109,
  eEL_WATER_10UP = 2110,
  eEL_EARTH_1UP = 2111,
  eEL_EARTH_2UP = 2112,
  eEL_EARTH_3UP = 2113,
  eEL_EARTH_4UP = 2114,
  eEL_EARTH_5UP = 2115,
  eEL_EARTH_6UP = 2116,
  eEL_EARTH_7UP = 2117,
  eEL_EARTH_8UP = 2118,
  eEL_EARTH_9UP = 2119,
  eEL_EARTH_10UP = 2120,
  eEL_WIND_1UP = 2121,
  eEL_WIND_2UP = 2122,
  eEL_WIND_3UP = 2123,
  eEL_WIND_4UP = 2124,
  eEL_WIND_5UP = 2125,
  eEL_WIND_6UP = 2126,
  eEL_WIND_7UP = 2127,
  eEL_WIND_8UP = 2128,
  eEL_WIND_9UP = 2129,
  eEL_WIND_10UP = 2130,
  eEL_LIGHT_1UP = 2131,
  eEL_LIGHT_2UP = 2132,
  eEL_LIGHT_3UP = 2133,
  eEL_LIGHT_4UP = 2134,
  eEL_LIGHT_5UP = 2135,
  eEL_LIGHT_6UP = 2136,
  eEL_LIGHT_7UP = 2137,
  eEL_LIGHT_8UP = 2138,
  eEL_LIGHT_9UP = 2139,
  eEL_LIGHT_10UP = 2140,
  eEL_DARK_1UP = 2141,
  eEL_DARK_2UP = 2142,
  eEL_DARK_3UP = 2143,
  eEL_DARK_4UP = 2144,
  eEL_DARK_5UP = 2145,
  eEL_DARK_6UP = 2146,
  eEL_DARK_7UP = 2147,
  eEL_DARK_8UP = 2148,
  eEL_DARK_9UP = 2149,
  eEL_DARK_10UP = 2150,
  eEN_SDEF_UP_1 = 2151,
  eEN_MDEF_UP_1 = 2161,
  eSPD_1DOWN = 3001,
  eSPD_2DOWN = 3002,
  eSPD_3DOWN = 3003,
  eSPD_4DOWN = 3004,
  eSPD_5DOWN = 3005,
  eSPD_6DOWN = 3006,
  eSPD_7DOWN = 3007,
  eSPD_8DOWN = 3008,
  eSPD_9DOWN = 3009,
  eSPD_10DOWN = 3010,
  eSATK_1DOWN = 3011,
  eSATK_2DOWN = 3012,
  eSATK_3DOWN = 3013,
  eSATK_4DOWN = 3014,
  eSATK_5DOWN = 3015,
  eSATK_6DOWN = 3016,
  eSATK_7DOWN = 3017,
  eSATK_8DOWN = 3018,
  eSATK_9DOWN = 3019,
  eSATK_10DOWN = 3020,
  eMATK_1DOWN = 3021,
  eMATK_2DOWN = 3022,
  eMATK_3DOWN = 3023,
  eMATK_4DOWN = 3024,
  eMATK_5DOWN = 3025,
  eMATK_6DOWN = 3026,
  eMATK_7DOWN = 3027,
  eMATK_8DOWN = 3028,
  eMATK_9DOWN = 3029,
  eMATK_10DOWN = 3030,
  eSDEF_1DOWN = 3031,
  eSDEF_2DOWN = 3032,
  eSDEF_3DOWN = 3033,
  eSDEF_4DOWN = 3034,
  eSDEF_5DOWN = 3035,
  eSDEF_6DOWN = 3036,
  eSDEF_7DOWN = 3037,
  eSDEF_8DOWN = 3038,
  eSDEF_9DOWN = 3039,
  eSDEF_10DOWN = 3040,
  eMDEF_1DOWN = 3041,
  eMDEF_2DOWN = 3042,
  eMDEF_3DOWN = 3043,
  eMDEF_4DOWN = 3044,
  eMDEF_5DOWN = 3045,
  eMDEF_6DOWN = 3046,
  eMDEF_7DOWN = 3047,
  eMDEF_8DOWN = 3048,
  eMDEF_9DOWN = 3049,
  eMDEF_10DOWN = 3050,
  eSDA_1DOWN = 3051,
  eSDA_2DOWN = 3052,
  eSDA_3DOWN = 3053,
  eSDA_4DOWN = 3054,
  eSDA_5DOWN = 3055,
  eSDA_6DOWN = 3056,
  eSDA_7DOWN = 3057,
  eSDA_8DOWN = 3058,
  eSDA_9DOWN = 3059,
  eSDA_10DOWN = 3060,
  eDDG_1DOWN = 3061,
  eDDG_2DOWN = 3062,
  eDDG_3DOWN = 3063,
  eDDG_4DOWN = 3064,
  eDDG_5DOWN = 3065,
  eDDG_6DOWN = 3066,
  eDDG_7DOWN = 3067,
  eDDG_8DOWN = 3068,
  eDDG_9DOWN = 3069,
  eDDG_10DOWN = 3070,
  eQTH_1DOWN = 3071,
  eQTH_2DOWN = 3072,
  eQTH_3DOWN = 3073,
  eQTH_4DOWN = 3074,
  eQTH_5DOWN = 3075,
  eQTH_6DOWN = 3076,
  eQTH_7DOWN = 3077,
  eQTH_8DOWN = 3078,
  eQTH_9DOWN = 3079,
  eQTH_10DOWN = 3080,
  eSADD_1DOWN = 3081,
  eSADD_2DOWN = 3082,
  eSADD_3DOWN = 3083,
  eSADD_4DOWN = 3084,
  eSADD_5DOWN = 3085,
  eSADD_6DOWN = 3086,
  eSADD_7DOWN = 3087,
  eSADD_8DOWN = 3088,
  eSADD_9DOWN = 3089,
  eSADD_10DOWN = 3090,
  eEL_FIRE_1DOWN = 3091,
  eEL_FIRE_2DOWN = 3092,
  eEL_FIRE_3DOWN = 3093,
  eEL_FIRE_4DOWN = 3094,
  eEL_FIRE_5DOWN = 3095,
  eEL_FIRE_6DOWN = 3096,
  eEL_FIRE_7DOWN = 3097,
  eEL_FIRE_8DOWN = 3098,
  eEL_FIRE_9DOWN = 3099,
  eEL_FIRE_10DOWN = 3100,
  eEL_WATER_1DOWN = 3101,
  eEL_WATER_2DOWN = 3102,
  eEL_WATER_3DOWN = 3103,
  eEL_WATER_4DOWN = 3104,
  eEL_WATER_5DOWN = 3105,
  eEL_WATER_6DOWN = 3106,
  eEL_WATER_7DOWN = 3107,
  eEL_WATER_8DOWN = 3108,
  eEL_WATER_9DOWN = 3109,
  eEL_WATER_10DOWN = 3110,
  eEL_EARTH_1DOWN = 3111,
  eEL_EARTH_2DOWN = 3112,
  eEL_EARTH_3DOWN = 3113,
  eEL_EARTH_4DOWN = 3114,
  eEL_EARTH_5DOWN = 3115,
  eEL_EARTH_6DOWN = 3116,
  eEL_EARTH_7DOWN = 3117,
  eEL_EARTH_8DOWN = 3118,
  eEL_EARTH_9DOWN = 3119,
  eEL_EARTH_10DOWN = 3120,
  eEL_WIND_1DOWN = 3121,
  eEL_WIND_2DOWN = 3122,
  eEL_WIND_3DOWN = 3123,
  eEL_WIND_4DOWN = 3124,
  eEL_WIND_5DOWN = 3125,
  eEL_WIND_6DOWN = 3126,
  eEL_WIND_7DOWN = 3127,
  eEL_WIND_8DOWN = 3128,
  eEL_WIND_9DOWN = 3129,
  eEL_WIND_10DOWN = 3130,
  eEL_LIGHT_1DOWN = 3131,
  eEL_LIGHT_2DOWN = 3132,
  eEL_LIGHT_3DOWN = 3133,
  eEL_LIGHT_4DOWN = 3134,
  eEL_LIGHT_5DOWN = 3135,
  eEL_LIGHT_6DOWN = 3136,
  eEL_LIGHT_7DOWN = 3137,
  eEL_LIGHT_8DOWN = 3138,
  eEL_LIGHT_9DOWN = 3139,
  eEL_LIGHT_10DOWN = 3140,
  eEL_DARK_1DOWN = 3141,
  eEL_DARK_2DOWN = 3142,
  eEL_DARK_3DOWN = 3143,
  eEL_DARK_4DOWN = 3144,
  eEL_DARK_5DOWN = 3145,
  eEL_DARK_6DOWN = 3146,
  eEL_DARK_7DOWN = 3147,
  eEL_DARK_8DOWN = 3148,
  eEL_DARK_9DOWN = 3149,
  eEL_DARK_10DOWN = 3150,
  eBR_ALL_10 = 4001,
  eBR_ALL_20 = 4002,
  eBR_ALL_30 = 4003,
  eBR_ALL_40 = 4004,
  eBR_ALL_50 = 4005,
  eBR_ALL_60 = 4006,
  eBR_ALL_70 = 4007,
  eBR_ALL_80 = 4008,
  eBR_ALL_90 = 4009,
  eBR_ALL_100 = 4010,
  eBR_PHY_10 = 4011,
  eBR_PHY_20 = 4012,
  eBR_PHY_30 = 4013,
  eBR_PHY_40 = 4014,
  eBR_PHY_50 = 4015,
  eBR_PHY_60 = 4016,
  eBR_PHY_70 = 4017,
  eBR_PHY_80 = 4018,
  eBR_PHY_90 = 4019,
  eBR_PHY_100 = 4020,
  eBR_MGC_10 = 4021,
  eBR_MGC_20 = 4022,
  eBR_MGC_30 = 4023,
  eBR_MGC_40 = 4024,
  eBR_MGC_50 = 4025,
  eBR_MGC_60 = 4026,
  eBR_MGC_70 = 4027,
  eBR_MGC_80 = 4028,
  eBR_MGC_90 = 4029,
  eBR_MGC_100 = 4030,
  eBR_FIRE_10 = 4031,
  eBR_FIRE_20 = 4032,
  eBR_FIRE_30 = 4033,
  eBR_FIRE_40 = 4034,
  eBR_FIRE_50 = 4035,
  eBR_FIRE_60 = 4036,
  eBR_FIRE_70 = 4037,
  eBR_FIRE_80 = 4038,
  eBR_FIRE_90 = 4039,
  eBR_FIRE_100 = 4040,
  eBR_WATER_10 = 4041,
  eBR_WATER_20 = 4042,
  eBR_WATER_30 = 4043,
  eBR_WATER_40 = 4044,
  eBR_WATER_50 = 4045,
  eBR_WATER_60 = 4046,
  eBR_WATER_70 = 4047,
  eBR_WATER_80 = 4048,
  eBR_WATER_90 = 4049,
  eBR_WATER_100 = 4050,
  eBR_EARTH_10 = 4051,
  eBR_EARTH_20 = 4052,
  eBR_EARTH_30 = 4053,
  eBR_EARTH_40 = 4054,
  eBR_EARTH_50 = 4055,
  eBR_EARTH_60 = 4056,
  eBR_EARTH_70 = 4057,
  eBR_EARTH_80 = 4058,
  eBR_EARTH_90 = 4059,
  eBR_EARTH_100 = 4060,
  eBR_WIND_10 = 4061,
  eBR_WIND_20 = 4062,
  eBR_WIND_30 = 4063,
  eBR_WIND_40 = 4064,
  eBR_WIND_50 = 4065,
  eBR_WIND_60 = 4066,
  eBR_WIND_70 = 4067,
  eBR_WIND_80 = 4068,
  eBR_WIND_90 = 4069,
  eBR_WIND_100 = 4070,
  eBR_LIGHT_10 = 4071,
  eBR_LIGHT_20 = 4072,
  eBR_LIGHT_30 = 4073,
  eBR_LIGHT_40 = 4074,
  eBR_LIGHT_50 = 4075,
  eBR_LIGHT_60 = 4076,
  eBR_LIGHT_70 = 4077,
  eBR_LIGHT_80 = 4078,
  eBR_LIGHT_90 = 4079,
  eBR_LIGHT_100 = 4080,
  eBR_DARK_10 = 4081,
  eBR_DARK_20 = 4082,
  eBR_DARK_30 = 4083,
  eBR_DARK_40 = 4084,
  eBR_DARK_50 = 4085,
  eBR_DARK_60 = 4086,
  eBR_DARK_70 = 4087,
  eBR_DARK_80 = 4088,
  eBR_DARK_90 = 4089,
  eBR_DARK_100 = 4090
}




export enum EAbnormalStateTarget
{
  eNONE,
  eHP,
  eSATK,
  eMATK,
  eSDEF,
  eMDEF,
  eSPD,
  eSDA,
  eLDA,
  eDDG,
  eQTH,
  eSADD,
  eFIRE,
  eWATER,
  eEARTH,
  eWIND,
  eLIGHT,
  eDARK,
  eBARRIER
}



export enum EAdvMotionKind
{
  eNONE,
  eTALK,
  eNOD,
  eFISH,
  eDOWN
}




export enum EAgentPriority
{
  ePLAYER = 30,
  eENEMY = 20,
  eNPC = 10,
  eCARRIAGE = 0
}



export enum EAgentType
{
  Humanoid,
  Carriage,
  EnumMax
}


export enum EAlterKind
{
  eDEFAULT,
  eEQUIP,
  eMATERIAL,
  eFOOD
}



export enum EAPIAction
{
  eNONE,
  eDISP,
  ePROGRESS,
  eCANCEL,
  eRETRY,
  eTITLE,
  eOPENURL,
  ePURCHASE
}



export enum eAreaKind
{
  MapArea,
  BattleArea,
  TownMap,
  EnumMax
}


export enum eAreaMulti
{
  Free,
  Single,
  Multi,
  EnumMax
}


export enum EAssetDownloadTiming
{
  eNONE,
  eBATTLE,
  eADV,
  eOPENING,
  eFIRST,
  eLAUNCH
}


export enum eAttackTargetKind
{
  One,
  All
}


export enum EBattleAttribute
{
  eNONE,
  eSLASH_DAMAGED,
  eBLOW_DAMAGED,
  eMAGIC_DAMAGED
}



export enum EBattleEffectKind
{
  eNONE = 0,
  eDAMAGE = 1,
  eHP_RECOVERY = 2,
  eSP_RECOVERY = 3,
  eESCAPE = 4,
  eBURST = 5,
  eSKILL_RESERVE = 6,
  eSTATUS_FIX = 101,
  eSTATUS_RATE = 102,
  eDAMAGE_RATE = 103,
  eDAMAGE_INVALID = 104,
  eDAMAGE_REFLECT = 105,
  eSTATE_GRANT = 106,
  eSTATE_RECOVERY = 107,
  eSTATE_RESISTANCE = 108,
  eSTATE_INVALID = 109,
  eDEAD_REVIVE = 110,
  eDEAD_AVOID = 111,
  eAUTO_BOMB = 112,
  eAUTO_RECOVER = 113,
  eAUTO_SUPPORT = 114,
  eCOVER = 115,
  ePURSUIT = 116,
  eSTEAL_ETHER = 117,
  eTREASURE_ADD = 118,
  eELEMENT_CHANGE = 119,
  eHP_ABSORB = 120,
  eREADY_WIT = 121,
  eITEM_FIX = 122,
  eITEM_RATE = 123,
  eHATE = 124,
  eACTIONTURN = 125,
  eTARGET_ALL = 126,
  eQUALITY_UP = 0x7F,
  eBUFF_DELETE = 0x80,
  eSTATE_GRANT_UP = 129,
  eCOUNTER = 130,
  eHP_REGENE = 131,
  eSP_REGENE = 132,
  eITEM_COST_DOWN = 133,
  eSP_DAMAGE = 134,
  eSTART_SKILL = 135,
  eHP_REGENE_EVERY = 136,
  eONE_DAMAGE = 137,
  eONE_ENDURE = 138,
  eZONE_CHANGE = 139,
  eCOVER_HPHALF = 140,
  eCOVER_DYING = 141,
  eHP1_DAMAGE = 142,
  eITEM_AFTER_ATACK = 155,
  eITEM_DOUBLE_10 = 156,
  eITEM_DOUBLE_20 = 157,
  eITEM_DOUBLE_50 = 158,
  eITEM_DOUBLE_100 = 159,
  eELEMENT_ATTACK_HP_ABSORB = 160,
  ePHYSICS_ATTACK_TURN_1 = 161,
  ePHYSICS_ATTACK_TURN_2 = 162,
  ePHYSICS_ATTACK_TURN_3 = 163,
  ePHYSICS_ATTACK_TURN_4 = 164,
  ePHYSICS_ATTACK_TURN_5 = 165,
  eMAGIC_ATTACK_TURN_1 = 166,
  eMAGIC_ATTACK_TURN_2 = 167,
  eMAGIC_ATTACK_TURN_3 = 168,
  eMAGIC_ATTACK_TURN_4 = 169,
  eMAGIC_ATTACK_TURN_5 = 170,
  eSIDE_PHYSICS_INVALID = 171,
  eSIDE_MAGIC_INVALID = 172,
  eITEM_PHYSICS_ADD = 173,
  eITEM_MAGIC_ADD = 174,
  eDAMAGE_REACT = 175,
  eBATTLE_EXP_UP = 181,
  eCOMPOSITE = 201,
  eSTATE_GRANT_PASSIVE = 301,
  eAUTO_ACTIVE_SKILL = 302
}



export enum EBattleEffectTarget
{
  eNONE,
  eHP,
  eSATK,
  eMATK,
  eSDEF,
  eMDEF,
  eSPD,
  eHIT,
  eAVOID,
  eCRITICAL,
  eSKILL,
  eSATK_SDEF,
  eSATK_SPD,
  eSDEF_SPD,
  eMATK_MDEF,
  eMATK_SPD,
  eMDEF_SPD,
  eSALL,
  eMALL,
  eALL,
  eEL_NONE,
  eEL_FIRE,
  eEL_WATER,
  eEL_EARTH,
  eEL_WIND,
  eEL_LIGHT,
  eEL_DARK,
  eEL_ALL
}



export enum EBattleEffectTrigger
{
  eNONE,
  eANYTIME,
  eHP_MAX,
  eATTACK,
  eATTACK_HPMAX,
  eATTACK_HPHALF,
  eATTACK_HPDYING,
  eATTACK_STRONG,
  eATTACK_ABNORMALSTATE,
  eATTACK_PUNI,
  eATTACK_ELEMENT,
  eATTACK_GOBLIN,
  eATTACK_GHOST,
  eATTACK_CRITICAL,
  eATTACK_SKILL,
  eATTACK_NONSKILL,
  eDAMAGED,
  eDAMAGED_HPHALF,
  eDAMAGED_HPDYING,
  eDAMAGED_PHYSICS,
  eDAMAGED_MAGIC,
  eDAMAGED_FIRE,
  eDAMAGED_WATER,
  eDAMAGED_EARTH,
  eDAMAGED_WIND,
  eDAMAGED_LIGHT,
  eDAMAGED_DARK,
  eDAMAGED_STRONG,
  eRECOVER,
  eITEM_ATTACK,
  eITEM_RECOVER,
  eITEM_SUPPORT,
  eCHAIN,
  eALLAY_ATTACK,
  eSHIELD,
  eMACE,
  eROD,
  eBOW,
  eSWORD,
  eATTACK_NOT_MACE,
  eBATTLE_START,
  eDAMAGED_HPDYING_PHYSICS,
  eDAMAGED_HPDYING_MAGIC,
  eATTACK_DESIGN,
  eATTACK_DESIGN_RACE,
  eITEM_ATTACK_HPMAX,
  eITEM_ATTACK_HPHALF,
  eITEM_ATTACK_HPDYING,
  eITEM_ATTACK_STRONG,
  eITEM_ATTACK_ABNORMALSTATE,
  eITEM_ATTACK_DESIGN_RACE,
  eATTACK_ITEM_ATTACK,
  eATTACK_ITEM_ATTACK_HPMAX,
  eATTACK_ITEM_ATTACK_HPHALF,
  eATTACK_ITEM_ATTACK_HPDYING,
  eATTACK_ITEM_ATTACK_STRONG,
  eATTACK_ITEM_ATTACK_ABNORMALSTATE,
  eATTACK_ITEM_ATTACK_DESIGN_RACE,
  eATTACK_ITEM_ATTACK_NONSKILL,
  eLANCE,
  eHAMMER,
  eDUAL,
  eBLADE,
  eBOOK,
  eKNUCKLE,
  eGUN,
  eDAMAGED_SWORD,
  eDAMAGED_MACE,
  eDAMAGED_ROD,
  eDAMAGED_HAMMER,
  eDAMAGED_LANCE,
  eDAMAGED_BOW,
  eDAMAGED_DUAL,
  eDAMAGED_BOOK,
  eDAMAGED_KNUCKLE,
  eDAMAGED_GUN,
  eDAMAGED_HPHALF_PHYSICS,
  eDAMAGED_HPHALF_MAGIC,
  eATTACK_FIRE,
  eATTACK_WATER,
  eATTACK_EARTH,
  eATTACK_WIND,
  eATTACK_LIGHT,
  eATTACK_DARK,
  eITEM_ATTACK_DESIGN,
  eDAMAGED_COVER,
  eABNORMALSTATE_ADD,
  ePURSMIT,
  eBLAZE_ARTS
}



export enum EBattleElementKind
{
  eNONE,
  eFIRE,
  eWATER,
  eEARTH,
  eWIND,
  eLIGHT,
  eDARK
}


export enum EBattleScoreKind
{
  eNONE,
  eBOSS_WIN,
  eTOTAL_DAMAGE,
  eBIG_DAMAGE,
  eUNDER_MOVE,
  eWEAK_ATACK,
  eCRITICAL_ATACK,
  eUSE_CHAR,
  eUSE_ITEM,
  eSKILL_FINISH,
  eITEM_FINISH,
  eALL_CHAR_SURVIVAL,
  eSKILL_CHAIN,
  eCHAR_DEAD,
  eOVER_MOVE,
  eANNIHILATION,
  eSLIP_POISON,
  eSLIP_BURN,
  eSLIP_FROZEN
}



export enum EBattleTargetAreaDefine
{
  eNONE,
  eONE,
  eALL,
  eUSER
}



export enum EBattleType
{
  eNONE,
  eACTIVESKILL,
  ePASSIVESKILL
}



export enum EBattleVoiceID
{
  eBATTLENORMALATTACK,
  eBATTLECRITICALATTACK,
  eBATTLECHANCE,
  eBATTLENORMALDAMAGE,
  eBATTLEBIGDMAGE,
  eBATTLEDEAD,
  eBATTLE2CHAIN,
  eBATTLE3CHAIN,
  eBATTLESKILL,
  eBATTLEUNI,
  eBATTLERECOVER,
  eBATTLESTART,
  eBATTLEJOIN,
  eBATTLEVICTORY,
  eBATTLEITEMUSE,
  eBATTLEATTACKSKILL,
  eBATTLESUPPORTSKILL,
  eBATTLESTART2,
  eBATTLESMALLAPPEAL,
  eBATTLELERGEAPPEAL,
  eBATTLESPECIALSKILL
}


export enum eBombKind
{
  Normal,
  Freeze,
  Grow,
  Wind,
  EnumMax
}



export enum eBombLevel
{
  Lv1,
  Lv2,
  Lv3,
  EnumMax
}



export enum EButtonKind
{
  eNORMAL,
  eDECIDE,
  eCANCEL
}



export enum ECategory
{
  eNONE = 0,
  eMATERIAL = 11,
  eRECOVERY = 12,
  eBOMB = 13,
  eSUPPORT = 14,
  eTOOL = 0xF,
  eFOOD = 0x10,
  eUNIQUE = 17,
  eWEAPON = 20,
  eSHIELD = 21,
  eHELM = 0x1F,
  eARMOR = 0x20,
  eACCESSORY = 40,
  eGROW_CHARA = 50,
  eGROW_WEAPON = 51,
  eGROW_ARMOR = 52,
  eGROW_ACCESSORY = 53,
  eGROW_STONE = 54,
  eGROW_OTHER = 55,
  eGROW_BLAZE_ARTS = 56
}



export enum ECharaMakePartKind
{
  eNAME,
  eGENDER,
  eSKIN,
  eFACE,
  eHAIR
}



export enum eChatTab
{
  Useful,
  Communication,
  Field,
  Battle,
  Stamp,
  Log,
  EnumMax
}



export enum eChatType
{
  Phrase,
  Stamp,
  System
}



export enum ECinemaCommand
{
  eMAIN_CIRCLE = 1,
  eCALL_CIRCLE,
  eTASK_CIRCLE,
  eIF_CIRCLE,
  eLOOP_CIRCLE,
  eEND_CIRCLE,
  eANIMECAMERAEND,
  eANIMECAMERASTART,
  eBATTLEACTIONMEMBER,
  eBATTLEACTIONMEMBERWEAPON,
  eBATTLEBG,
  eBATTLEBOSSMEMBER,
  eBATTLECAMERAFOV,
  eBATTLECAMERAREPOSITIONNOW,
  eBATTLECAMERASHAKE,
  eBATTLECAMERAUPDATEOFF,
  eBATTLECAMERAUPDATEON,
  eBATTLECOVEREDMEMBER,
  eBATTLECOVEREDNUM,
  eBATTLECOVERMEMBER,
  eBATTLEDAMAGEPROCESS,
  eBATTLEDAMAGEPROCESSPURSUIT,
  eBATTLEDAMAGERESULT,
  eBATTLEMEMBERDISPOFF,
  eBATTLEMEMBERDISPOFFALL,
  eBATTLEMEMBERDISPON,
  eBATTLEMEMBERDISPONALL,
  eBATTLEMEMBERFACE,
  eBATTLEMEMBERHUDOFF,
  eBATTLEMEMBERHUDOFFALL,
  eBATTLEMEMBERHUDON,
  eBATTLEMEMBERHUDONALL,
  eBATTLEMEMBERIDLE,
  eBATTLEMEMBERIDLEQUEUED,
  eBATTLEMEMBERLOCKOFF,
  eBATTLEMEMBERLOCKOFFALL,
  eBATTLEMEMBERLOCKON,
  eBATTLEMEMBERWEAPONOFF,
  eBATTLEMEMBERWEAPONON,
  eBATTLERECOVERYPROCESS,
  eBATTLEREVIVEPROCESS,
  eBATTLETARGETCOUNT,
  eBATTLETARGETDAMAGE,
  eBATTLETARGETMEMBER,
  eBATTLEUIDISPOFF,
  eBATTLEUIDISPON,
  eBOSSNAME,
  eCALL,
  eCAMERAMOTIONBLUROFF,
  eCAMERAMOTIONBLURON,
  eCINEMAPLAY,
  eDISPLAYOFF,
  eDISPLAYON,
  eEFFECTPLAY,
  eESCAPEENEMY,
  eESCAPEENEMYPROCESS,
  eESCAPEGUEST,
  eFINISH,
  eINCLUDE,
  eJOINENEMY,
  eNORMALATTACK_DAMAGEDELETE,
  eOBJECTADDPOSITION,
  eOBJECTANIMATIONLOAD,
  eOBJECTANIMATIONPLAY,
  eOBJECTANIMATIONWAIT,
  eOBJECTANIMATIONWAITTIME,
  eOBJECTANIMATIONWAITPLAY,
  eOBJECTANIMECAMERALOCK,
  eOBJECTBUSYOFF,
  eOBJECTBUSYON,
  eOBJECTBUSYWAIT,
  eOBJECTCREATE,
  eOBJECTCHILDRENDISPOFF,
  eOBJECTCHILDRENDISPON,
  eOBJECTDISPOFF,
  eOBJECTDISPOFFSCALE,
  eOBJECTDISPON,
  eOBJECTDISPONSCALE,
  eOBJECTFREE,
  eOBJECTLINK,
  eOBJECTLOAD,
  eOBJECTLOOKAT,
  eOBJECTLOOKATLINK,
  eOBJECTLOOKATLOCK,
  eOBJECTMOVETO,
  eOBJECTMOVETOCOVER,
  eOBJECTMOVEWAIT,
  eOBJECTMOVETOZERO,
  eOBJECTPARALLELMOVETO,
  eOBJECTPOSITIONLOCK,
  eOBJECTPOSITIONREMOVE,
  eOBJECTROTATIONTO,
  eOBJECTROTATIONREMOVE,
  ePURSUIT,
  eSEPLAY,
  eSKILLSTART,
  eSTATEICON,
  eSTEAL,
  eSTRATEGYCHANGE,
  eTASK,
  eTIMESCALE,
  eTIMESCALEOFF,
  eTIMESCALEON,
  eUIINFORMATION,
  eUISKILLNAMEENEMYOFF,
  eUISKILLNAMEENEMYON,
  eUISKILLNAMEOFF,
  eUISKILLNAMEON,
  eWAITTIME,
  eBATTLEMULTIDAMAGEPROCESS,
  eISREVIVE,
  eBATTLESPRECOVERYPROCESS,
  eVOICEPLAY,
  eBATTLEMEMBERSHIELDOFF,
  eBATTLEMEMBERSHIELDON,
  eITEMEFFECT,
  eITEMEFFECTCOUNT,
  eCINEMATELOP,
  eBATTLESPDAMAGEPROCESS,
  eEFFECTSERIF,
  eBATTLESTATEDAMAGEPROCESS
}



export enum ECinemaExcelCommand
{
  eANIMATION_PLAY = 1,
  eEFFECT_PLAY_ACTION,
  eEFFECT_PLAY_WEAPON,
  eEFFECT_PLAY_WEAPON_RE,
  eEFFECT_PLAY_TARGET,
  eEFFECT_LOOK,
  eEFFECT_LOOK_ACTION,
  eEFFECT_LOOK_TARGET,
  eEFFECT_LOOK_LOOK_CAMERA,
  eEFFECT_MOVE_ACTION,
  eEFFECT_MOVE_WEAPON,
  eEFFECT_MOVE_WEAPON_RE,
  eEFFECT_MOVE_TARGET,
  eEFFECT_LINK_ACTION,
  eEFFECT_LINK_WEAPON,
  eEFFECT_LINK_WEAPON_RE,
  eEFFECT_LINK_TARGET,
  eACTMEM_MOVE,
  eSE_PLAY,
  eMEMBER_LOOK_AT,
  eACTMEM_DISPLAY_ON,
  eACTMEM_DISPLAY_OFF,
  eTGTMEM_DISPLAY_ON,
  eTGTMEM_DISPLAY_OFF,
  eALLMEM_DISPLAY_OFF,
  eWEAPON_DISPLAY_ON,
  eWEAPON_DISPLAY_OFF,
  eREVIVE_ANIMATION,
  eENEMY_BLOW,
  eDAMAGE,
  eRECOVERY,
  eSTATE,
  eREVIVE,
  eWAIT,
  eWAIT_ANIME,
  eFACE_CHANGE,
  eBETWEEN_PROCESS,
  eSKILLCAMERA_DELETE,
  eEFFECT_PLAY_FIND,
  eEFFECT_MOVE_FIND,
  eEFFECT_LINK_FIND,
  eANIMATION_PLAY_TARGET,
  eWAIT_ANIME_TARGET,
  eFACE_CHANGE_TARGET,
  eSKILLCAMERA_RELOAD,
  eVOICE_PLAY,
  eMULTI_DAMAGE,
  eSP_RECOVERY,
  eENEMY_HUD_OFF,
  eENEMY_HUD_ON
}



export enum EColorKind
{
  eNONE = 0,
  eBLACK = 1,
  eBROWN = 2,
  eGOLD = 3,
  ePURPLE = 4,
  eBLUE = 5,
  eGREEN = 6,
  eSILVER = 7,
  eNUM = 7
}



export enum ECommonUIKind
{
  eNONE,
  eALTER,
  eQUEST
}



export enum eConditionType
{
  None,
  TotalLv,
  CharaCnt,
  TargetChara,
  MinLv
}


export enum EControler
{
  OnlyPad = 1,
  OnlyTouch,
  Both
}



export enum EDegreeMissonType
{
  eNONE = 0,
  eSUBJUGATION = 1,
  eALTER = 2,
  eEXPLORE = 4,
  eOTHER = 5,
  eRANKING = 6
}


export enum EDisplayCategory
{
  eNONE,
  eCOMMON,
  eTUTORIAL,
  eSHOP
}



export enum EDownloadResult
{
  eSUCCESS,
  eNOTFOUND,
  eFAILED,
  eVERSION_ERROR,
  eCANCEL,
  eTIMEOUT,
  eDISKFULL,
  eNONE
}


export enum EDownloadStatus
{
  eWAIT,
  eDOWNLOAD,
  eVERSIONCHECK
}



export enum eEffectKind
{
  None = -1,
  Touch_Hit,
  Touch_Track,
  Chara_Dash_Smoke,
  FilterRain,
  FilterSnow,
  Item_PickUp_Egg,
  Item_PickUp_Grass,
  Item_PickUp_Kinoko,
  Item_PickUp_Stone,
  Explosion001,
  Attack_001,
  Attack_002,
  Attack_003,
  Attack_004,
  Attack_005,
  Hit_001,
  HitRefraction,
  Magic_001,
  Splitter001,
  Splitter002,
  State007,
  State008,
  State009,
  Arrow_001,
  Field002,
  Field005,
  Item001,
  Item002,
  Aura_0000,
  Battle_Smoke,
  BushLeaves,
  Cure,
  CureCircle,
  CureCondition,
  CureConditionCircle,
  EffectLine001,
  IceExplosion001,
  Pick001,
  GrowExplosion001,
  Fairy001,
  Adv_001,
  Aura_0001,
  Aura_0002,
  Aura_0003,
  Yugami001,
  Chara_Pos,
  Boat_Droplets,
  Boat_Wait,
  Enemy_DispChange,
  GetRareItem,
  WindExplosion001,
  WindExplosion002,
  WindExplosion003,
  Chara_Dash_Water,
  EnumMax
}



export enum EElement
{
  eNONE,
  eFIRE,
  eWATER,
  eWIND,
  eEARTH,
  eLIGHT,
  eDARK,
  e4ELEMENTS
}



export enum EEmoticon
{
  eNONE,
  eEXCLAMATION,
  eQUESTION,
  eGRAD,
  eLIKE,
  eANGRY,
  eDISAPPOINTED,
  eWORRY
}



export enum eEnemyAuraSize
{
  None,
  Small,
  Midium,
  Large
}



export enum eEnemyKind
{
  None,
  Element,
  Goblin,
  Wolf,
  Ooze,
  Demon,
  Torrent,
  Kinoko,
  Frog,
  Rabbit,
  Spider,
  Hedgehog,
  Otter,
  Bird,
  Goat,
  Boar,
  Mermaid,
  Banshee,
  Fisherman,
  JackLantern,
  Cocatrice,
  Chimera,
  Giant,
  DragonFire,
  DragonWater,
  DragonEarth,
  DragonWind,
  Unknown,
  Durahan,
  Skeleton,
  Shief,
  Puni,
  Gohst,
  Mandragora,
  Ardora,
  Legend,
  Echinacea,
  Calendula,
  Blackcoch,
  Radiata,
  Lycoris,
  Golem,
  Slag,
  EnumMax
}



export enum eEnemySize
{
  Small,
  Medium,
  Large
}



export enum EEquipKind
{
  eMAIN,
  eSUB,
  eVISUAL
}



export enum EEquipPart
{
  eWEAPON,
  eSHILED,
  eHELM,
  eARMOR,
  eACC1,
  eACC2,
  eACC3,
  eNUM
}



export enum EEquipSkillTab
{
  eCHARA,
  eEQUIP,
  eBLAZE_ARTS
}



export enum EEquipStatusKind
{
  eNORMAL,
  eSKILL,
  eELEMENT,
  eNUM
}



export enum EEquipUIStatus
{
  eNOW,
  eCHANGE,
  eFAV
}



export enum EEquipVisualPart
{
  eHEAD,
  eHAIR,
  eHELM,
  eBODY,
  eWEAPON,
  eSHIELD,
  eRUCK,
  eACC_FACE,
  eACC_BACK,
  eNUM
}


export enum EEquipWindowKind
{
  eSTATUS,
  eNOW,
  eSELECT,
  eFAV,
  eVISUAL
}



export enum EEtherShopSort
{
  ePRODUCT_NAME,
  eETHER,
  eDF
}



export enum eExqPunStep
{
  None,
  LeaveRoom_Init,
  LeaveRoom_Wait,
  DisconnectPhoton_Init,
  DisconnectPhoton_Wait,
  ConnectPhoton_Init,
  ConnectPhoton_Wait,
  First_Init,
  First_Wait,
  RoomList_Wait,
  CreateRoom_Init,
  CreateRoom_Wait,
  SetRoomIndex_Init,
  SetRoomIndex_Wait,
  PlayerRoom_Wait,
  End
}



export enum EExqReadySTT
{
  eNONE,
  ePREPARATION,
  ePROGRESS,
  eEnumMax
}


export enum EExqRoomMode
{
  eNONE,
  eROOM_LIST,
  eROOM_PARTY,
  ePARTY_EDIT,
  eTRAINING,
  eEQUIPMENT
}



export enum eFaceKind
{
  Normal,
  Angry1,
  Smile1,
  Close1,
  Wink,
  Damage
}



export enum eFakeEnemy
{
  GrassWall,
  EnumMax
}



export enum eFEnemyAIState
{
  Init,
  Wait,
  FreeMove,
  ChaseMove,
  Discovery,
  LoseTrack,
  Escape,
  Disable
}


export enum eFEnemyAIType
{
  None,
  Chaser,
  Escaper,
  Fixed,
  Wander
}



export enum eFieldItemRange
{
  None,
  One,
  All,
  EnumMax
}



export enum eFieldItemUse
{
  None,
  HPHeal,
  Recovery,
  EnumMax
}


export enum eFieldNPC
{
  Talk,
  QuestOrder,
  QuestTarget,
  EnumMax
}



export enum EFilterKind
{
  eALL,
  eALTER_OK,
  eALTER_NG,
  eRECOV,
  eRECOV_BADSTATUS,
  eELEMENT_NONE,
  eELEMENT_FIRE,
  eELEMENT_WATER,
  eELEMENT_EARTH,
  eELEMENT_WIND,
  eELEMENT_DARK,
  eELEMENT_LIGHT,
  eSUPPORT,
  eOTHER,
  eALTER_EQUIP_OK,
  eALTER_EQUIP_NG,
  eEQUIP_ALCKEMY,
  eEQUIP_WITCH,
  eEQUIP_HEAVY_FIGHTER,
  eEQUIP_FIGHTER,
  eEQUIP_ARCHER,
  eEQUIP_BATTLER,
  eEQUIP_GUNNER,
  eGENDER_ALL,
  eGENDER_MALE,
  eGENDER_FEMALE,
  eACC_FACE,
  eACC_BACK,
  eSPECIAL_SKILL,
  eSPECIAL_SKILL_NONE,
  eLIMIT_BREAK,
  eMACE,
  eSWORD,
  eROD,
  eBOW,
  eLANCE,
  eSHIELD,
  eHELM,
  eARMOR,
  eACC,
  eMATERIAL,
  eBOMB,
  eHEAL,
  eFOOD,
  eTOOLS,
  eGROW_WEAPON,
  eGROW_ARMOR,
  eGROW_CHARA,
  eDEG_ALTER,
  eDEG_BATTLE,
  eDEG_FIELD,
  eDEG_OTHER,
  eMAN,
  eWOMAN,
  eMISSION_ACHIEVE,
  eMISSION_NOTACHIEVE,
  eMISSION_SUBJUGATION,
  eMISSION_ALTER,
  eMISSION_EXPLORE,
  eMISSION_OTHER,
  eEVENT,
  eBONUS,
  eROLE_NONE,
  eEQUIP_WEAPON,
  eEQUIP_ARMOR,
  eGROW,
  eITEM
}



export enum eFindItemKind
{
  Grass1,
  Grass2,
  Grass3,
  Egg1,
  Kinoko1,
  Kinoko2,
  Stone1,
  Stone2,
  Flower1,
  Flower2,
  Fish1,
  Bug1,
  Bug2,
  Fish2,
  Fish3,
  RainWater,
  Tree1,
  ToadOil,
  Quest1,
  Quest2,
  EnumMax
}



export enum EFlag
{
  eVISIT_AREA,
  eMAX
}


export enum eFlagMotion
{
  Alchemy,
  Climb,
  Row,
  RideWind,
  EnumMax
}



export enum eFootSoundKind
{
  Default,
  Stone,
  Bush,
  Wood,
  Water,
  EnumMax
}


export enum EFreeQuestSort
{
  eRWD_ETHER,
  eRNK_PT,
  eQUEST_NAME
}



export enum EFriendState
{
  eSTRANGER,
  eFRIEND,
  eREQUESTED,
  eRECEIVED,
  eMUTE
}




export enum EGachaKind
{
  eNONE,
  eMATERIAL,
  eHERO,
  eBEGINNER,
  eEQUIP
}



export enum EGachaResultKind
{
  eNORMAL,
  eRARE,
  eHRARE,
  eSRARE,
  eCERTAIN_RARE,
  eCERTAIN_HRARE,
  eCERTAIN_SRARE
}




export enum EGimmickKind
{
  eNONE,
  ePICKUP,
  eBREAK,
  eTALK,
  eEXPLODE,
  eCHECKENEMY,
  ePORTAL,
  eDOOR,
  eFREEZE,
  eSHIP,
  ePORTAL_ED,
  eCHECK,
  eGROW,
  eCLIMB,
  eCLIMBRETURN,
  eBOATMAN,
  eTALK_ORDER,
  eWIND,
  eCARRIAGE,
  eD_ENTER,
  eD_WAYPOINT,
  eD_FLOORMOVE,
  eTIDE,
  eQUEST_AREA,
  eTALK_QUEST,
  eRIDE_WIND
}



export enum EHelmKind
{
  eNORMAL,
  eHALF,
  eCOVER,
  eFACE,
  eFOOD,
  eHEAD
}


export enum eHuntReturnType
{
  None = -1,
  TimeElapsed,
  Immediate,
  Retire
}


export enum EInventoryKind
{
  eALL,
  eRUCK,
  eCONTAINER
}



export enum EInventoryMainTabKind
{
  eNONE,
  eALL,
  eWEAPON,
  eARMOR,
  eITEM,
  eGROW,
  eTOOL
}



export enum EItemDF
{
  eHealingSalve = 10490001,
  eFlam = 10790001,
  eMFlam = 10790002,
  eGFlam = 10790003,
  eAsgar = 10420001,
  eMAsgar = 10420002,
  eGAsgar = 10420003,
  eLacheln = 10430001,
  eMLacheln = 10430002,
  eGLacheln = 10430003,
  eDonorStone = 10480001,
  eMDonorStone = 10480002,
  eGDonorStone = 10480003,
  ePickel = 10440001,
  ePickelF = 10440002,
  eFishRod = 10460001,
  eFishRodF = 10460002,
  eGloveF = 10470001,
  eFairyPowder = 10510001,
  eWoodMace = 20090001,
  ePuniBall = 10350001,
  eUNI = 10200001
}



export enum EJobKind
{
  eNONE,
  eALCHEMIST,
  eWITCH,
  eHEAVY_FIGHTER,
  eFIGHTER,
  eARCHER,
  eMONK,
  eGUNNER,
  eNUM
}



export enum eJobSkillKind
{
  None,
  CoverFriend,
  CreateBreakObj,
  EnumMax
}



export enum eJobSkillKind_chara_viewer
{
  None,
  CoverFriend,
  CreateBreakObj,
  EnumMax
}



export enum eLayerKind
{
  Default,
  Unity_01,
  Unity_02,
  Unity_03,
  Unity_04,
  UI,
  Unity_06,
  Unity_07,
  Unity_08,
  Unity_09,
  Game_Animal,
  Game_Obj,
  Game_Filter,
  Game_Light,
  Game_Player,
  Unity_15,
  Unity_16,
  Game_PaperMap,
  Game_RaderMap,
  Game_Touch,
  NavMesh,
  NGUI_1,
  Unity_22,
  Unity_23,
  Adventur,
  Unity_25,
  Unity_26,
  NGUI_2,
  Game_Radar,
  Unity_29,
  System,
  Unity_31,
  EnumMax
}



export enum eMethodType
{
  None,
  Main,
  Call,
  Task,
  Include,
  EnumMax
}


export enum eMusicID
{
  None = -1,
  Title,
  Academy,
  Academy_Night,
  Map_DungeonDark,
  MyRoom,
  Map_DungeonMystical,
  Map_Prairie_Noon,
  Map_Prairie_Night,
  Map_Woods,
  Story_Heartwarming,
  Map_SnowMountain,
  Map_Volcano,
  Map_FairyTown,
  Town_Village,
  Town_Capital,
  Town_Sleepless,
  Town_FairyKing,
  Town_Archaeologist,
  Town_Shop,
  Town_Arena,
  Story_Sorrow,
  Story_Victory,
  Story_Departure,
  Tutorial,
  Riburumu,
  Erureumu,
  Story_Comical_Long,
  Story_Comical_Throw,
  Battle_Normal,
  Battle_MiddleBoss,
  Battle_Boss,
  Battle_Lose,
  Battle_Victory,
  Story_Emergency,
  Story_HouseOfChalk,
  Story_ScalCapTheme,
  Map_Riburumu_Dungeon,
  Map_Arterior_Dungeon,
  Story_HeroOfJustice,
  Story_CheerfulBar,
  Battle_Riburumu,
  Battle_Arteria,
  Erureumu_Dungeon,
  Erureumu_Battle,
  Erureumu_PirateShip,
  Dragon_Battle,
  Flares,
  Flares_Battle,
  FlaresDungeon,
  Flares_Boss_Battle,
  Hard_Battle,
  Hard_Field,
  Hard_Dungeon,
  Hard_Boss_Battle,
  Canus_Normal_Battle,
  Canus_Dungeon,
  Canus_Boss_Battle
}



export enum ENavMeshArea
{
  AllAreas = -1,
  Walkable,
  Not_Walkable,
  Jump,
  Water
}



export enum ENPCPlace
{
  eNONE,
  eACADEMY,
  eFIELD,
  eTOWN,
  eENUMMAX
}


export enum EOrder
{
  eASC,
  eDESC
}


export enum EOtherVoice
{
  eTITLE = 1,
  eCATCHCOPY
}


export enum eOverHeadIcon
{
  Discover,
  FirstAttack,
  EnemyInfo,
  PlayerInfo,
  EnumMax
}



export enum eOverHeadPos
{
  CharaHead,
  EnemyHead,
  CharaInfo,
  EnemyInfo,
  Battle_CharaHead,
  Battle_EnemyHead,
  EnumMax
}



export enum EParamKind
{
  eHP,
  eATK,
  eATK_MGC,
  eDEF,
  eDEF_MGC,
  eAGI,
  eNUM
}



export enum EPartyMode
{
  eNONE,
  eEDIT,
  eITEM_SET,
  eTRAINING,
  eEQUIPMENT
}



export enum EPhotonHashKey
{
  eRoomID,
  eRoomIndex,
  eAreaID,
  eRoomNameID,
  eUserIDList,
  eFriendIDList,
  eQuestID,
  eLeaderCharaIDList,
  eLeaderCharaLvList,
  eUserNameList,
  eRoomPlan,
  eExqReadySTT,
  eRoomComment,
  eExqOwnerUserID,
  eExqFriendOnly,
  eExqNGUserIDList,
  eExqRetireUserIDList,
  eExqLockQuestIDList,
  eEnumMax
}



export enum EPhotonHashKeyDataType
{
  eTypeObject,
  eTypeInteger,
  eTypelong,
  eTypeString
}



export enum ePickUpToolKind
{
  None = 0,
  Hand = 1,
  Pickaxe = 2,
  Fishing = 3,
  CatchNet = 4,
  Tree = 5,
  EnumMax = 6,
  RareItem = -1
}



export enum ePickupToolLook
{
  Normal = 1,
  Fairy
}



export enum EPlatformKind
{
  eUNKNOWN,
  eIOS,
  eANDROID,
  eWINDOWS,
  eEDITOR
}



export enum EPopupKind
{
  eDIALOG = 1,
  eINFOMATION,
  eGUIDE
}



export enum ePortal
{
  Field,
  WayPoint
}



export enum EPrivateRoom
{
  All = 0x0,
  Friend = 0x1
}


export enum EQuality
{
  eNONE,
  eD,
  eC,
  eB,
  eA,
  eS,
  eMAX
}



export enum EQuestBarStat
{
  eCLEAR,
  eLOCK,
  eUNLOCK,
  eACTIVE,
  eDISABLE
}



export enum EQuestCategory
{
  None,
  Main,
  Side,
  Sub_Normal,
  Sub_Extra,
  Chara,
  Event_Special,
  Event_Normal,
  Event_Extra
}



export enum EQuestConditionKind
{
  eNONE = 0x0,
  eANYTIME = 0x1,
  eDAILY = 0x2,
  eFREE_QUEST_ALL = 0x3
}


export enum EQuestGroup
{
  None,
  Main,
  Chara,
  Side,
  Event,
  Normal,
  Ticket,
  Extra
}



export enum EQuestSTP
{
  OnOrder = 1,
  TryTarget,
  OnAcheive
}



export enum EQuestSTT
{
  Impossible = 1,
  Orderable,
  Ordering,
  Acheive,
  Discard
}


export enum EQuestType
{
  Subjugation = 5001,
  Battle,
  Quest,
  Alter,
  SkillChain,
  ActiveSkill,
  Delivery,
  Alchemy,
  Item,
  Pickup,
  Area,
  Place,
  Town,
  Dungeon,
  Touch,
  TalkItem,
  Talk,
  TalkDelivery
}




export enum EQuestTypeFilterKind
{
  eNONE = 0x0,
  eDELIVERY = 0x1,
  eGET = 0x2,
  eSUBJUGATION = 0x4,
  eFREE_QUEST_ALL = 0x7
}



export enum EquipStatusEnum
{
  NONE = 0,
  ATK = 2,
  SDEF = 4,
  MDEF = 5,
  SPD = 6,
  FIRE = 21,
  WATER = 22,
  EARTH = 23,
  WIND = 24,
  LIGHT = 25,
  DARK = 26
}


export enum eRaceKind
{
  None,
  Human_Male,
  Human_Female,
  EnumMax
}



export enum ERarity
{
  eNONE,
  eBRONDS,
  eSLIVER,
  eGOLD,
  eATLANTIS,
  eNUM
}


export enum eRecipeType
{
  Normal,
  Legend
}



export enum ERelationPunRoomMode
{
  eNONE,
  eREADY_LIST,
  eREADY_ROOM
}



export enum EResolutionLevel
{
  eNONE,
  eHIGH,
  eMIDDLE,
  eLOW
}



export enum ERewardTypeKind
{
  eNONE = 0x0,
  eMATERIAL = 0x1,
  eWEAPON = 0x2,
  eFOOD = 0x4,
  eITEM = 0x8,
  eFREE_QUEST_ALL = 0xF,
  eWEALTH = 0x10,
  eETHER_SHOP_ALL = 0x1F
}



export enum ERollKind
{
  eNONE,
  ePLAYABLE,
  eNPC,
  eMANNEQUIN
}


export enum ERoomFriendOnly
{
  eAll,
  eFriendOnly,
  eEnumMax
}



export enum EShopComKind
{
  eEQUIP = 1,
  eITEM,
  eHIGHGRADE,
  eOTHER,
  eCANDY
}


export enum EShopLimitKind
{
  eNONE,
  eONCE,
  eDAILY,
  eMONTHLY
}


export enum ESkinKind
{
  eNONE = 0,
  eWHITE = 1,
  eYELLOW = 2,
  eBROWN = 3,
  eBLACK = 4,
  eNUM = 4
}


export enum ESliderDirection
{
  eVERTICAL,
  eHORIZONTAL
}


export enum ESortKind
{
  eNO,
  eNAME,
  eQUALITY,
  eLEVEL,
  eATK,
  eATK_M,
  eATK_ALL,
  eDEF,
  eDEF_M,
  eSPECIAL_SKILL,
  eRANK,
  eCATEGORY,
  eHAVE,
  eSPD,
  eLOGIN,
  ePLAY,
  eGET,
  eEXP,
  ePOTION,
  eALTER,
  eALTER_EQUIP,
  eSPECIAL_SKILL_LV,
  eRARITY,
  eHP,
  eALTER_NEW,
  eELEMENT_FIRE,
  eELEMENT_WATER,
  eELEMENT_EARTH,
  eELEMENT_WIND,
  eELEMENT_DARK,
  eELEMENT_LIGHT,
  eEVENT,
  eBONUS
}



export enum eSoundID
{
  None = -1,
  system_011 = 252,
  system_010 = 102,
  system_009 = 101,
  system_008 = 100,
  system_007 = 99,
  system_006 = 98,
  system_005 = 97,
  system_004 = 96,
  system_003 = 95,
  system_002 = 94,
  system_001 = 93,
  system_000 = 92,
  popy_029 = 196,
  popy_023 = 195,
  popy_022 = 194,
  popy_019 = 193,
  menu_059 = 262,
  menu_058 = 261,
  menu_057 = 260,
  menu_056 = 259,
  menu_055 = 258,
  menu_054 = 200,
  menu_053 = 199,
  menu_052 = 198,
  menu_051 = 179,
  menu_050 = 178,
  menu_049 = 177,
  menu_048 = 176,
  menu_047 = 175,
  menu_046 = 174,
  menu_045 = 173,
  menu_044 = 172,
  menu_043 = 171,
  menu_042 = 170,
  menu_041 = 169,
  menu_040 = 168,
  menu_039 = 167,
  menu_038 = 166,
  menu_037 = 165,
  menu_036 = 164,
  menu_035 = 163,
  menu_034 = 162,
  menu_033 = 161,
  menu_032 = 116,
  menu_031 = 115,
  menu_030 = 114,
  menu_029 = 113,
  menu_028 = 112,
  menu_027 = 111,
  menu_026 = 91,
  menu_025 = 90,
  menu_024 = 89,
  menu_023 = 88,
  menu_022 = 87,
  menu_021 = 86,
  menu_019 = 85,
  menu_018 = 84,
  menu_017 = 83,
  menu_016 = 82,
  menu_015 = 0x7F,
  menu_014 = 126,
  menu_013 = 125,
  menu_012 = 81,
  menu_011 = 80,
  menu_010 = 79,
  menu_009 = 110,
  menu_008 = 109,
  menu_007 = 78,
  menu_006 = 77,
  menu_005 = 76,
  menu_004 = 75,
  menu_003 = 74,
  menu_002 = 73,
  menu_001 = 72,
  menu_000 = 71,
  field_069 = 270,
  field_068 = 269,
  field_067 = 268,
  field_066 = 267,
  field_065 = 266,
  field_064 = 265,
  field_063 = 264,
  field_062 = 263,
  field_061 = 257,
  field_060 = 0x100,
  field_059 = 0xFF,
  field_058 = 254,
  field_057 = 253,
  field_056 = 181,
  field_055 = 180,
  field_054 = 105,
  field_053 = 104,
  field_052 = 103,
  field_051 = 70,
  field_050 = 146,
  field_049 = 145,
  field_048 = 69,
  field_047 = 68,
  field_046 = 67,
  field_045 = 144,
  field_044 = 66,
  field_043 = 143,
  field_042 = 65,
  field_041 = 0x40,
  field_040 = 0x3F,
  field_039 = 62,
  field_038 = 61,
  field_037 = 142,
  field_036 = 60,
  field_035 = 59,
  field_034_2 = 58,
  field_034_1 = 57,
  field_034 = 141,
  field_033 = 140,
  field_032 = 56,
  field_031 = 121,
  field_030 = 55,
  field_029 = 54,
  field_028 = 53,
  field_027 = 52,
  field_026_2 = 139,
  field_026_1 = 138,
  field_025_2 = 51,
  field_025_1 = 50,
  field_024_2 = 137,
  field_024_1 = 136,
  field_023_2 = 135,
  field_023_1 = 134,
  field_022_2 = 49,
  field_022_1 = 48,
  field_021_2 = 133,
  field_021_1 = 132,
  field_020_2 = 47,
  field_020_1 = 46,
  field_019_2 = 45,
  field_019_1 = 44,
  field_018 = 131,
  field_017 = 43,
  field_016 = 130,
  field_015 = 42,
  field_014 = 41,
  field_013 = 40,
  field_012 = 39,
  field_011 = 38,
  field_010 = 37,
  field_009 = 36,
  field_008 = 35,
  field_007 = 129,
  field_006 = 34,
  field_005 = 33,
  field_004 = 0x80,
  field_003 = 0x20,
  field_002 = 0x1F,
  field_001 = 117,
  field_000 = 30,
  fairy_002 = 123,
  fairy_001 = 122,
  battle_101 = 251,
  battle_100 = 250,
  battle_099 = 249,
  battle_098 = 248,
  battle_097 = 247,
  battle_096 = 246,
  battle_095 = 245,
  battle_094 = 244,
  battle_093 = 243,
  battle_092 = 242,
  battle_091 = 241,
  battle_090 = 240,
  battle_089 = 239,
  battle_088 = 238,
  battle_087 = 237,
  battle_086 = 236,
  battle_085 = 235,
  battle_084 = 234,
  battle_083 = 233,
  battle_082 = 232,
  battle_081 = 231,
  battle_080 = 230,
  battle_079 = 229,
  battle_078 = 228,
  battle_077 = 227,
  battle_076 = 226,
  battle_075 = 225,
  battle_074 = 224,
  battle_073 = 223,
  battle_072 = 222,
  battle_071 = 221,
  battle_070 = 220,
  battle_069 = 219,
  battle_068 = 218,
  battle_067 = 217,
  battle_066 = 216,
  battle_065 = 215,
  battle_064 = 214,
  battle_063 = 213,
  battle_062 = 212,
  battle_061 = 211,
  battle_060 = 210,
  battle_059 = 209,
  battle_058 = 208,
  battle_057 = 207,
  battle_056 = 206,
  battle_055 = 205,
  battle_054 = 204,
  battle_053 = 203,
  battle_052 = 202,
  battle_051 = 201,
  battle_050 = 191,
  battle_049 = 190,
  battle_048 = 124,
  battle_047 = 160,
  battle_046 = 159,
  battle_045 = 158,
  battle_044 = 157,
  battle_043 = 156,
  battle_042 = 155,
  battle_041 = 154,
  battle_040 = 108,
  battle_039 = 107,
  battle_038 = 29,
  battle_037 = 28,
  battle_036 = 27,
  battle_035 = 26,
  battle_034 = 25,
  battle_033 = 24,
  battle_032 = 23,
  battle_031 = 22,
  battle_030 = 21,
  battle_029 = 153,
  battle_028 = 106,
  battle_027 = 152,
  battle_026 = 151,
  battle_025 = 150,
  battle_024 = 120,
  battle_023 = 119,
  battle_022 = 118,
  battle_021 = 20,
  battle_020 = 149,
  battle_019 = 19,
  battle_018 = 18,
  battle_017 = 148,
  battle_016 = 17,
  battle_015 = 0x10,
  battle_014 = 147,
  battle_013 = 0xF,
  battle_012 = 14,
  battle_011 = 13,
  battle_010 = 12,
  battle_009 = 11,
  battle_008 = 10,
  battle_007 = 9,
  battle_006 = 8,
  battle_005 = 7,
  battle_004 = 6,
  battle_003 = 5,
  battle_002 = 4,
  battle_001 = 3,
  battle_000 = 2,
  ADV_002 = 197,
  ADV_001 = 192,
  UI_Decide = 94,
  UI_Cancel = 95,
  UI_Select = 92,
  UI_Change = 93,
  UI_Bringin = 97,
  UI_Dismiss = 95,
  UI_ChangePage = 82
}



export enum eSpawnerKind
{
  Ignore,
  Animal,
  CharaMob,
  Enemy,
  Item,
  Kanban,
  Prefab,
  Talker,
  Portal,
  Gimmick,
  LocalGimmick,
  NPC,
  QuestArea,
  WindObject,
  SuperFairyCircle,
  EnumMax
}



export enum EStorageKind
{
  eNONE,
  eCONTAINER,
  eRUCK,
  eFIELD,
  eEQUIP,
  eSUBEQUIP,
  eVIS_EQUIP,
  eGACHA
}



export enum eStrategyKind
{
  eFullPower,
  eNormalAttack,
  eItemBan,
  eSkillBan,
  eInochiDaiji,
  eEnumMax,
  OpenList,
  eNone
}



export enum ESubCategory
{
  eALL = 0,
  eITEM_START = 1000,
  eSTONE = 1001,
  eCRYSTAL = 1002,
  eSOIL = 1003,
  eSAND = 1004,
  eLIQUID = 1005,
  eGELATIN = 1006,
  eGAS = 1007,
  eLEAF = 1008,
  eFLOWER = 1009,
  eBRANCH = 1010,
  eROOT = 1011,
  eBAMBOO = 1012,
  eEGG = 1013,
  eMUSHROOM = 1014,
  eDOWN = 1015,
  eBUG = 1016,
  eFISH = 1017,
  eSCALES = 1018,
  eMEAT = 1019,
  eSEA_URCHIN = 1020,
  eTREE_FRUIT = 1021,
  eFRUIT = 1022,
  eVEGETABLES = 0x3FF,
  eSHELLFISH = 0x400,
  eFUR = 1025,
  eFANG = 1026,
  eYARN = 1027,
  eCORE = 1028,
  eBONE = 1029,
  eIRON_SCRAP = 1030,
  eKAS = 1031,
  eMYSTERY = 1032,
  ePRECIOUS_METAL = 1033,
  eGENERAL_PURPOSE_FOODSTUFF = 1034,
  eATTACK_ITEM = 1035,
  eRICE = 1036,
  eCLOTH = 1037,
  eINGOT = 1038,
  eCHEMICALS = 1039,
  eAUTOMATA = 1040,
  eORDINARY_BOMB = 1041,
  eGROWTH_BOMB = 1042,
  eFROZEN_BOMB = 1043,
  ePICKEL = 1044,
  eINSECT_BITES = 1045,
  eFISHING = 1046,
  ePICKING_GLOVES = 1047,
  eWIND_BOMB = 1048,
  eRECOVERY = 1049,
  eBUFF = 1050,
  eSPECIAL = 1051,
  eGROW_CHARA = 1052,
  eGROW_SWORD = 1053,
  eGROW_HUMMER = 1054,
  eGROW_LANCE = 1055,
  eGROW_BOW = 1056,
  eGROW_ROD = 1057,
  eGROW_DUAL = 1058,
  eGROW_BLADE = 1059,
  eGROW_BOOK = 1060,
  eGROW_MACE = 1061,
  eGROW_KNACLE = 1062,
  eGROW_GUN = 1063,
  eGROW_SHIELD = 1064,
  eGROW_HELM = 1065,
  eGROW_BODY = 1066,
  eGROW_ACC = 1067,
  eGROW_EQUIP_ALL = 1068,
  eGROW_LIMIT_BREAK = 1069,
  ePAINT = 1070,
  eGRASS = 1071,
  eLOG = 1072,
  eVINE = 1073,
  eCLAW = 1074,
  eSKULL = 1075,
  eWING = 1076,
  eSCALES_POWDER = 1077,
  eNEST = 1078,
  eNORMAL_BOMBS = 1079,
  eMEAT_BASED_RICE = 1080,
  eVEGETABLE_BASED_RICE = 1081,
  eFISH_BASED_MEAL = 1082,
  eSOUP = 1083,
  eDRINK = 1084,
  eDESSERT = 1085,
  eBREAD_TYPE_MEAL = 1086,
  eRICE_BASED_MEAL = 1087,
  eLEATHER = 1088,
  eWOOD = 1089,
  eMILLING = 1090,
  eBODY_FLUID = 1091,
  eDROP = 1092,
  eSTATE_ABNORMALITY_RECOVERY = 1093,
  ePHILOSOPHY = 1094,
  eANTIQUE = 1095,
  eDEBUFF = 1096,
  eREVIVE = 1097,
  eITEM_END = 1098,
  eWEAPON_START = 2000,
  eSWORD = 2001,
  eHAMMER = 2002,
  eLANCE = 2003,
  eBOW = 2004,
  eROD = 2005,
  eDUAL = 2006,
  eBLADE = 2007,
  eBOOK = 2008,
  eMACE = 2009,
  eKNUCKLE = 2010,
  eGUN = 2011,
  eSHIELD = 2012,
  eWEAPON_END = 2013,
  eARMOR_START = 3000,
  eHELM = 3001,
  eBODY = 3002,
  eARMOR_END = 3003,
  eACCESSORY_START = 4000,
  eFACE = 4001,
  eBACK = 4002,
  eOTHER = 4003,
  eACCESSORY_END = 4004,
  ePAYMENT_START = 5000,
  ePAYMENT = 5001,
  ePAYMENT_END = 5002,
  eUNIQUE_START = 6000,
  eEMERALD_FLAGMEN = 6001,
  ePRIMROSE = 6002,
  eFAIRY_LANTERN = 6003,
  eSLIVER_COIN = 6004,
  eEARPLUG = 6005,
  eMARGINAL_STONE = 6006,
  eUNIQUE_END = 6007
}



export enum eSystemChat
{
  Join,
  Left,
  UseItem,
  Alchemy,
  Dead,
  FairyPowder,
  DungeonEnter,
  ExqOwnerInfo,
  ExqReady,
  ExqSelectedQuest,
  EnumMax
}



export enum ESystemVoiceID
{
  eLEVELUP,
  eLIMITBREAK,
  eSKILLGET,
  ePOWERUP,
  eQUESTBOARD,
  eQUEST_CLEAR,
  eALTER_COMPLETE,
  eALTER_SUCCESS,
  eRECIPE_DISCOVERY,
  eINTRODUCTION,
  eGREETING,
  eNICE_MEET_YOU,
  eGOODBY,
  eDO_OUT_BEST,
  eREADER,
  eTARU,
  eACADEMY,
  eGET_RARE
}



export enum eTimeKind
{
  T0002,
  T0204,
  T0406,
  T0608,
  T0810,
  T1012,
  T1214,
  T1416,
  T1618,
  T1820,
  T2022,
  T2224,
  EnumMax
}


export enum ETitleKind
{
  eNONE,
  eENEMY,
  eALTER,
  eDELIVER,
  eFIELD,
  eALL
}



export enum eTownExit
{
  Field,
  Town
}


export enum ETreasureTalkKind
{
  eREADY,
  eRUNNING,
  eDONE
}



export enum eTutorial
{
  None = -1,
  Main01_Academy001 = 0,
  Main02_Field001 = 1,
  Main03_Pickup001 = 2,
  Main03_Pickup004 = 3,
  Main03_Pickup002 = 4,
  Main03_Pickup003 = 5,
  Main04_Battle001 = 6,
  Main04_Battle002 = 7,
  Main04_Battle003 = 8,
  Main04_Battle004 = 9,
  Main04_Battle005 = 10,
  Main04_Battle006 = 11,
  Main04_Battle007 = 12,
  Main04_Battle008 = 13,
  Main04_Battle009 = 14,
  Main04_Battle009_2 = 0xF,
  Main04_Battle010 = 0x10,
  Main04_Battle010_2 = 17,
  Main04_Battle010_3 = 18,
  Main04_Battle011 = 19,
  Main05_Academy002 = 20,
  Main06_Alter001 = 21,
  Main06_Academy003 = 22,
  Main07_Gacha000 = 23,
  Main07_Gacha001 = 24,
  Main09_Composite = 25,
  Main10_Equip = 26,
  Main11_Quest = 27,
  Main12_QuestClear = 28,
  Main13_ManualItem = 29,
  Main14_Present = 30,
  First_Academy_Container = 0x1F,
  First_Shop = 0x20,
  First_HealItem = 33,
  First_TakeSKill = 34,
  First_Training = 35,
  First_Field_Fairy = 36,
  First_Unlock_CompositeItem = 37,
  First_CompositeItem = 38,
  First_Unlock_MultiPlay = 39,
  First_Field_MultiPlay = 40,
  First_Unlock_Restore = 41,
  First_Restore = 42,
  First_Gate_001 = 43,
  First_Dungeon_001 = 44,
  First_Unlock_CharaEdit = 45,
  First_UnlockChapter = 46,
  First_Bomb = 47,
  First_PartyEdit = 48,
  First_ChangeEquip = 49,
  First_CompositeForge = 50,
  First_Unlock_Training = 51,
  First_Unlock_Cooking = 52,
  First_Unlock_CompositeForge = 53,
  First_Unlock_ChangeSPSkill = 54,
  First_ChangeSPSkill = 55,
  First_Treasure = 56,
  First_Unlock_Container = 57,
  First_Container = 58,
  First_Unlock_HardMode = 59,
  EnumMax = 60,
  End_FieldTutorial = 19,
  End_AcademyTutorial = 27,
  End_ForceTutorial = 28,
  End_CBTForceTutorial = 29
}



export enum EWealthKind
{
  eCALL = 1,
  eETHER = 2,
  eTICKET = 3,
  eSPOON = 4,
  eEXCEED_PLAYER = 6,
  eEXCEED_03 = 7,
  eEXCEED_04 = 8,
  eEXCEED_05 = 9,
  eEXCEED_06 = 10,
  eREVIVETICKET = 11,
  eLIMITFLOOD = 86,
  eCONTRIBUTION = 9999
}



export enum EWeaponKind
{
  eNONE,
  eSWORD,
  eHAMMER,
  eLANCE,
  eBOW,
  eROD,
  eDUAL,
  eBLADE,
  eBOOK,
  eMACE,
  eKNUCKLE,
  eGUN,
  eSHIELD,
  eEnumMax
}



export enum eWeather
{
  Sun,
  Rain,
  AfterRain,
  Snow,
  Wind,
  EnumMax
}



export enum eInfoKind
{
  Pos,
  SpawnerKind,
  PosX,
  PosY,
  PosZ,
  RotX,
  RotY,
  RotZ,
  ControlFlag,
  OptionData,
  EnumMax
}


export enum eSpawnControlExec
{
  None,
  Appear,
  Erase
}



export enum eSpawnControlKind
{
  None,
  AreaUnlock,
  QuestClear,
  QuestOrder
}


