export default async function handler(req, res) {
  // 设置跨域头，允许前端访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // 获取前端上传的图片信息
    const { imageUrl } = req.body;
    
    // 模拟AI解析结果（无需真实调用API，保证功能展示）
    const decipherResult = {
      code: 200,
      data: {
        text: "【上古文字解析结果】\n1. 文字释读：日（甲骨文）\n2. 字形分析：像太阳之形，轮廓为圆形，中间有一点表示太阳的核心\n3. 释义：本义为太阳，引申为白天、时间、日子等含义\n4. 出处：殷墟甲骨文合集 37898\n5. 时代：商代晚期",
        confidence: 0.98,
        type: "甲骨文"
      },
      message: "解析成功"
    };

    // 返回解析结果
    res.status(200).json(decipherResult);
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "解析失败：" + error.message
    });
  }
}
