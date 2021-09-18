/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "Gems": "宝石",
    "Gemstone": "宝石",
    "Disabled": "已禁用",
    "Distribute all Gems": "分发所有宝石",
    "Emerald": "翡翠",
    "Fill +": "填充 +",
    "Energy": "能源",
    "Gold": "黄金",
    "Hard Reset": "硬复位",
    "Hide purchased researches": "隐藏已购买的研究",
    "Hint: Hover square to see that name...": "提示：将鼠标悬停在方块上以查看该名称...",
    "Iron": "铁",
    "Insert 1": "插入 1",
    "kWs/s to gain": "kWs/秒 增益",
    "Options": "选项",
    "Researches": "研究",
    "Respec all Gems": "重洗全部宝石",
    "Ruby": "红宝石",
    "Sapphire": "蓝宝石",
    "Supported files": "支持的文件",
    "Tank Storages": "存储罐",
    "Topaz": "黄玉",
    "total": "总计",
    "Upgrades": "升级",
    "unspent Gems (": "未使用的宝石 (",
    "Water": "水",
    "Loading game...": "游戏加载中...",
    "1. Auto-Water": "1. 自动集水",
    "1. Hydro-Electric Power (": "1. 水力发电（",
    "1. Water Capacity (": "1. 水容量 (",
    "10. Addtional Coal": "10. 额外的煤炭",
    "11. Auto-Stone": "11. 自动石材",
    "12. Doubled Coal": "12.双倍煤炭",
    "14. Exponential Water": "14. 指数水",
    "15. Own Storage": "15. 拥有的存储空间",
    "16. Iron Pickaxe": "16. 铁镐",
    "17. Gold Era": "17.黄金时代",
    "18. Water Civilazation": "18. 水文明",
    "19. Exponential Coal": "19. 指数煤",
    "2. Auto-Mine Stone (": "2. 自动开采石头（",
    "2. Fixing Water (": "2. 修复水（",
    "2. HydroPower": "2. 水电",
    "20. Gather Gemstone": "20. 收集宝石",
    "21. Gemstone Booster": "21. 宝石助推器",
    "22. Mega Era": "22. 超级时代",
    "23. The End": "23. 终点",
    "3. Faster Filling": "3.更快的填充",
    "3. Heat Generator (": "3. 热发生器（",
    "3. More Water (": "3.多喝水（",
    "4. Auto-Gather I (": "4.自动收集1（",
    "4. Two in One": "4. 二合一",
    "4. Water Hole (": "4.水坑（",
    "5. Auto-Gather II (": "5. 自动收集2 (",
    "5. Stone Capacity (": "5.石头容量（",
    "5. Stone Era": "5. 石器时代",
    "6. Addtional Water": "6. 额外的水",
    "6. Auto-Gemstone (": "6. 自动宝石 (",
    "6. Coal Capacity (": "6.煤容量（",
    "7. Fast Filling I": "7.快速填充1",
    "7. More Coal (": "7. 更多煤（",
    "8. Easy Energy (": "8.轻松节能（",
    "8. Gather Ore I": "8. 收集矿石1",
    "9. Free Water": "9.免费水",
    "9. Volume Strength (": "9.体积强度（",
    "Amethyst": "紫水晶",
    "Coal": "煤",
    "Cobblestone": "鹅卵石",
    "Convert into": "转换为",
    "Copper": "铜",
    "Cost": "成本",
    "Diamond": "钻石",
    "Bought": "已买",
    "Disable": "禁用",
    "Enabled": "已启用",
    "Enable": "启用",
    "/s to gain": "/秒 增益",
    "Finish your Game... ": "完成你的游戏...",
    "Filling Water is raised by 1.25 ": "补水提高 1.25",
    "Filling Coal is raised by 1.33 ": "填充煤提高 1.33",
    "Every time spending water increases energy": "每次消耗水都会增加能量",
    "Every time spending energy products gold": "每次消费能量产出黄金",
    "Every time spending energy products gemstone": "每次消费能量产生宝石",
    "Every time spending energy products cobblestone": "每次消耗能量产生鹅卵石",
    "Every time spending energy products coal, copper & iron": "每次消费能源产品煤、铜和铁",
    "Every time spending coal increases energy": "每次消耗煤炭都会增加能源",
    "Enable\n\t\t\t": "启用\n\t\t\t",
    "Draining water is decreased by 25": "排水量减少25",
    "Coal, Copper & Iron capacities are increased based on water (": "煤、铜和铁的产能基于水增加（",
    "Coal, Copper & Iron boosts themselves from Auto-Gather I (": "煤、铜和铁从自动收集 I (",
    "Coal fills 50% faster": "煤炭填充速度提高 50%",
    "Automatically fills water based on your filling water ": "根据您的加水量自动加水",
    "Automatically fills cobblestone, and fills faster by cobblestone (": "自动填充鹅卵石，以及鹅卵石填充更快（",
    "Automatically buy all upgrades if can afford. Gem requirement scales 10% weaker ": "如果负担得起，自动购买所有升级。 宝石需求量减少 10%",
    "Auto-Mine Stone products cobblestone faster based on water (": "基于水的自动采石制生产鹅卵石更快（",
    "Purchase": "购买",
    "Spending": "花费",
    "Unlock Coal ": "解锁煤",
    "Unlock Cobblestone ": "解锁俄鹅卵石",
    "Unlock Copper & Iron ": "解锁铜和铁",
    "Unlock Gold (rarest ore) ": "解锁黄金（稀有矿石）",
    "Unlock Hydro-Electric Power in Energy tab ": "在“能源”选项卡中解锁水力发电",
    "Upgrades 1-3 no longer spent resources ": "升级 1-3 不再消耗资源",
    "Upgrades 2-4 are cheaper, Upgrade 4 no longer spent resources. You can automate Upgrade 1-4 if can afford ": "升级 2-4 更便宜，升级 4 不再消耗资源。 如果负担得起，您可以自动升级 1-4",
    "Water & Cobblestone fills 10x faster ": "水和鹅卵石的填充速度提高 10 倍",
    "Water fills 25% faster": "水填充速度提高 25%",
    "Water fills faster based on Energy (": "水填充更快基于能源（",
    "/s\n\t\t\t": "/秒\n\t\t\t",
    "Gold boosts Gemstone production & capacity (": "黄金提高了宝石产量和容量（",
    "Heat Generator products 4x effective ": "热发生器生产效率 x4",
    "Hydro-Electric Power products energy twice faster ": "水利发电能源生产快两倍",
    "Hydro-Electric Power products faster based on coal (": "以煤炭为基础的水力发电生产更快（",
    "in": "在",
    "Increase all previous resources gain by 2x": "将之前的所有资源增益提高 2 倍",
    "Increase Coal storage tank by 50": "储煤罐容量增加 50",
    "Increase Cobblestone storage tank by 50": "鹅卵石储罐容量增加 50",
    "Increase energy outputs by 50": "能源输出增加 50",
    "Increase Water filling by +0.5": "增加充水量 +0.5",
    "Increase Water storage tank by 50%, but draining is increased by 50": "储水箱容量增加50%，但排水增加50",
    "kWs/s\n\t\t\t": "kWs/秒\n\t\t\t",
    "No display effect only": "仅不显示无效果项",
    "of Gemstone": "宝石",
    "Purchase\n\t\t\t": "购买\n\t\t\t",
    "Unlock Gemstone ": "解锁宝石",
    "All previous gems are": "以前的所有宝石都",
    "faster": "更快",
    "Increase all capacities by": "将所有容量增加",
    "Increase filling exponent by": "增加填充指数",
    "Make production speed is": "使生产速度为",
    "of resources if can afford": "资源如果可以负担得起",
    "stronger": "更强",
    "Upgrades buys": "升级购买",
    "weaker": "更弱",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "13. Gather Ore": "13. 收集矿石",
    "\t\t\t\t": "\t\t\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t\t": "\n\t\t\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) l/,
    /^([\d\.]+) ml/,
    /^([\d\.]+) l \/ ([\d\.]+) l$/,
    /^([\d\.]+)e([\d\.,]+) l \/ ([\d\.]+)e([\d\.,]+) l$/,
    /^([\d\.]+) ml \/ ([\d\.]+) ml$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^(.+)x to coal, (.+)x to copper, (.+)x to iron$/, '煤炭 $1x，铜 $2x，铁 $3x'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);