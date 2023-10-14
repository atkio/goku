export const defaultGraph = {
	"last_node_id": 92,
	"last_link_id": 147,
	"nodes": [
	  {
		"id": 7,
		"type": "KSampler",
		"pos": [
		  2077,
		  -574
		],
		"size": {
		  "0": 231.00924682617188,
		  "1": 256.2228698730469
		},
		"flags": {},
		"order": 15,
		"mode": 0,
		"inputs": [
		  {
			"name": "model",
			"type": "MODEL",
			"link": 140,
			"slot_index": 0
		  },
		  {
			"name": "positive",
			"type": "CONDITIONING",
			"link": 141
		  },
		  {
			"name": "negative",
			"type": "CONDITIONING",
			"link": 142,
			"slot_index": 2
		  },
		  {
			"name": "latent_image",
			"type": "LATENT",
			"link": 139,
			"slot_index": 3
		  },
		  {
			"name": "seed",
			"type": "INT",
			"link": 6,
			"widget": {
			  "name": "seed"
			}
		  }
		],
		"outputs": [
		  {
			"name": "LATENT",
			"type": "LATENT",
			"links": [
			  81
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "KSampler"
		},
		"widgets_values": [
		  11111,
		  "fixed",
		  20,
		  8,
		  "euler",
		  "normal",
		  1
		]
	  },
	  {
		"id": 4,
		"type": "CLIPSetLastLayer",
		"pos": [
		  -187,
		  612
		],
		"size": {
		  "0": 315,
		  "1": 58
		},
		"flags": {},
		"order": 9,
		"mode": 0,
		"inputs": [
		  {
			"name": "clip",
			"type": "CLIP",
			"link": 1
		  }
		],
		"outputs": [
		  {
			"name": "CLIP",
			"type": "CLIP",
			"links": [
			  2,
			  3
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "CLIPSetLastLayer"
		},
		"widgets_values": [
		  -2
		]
	  },
	  {
		"id": 6,
		"type": "CLIPTextEncode",
		"pos": [
		  331,
		  678
		],
		"size": {
		  "0": 391.23883056640625,
		  "1": 78.14339447021484
		},
		"flags": {},
		"order": 12,
		"mode": 0,
		"inputs": [
		  {
			"name": "clip",
			"type": "CLIP",
			"link": 3
		  }
		],
		"outputs": [
		  {
			"name": "CONDITIONING",
			"type": "CONDITIONING",
			"links": [
			  31
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "CLIPTextEncode"
		},
		"widgets_values": [
		  "(worst quality, low quality: 1.4), nsfw"
		],
		"color": "#322",
		"bgcolor": "#533"
	  },
	  {
		"id": 24,
		"type": "ControlNetApplyAdvanced",
		"pos": [
		  869,
		  -624
		],
		"size": {
		  "0": 244.9655303955078,
		  "1": 166
		},
		"flags": {},
		"order": 13,
		"mode": 0,
		"inputs": [
		  {
			"name": "positive",
			"type": "CONDITIONING",
			"link": 30
		  },
		  {
			"name": "negative",
			"type": "CONDITIONING",
			"link": 31
		  },
		  {
			"name": "control_net",
			"type": "CONTROL_NET",
			"link": 132
		  },
		  {
			"name": "image",
			"type": "IMAGE",
			"link": 133
		  }
		],
		"outputs": [
		  {
			"name": "positive",
			"type": "CONDITIONING",
			"links": [
			  56
			],
			"shape": 3,
			"slot_index": 0
		  },
		  {
			"name": "negative",
			"type": "CONDITIONING",
			"links": [
			  58
			],
			"shape": 3,
			"slot_index": 1
		  }
		],
		"properties": {
		  "Node name for S&R": "ControlNetApplyAdvanced"
		},
		"widgets_values": [
		  0.7000000000000001,
		  0,
		  1
		],
		"color": "#323",
		"bgcolor": "#535"
	  },
	  {
		"id": 2,
		"type": "VAELoader",
		"pos": [
		  2476.1828727587895,
		  -988.4174533544159
		],
		"size": {
		  "0": 385.8948669433594,
		  "1": 58
		},
		"flags": {},
		"order": 0,
		"mode": 0,
		"outputs": [
		  {
			"name": "VAE",
			"type": "VAE",
			"links": [
			  10
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "VAELoader"
		},
		"widgets_values": [
		  "kl-f8-anime2.ckpt"
		]
	  },
	  {
		"id": 35,
		"type": "ControlNetApplyAdvanced",
		"pos": [
		  1232,
		  -618
		],
		"size": {
		  "0": 238.8279266357422,
		  "1": 166
		},
		"flags": {},
		"order": 14,
		"mode": 0,
		"inputs": [
		  {
			"name": "positive",
			"type": "CONDITIONING",
			"link": 56
		  },
		  {
			"name": "negative",
			"type": "CONDITIONING",
			"link": 58
		  },
		  {
			"name": "control_net",
			"type": "CONTROL_NET",
			"link": 128
		  },
		  {
			"name": "image",
			"type": "IMAGE",
			"link": 134
		  }
		],
		"outputs": [
		  {
			"name": "positive",
			"type": "CONDITIONING",
			"links": [
			  141
			],
			"shape": 3,
			"slot_index": 0
		  },
		  {
			"name": "negative",
			"type": "CONDITIONING",
			"links": [
			  142
			],
			"shape": 3,
			"slot_index": 1
		  }
		],
		"properties": {
		  "Node name for S&R": "ControlNetApplyAdvanced"
		},
		"widgets_values": [
		  0.7000000000000001,
		  0,
		  1
		],
		"color": "#323",
		"bgcolor": "#535"
	  },
	  {
		"id": 56,
		"type": "ControlNetLoaderAdvanced",
		"pos": [
		  771,
		  -867
		],
		"size": {
		  "0": 580.231201171875,
		  "1": 73.22811126708984
		},
		"flags": {},
		"order": 1,
		"mode": 0,
		"inputs": [
		  {
			"name": "timestep_keyframe",
			"type": "TIMESTEP_KEYFRAME",
			"link": null
		  }
		],
		"outputs": [
		  {
			"name": "CONTROL_NET",
			"type": "CONTROL_NET",
			"links": [
			  132
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "ControlNetLoaderAdvanced"
		},
		"widgets_values": [
		  "control_v11p_sd15_openpose_fp16.safetensors"
		],
		"color": "#323",
		"bgcolor": "#535"
	  },
	  {
		"id": 36,
		"type": "ControlNetLoaderAdvanced",
		"pos": [
		  1168,
		  -747
		],
		"size": {
		  "0": 457.6212158203125,
		  "1": 58.22690200805664
		},
		"flags": {},
		"order": 2,
		"mode": 0,
		"inputs": [
		  {
			"name": "timestep_keyframe",
			"type": "TIMESTEP_KEYFRAME",
			"link": null
		  }
		],
		"outputs": [
		  {
			"name": "CONTROL_NET",
			"type": "CONTROL_NET",
			"links": [
			  128
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "ControlNetLoaderAdvanced"
		},
		"widgets_values": [
		  "control_v11f1p_sd15_depth_fp16.safetensors"
		],
		"color": "#323",
		"bgcolor": "#535"
	  },
	  {
		"id": 10,
		"type": "VAEDecode",
		"pos": [
		  2575.1828727587895,
		  -818.4174533544159
		],
		"size": {
		  "0": 210,
		  "1": 46
		},
		"flags": {},
		"order": 16,
		"mode": 0,
		"inputs": [
		  {
			"name": "samples",
			"type": "LATENT",
			"link": 81
		  },
		  {
			"name": "vae",
			"type": "VAE",
			"link": 10
		  }
		],
		"outputs": [
		  {
			"name": "IMAGE",
			"type": "IMAGE",
			"links": [
			  88
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "VAEDecode"
		}
	  },
	  {
		"id": 50,
		"type": "AnimateDiffCombine",
		"pos": [
		  2954,
		  -690
		],
		"size": {
		  "0": 315,
		  "1": 178
		},
		"flags": {},
		"order": 17,
		"mode": 0,
		"inputs": [
		  {
			"name": "images",
			"type": "IMAGE",
			"link": 88
		  }
		],
		"properties": {
		  "Node name for S&R": "AnimateDiffCombine"
		},
		"widgets_values": [
		  24,
		  0,
		  true,
		  "animate_diff",
		  "video/h264-mp4",
		  false
		]
	  },
	  {
		"id": 9,
		"type": "EmptyLatentImage",
		"pos": [
		  1190,
		  -362
		],
		"size": {
		  "0": 315,
		  "1": 106
		},
		"flags": {},
		"order": 8,
		"mode": 0,
		"inputs": [
		  {
			"name": "batch_size",
			"type": "INT",
			"link": 143,
			"widget": {
			  "name": "batch_size"
			}
		  }
		],
		"outputs": [
		  {
			"name": "LATENT",
			"type": "LATENT",
			"links": [
			  139
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "EmptyLatentImage"
		},
		"widgets_values": [
		  384,
		  768,
		  16
		]
	  },
	  {
		"id": 3,
		"type": "CLIPTextEncode",
		"pos": [
		  220,
		  340
		],
		"size": {
		  "0": 540.2289428710938,
		  "1": 275.2571105957031
		},
		"flags": {},
		"order": 11,
		"mode": 0,
		"inputs": [
		  {
			"name": "clip",
			"type": "CLIP",
			"link": 2
		  }
		],
		"outputs": [
		  {
			"name": "CONDITIONING",
			"type": "CONDITIONING",
			"links": [
			  30
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "CLIPTextEncode"
		},
		"widgets_values": [
		  "1 little girl, {{masterpiece}}, flat chestbest quality,{highres},solo,flat_chest,a girl white hair and blue pupil,detailed face,high ponytail,mecha clothes,robot girl,cool movement,sliver bodysuit,{filigree},delicate and (intricate) hair,((sliver)) and (broken) body,blue streaked hair,full body"
		],
		"color": "#232",
		"bgcolor": "#353"
	  },
	  {
		"id": 1,
		"type": "CheckpointLoaderSimpleWithNoiseSelect",
		"pos": [
		  -567,
		  514
		],
		"size": {
		  "0": 319.20001220703125,
		  "1": 122
		},
		"flags": {},
		"order": 5,
		"mode": 0,
		"outputs": [
		  {
			"name": "MODEL",
			"type": "MODEL",
			"links": [
			  138
			],
			"shape": 3,
			"slot_index": 0
		  },
		  {
			"name": "CLIP",
			"type": "CLIP",
			"links": [
			  1
			],
			"shape": 3,
			"slot_index": 1
		  },
		  {
			"name": "VAE",
			"type": "VAE",
			"links": null,
			"shape": 3
		  }
		],
		"properties": {
		  "Node name for S&R": "CheckpointLoaderSimpleWithNoiseSelect"
		},
		"widgets_values": [
		  "model.ckpt",
		  "sqrt_linear (AnimateDiff)"
		],
		"color": "#432",
		"bgcolor": "#653"
	  },
	  {
		"id": 81,
		"type": "ADE_AnimateDiffLoaderWithContext",
		"pos": [
		  1577,
		  -263
		],
		"size": {
		  "0": 315,
		  "1": 122
		},
		"flags": {},
		"order": 10,
		"mode": 0,
		"inputs": [
		  {
			"name": "model",
			"type": "MODEL",
			"link": 138
		  },
		  {
			"name": "context_options",
			"type": "CONTEXT_OPTIONS",
			"link": 137
		  },
		  {
			"name": "motion_lora",
			"type": "MOTION_LORA",
			"link": null
		  }
		],
		"outputs": [
		  {
			"name": "MODEL",
			"type": "MODEL",
			"links": [
			  140
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "ADE_AnimateDiffLoaderWithContext"
		},
		"widgets_values": [
		  "temporaldiff-v1-animatediff.safetensors",
		  "sqrt_linear (AnimateDiff)"
		]
	  },
	  {
		"id": 5,
		"type": "PrimitiveNode",
		"pos": [
		  1867,
		  -56
		],
		"size": {
		  "0": 210,
		  "1": 82
		},
		"flags": {},
		"order": 6,
		"mode": 0,
		"outputs": [
		  {
			"name": "INT",
			"type": "INT",
			"links": [
			  6
			],
			"slot_index": 0,
			"widget": {
			  "name": "seed"
			}
		  }
		],
		"title": "Seed",
		"properties": {},
		"widgets_values": [
		  11111,
		  "fixed"
		],
		"color": "#2a363b",
		"bgcolor": "#3f5159"
	  },
	  {
		"id": 82,
		"type": "ADE_AnimateDiffUniformContextOptions",
		"pos": [
		  1236,
		  -84
		],
		"size": {
		  "0": 315,
		  "1": 154
		},
		"flags": {},
		"order": 7,
		"mode": 0,
		"outputs": [
		  {
			"name": "CONTEXT_OPTIONS",
			"type": "CONTEXT_OPTIONS",
			"links": [
			  137
			],
			"shape": 3,
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "ADE_AnimateDiffUniformContextOptions"
		},
		"widgets_values": [
		  16,
		  4,
		  4,
		  "uniform",
		  false
		]
	  },
	  {
		"id": 77,
		"type": "LoadVideo",
		"pos": [
		  -720,
		  -933
		],
		"size": {
		  "0": 315,
		  "1": 723.86328125
		},
		"flags": {},
		"order": 3,
		"mode": 0,
		"outputs": [
		  {
			"name": "frames",
			"type": "IMAGE",
			"links": [
			  133
			],
			"shape": 3,
			"slot_index": 0
		  },
		  {
			"name": "frame_count",
			"type": "INT",
			"links": null,
			"shape": 3
		  }
		],
		"properties": {
		  "Node name for S&R": "LoadVideo"
		},
		"widgets_values": [
		  "video/pose_00001_.gif",
		  "image",
		  0,
		  500,
		  "/view?filename=pose_00001_.gif&type=input&subfolder=video&format=image%2Fgif"
		]
	  },
	  {
		"id": 79,
		"type": "LoadVideo",
		"pos": [
		  -301,
		  -747
		],
		"size": {
		  "0": 315,
		  "1": 754.625
		},
		"flags": {},
		"order": 4,
		"mode": 0,
		"outputs": [
		  {
			"name": "frames",
			"type": "IMAGE",
			"links": [
			  134
			],
			"shape": 3,
			"slot_index": 0
		  },
		  {
			"name": "frame_count",
			"type": "INT",
			"links": [
			  143
			],
			"shape": 3,
			"slot_index": 1
		  }
		],
		"properties": {
		  "Node name for S&R": "LoadVideo"
		},
		"widgets_values": [
		  "video/depth_00001_.gif",
		  "image",
		  0,
		  500,
		  "/view?filename=depth_00001_.gif&type=input&subfolder=video&format=image%2Fgif"
		]
	  }
	],
	"links": [
	  [
		1,
		1,
		1,
		4,
		0,
		"CLIP"
	  ],
	  [
		2,
		4,
		0,
		3,
		0,
		"CLIP"
	  ],
	  [
		3,
		4,
		0,
		6,
		0,
		"CLIP"
	  ],
	  [
		6,
		5,
		0,
		7,
		4,
		"INT"
	  ],
	  [
		10,
		2,
		0,
		10,
		1,
		"VAE"
	  ],
	  [
		30,
		3,
		0,
		24,
		0,
		"CONDITIONING"
	  ],
	  [
		31,
		6,
		0,
		24,
		1,
		"CONDITIONING"
	  ],
	  [
		56,
		24,
		0,
		35,
		0,
		"CONDITIONING"
	  ],
	  [
		58,
		24,
		1,
		35,
		1,
		"CONDITIONING"
	  ],
	  [
		81,
		7,
		0,
		10,
		0,
		"LATENT"
	  ],
	  [
		88,
		10,
		0,
		50,
		0,
		"IMAGE"
	  ],
	  [
		128,
		36,
		0,
		35,
		2,
		"CONTROL_NET"
	  ],
	  [
		132,
		56,
		0,
		24,
		2,
		"CONTROL_NET"
	  ],
	  [
		133,
		77,
		0,
		24,
		3,
		"IMAGE"
	  ],
	  [
		134,
		79,
		0,
		35,
		3,
		"IMAGE"
	  ],
	  [
		137,
		82,
		0,
		81,
		1,
		"CONTEXT_OPTIONS"
	  ],
	  [
		138,
		1,
		0,
		81,
		0,
		"MODEL"
	  ],
	  [
		139,
		9,
		0,
		7,
		3,
		"LATENT"
	  ],
	  [
		140,
		81,
		0,
		7,
		0,
		"MODEL"
	  ],
	  [
		141,
		35,
		0,
		7,
		1,
		"CONDITIONING"
	  ],
	  [
		142,
		35,
		1,
		7,
		2,
		"CONDITIONING"
	  ],
	  [
		143,
		79,
		1,
		9,
		0,
		"INT"
	  ]
	],
	"groups": [
	  {
		"title": "AnimateDiff",
		"bounding": [
		  753,
		  -931,
		  1590,
		  1049
		],
		"color": "#A88",
		"font_size": 24
	  },
	  {
		"title": "预处理",
		"bounding": [
		  -1391,
		  -1012,
		  1889,
		  1228
		],
		"color": "#3f789e",
		"font_size": 24
	  },
	  {
		"title": "生成图片",
		"bounding": [
		  -665,
		  312,
		  1483,
		  520
		],
		"color": "#8A8",
		"font_size": 24
	  },
	  {
		"title": "编码",
		"bounding": [
		  2399,
		  -1197,
		  1395,
		  769
		],
		"color": "#b58b2a",
		"font_size": 24
	  }
	],
	"config": {},
	"extra": {},
	"version": 0.4
  };