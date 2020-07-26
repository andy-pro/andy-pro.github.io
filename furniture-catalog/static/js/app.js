/*
 * client side
 *
 * Furniture catalog example
 * Мебельщикам всех стран посвящается!!!
 * Backbone
 * Underscore
 * <a href="xyz"> SPA type link
 * <a data-bypass href="xyz"> regular link
 *
 * andy-pro 2016
 */

/*
backcat = ('Выбрать другую кухню', 'Выбрать другую кухню', 'Выбрать другой шкаф-купе', 'Выбрать другую прихожую', 'Выбрать другую гостиную', 'Выбрать другую офисную', 'Выбрать другую детскую', 'Выбрать другое разное')
*/

var file_list = {
  "Кухня классика": {
    "Andrey Bolohov": {
      "Кухня классика": {
        "titular": "_IMGP0008.jpg",
        "images": [
          "IMGP0003.jpg",
          "IMGP0004.jpg",
          "IMGP0005.jpg",
          "IMGP0006.jpg",
          "IMGP0007.jpg",
          "IMGP0009.jpg",
          "IMGP0012.jpg",
          "_IMGP0008.jpg"
        ]
      }
    },
    "Борис Зоологическая 89": {
      "Кухня классика": {
        "titular": "_IMGP6761.JPG",
        "images": [
          "IMGP6757.JPG",
          "IMGP6758.JPG",
          "IMGP6759.JPG",
          "IMGP6760.JPG",
          "_IMGP6761.JPG"
        ]
      }
    },
    "ГБ21": {
      "Кухня классика": {
        "titular": "_IMGP5049.jpg",
        "images": [
          "IMGP5048.jpg",
          "_IMGP5049.jpg"
        ]
      }
    },
    "Женя Костылев Ясиноватая": {
      "Кухня классика": {
        "titular": "_DSCN0376.JPG",
        "images": [
          "DSCN0372.JPG",
          "DSCN0380.JPG",
          "DSCN0381.JPG",
          "DSCN0382.JPG",
          "DSCN0383.JPG",
          "DSCN0384.JPG",
          "DSCN0386.JPG",
          "DSCN0388.JPG",
          "DSCN0389.JPG",
          "DSCN0390.JPG",
          "_DSCN0376.JPG"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Кухня классика": {
        "titular": "_IMGP6814.JPG",
        "images": [
          "DSCN0220.JPG",
          "DSCN0221.JPG",
          "DSCN0223.JPG",
          "IMGP6802.JPG",
          "IMGP6803.JPG",
          "IMGP6805.JPG",
          "IMGP6807.JPG",
          "IMGP6808.JPG",
          "IMGP6809.JPG",
          "IMGP6810.JPG",
          "IMGP6811.JPG",
          "IMGP6812.JPG",
          "IMGP6815.JPG",
          "IMGP6816.JPG",
          "IMGP6817.JPG",
          "IMGP6818.JPG",
          "_IMGP6814.JPG"
        ]
      },
      "Кухня классика 2": {
        "titular": "_DSCN0002.JPG",
        "images": [
          "DSCN0007.JPG",
          "DSCN0008.JPG",
          "DSCN0010.JPG",
          "DSCN0011.JPG",
          "DSCN0012.JPG",
          "DSCN0013.JPG",
          "DSCN0014.JPG",
          "DSCN0015.JPG",
          "DSCN0016.JPG",
          "DSCN0017.JPG",
          "DSCN0018.JPG",
          "DSCN0019.JPG",
          "DSCN0020.JPG",
          "_DSCN0002.JPG"
        ]
      }
    },
    "Кошелюк СА": {
      "Кухня классика дача": {
        "titular": "_IMGP5044.JPG",
        "images": [
          "IMGP5042.JPG",
          "IMGP5043.JPG",
          "IMGP5045.JPG",
          "IMGP5046.JPG",
          "IMGP5047.JPG",
          "_IMGP5044.JPG"
        ]
      },
      "Кухня классика дом": {
        "titular": "_IMGP5067.JPG",
        "images": [
          "IMGP5021.JPG",
          "IMGP5022.JPG",
          "IMGP5026.JPG",
          "IMGP5027.JPG",
          "IMGP5030.JPG",
          "IMGP5031.JPG",
          "IMGP5032.JPG",
          "IMGP5033.JPG",
          "IMGP5034.JPG",
          "IMGP5035.JPG",
          "IMGP5036.JPG",
          "IMGP5037.JPG",
          "IMGP5066.JPG",
          "IMGP5068.JPG",
          "IMGP5069.JPG",
          "IMGP5070.JPG",
          "IMGP5071.JPG",
          "IMGP5072.JPG",
          "IMGP5073.JPG",
          "IMGP5074.JPG",
          "IMGP5075.JPG",
          "IMGP5076.JPG",
          "IMGP5077.JPG",
          "IMGP5078.JPG",
          "IMGP5079.JPG",
          "IMGP5080.JPG",
          "IMGP5081.JPG",
          "IMGP5082.JPG",
          "IMGP5083.JPG",
          "IMGP5084.JPG",
          "_IMGP5067.JPG"
        ]
      }
    },
    "Кравчук Дима": {
      "Кухня классика": {
        "titular": "DSCN0446.JPG",
        "images": [
          "DSCN0446.JPG",
          "DSCN0447.JPG",
          "DSCN0449.JPG",
          "DSCN0450.JPG",
          "DSCN0451.JPG",
          "DSCN0452.JPG",
          "DSCN0453.JPG",
          "DSCN0454.JPG",
          "DSCN0455.JPG",
          "DSCN0456.JPG",
          "DSCN0457.JPG",
          "DSCN0459.JPG",
          "DSCN0460.JPG",
          "DSCN0461.JPG",
          "DSCN0462.JPG"
        ]
      }
    },
    "Крымский Ясиноватая": {
      "Кухня классика": {
        "titular": "_IMGP6756.JPG",
        "images": [
          "IMGP6732.JPG",
          "IMGP6733.JPG",
          "IMGP6734.JPG",
          "IMGP6735.JPG",
          "IMGP6736.JPG",
          "IMGP6737.JPG",
          "IMGP6738.JPG",
          "IMGP6740.JPG",
          "IMGP6741.JPG",
          "IMGP6742.JPG",
          "IMGP6743.JPG",
          "IMGP6745.JPG",
          "IMGP6746.JPG",
          "IMGP6747.JPG",
          "IMGP6748.JPG",
          "IMGP6749.JPG",
          "IMGP6750.JPG",
          "IMGP6751.JPG",
          "IMGP6752.JPG",
          "IMGP6753.JPG",
          "IMGP6754.JPG",
          "_IMGP6756.JPG"
        ]
      }
    },
    "Львов_Светлана_Григоровича_4": {
      "Кухня классика": {
        "titular": "_IMG_20181224_200243.jpg",
        "images": [
          "IMG_20181219_215048.jpg",
          "IMG_20181219_215059.jpg",
          "IMG_20181219_215122.jpg",
          "IMG_20181219_215137.jpg",
          "IMG_20181224_200209.jpg",
          "IMG_20181224_200253.jpg",
          "IMG_20181224_200307.jpg",
          "IMG_20181224_200319.jpg",
          "IMG_20181224_200407.jpg",
          "IMG_20181224_200419.jpg",
          "IMG_20181224_200429.jpg",
          "IMG_20181224_200508.jpg",
          "IMG_20190104_151439.jpg",
          "IMG_20190104_151446.jpg",
          "IMG_20190104_151520.jpg",
          "IMG_20190104_151825.jpg",
          "IMG_20190104_151837.jpg",
          "IMG_20190104_151900.jpg",
          "IMG_20190104_151957.jpg",
          "IMG_20190104_152444.jpg",
          "IMG_20190112_173324.jpg",
          "_IMG_20181224_200243.jpg"
        ]
      }
    },
    "РККА-5-24": {
      "Кухня классика": {
        "titular": "_IMGP4537.JPG",
        "images": [
          "IMGP4538.JPG",
          "IMGP4539.JPG",
          "IMGP4540.JPG",
          "IMGP4541.JPG",
          "_IMGP4537.JPG"
        ]
      }
    },
    "Саша Шаповал Скотоватая": {
      "Кухня классика": {
        "titular": "_IMGP5463.JPG",
        "images": [
          "IMGP5457.JPG",
          "IMGP5458.JPG",
          "IMGP5459.JPG",
          "IMGP5460.JPG",
          "IMGP5461.JPG",
          "IMGP5462.JPG",
          "IMGP5464.JPG",
          "IMGP5465.JPG",
          "IMGP5466.JPG",
          "IMGP5467.JPG",
          "IMGP5469.JPG",
          "IMGP5470.JPG",
          "IMGP5471.JPG",
          "IMGP5472.JPG",
          "IMGP5474.JPG",
          "_IMGP5463.JPG"
        ]
      }
    },
    "Сергей-Ильича-20-211": {
      "Кухня классика": {
        "titular": "_IMGP5182.JPG",
        "images": [
          "IMGP5179.JPG",
          "IMGP5180.JPG",
          "IMGP5183.JPG",
          "IMGP5184.JPG",
          "IMGP5185.JPG",
          "IMGP5186.JPG",
          "IMGP5187.JPG",
          "IMGP5188.JPG",
          "_IMGP5182.JPG"
        ]
      }
    },
    "Тёща": {
      "Кухня классика": {
        "titular": "_IMGP3300.JPG",
        "images": [
          "IMGP3301.JPG",
          "IMGP3302.JPG",
          "IMGP3303.JPG",
          "IMGP3304.JPG",
          "IMGP3305.JPG",
          "_IMGP3300.JPG"
        ]
      }
    },
    "Фролова": {
      "Кухня классика": {
        "titular": "_IMGP4949.JPG",
        "images": [
          "IMGP4950.JPG",
          "IMGP4951.JPG",
          "IMGP4952.JPG",
          "IMGP4953.JPG",
          "IMGP4954.JPG",
          "IMGP4955.JPG",
          "IMGP4956.JPG",
          "IMGP4957.JPG",
          "IMGP4958.JPG",
          "IMGP4959.JPG",
          "IMGP4960.JPG",
          "_IMGP4949.JPG"
        ]
      }
    }
  },
  "Кухня модерн": {
    "Andrey Bolohov": {
      "Кухня модерн": {
        "titular": "DSC00125.JPG",
        "images": [
          "DSC00125.JPG",
          "DSC00127.JPG",
          "DSC00128.JPG"
        ]
      }
    },
    "Алексей Текстильщик": {
      "Кухня модерн": {
        "titular": "_IMGP6173.JPG",
        "images": [
          "IMGP6165.JPG",
          "IMGP6166.JPG",
          "IMGP6167.JPG",
          "IMGP6168.JPG",
          "IMGP6169.JPG",
          "IMGP6170.JPG",
          "IMGP6171.JPG",
          "IMGP6172.JPG",
          "IMGP6174.JPG",
          "IMGP6175.JPG",
          "IMGP6176.JPG",
          "IMGP6177.JPG",
          "IMGP6178.JPG",
          "IMGP6179.JPG",
          "IMGP6180.JPG",
          "IMGP6181.JPG",
          "IMGP6182.JPG",
          "IMGP6183.JPG",
          "IMGP6184.JPG",
          "IMGP6185.JPG",
          "IMGP6186.JPG",
          "IMGP6187.JPG",
          "IMGP6188.JPG",
          "IMGP6189.JPG",
          "IMGP6190.JPG",
          "IMGP6191.JPG",
          "_IMGP6173.JPG"
        ]
      }
    },
    "Алексей Топаз": {
      "Кухня модерн": {
        "titular": "_DSCN0960.JPG",
        "images": [
          "DSCN0941.JPG",
          "DSCN0943.JPG",
          "DSCN0945.JPG",
          "DSCN0948.JPG",
          "DSCN0949.JPG",
          "DSCN0950.JPG",
          "DSCN0951.JPG",
          "DSCN0952.JPG",
          "DSCN0954.JPG",
          "DSCN0956.JPG",
          "DSCN0963.JPG",
          "_DSCN0960.JPG"
        ]
      }
    },
    "Алик": {
      "Кухня модерн": {
        "titular": "_IMGP5812.jpg",
        "images": [
          "IMGP5789.jpg",
          "IMGP5790.jpg",
          "IMGP5791.jpg",
          "IMGP5792.jpg",
          "IMGP5793.jpg",
          "IMGP5794.jpg",
          "IMGP5795.jpg",
          "IMGP5796.jpg",
          "IMGP5797.jpg",
          "IMGP5798.jpg",
          "IMGP5799.jpg",
          "IMGP5800.jpg",
          "IMGP5801.jpg",
          "IMGP5803.jpg",
          "IMGP5805.jpg",
          "IMGP5806.jpg",
          "IMGP5807.jpg",
          "IMGP5808.jpg",
          "IMGP5809.jpg",
          "IMGP5810.jpg",
          "IMGP5811.jpg",
          "IMGP5815.jpg",
          "IMGP5816.jpg",
          "IMGP5817.jpg",
          "IMGP5818.jpg",
          "_IMGP5812.jpg"
        ]
      }
    },
    "Алла Шевченко 18": {
      "Кухня модерн": {
        "titular": "_IMGP6012.jpg",
        "images": [
          "IMGP6010.jpg",
          "IMGP6011.jpg",
          "IMGP6014.jpg",
          "IMGP6015.jpg",
          "IMGP6016.jpg",
          "IMGP6017.jpg",
          "IMGP6018.jpg",
          "IMGP6019.jpg",
          "IMGP6020.jpg",
          "IMGP6021.jpg",
          "IMGP6022.jpg",
          "IMGP6023.jpg",
          "IMGP6024.jpg",
          "IMGP6025.jpg",
          "IMGP6026.jpg",
          "IMGP6027.jpg",
          "IMGP6028.jpg",
          "IMGP6029.jpg",
          "IMGP6030.jpg",
          "IMGP6031.jpg",
          "IMGP6033.jpg",
          "IMGP6034.jpg",
          "IMGP6035.jpg",
          "IMGP6036.jpg",
          "_IMGP6012.jpg"
        ]
      }
    },
    "Братуха": {
      "Кухня модерн": {
        "titular": "_IMGP5429.jpg",
        "images": [
          "IMGP5426.jpg",
          "IMGP5427.jpg",
          "IMGP5428.jpg",
          "IMGP5431.jpg",
          "IMGP5432.jpg",
          "IMGP5434.jpg",
          "IMGP5435.jpg",
          "IMGP5436.jpg",
          "IMGP5437.jpg",
          "IMGP5438.jpg",
          "IMGP5439.jpg",
          "IMGP5440.jpg",
          "IMGP5441.jpg",
          "IMGP5442.jpg",
          "IMGP5443.jpg",
          "IMGP5445.jpg",
          "IMGP5446.jpg",
          "IMGP5447.jpg",
          "IMGP5448.jpg",
          "IMGP5449.jpg",
          "IMGP5450.jpg",
          "IMGP5451.jpg",
          "IMGP5452.jpg",
          "IMGP5453.jpg",
          "IMGP5454.jpg",
          "IMGP5456.jpg",
          "_IMGP5429.jpg"
        ]
      }
    },
    "Валентина Гвардейка": {
      "Кухня модерн": {
        "titular": "_IMGP5848.JPG",
        "images": [
          "IMGP5824.JPG",
          "IMGP5825.JPG",
          "IMGP5826.JPG",
          "IMGP5827.JPG",
          "IMGP5828.JPG",
          "IMGP5829.JPG",
          "IMGP5830.JPG",
          "IMGP5831.JPG",
          "IMGP5832.JPG",
          "IMGP5833.JPG",
          "IMGP5834.JPG",
          "IMGP5835.JPG",
          "IMGP5836.JPG",
          "IMGP5837.JPG",
          "IMGP5838.JPG",
          "IMGP5839.JPG",
          "IMGP5840.JPG",
          "IMGP5841.JPG",
          "IMGP5843.JPG",
          "IMGP5844.JPG",
          "IMGP5845.JPG",
          "IMGP5846.JPG",
          "IMGP5847.JPG",
          "_IMGP5848.JPG"
        ]
      }
    },
    "Виталик Краснооктябрьская": {
      "Кухня модерн": {
        "titular": "_IMGP7172.JPG",
        "images": [
          "IMGP7173.JPG",
          "IMGP7175.JPG",
          "IMGP7176.JPG",
          "IMGP7177.JPG",
          "IMGP7178.JPG",
          "IMGP7179.JPG",
          "IMGP7180.JPG",
          "IMGP7181.JPG",
          "IMGP7182.JPG",
          "IMGP7183.JPG",
          "_IMGP7172.JPG"
        ]
      }
    },
    "Детсад Лариса Викторовна": {
      "Кухня модерн": {
        "titular": "_IMGP6913.JPG",
        "images": [
          "IMGP6911.JPG",
          "IMGP6912.JPG",
          "IMGP6914.JPG",
          "IMGP6915.JPG",
          "IMGP6916.JPG",
          "IMGP6917.JPG",
          "IMGP6918.JPG",
          "IMGP6919.JPG",
          "IMGP6920.JPG",
          "IMGP6921.JPG",
          "_IMGP6913.JPG"
        ]
      }
    },
    "Женя косметолог": {
      "Кухня модерн": {
        "titular": "_IMGP6088.jpg",
        "images": [
          "IMGP6086.jpg",
          "IMGP6087.jpg",
          "IMGP6089.jpg",
          "IMGP6090.jpg",
          "IMGP6091.jpg",
          "IMGP6092.jpg",
          "IMGP6093.jpg",
          "IMGP6094.jpg",
          "IMGP6095.jpg",
          "IMGP6096.jpg",
          "IMGP6097.jpg",
          "IMGP6098.jpg",
          "IMGP6099.jpg",
          "IMGP6100.jpg",
          "IMGP6101.jpg",
          "IMGP6102.jpg",
          "IMGP6103.jpg",
          "IMGP6104.jpg",
          "IMGP6105.jpg",
          "IMGP6106.jpg",
          "IMGP6107.jpg",
          "IMGP6108.jpg",
          "IMGP6122.jpg",
          "IMGP6123.jpg",
          "IMGP6124.jpg",
          "IMGP6125.jpg",
          "IMGP6126.jpg",
          "IMGP6127.jpg",
          "IMGP6128.jpg",
          "IMGP6129.jpg",
          "IMGP6130.jpg",
          "IMGP6131.jpg",
          "IMGP6132.jpg",
          "IMGP6133.jpg",
          "_IMGP6088.jpg"
        ]
      }
    },
    "Женя Лидиевка": {
      "Кухня модерн": {
        "titular": "_IMGP5546.JPG",
        "images": [
          "IMGP5539.JPG",
          "IMGP5540.JPG",
          "IMGP5541.JPG",
          "IMGP5543.JPG",
          "IMGP5544.JPG",
          "IMGP5545.JPG",
          "IMGP5547.JPG",
          "IMGP5548.JPG",
          "IMGP5549.JPG",
          "IMGP5550.JPG",
          "IMGP5551.JPG",
          "IMGP5552.JPG",
          "IMGP5553.JPG",
          "IMGP5554.JPG",
          "IMGP5555.JPG",
          "IMGP5556.JPG",
          "_IMGP5546.JPG"
        ]
      }
    },
    "Ирина Степановна Варейкиса 10": {
      "Кухня модерн": {
        "titular": "DSCN0132.JPG",
        "images": [
          "DSCN0132.JPG",
          "DSCN0133.JPG",
          "DSCN0134.JPG",
          "DSCN0138.JPG",
          "DSCN0145.JPG",
          "DSCN0147.JPG",
          "DSCN0148.JPG",
          "DSCN0149.JPG",
          "DSCN0150.JPG",
          "DSCN0152.JPG",
          "DSCN0155.JPG",
          "DSCN0156.JPG",
          "DSCN0157.JPG",
          "DSCN0158.JPG",
          "DSCN0159.JPG",
          "DSCN0160.JPG",
          "DSCN0161.JPG",
          "DSCN0162.JPG",
          "DSCN0163.JPG",
          "DSCN0170.JPG",
          "DSCN0198.JPG",
          "DSCN0203.JPG",
          "DSCN0204.JPG"
        ]
      }
    },
    "Катя Топаз": {
      "Кухня модерн": {
        "titular": "_IMGP5387.JPG",
        "images": [
          "IMGP5379.JPG",
          "IMGP5380.JPG",
          "IMGP5381.JPG",
          "IMGP5382.JPG",
          "IMGP5383.JPG",
          "IMGP5384.JPG",
          "imgp5385.jpg",
          "IMGP5386.JPG",
          "IMGP5388.JPG",
          "IMGP5389.JPG",
          "IMGP5390.JPG",
          "IMGP5391.JPG",
          "IMGP5392.JPG",
          "IMGP5393.JPG",
          "IMGP5394.JPG",
          "IMGP5395.JPG",
          "IMGP5396.JPG",
          "IMGP5397.JPG",
          "IMGP5398.JPG",
          "IMGP5400.JPG",
          "IMGP5401.JPG",
          "IMGP5978.JPG",
          "IMGP5979.JPG",
          "IMGP5980.JPG",
          "IMGP5981.JPG",
          "_IMGP5387.JPG"
        ]
      }
    },
    "Лиля": {
      "Кухня модерн": {
        "titular": "_IMGP5363.JPG",
        "images": [
          "IMGP5364.JPG",
          "IMGP5365.JPG",
          "IMGP5366.JPG",
          "IMGP5367.JPG",
          "IMGP5368.JPG",
          "IMGP5369.JPG",
          "IMGP5370.JPG",
          "IMGP5371.JPG",
          "IMGP5372.JPG",
          "IMGP5373.JPG",
          "IMGP5374.JPG",
          "IMGP5375.JPG",
          "IMGP5376.JPG",
          "IMGP5378.JPG",
          "_IMGP5363.JPG"
        ]
      }
    },
    "Лузина 12-51": {
      "Кухня модерн": {
        "titular": "_IMGP6212.JPG",
        "images": [
          "IMGP6211.JPG",
          "IMGP6213.JPG",
          "IMGP6214.JPG",
          "IMGP6215.JPG",
          "IMGP6216.JPG",
          "IMGP6217.JPG",
          "IMGP6218.JPG",
          "IMGP6219.JPG",
          "IMGP6220.JPG",
          "IMGP6221.JPG",
          "IMGP6222.JPG",
          "IMGP6223.JPG",
          "IMGP6224.JPG",
          "IMGP6225.JPG",
          "IMGP6226.JPG",
          "IMGP6227.JPG",
          "IMGP6228.JPG",
          "IMGP6229.JPG",
          "IMGP6230.JPG",
          "IMGP6231.JPG",
          "_IMGP6212.JPG"
        ]
      }
    },
    "Лузина 14-39": {
      "Кухня модерн": {
        "titular": "_IMGP5623.JPG",
        "images": [
          "IMGP5619.JPG",
          "IMGP5620.JPG",
          "IMGP5621.JPG",
          "IMGP5622.JPG",
          "IMGP5624.JPG",
          "IMGP5625.JPG",
          "IMGP5626.JPG",
          "IMGP5627.JPG",
          "IMGP5628.JPG",
          "IMGP5629.JPG",
          "IMGP5630.JPG",
          "IMGP5631.JPG",
          "IMGP5632.JPG",
          "IMGP5633.JPG",
          "IMGP5634.JPG",
          "IMGP5635.JPG",
          "IMGP5636.JPG",
          "IMGP5637.JPG",
          "IMGP5638.JPG",
          "_IMGP5623.JPG"
        ]
      }
    },
    "Люда Авдеевка": {
      "Кухня модерн": {
        "titular": "_IMGP6853.JPG",
        "images": [
          "IMGP6848.JPG",
          "IMGP6849.JPG",
          "IMGP6851.JPG",
          "IMGP6852.JPG",
          "IMGP6854.JPG",
          "IMGP6855.JPG",
          "IMGP6856.JPG",
          "IMGP6857.JPG",
          "IMGP6858.JPG",
          "IMGP6859.JPG",
          "IMGP6860.JPG",
          "imgp6861.jpg",
          "IMGP6862.JPG",
          "IMGP6863.JPG",
          "IMGP6864.JPG",
          "IMGP6865.JPG",
          "IMGP6867.JPG",
          "IMGP6868.JPG",
          "IMGP6869.JPG",
          "IMGP6870.JPG",
          "IMGP6871.JPG",
          "xxx0056.jpg",
          "_IMGP6853.JPG"
        ]
      }
    },
    "Наташа Магистральный": {
      "Кухня модерн": {
        "titular": "_IMGP5558.JPG",
        "images": [
          "IMGP5557.JPG",
          "IMGP5559.JPG",
          "IMGP5560.JPG",
          "IMGP5561.JPG",
          "_IMGP5558.JPG"
        ]
      }
    },
    "Олег Телецентр": {
      "Кухня модерн": {
        "titular": "_IMGP6821.JPG",
        "images": [
          "IMGP6819.JPG",
          "IMGP6820.JPG",
          "IMGP6822.JPG",
          "IMGP6823.JPG",
          "IMGP6824.JPG",
          "IMGP6825.JPG",
          "IMGP6826.JPG",
          "IMGP6827.JPG",
          "IMGP6828.JPG",
          "IMGP6829.JPG",
          "IMGP6830.JPG",
          "IMGP6831.JPG",
          "_IMGP6821.JPG"
        ]
      }
    },
    "Повар Людный Вова Кремл-23-5": {
      "Кухня модерн": {
        "titular": "_IMGP6239.JPG",
        "images": [
          "IMGP6234.JPG",
          "IMGP6235.JPG",
          "IMGP6236.JPG",
          "IMGP6237.JPG",
          "IMGP6238.JPG",
          "IMGP6240.JPG",
          "IMGP6241.JPG",
          "IMGP6242.JPG",
          "IMGP6244.JPG",
          "IMGP6245.JPG",
          "imgp6246.jpg",
          "IMGP6247.JPG",
          "_IMGP6239.JPG"
        ]
      }
    },
    "Пушкина9": {
      "Кухня модерн": {
        "titular": "_imgp27064.jpg",
        "images": [
          "imgp27061.jpg",
          "imgp27062.jpg",
          "imgp27063.jpg",
          "_imgp27064.jpg"
        ]
      }
    },
    "Саша София": {
      "Кухня модерн": {
        "titular": "_IMGP6890.JPG",
        "images": [
          "IMGP6886.JPG",
          "IMGP6887.JPG",
          "IMGP6888.JPG",
          "IMGP6889.JPG",
          "IMGP6891.JPG",
          "IMGP6892.JPG",
          "IMGP6893.JPG",
          "IMGP6895.JPG",
          "IMGP6896.JPG",
          "IMGP6897.JPG",
          "IMGP6898.JPG",
          "IMGP6899.JPG",
          "IMGP6900.JPG",
          "IMGP6901.JPG",
          "IMGP6902.JPG",
          "IMGP6903.JPG",
          "IMGP6904.JPG",
          "IMGP6905.JPG",
          "IMGP6906.JPG",
          "IMGP6907.JPG",
          "IMGP6908.JPG",
          "_IMGP6890.JPG"
        ]
      }
    },
    "Сергей Жукова-13-100": {
      "Кухня модерн": {
        "titular": "_IMGP6977.JPG",
        "images": [
          "IMGP6971.JPG",
          "IMGP6972.JPG",
          "IMGP6974.JPG",
          "IMGP6975.JPG",
          "IMGP6978.JPG",
          "IMGP6979.JPG",
          "IMGP6980.JPG",
          "IMGP6981.JPG",
          "IMGP6982.JPG",
          "IMGP6983.JPG",
          "IMGP6984.JPG",
          "IMGP6985.JPG",
          "IMGP6986.JPG",
          "IMGP6987.JPG",
          "IMGP6988.JPG",
          "IMGP6989.JPG",
          "IMGP6990.JPG",
          "IMGP6991.JPG",
          "IMGP6992.JPG",
          "IMGP6993.JPG",
          "IMGP7019.JPG",
          "IMGP7020.JPG",
          "IMGP7021.JPG",
          "_IMGP6977.JPG"
        ]
      }
    },
    "Татьяна Хорошово": {
      "Кухня модерн": {
        "titular": "_IMGP6381.JPG",
        "images": [
          "IMGP6335.JPG",
          "IMGP6336.JPG",
          "IMGP6337.JPG",
          "IMGP6339.JPG",
          "IMGP6340.JPG",
          "IMGP6341.JPG",
          "IMGP6342.JPG",
          "IMGP6343.JPG",
          "IMGP6344.JPG",
          "IMGP6346.JPG",
          "IMGP6347.JPG",
          "IMGP6348.JPG",
          "IMGP6349.JPG",
          "IMGP6350.JPG",
          "IMGP6351.JPG",
          "IMGP6352.JPG",
          "IMGP6353.JPG",
          "IMGP6354.JPG",
          "IMGP6355.JPG",
          "IMGP6356.JPG",
          "IMGP6357.JPG",
          "IMGP6358.JPG",
          "IMGP6359.JPG",
          "IMGP6360.JPG",
          "IMGP6361.JPG",
          "IMGP6362.JPG",
          "IMGP6363.JPG",
          "IMGP6364.JPG",
          "IMGP6365.JPG",
          "IMGP6366.JPG",
          "IMGP6367.JPG",
          "IMGP6368.JPG",
          "IMGP6369.JPG",
          "IMGP6370.JPG",
          "IMGP6371.JPG",
          "IMGP6372.JPG",
          "IMGP6373.JPG",
          "IMGP6374.JPG",
          "IMGP6375.JPG",
          "IMGP6376.JPG",
          "IMGP6377.JPG",
          "IMGP6378.JPG",
          "IMGP6379.JPG",
          "IMGP6380.JPG",
          "_IMGP6381.JPG"
        ]
      }
    },
    "Татьяна Шахтерская": {
      "Кухня модерн": {
        "titular": "_IMGP4883.JPG",
        "images": [
          "IMGP4884.JPG",
          "IMGP4885.JPG",
          "IMGP4886.JPG",
          "IMGP4887.JPG",
          "IMGP4888.JPG",
          "IMGP4889.JPG",
          "IMGP4890.JPG",
          "IMGP4891.JPG",
          "_IMGP4883.JPG"
        ]
      }
    },
    "Чижик": {
      "Кухня модерн": {
        "titular": "_IMGP6654.jpg",
        "images": [
          "IMGP6604.jpg",
          "IMGP6605.jpg",
          "IMGP6606.jpg",
          "IMGP6607.jpg",
          "IMGP6608.jpg",
          "IMGP6609.jpg",
          "IMGP6610.jpg",
          "IMGP6611.jpg",
          "IMGP6612.jpg",
          "IMGP6613.jpg",
          "IMGP6615.jpg",
          "IMGP6617.jpg",
          "IMGP6618.jpg",
          "IMGP6619.jpg",
          "IMGP6620.jpg",
          "IMGP6621.jpg",
          "IMGP6622.jpg",
          "IMGP6623.jpg",
          "IMGP6624.jpg",
          "IMGP6625.jpg",
          "IMGP6651.jpg",
          "IMGP6652.jpg",
          "IMGP6653.jpg",
          "IMGP6656.jpg",
          "IMGP6657.jpg",
          "IMGP6659.jpg",
          "_IMGP6654.jpg"
        ]
      },
      "Кухня модерн мама": {
        "titular": "_IMGP7189.JPG",
        "images": [
          "IMGP7184.JPG",
          "IMGP7185.JPG",
          "IMGP7186.JPG",
          "IMGP7187.JPG",
          "IMGP7188.JPG",
          "IMGP7190.JPG",
          "IMGP7191.JPG",
          "_IMGP7189.JPG"
        ]
      }
    },
    "Этюдная 18": {
      "Кухня модерн": {
        "titular": "_IMGP5773.JPG",
        "images": [
          "IMGP5772.JPG",
          "IMGP5774.JPG",
          "IMGP5775.JPG",
          "IMGP5776.JPG",
          "IMGP5777.JPG",
          "IMGP5778.JPG",
          "IMGP5779.JPG",
          "IMGP5780.JPG",
          "IMGP5781.JPG",
          "IMGP5783.JPG",
          "IMGP5784.JPG",
          "IMGP5785.JPG",
          "IMGP5786.JPG",
          "IMGP5787.JPG",
          "IMGP5788.JPG",
          "_IMGP5773.JPG"
        ]
      }
    },
    "Юля Бакины 12-53": {
      "Кухня модерн": {
        "titular": "_IMGP6682.JPG",
        "images": [
          "IMGP6643.JPG",
          "IMGP6645.JPG",
          "IMGP6647.JPG",
          "IMGP6648.JPG",
          "IMGP6649.JPG",
          "IMGP6650.JPG",
          "IMGP6679.JPG",
          "IMGP6680.JPG",
          "IMGP6681.JPG",
          "IMGP6683.JPG",
          "IMGP6684.JPG",
          "IMGP6686.JPG",
          "IMGP6687.JPG",
          "IMGP6688.JPG",
          "IMGP6689.JPG",
          "IMGP6690.JPG",
          "IMGP6691.JPG",
          "_IMGP6682.JPG"
        ]
      }
    },
    "Яна Кутузова 9-34 Гладковка": {
      "Кухня модерн": {
        "titular": "_IMGP5204.JPG",
        "images": [
          "IMGP5189.JPG",
          "IMGP5190.JPG",
          "IMGP5191.JPG",
          "IMGP5193.JPG",
          "IMGP5194.JPG",
          "IMGP5195.JPG",
          "IMGP5196.JPG",
          "IMGP5197.JPG",
          "IMGP5198.JPG",
          "IMGP5199.JPG",
          "IMGP5200.JPG",
          "IMGP5201.JPG",
          "IMGP5202.JPG",
          "IMGP5203.JPG",
          "IMGP5205.JPG",
          "_IMGP5204.JPG"
        ]
      }
    }
  },
  "Шкаф-купе": {
    "Алексей Текстильщик": {
      "Шкаф-купе": {
        "titular": "_IMGP6192.JPG",
        "images": [
          "IMGP6193.JPG",
          "_IMGP6192.JPG"
        ]
      }
    },
    "Алик": {
      "Шкаф-купе": {
        "titular": "_IMGP6154.jpg",
        "images": [
          "IMGP6138.jpg",
          "IMGP6139.jpg",
          "IMGP6140.jpg",
          "IMGP6142.jpg",
          "IMGP6143.jpg",
          "IMGP6144.jpg",
          "IMGP6145.jpg",
          "IMGP6147.jpg",
          "IMGP6148.jpg",
          "IMGP6149.jpg",
          "IMGP6150.jpg",
          "IMGP6151.jpg",
          "IMGP6152.jpg",
          "IMGP6153.jpg",
          "IMGP6155.jpg",
          "IMGP6156.jpg",
          "IMGP6157.jpg",
          "IMGP6158.jpg",
          "_IMGP6154.jpg"
        ]
      }
    },
    "Анатолий Заперевальный": {
      "Шкаф-купе": {
        "titular": "_IMGP5210.JPG",
        "images": [
          "IMGP5211.JPG",
          "IMGP5212.JPG",
          "IMGP5214.JPG",
          "IMGP5215.JPG",
          "IMGP5216.JPG",
          "_IMGP5210.JPG"
        ]
      }
    },
    "Анатолий Тимура 66": {
      "Шкаф-купе": {
        "titular": "_IMGP5988.JPG",
        "images": [
          "IMGP5986.JPG",
          "IMGP5987.JPG",
          "IMGP5989.JPG",
          "IMGP5990.JPG",
          "_IMGP5988.JPG"
        ]
      }
    },
    "Анна Шахтостроителей": {
      "Шкаф-купе": {
        "titular": "IMGP7144.JPG",
        "images": [
          "IMGP7144.JPG",
          "IMGP7145.JPG",
          "IMGP7146.JPG",
          "IMGP7147.JPG",
          "IMGP7148.JPG",
          "IMGP7149.JPG",
          "IMGP7150.JPG",
          "IMGP7151.JPG",
          "IMGP7152.JPG",
          "IMGP7153.JPG",
          "IMGP7154.JPG",
          "IMGP7155.JPG"
        ]
      }
    },
    "Аня кума": {
      "Шкаф-купе 1": {
        "titular": "_DSC_0265.jpg",
        "images": [
          "DSC_0267.jpg",
          "_DSC_0265.jpg"
        ]
      }
    },
    "Борис Зоологическая 89": {
      "Шкаф-купе": {
        "titular": "_IMGP6160.JPG",
        "images": [
          "IMGP6159.JPG",
          "IMGP6161.JPG",
          "IMGP6162.JPG",
          "IMGP6163.JPG",
          "IMGP6164.JPG",
          "_IMGP6160.JPG"
        ]
      }
    },
    "ВАЗ Андрей": {
      "Шкаф-купе": {
        "titular": "_IMGP5609.jpg",
        "images": [
          "IMGP5576.jpg",
          "IMGP5577.jpg",
          "IMGP5578.jpg",
          "IMGP5580.jpg",
          "IMGP5581.jpg",
          "IMGP5582.jpg",
          "IMGP5583.jpg",
          "IMGP5584.jpg",
          "IMGP5607.jpg",
          "IMGP5608.jpg",
          "IMGP5610.jpg",
          "IMGP5611.jpg",
          "IMGP5612.jpg",
          "IMGP5613.jpg",
          "_IMGP5609.jpg"
        ]
      }
    },
    "Валентина Лузина 55": {
      "Шкаф-купе": {
        "titular": "_IMGP6135.jpg",
        "images": [
          "IMGP6109.jpg",
          "IMGP6110.jpg",
          "IMGP6111.jpg",
          "IMGP6112.jpg",
          "IMGP6113.jpg",
          "IMGP6114.jpg",
          "IMGP6115.jpg",
          "IMGP6116.jpg",
          "IMGP6117.jpg",
          "IMGP6118.jpg",
          "IMGP6119.jpg",
          "IMGP6120.jpg",
          "IMGP6121.jpg",
          "_IMGP6135.jpg"
        ]
      }
    },
    "Детсад Лариса Викторовна": {
      "Шкаф-купе": {
        "titular": "IMGP7056.JPG",
        "images": [
          "IMGP7056.JPG",
          "IMGP7057.JPG",
          "IMGP7058.JPG",
          "IMGP7059.JPG",
          "IMGP7060.JPG"
        ]
      }
    },
    "Женя косметолог": {
      "Шкаф-купе": {
        "titular": "_IMGP6397.jpg",
        "images": [
          "IMGP6394.JPG",
          "IMGP6395.JPG",
          "IMGP6396.JPG",
          "IMGP6398.JPG",
          "IMGP6399.JPG",
          "IMGP6400.JPG",
          "_IMGP6397.jpg"
        ]
      }
    },
    "Женя Лидиевка": {
      "Шкаф-купе": {
        "titular": "_IMGP6074.jpg",
        "images": [
          "IMGP6067.jpg",
          "IMGP6068.jpg",
          "IMGP6071.jpg",
          "IMGP6072.jpg",
          "IMGP6073.jpg",
          "IMGP6075.jpg",
          "IMGP6076.jpg",
          "IMGP6078.jpg",
          "IMGP6080.jpg",
          "IMGP6081.jpg",
          "IMGP6082.jpg",
          "IMGP6083.jpg",
          "IMGP6084.jpg",
          "IMGP6085.jpg",
          "_IMGP6074.jpg"
        ]
      }
    },
    "Зоя Яковлевна": {
      "Шкаф-купе 1": {
        "titular": "_IMGP5737.JPG",
        "images": [
          "IMGP5716.JPG",
          "IMGP5717.JPG",
          "IMGP5719.JPG",
          "IMGP5723.JPG",
          "IMGP5724.JPG",
          "IMGP5725.JPG",
          "IMGP5726.JPG",
          "IMGP5727.JPG",
          "IMGP5728.JPG",
          "IMGP5730.JPG",
          "IMGP5733.JPG",
          "IMGP5735.JPG",
          "_IMGP5737.JPG"
        ]
      },
      "Шкаф-купе 2": {
        "titular": "_IMGP5755.JPG",
        "images": [
          "IMGP5740.JPG",
          "IMGP5741.JPG",
          "IMGP5742.JPG",
          "IMGP5744.JPG",
          "IMGP5745.JPG",
          "IMGP5746.JPG",
          "IMGP5747.JPG",
          "IMGP5748.JPG",
          "IMGP5751.JPG",
          "IMGP5752.JPG",
          "IMGP5753.JPG",
          "IMGP5756.JPG",
          "IMGP5758.JPG",
          "_IMGP5755.JPG"
        ]
      }
    },
    "Инна Егоровна": {
      "Шкаф-купе": {
        "titular": "_IMGP6037.JPG",
        "images": [
          "IMGP6038.JPG",
          "IMGP6039.JPG",
          "IMGP6040.JPG",
          "IMGP6041.JPG",
          "IMGP6042.JPG",
          "IMGP6043.JPG",
          "IMGP6044.JPG",
          "_IMGP6037.JPG"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Шкаф-купе 1": {
        "titular": "_DSCN0026.JPG",
        "images": [
          "DSCN0025.JPG",
          "DSC_0275.jpg",
          "DSC_0277.jpg",
          "_DSCN0026.JPG"
        ]
      }
    },
    "Катя Топаз": {
      "Шкаф-купе": {
        "titular": "_IMGP5971.JPG",
        "images": [
          "IMGP5961.JPG",
          "IMGP5962.JPG",
          "IMGP5963.JPG",
          "IMGP5967.JPG",
          "IMGP5968.JPG",
          "IMGP5969.JPG",
          "IMGP5973.JPG",
          "IMGP5974.JPG",
          "IMGP5975.JPG",
          "_IMGP5971.JPG"
        ]
      }
    },
    "Кошелюк СА": {
      "Шкаф-купе 1": {
        "titular": "_IMGP5020.JPG",
        "images": [
          "IMGP5008.JPG",
          "IMGP5009.JPG",
          "IMGP5010.JPG",
          "IMGP5011.JPG",
          "IMGP5013.JPG",
          "IMGP5014.JPG",
          "IMGP5015.JPG",
          "IMGP5016.JPG",
          "IMGP5017.JPG",
          "IMGP5018.JPG",
          "IMGP5019.JPG",
          "_IMGP5020.JPG"
        ]
      },
      "Шкаф-купе 2": {
        "titular": "_IMGP5023.JPG",
        "images": [
          "IMGP5024.JPG",
          "IMGP5025.JPG",
          "_IMGP5023.JPG"
        ]
      },
      "Шкаф-купе 3": {
        "titular": "_IMGP5058.JPG",
        "images": [
          "IMGP5057.JPG",
          "IMGP5059.JPG",
          "IMGP5060.JPG",
          "IMGP5061.JPG",
          "IMGP5062.JPG",
          "_IMGP5058.JPG"
        ]
      },
      "Шкаф-купе 4": {
        "titular": "_IMGP5003.JPG",
        "images": [
          "IMGP4996.JPG",
          "IMGP4997.JPG",
          "IMGP4998.JPG",
          "IMGP4999.JPG",
          "IMGP5000.JPG",
          "IMGP5001.JPG",
          "IMGP5002.JPG",
          "IMGP5004.JPG",
          "IMGP5006.JPG",
          "IMGP5007.JPG",
          "_IMGP5003.JPG"
        ]
      },
      "Шкаф-купе 5": {
        "titular": "_IMGP5089.JPG",
        "images": [
          "IMGP5088.JPG",
          "IMGP5095.JPG",
          "_IMGP5089.JPG"
        ]
      }
    },
    "Лев Абрамович": {
      "Шкаф-купе": {
        "titular": "_IMGP5639.JPG",
        "images": [
          "IMGP5637.JPG",
          "_IMGP5639.JPG"
        ]
      },
      "Шкаф-купе книжный": {
        "titular": "_IMGP5126.JPG",
        "images": [
          "IMGP5124.JPG",
          "IMGP5125.JPG",
          "IMGP5127.JPG",
          "IMGP5128.JPG",
          "_IMGP5126.JPG"
        ]
      }
    },
    "Лидия Пархом Текстильщик": {
      "Шкаф-купе": {
        "titular": "DSCN0463.JPG",
        "images": [
          "DSCN0463.JPG",
          "DSCN0464.JPG",
          "DSCN0465.JPG",
          "DSCN0466.JPG",
          "DSCN0467.JPG",
          "DSCN0468.JPG",
          "DSCN0469.JPG",
          "DSCN0470.JPG"
        ]
      }
    },
    "Львов_Светлана_Григоровича_4": {
      "Шкаф-купе": {
        "titular": "_IMG_20190226_153347.jpg",
        "images": [
          "IMG_20181219_215225.jpg",
          "IMG_20181219_215240.jpg",
          "IMG_20181231_200034.jpg",
          "IMG_20181231_200044.jpg",
          "IMG_20181231_200107.jpg",
          "IMG_20181231_200115.jpg",
          "IMG_20181231_200229.jpg",
          "IMG_20181231_200244.jpg",
          "IMG_20181231_200248.jpg",
          "IMG_20181231_200308.jpg",
          "IMG_20181231_200314.jpg",
          "IMG_20181231_200320.jpg",
          "IMG_20181231_200326.jpg",
          "IMG_20181231_200342.jpg",
          "IMG_20190104_191209.jpg",
          "IMG_20190104_191234.jpg",
          "IMG_20190226_153305.jpg",
          "IMG_20190226_153312.jpg",
          "IMG_20190226_153332.jpg",
          "_IMG_20190226_153347.jpg"
        ]
      }
    },
    "Олег Телецентр": {
      "Шкаф-купе 1": {
        "titular": "_IMGP6057.JPG",
        "images": [
          "IMGP6050.JPG",
          "IMGP6051.JPG",
          "IMGP6052.JPG",
          "IMGP6054.JPG",
          "IMGP6055.JPG",
          "_IMGP6057.JPG"
        ]
      },
      "Шкаф-купе 2": {
        "titular": "_IMGP6058.JPG",
        "images": [
          "IMGP6060.JPG",
          "IMGP6061.JPG",
          "IMGP6062.JPG",
          "IMGP6063.JPG",
          "IMGP6065.JPG",
          "IMGP6066.JPG",
          "_IMGP6058.JPG"
        ]
      }
    },
    "Саша Вахрушева 74": {
      "Шкаф-купе": {
        "titular": "_IMGP5357.JPG",
        "images": [
          "IMGP5352.JPG",
          "IMGP5353.JPG",
          "IMGP5354.JPG",
          "IMGP5355.JPG",
          "_IMGP5357.JPG"
        ]
      }
    },
    "Танюк Ира Лузина 5": {
      "Шкаф-купе": {
        "titular": "_IMGP6279.JPG",
        "images": [
          "IMGP6278.JPG",
          "IMGP6280.JPG",
          "IMGP6281.JPG",
          "IMGP6282.JPG",
          "IMGP6283.JPG",
          "IMGP6284.JPG",
          "_IMGP6279.JPG"
        ]
      }
    },
    "Татьяна Хорошово": {
      "Шкаф-купе в детской": {
        "titular": "_IMGP6382.JPG",
        "images": [
          "IMGP6291.JPG",
          "IMGP6303.JPG",
          "IMGP6304.JPG",
          "IMGP6308.JPG",
          "IMGP6386.JPG",
          "IMGP6387.JPG",
          "_IMGP6382.JPG"
        ]
      },
      "Шкаф-купе вход": {
        "titular": "_IMGP6692.JPG",
        "images": [
          "IMGP6693.JPG",
          "IMGP6694.JPG",
          "IMGP6695.JPG",
          "IMGP6696.JPG",
          "IMGP6697.JPG",
          "IMGP6698.JPG",
          "IMGP6699.JPG",
          "IMGP6707.JPG",
          "IMGP6708.JPG",
          "IMGP6709.JPG",
          "IMGP6710.JPG",
          "IMGP6711.JPG",
          "IMGP6712.JPG",
          "IMGP6713.JPG",
          "IMGP6714.JPG",
          "IMGP6715.JPG",
          "IMGP6716.JPG",
          "IMGP6717.JPG",
          "_IMGP6692.JPG"
        ]
      },
      "Шкаф-купе спальня": {
        "titular": "_IMGP6313.JPG",
        "images": [
          "IMGP6314.JPG",
          "IMGP6315.JPG",
          "IMGP6316.JPG",
          "IMGP6318.JPG",
          "IMGP6319.JPG",
          "IMGP6320.JPG",
          "IMGP6321.JPG",
          "IMGP6322.JPG",
          "IMGP6323.JPG",
          "IMGP6324.JPG",
          "IMGP6325.JPG",
          "_IMGP6313.JPG"
        ]
      },
      "Шкаф-купе цветы": {
        "titular": "_IMGP6700.JPG",
        "images": [
          "IMGP6701.JPG",
          "IMGP6702.JPG",
          "IMGP6703.JPG",
          "IMGP6704.JPG",
          "IMGP6705.JPG",
          "IMGP6706.JPG",
          "_IMGP6700.JPG"
        ]
      },
      "Шкаф-купе цоколь": {
        "titular": "_IMGP6329.JPG",
        "images": [
          "IMGP6286.JPG",
          "IMGP6287.JPG",
          "IMGP6288.JPG",
          "IMGP6290.JPG",
          "IMGP6328.JPG",
          "IMGP6333.JPG",
          "IMGP6334.JPG",
          "_IMGP6329.JPG"
        ]
      }
    },
    "Татьяна Шахтерская": {
      "Шкаф-купе": {
        "titular": "_IMGP4892.JPG",
        "images": [
          "IMGP4893.JPG",
          "IMGP4894.JPG",
          "IMGP4895.JPG",
          "_IMGP4892.JPG"
        ]
      }
    },
    "Яна Кутузова 9-34 Гладковка": {
      "Шкаф-купе": {
        "titular": "_IMGP5165.JPG",
        "images": [
          "IMGP5166.JPG",
          "IMGP5167.JPG",
          "IMGP5168.JPG",
          "IMGP5169.JPG",
          "IMGP5170.JPG",
          "IMGP5171.JPG",
          "IMGP5172.JPG",
          "IMGP5173.JPG",
          "IMGP5174.JPG",
          "IMGP5175.JPG",
          "IMGP5176.JPG",
          "IMGP5177.JPG",
          "IMGP5178.JPG",
          "_IMGP5165.JPG"
        ]
      }
    },
    "Яна Ленинский 33": {
      "Шкаф-купе 2": {
        "titular": "_imgp7134.jpg",
        "images": [
          "imgp7132.jpg",
          "imgp7133.jpg",
          "_imgp7134.jpg"
        ]
      }
    }
  },
  "Прихожая": {
    "Алик": {
      "Прихожая": {
        "titular": "_IMGP6881.JPG",
        "images": [
          "IMGP6878.JPG",
          "IMGP6879.JPG",
          "IMGP6880.JPG",
          "IMGP6882.JPG",
          "IMGP6883.JPG",
          "IMGP6885.JPG",
          "_IMGP6881.JPG"
        ]
      }
    },
    "Аня кума": {
      "Прихожая": {
        "titular": "_DSC_0262.jpg",
        "images": [
          "DSC_0263.jpg",
          "DSC_0264.jpg",
          "_DSC_0262.jpg"
        ]
      }
    },
    "ВАЗ Андрей": {
      "Прихожая": {
        "titular": "_IMGP5591.jpg",
        "images": [
          "IMGP5585.jpg",
          "IMGP5586.jpg",
          "IMGP5587.jpg",
          "IMGP5588.jpg",
          "IMGP5589.jpg",
          "IMGP5590.jpg",
          "IMGP5592.jpg",
          "IMGP5593.jpg",
          "IMGP5594.jpg",
          "IMGP5595.jpg",
          "IMGP5596.jpg",
          "IMGP5597.jpg",
          "imgp5598.jpg",
          "IMGP5599.jpg",
          "IMGP5600.jpg",
          "IMGP5601.jpg",
          "IMGP5602.jpg",
          "IMGP5603.jpg",
          "IMGP5604.jpg",
          "IMGP5605.jpg",
          "_IMGP5591.jpg"
        ]
      }
    },
    "Валентина Мотель": {
      "Прихожая": {
        "titular": "_IMGP5219.JPG",
        "images": [
          "IMGP5220.JPG",
          "IMGP5221.JPG",
          "IMGP5222.JPG",
          "_IMGP5219.JPG"
        ]
      }
    },
    "Игорь Челюскинцев 142": {
      "Прихожая": {
        "titular": "_IMGP6774.JPG",
        "images": [
          "IMGP6762.JPG",
          "IMGP6763.JPG",
          "IMGP6764.JPG",
          "IMGP6765.JPG",
          "IMGP6766.JPG",
          "IMGP6767.JPG",
          "IMGP6768.JPG",
          "IMGP6769.JPG",
          "IMGP6770.JPG",
          "IMGP6771.JPG",
          "IMGP6772.JPG",
          "IMGP6773.JPG",
          "_IMGP6774.JPG"
        ]
      }
    },
    "Лариса Владиславовна": {
      "Прихожая": {
        "titular": "_IMGP6257.JPG",
        "images": [
          "IMGP6251.JPG",
          "IMGP6252.JPG",
          "IMGP6253.JPG",
          "IMGP6254.JPG",
          "IMGP6256.JPG",
          "IMGP6258.JPG",
          "IMGP6259.JPG",
          "IMGP6260.JPG",
          "IMGP6261.JPG",
          "IMGP6262.JPG",
          "IMGP6263.JPG",
          "IMGP6264.JPG",
          "IMGP6265.JPG",
          "_IMGP6257.JPG"
        ]
      }
    },
    "Лузина 16-27": {
      "Прихожая": {
        "titular": "_IMGP5506.JPG",
        "images": [
          "IMGP5480.JPG",
          "IMGP5481.JPG",
          "IMGP5482.JPG",
          "IMGP5483.JPG",
          "IMGP5484.JPG",
          "IMGP5485.JPG",
          "IMGP5486.JPG",
          "IMGP5487.JPG",
          "IMGP5488.JPG",
          "IMGP5489.JPG",
          "IMGP5490.JPG",
          "IMGP5491.JPG",
          "IMGP5492.JPG",
          "IMGP5493.JPG",
          "IMGP5494.JPG",
          "IMGP5495.JPG",
          "IMGP5496.JPG",
          "IMGP5497.JPG",
          "IMGP5498.JPG",
          "IMGP5499.JPG",
          "IMGP5502.JPG",
          "IMGP5503.JPG",
          "IMGP5504.JPG",
          "IMGP5505.JPG",
          "IMGP5507.JPG",
          "IMGP5508.JPG",
          "IMGP5509.JPG",
          "IMGP5510.JPG",
          "IMGP5511.JPG",
          "IMGP5512.JPG",
          "IMGP5513.JPG",
          "IMGP5514.JPG",
          "IMGP5515.JPG",
          "IMGP5516.JPG",
          "IMGP5517.JPG",
          "IMGP5518.JPG",
          "IMGP5519.JPG",
          "IMGP5520.JPG",
          "IMGP5521.JPG",
          "IMGP5522.JPG",
          "IMGP5523.JPG",
          "IMGP5524.JPG",
          "IMGP5525.JPG",
          "IMGP5526.JPG",
          "IMGP5528.JPG",
          "IMGP5530.JPG",
          "IMGP5531.JPG",
          "IMGP5532.JPG",
          "_IMGP5506.JPG"
        ]
      }
    },
    "Людмила Кремл-29-44": {
      "Прихожая": {
        "titular": "_IMGP7006.JPG",
        "images": [
          "IMGP7005.JPG",
          "IMGP7007.JPG",
          "_IMGP7006.JPG"
        ]
      }
    },
    "Настя Патрикац": {
      "Прихожая": {
        "titular": "_IMGP4944.JPG",
        "images": [
          "IMGP4943.JPG",
          "IMGP4945.JPG",
          "IMGP4946.JPG",
          "IMGP4947.JPG",
          "IMGP4948.JPG",
          "_IMGP4944.JPG"
        ]
      }
    },
    "Наташа Магистральный": {
      "Прихожая": {
        "titular": "_IMGP5564.JPG",
        "images": [
          "IMGP5562.JPG",
          "_IMGP5564.JPG"
        ]
      }
    },
    "РККА-5-24": {
      "Прихожая": {
        "titular": "_IMGP4533.JPG",
        "images": [
          "IMGP4534.JPG",
          "IMGP4535.JPG",
          "IMGP4536.JPG",
          "_IMGP4533.JPG"
        ]
      }
    },
    "Саша София": {
      "Прихожая": {
        "titular": "DSCN0235.JPG",
        "images": [
          "DSCN0235.JPG",
          "DSCN0236.JPG",
          "DSCN0237.JPG",
          "DSCN0238.JPG",
          "DSCN0239.JPG",
          "DSCN0240.JPG",
          "DSCN0241.JPG"
        ]
      }
    },
    "Сергей Жукова-13-100": {
      "Прихожая": {
        "titular": "_IMGP7014.JPG",
        "images": [
          "IMGP7010.JPG",
          "IMGP7011.JPG",
          "IMGP7013.JPG",
          "IMGP7015.JPG",
          "IMGP7017.JPG",
          "IMGP7018.JPG",
          "_IMGP7014.JPG"
        ]
      }
    },
    "Фролова": {
      "Прихожая": {
        "titular": "_IMGP4961.JPG",
        "images": [
          "IMGP4962.JPG",
          "_IMGP4961.JPG"
        ]
      }
    },
    "Чижик": {
      "Прихожая": {
        "titular": "_IMGP6833.JPG",
        "images": [
          "IMGP6834.JPG",
          "IMGP6835.JPG",
          "IMGP6836.JPG",
          "IMGP6837.JPG",
          "IMGP6839.JPG",
          "imgp6841.jpg",
          "_IMGP6833.JPG"
        ]
      }
    },
    "Шекспира 5": {
      "Прихожая": {
        "titular": "DSCN0224.JPG",
        "images": [
          "DSCN0224.JPG",
          "DSCN0225.JPG",
          "DSCN0226.JPG",
          "DSCN0228.JPG",
          "DSCN0232.JPG",
          "DSCN0233.JPG"
        ]
      }
    }
  },
  "Гостиная": {
    "Инна Антипова-1-18": {
      "Гостиная": {
        "titular": "_IMGP7157.JPG",
        "images": [
          "IMGP7156.JPG",
          "IMGP7158.JPG",
          "IMGP7159.JPG",
          "IMGP7160.JPG",
          "IMGP7161.JPG",
          "IMGP7162.JPG",
          "IMGP7163.JPG",
          "_IMGP7157.JPG"
        ]
      }
    },
    "Лузина 16-27": {
      "Гостиная 1": {
        "titular": "_IMGP5136.JPG",
        "images": [
          "IMGP5123.JPG",
          "IMGP5129.JPG",
          "IMGP5130.JPG",
          "IMGP5131.JPG",
          "IMGP5132.JPG",
          "IMGP5137.JPG",
          "IMGP5138.JPG",
          "IMGP5139.JPG",
          "IMGP5140.JPG",
          "IMGP5142.JPG",
          "IMGP5143.JPG",
          "IMGP5144.JPG",
          "IMGP5145.JPG",
          "IMGP5146.JPG",
          "IMGP5147.JPG",
          "IMGP5148.JPG",
          "IMGP5149.JPG",
          "IMGP5150.JPG",
          "IMGP5151.JPG",
          "imgp5152.jpg",
          "IMGP5153.JPG",
          "IMGP5154.JPG",
          "IMGP5155.JPG",
          "IMGP5217.JPG",
          "IMGP5218.JPG",
          "_IMGP5136.JPG"
        ]
      },
      "Гостиная 2": {
        "titular": "_IMGP5098.JPG",
        "images": [
          "IMGP5104.JPG",
          "IMGP5106.JPG",
          "IMGP5111.JPG",
          "IMGP5115.JPG",
          "IMGP5116.JPG",
          "IMGP5118.JPG",
          "IMGP5120.JPG",
          "_IMGP5098.JPG"
        ]
      }
    }
  },
  "Офис": {
    "ГБ21": {
      "Офис": {
        "titular": "_IMGP6725.JPG",
        "images": [
          "IMGP6718.JPG",
          "IMGP6719.JPG",
          "IMGP6720.JPG",
          "IMGP6721.JPG",
          "IMGP6722.JPG",
          "IMGP6723.JPG",
          "IMGP6724.JPG",
          "IMGP6726.JPG",
          "IMGP6727.JPG",
          "_IMGP6725.JPG"
        ]
      }
    },
    "ДТЭК": {
      "Офис 306": {
        "titular": "_IMGP4458.jpg",
        "images": [
          "IMGP4457.jpg",
          "IMGP4459.jpg",
          "IMGP4460.jpg",
          "IMGP4461.jpg",
          "IMGP4462.jpg",
          "IMGP4463.jpg",
          "IMGP4464.jpg",
          "IMGP4465.jpg",
          "IMGP4473.jpg",
          "IMGP4474.jpg",
          "IMGP4475.jpg",
          "IMGP4476.jpg",
          "IMGP4477.jpg",
          "IMGP4478.jpg",
          "IMGP4479.jpg",
          "_IMGP4458.jpg"
        ]
      },
      "Офис 309": {
        "titular": "_IMGP4914.jpg",
        "images": [
          "IMGP4915.jpg",
          "IMGP4916.jpg",
          "IMGP4917.jpg",
          "IMGP4918.jpg",
          "IMGP4919.jpg",
          "IMGP4920.jpg",
          "IMGP4921.jpg",
          "IMGP4922.jpg",
          "IMGP4923.jpg",
          "IMGP4925.jpg",
          "IMGP4926.jpg",
          "IMGP4927.jpg",
          "IMGP4928.jpg",
          "IMGP4929.jpg",
          "IMGP4930.jpg",
          "IMGP4931.jpg",
          "IMGP4932.jpg",
          "IMGP4933.jpg",
          "IMGP4934.jpg",
          "IMGP4935.jpg",
          "IMGP4936.jpg",
          "_IMGP4914.jpg"
        ]
      },
      "Офис 317": {
        "titular": "IMGP4403.jpg",
        "images": [
          "IMGP4403.jpg",
          "IMGP4470.jpg",
          "IMGP4471.jpg",
          "imgp4472.jpg"
        ]
      }
    },
    "Женя косметолог": {
      "Офис": {
        "titular": "_IMGP6666.JPG",
        "images": [
          "IMGP6660.JPG",
          "IMGP6661.JPG",
          "IMGP6662.JPG",
          "IMGP6663.JPG",
          "IMGP6664.JPG",
          "_IMGP6666.JPG"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Офис": {
        "titular": "_IMGP6873.JPG",
        "images": [
          "IMGP6842.JPG",
          "IMGP6844.JPG",
          "IMGP6845.JPG",
          "IMGP6846.JPG",
          "IMGP6847.JPG",
          "IMGP6872.JPG",
          "IMGP6874.JPG",
          "IMGP6875.JPG",
          "IMGP6876.JPG",
          "IMGP6877.JPG",
          "_IMGP6873.JPG"
        ]
      }
    },
    "Исполком Гвардейка": {
      "Офис приемная": {
        "titular": "_IMGP4901.JPG",
        "images": [
          "IMGP4896.JPG",
          "IMGP4897.JPG",
          "IMGP4898.JPG",
          "IMGP4899.JPG",
          "IMGP4900.JPG",
          "_IMGP4901.JPG"
        ]
      }
    },
    "Лев Абрамович": {
      "Офис": {
        "titular": "_IMGP5408.JPG",
        "images": [
          "IMGP5409.JPG",
          "IMGP5410.JPG",
          "IMGP5411.JPG",
          "IMGP5412.JPG",
          "IMGP5413.JPG",
          "IMGP5414.JPG",
          "IMGP5415.JPG",
          "IMGP5416.JPG",
          "IMGP5417.JPG",
          "IMGP5418.JPG",
          "IMGP5419.JPG",
          "IMGP5420.JPG",
          "IMGP5421.JPG",
          "IMGP5422.JPG",
          "IMGP5423.JPG",
          "_IMGP5408.JPG"
        ]
      }
    },
    "Лицей 5": {
      "Офис": {
        "titular": "_IMGP4501.JPG",
        "images": [
          "IMGP4500.JPG",
          "IMGP4502.JPG",
          "IMGP4503.JPG",
          "IMGP4504.JPG",
          "IMGP4505.JPG",
          "IMGP4506.JPG",
          "IMGP4507.JPG",
          "_IMGP4501.JPG"
        ]
      }
    },
    "РККА-5-24": {
      "Офис": {
        "titular": "_IMGP4542.JPG",
        "images": [
          "IMGP4543.JPG",
          "_IMGP4542.JPG"
        ]
      }
    },
    "ЦОФ Доброполье": {
      "Офис": {
        "titular": "_IMGP4905.JPG",
        "images": [
          "IMGP4902.JPG",
          "IMGP4903.JPG",
          "IMGP4904.JPG",
          "IMGP4906.JPG",
          "IMGP4907.JPG",
          "IMGP4908.JPG",
          "IMGP4909.JPG",
          "IMGP4910.JPG",
          "IMGP4911.JPG",
          "IMGP4912.JPG",
          "IMGP4913.JPG",
          "_IMGP4905.JPG"
        ]
      }
    }
  },
  "Детская": {
    "Аня кума": {
      "Детская": {
        "titular": "_IMGP6045.jpg",
        "images": [
          "IMGP6046.jpg",
          "IMGP6047.jpg",
          "IMGP6048.jpg",
          "IMGP6049.jpg",
          "_IMGP6045.jpg"
        ]
      }
    },
    "Кошелюк СА": {
      "Детская": {
        "titular": "_IMGP5094.JPG",
        "images": [
          "IMGP5088.JPG",
          "IMGP5089.JPG",
          "IMGP5090.JPG",
          "IMGP5091.JPG",
          "IMGP5092.JPG",
          "IMGP5095.JPG",
          "_IMGP5094.JPG"
        ]
      }
    },
    "Лузина 16-27": {
      "Детская": {
        "titular": "_IMGP4301.JPG",
        "images": [
          "IMGP4296.JPG",
          "IMGP4297.JPG",
          "IMGP4298.JPG",
          "IMGP4299.JPG",
          "IMGP4300.JPG",
          "IMGP4875.JPG",
          "IMGP4876.JPG",
          "IMGP4877.JPG",
          "IMGP6728.JPG",
          "IMGP6729.JPG",
          "_IMGP4301.JPG"
        ]
      }
    },
    "Сергей-Ильича-20-211": {
      "Детская": {
        "titular": "_IMGP6670.JPG",
        "images": [
          "IMGP6667.JPG",
          "IMGP6668.JPG",
          "IMGP6669.JPG",
          "IMGP6671.JPG",
          "IMGP6672.JPG",
          "IMGP6673.JPG",
          "IMGP6674.JPG",
          "IMGP6675.JPG",
          "IMGP6676.JPG",
          "IMGP6677.JPG",
          "IMGP6678.JPG",
          "_IMGP6670.JPG"
        ]
      }
    },
    "Татьяна Хорошово": {
      "Детская": {
        "titular": "_IMGP6385.JPG",
        "images": [
          "IMGP6291.JPG",
          "IMGP6292.JPG",
          "IMGP6295.JPG",
          "IMGP6296.JPG",
          "IMGP6297.JPG",
          "IMGP6299.JPG",
          "IMGP6300.JPG",
          "IMGP6301.JPG",
          "IMGP6302.JPG",
          "IMGP6303.JPG",
          "IMGP6304.JPG",
          "IMGP6307.JPG",
          "IMGP6308.JPG",
          "IMGP6309.JPG",
          "IMGP6310.JPG",
          "IMGP6311.JPG",
          "IMGP6382.JPG",
          "IMGP6386.JPG",
          "IMGP6387.JPG",
          "IMGP6388.JPG",
          "_IMGP6385.JPG"
        ]
      }
    },
    "Яна Ленинский 33": {
      "Детская": {
        "titular": "_IMGP7140.JPG",
        "images": [
          "IMGP7125.JPG",
          "IMGP7128.JPG",
          "IMGP7130.JPG",
          "IMGP7131.JPG",
          "IMGP7135.JPG",
          "IMGP7137.JPG",
          "IMGP7142.JPG",
          "_IMGP7140.JPG"
        ]
      }
    }
  },
  "Разное": {
    "Анатолий школа 21": {
      "Разное": {
        "titular": "_IMGP6878.JPG",
        "images": [
          "IMGP6879.JPG",
          "_IMGP6878.JPG"
        ]
      }
    },
    "Братуха": {
      "Разное 1": {
        "titular": "_DSC_0106.jpg",
        "images": [
          "DSC_0107.jpg",
          "_DSC_0106.jpg"
        ]
      }
    },
    "ВАЗ Андрей": {
      "Разное": {
        "titular": "_IMGP5567.jpg",
        "images": [
          "IMGP5565.jpg",
          "IMGP5566.jpg",
          "_IMGP5567.jpg"
        ]
      },
      "Разное 1": {
        "titular": "_IMGP5570.jpg",
        "images": [
          "IMGP5568.jpg",
          "IMGP5569.jpg",
          "IMGP5571.jpg",
          "IMGP5572.jpg",
          "IMGP5573.jpg",
          "IMGP5574.jpg",
          "IMGP5575.jpg",
          "_IMGP5570.jpg"
        ]
      },
      "Разное 2": {
        "titular": "_IMGP5614.jpg",
        "images": [
          "IMGP5615.jpg",
          "IMGP5616.jpg",
          "_IMGP5614.jpg"
        ]
      }
    },
    "Денис Ходаковского": {
      "Разное 1": {
        "titular": "IMGP6996.JPG",
        "images": [
          "IMGP6996.JPG",
          "IMGP6998.JPG",
          "IMGP6999.JPG",
          "IMGP7000.JPG"
        ]
      },
      "Разное 2": {
        "titular": "_IMGP7004.JPG",
        "images": [
          "IMGP7001.JPG",
          "IMGP7002.JPG",
          "IMGP7003.JPG",
          "_IMGP7004.JPG"
        ]
      }
    },
    "ДТЭК": {
      "Разное Курахово 1": {
        "titular": "_IMGP4484.jpg",
        "images": [
          "IMGP4483.jpg",
          "IMGP4485.jpg",
          "IMGP4486.jpg",
          "IMGP4487.jpg",
          "IMGP4488.jpg",
          "_IMGP4484.jpg"
        ]
      },
      "Разное Курахово 2": {
        "titular": "_IMGP4489.jpg",
        "images": [
          "IMGP4490.jpg",
          "IMGP4491.jpg",
          "IMGP4492.jpg",
          "IMGP4493.jpg",
          "_IMGP4489.jpg"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Разное": {
        "titular": "_DSCN0021.JPG",
        "images": [
          "DSCN0022.JPG",
          "_DSCN0021.JPG"
        ]
      }
    },
    "Шекспира 5": {
      "Разное": {
        "titular": "_IMGP5473.JPG",
        "images": [
          "IMGP5474.JPG",
          "IMGP5476.JPG",
          "IMGP5477.JPG",
          "_IMGP5473.JPG"
        ]
      }
    }
  }
}

$(function () {

    var app = {

      root: "furniture-catalog",
      projects: 'projects',
      name: "Каталог мебели",
      template: _.template($('#thumbTmpl').html()),
      titles: ['Кухни "Классика"', 'Кухни "Модерн"', 'Шкафы-купе', 'Прихожие', 'Гостиные', 'Офисная', 'Детские', 'Разное'],
      itemtitle: ['Кухня классика', 'Кухня модерн', 'Шкаф-купе', 'Прихожая', 'Гостиная', 'Офис', 'Детская', 'Разное'],

      initialize: function() {
        var root = this.root;
        this.cats = this.titles.map(function(cat, i) { return [`/${root}/category/${i}`, cat]; });
        // create categorie's menu
        var el = $("#catmenu");
        this.cats.forEach(function(cat, i) { el.append(`<li><a href="${cat[0]}">${cat[1]}</a></li>`); });
        // prepare routes hash
        var routes = {};
        [ ['', 'main'],
          ['/', 'main'],
          ['/index', 'main'],
          ['/index.html', 'main'],
          // ['/project/:client/:project', 'showProject'],
          ['/category/:cat/:client/:project', 'showProject'],
          ['/category/:cat', 'showCategory']
        ].forEach(function(i) { 
          routes[root + i[0]] = i[1]; 
        });
        // console.log('routes', routes);
        this.router = new Router({ routes });

        this.views = {
          main: new MainView(),
          cat:  new CategoryView(),
          prj:  new ProjectView()
        }

        // enable history.back() when 'ESC' key pressed
        document.onkeydown = function(e) {
          if (e.keyCode == 27) {  // escape key code check
            history.back();
            return false;
          }
	      }

        $("body").on("click","a:not(a[data-bypass])",function(e){
          e.preventDefault();
          var href = $(this).attr("href");
          app.location = href;
          Backbone.history.navigate(href, {trigger: true});
        });

      },

      getCategory: function(_cat, _client, _prj) {
      
        // console.log('getCategory',_cat, _client, _prj);

        var title = this.itemtitle[_cat];       
        var data = []
        var cat = file_list[title]

        if (cat) {
          if (_client && _prj) {
            var client = cat[_client]
            if (client) {
              var prj = client[_prj]
              if (prj) {
                data = prj.images
              }
            }

          } else {
            Object.entries(cat)
              .forEach(([client, projects]) => {
                Object.entries(projects)
                  .forEach(([project, value]) => {
                    data.push({
                      client,
                      project,
                      thumb: value.titular                   
                    })
                  })
              })          
          }
        }

        // console.log('out', data);
        return data;
      }

    };

    //=================================================
    var Router = Backbone.Router.extend({

      main: function() {
        document.title = app.name;
        app.views.main.render();
      },

      showCategory: function(cat) {
        document.title = app.titles[cat];
        var items = app.getCategory(cat);
        app.views['cat'].render(items, cat);
      },

      showProject: function(cat, client, prj) {
        document.title = `${client} ${prj}`;
        var items = app.getCategory(cat, client, prj);
        app.views['prj'].render(items, client, prj);
      }

    });

    //=================================================
    var ProjectView = Backbone.View.extend({
      el: $("#content"),

      render: function (items, client, prj) {
        var html = '',
            title = 'Фото';
        items.forEach(function(item, i) {
        // console.log(this);
          html += app.template({
            atype: 'data-bypass data-gallery',
            ahref: `/${app.root}/static/img/${app.projects}/${client}/${prj}/images/${item}`,
            ihref: `/${app.root}/static/img/${app.projects}/${client}/${prj}/thumbnails/${item}`,
            hint: `${title} ${i+1}`,
            title: `${title} ${i+1}`
          });
        });

        this.$el.html(html);
        return this;
      },

    });

    //=================================================
    var CategoryView = Backbone.View.extend({
      el: $("#content"),

      render: function (items, cat) {
        var html = '',
            title = app.itemtitle[cat];
        items.forEach(function(item, i) {
        // console.log(this);
          html += app.template({
            atype: '',
            ahref: `${app.cats[cat][0]}/${item.client}/${item.project}`,
            ihref: `/${app.root}/static/img/${app.projects}/${item.client}/${item.project}/thumbnails/${item.thumb}`,
            hint: item.client,
            title: `${title} ${i+1}`
          });
        });

        this.$el.html(html);
        return this;
      },

    });

    //=================================================

    var MainView = Backbone.View.extend({
      el: $("#content"),
      html: '',
      initialize: function () {
        var self = this;
        app.cats.forEach(function(cat, i) {
          self.html += app.template({
            atype: '',
            ahref: cat[0],
            ihref: `/${app.root}/static/img/${app.projects}/_homeimages/${i+1}.jpg`,
            hint: cat[1],
            title: cat[1]
          });
        });
      },
      render: function () {
        this.$el.html(this.html);
        return this;
      },
    });

    //=================================================

    app.initialize();

    Backbone.history.start({
        root: '/',
        pushState: true
    });

});
