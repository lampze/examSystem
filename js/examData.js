var examData = [
{ head: 'CAI是()的英文缩写.',
  body: [ '计算机辅助教学', '计算机辅助设计', '计算机辅助制造', '计算机辅助管理' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'CAI是指().',
  body: [ '系统软件', '计算机辅助教学', '计算机辅助设计', '办公自动化系统' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'CAM软件可用于计算机().',
  body: [ '辅助制造', '辅助测试', '辅助教学', '辅助设计' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '按使用器件划分计算机发展史,当前使用的微型计算机,是()计算机.',
  body: [ '集成电路', '晶体管', '电子管', '超大规模集成电路' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '把计算机分为巨型机、大中型机、小型机和微型机,本质上是按()来区分的.',
  body: [ '计算机的体积', 'CPU的集成度', '计算机综合性能指标', '计算机的存储容量' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '把微机中的信息传送到U盘上,称为().',
  body: [ '拷贝', '写盘', '读盘', '输出' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '把硬盘上的数据传送到内存中的过程称为().',
  body: [ '打印', '写盘', '输出', '读盘' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '从计算机键盘上输入汉字时,输入的实际上是().',
  body: [ '汉字内码', '汉字外码', '汉字交换码', '汉字笔形码' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '大写字母锁定键是(),主要用于连续输入若干个大写字母.',
  body: [ 'Shift', 'Ctrl', 'Alt', 'CapsLock' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '当利用键盘右边的小键盘区输入数字时,应将()键锁定在数字状态,否则这个区域的数字键将担负编辑键的功能.',
  body: [ 'Tab', 'ScrollLock', 'NumLock', 'CapsLock' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '当某个应用程序不再响应用户的操作时,按()键,弹出"关闭程序"对话框.',
  body: [ 'Ctrl+Alt+Del', 'Ctrl+Shift+Del', 'Ctrl+Shift+Tab', 'Ctrl+Del' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '到目前为止,计算机的发展已经经历了()代.',
  body: [ '3', '4', '5', '6' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '电子计算机与过去的计算工具相比,所具有的特点有().',
  body: 
   [ '具有记忆功能,能够储存大量信息,可方便用户检索和查询',
     '能够按照程序自动进行运算,完全可以取代人的脑力劳动',
     '具有逻辑判断能力,所以说计算机已经具有人脑的全部智能',
     '以上说法都对' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '对磁盘格式化,需要打开 ().',
  body: [ '我的电脑', '附件', '控制面板', '我的公文包' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '对新盘进行格式化时,可以选择().',
  body: [ '仅复制系统文件', '快速格式化时选择"复制系统文件"', '快速(消除)格式化', '全面格式化' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '对于已存有数据的硬盘进行重新分区,则().',
  body: 
   [ '一定要进行格式化后才能使用该硬盘',
     '无须进行格式化就可使用该硬盘',
     '硬盘中原有数据不会丢失',
     'WINDOWS不能管理多个分区' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '格式化软盘,即().',
  body: 
   [ '删除软盘上原信息,在盘上建立一种系统能识别的格式',
     '可删除原有信息,也可不删除',
     '保留软盘上原有信息,对剩余空间格式化',
     '删除原有部分信息,保留原有部分信息' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '个人计算机属于().',
  body: [ '小巨型机', '中型机', '小型机', '微机' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '根据鼠标测量位移部件的类型,可将鼠标分为().',
  body: [ '机械式和光电式', '机械式和滚轮式', '滚轮式和光电式', '手动式和光电式' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '关于电子计算机的特点,以下论述错误的是().',
  body: [ '运行过程不能自动、连续进行,需人工干预', '运算速度快', '运算精度高', '具有记忆和逻辑判断能力' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '国产银河数字式电子计算机是属于().',
  body: [ '中型机', '微型机', '小型机', '巨型机' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机按用途可分为().',
  body: [ '模拟和数字', '专用机和通用机', '单片机和微机', '工业控制和单片机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机按原理可分为( ).',
  body: 
   [ '科学计算、数据处理和人工智能计算机',
     '电子模拟和电子数字计算机',
     '巨型、大型、中型、小型和微型计算机',
     '便携、台式和微型计算机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机从规模上可分为().',
  body: 
   [ '科学计算、数据处理和人工智能计算机',
     '电子模拟和电子数字计算机',
     '巨型、大型、中型、小型和微型计算机',
     '便携、台式和微型计算机' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机存储器容量的基本单位是().',
  body: [ '符号', '整数', '位', '字节' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机的发展阶段通常是按计算机所采用的什么来划分的().',
  body: [ '内存容量', '物理器件', '程序设计语言', '操作系统' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机的发展经历了电子管时代、()、集成电路时代和大规模集成电路时代.',
  body: [ '网络时代', '晶体管时代', '数据处理时代', '过程控制时代' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机发生死机时若不能接收键盘信息,最好采用()方法重新启动机器.',
  body: [ '冷启动', '热启动', '复位启动', '断电' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机发展的方向是巨型化、微型化、网络化、智能化,其中"巨型化"是指().',
  body: [ '体积大', '重量重', '功能更强、运算速度更快、存储容量更大', '外部设备更多' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机辅助教学简称().',
  body: [ 'CAD', 'CAM', 'CAI', 'OA' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机辅助教育的英文缩写是().',
  body: [ 'CAM', 'CAD', 'CAI', 'CAE' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机辅助设计的英文缩写是().',
  body: [ 'CAPP', 'CAM', 'CAI', 'CAD' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机辅助制造的简称是().',
  body: [ 'CAD', 'CAM', 'CAE', 'CBE' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机集成制造系统的英文缩写是().',
  body: [ 'CIMS', 'ERP', 'MRP', 'GIS' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '键盘打字过程中,手指停放的基本键位是().',
  body: [ 'QWERTYUIOP', 'ASDFJKL;', 'ZXCVBNM,./', '键盘上的任意键' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '键盘上,下档切换键是().',
  body: [ 'SHIFT', 'CTRL', 'ALT', 'TAB' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '键盘上Ctrl键是控制键,通常它()其他键配合使用.',
  body: [ '总是与', '不需要与', '有时与', '和Alt一起再与' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '键盘上的()键只击本身就起作用.',
  body: [ 'Alt', 'Ctrl', 'Shift', 'Enter' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '绿色电脑是指().',
  body: [ '电脑外壳是绿色的', '显示的颜色是绿色的', '主机板是绿色的', '电脑具有节能功能' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '某单位的工资管理软件属于().',
  body: [ '工具软件', '应用软件', '系统软件', '编辑软件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '某公司的财务管理软件属于().',
  body: [ '工具软件', '系统软件', '编辑软件', '应用软件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '某学校的职工人事管理软件属于().',
  body: [ '应用软件', '系统软件', '字处理软件', '工具软件' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '如果对打印质量和速度要求高,一般使用().',
  body: [ '针式打印机', '激光打印机', '喷墨打印机', '以上都不正确' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '如果给出的文件名是*.*,则其含义是().',
  body: [ '硬盘上的全部文件', '当前盘当前文件夹中的全部文件', '当前驱动器上的全部文件', '根文件夹中的全部文件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '世界上第一台电子计算机的电子逻辑元件是().',
  body: [ '继电器', '晶体管', '电子管', '集成电路' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '世界上第一台微型计算机是()位计算机.',
  body: [ '4', '8', '16', '32' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '世界上发明的第一台电子计算机是().',
  body: [ 'ENIAC', 'EDVAC', 'EDSAC', 'UNIVAC' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '通常所说的24针打印机属于().',
  body: [ '激光打印机', '喷墨打印机', '击打式打印机', '热敏打印机' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '同时按下Ctrl+Alt+Del组合键的作用是().',
  body: [ '停止微机工作', '使用任务管理器关闭不响应的应用程序', '立即热启动微机', '冷启动微机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微机热启动时,应同时按下的三个键是().',
  body: 
   [ 'Ctrl+Del+Esc',
     'Ctrl+Del+Shift',
     'Ctrl+Alt+Esc',
     'Ctrl+Alt+Del' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '未来的计算机与前四代计算机的本质区别是().',
  body: 
   [ '计算机的主要功能从信息处理上升为知识处理',
     '计算机的体积越来越小',
     '计算机的主要功能从文本处理上升为多媒体数据处理',
     '计算机的功能越来越强了' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '五笔字型码输入法属于().',
  body: [ '音码输入法', '形码输入法', '音形结合的输入法', '联想输入法' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '物理器件采用晶体管的计算机被称为().',
  body: [ '第一代计算机', '第二代计算机', '第三代计算机', '第四代计算机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列4种设备中,属于计算机输入设备的是().',
  body: [ '鼠标', '音箱', '打印机', '显示器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列不是硬盘的性能指标的是().',
  body: [ '密度', '数据传输率', '转速', '单碟容量' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列不属于信息基本特性的是().',
  body: [ '信息的凝缩性', '信息的可共享性', '信息的有限性', '信息的扩散性' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列不属于应用软件的是().',
  body: [ 'UNIX', 'QBASIC', 'Excel', 'FoxPro' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列打印机中属击打式打印机的是().',
  body: [ '点阵打印机', '热敏打印机', '激光打印机', '喷墨打印机' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列各项中,属于计算机应用领域的是().',
  body: 
   [ '科学计算、过程控制、CAI',
     '信息处理、图形处理、CAD、模式识别',
     'Office、解压缩、WWW、E-mail',
     'A、B、C都是' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列各因素中,对微机工作影响最小的().',
  body: [ '温度', '湿度', '磁场', '噪音' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列各组设备中,全部属于输入设备的一组是().',
  body: [ '键盘、磁盘和打印机', '键盘、扫描仪和鼠标', '键盘、鼠标和显示器', '硬盘、打印机和键盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列关于"1Kb/S"准确的含义是().',
  body: [ '1000b/S', '1000B/S', '1024b/S', '1024B/S' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列关于"信息化"的叙述中,错误的是().',
  body: 
   [ '信息化是当今世界经济和社会发展的大趋势',
     '我国目前的信息化水平已经与发达国家的水平相当',
     '信息化与工业化是密切联系又有本质区别的',
     '各国都把加快信息化建设作为国家的发展战略之一' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列关于计算机的叙述中,不正确的一条是().',
  body: 
   [ '在微型计算机中,应用最普遍的字符编码是ASCII码',
     '计算机病毒就是一种程序',
     '计算机中所有信息的存储采用二进制',
     '混合计算机就是混合各种硬件的计算机' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列关于计算机的叙述中,不正确的一条是().',
  body: 
   [ '最常用的硬盘就是温切斯特硬盘',
     '计算机病毒是一种新的高科技类型犯罪',
     '8位二进制位组成一个字节',
     '汉字点阵中,行、列划分越多,字形的质量就越差' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列计算机应用中,不属于数据处理的是().',
  body: [ '结构力学分析', '图书检索', '工资管理', '人事档案管理' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列计算机应用中,属于计算机辅助教学的是().',
  body: [ 'CAM', 'CAD', 'CAT', 'CAI' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列结论正确的是().',
  body: 
   [ '磁盘是计算机的重要外设,没有磁盘,计算机就不能运行',
     'CRT显示器通常用于便携式微机上',
     '在360KB软盘驱动器中,不能读写1.2MB的软盘',
     '在1.2MB软盘驱动器中,不能读写360KB的软盘' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列可选项,都是硬件的是().',
  body: [ 'Windows、ROM和CPU', 'WPS、RAM和显示器', 'ROM、RAM和Pascal', '硬盘、光盘和软盘' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列描述中正确的是().',
  body: 
   [ '激光打印机是击打式打印机',
     '击打式打印机价格最低',
     '喷墨打印机不可以打印彩色效果',
     '计算机的运算速度可用每秒执行指令的条数来表示' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列哪个不是外设().',
  body: [ '打印机', '中央处理器', '读片机', '绘图机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列哪个只能当作输入设备().',
  body: [ '终端', '打印机', '读卡机', '磁带' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列哪一项不属于鼠标按内部分类结构().',
  body: [ '机械式鼠标', '光机式鼠标', 'WEB鼠标', '光电鼠标' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列哪种打印机一次可以打出多个副本().',
  body: [ '点阵打印', '热敏打印机', '激光打印机', '喷墨打印机' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列说法中正确的是().',
  body: 
   [ '计算机体积越大,其功能就越强',
     '在微机性能指标中,CPU的主频越高,其运算速度越快',
     '两个显示器屏幕大小相同,则它们的分辨率必定相同',
     '点阵打印机的针数越多,则能打印的汉字字体越多' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列四项中不属于微型计算机主要性能指标的是().',
  body: [ '字长', '内存容量', '重量', '时钟脉冲' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面的说法不正确的是().',
  body: 
   [ '计算机是一种能快速和高效地完成信息处理的数字化电子设备,它能按照人们编写的程序对原始输入数据进行加工处理',
     '计算机能够自动完成信息处理',
     '计算器也是一种小型计算机',
     '虽然说计算机的功能很强大,但是计算机并不是万能的' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面关于喷墨打印机特点的叙述中,错误的是().',
  body: [ '能输出彩色图像,打印效果好', '打印时噪音不大', '需要时可以多层套打', '墨水成本高,消耗快' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '现代集成电路使用的半导体材料通常是().',
  body: [ '铜', '铝', '硅', '碳' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '现代通用电子数字计算机按其功能可分为()等几种类型.',
  body: [ '模拟计算机和数字计算机', '科学计算,数据处理,人工智能', '巨型,大型,中型,小型,微型', '便携,台式,微型' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '现代通用电子数字计算机其内部使用()数制.',
  body: [ '二进制数', '八进制数', '十进制数', '十六进制数' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '现在计算机正朝()方向发展.',
  body: [ '专用机', '微型机', '小型机', '通用机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '信息处理系统是综合使用信息技术的系统.下面叙述中错误的是().',
  body: 
   [ '信息处理系统从自动化程度来看,有人工的、半自动化和全自动化的',
     '应用领域很广泛,例如银行是一种以感知与识别为主要目的的系统',
     '信息处理系统是用于辅助人们进行信息获取、传递、存储、加工处理及控制的一种系统',
     '从技术手段上来看,有机械的、电子的和光学的,从通用性来看,有专用的和通用的' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '信息高速公路是指().',
  body: [ '装备有通信设施的高速公路', '电子邮政系统', '快速专用通道', '国家信息基础设施' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '信息系统是多种多样的,从信息处理的深度进行划分,决策支持系统属于().',
  body: [ '业务信息处理系统', '信息检索系统', '信息分析系统', '辅助技术系统' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '选用中文输入法后,可以用()实现全角和半角的切换.',
  body: [ '按CapsLock键', '按Ctrl+圆点键', '按Shift+空格键', '按Ctrl+空格键' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '要想提高键盘打字的速度,应当学会().',
  body: [ '看着键盘两手击键', '看着键盘单手击键', '触觉击键(盲打)', '按个人的习惯' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '医疗诊断属于计算机在()方面的应用.',
  body: [ '人工智能', '科学计算', '信息处理', '计算机辅助系统' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '移动通信系统中关于移动台的叙述正确的().',
  body: 
   [ '移动台是移动的通信终端,它是接收无线信号的接收机,包括手机、呼机、无绳电话等',
     '固定收发机,在移动通信系统可以有其他设备替代',
     '多个移动台相互分割,又彼此有所交叠能形成"蜂窝式移动通信"',
     '在整个移动通信系统中,作用不大,因此可以省略' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以微处理器为核心组成的微型计算机属于()计算机.',
  body: [ '第一代', '第二代', '第三代', '第四代' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下关于汉字输入法的说法中,错误的是().',
  body: 
   [ '启动或关闭汉字输入法的快捷键是Ctrl+Space',
     '在英文及各种汉字输入法之间选择的快捷键是Ctrl+Shift',
     '可以为某种汉字输入法设置快捷键',
     '在任务栏的"语言指示器"中可以直接删除某种汉字输入法' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '用计算机进行情报检索,属于计算机应用中的().',
  body: [ '科学计算', '人工智能', '信息处理', '过程控制' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用计算机进行资料检索工作是属于计算机应用中的().',
  body: [ '现代科学计算', '数据处理', '过程实时控制', '人工智能' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '运行磁盘碎片整理程序可以().',
  body: [ '增加磁盘的存储空间', '找回丢失的文件碎片', '加快文件的读写速度', '整理破碎的磁盘片' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在软件方面,第一代计算机主要使用().',
  body: [ '机器语言', '高级程序设计语言', '数据库管理系统', 'BASIC和FORTRAN' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在下列关于信息技术的说法中,错误的是().',
  body: 
   [ '微电子技术是信息技术的基础',
     '计算机技术是现代信息技术的核心',
     '光电子技术是继微电子技术之后近30年来迅猛发展的综合性高新技术',
     '信息传输技术主要是指计算机技术和网络技术' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在相同的计算机环境中,()处理速度最快.',
  body: [ '机器语言', '汇编语言', '高级语言', '面向对象的语言' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '著名的计算机科学家尼.沃思提出了().',
  body: [ '数据结构+算法=程序', '存储控制结构', '信息熵', '控制论' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '最能反映计算机主要功能的说法是().',
  body: [ '计算机可以代替人的劳动', '计算机可以存储大量信息', '计算机可以实现高速度的运算', '计算机是一种信息处理机' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '"32位微机"中的32指的是().',
  body: [ '存储单位', '内存容量', 'CPU型号', '机器字长' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '"PentiumⅡ350"和"PentiumⅢ450"中的"350"和"450"的含义是().',
  body: [ '最大内存容量', '最大运算速度', '最大运算精度', 'CPU的时钟频率' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '"长城386微机"中的"386"指的是().',
  body: [ 'CPU的型号', 'CPU的速度', '内存的容量', '运算器的速度' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()不是微机显示系统使用的显示标准.',
  body: [ 'API', 'CGA', 'EGA', 'VGA' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()不是微机硬件系统的主要性能指标.',
  body: [ 'OS的性能', '机器的主频', '内存容量', 'CPU型号' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()不是硬盘驱动器的接口电路.',
  body: [ 'ISA', 'PI', 'EISA', 'AGP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '()不属于计算机的外部存储器.',
  body: [ '软盘', '硬盘', '内存条', '光盘' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '()不属于逻辑运算.',
  body: [ '非运算', '与运算', '除法运算', '或运算' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '()不属于微机CPU.',
  body: [ '内存', '运算器', '控制器', '累加器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()不属于微机总线.',
  body: [ '地址总线', '通信总线', '数据总线', '控制总线' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '()合起来叫外部设备.',
  body: [ '输入/输出设备和外存储器', '打印机、键盘和显示器', '软盘驱动器和打印机', '驱动器、打印机、键盘和显示器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()设备分别属于输入设备、输出设备和存储设备.',
  body: [ 'CRT、CPU、ROM', '磁盘、鼠标、键盘', '鼠标器、绘图仪、光盘', '磁带、打印机、激光打印机' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '()是大写字母锁定键,主要用于连续输入若干个大写字母.',
  body: [ 'Tab', 'Ctrl', 'Alt', 'Caps Lock' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '()是控制和管理计算机硬件和软件资源、合理地组织计算机工作流程、方便用户使用的程序集合.',
  body: [ '操作系统', '监控程序', '应用程序', '编译系统' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()是内存储器中的一部分,CPU对它们只能读取不能存储.',
  body: [ 'RAM', '随机存储器', 'ROM', '键盘' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '()是上档键,主要用于辅助输入上档字符.',
  body: [ 'Shift', 'Ctrl', 'Alt', 'Tab' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()是用来存储程序及数据的装置.',
  body: [ '控制器', '输入设备', '存储器', '输出设备' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '()属于并行接口.',
  body: [ 'LPT1', '键盘接口', 'COM1', 'COM2' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '16位的中央处理器是可以处理几个16进制的数.',
  body: [ '4', '8', '16', '32' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Cache的功能是().',
  body: [ '数据处理', '存储数据和指令', '存储和执行程序', '以上全不是' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'Cache中的数据是()中部分内容的映射.',
  body: [ '硬盘', '软盘', '外存', '主存' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'CD-ROM驱动器的主要性能指标是数据的().',
  body: [ '压缩率', '读取速率', '频率', '存储容量' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'CD-ROM是指().',
  body: [ '只读型光盘', '可擦写光盘', '一次性可写入光盘', '具有磁盘性质的可擦写光盘' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'CGA、EGA、VGA是()的性能指标.',
  body: [ '磁盘存储器', '显示器', '总线', '打印机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'CGEGVGA是()的性能指标.',
  body: [ '打印机', '显示器', '键盘和鼠标', '绘图仪' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'CPU包括().',
  body: [ '控制器、运算器和内存储器', '控制器和运算器', '内存储器和控制器', '内存储器和运算器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'CPU不能直接访问的存储器是().',
  body: [ 'ROM', 'RAM', 'cache', '外部存储器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'CPU的中文含义是().',
  body: [ '主机', '中央处理单元', '运算器', '控制器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'CPU的主要性能指标是().',
  body: [ '价格、字长、内存容量', '价格、字长、可靠性', '字长、主频', '主频、内存和外存容量' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'CPU可直接读写()中的内容.',
  body: [ 'ROM', 'RAM', '硬盘', '光盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'CPU每执行一个(),就完成一步基本运算或判断.',
  body: [ '软件', '硬件', '指令', '语句' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'CPU主要由运算器和()组成.',
  body: [ '控制器', '存储器', '寄存器', '编辑器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Gb/s的正确含义是().',
  body: [ '每秒兆位', '每秒千兆位', '每秒百兆位', '每秒万兆位' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'IC卡按卡中所镶嵌的集成电路芯片可分为两大类().',
  body: [ '存储器卡和CPU卡', '存储器卡和接触式IC卡', 'CPU卡和非接触式IC卡', '接触式IC卡和非接触式IC卡' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'ISA、EISA、VESA、PCI是微机中()的标准.',
  body: [ '显示', '主板', '总线', '存储器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'LCD显示器的尺寸是指液晶面板的()尺寸.',
  body: [ '长度', '高度', '宽度', '对角线' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'PC机除加电冷启动外,按()键相当于冷启动.',
  body: [ 'Ctrl+Break', 'Ctrl+Prtsc', 'RESET按钮', 'Ctrl+Alt+Del' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'PC机是指().',
  body: [ '微型计算机', '电子计算机', '通用计算机', '个人计算机' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Pentium 4处理器中的cache是用SRAM组成的,其作用是().',
  body: [ '提高数据存取的安全性', '扩大主存储器的容量', '发挥CPU的高速性能', '提高CPU与外部设备交换数据的速度' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Pentium Ⅳ型号的CPU的字长是().',
  body: [ '8位', '16位', '32位', '64位' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Pentium(奔腾)芯片是()位的微处理器芯片.',
  body: [ '4位', '8位', '16位', '32位' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'ROM属于().',
  body: [ '顺序存储器', '只读存储器', '磁存储器', '随机读写存储器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'ROM与RAM的主要区别在于().',
  body: 
   [ 'ROM可以永久保存信息,RAM在掉电后信息会丢失',
     'ROM掉电后,信息会丢失,RAM则不会',
     'ROM是内存储器,RAM是外存储器',
     'RAM是内存储器,ROM是外存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'SRAM存储器是().',
  body: [ '静态随机存储器', '静态只读存储器', '动态随机存储器', '动态只读存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'UPS是指().',
  body: [ '大功率稳压电源', '不间断电源', '用户处理系统', '联合处理系统' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '不是电脑的输出设备的是().',
  body: [ '显示器', '绘图仪', '打印机', '扫描仪' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '不是电脑输入设备的是().',
  body: [ '键盘', '绘图仪', '鼠标', '扫描仪' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '不是计算机的存储设备的是().',
  body: [ '软盘', '硬盘', '光盘', 'CPU' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '采用PCI的奔腾微机,其中的PCI是().',
  body: [ '产品型号', '总线标准', '微机系统名称', '微处理器型号' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '除外存外,微型计算机的存储系统一般指().',
  body: [ 'ROM', '控制器', 'RAM', '内存' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '磁盘存储器存、取信息的最基本单位是().',
  body: [ '字节', '字长', '扇区', '磁道' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '磁盘存储器存、取信息的最基本单位是().',
  body: [ '字节', '字长', '扇区', '磁道' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '磁盘驱动器属于()设备.',
  body: [ '输入', '输出', '输入和输出', '以上均不是' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '磁盘属性对话框中看不到的信息是().',
  body: [ '文件数', '容量', '卷标', '可用空间' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '存储器的存储容量通常用字节(Byte)来表示,1GB的含意是().',
  body: [ '1024M', '1000K个Bit', '1024K', '1000KB' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '存储器的容量一般分为KB、MB、GB和()来表示.',
  body: [ 'FB', 'TB', 'YB', 'XB' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '存储器分为内存储器和外存储器两类,().',
  body: 
   [ '它们中的数据均可被CPU直接调用',
     '只有外存储器中的数据可被CPU调用',
     '它们中的数据均不能被CPU直接调用',
     '其中只有内存储器中的数据可被CPU直接调用' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '存储器分为外存储器和().',
  body: [ '内存储器', 'ROM', 'RAM', '硬盘' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '存储容量可以用KB表示,4KB表示存储单元为().',
  body: [ '4000个字', '4000个字节', '4096个字', '4096个字节' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '存储容量是按()为基本单位计算.',
  body: [ '位', '字节', '字符', '数' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '存储一个国际码需要()字节.',
  body: [ '1', '2', '3', '4' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '存储在计算机中的静态图像的压缩标准是().',
  body: [ 'BMP', 'JPG', 'MPEG', 'AVI' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '打印机是电脑系统的主要输出设备之一,分为()两大系列产品.',
  body: [ '喷墨式和非击打式', '击打式和非击打式', '喷墨式和激光式', '喷墨式和针式' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '打印机是一种().',
  body: [ '输入设备', '输出设备', '存储器', '运算器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '当系统硬件发生故障或更换硬件设备时,为了避免系统意外崩溃应采用的启动方式为().',
  body: [ '通常模式', '登录模式', '安全模式', '命令提示模式' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '当显示"Abort,Retry,Ignore,Fail"按下I时,则().',
  body: [ '废除当前命令', '忽略错误,继续执行', '重新执行该命令', '命令失败' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '第三代电子计算机以()作为基本电子元件.',
  body: [ '大规模集成电路', '电子管', '晶体管', '中小规模集成电路' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '第四代电子计算机以()作为基本电子元件.',
  body: [ '小规模集成电路', '中规模集成电路', '大规模集成电路', '大规模、超大规模集成电路' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '第一台电子计算机ENIAC诞生于()年.',
  body: [ '1927', '1936', '1946', '1951' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '电子计算机的工作原理可概括为().',
  body: [ '程序设计', '运算和控制', '执行指令', '存储程序和程序控制' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '电子计算机的算术/逻辑单元,控制单元合称为().',
  body: [ 'CPU', '外设', '主机', '辅助存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '电子计算机技术发展至今,仍采用()提出的存储程序方式进行工作.',
  body: [ '牛顿', '爱因斯坦', '爱迪生', '冯·诺依曼' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '电子计算机可直接执行的指令所包含的两部分是().',
  body: [ '数字和文字', '操作码和操作对象', '数字和运算符号', '源操作数和目的操作数' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '电子计算机与其它计算工具的本质区别是().',
  body: [ '能进行算术运算', '运算速度快', '计算精度高', '存储并自动执行程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '电子计算机之所以能够快速、自动、准确地按照人们意图进行工作,其最主要的原因是().',
  body: [ '存储程序', '采用逻辑器件', '总线结构', '识别控制代码' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '电子数字计算机能够自动地按照人们的意图进行工作的最基本的思想是程序存储,这个思想是()提出来的.',
  body: [ '爱恩斯坦', '图灵', '冯·诺依曼', '布尔' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '读写速度最快的存储器是().',
  body: [ '光盘', '内存储器', '软盘', '硬盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '断电会使存储数据丢失的存储器是().',
  body: [ 'RAM', '硬盘', '软盘', 'ROM' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '对补码的叙述,()不正确.',
  body: 
   [ '负数的补码是该数的反码最右加1',
     '负数的补码是该数的原码最右加1',
     '正数的补码就是该数的原码',
     '正数的补码就是该数的反码' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '对软件的态度为().',
  body: [ '可以正确使用盗版软件', '系统软件不需要备份', '购买商品软件时要购买正版', '软件不需要法律保护' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '冯.诺依曼为现代计算机的结构奠定了基础,他的主要设计思想是().',
  body: [ '采用电子元件', '数据存储', '虚拟存储', '程序存储' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '负责对I/O设备的运行进行全程控制的是().',
  body: [ 'I/O接口', 'CPU', 'I/O设备控制器', '总线' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '负责管理计算机的硬件和软件资源,为应用程序开发和运行提供高效率平台的软件是().',
  body: [ '操作系统', '数据库管理系统', '编译系统', '专用软件' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '高速缓存的英文为().',
  body: [ 'CACHE', 'VRAM', 'ROM', 'RAM' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '关于高速缓冲存储器Cache的描述,不正确的是().',
  body: 
   [ 'Cache是介于CPU和内存之间的一种可高速存取信息的芯片',
     'Cache越大,效率越高',
     'Cache用于解决CPU和RAM之间速度冲突问题',
     '存放在Cache中的数据使用时存在命中率的问题' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '关于基本输入输出系统(BIOS)及CMOS存储器,下列说法中错误的是().',
  body: 
   [ 'BIOS存放在ROM中,是非易失性的',
     'CMOS中存放着基本输入输出设备的驱动程序及其设置参数',
     'BIOS 是PC机软件最基础的部分,包含CMOS设置程序等',
     'CMOS存储器是易失性的' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '关于微型计算机的知识叙述正确的是().',
  body: 
   [ '外存储器中的信息不能直接进入CPU进行处理',
     '每次使用软盘前,都要进行格式化',
     '软盘驱动器和软盘属于外部设备',
     '如果将软盘的写保护打开,磁盘上的信息将只能读,不能写' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '光笔属于().',
  body: [ '控制设备', '输入设备', '输出设备', '通信设备' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '光盘刻录机的一项重要性能指标是().',
  body: [ '抗光性', '光盘尺寸', '刻录速度', '密闭性' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '光盘驱动器通过激光束来读取光盘上的数据时,光学头与光盘().',
  body: [ '直接接触', '不直接接触', '播放VCD时接触', '有时接触有时不接触' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '光驱的倍速越大().',
  body: [ '数据传输越快', '纠错能力越强', '播放VCD效果越好', '所能读取光盘的容量越大' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '和外存储器相比,内存储器的特点是().',
  body: [ '容量大 速度快 成本低', '容量大 速度慢 成本高', '容量小 速度快 成本高', '容量小 速度慢 成本低' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '机系统中存储容量最大的部件是().',
  body: [ '硬盘', '主存储器', '高速缓存器', '软盘' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '基于冯·诺依曼思想而设计的计算机硬件系统包括().',
  body: 
   [ '主机、输入设备、输出设备',
     '控制器、运算器、存储器、输入设备、输出设备',
     '主机、存储器、显示器',
     '键盘、显示器、打印机、运算器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '集成电路具有体积小、重量轻、可靠性高的特点.其工作速度主要取决于().',
  body: [ '晶体管的数目', '逻辑门电路的大小', '组成逻辑门电路的晶体管的尺寸', '集成电路的质量' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '集成电路是微电子技术的核心.它的分类的标准有很多种,其中通用集成电路和专用集成电路是按照()来分类的.',
  body: [ '集成电路包含的晶体管的数目', '晶体管结构、电路和工艺', '集成电路的功能', '集成电路的用途' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机的 CPU 主要由运算器和()组成.',
  body: [ '控制器', '存储器', '寄存器', '编辑器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机的CPU每执行一个()就完成一步基本运算或判断.',
  body: [ '语句', '指令', '程序', '软件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机的内存储器比外存储器().',
  body: [ '更便宜', '存储容量更大', '存取速度快', '虽贵但能存储更多的信息' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机的软件系统包括().',
  body: [ '操作系统', '编译软件和连接程序', '各种应用软件包', '系统软件和应用软件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机的软件系统分为().',
  body: [ '程序和数据', '工具软件和测试软件', '系统软件和应用软件', '系统软件和测试软件' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机的硬件系统由五大部分组成,其中()是整个计算机的指挥中心.',
  body: [ '运算器', '控制器', '接口电路', '系统总线' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机的指令集合称为().',
  body: [ '机器语言', '高级语言', '程序', '软件' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机的指令主要存放在()中.',
  body: [ '存储器', '微处理器', 'CPU', '键盘' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机的主机指的是().',
  body: [ '计算机的主机箱', 'CPU和内存储器', '运算器和控制器', '运算器和输入/输出设备' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机可分为主机和()两部分.',
  body: [ '外设', '软件', '键盘', '显示器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机可执行的指令一般都包含().',
  body: [ '数字和文字两部分', '数字和运算符号两部分', '操作码和地址码两部分', '源操作数和目的操作数两部分' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机内存储器比外存储器更优越,其特点为().',
  body: [ '便宜', '存取速度快', '贵且存储信息少', '存储信息多' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机软件包括().',
  body: [ '程序和指令', '程序和文档', '命令和文档', '算法及数据结构' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机软件系统的组成是().',
  body: [ '系统软件与网络软件', '应用软件与网络软件', '操作系统与应用软件', '系统软件与应用软件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机软件系统一般包括系统软件和().',
  body: [ '字处理软件', '应用软件', '管理软件', '科学计算软件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机突然停电,则计算机()中的数据会全部丢失.',
  body: [ '硬盘', '光盘', 'RAM', 'ROM' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机图书管理系统中的图书借阅处理,属于()处理系统.',
  body: [ '管理层业务', '操作层业务', '知识层业务', '决策层业务' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机系统是由()组成的.',
  body: [ '主机及外部设备', '主机键盘显示器和打印机', '系统软件和应用软件', '硬件系统和软件系统' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机系统中,若总线的数据线宽度为16位,总线的工作频率为133MHZ,每个总线周期传输一次数据,则总线带宽为().',
  body: [ '133MB/S', '2128MB/SC', '266MB/S', '16MB/S' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机系统中的存储器系统是指().',
  body: [ '主存储器', 'ROM存储器', 'RAM存储器', '主存储器和外存储器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机向使用者传递计算处理结果的设备称为().',
  body: [ '输入设备', '输出设备', '存储器', '微处理器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机应用中通常所讲的OA代表().',
  body: [ '辅助设计', '辅助制造', '科学计算', '办公自动化' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机应用最广泛的领域是().',
  body: [ '科学计算', '信息处理', '过程控制', '人工智能' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机应由五个基本部分组成,下面()不属于这五个基本组成.',
  body: [ '运算器', '控制器', '总线', '存储器、输入设备和输出设备' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机硬件中,没有().',
  body: [ '控制器', '存储器', '输入/输出设备', '文件夹' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机正在运行的程序存放在().',
  body: [ 'ROM', 'RAM', '显示器', 'CPU' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机指令通常由两部分组成()和操作数.',
  body: [ '原码', '机器码', '操作码', '内码' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机中RAM因断电而丢失的信息待再通电后()恢复.',
  body: [ '能全部', '不能全部', '能部分', '一点不能' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机中的地址是指().',
  body: [ 'CPU中指令编码', '存储单元的有序编号', '软盘的磁道数', '数据的二进制编码' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机中的应用软件是指().',
  body: 
   [ '所有计算机上都应使用的软件',
     '能被各用户共同使用的软件',
     '专门为某一应用目的而编制的软件',
     '计算机上必须使用的软件' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机中的运算器能进行()运算.',
  body: [ '算术', '字符处理', '逻辑', '算术和逻辑' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机中对数据进行加工与处理的部件,通常称为().',
  body: [ '运算器', '控制器', '显示器', '存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机中既可作为输入设备又可作为输出设备的是().',
  body: [ '打印机', '显示器', '鼠标', '磁盘' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机中配置高速缓冲存储器(Cache)是为了解决().',
  body: 
   [ '内存与外存之间速度不匹配问题',
     '主机与外部设备之间速度不匹配问题',
     'CPU与外存之间速度不匹配问题',
     'CPU与内存之间速度不匹配问题' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机中软件与硬件的关系是().',
  body: [ '相互独立', '软件离不开硬件', '硬件离不开软件', '互相支持' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机中运算器的作用是().',
  body: 
   [ '控制数据的输入/输出',
     '控制主存与辅存间的数据交换',
     '完成各种算术运算和逻辑运算',
     '协调和指挥整个计算机系统的操作' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机主要由(),存储器,输入设惫和输出设备等部件构成.',
  body: [ '硬盘', 'B/软盘', '键盘', 'CPU' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机字长取决于()总线的宽度.',
  body: [ '数据总线', '地址总线', '控制总线', '通信总线' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将一部分软件永恒地存于只读内存中称之为().',
  body: [ '硬件', '软件', '固化', '辅助内存' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '静态RAM的特点是().',
  body: 
   [ '在不断电的条件下,其中的信息保持不变,因而不必定期刷新',
     '在不断电的条件下,其中的\'信息不能长时间保持,因而必须定期刷新才不致丢失信息',
     '其中的信息只能读不能写',
     '其中的信息断电后也不会丢失' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '就工作原理而论,世界上不同型号的计算机,一般认为是基于匈牙利籍的科学家冯.诺衣曼提出的()原理.',
  body: [ '二进制数', '布尔代数', '开关电路', '存储程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '决定微机性能的主要是().',
  body: [ '价格', 'CPU', '控制器', '质量' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '决定显示器分辨率的主要因素是().',
  body: [ '显示器的尺寸', '显示器的种类', '显示器适配器', '操作系统' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '可从()中随意读出或写入数据.',
  body: [ 'PROM', 'ROM', 'RAM', 'EPROM' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '两个软件都属于系统软件的是().',
  body: [ 'DOS和Excel', 'DOS和UNIX', 'UNIX和WPS', 'Word和Linux' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '某微型计算机的内存储器容量是128MB,这里的1MB是().',
  body: [ '1024x1024个字节', '1024个二进制位', '1000个字节', '1000~1000个字节' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '某微型计算机使用Pentium-Ⅲ800的芯片,其中的800是指().',
  body: [ '内存容量', '主板型号', 'CPU型号', 'CPU的主频' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '目前,DVD盘上的信息是().',
  body: [ '可以反复读和写', '只能读出', '可以反复写入', '以上都可以' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '目前,制造计算机所用的电子器件是().',
  body: [ '电子管', '晶体管', '集成电路', '超大规模集成电路' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '目前普遍使用的微型计算机,所采用的逻辑元件是().',
  body: [ '电子管', '大规模和超大规模集成电路', '晶体管', '小规模集成电路' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '目前使用的大多数打印机是通过()接口与计算机连接的.',
  body: [ '串行', '并行口', 'IDE接', 'SCSI接口' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '目前使用的光盘存储器中,可对写入信息进行改写的是().',
  body: [ 'CD-RW', 'CD-R', 'CD-ROM', 'DVD-ROM' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '目前世界上不同型号的计算机,就其工作原理而言,一般都认为是基于冯·诺伊曼提出的().',
  body: [ '二进制原理', '布尔代数原理', '摩尔定律', '存储程序控制原理' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '目前微机所用的<系统>总线标准有多种,下面给出的四个缩写名中不属于描述总线标准的是().',
  body: [ 'VGA', 'USB', 'ISA', 'PCI' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '目前在台式PC上最常用的I/O总线是().',
  body: [ 'ISA', 'PCI', 'EISA', 'VL-BUS' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机硬件系统是由()组成的.',
  body: [ '主机和外部设备', '主机和操作系统', 'CPU和输入输出设备', '内存、外存和输入输出设备' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微型计算机硬件系统中最核心的部件是().',
  body: [ '主板', 'CPU', '内存储器', 'I/O设备' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机硬件系统主要包括存储器、输入设备、输出设备和().',
  body: [ '中央处理器', '运算器', '控制器', '主机' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机中,RAM的中文名字是().',
  body: [ '随机存储器', '只读存储器', '高速缓冲存储器', '可编程只读存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机中,控制器的基本功能是().',
  body: [ '存储各种控制信息', '传输各种控制信号', '产生各种控制信息', '控制系统各部件正确地执行程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '内存按工作原理可以分为()这几种类型.',
  body: [ 'RAM和BIOS', 'BIOS和ROM', 'CMOS和BIOS', 'ROM和RAM' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '内存储器是用来存储正在执行的程序和所需的数据,下列()属于内存储器.',
  body: [ '半导体存储器', '磁盘存储器', '磁带存储器', '软盘驱动器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '内存储器中每一个存储单元被赋予唯一的一个序号,该序号称为().',
  body: [ '容量', '内容', '标号', '地址' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '内存的大部分由RAM组成,其中存储的数据在断电后()丢失.',
  body: [ '不会', '部分', '完全', '不一定' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '内存中每个基本单位都被赋予唯一的序号,称为().',
  body: [ '地址', '字节', '编号', '容量' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '能描述计算机的运算速度的是().',
  body: [ '二进制位', 'MIPS', 'MHz', 'MB' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '能直接与CPU交换信息的功能单元是().',
  body: [ '硬盘', '控制器', '主存储器', '运算器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '配置高速缓冲存储器(cache)是为了解决().',
  body: 
   [ '内存与辅助存储器之间速度不匹配问题',
     'CPU与辅助存储器之间速度不匹配问题',
     'CPU与内存储器之间速度不匹配问题',
     '主机与外设之间速度不匹配问题' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '人们根据特定的需要预先为计算机编制的指令序列称为().',
  body: [ '软件', '文件', '程序', '集合' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '扫描仪是属于().',
  body: [ 'CPU', '存储器', '输入设备', '输出设备' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '输入设备是().',
  body: [ '从磁盘上读取信息的电子线路', '磁盘文件等', '键盘、鼠标器和打印机等', '从计算机外部获取信息的设备' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '输入输出装置和外接的辅助存储器统称为().',
  body: [ 'CPU', '存储器', '操作系统', '外围设备' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '数据一旦存入后,非经特别处理,不能改变其内容,所存储的数据只能读取,但无法将新数据写入, 所以叫做().',
  body: [ '磁芯', '只读存储器', '硬盘', '随机存取内存' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '速度快,分辨率高的打印机类型是().',
  body: [ '非击打式', '激光式', '击打式', '点阵式' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '所谓的64位机是指该计算机所用的CPU().',
  body: [ '同时能处理64位二进制数', '具有64位寄存器', '只能处理64位二进制定点数', '有64个存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '通常将运算器和()合称为中央处理器,即CPU.',
  body: [ '存贮器', '输入设备', '输出设备', '控制器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '通常所说的PC机是指().',
  body: [ '单板计算机', '小型计算机', '个人计算机', '微型计算机' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '外存储器中的信息,必须首先调入(),然后才能供CPU使用.',
  body: [ 'RAM', '运算器', '控制器', 'ROM' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '外存与内存有许不同之处,外存相对于内存来说以下叙述()不正确.',
  body: 
   [ '外存不怕停电,信息可长期保存',
     '外存的容量比内存大得多,甚至可以说是海量的',
     '外存速度慢,内存速度快',
     '内存和外存都是由半导体器件构成' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '完整的计算机系统包括().',
  body: [ '硬件系统和软件系统', '主机和外部设备', '主机和程序', '人和机器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '完整的计算机硬件系统一般包括外部设备和().',
  body: [ '运算器的控制器', '存储器', '主机', '中央处理器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微处理器处理的数据基本单位为字.一个字的长度通常是().',
  body: [ '16个二进制位', '32个二进制位', '64个二进制位', '与微处理器芯片的型号有关' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '微机的硬件由()五部分组成.',
  body: 
   [ 'CPU、总线、主存、辅存和I/O设备',
     'CPU、运算器、控制器、主存和I/O设备',
     'CPU、控制器、主存、打印机和I/O设备',
     'CPU、运算器、主存、显示器和I/O设备' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微机系统中存取容量最大的部件是().',
  body: [ '硬盘', '主存储器', '高速缓存', '软盘' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微机硬件系统中地址总线的宽度<位数>对()影响最大.',
  body: [ '存储器的访问速度', 'CPU可直接访问的存储器空间大小', '存储器的字长', '存储器的稳定性' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微机硬件系统中最核心的部件是().',
  body: [ '内存储器', '输入输出设备', 'CPU', '硬盘' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微机在工作中,由于断电或突然"死机"而重新启动后,则计算机()中的信息将全部消失.',
  body: [ 'ROM和RAM', 'ROM', '硬盘', 'RAM' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '微机中,主机是由微处理器与()组成.',
  body: [ '运算器', '磁盘存储器', '软盘存储器', '内存储器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '微机中的硬盘是().',
  body: [ '内存(主存储器)', '大容量内存', '辅助存储器', 'CPU的一部分' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微机中使用的鼠标器一般连接在计算机的主机()上.',
  body: [ '并行I/O口', '串行接口', '显示器接口', '打印机接口' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机必不可少的输入/输出设备是().',
  body: [ '键盘和显示器', '键盘和鼠标', '显示器和打印机', '鼠标和打印机' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机常用的输入设备和输出设备分别是().',
  body: [ '键盘和打印机', '鼠标器和显示器', '键盘,显示器和打印机', '显示器和打印机' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微型计算机存储器系统中的Cache是().',
  body: [ '只读存储器', '高速缓冲存储器', '可编程只读存储器', '可擦除可再编程只读存储器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机的存储系统一般指主存储器和().',
  body: [ '累加器', '辅助存储器', '寄存器', 'RAM' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机的发展是以()的发展为表征的.',
  body: [ '微处理器', '软件', '主机', '控制器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机的分类通常以微处理器的()来划分的.',
  body: [ '规格', '芯片名', '字长', '寄存器数目' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微型计算机的基本组成是().',
  body: 
   [ '主机、输入设备、存储器',
     '微处理器、存储器、输入输出设备',
     '主机、输出设备、显示器',
     '键盘、显示器、打印机、运算器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机的性能主要取决于()的性能.',
  body: [ '内存储器', 'CPU', '外部设备', '外存储器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机的硬件系统包括().',
  body: 
   [ '主机、键盘和显示器',
     '主机、存储器、输入设备和输出设备',
     '微处理器、输入设备和输出设备',
     '微处理器、存储器、总线、接口和外部设备' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '微型计算机的运算器、控制器及内存储器统称为().',
  body: [ 'CPU', 'ALU', '主机', 'GPU' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微型计算机没有的总线是().',
  body: [ '地址总线', '信号总线', '控制总线', '数据总线' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机内存储器().',
  body: [ '按二进制数编址', '按字节编址', '按字长编址', '根据微处理器不同而编址不同' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机一般按()进行分类.',
  body: [ '字长', '运算速度', '主频', '内存' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机硬件系统的基本组成是().',
  body: 
   [ '主机、输入设备、存储器',
     'CPU,存储器、输入设备、输出设备',
     '主机、输出设备、显示器',
     '键盘、显示器、打印机、运算器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机硬件系统的性能主要取决于().',
  body: [ '微处理器', '内存储器', '显示适配卡', '硬磁盘存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机中,控制器的基本功能是().',
  body: [ '存储各种控制信息', '传输各种控制信号', '产生各种控制信息', '控制系统各部件正确地执行程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '微型计算机中,运算器的主要功能是进行().',
  body: [ '逻辑运算', '算术运算', '算术运算和逻辑运算', '复杂方程的求解' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '微型计算机中使用的打印机是连接在().',
  body: [ '并行接口上', '串行接口上', '显示器接口上', '键盘接口上' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '我们通常说的内存条即指().',
  body: [ 'ROM', 'EPROM', 'PPROM', 'RAM' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '系统软件中主要包括操作系统,语言处理程序和().',
  body: [ '用户程序', '实时程序', '实用程序', '编辑程序' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下边哪一个属于计算机的外存储器().',
  body: [ '磁盘', 'RAM', 'ROM', '虚拟盘' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下边设备名中哪一个是指空设备().',
  body: [ 'NUL:', 'CON:', 'COM2:', 'LPT1:' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列()不是PC机主板上的部件.',
  body: [ 'CMOS存储器', 'CCD芯片', 'PCI总线槽', 'CPU插座' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列()类不是常见的集成电路的封装形式.',
  body: [ '单列直插式', '双列直插式', '三列直插式', '阵列式' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列不能用作存储容量单位的是().',
  body: [ 'Byte', 'MIPS', 'KB', 'GB' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列不属于微机主要性能指标的是().',
  body: [ '字长', '内存容量', '软件数量', '主频' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列不属于微机总线的是().',
  body: [ '地址总线', '通信总线', '控制总线', '数据总线' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列存储器中,存取速度最快的是().',
  body: [ '内存', '硬盘', '光盘', '寄存器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列关于计算机硬件组成的描述中,错误的是().',
  body: 
   [ '计算机硬件包括主机与外设',
     '主机通常指的就是CPU',
     '外设通常指的是外部存储设备和输入/输出设备',
     'CPU的结构通常由运算器、控制器和寄存器组三部份组成' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列关于微机硬件构成的正确说法是().',
  body: 
   [ '微机由CPU和I/0设备构成',
     '微机由主存储器,外存储器和I/O设备构成',
     '微机由主机和外部设备构成',
     '微机由CPU,显示器,键盘和打印机构成' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列关于系统软件的4条叙述中,正确的一条是().',
  body: 
   [ '系统软件的核心是操作系统',
     '系统软件是与具体硬件逻辑功能无关的软件',
     '系统软件是使用应用软件开发的软件',
     '系统软件并不具体提供人机界面' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列关于硬件系统的说法中,错误是().',
  body: 
   [ '键盘,鼠标,显示器等都是硬件',
     '硬件系统不包括存储器',
     '硬件是指物理上存在的机器部件',
     '硬件系统包括运算器,控制器,存储器,输入设备和输出设备' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列关于指令、指令系统和程序的叙述中错误的是().',
  body: 
   [ '指令是可被CPU直接执行的操作命令',
     '指令系统是CPU能直接执行的所有指令的集合',
     '可执行程序是为解决某个问题而编制的一个指令序列',
     '可执行程序与指令系统没有关系' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列关于总线的说法中,错误的是().',
  body: 
   [ 'ISA,PCI和USB都是扩展总线',
     '总线一次能传送的比特数目称为总线宽度',
     '系统总线是指CPU与各外部设备连接的总线',
     '总线的类型分为内部总线,系统总线和扩展总线' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列几种存储器访问速度最快的是().',
  body: [ '硬盘', 'CD-ROM', 'RAM', '软盘' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列哪个不是存储器的存储容量单位().',
  body: [ '位', '字节', '字', '升' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列软件中()一定是系统软件.',
  body: 
   [ '自编的一个C程序,功能是求解一个一元二次方程',
     'WINDOWS操作系统',
     '用汇编语言编写的一个练习程序',
     '存储有计算机基本输入输出系统的ROM芯片' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列软件中,具有系统软件功能的是().',
  body: [ '数学软件包', '人事档案管理程序', 'WINDOWS', 'OFFICE2000' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列设备中,()不能作为微机的输出设备.',
  body: [ '打印机', '显示器', '键盘和鼠标', '绘图仪' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列设备中,()都是输入设备',
  body: [ '键盘,打印机,显示器', '扫描仪,鼠标,光笔', '键盘,鼠标,绘图仪', '绘图仪,打印机,键盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列设备中不能作为输出设备的是().',
  body: [ '键盘', '显示器', '绘图仪', '打印机' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列设备中既是输入设备又是输出设备的是().',
  body: [ '内存储器', '外存储器', '键盘', '打印机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列设备中属于可反复刻录的设备是().',
  body: [ 'CD-ROM', 'DVD-ROM', 'CD-R', 'CD-RW' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列设备中属于输入设备的是().',
  body: [ '鼠标器', '显示器', '打印机', '绘图仪' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列说法不正确的是().',
  body: [ '比特是事物存在的一种状态', '数据就是信息', '信息可以具有与数据相同的形式', '数据是人或机器能识别并处理的符号' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列说法中,错误的是().',
  body: 
   [ '集成电路是微电子技术的核心',
     '硅是制造集成电路常用的半导体材料',
     '集成电路按用途可分为通用和专用两大类,微处理器和存储器芯片都属于专用集成电路',
     '现在PC机是使用的微处理器芯片属于超大规模和极大规模集成电路' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列说法中正确的是().',
  body: 
   [ 'CD-ROM是一种只读存储器但不是内存储器',
     'CD-ROM驱动器是计算机的基本部分',
     '只有存放在CD-ROM盘上的数据才称为多媒体信息',
     'CD-ROM盘上最多能够存储大约350兆字节的信息' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列四条叙述中,属RAM特点的是().',
  body: 
   [ '可随机读写数据,且断电后数据不会丢失',
     '可随机读写数据,断电后数据将全部丢失',
     '只能顺序读写数据,断电后数据将部分丢失',
     '只能顺序读写数据,且断电后数据将全部丢失' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列四条叙述中,属ROM特点的是().',
  body: 
   [ '可随机读取数据,且断电后数据不会丢失',
     '可随机读写数据,断电后数据将全部丢失',
     '只能顺序读写数据,断电后数据将部分丢失',
     '只能顺序读写数据,且断电后数据将全部丢失' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列四条叙述中,正确的一条是().',
  body: 
   [ '计算机系统是由主机、外设和系统软件组成的',
     '计算机系统是由硬件系统和应用软件组成的',
     '计算机系统是由硬件系统和软件系统组成的',
     '计算机系统是由微处理器、外设和软件系统组成的' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列叙述中正确的是().',
  body: 
   [ '系统软件是买来的,而应用软件是自己编写的',
     '外存储器可以和CPU直接交换数据',
     '微型计算机主机就是微型计算机系统',
     '磁盘必须格式化后才能使用' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列有关Moore定律正确叙述的是().',
  body: 
   [ '单块集成电路的集成度平均每8~14个月翻一番',
     '单块集成电路的集成度平均每18~24个月翻一番',
     '单块集成电路的集成度平均每28~34个月翻一番',
     '单块集成电路的集成度平均每38~44个月翻一番' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列有关存储器读写速度的排列,正确的是().',
  body: 
   [ 'RAM>Cache>硬盘>软盘',
     'Cache>RAM>硬盘>软盘',
     'Cache>硬盘>RAM>软盘',
     'RAM>硬盘>软盘>Cache' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列有关软件的描述中,说法不正确的是().',
  body: 
   [ '软件就是为方便使用计算机和提高使用效率而组织的程序以及有关文档',
     '所谓"裸机",其实就是没有安装软件的计算机',
     'dBASEⅢ,FoxPro,Oracle属于数据库管理系统,从某种意义上讲也是编程语言,',
     '通常,软件安装的越多,计算机的性能就越先进' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面对计算机硬件系统组成的描述,不正确的一项是().',
  body: 
   [ '构成计算机硬件系统的都是一些看得见、摸得着的物理设备',
     '计算机硬件系统是由运算器、控制器、存储器、输入设备和输出设备组成',
     '软盘属于计算机硬件系统中的存储设备',
     '操作系统属于计算机的硬件系统' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面关于ROM的说法中,不正确的是().',
  body: 
   [ 'CPU不能向ROM随机写入数据',
     'ROM中的内容在断电后不会消失',
     'ROM是只读存储器的英文缩写',
     'ROM是只读的,所以它不是内存而是外存' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面关于比特的叙述中,错误的是().',
  body: 
   [ '比特是组成信息的最小单位',
     '比特只有"0"和"1"两个符号',
     '比特"0"小于比特"1"',
     '比特即可以表示数值,也可以表示图像和声音' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面关于基本输入/输出系统BIOS的描述,不正确的是().',
  body: 
   [ '是一组固化在计算机主板上一个ROM芯片内的程序',
     '它保存着计算机系统中最重要的基本输入/输出程序,系统设置信息',
     '即插即用与BIOS芯片有关',
     '对于定型的主板,生产厂家不会改变BIOS程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面关于内存储器<也称为主存>的叙述中,正确的是().',
  body: 
   [ '内存储器和外存储器是统一编址的,字是存储器的基本编址单位',
     '内存储器与外存储器相比,存取速度慢、价格便宜',
     '内存储器与外存储器相比,存取速度快、价格贵',
     'RAM和ROM在断电后信息将全部丢失' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面关于通用串行总线USB的描述,不正确的是().',
  body: 
   [ 'USB接口为外设提供电源',
     'USB设备可以起集线器作用',
     '可同时连接127台输入/输出设备',
     '通用串行总线不需要软件控制就能正常工作' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面关于虚拟存储器的说明中,正确的是().',
  body: 
   [ '是提高计算机运算速度的设备',
     '由RAM加上高速缓存组成',
     '其容量等于主存加上cache的存储器',
     '由物理内存和硬盘上的虚拟内存组成' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面关于总线描述,不正确的是().',
  body: 
   [ 'IEEE 1394是一种连接外部设备的机外总线,按并行方式通信',
     '内部总线用于连接CPU的各个组成部件,它位于芯片内部',
     '系统总线指连接微型计算机中各大部件的总线',
     '外部总线则是微机和外部设备之间的总线' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面几种总线中,()是PC机上最早使用的标准结构总线.',
  body: [ 'EISA', 'VESA', 'PCI', 'ISA' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面叙述正确的是 () .',
  body: 
   [ '由于机器语言执行速度快,所以现在人们还是喜欢用机器语言编写程序',
     '使用了面向对象的程序设计方法就可以扔掉结构化程序设计方法',
     'GOTO语句控制程序的转向方便,所以现在人们在编程时还是喜欢使用GOTO语句',
     '使用了面向对象的程序设计方法,在具体编写代码时仍需要使用结构化编程技术' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面有关计算机的叙述中,正确的是().',
  body: 
   [ '计算机的主机只包括CPU',
     '计算机程序必须装载到内存中才能执行',
     '计算机必须具有硬盘才能工作',
     '计算机键盘上字母键的排列方式是随机的' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '显示器必须与()配合使用.',
  body: [ '显示卡', '打印机', '声卡', '光驱' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '显示器的显示效果与()有关.',
  body: [ '显示卡', '中央处理器', '内存', '硬盘' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '显示器的性能指标不包括().',
  body: [ '屏幕大小', '点距', '带宽', '图象' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '显示器的重要技术指标是().',
  body: [ '对比度', '灰度', '分辨率', '色彩' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '显示器的主要性能参数是分辨率,一般用()来表示.',
  body: [ '显示屏的尺寸', '显示屏上光栅的列数×行数', '可以显示的最大颜色数', '显示器的刷新速率' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '芯片组是系统主板的灵魂,它决定了主板的结构及CPU的使用.芯片有"南桥"和"北桥"之分,"南桥"芯片的功能是().',
  body: 
   [ '负责I/O接口以及IDE设备(硬盘等)的控制等',
     '负责与CPU的联系',
     '控制内存',
     'AGP,PCI数据在芯片内部传输' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '液晶显示器<LCD>作为计算机的一种图文输出设备,已逐渐普及,下列关于液晶显示器的叙述中错误的是().',
  body: 
   [ '液晶显示器是利用液晶的物理特性来显示图像的',
     '液晶显示器内部的工作电压大于CRT显示器',
     '液晶显示器功耗小,无辐射危害',
     '液晶显示器便于使用大规模集成电路驱动' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '一般说主存储器和外存储器的主要区别在于().',
  body: 
   [ '主存储器容量小,速度快,价格高,而外存储器容量大,速度慢,价格低',
     '主存储器容量小,速度慢,价格低,而外存储器容量大,速度快,价格高',
     '主存储器容量大,速度快,价格高,而外存储器容量小,速度慢,价格低',
     '区别仅仅是因为一个在计算机里,一个在计算机外' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '一个完整的计算机系统包括().',
  body: [ '主机、键盘、显示器', '计算机及其外部设备', '系统软件与应用软件', '计算机的硬件系统和软件系统' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '一个完整的计算机系统是由()组成的.',
  body: [ '主机及外部设备', '主机,键盘,显示器和打印机', '系统软件和应用软件', '硬件系统和软件系统' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '一台计算机可能会有多种多样的指令,这些指令的集合就是().',
  body: [ '指令系统', '指令集合', '指令群', '指令包' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '一台计算机主要由运算器、控制器、存储器、()及输出设备等部件构成.',
  body: [ '屏幕', '输入设备', '磁盘', '打印机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '一条指令必须包括().',
  body: [ '操作码和地址码', '信息和数据', '时间和信息', '以上都不是' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以程序存储和程序控制为基础的计算机结构是由()提出的.',
  body: [ '布尔', '冯·诺依曼', '图灵', '帕斯卡' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以二进制和程序控制为基础的计算机结构是由()最早提出的.',
  body: [ '布尔', '卡诺', '冯.诺依曼', '图灵' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下不属于扫描设备的是().',
  body: [ '光学字符阅读器', '条形码阅读器', '喷墨打印机', '磁墨识别设备' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下关于打印机的说法中不正确的是().',
  body: 
   [ '如果打印机图标旁有了复选标记,则已将该打印机设置为默认打印机',
     '可以设置多台打印机为默认打印机',
     '在打印机管理器中可以安装多台打印机',
     '在打印时可以更改打印队列中尚未打印文档的顺序' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下描述()不正确.',
  body: 
   [ '内存与外存的区别在于内存是临时性的,而外存是永久性的',
     '内存与外存的区别在于外存是临时性的,而内存是永久性的',
     '平时说的内存是指RAM',
     '从输入设备输入的数据直接存放在内存' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下属于系统软件的是().',
  body: [ '公式编辑器', '电子表格软件', '查病毒软件', '语言处理系统' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下说法中最合理的是().',
  body: 
   [ '硬盘上的数据不会丢失',
     '只要防止误操作,就能防止硬盘上数据的丢失',
     '只要没有误操作,并且没有病毒的感染,硬盘上的数据就是安全的',
     '不管怎么小心,硬盘上的数据都有可能读不出' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '硬盘存储器的特点是().',
  body: 
   [ '由于全封闭,耐震性好,不易损坏',
     '耐震性差,搬运时要注意保护',
     '没有易碎件,在搬运时不像显示器那样要注意保护',
     '不用时应套人纸套,防止灰尘进入' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '硬盘存储器是一种().',
  body: [ '外存储器', '内存储器', '主机的一部分', '数据通信设备' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '硬盘在工作时,应特别注意避免().',
  body: [ '光线直射', '噪音', '强烈震荡', '卫生环境不好' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用MIPS来衡量的计算机性能是指计算机的().',
  body: [ '传输速率', '存储容量', '字长', '运算速度' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '用户可以多次向其中写入信息的光盘是().',
  body: [ 'CD-ROM', 'CD-R', 'CD-RW', 'DVD-ROM' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '运行应用程序时,如果内存容量不够,只有通过()来解决.',
  body: [ '扩充硬盘容量', '增加内存', '把软盘由单面单密度换为双面高密度', '把软盘换为光盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '运算器的主要功能是().',
  body: [ '控制计算机各部件协同动作进行计算', '进行算术和逻辑运算', '进行运算并存储结果', '进行运算并存取数据' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '运算器为计算机提供了计算与逻辑功能,因此称它为().',
  body: [ 'CPU', 'EPROM', 'ALU', 'CTU' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '运算器又称为().',
  body: [ 'ALU', 'ADD', '逻辑器', '减法器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在PC机中,各类存储器的速度由高到低的次序是().',
  body: 
   [ '主存、Cache、硬盘、软盘',
     '硬盘、Cache、主存、软盘',
     'Cache、硬盘、主存、软盘',
     'Cache、主存、硬盘、软盘' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在PC机中负责各类I/O设备控制器、CPU与存储器之间相互交换信息、传输数据的一组公用信号线称为().',
  body: [ 'I/O总线', 'CPU总线', '存储器总线', '前端总线' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在表示存储器的容量时,M的准确含义是().',
  body: [ '1米', '1024K', '1024字节', '1024' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在操作系统中,存储管理主要是对().',
  body: [ '外存的管理', '内存的管理', '辅助存储器的管理', '内存和外存的统一管理' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在多任务处理系统中,一般而言,()CPU响应越慢.',
  body: [ '任务数越少', '任务数越多', '硬盘容量越小', '内存容量越大' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在关机后()中存储的内容就会丢失.',
  body: [ 'ROM', 'RAM', 'EPROM', '硬盘数据' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在计算机系统中,根据与CPU联系的密切程度,可把存储器分为().',
  body: [ '光盘和磁盘', '软盘和硬盘', '内存和外存', 'RAM和ROM' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在计算机系统中,使用显示器时一般需配有().',
  body: [ '网卡', '声卡', '图形加速卡', '显示卡' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在计算机中,BUS是指()',
  body: [ '基础用户系统', '公共汽车', '大型联合系统', '总线' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在计算机中,CRT是指()',
  body: [ '显示器', '终端', '控制器', '键盘' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在计算机中,既可作为输入设备又可作为输出设备的是().',
  body: [ '显示器', '磁盘驱动器', '键盘', '图形扫描仪' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在计算机中,图像显示的清晰程度主要取决于显示器的().',
  body: [ '亮度', '尺寸', '分辨率', '对比度' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在使用计算机时,如果发现计算机频繁的读写硬盘,可能存在的问题是().',
  body: [ '中央处理器的速度太慢', '硬盘的容量太小', '内存的容量太小', '软盘的容量太小' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在微机的配置中常看到"处理器Pentium111/667"字样,其数字667表示().',
  body: 
   [ '处理器的时钟主频是667MHZ',
     '处理器的运算速度是667MIPS',
     '处理器的产品设计毓号是第667号',
     '处理器与内存间的数据交换速率是667KB/S' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在微机中,SVGA指().',
  body: [ '微机型号', '键盘型号', '打印机的型号', '显示适配器型号' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在微型计算机的主要性能指标中,内存容量通常指().',
  body: [ 'ROM的容量', 'RAM的容量', 'CD-ROM的容量', 'RAM和ROM的容量之和' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在微型计算机系统中,一般有三种总线,即地址总线、控制总线和().',
  body: [ '总线结构', '信息总线', '数据总线', '分类总线' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在微型计算机中,CMOS属于().',
  body: [ '顺序存储器', '只读存储器', '高速缓冲存储器', '随机读写存储器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在微型计算机中,ROM是().',
  body: [ '顺序读写存储器', '随机读写存储器', '只读存储器', '高速缓冲存储器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在微型计算机中,应用最普遍的字符编码是().',
  body: [ 'BCD码', 'ASCII码', '汉字编码', '二进制' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在微型计算机中,运算器和控制器合称为().',
  body: [ '逻辑部件', '算术运算部件', '微处理器', '算术和逻辑部件' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在下列各种设备中,读取数据快慢的顺序为().',
  body: 
   [ 'RAM、Cache、硬盘、软盘',
     'Cache、RAM、硬盘、软盘',
     'Cache、硬盘、RAM、软盘',
     'RAM、硬盘、软盘、Cache' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在下列设备中,属于输出设备的是().',
  body: [ '键盘', '绘图仪', '鼠标', '扫描仪' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在下列设备中,属于输入设备的是().',
  body: [ '音箱', '绘图仪', '麦克风', '显示器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在下列有关USB接口的说法中,正确的是().',
  body: 
   [ 'USB接口的外观为一圆形',
     'USB接口可用于热拔插场合的接插',
     'USB接口的最大传输距离为5米',
     'USB采用并行接口方式,数据传输率很高' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在一般情况下,外存中存放的数据,在断电后()丢失.',
  body: [ '不会', '少量', '完全', '多数' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在一条计算机指令中规定其执行功能的部分称为().',
  body: [ '址码', '操作码', '目标地址码', '数据码' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '只读存储器(ROM)和随机存储器(RAM)的主要区别是().',
  body: 
   [ 'ROM是内存储器,RAM是外存储器',
     'RAM是内存储器,ROM是外存储器',
     '断电后,ROM的信息会保存,而RAM则不会',
     '断电后,RAM的信息可以长时间保存,而ROM中的信息将丢失' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '只读光盘的简称是().',
  body: [ 'MO', 'WORM', 'WO', 'CD-ROM' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '指挥、协调计算机工作的设备是().',
  body: [ '输入设备', '输出设备', '存储器', '控制器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '指令是控制计算机执行的命令,它由()和地址码组成.',
  body: [ '内存地址', '接口地址', '操作码', '寄存器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '中央处理器的英文缩写是().',
  body: [ 'CAD', 'CAI', 'CAM', 'CPU' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '中央处理器由()组成.',
  body: [ '控制器和运算器', '控制器和内存储器', '控制器和辅助存储器', '运算器和存储器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '主存储器与外存储器的主要区别为().',
  body: 
   [ '主存储器容量小,速度快,价格高,而外存储器容量大,速度慢,价格低',
     '主存储器容量小,速度慢,价格低,而外存储器容量大,速度快,价格高',
     '主存储器容量大,速度快,价格高,而外存储器容量小,速度慢,价格低',
     '区别仅仅是因为一个在计算机里,一个在计算机外' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '主机板上CMOS芯片的主要用途是().',
  body: 
   [ '管理内存与CPU的通讯',
     '增加内存的容量',
     '储存时间、日期、硬盘参数与计算机配置信息',
     '存放基本输入输出系统程序、引导程序和自检程序' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '最基础最重要的系统软件是().',
  body: [ 'WPS 和 WORD', '操作系统', '应用软件', 'EXCEL' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '()是不合法的十六进制数.',
  body: [ 'H1023', '10111', 'A120', '777' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '+8的反码是().',
  body: [ '1000', '11110111', '11111100', '11111101' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '01110100的反码为().',
  body: [ '1110100', '10001011', '10001100', '11110100' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '0与1与1与1等于().',
  body: [ '2', '1', '0', '3' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '11001101的反码为().',
  body: [ '10110010', '11001101', '110010', '110011' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '1100BH是().',
  body: [ '表示一个二进制数', '表示一个二进制或十六进制数', '表示一个十六进制数', '是一个错误的表示' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '1101101的原码为().',
  body: [ '1101101', '11101101', '11011011', '11011010' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '16个二进制位可表示整数的范围是().',
  body: 
   [ '0~65535',
     '-32768~32767',
     '-32768~32768',
     '-32768~32767或0~65535' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '1MB=().',
  body: [ '1000B', '1024B', '1000KB', '1024KB' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '1MB不等于().',
  body: [ '2的20次方 Byte', '100万 Byte', '1024*1024 Byte', '1024 KB' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '1十进制整数100转换为二进制数是().',
  body: [ '1100100', '1101000', '1100010', '1110100' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '24×24点阵的字形码需要()字节存储?',
  body: [ '72', '64', '48', '32' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '4个字节是()个二进制位.',
  body: [ '16', '32', '48', '64' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '7位ASCII码共有()个不同的编码值.',
  body: [ '126', '124', '127', '128' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '-8的补码是().',
  body: [ '11111000', '11111010', '1000', '11111011' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'ASCII码分为().',
  body: [ '高位码和低位码', '专用码和通用码', '7位码和8位码', '以上都不是' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'ASCII码其实就是().',
  body: [ '美国标准信息交换码', '国际标准信息交换码', '欧洲标准信息交换码', '以上都不是' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'ASCII码是表示()的代码.',
  body: [ '西文字符', '浮点数', '汉字和西文字符', '各种文字' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'ASCII码是一种字符编码,常用()位码.',
  body: [ '7', '16', '10', '32' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'BCD码是一种数字编码,常用()位二进制表示一位BCD码.',
  body: [ '4', '8', '7', '1' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'C的ASCII码为1000011,则G的ASCII码为().',
  body: [ '1000100', '1001001', '1000111', '1001010' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'F的ASCⅡ码值是().',
  body: [ '70', '69', '71', '78' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '按对应的ASCII码值来比较().',
  body: [ 'a比b大', 'r比q小', '空格比逗号小', 'H比R大' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '八进制数127对应的十进制数是().',
  body: [ '117', '771', '87', '77' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '八进制数6.7转换成二进制应为().',
  body: [ '11.111', '10.011', '10.11', '110.111' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '八进制数726转换成二进制是().',
  body: [ '111011100', '111011110', '111010110', '101010110' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '把十进制数121转化为二进制数为().',
  body: [ '1111001', '111001', '1001111', '100111' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '表示R、G、B三个基色的二进位数目分别是6位、6位、4位,因此可显示颜色的总数是()种.',
  body: [ '14', '256', '65536', '16384' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '表示多个条件都满足的运算是().',
  body: [ '加法运算', '逻辑或运算', '逻辑与运算', '逻辑非运算' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '存储400个24×24点阵汉字字形所需的存储容量是().',
  body: [ '255KB', '75KB', '375KB', '28.125KB' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '当A=1101,B=1010,运算结果是1000,其运算一定是().',
  body: [ '算术加', '算术减', '逻辑或', '逻辑乘' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '对于ASCII码在机器中的表示,下列说法正确的是().',
  body: 
   [ '使用8位二进制代码,最右边一位是0',
     '使用8位二进制代码,最右边一位是1',
     '使用8位二进制代码,最左边一位是0',
     '使用8位二进制代码,最左边一位是1' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '对于R进制数,每一位上的数字可以有()种.',
  body: [ 'R', 'R-1', 'R/2', 'R+1' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制加法中1+1+1=()(二进制).',
  body: [ '11', '3', '10', '1' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制数(1101)与(1011)相加的结果是().',
  body: [ '1000', '1001', '10000', '11000' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '二进制数0011与1101相加,其结果为().',
  body: [ '10000', '10111', '1000', '1011' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制数01011011化为十进制数为().',
  body: [ '103', '91', '171', '71' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '二进制数100110.101转换为十进制数是().',
  body: [ '38.625', '46.5', '92.375', '216.125' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制数101.01011等值的十六进制数为().',
  body: [ 'A.B', '5.51', 'A.51', '5.58' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '二进制数1010.101对应的十进制数是().',
  body: [ '11.33', '10.625', '12.755', '16.75' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '二进制数10101与11101的和为().',
  body: [ '110100', '110110', '110010', '100110' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '二进制数10101转换成十进制数为().',
  body: [ '10', '15', '11', '21' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '二进制数101101011转换为八进制数是().',
  body: [ '553', '554', '555', '563' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制数101110转换为八进制数是().',
  body: [ '45', '56', '67', '78' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '二进制数110000转换成十六进制数是().',
  body: [ '77', 'D7', '7', '30' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '二进制数1100101010转换成十进制数是().',
  body: [ '800', '810', '799', '801' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '二进制数1101*111等于().',
  body: [ '1011011', '1010101', '1000010', '10101010' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制数1101.1111转换成十六进数应为().',
  body: [ 'A.F', 'E.F', 'D.F', 'A.E' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '二进制数110101对应的十进制数是().',
  body: [ '44', '65', '53', '74' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '二进制数11011+1101等于().',
  body: [ '100101', '10101', '101000', '10011' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '二进制数11101011-10000100等于().',
  body: [ '1010101', '10000010', '1100111', '10101010' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '二进制数11101101.111与()不等.',
  body: [ 'ED.7(H)', 'ED.E(H)', '355.7(O)', '237.875(D)' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制数1111101011011转换成十六进制数是().',
  body: [ '1F5B', 'D7SD', '2FH3', '2AFH' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '二进制数真值+1010111的补码是().',
  body: [ '11000111', '1010111', '11010111', '101010' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '二进制数真值-1010111的补码是().',
  body: [ '101001', '11000010', '11100101', '10101001' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '根据国标码GB2312-80的规定,共收集了()汉字及符号.',
  body: [ '6763个', '3008个', '3755个', '7445个' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '根据某进制的运算规则2*3=10,则3*4=().',
  body: [ '15', '17', '20', '21' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '国标码规定,每个字符由()字节代码组成.',
  body: [ '4', '2', '1', '3' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '汉字从键盘录入到存储,涉及汉字输入码和汉字().',
  body: [ 'DOC码', 'ASCII码', '区位码', '机内码' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '汉字的字形通常分为()两类.',
  body: [ '通用型和精密型', '通用型和专用型', '精密型和简易型', '普通型和提高型' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '汉字国标码的代号是().',
  body: 
   [ 'GB/T2312—1980',
     'GB/T2132—1980',
     'GB/T3122—1980',
     'GB/T22t3—1980' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '汉字国标码规定,每个汉字用()个字节表示.',
  body: [ '1', '2', '3', '4' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '汉字系统中的汉字字库里存放的是汉字的().',
  body: [ '机内码', '输入码', '字形码', '国标码' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '汉字在计算机方面,是以()形式输出的.',
  body: [ '内码', '外码', '国标码', '字形码' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '和十进制数225相等的二进制数是().',
  body: [ '11100001', '11111110', '10000000', '11111111' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '基本字符的ASCII编码在机器中的表示方法准确地描述应是().',
  body: 
   [ '使用8位二进制码,最右边一位为1',
     '使用8位二进制码,最左边一位为0',
     '使用8位二进制码,最右边一位为0',
     '使用8位二进制码,最左边一位为1' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机的机内数据一律采用()进制.',
  body: [ '十', '八', '二', '十六' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机内部采用二进制表示数据信息,二进制主要优点是().',
  body: [ '容易实现', '方便记忆', '书写简单', '符合使用的习惯' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机用()方式管理程序和数据',
  body: [ '二进制代码', '文件', '存储单元', '目录区和数据区' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机中的机器数有三种表示方法,下列()不是.',
  body: [ '反码', '原码', '补码', 'ASCII码' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机中的西文字符的标准ASCII码由()位二进制数组成.',
  body: [ '16', '4', '7', '8' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机中位的英文名字为().',
  body: [ 'bit', 'Byte', 'unit', 'word' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机中信息的存储采用().',
  body: [ '二进制', '八进制', '十进制', '十六进制' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机中一个浮点数由()两部分组成.',
  body: [ '阶码和基数', '阶码和尾数', '基数和尾数', '整数和小数' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机中最小的存储单元是().',
  body: [ '字节', '字', '字长', '地址' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '假设一种计算机内存容量是1M字节,则表示有()个二进制位.',
  body: [ '1024×1024×8', '1024×8', '1024×1024×4', '1024×4' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将八进制154转换成二进制数是().',
  body: [ '1101100', '111011', '1110100', '111101' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将八进制数143.1转换成十进制数是().',
  body: [ '99.125', '165.125', '121.1', '101.1' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将八进制数145.72转换成二进制数是().',
  body: 
   [ '1100111.11101',
     '1110101.1111',
     '11001010.010111',
     '1100101.11101' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将八进制数712.64转换成二进制数是().',
  body: 
   [ '1111110.1101',
     '111001010.1101',
     '110101011.10011',
     '111011010.011001' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将二进制1001101转换成十六制数为().',
  body: [ '3C', '4C', '4D', '4F' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将二进制数0.0100111转换成八进制小数是().',
  body: [ '.235', '.234', '37', '.236' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将二进制数01100100转换成八进制数是().',
  body: [ '123', '144', '80', '100' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将二进制数01100100转换成十进制数是().',
  body: [ '144', '90', '-64', '100' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将二进制数01100100转换成十六进制数是().',
  body: [ '64', '63', '100', '0AD' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将二进制数10110101转换成十进制数是().',
  body: [ '180', '181', '309', '117' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将二进制数1011010转换成十六进制数是().',
  body: [ '132', '90', '5A', 'A5' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将二进制数1011011.1101转换成八进制数是().',
  body: [ '133.65', '133.64', '134.65', '134.66' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将二进制数1011011.1转换成八进制数是().',
  body: [ '551.1', '552.4', '131.1', '133.4' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将二进制数101101101.111101转换成十六进制数是()',
  body: [ '16.F2', '16D.F4', '16E.F2', '16F2' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将二进制数10111101001转换成十六进制数是().',
  body: [ 'BD1', 'BD2', '5000000000', 'AE9' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将二进制数11001.1001转换成十进制数是().',
  body: [ '25.5625', '26.5625', '25.6', '26' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将二进制数1101001.0100111转换成八进制数是().',
  body: [ '151.234', '151.236', '152.234', '151.237' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将十进制数0.265625转换成二进制数是().',
  body: [ '.1011001', '.0100001', '.0011101', '.010001' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将十进制数215.6531转换成二进制数是().',
  body: 
   [ '11110010.000111',
     '11101101.110011',
     '11010111.101001',
     '11100001.111101' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将十进制数215转换成八进制数是().',
  body: [ '327', '268', '352', '326' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将十进制数215转换成二进制数是().',
  body: [ '11101011', '11101010', '11010111', '11010110' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将十进制数215转换成十六进制数是().',
  body: [ '137', 'C6', 'D7', 'EA' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将十进制数28.25转换成二进制数是().',
  body: [ '101000.25', '11100.01', '1011100.125', '1110.5' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将十进制数327.25转换成十六进制数().',
  body: [ '741.25', '147.4', '987.4', '789.01' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '将十进制数35转换成二进制数是().',
  body: [ '100011', '100111', '111001', '110001' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将十进制数653.5转换成八进制数是().',
  body: [ '1215.4', '5121.4', '549.5', '945.1' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将十进制数89.625转换成二进制数是().',
  body: [ '1011001.101', '100111.101', '1011011.011', '1010011.1001' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '将十六进制数163.58转换成二进制数是().',
  body: 
   [ '1101010101.1111',
     '110101010.11001',
     '1110101011.1101',
     '101100011.01011' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将十六进制数177转换成十进制数是().',
  body: [ '11111111', '10111011', '127', '375' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将十六进制数1A6.2D转换成二进制数是().',
  body: 
   [ '111010101.10101',
     '1111010101.00001',
     '110100110.001011',
     '1110010001.10001' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将十六进制数3D7.A转换成二进制数是().',
  body: 
   [ '111101111.10101',
     '111100111.101',
     '1110010111.101',
     '1111010111.101' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将十六进制数A4转换成十进制数是().',
  body: [ '256', '830', 'A5', '164' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '两个比特可以表示()种状态.',
  body: [ '1', '2', '3', '4' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '逻辑数据只能取真和()两种值.',
  body: [ '假', '-1', '5', '1' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '某汉字的区位码是2534,它的国际码是().',
  body: [ '4563H', '3942H', '3345H', '6566H' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '某汉字的区位码是3721,它的国际码是().',
  body: [ '5445H', '4535H', '6554H', '3555H' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '某汉字的区位码是5448,它的机内码是().',
  body: [ 'D6D0H', 'E5E0H', 'E5D0H', 'D5E0H' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '目前在微型计算机上最常用的字符编码是().',
  body: [ '汉字字型码', 'ASCII码', '8421码', 'EBCDIC码' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '全角数字/英文字符与半角数字/英文字符输出时()不同.',
  body: [ '字号', '字体', '宽度', '高度' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '人们通常用十六进制而不用二进制书写计算机中的数,是因为().',
  body: 
   [ '十六进制的书写比二进制方便',
     '十六进制的运算规则比二进制简单',
     '十六进制数表达的范围比二进制大',
     '计算机内部采用的是十六进制' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '如果—个存储单元能存放—个字节,则容量为32KB的存储器中的存储单元个数为().',
  body: [ '32000', '32768', '32767', '65536' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '如果一个存储单元能存放一个字节,那么一个72KB的存储器共有()个存储单元.',
  body: [ '72000', '73728', '73727', '73000' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '若计算机中相邻2个字节的内容其十六进制形式为34和51,则它们不可能是().',
  body: [ '1个汉字的机内码', '1个16位整数', '一条指令', '2个西文字符的ASCII码' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '若在一个非零无符号二进制整数右边加三个零形成一个新的数,则新数的值是原数值的().',
  body: [ '四倍', '八倍', '四分之一', '八分之一' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '十进制数"-3"用8位二进制数补码表示为().',
  body: [ '10000011B', '11111100B', '11111101B', '01111101B' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '十进制数11等于十六进制数().',
  body: [ 'A', '10', 'B', '11' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '十进制数12的BCD码为().',
  body: [ '10010', '100000', '1100', '10' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '十进制数180对应的八进制数是().',
  body: [ '270', '462', '113', '264' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '十进制数215对应的十六进制数是().',
  body: [ 'B7', 'C7', 'D7', 'DA' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '十进制数269转换成16进制数为().',
  body: [ '10B', '10C', '10D', '10E' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '十进制数269转换为十六进制数为().',
  body: [ '10E', '10D', '10C', '10B' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '十进制数32转换成二进制数应为().',
  body: [ '100000', '10000', '1000000', '111110' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '十进制数-75在计算机中表示为()称该数为机器数.',
  body: [ '11000011', '1001011', '11001011', '11001100' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '十进制数92转换为二进制数和十六进制数分别是().',
  body: [ '01011100和5C', '01101100和61', '10101011和5D', '01011000和4F' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '十六进制数1000转换十进制数是().',
  body: [ '8192', '4096', '1024', '2048' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '十六进制数1A2H对应的十进制数是().',
  body: [ '418', '308', '208', '578' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '十六进制数2B9可表示成().',
  body: [ '2B9O', '2B9E', '2B9F', '2B9H' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '十六进制数7A对应的八进制数为().',
  body: [ '144', '172', '136', '372' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '十六进制数CDH对应的十进制数是().',
  body: [ '204', '205', '206', '203' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '使用得最多、最普通的是()字符编码,即美国信息交换标准代码.',
  body: [ 'BCD', '输入码', '校验码', 'ASCII' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '数字符号6的ASCII码值的十进制表示为54,则数字符号0的ASCII码值的十六进制表示为().',
  body: [ '30', '31', '32', '33' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '微型计算机中,普遍使用的字符编码是().',
  body: [ '补码', '原码', 'ASCII码', '汉字编码' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微型计算机中使用最普遍的字符编码是().',
  body: [ 'EBCDIC码', '国标码', 'BCD码', 'ASCII码' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '为了避免混淆,十六进制数在书写时常在后面加上字母().',
  body: [ 'H', 'O', 'D', 'B' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列4个选项中,正确的一项是().',
  body: 
   [ '存储一个汉字和存储一个英文字符占用的存储容量是相同的',
     '微型计算机只能进行数值运算',
     '计算机中数据的存储和处理都使用二进制',
     '计算机中数据的输出和输入都使用二进制' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列4条叙述中,正确的一条是().',
  body: 
   [ '二进制正数原码的补码就是原码本身',
     '所有十进制小数都能准确地转换为有限位的二进制小数',
     '存储器中存储的信息即使断电也不会丢失',
     '汉字的机内码就是汉字的输入码' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列4种表示方法中,()用来表示计算机局域网.',
  body: [ 'LAN', 'MAN', 'WWW', 'WAN' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列4种不同数制表示的数中,数值最小的一个是().',
  body: [ '八进制数247', '十进制数169', '十六进制数A6', '二进制数10101000' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列布尔运算中哪一个答案是正确的().',
  body: [ '1+1=1', '0+0=1', '1+1=2', '1+1=10' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列等式中正确的是().',
  body: [ '1KB=1024×1024B', '1MB=1024B', '1KB=1024MB', '1MB=1024×1024B' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列对补码的叙述中,不正确的是().',
  body: 
   [ '负数的补码是该数的反码最右加1',
     '负数的补码是该数的原码最右加1',
     '正数的补码就是该数的原码',
     '正数的补码就是该数的反码' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列各叙述中,正确的是().',
  body: 
   [ '正数二进制原码和补码相同',
     '所有的十进制小数都能准确地转换为有限的二进制小数',
     '汉字的计算机机内码就是国标码',
     '存储器具有记忆能力,其中的信息任何时候都不会丢失' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列各种进制的数中,最小的数是().',
  body: [ '001011(B)', '52(O)', '2B(H)', '44(D)' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列关于字节的四条叙述中,正确的一条是().',
  body: 
   [ '字节通常用英文单词"bit"来表示,有时也可以写作"b"',
     '目前广泛使用的Pentium机其字长为5个字节',
     '计算机中将8个相邻的二进制位作为一个单位,这种单位称为字节',
     '计算机的字长并不一定是字节的整数倍' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列描述正确的是().',
  body: 
   [ '1KB=1024X1024字节',
     '1MB=1024X1024字节',
     '1KB=1024位',
     '1MB=1024字节' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列十进制数中,能用八位二进制表示的是().',
  body: [ '296', '333', '256', '199' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列数据中,有可能是八进制数的是().',
  body: [ '238', '764', '396', '789' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列四个不同进制数中,最大的一个是().',
  body: [ '十进制数45', '十六进制数2E', '二进制数110001', '八进制数57' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列四个不同数制中的最小数是().',
  body: [ '(213)D', '(1111111)B', '(D5)H', '(416)O' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列叙述中正确的是().',
  body: 
   [ '正数二进制原码的补码是原码本身',
     '所有十进制数都能准确地转换为有限位二进制小数',
     '用计算机做科学计算是绝对精确的',
     '存储器具有记忆能力,其中的任何信息都不会丢失' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列一组数中,最大的数是().',
  body: [ '(00011001)B', '(35)D', '(37)O', '(3A)H' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列一组数中,最小的数是().',
  body: [ '(11011001)B', '(36)D', '(37)O', '(3A)H' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列字符中,ASCII码值最小的是().',
  body: [ 'R', 'X', 'a', 'B' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列字符中,其ASCII码值最大的是().',
  body: [ 'a', 'y', '9', 'D' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列字符中,其ASCII码值最大的是().',
  body: [ 'NUL', 'B', 'g', 'p' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列字符中,其ASCII码值最大的是().',
  body: [ 'STX', '8', 'E', 'a' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列字符中,其ASCII码值最小的是().',
  body: [ '$', 'J', 'b', 'T' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列字符中,其ASCII码值最小的是().',
  body: [ 'A', 'a', 'k', 'M' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面()可能是八进制数.',
  body: [ '190', '203', '395', 'ace' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下面的数值中,()肯定是十六进制数.',
  body: [ '1011', 'DDF', '84EK', '125M' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下面换算正确的是().',
  body: 
   [ '1KB=512字节',
     '1MB=512KB',
     '1MB=1024000字节',
     '1MB=1024KB;1KB=1024字节' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面有关数值书写错误的是().',
  body: [ '1242D', '10110B', '34H', 'C4D2H' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '小写字母a和大写字母A的ASCII码值之差为().',
  body: [ '34', '30', '32', '28' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '一个比特由()个二进制位组成.',
  body: [ '8', '4', '1', '16' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '一个非零无符号二进制整数后加两个零形成一个新的数,新数的值是原数值的().',
  body: [ '4倍', '二倍', '4分之一', '二分之一' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '一个汉字含()位二进制数.',
  body: [ '15', '16', '8', '2' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '一个字节含()位二进制数.',
  body: [ '2', '8', '6', '0' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '一个字节由8位二进制数组成,其最大容纳的十进制整数为().',
  body: [ '255', '233', '245', '47' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '已知8位机器码10110100,它是补码时,表示的十进制真值是().',
  body: [ '-76', '76', '-70', '-74' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '已知使用8位补码表示的整数是01101011B,则经过变号操作后的结果为().',
  body: [ '10010100B', '10010101B', '11101011B', '1101011B' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '已知使用8位补码表示的整数是10010101B,则经过变号操作后的结果为().',
  body: [ '01101010B', '01101011B', '00010101B', '11101010B' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下式子中正确的是().',
  body: [ '1101010101010B>FFFH', '123456<123456H', 'llll=llllB', '9H=9' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '有关二进制的论述,错误的是().',
  body: 
   [ '二进制数只有0和1两个数码',
     '二进制数只有两位数组成',
     '二进制数各位上的权分别为1,2,4,…',
     '二进制运算逢二进一' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '与十进制数4625等值的十六进制数为().',
  body: [ '1211', '1121', '1122', '1221' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '与十进制数97等值的二进制数是().',
  body: [ '1011111', '1100011', '1101111', '1100001' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '与十六进制数AB等值的十进制数是().',
  body: [ '175', '176', '177', '171' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '与十六进制数BB等值的十进制数是().',
  body: [ '188', '187', '186', '185' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '原码1的反码是().',
  body: [ '-1', '0', '1', '2' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '原码-1的反码是().',
  body: [ '-127', '-126', '26', '127' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在32×32点阵的字形码需要()存储空间.',
  body: [ '32B', '64B', '72B', '128B' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在7位ASCII码表中,按照码值从小到大排列顺序是().',
  body: 
   [ '数字0—9、英文大写字母A~Z、英文小写字母a~z',
     '数字0~9、英文小写字母a~z、英文大写字母A~Z',
     '英文小写字母a~2、英文大写字母A~Z、数字0~9',
     '英文大写字母A—Z、英文小写字母a~z、数字0—9' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在ASCII码表中,按照ASCII值从大到小排列顺序是().',
  body: 
   [ '数字、英文大写字母、英文小写字母',
     '数字、英文小写字母、英文大写字母',
     '英文大写字母、英文小写字母、数字',
     '英文小写字母、英文大写字母、数字' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在ASCII码字符中() 的字符无法显示或打印出来.',
  body: [ '字符$、%、#', '运算符号+、-、/', '空格', '控制符号(ASCII码编号在0~31之间)' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在不同进制的四个数中,最大的一个数是().',
  body: [ '(01010011)B', '(97)O', '(CF)H', '(78)D' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在计算机内部,无论是数据还是指令均以二进制数的形式存储,人们在表示存储地址时常采用()二进制位表示?',
  body: [ '2', '8', '10', '16' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在计算机内部,一切信息的存储、处理与传送均使用().',
  body: [ '二进制数', '十六进制数', 'BCD码', 'ASCII码' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在计算机中,一个字节能容纳的最大二进制数换算成无符号十进制整数为().',
  body: [ '128', '255', '127', '256' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在微型机汉字系统中,一个汉字的机内码点的字节数为().',
  body: [ '1', '2', '4', '8' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在下列不同进制的四个数中,()是最小的一个数.',
  body: [ '(110)2', '(1010)2', '(10)10', '(1010)10' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在下列不同数制的数中,最小的是().',
  body: [ '(72)10', '(5A)16', '(42)8', '(1011101)2' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在以下不同进制的四个数中,最小的一个数是().',
  body: [ '(75)10', '(37)8', '(A7)l6', '(11011001)2' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '中国国家标准汉字信息交换编码是().',
  body: [ 'GB2312-80', 'GBK', 'UCS', 'BIG-5' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '字符5的ASCII码表示是().',
  body: [ '1100101', '10100011', '1000101', '110101' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '字符的ASCII编码在机器中的表示方法准确地描述应是,使用().',
  body: 
   [ '8位二进制代码,最右1位为1',
     '8位二进制代码,最左1位为0',
     '8位二进制代码,最右1位为0',
     '8位二进制代码,最左1位为1' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '字号中阿拉伯字号越大表示字符越()中文字号越小表示字符越().',
  body: [ '大、小', '小、大', '不变', '大、大' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '字母A的ASCII码为十进制数65,ASCII码为十进制数69的字母是().',
  body: [ 'E', 'D', 'B', 'C' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '字与字节的关系是().',
  body: 
   [ '字的长度一定是字节的正整数倍',
     '字的长度可以小于字节的长度',
     '字的长度可以不是字节的整数倍',
     '字的长度一定大于字节的长度' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()可以把模拟声音信号转换成数字声音信号.',
  body: [ 'R/D', 'I/0', 'D/A', 'A/D' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '()是属于传输信号的信道.',
  body: [ '电话线、电源线、接地线', '电源线、双绞线、接地线', '双绞线、同轴电缆、光纤', '电源线、光纤、双绞线' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '()用于压缩静止图像.',
  body: [ 'JPEG', 'MPFG', 'H.261', '以上均不能' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'A/D转换的功能是将().',
  body: [ '模拟量转换为数字量', '数字量转换为模拟量', '声音转换为模拟量', '数字量和模拟量的混合处理' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'MIDI是指().',
  body: [ '应用程序接口', '媒体控制接口', '音乐设备数字接口', '字符用户界面' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Modem的功能是实现().',
  body: [ '数字信号的整形', '模拟信号与数字信号的转换', '数字信号的编码', '模拟信号的放大' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'Modem的中文名称是().',
  body: [ '计算机网络', '鼠标器', '电话', '调制解调器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Modem的作用是().',
  body: 
   [ '实现计算机的远程联网',
     '在计算机之间传送二进制信号',
     '实现数字信号与模拟信号的转换',
     '提高计算机之间的通信速度' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'MP3音乐所采用的声音数据压缩编码的标准是().',
  body: [ 'MPEG-4', 'MPEG-1', 'MPEG-2', 'MPEG-3' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'MPEG是压缩全动画视频的一种标准,它包括三个部分;下列各项中,()项不属于三部分之一.',
  body: [ 'MPEG-Video', 'MPEG-Radio', 'MPEG-Audio', 'MPEG-System' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'Novell网采用的网络操作系统是().',
  body: [ 'Unix', 'WindowsNT', 'Windows2000', 'NetWare' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '按制作技术可以将显示器分为().',
  body: 
   [ 'CRT显示器和LCD显示器',
     'CRT显示器和等离子显示器',
     '平面直角显示器和等离子显示器',
     '等离子显示器和LCD显示器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '不同的图像文件格式往往具有不同的特性,有一种格式具有图像颜色数目不多、数据量不大、能实现累进显示、支持透明背景和动画效果、适合在网页上使用等特性,这种图像文件格式是().',
  body: [ 'TIF', 'GIF', 'BMP', 'JPEG' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '对带宽为300~3400Hz的语音,若采样频率为8kHz、量化位数为8位、单声道,则其未压缩时的码率约为().',
  body: [ '64kb/s', '64kB/s', '128kb/s', '128kB/s' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '多媒体计算机必须包括的设备().',
  body: [ '软盘驱动器', '网卡', '打印机', '声卡' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '多媒体计算机是指安装了()部件的计算机.',
  body: [ '高速CPU及高速缓存', '光驱及音频卡', '光驱及视频卡', '光驱及TV卡' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '多媒体计算机中所说的媒体是指().',
  body: [ '存储信息的载体', '信息的表示形式', '信息的编码方式', '信息的传输介质' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '多媒体技术除了必备的计算机外,还必须配有().',
  body: 
   [ '电视机、声卡、录相机',
     '声卡、光盘驱动器、光盘应用软件',
     '光盘驱动器、声卡、录音机',
     '电视机、录音机、光盘驱动器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '多媒体技术是().',
  body: [ '一种图像和图形处理技术', '文本和图形处理技术', '超文本处理技术', '对多种媒体进行处理的技术' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '多媒体中的首要技术就是()和声频卡.',
  body: [ '软驱', '硬盘', '通信技术', 'CD-ROM' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机的多媒体技术,就是计算机能接收、处理和表现由()等多种媒体表示的信息的技术.',
  body: [ '中文、英文、日文和其他文字', '硬盘、软盘、键盘和鼠标', '文字、声音和图像', '拼音码、五笔字形和自然码' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机的多媒体技术是以计算机为工具,接受,处理和显示由()等表示的信息技术.',
  body: [ '中文、英文、日文', '图像、动画、声音、文字和影视', '拼音码、五笔字型码', '键盘命令、鼠标器操作' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '具有多媒体功能的微机系统目前常用CD-ROM作外存储器,它是一种().',
  body: [ '只读存储器', '只读光盘', '只读硬盘', '只读大容量软盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '具有多媒体功能的微型计算机系统中,常用的CD-ROM是指().',
  body: [ '大容量硬盘', '只读光盘', '随机存储盘', '闪盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '目前计算机还不能表示和处理的信息是().',
  body: [ '声音', '图像', '香味', '数学运算' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '声音获取时,影响数字声音码率的因素有三个,下面()不是影响声音码率的因素.',
  body: [ '取样频率', '声音的类型', '量化位数', '声道数' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '声音信号数字化的过程包括().',
  body: [ '扫描、取样、量化', '解码、数模转换、插值', '取样、量化、编码', '扫描、分色、量化' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '使用计算机生成假想景物的图像,其主要步骤是().',
  body: [ '扫描,取样', '绘制,建模', '取样,A/D转换', '建模,绘制' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '视频文件的内容包括视频数据和()数据.',
  body: [ '音频', '视频', '动画', '图形' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '数据的()是多媒体发展的一项关键技术.',
  body: [ '编辑与播放', '压缩及还原', '数字化', '传播' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '所谓媒体是指().',
  body: [ '表示和传播信息的载体', '各种信息的编码', '计算机的输入输出信息', '计算机屏幕显示的信息' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '图像压缩编码方法很多,以下()不是评价压缩编码方法优劣的主要指标.',
  body: [ '压缩倍数的大小', '压缩编码的原理', '重建图像的质量', '压缩算法的复杂程度' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '为了区别于通常的取样图像,计算机合成图像也称为().',
  body: [ '点阵图像', '光栅图像', '矢量图形', '位图图像' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列各项中不属于多媒体部件的是().',
  body: [ '声卡', '视频卡', '网卡', '光盘驱动器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列关于计算机合成图像(计算机图形)的应用中,错误的是().',
  body: 
   [ '可以用来设计电路图',
     '可以用来生成天气图',
     '计算机只能生成实际存在的具体景物的图像,不能生产虚拟景物的图像',
     '可以制作计算机动画' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列关于数字图书馆的描述中,错误的是().',
  body: 
   [ '它是一种拥有多种媒体、内容丰富的数字化信息资源',
     '它是一种能为读者方便、快捷地提供信息的服务机制',
     '它支持数字化数据、信息和知识的整个生命周期的全部活动',
     '现有图书馆的藏书全部数字化并采用计算机管理就实现了数字图书馆' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列描述中不正确的是().',
  body: 
   [ '多媒体技术最主要的两个特点是集成性和交互性',
     '所有计算机的字长都是固定不变的,都是8位',
     '通常计算机的存储容量越大,性能就越好',
     '各种高级语言的翻译程序都属于系统软件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列设备中,多媒体计算机所特有的设备是().',
  body: [ '打印机', '键盘', '扫描仪', '视频卡' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列项中,属于多媒体软件的有().',
  body: [ '多媒体压缩/解压缩软件', '多媒体通信协议', '多媒体声像同步软件', '多媒体功能卡' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列中系统不属于多媒体系统的是().',
  body: [ '字处理系统', '具有编辑和播放功能的开发系统', '以播放为主的教育系统', '家用多媒体系统' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面关于多媒体系统的描述中,()是不正确的.',
  body: 
   [ '多媒体系统也是一种多任务系统',
     '多媒体系统的最关键技术是数据压缩与解压缩',
     '多媒体系统只能在微机上运行',
     '多媒体系统是对文字、图形、声音、活动图像等信息及资源进行管理的系统' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面关于声卡的叙述中,正确的是().',
  body: 
   [ '利用声卡只能录制人的说话声,不能录制自然界中的鸟鸣声',
     '利用声卡可以录制VCD影碟中的伴音,但不能录制电视机和收音机里的声音',
     '利用声卡可以录制WAVE格式的音乐,也能录制MIDI格式的音乐',
     '利用声卡只能录制WAVE格式的音乐,不能录制MIDI格式的音乐' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '显示器、音响设备可以作为计算机中多媒体的().',
  body: [ '感觉媒体', '存储媒体', '显示媒体', '表现媒体' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '要把普通 PC 机升级为多媒体计算机,至少应增加下列( )硬件.',
  body: [ '声卡', 'CD-ROM 和音箱', 'CD-ROM、声卡和音箱', '视卡、CD-ROM、声卡和音箱' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '要通过口述的方式向计算机输入汉字,必须配备的辅助设备是().',
  body: [ '声卡、麦克风', '麦克风、扫描仪', '扫描仪、声卡', '扫描仪、手写笔' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '要想使计算机能够很好的处理三维图形,我们的做法是().',
  body: [ '使用支持2D图形的显示卡', '使用支持3D图形的显示卡', '使用大容量的硬盘', '使用大容量的软盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下关于多媒体计算机的说法中,不正确的是().',
  body: 
   [ '多媒体计算机是指符合或超过MPC标准的计算机',
     '多媒体计算机是指能够综合处理多种媒体信息,并在它们之间建立逻辑关系,使之集成为一个交互式系统的计算机',
     '多媒体计算机是指能够设置多种文本格式的计算机',
     '多媒体计算机系统由硬件系统和软件系统两部分构成' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下属于多媒体技术应用范畴的是().',
  body: [ '教育培训', '虚拟现实', '商业服务', '以上都对' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下文件格式中,不属于声音文件的是().',
  body: [ 'WAV', 'BMP', 'MIDI', 'AIF' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下文件类型中,不属于图形图像文件的是().',
  body: [ 'txt', 'bmp', 'gif', 'jpg' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以下文件类型中,不属于音频文件的是().',
  body: [ 'avi', 'wav', 'mp3', 'midi' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '有一个数值152,它与十六进制6A相等,那么该数值是 ().',
  body: [ '二进制数', '八进制数', '十进制数', '四进制数' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在Windows中,录音机程序的文件扩展名是().',
  body: [ 'MID', 'WAV', 'AVl', 'HTM' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在声音的数字化过程中,采样频率越高,声音的()越高.',
  body: [ '保真度', '失真度', '噪声', '频率' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '帧是视频图像或动画的()组成单位.',
  body: [ '惟一', '最小', '基本', '最大' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'CIH病毒的类型为().',
  body: [ '引导区型病毒', '文件型病毒', '混合型病毒', '宏病毒' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '病毒程序进入计算机()并得到驻留是它进行传染的第一步.',
  body: [ '外存', '内存', '硬盘', '软盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '病毒通过什么途径传播到您的计算机上?',
  body: [ '通过受感染的软盘', '通过打开受感染的电子邮件附件', '通过在网络上共享受感染的文档', '以上全部' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '抵御计算机病毒的最重要措施是什么?().',
  body: [ '使用防病毒软件', '吃感冒药', '禁止其他人使用您的计算机', '使用 Microsoft Update' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '发现计算机病毒后,最佳的清除方式是().',
  body: [ '用反病毒软件处理', '格式化磁盘', '用酒精涂擦计算机', '删除磁盘文件' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '防病毒软件()所有病毒.',
  body: [ '是有时间性的,可以消除', '是一种专门工具,可以消除', '有的功能很强,但不能保证消除', '有的功能很弱,不能消除' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '防止软盘感染病毒的有效方法是().',
  body: [ '不要和有毒的软盘放在一起', '保持机房清洁', '在写保护口上贴上胶条', '定期对软盘格式化' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '非法接收者试图从密文分析出明文的过程称为().',
  body: [ '破译', '解密', '读取', '翻译' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '个人微机之间"病毒"传染媒介是().',
  body: [ '键盘输入', '硬盘', '电磁波', '软盘' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '何为安全更新()?',
  body: 
   [ '与计算机大师的首次约会',
     '用于抵御最新的已知安全威胁的软件修补程序',
     '网站上可获得安全新闻的区域',
     '对计算机时钟的重置,旨在确保您不错过重要的邮件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机病毒().',
  body: 
   [ '不影响计算机的运行速度',
     '造成计算机器件的永久性失效',
     '不影响计算机的运算结果',
     '影响程序的执行,破坏用户数据与程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机病毒不可能侵入().',
  body: [ '硬盘', '计算机网络', 'ROM', 'RAM' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机病毒的传播途径有().',
  body: [ '磁盘', '空气', '内存', '患病的试用者' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机病毒的传染性是指可以().',
  body: [ '破坏计算机硬件系统', '进行自我复制', '侵占内存', '格式化硬盘' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机病毒的特点是具有().',
  body: [ '传播性、潜伏性、破坏性', '传播性、破坏性、易读性', '潜伏性、破坏性、易读性', '传播性、潜伏性、安全性' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机病毒的危害性表现在().',
  body: 
   [ '能造成计算机器件永久性失效',
     '影响程序的执行,破坏用户数据与程序',
     '不影响计算机的运行速度',
     '不影响计算机的运算结果,不必采取措施' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机病毒的主要危害是().',
  body: [ '破坏信息,损坏CPU', '干扰电网,破坏信息', '占用资源,破坏信息', '更改Cache芯片中的内容' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机病毒对于操作计算机的人().',
  body: [ '只会感染,不会致病', '会感染致病', '不会感染', '会有厄运' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机病毒破坏的主要对象是().',
  body: [ '磁盘片', '磁盘驱动器', 'CPU', '程序和数据' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机病毒是().',
  body: [ '一段计算机程序或一段代码', '细菌', '害虫', '计算机炸弹' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机病毒是可以造成机器故障的一种().',
  body: [ '计算机设备', '计算机程序', '计算机部件', '计算机芯片' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机病毒是一种().',
  body: [ '机器部件', '计算机文件', '微生物"病源体"', '程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机病毒是一种程序片段,通常它隐藏在().',
  body: [ '计算机的CPU中', '计算机的内存储器中', '磁盘的所有文件中', '可执行文件中' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机病毒是指().',
  body: [ '编制有错误的计算机程序', '设计不完善的计算机程序', '已被破坏的计算机程序', '以危害系统为目的的特殊计算机程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机病毒通常分为引导区型、()、混合型和宏病毒等四类.',
  body: [ '恶性', '扩展名', '文件型', '潜伏型' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机病毒通常分为引导型,文件型和().',
  body: [ '外壳型', '复合型', '内码型', '操作系统型' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机病毒种类繁多,人们根据病毒的特征或危害性给病毒命名,下面()不是病毒名称.',
  body: [ '震荡波', '千年虫', '欢乐时光', '冲击波' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机病毒主要是造成()损坏.',
  body: [ '磁盘', '磁盘驱动器', '磁盘和其中的程序和数据', '程序和数据' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机感染上了病毒,可用下列哪个软件进行检查和清除().',
  body: [ 'Office', 'dos', 'kv300', 'wps' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机运行时若发现病毒,应如何处理().',
  body: [ '重新启动机器', '使用清屏命令', '运行杀病毒软件', '停机一天再用' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '密码学中,发送方要发送的消息称作().',
  body: [ '原文', '密文', '明文', '数据' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '目前常用的保护计算机网络安全的技术性措施是().',
  body: [ '防火墙', '防风墙', 'KV300杀毒软件', '使用Java程序' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '目前常用的加密方法主要有两种().',
  body: [ '密钥密码体系和公钥密码体系', 'DES和密钥密码体系', 'RES和公钥密码体系', '加密密钥和解密密钥' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '目前使用的防杀病毒软件的作用是().',
  body: 
   [ '检查计算机是否感染病毒,清除已感染的任何病毒',
     '杜绝病毒对计算机的侵害',
     '检查计算机是否感染病毒,清除部分已感染的病毒',
     '查出已感染的任何病毒,清除部分已感染的病毒' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '你购买了一个具有版权的软件时,就获得了这个软件的().',
  body: [ '复制权', '修改权', '出售权', '使用权' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '您会在下列哪种情况下从受信任的发布者列表中删除证书().',
  body: [ '使用完文件或代码', '列表变得太长了,您只能同时信任 10 个发布者', '证书无效' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '如果发现某张软盘已染上病毒,则应().',
  body: 
   [ '将该软盘销毁',
     '将该软盘上的文件复制到另外的软盘上使用',
     '换一台计算机使用该软盘上的文件,使病毒慢慢消失',
     '用反病毒软件清除该软盘上的病毒或在安装有防病毒卡的计算机上格式化该软盘' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '若同一单位的很多用户都需要安装使用同一软件时,则应购买该软件相应的().',
  body: [ '许可证', '专利', '著作权', '多个拷贝' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '为了保护计算机软件著作权人的权益,国务院颁布实施了().',
  body: [ '《中华人民共和国著作权法》', '《软件著作保护法规》', '《计算机软件保护条例》', '《中华人民共和国软件保护法》' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '为了防止别人非法的使用计算机,可以通过()为计算机设置口令.',
  body: [ 'CPU', 'CMOS', 'HDD', 'FDD' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '为了提高安全性,应培养以下哪些习惯()?',
  body: 
   [ '打开电子邮件附件时应谨慎',
     '从不打开电子邮件附件',
     '将计算机放置在封闭的房间里,且不设置 Internet 连接',
     '每六个月更新一次防病毒软件' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '文件型病毒传染的对象主要是()类文件.',
  body: [ '.DBF', '.DOC', '.COM和.EXE', '.EXE和.DOC' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '文件型病毒是文件传染者,也被称为寄生病毒.它运作在计算机的()里.',
  body: [ '网络', '显示器', '打印机', '存储器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列安全措施中,()用于辨别用户(或其它系统)的真实身份.',
  body: [ '身份认证', '数据加密', '访问控制', '审计管理' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列关于计算机病毒的说法,不正确的是().',
  body: 
   [ '计算机病毒是人为制造的能对计算机安全产生重大危害的一种程序',
     '计算机病毒具有传染性、破坏性、潜伏性和变种性等',
     '计算机病毒的发作只是破坏存储在磁盘上的数据',
     '用管理手段和技术手段的结合能有效地防止病毒的传染' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列关于计算机病毒的说法中,正确的是().',
  body: 
   [ '杀病毒软件可清除所有病毒',
     '计算机病毒通常是一段可运行的程序',
     '加装防病毒卡的计算机不会感染病毒',
     '病毒不会通过网络传染' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列软件中,不属于杀毒软件的是().',
  body: [ 'kv3000', '金山毒霸', 'fl2002', 'kill' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列软件中不是杀毒软件的是().',
  body: [ 'KV3000', 'KILL', 'AV95', 'WinZip' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列属于杀毒软件的是().',
  body: [ 'CIH', 'DOS', 'KV300', 'BIOS' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列说法中正确的是().',
  body: 
   [ '一张软盘经反病毒软件检测和清除病毒后,该软盘就为没有病毒的干净盘',
     '若发现软盘带病毒,立即将盘上所有文件复制到一张干净盘上,然后将原有软盘格式化',
     '若软盘上存放有文件和数据,且没有病毒,则只要将该软盘写保护就不会感染上病毒',
     '如果一张软盘上没有可执行文件,则不会传染上病毒' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列叙述中,()是不正确的.',
  body: [ '黑客是指黑色的病毒', '计算机病毒是程序', 'CIH是一种病毒', '防火墙是一种被动式防卫软件技术' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列叙述中,正确的是().',
  body: 
   [ '计算机病毒只能传染给可执行文件',
     '计算机软件是指存储在软盘中的程序',
     '硬盘虽然装在主机箱内,但它属于外存',
     'RAM中的信息在关机后不会丢失' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列选项中,()不是黑客行为特征的表现形式.',
  body: [ '恶作剧型', '隐蔽攻击型', '定时炸弹型', '解决矛盾型' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列选项中,()不是计算机病毒的特点.',
  body: [ '可执行性', '破坏性', '遗传性', '潜伏性' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列选项中,()不是计算机犯罪的特点.',
  body: [ '犯罪智能化', '犯罪目的专一', '犯罪手段隐蔽', '跨国性' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列选项中,()不是网络信息安全的技术特征.',
  body: [ '可靠性', '可用性', '保密性', '可行性' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列选项中,()不是网络信息安全所面临的自然威胁.',
  body: [ '自然灾害', '恶劣的场地环境', '电磁辐射和电磁干扰', '偶然事故' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面是有关计算机病毒的叙述,正确的是().',
  body: 
   [ '计算机病毒是指计算机长期使用后,计算机自动生成的程序',
     '计算机病毒是指计算机长期未使用后,计算机自动生成的程序',
     '计算机病毒容易传染给长期使用计算机的人',
     '计算机病毒是人为编制的一种带恶意的程序' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面四项中,不属于计算机病毒特征的是().',
  body: [ '潜伏性', '破坏性', '传染性', '免疫性' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面有关计算机病毒的说法()是正确的.',
  body: 
   [ '计算机病毒是一个MIS程序',
     '计算机病毒是对人体有害的传染病',
     '计算机病毒是对一个能够通过自身复制传染,起破坏作用的计算机程序',
     '计算机病毒是一段程序,但对计算机无害' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下述()不属于计算机病毒的特征.',
  body: [ '传染性、隐蔽性', '侵略性、破坏性', '潜伏性、自灭性', '破坏性、传染性' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '信息安全是对数据的()进行保护.',
  body: [ '安全性', '可用性', '可靠性', '完整性' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以下关于计算机病毒的叙述,病毒是()的说法是不正确.',
  body: [ '一段程序', '能够扩散', '由计算机系统运行混乱造成', '可以预防和消除' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下关于计算机病毒的叙述,正确的是().',
  body: 
   [ '若删除盘上所有文件则病毒也会删除',
     '若用杀毒软盘清毒后,感染文件可完全恢复原来状态',
     '计算机病毒是一段程序',
     '为了预防病毒侵入,不要运行外来软盘或光盘' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下是四种加密算法,其中()不是公钥加密算法.',
  body: [ 'RSA', 'Elgamal', 'DES', 'Knapsack' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '引导型病毒程序存放在().',
  body: [ '最后1扇区中', '第2物理扇区中', '数据扇区中', '引导扇区中' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '预防软盘感染病毒的有效措施是().',
  body: [ '定期对软盘进行格式化', '不要把软盘和有病毒软盘放在一起', '保持软盘的清洁', '给软盘加上写保护' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在下列四条叙述中,正确的是().',
  body: 
   [ '不联网的微型计算机也会传染上病毒',
     '微型计算机一般只具有定点运算功能',
     '微型计算机的内存容量不能超过32MB',
     '微型计算机CPU的主频在使用时是可以随时调整的' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '"横向分布"针对几个及以上的对象?',
  body: [ '2', '3', '4', '5' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '"开始"菜单中的"文档"选项中列出了最近使用过的文档清单,其数目最多可达().',
  body: [ '4', '15', '10', '12' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '"资源管理器"可用来().',
  body: [ '管理文件夹', '浏览网页', '收发电子邮件', '恢复被删除的文件' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()不是网络的有线传输介质.',
  body: [ '红外线', '双绞线', '同轴电缆', '光纤' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()不属于计算机网络的资源子网.',
  body: [ '主机', '网络操作系统', '网关', '网络数据库系统' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'LAN是()的英文的缩写.',
  body: [ '城域网', '网络操作系统', '局域网', '广域网' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'MAN是()的英文缩写.',
  body: [ '局域网', '广域网', '城域网', '校园网' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'OSI参考模型的最低层为().',
  body: [ '表示层', '会话层', '物理层', '应用层' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'OSI的中文含义是().',
  body: [ '网络通信协议', '国家信息基础设施', '开放系统互联参考模型', '公共数据通信网' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'OSI开放式网络系统互联标准的参考模型由()层组成.',
  body: [ '5', '6', '7', '8' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'OSI模型的最高层是(),最低层是().',
  body: [ '网络层/应用层', '应用层/物理层', '传输层/链路层', '表示层/物理层' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'WAN是()是缩写.',
  body: [ '局域网', '广域网', '城域网', '校园网' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'WAV波形文件与MIDI文件相比,下列叙述不正确的是().',
  body: 
   [ 'WAV波形文件比MIDI文件音乐质量高',
     '存储同样的音乐文件,WAV波形文件比MIDI文件存储量大',
     '在多媒体使用中,一般背景音乐用MIDI文件,解说用WAV文件',
     '在多媒体使用中,一般背景音乐用WAV文件,解说用MIDI文件' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '拨号IP上网中modem起到的作用是().',
  body: [ '提供协议', '进行数字/模拟信号的转换', '发射电子信息', '以上均不对' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '拨号入网使用的MODEM一端连在计算机上,另一端应连在().',
  body: [ '打印机上', '电话线上', '数码相机上', '扫描仪上' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '拨号上网的硬件中除了计算机和电话线外还必须有().',
  body: [ '鼠标', '键盘', '调制解调器', '拨号连接' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '不属于网络中硬件组成的是().',
  body: [ '网卡', '网线', '网络协议', '调制解调器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '常用的通信介质有双绞线,同轴电缆和().',
  body: [ '微波', '红外线', '光缆', '激光' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '常用的网络拓朴结构是().',
  body: [ '星形和环形', '总线型、星形和树形', '总线型、星形和环形', '总线型和树形' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '从室外进来的电话线应当和()连接.',
  body: [ '计算机的串口', '计算机的并口', '调制解调器上标有Phone的接口', '调制解调器上标有Line的接口' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '当前鼠标和主机之间的连接采用()接口越来越多.',
  body: [ 'X.21', 'RS-232', 'USB', 'RS-449' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '当网络中任何一个工作站发生故障时,都有可能导致整个网络停止工作,这种网络的拓扑结构为()结构.',
  body: [ '总线形', '环形', '树型', '星形' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '电话交换系统采用的是()交换技术.',
  body: [ '线路交换', '报文交换', '分组交换', '信号交换' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '个人计算机通过局域网上网的必备设备是().',
  body: [ '电话机', '网卡', '调制解调器', '光驱' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '根据计算机网络覆盖地理范围的大小,网络可分为局域网和().',
  body: [ 'WAN', 'NOVELL', '互联网', 'INTERNET' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '公共数据网的包交换机上所连计算机的地址用两段式层次地址表示,某计算机的地址为[3,5],它表示连接在()上的计算机.',
  body: [ '5号包交换机端口3', '5号包交换机端口13', '3号包交换机端口5', '15号包交换机端口3' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '关于Modem说法不正确的是().',
  body: 
   [ 'Modem可以将模拟信号转换为数字信号',
     'Modem可以将数字信号转换为模拟信号',
     'Modem不支持模拟信号转换为数字信号',
     '就是调制解调器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '关于局域网的叙述,错误的是().',
  body: [ '可安装多个服务器', '可共享打印机', '可共享服务器硬盘', '所有的数据都存放在服务器中' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '广域网通信中,()不是包(分组)交换机的任务.',
  body: [ '检查包的目的地址', '将包送到交换机端口进行发送', '从缓冲区中提取下一个包', '检查包中传输的数据内容' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '和通信网络相比,计算机网络最本质的功能是().',
  body: [ '数据通信', '资源共享和分布式处理', '提高计算机的可靠性', '提高计算机的可用性' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '互联网络的基本含义是().',
  body: [ '计算机与计算机互联', '计算机与计算机网络互联', '计算机网络与计算机网络互联', '计算机与国际计算机互联' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机局域网按拓扑结构进行分类,可分为环型、星型和()型等.',
  body: [ '电路交换', '以太', '总线', 'TCP/IP' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机连成网络的最重要优势是( ).',
  body: [ '提高计算机运行速度', '可以打网络电话', '提高计算机存储容量', '实现各种资源共享' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机连网的主要目的是().',
  body: [ '资源共享', '共用一个硬盘', '节省经费', '提高可靠性' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机网络按地理范围分为局域网,城域网().',
  body: [ '都市网', '国际网', '互联网', '广域网' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机网络按其覆盖的范围,可划分为().',
  body: [ '以太网和移动通信网', '局域网、城域网和广域网', '电路交换网和分组交换网', '星形结构、环形结构和总线结构' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络按所覆盖的地域分类,可分为()、MAN和WAN.',
  body: [ 'CAN', 'LAN', 'SAN', 'VAN' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络按拓扑结构分类,可分为()、总线型、环型三种基本型.',
  body: [ '菊花链型', '星型', '树型', '网状' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络的功能主要体现在信息交换、资源共享和()三个方面.',
  body: [ '网络硬件', '网络软件', '分布式处理', '网络操作系统' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机网络的双子网指的是其包括通信子网和().',
  body: [ '软件子网', '资源子网', '媒体子网', '硬件子网' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络的特点是().',
  body: [ '运算速度快', '精度高', '资源共享', '内存容量大' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机网络的通信传输介质中速度最快的是 () .',
  body: [ '同轴电缆', '光缆', '双绞线', '铜质电缆' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络的物理组成中包含信号变换器,其主要作用为().',
  body: [ '将线路集中起来', '进行数字信号与模拟信号的转换', '进行信息传送', '进行信号放大' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络的主要功能有资源共享().',
  body: [ '数据传送', '软件下载', '电子邮件', '电子商务' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '计算机网络的组成中以下()不是必须的.',
  body: [ '通信线路', '通信设备', '网络协议', 'ISP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机网络典型的层次结构是ISO制定的OSI/RM,以下说法不正确的是().',
  body: 
   [ '该模型划分了7层',
     '是网络体系结构设计和实现的原则',
     'Internet遵循该层次结构',
     '划分的7层不包括对电子电气方面特性的规定' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机网络能够不受地理上的约束实现共享,下列不属于共享资源的是().',
  body: [ '数据', '办公人员', '软件', '硬件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络是按照()相互通信的.',
  body: [ '信息交换方式', '传输装置', '网络协议', '分类标准' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '计算机网络是计算机技术与()技术相结合的产物.',
  body: [ '网络', '通信', '软件', '信息' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络完成的基本功能是数据处理和().',
  body: [ '数据分析', '数据传输', '报文发送', '报文存储' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '计算机网络最突出的优点是().',
  body: [ '精度高', '内存容量大', '运算速度快', '共享资源' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机网络最显著的特征是().',
  body: [ '运算速度快', '运算精度高', '存储容量大', '资源共享' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '计算机在网络中是按照()相互通信.',
  body: [ '信息交换方式', '传输装置', '网络协议', '分类标准' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '家庭上网必需的网络设备是().',
  body: [ '防火墙', '路由器', '交换机', '网卡' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '将局域网接入广域网必须使用().',
  body: [ '中继器', '集线器', '路由器', '网桥' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将模拟信号转换成数字化的电子信号,这个处理过程称为().',
  body: [ '调制', '解压缩', '解调', '压缩' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '将一个局域网与广域网互联应使用的设备是().',
  body: [ '网桥', '中继器', '路由器', '光缆' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '接入局域网的每台计算机都必须安装().',
  body: [ '调制解调器', '网络接口卡', '声卡', '视频卡' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '进行网络互联时,如果总线网的网段超过最大距离时,应用()来进行延伸.',
  body: [ '网关', '中继器', '路由器', '网桥' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '局部地区通信网络简称局域网,英文缩写为().',
  body: [ 'WAN', 'MAN', 'SAN', 'LAN' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '局域网LAN是指在()范围内的网络.',
  body: [ '5公里', '10公里', '50公里', '100公里' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '局域网不使用()作为传输介质.',
  body: [ '双绞线', '光缆', '同轴电缆', '电话线' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '局域网采用的双绞线为().',
  body: [ '3类UTP', '4类UTP', '5类UTP', '6类UTP' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '局域网常见的拓扑结构不包括().',
  body: [ '星型', '链型', '总线型', '环型' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '局域网常用的拓扑结构有环型、星型和 ().',
  body: [ '超链型', '总线型', '蜂窝型', '分组型' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '局域网使用的数据传输介质有同轴电缆、光缆和().',
  body: [ '电话线', '双绞线', '总线', '电缆线' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '局域网为了相互通信,一般安装().',
  body: [ '调制解调器', '网卡', '声卡', '电视' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '客户/服务器模式的局域网,其网络硬件主要包括服务器、工作站、网卡和().',
  body: [ '网络拓扑结构', '计算机', '传输介质', '网络协议' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '客户/服务器系统中的客户机和服务器().',
  body: [ '必须运行在同一台计算机上', '不必运行在同一台计算机上', '必须运行在同一个网络中', '必须运行在不同的计算机上' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '快速以太网集线器按结构分为().',
  body: [ '总线型和星型', '共享型和交换型', '10M和100M网', '全双工和半双工' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '利用网络交换文字信息的非交互式服务称为().',
  body: [ 'E-mail', 'TELENT', 'WWW', 'BBS' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '路由器(Router)是用于联接逻辑上分开的()网络.',
  body: [ '1个', '2个', '多个', '无数个' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '某办公室有10台计算机和一台打印机需要连网,需要购置()块网卡.',
  body: [ '11', '10', '1', '2' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '目前(1Pv4),因特网使用()位二进制数作为IP地址.',
  body: [ '8', '16', '32', '64' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '目前使用最广泛的网卡是().',
  body: [ 'ISA网卡', 'PCI网卡', 'PCMCIA网卡', 'USB接口的网卡' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '目前网络传输介质中传输速率最高的是().',
  body: [ '双绞线', '同轴电缆', '光缆', '电话线' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '能实现不同的网络层协议转换功能的互联设备是().',
  body: [ '集线器', '交换机', '路由器', '网桥' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '区分局域网和广域网的标志是().',
  body: [ '网中的节点与节点的距离', '网络分布的范围', '提供信息的多少', '功能的完善程度不同' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '人们根据()将网络划分为广域网(WAN),城域网(MAN)和局域网(LAN).',
  body: [ '计算机通信方式', '接入的计算机的多少、类型', '拓扑类型', '地理范围' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '如果一台机器要加入一个局域网,这台机器至少应有()块网卡.',
  body: [ '4', '3', '2', '1' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '若想访问域中其它机器,应直接双击桌面上().',
  body: [ '网上通迅', '我的电脑', '网上邻居', '开始' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '世界上第一个局域网是在()年诞生的.',
  body: [ '1946', '1969', '1977', '1973' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '数据通信方式分为单工,双工和().',
  body: [ '广播', '半双工', '共享', '应答' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '数据通信系统的数据传输速率指单位时间内传输的二进位数据的数目,下面()一般不作它的计量单位.',
  body: [ 'KB/S', 'Kb/S', 'Mb/S', 'Gb/S' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '所谓点到点信道是指网络中每()个节点间存在一条物理信道.',
  body: [ '3', '4', '2', '6' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '调制解调器按外型分,可分为().',
  body: [ '软猫和硬猫', '内置和外置', '调制器和解调器', '模拟和数字的' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '通常所说OSI模型分为()层.',
  body: [ '6', '2', '4', '7' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '通过电话线拔号入网,()是必备的硬件.',
  body: [ '调制解调器', '光驱', '声卡', '打印机' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '通过机房的局域网连入Internet不需要().',
  body: [ '网线', '网卡', '调制解调器', '集线器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '统一资源定位符的英文简称是().',
  body: [ 'TCP/IP', 'DDN', 'URL', 'IP' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '万维网的网址以http为前导,表示遵从()协议.',
  body: [ '纯文本', '超文本传输', 'TCP/IP', 'POP' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '网卡是计算机联网的硬件设备,区别于调制解调器,网卡只做数据的收发,不做数据的数模转换.以下传输介质网卡不支持的是().',
  body: [ '双绞线', '同轴电缆', '光缆', '电话线' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '网络按通信方式分类,可分为()和广播式传输网络.',
  body: [ '点对点传输网络', '广播式传输网络', '数据传输网络', '对等式网络' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '网络操作系统除了具备通用操作系统的一般功能外,还具有()功能.',
  body: [ '文件管理', '设备管理', '处理器管理', '网络通信和网络资源管理' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '网络协议的说法不正确的是().',
  body: [ '处理传送中出现的错误信息', '约定数据传输的格式', '规定传送的数据起始与停止标志', '是网络中必不可少的硬件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '网络中各节点的互联方式叫做网络的().',
  body: [ '拓扑结构', '协议', '分层结构', '分组结构' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '网络资源共享包括硬件,软件,()等.',
  body: [ '设备', '数据', '应用', '操作系统' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '微软公司的网上浏览器是().',
  body: [ 'OutlookExpress', 'InternetExplore', 'FrontPage', 'Outlook' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '为了能在网络上正确的传送信息,制定了一整套关于传输顺序,格式,内容和方式的约定,称之为().',
  body: [ 'OSI参数模型', '网络操作系统', '通信协议', '网络通信软件' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '无线电波有四种,分别是中波、短波、超短波和微波.其中关于微波叙述正确的是().',
  body: 
   [ '沿地面传播,绕射能力强,适用于广播和海上通信',
     '具有较强的电离层反射能力,适用于环球通信',
     '具有极高频率的电磁波,波长很短,主要是直线传播,也可以从物体上得到反射',
     '和超短波一样饶射能力都很好,但不可作为视距或超视距中继通信' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列()不是网络能实现的功能.',
  body: [ '负荷均衡', '控制其他工作站', '资源共享', '数据通信' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列()不属于微波通信方式.',
  body: [ '地面微波接力', '卫星', '对流层散射', '光纤' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列()不属于现代通信.',
  body: [ '电报', '电话', '常规杂志', '传真' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列()是计算机网络的功能.',
  body: [ '文件传输', '设备共享', '信息传递与交换', '以上均是' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列()数据通讯线路形式具备最佳数据保密性及最高传输效率.',
  body: [ '电话线路', '光纤', '同轴电缆', '双绞线' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列不是计算机网络系统的拓扑结构的是().',
  body: [ '星形结构', '总线型结构', '单线结构', '环形结构' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列可作为一台主机IP地址的是().',
  body: 
   [ '202.115.1.0',
     '202.115.255.1',
     '202.115.1.255',
     '202.115.255.255' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下列叙述中正确的是().',
  body: 
   [ '将数字信号变换成便于在模拟通信线路中传输的信号称为调制',
     '以原封不动的形式将来自终端的信息送人通信线路称为调制解调',
     '在计算机网络中,一种传输介质不能传送多路信号',
     '在计算机局域网中,只能共享软件资源,而不能共享硬件资源' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下列选项中,()不是防火墙的类型.',
  body: [ '网络层防火墙', '应用层防火墙', '链路层防火墙', '物理层防火墙' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列选项中属于集线器功能的是().',
  body: [ '增加局域网络的上传速度', '增加局域网络的下载速度', '连接各电脑线路间的媒介', '以上皆是' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面不是上网方式的是().',
  body: [ 'ADSL拨号上网', '光纤上网', '无线上网', '传真' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面不是网络设备的有().',
  body: [ '路由器', '打印机', '交换机', '防火墙' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下面不属于OSI参考模型分层的是().',
  body: [ '物理层', '网络层', '网络接口层', '应用层' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面不属于广域网技术的是().',
  body: [ 'X.25', '帧中继', 'ATM', 'Ethernet' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面不属于移动通信的是().',
  body: [ '有线电视系统', '寻呼系统', '蜂窝移动系统', '无绳电话系统' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面的()是网络层协议.',
  body: [ 'TCP协议', 'IP协议', 'SPX协议', 'HDLC协议' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '协议指的是().',
  body: [ '文件传输协议', '网际协议', '超文本传输协议', '一组协议的统称' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '信号的电平随时间连续变化,这类信号称为().',
  body: [ '模拟信号', '传输信号', '同步信号', '数字信号' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '要实现网络通信必须具备三个条件,以下各项中,()不是.',
  body: [ '解压缩卡', '网络接口卡', '网络协议', '网络服务器/客户机程序' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '要通过拨号上网,必须拥有特定的服务器帐号,这些服务商的英文简称是().',
  body: [ 'USB', 'ISB', 'IDP', 'ISP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '一般情况下,校园网属于().',
  body: [ 'LAN', 'WAN', 'MAN', 'Internet' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以太网使用的介质控制协议是().',
  body: [ 'CSMA/CD', 'TCP/IP', 'X.25', 'UDP' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以下()不是计算机网络常采用的基本拓扑结构.',
  body: [ '星型结构', '分布式结构', '总线结构', '环型结构' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下不是计算机网络主要功能的是().',
  body: [ '信息交换', '资源共享', '分布式处理', '并发性' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下不属于无线介质的是().',
  body: [ '激光', '电磁波', '光纤', '微波' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下各项中不属于服务器提供的共享资源是().',
  body: [ '硬件', '软件', '数据', '传真' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下关于FTP与Telnet的描述不正确的是().',
  body: 
   [ 'FTP与Telnet都采用客户机/服务器方式',
     '允许没有帐号的用户登录到FTP服务器',
     'FTP与Telnet可在交互命令下实现,也可利用浏览器工具',
     '可以不受限制地使用FTP服务器上的资源' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下关于Internet互联网的说法中,错误的是().',
  body: 
   [ 'Internet即国际互联网',
     'Internet具有网络资源共享的特点',
     '在中国称为因特网',
     'Internet是局域网的一种' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下关于Intranet的描述不正确的是().',
  body: 
   [ 'Intranet以TCP/IP协议为基础,以Web为核心应用的企业内部信息网络',
     'Internet用户不能够访问Intranet上的资源',
     'Intranet采用浏览器技术开发客户端软件',
     'Intranet采用B/S模式' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下哪个命令用于测试网络连通()?',
  body: [ 'telnet', 'nslookup', 'ping', 'ftp' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下通信方式中,()组都属于微波远距离通信.①卫星通信②光纤通信③地面微波接力通信.',
  body: [ '①②③', '①③', '①②', '②③' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下网络服务中,()属于为网络用户提供硬件资源共享的服务.',
  body: [ '文件服务', '消息服务', '应用服务', '打印服务' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下网络设备中,能够对传输的数据包进行路径选择的是().',
  body: [ '网卡', '网关', '路由器', '中继器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下网络协议中,()能够使数据传输的速度最快.',
  body: [ 'TCP', 'UDP', 'FTP', 'IP' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '用户可以使用()命令检测网络连接是否正常.',
  body: [ 'Ping', 'FTP', 'Telnet', 'Ipconfig' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '用户可以使用()命令检查当前TCP/IP网络中的配置情况.',
  body: [ 'Ping', 'FTP', 'Telnet', 'Ipconfig' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '用来把来自计算机的数字信号转换为模拟声音以便通过电话线进行传输,然后在接收端再把声音信号转换回成计算机所能接受的数字格式,这种设备叫做().',
  body: 
   [ 'SearchEngine(搜索引擎)',
     'SoundBlaster(声卡)',
     'NetworkCard(网卡)',
     'Modem(调制解调器)' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '用来补偿数字信号在传输过程中的衰减损失的设备是().',
  body: [ '网络适配器', '集线器', '中继器', '路由器' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用于无线通信的传输介质不包括().',
  body: [ '短波', '紫外线', '红外线', '微波' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '用于学校教学的计算机网络教室,它的网络类型属于().',
  body: [ '广域网', '城域网', '局域网', '互联网' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '有100M交换式HUB(16口,分4组),以下说法正确的是().',
  body: 
   [ '16个用户共享100M带宽',
     '每个用户分别享用100M带宽',
     '组内用户共享100M带宽',
     '组间用户共享100M带宽' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '有关Modem,以下()是错误的.',
  body: 
   [ 'Modem中文叫调制解调器',
     'Modem既是输入设备,也是输出设备',
     'Modem能将模拟信号转换成数字信号',
     'Modem不能将数字信号转换成模拟信号' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '有关网络的接入方式,以下说法不正确的是().',
  body: 
   [ '所谓接入方式是指用户采用什么设备、通过什么线路接入互联网',
     '专线方式是通过租用专线电缆与Internet进行直接的连接',
     '校园网是通过专线接入Internet的',
     '通过专线接入Internet除了微机以外,还需要网卡、网线、调制解调器等硬件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '有线传输介质中传输速度最快的是().',
  body: [ '电话线', '网络线', '红外线', '光纤' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '远程计算机是指().',
  body: [ '要访问的另一系统的计算机', '物理距离100km以外', '位于不同国家的计算机', '位于不同地区的计算机' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在拨号入网时,()不是必备的硬件.',
  body: [ '计算机', '电话线', '调制解调器', '电话机' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在计算机网络发展过程中,()对计算机网络的形成与发展影响最大.',
  body: [ 'OCTPUS', 'Nowell', 'DATAPAC', 'ARPANET' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在计算机网络术语中,WAN的中文含义是().',
  body: [ '以太网', '互联网', '局域网', '广域网' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在计算机网络中,()用于验证消息发送方的真实性.',
  body: [ '病毒防范', '数据加密', '数字签名', '访问控制' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在计算机网络中,LAN网指的是().',
  body: [ '局域网', '广域网', '城域网', '以太网' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在计算机网络中,表示数据传输有效性的指标是().',
  body: [ '误码率', '频带利用率', '传输速率', '信息容量' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在建立ARPAnet的过程中使用的通信协议是().',
  body: [ 'HTTP', 'IPX/SPX', 'IP', 'NETBUIE' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在同一个信道上的同一时刻,能够进行双向数据传送的通信方式是().',
  body: [ '单2', '半双2', '全双2', '上述三种均不是' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在下列传输介质中,抗干扰能力最强的是().',
  body: [ '微波', '同轴电缆', '光纤', '双绞线' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在下列四项中,不属于OSI(开放系统互连)参考模型七个层次的是().',
  body: [ '会话层', '用户层', '数据链路层', '物理层' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '中国公用计算机互联网的英文简写是().',
  body: [ 'CHINANET', 'CERNET', 'NCFC', 'CHINAGBNET' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '中国互联网络信息中心(CNNIC)的功能是().',
  body: 
   [ '为我国境内的互联网络用户提供域名注册、IP地址分配',
     '提供网络技术资料、使用网络的政策、法规、用户入网的办法',
     '提供网络通信目录、WWW主页目录、网上各种信息库的目录等服务',
     '以上都正确' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '中国教育和科研计算机网的英文简称是().',
  body: [ 'INTERNET', 'NCFC', 'ISDN', 'CERNET' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '子网掩码是一个()位的模式,它的作用是识别子网和判别主机属于哪一个网络.',
  body: [ '16', '24', '32', '64' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '组成局域网的硬件有网络服务器,用户工作站,()及传输介质.',
  body: [ '网络操作系统', '网络终端', '网卡', 'MODEM' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '"URL"的意思是().',
  body: [ '统一资源管理器', 'Internet协议', '简单邮件传输协议', '传输控制协议' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '"WWW"就是通常说的()的简称.',
  body: [ '电子邮件', '网络广播', '全球信息服务系统', '网络电话' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '"统一资源定位器"的缩写形式是(),它是Web浏览器中使用的标准Internet地址格式.',
  body: [ 'NULL', 'ABS', 'BBS', 'URL' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '()是一个提供信息"检索"服务的网站,它使用某些程序把Internet上的所有信息归类以帮助人们在茫茫网海中搜寻到所需要的信息.',
  body: [ 'Google', 'FTP', 'Telnet', 'POP' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()是一台计算机或一位用户在Internet或其它网络上的惟一标识,其他计算机或用户使用它与拥有这一地址的计算机或用户建立连接或者交换数据.',
  body: 
   [ 'IPaddress(IP地址)',
     'AddressBar(地址条)',
     'attachment(附件)',
     'domain(域名)' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '()是最早出现的计算机网络体系结构和协议标准之一.',
  body: [ 'TCP/IP', 'FTP', 'NET', 'TEMP' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '[Content_Types].xml 文件中包含什么类型的信息?',
  body: 
   [ '文档正文中所有类型内容的列表,例如文本、表格和图表',
     'ZIP 压缩包每种文件类型的 Default Extension 引用',
     '包括不同类型文档内容的 XML 部件的 Override PartName 引用,例如 document.xml、comments.xml 或 styles.xml',
     '第二和第三个答案都对' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '224代表的是().',
  body: [ '主机地址', '网络地址', '广播地址', '组播地址' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'edu.cn是Internet上一台计算机的().',
  body: [ '域名', 'IP地址', '非法地址', '协议名称' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'E-mail邮件本质是().',
  body: [ '一个文件', '一份传真', '一个电话', '一个电报' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'FrontPage是一种所见即所得的().',
  body: [ '数据库管理系统', '网页编辑器', 'HTML源代码编辑器', 'Web浏览器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'HomePage指WWW站点上的().',
  body: [ '网页', '主页', '任意项', '名称' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'HTML的中文名是().',
  body: [ 'WWW编程语言', 'Internet编程语言', '超文本标记语言', '主页制作语言' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'HTML是一种().',
  body: [ '主页制作语言', '超文本标记语言', 'WWW编程语言', '浏览器编程语言' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'HTML文件必须由特定的程序进行编译和执行才能显示,这种编译器就是().',
  body: [ '文本编辑器', '解释程序', '编译程序', 'Web浏览器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'HTTP是().',
  body: [ '高级程序设计语言', '域名', '超文本传输协议', '网址' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Internet Explore 浏览器能实现的功能不包含().',
  body: [ '资源下载', '阅读电子邮件', '编辑网页', '查看网页源代码' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Internet Explorer软件包中包括的电子邮件和新闻客户程序是下列哪一项()?',
  body: [ 'Outlook Express', 'Frontpage Expree', 'Word97', 'Excel' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet Explorer是目前流行的浏览器软件,它的主要功能之一是浏览().',
  body: [ '网页文件', '文本文件', '多媒体文件', '图像文件' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet采用的通信协议是().',
  body: [ 'SMTP', 'FTP', 'POP3', 'TCP/IP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Internet采用域名地址的原因是().',
  body: 
   [ '一台主机必须用域名地址标识',
     '一台主机必须用IP地址和域名共同标识',
     'IP地址不能唯一标识一台主机',
     'IP地址不便于记忆' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Internet的3项主要服务项目的英文缩写是().',
  body: 
   [ 'Web,LAN,HTML',
     'E-mail,FTP,WWW',
     'ISP,HUB,BBS',
     'TCP/IP,FFP,PPP/SLIP' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'Internet的核心内容是().',
  body: [ '全球程序共享', '全球数据共享', '全球信息共享', '全球指令共享' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Internet的基础协议是().',
  body: [ 'OSI', 'NetBEUI', 'IPX/SPX', 'TCT/IP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Internet的前身是().',
  body: [ 'ARPAnet', '局域网', 'MILnet', 'NFSnet' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet的缺点是().',
  body: [ '不够安全', '不能传输文件', '不能实现实时对话', '不能传输声音' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet的通信协议是().',
  body: [ 'TCP/IP', 'OSI/ISO', 'NetBEUI', 'SMTP' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet的中文含义是().',
  body: [ '因特网', '城域网', '互联网', '局域网' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet地址中的顶级域名net一般表示().',
  body: [ '政府机构', '教育机构', '网络管理机构', '中国' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Internet上的计算机地址可以写成()格式或域名格式.',
  body: [ '绝对地址', 'IP地址', '网络地址', '相对地址' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'Internet上计算机的名字由许多域构成,域间用()分隔.',
  body: [ '小圆点', '逗号', '分号', '冒号' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet上最常用的网络协议是TCP/IP,下列不属于它包含的最常见的应用协议的是().',
  body: [ 'HTTP', 'FTP', 'POP3', 'NETBEUI' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Internet使用的协议是().',
  body: [ 'CSMA/CD', 'X.25/X.75', 'Token  Ring', 'TCP/IP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Internet是国际互连网络,下面()不是它提供的服务.',
  body: [ 'E-mail', '远程登录', '故障诊断', '信息查询' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Internet是一个()',
  body: [ '大型网络', '国际性电脑公司', '一个大软件', '网络的集合' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Internet提供的各种服务中,()指的是远程登录服务.',
  body: [ 'FTP', 'Usenet', 'Telnet', 'Gopher' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'Internet通过()将计算机与网络互联在一起.',
  body: [ '网桥', '主机', '路由器', '网卡' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'Internet网站域名地址中的GOV表示().',
  body: [ '政府部门', '商业部门', '网络服务器', '一般用户' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'Internet最初创建目的是用于().',
  body: [ '政治', '经济', '教育', '军事' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'IP地址用()个字节表示.',
  body: [ '2', '3', '4', '8' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'IP协议的核心问题是().',
  body: [ '传输', '寻径', '封装', '质量' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'IP协议是()之间通信的协议.',
  body: 
   [ '可以用于Internet网和非Internet网',
     '可以用于Internet网中的任何计算机网络',
     '仅限于Internet网中的局域网内部的计算机',
     '可以用于Internet网中的任何局域网与局域网之外的其他计算机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'ISDN的含义是().',
  body: [ '计算机网', '广播电视网', '综合业务数字网', '同轴电缆网' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'OutlookExpress的服务器设置中SMTP服务器是指().',
  body: [ '邮件接收服务器', '邮件发送服务器', '域名服务器', 'WWW服务器' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'TCP/IP的基本传输单位是().',
  body: [ '文件', '字节', '数据包', '帧' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'TCP/IP模型的传输层有两个协议,第一个协议TCP是一种可靠的面向连接的协议,第二个协议UDP是().',
  body: [ '一种可靠的面向连接的协议', '一种不可靠的面向连接的协议', '一种可靠的无连接协议', '一种不可靠的无连接协议' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'TCP收到数据报后,按照它们()对它们进行调整.',
  body: [ '被分割的先后顺序', '到来的先后顺序的逆序', '不考虑顺序', '长短' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'TCP通信建立在连接的基础上,TCP连接的建立要执行()次握手的过程.',
  body: [ '1', '2', '3', '4' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: 'TCP协议工作在以下的哪个层().',
  body: [ '物理层', '链路层', '传输层', '应用层' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'UDP提供面向()的传输服务.',
  body: [ '端口', '地址', '连接', '无连接' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'World Wide Web简称万维网,下列叙述错误的是().',
  body: 
   [ 'WWW和E-mail是Internet上很重要的两个流行工具',
     'WWW是Internet中的一个子集',
     '一个Web文档可以包含文字,图片,声音和视频动画等',
     'WWW是另外一种互联网' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'www.njtu.edu.cn是Internet上一台计算机的().',
  body: [ '域名', 'IP地址', '非法地址', '协议名称' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'WWW的运行机制是使用客户机/服务器模式.客户机程序也称为()程序.',
  body: [ '编译', '解释', '系统', '浏览器' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: 'WWW的作用是().',
  body: [ '信息浏览', '文件传输', '收发电子邮件', '远程登录' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: 'WWW浏览器是().',
  body: [ '一种操作系统', 'TCP/IP体系中的协议', '浏览WWW的客户端软件', '远程登录的程序' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: 'WWW中的超文本指的是()的文本.',
  body: [ '包含图片', '包含多种文本', '包含链接', '包含动画' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '把电子邮件从客户机传输到服务器,以及从某个服务器传输到另一个服务器的网络协议是().',
  body: [ 'POP3', 'HTTP', 'FTP', 'SMTP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '标题级可以用来设置不同的字体大小,在网页中分为()级标题.',
  body: [ '3', '4', '5', '6' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '不属于电子邮件系统主要功能的是().',
  body: [ '生成邮件', '发送和接收邮件', '建立电子信箱', '自动销毁邮件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '超文本的含义是().',
  body: [ '可以包括文本之外的图形', '可以传递声音文件', '可以播放电影', '可以与其他文本链接' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '从网址www.Tongji.edu.cn可以看出它是中国的一个()站点.',
  body: [ '商业部门', '政府部门', '教育部门', '科技部门' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '打开个人信箱后,如果要发送电子邮件给他人,要点击哪个功能菜单().',
  body: [ '文件夹', '通讯录', '日程安排', '发邮件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '代表网页文件的扩展名是().',
  body: [ 'html', 'txt', 'doc', 'ppt' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '单击Internet Explorer浏览器窗口中工具栏上的某按钮,则可以在浏览器窗口左侧显示几天或几周前访问过的Web站点链接,这里的某按钮指的是().',
  body: [ '"刷新"按钮', '历史按钮', '"收藏夹"按钮', '搜索按钮' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '当个人计算机以拨号方式接入Internet时,必须使用的设备是().',
  body: [ '网卡', '调制解调器(Modem)', '电话机', '交换机' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '当前()已成为最大的信息中心.',
  body: [ 'Intranet', 'Internet', 'Novell', 'NT' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '当用浏览器浏览网页时,下载网页中图片的正确方法是().',
  body: 
   [ '在图片上单击鼠标左键',
     '用"复制"命令',
     '鼠标放在图片上,单击"文件"菜单中"另存为"命令',
     '在图片上单击鼠标右键,选择快捷菜单中"图片另存为"命令' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '电子商务的安全保障问题主要涉及()等.',
  body: [ '加密', '防火墙是否有效', '数据被泄漏或篡改、冒名发送、未经授权者擅自访问网络', '身份认证' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '电子信箱地址的格式是().',
  body: [ '用户名@主机域名', '主机名@用户名', '用户名.主机域名', '主机域名.用户名' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '电子邮件到达时,如果接收方没有开机,那么邮件将().',
  body: [ '开机时重新发送', '丢失', '退回给发件人', '保存在服务商的E-mail服务器上' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '电子邮件地址格式为:wangjun@hostname,其中hostname为().',
  body: [ '用户地址名', 'ISP某台主机的域名', '某公司名', '某国家名' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '电子邮件是Internet应用最广泛的服务项目,通常采用的传输协议是().',
  body: [ 'SMTP', 'TCP/IP', 'CSMA/CD', 'IPX/SPX' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '电子邮件在INTERNET上的任何两台计算机之间进行传送时采用的是()协议.',
  body: [ 'POP3', 'SMTP', 'HTTP', 'TCP/IP' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '对于电子邮件的论述正确的是().',
  body: 
   [ '每个电子邮件地址是唯一的,所有用户的电子邮件地址有统一的格式',
     '每个电子邮件地址是唯一的,所有用户的电子邮件地址格式可以不统一',
     '每个电子邮件地址不是唯一的,所有用户的电子邮件地址有统一的格式',
     '每个电子邮件地址不是唯一的,所有用户的电子邮件地址格式可以不统一' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '发送电子邮件时,在发邮件界面中,发送给一栏中,应该填写().',
  body: [ '接收者名字', '接收者邮箱地址', '接收者IP地址', '接收者主页地址' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '关于HTML正确的是().',
  body: 
   [ '为超文本标记语言',
     '指的是多媒体信息',
     '是WWW中遵循的协议',
     '只能用Frontpage此类的网页制作工具实现' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '关于带宽错误的表述是().',
  body: [ '传输介质的直径大小', '单位时间信息的流量', '传送信号的高频与低频之差', '数据的传送速度' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '关于电子邮件服务,下列叙述中错误的是().',
  body: 
   [ '网络上必须有邮件服务器用来运行邮件服务器软件',
     '用户发出的邮件会暂时存放在邮件服务器中',
     '用户上网时可以向邮件服务器发出收邮件的请求',
     '发邮件者和收邮件者如果同时在线,则可不使用邮件服务器直接通信' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '关于收发电子邮件的过程中,以下说法正确的是().',
  body: 
   [ '一封信不能同时发给多个地址',
     '一封信能够同时发给多个地址,但收信人可以不知道此信是批量发送的',
     '一封信能够同时发给多个地址,但收信人一定会知道此信同时发给了哪些地址',
     '以上说法都不正确' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '关于网址的说法中,()的说法是不正确的.',
  body: [ 'IP地址是唯一', '域名的长度是固定', '输入网址时可以使用域名', '网址有两种表示方法' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '关于文档的安全性,信任发布者的过程是().',
  body: 
   [ '使用受信任位置打开包含宏或其他代码的文件',
     '将数字证书添加到您的受信任的发布者列表中',
     '在每次打开包含宏或其他代码的文件时启用内容' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '合法的E-mail地址是().',
  body: 
   [ 'shi@online.sh.en',
     'shi.online.sh.cn',
     'online.sh.cn@shj',
     'cn.sh.online.shi' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '接入Internet的计算机必须共同遵守().',
  body: [ 'CPI/IP协议', 'PCT/IP协议', 'PTC/IP协议', 'TCP/IP协议' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '接收电子邮件的服务器是POP3,外发邮件服务器是().',
  body: [ 'TCP', 'IP', 'HTTP', 'SMTP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '进入IE浏览器需要双击()图标.',
  body: [ '网上邻居', '网络', 'Internet', 'Internet Explorer' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '利用IE访问FTP服务器,访问FTP正确的网址是().',
  body: 
   [ 'ftp://www.njtu.eud.cn',
     'http://ftp.njtu.edu.cn',
     'ftp://ftp.njtu.edu.cn',
     'open://ftp.njtu.edu.cn' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '每次都要对一些邮件地址发同一份"通知"时,最好的办法是().',
  body: 
   [ '先建立一个"组",将成员添入组中,给"组"起一个名字,只要给"组"发信,组成员都可收到',
     '建立"通讯簿",选择收件人',
     '复制多份一一发送',
     '先选一个收件人的地址,再单击"抄送"命令' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '目前,在()的迅猛发展下,世界信息化进程加快.',
  body: [ 'Internet', 'Novell', 'WindowsNT', 'ISDN' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '目前在INTERNET上,以下哪种服务的发展速度最快().',
  body: [ 'FTP', 'Gopher', 'WWW', 'Telnet' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '匿名FTP服务的含义是().',
  body: 
   [ '在Internet上没有地址的FTP服务',
     '允许没有帐号的用户登录到FTP服务器',
     '发送一封匿名信',
     '可以不受限制地使用FTP服务器上的资源' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '您的文档库 URL 如下,要使用 Word、Excel 或 PowerPoint 2007 保存它,您需要它的哪一部分()?http://sharepoint/Team%20Files/Forms/AllItems.aspx',
  body: 
   [ 'http://sharepoint/upload_files_here',
     'http://sharepoint/Team%20Files',
     'http://sharepoint/Team%20Files/Forms/',
     'http://sharepoint/' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '您将文件签出到笔记本电脑,外出旅行,然后回来工作,重新建立到文档库的 Internet 连接,以下()项是您可以签入文件的方式之一?',
  body: 
   [ '在 Web 浏览器中,进入文档库,将指针放在文件名上,单击向下箭头,然后单击菜单上的"签入"',
     '在 Word 中,进入"开始"选项卡,将指针放在文件名上,然后单击"签入"',
     '在 Windows 中,右键单击"SharePoint 草稿"中的文件,然后单击"签入"',
     '在 Windows 中,双击"SharePoint 草稿"文件夹中的文件' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '任何计算机只要采用()与INTERNET中的任何一台主机通讯就可以成为INTERNET的一部分.',
  body: [ '电话线', '调制解调器', 'PPP协议', 'TCP/IP协议' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '如果服务器不支持FrantPage服务器扩展,则下列()可以使用.',
  body: [ '站点计数器', '搜索表单', '表单确认网页', '滚动字幕' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '如果您从 Outlook 2007 中编辑一个下载的文件,Outlook 中该文件旁边将显示().',
  body: 
   [ '一个红色向下箭头,表示该文件是在您的计算机上(而不是文档库中)编辑的',
     '一个红色签出图标,表示该文件是在您的计算机上编辑的,需要在文档库中更新',
     '一个红色向上箭头,表示文件是在您的计算机上编辑的,需要更新到文档库',
     '一个绿色签出图标,表示文件是在您的计算机上编辑的,需要在文档库中更新' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '如果希望每次进入IE后自动连接某一个网站,则应进行以下()操作.',
  body: 
   [ '将该网站的地址"添加到收藏夹"中',
     '将该网站的地址添加到"工具"菜单下,"Internet选项"中的"常规"选项卡中的"地址"栏内',
     '单击工具栏中的"主页"图标',
     '单击工具栏中的"搜索"图标' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '如果想把一文件传送给别人,而对方又没有FTP服务器,最好的方法是使用().',
  body: [ 'WWW', 'Gopher', 'E-mail', 'WAIS' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '如何了解您的站点使用的 Windows SharePoint Services 或 Office SharePoint Server 的版本()?',
  body: 
   [ '单击"帮助"菜单,然后单击"关于"',
     '向 IT 部门或为您设置站点的人员咨询',
     '如果您在左侧看到一个名为"共享文档"的链接,就知道您的版本为 3.0',
     '查看实际服务器机器,外壳上将印有版本号' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '如何为下载的文档库签出文件()?',
  body: 
   [ '在 Outlook 2007 中,文件将显示为消息,右键单击消息,然后单击"签出"',
     '在 Outlook 2007 中,双击文件,然后单击消息栏上的"签出"',
     '在 Web 浏览器中,指向文件名,单击显示的向下箭头,然后单击"签出"',
     '在 Web 浏览器中,指向文件名,单击向下箭头,然后单击"Outlook 签出"' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '若欲把雅虎(www.yahoo.com.cn)设为主页,应该如何操作( ).',
  body: 
   [ '在IE属性主页地址栏中键入:www.yahoo.com.cn',
     '在雅虎网站中申请',
     '在IE窗口中单击主页按钮',
     '将雅虎添加到收藏夹' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '上网时会发现很多有用的信息,可以将有用的信息保存起来,()的说法是不正确的.',
  body: 
   [ '可以保存整个Web页',
     '可以保存其中的部分内容,如文本,图形或链接',
     '可以通过电子邮件将Web页发送给其他可以访问Web网页的人',
     'Web页内容不能通过打印机进行打印' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '收发电子邮件,首先必须拥有().',
  body: [ '电子邮箱', '上网账号', '中文菜单', '个人主页' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '书签是标记在网页上的一串字符或者().',
  body: [ '位置', '域名', '数字', '网址' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '数字签名是解决()问题的方法.',
  body: [ '未经授权擅自访问网络', '数据被泄漏或篡改', '冒名发送数据或发送数据后抵赖', '以上三种' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '数字签名是由谁或哪些内容创建的()?',
  body: [ '发布者', '数字证书', '受信任的发布者', '您自己' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '数字签名通常使用()方式.',
  body: 
   [ '公钥密码体系中的公开密钥与Hash相结合',
     '密钥密码体系',
     '公钥密码体系中的私人密钥与Hash相结合',
     '公钥密码体系中的私人密钥' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '通过INTERNET发送或接收电子邮件(E_MAIL)的首要条件是应该有一个电子邮件(E_MAIL)地址,它的正确形式是().',
  body: [ '用户名@域名', '用户名#域名', '用户名/域名', '用户名.域名' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '通过Internet或其它网络从其它计算机向自己的计算机系统中传送文件的过程叫做().',
  body: 
   [ 'download(下载)',
     'upload(上载)',
     'GetMail(接收邮件)',
     'PostArticle(张贴消息)' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '网页的标题是在()标识符中的文字.',
  body: 
   [ '<body>…</body>',
     '<a>…</a>',
     '<head>…</head>',
     '<title>…</title>' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '网页制作时,欲将访问者输入数据结果提交给网站,可用().',
  body: [ '文本框', '单选框', '复选框', '按钮' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '网页中的图片不可另存为().',
  body: [ '*.JPG', '*.GIF', '*.PCX', '*.BMP' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '为什么要将文档库下载到 Outlook 2007()?',
  body: 
   [ '因为可能要同时签出所有文件',
     '因为可能要签出单个文件以便在 Word、Excel 或 PowerPoint 2007 中使用并脱机处理',
     '因为可能要使用 Outlook 2007 将许多 Word 文档自动附加到单一电子邮件以发送',
     '因为可能要在未连接到 Internet 时参考文件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列各项中,不能作为域名的是().',
  body: 
   [ 'www.aaa.edu.cn',
     'ftp.buaa.edu.cn',
     'www,bit.edu.cn',
     'www.lnu.edu.cn' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列关于IE浏览器收藏夹的说法中,正确的是().',
  body: 
   [ 'IE浏览器的收藏夹不可以复制,因为它是IE的一个组件',
     'IE浏览器的收藏夹不可以复制,因为它是Windows的一个组件',
     'IE浏览器的收藏夹可以复制,因为它是一个文件夹',
     'IE浏览器的收藏夹可以复制,因为它是一个文件' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列关于Internet 的说法错误的是().',
  body: 
   [ 'Internet是目前世界上最大的计算机网络',
     'Internet的前身是ARPANet',
     'Internet中,DNS的功能是将IP地址转化为域名',
     'Internet采用的协议是TCP/IP协议' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列哪一个是正确的ip地址().',
  body: [ '202.202.1', '202.2.2.2.2', '202.112.112.1', '202.257.14.13' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列说法错误的().',
  body: 
   [ '电子邮件是Internet提供的一项最基本的服务',
     '电子邮件具有快速、高效、方便、价廉等特点',
     '通过电子邮件,可向世界上任何一个角落的网上用户发送信息',
     '可发送的只有文字和图像' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列说法正确的是().',
  body: 
   [ '网络中的路由器可不分配IP地址',
     '网络中的路由器不能有IP地址',
     '网络中的路由器应分配两个以上的IP地址',
     '网络中的路由器只能分配一个IP地址' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列四项内容中,不属于Internet(因特网)基本功能的是().',
  body: [ '电子邮件', '文件传输', '远程登录', '实时监测控制' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列选项中,对于一个电子邮箱地址书写正确的是().',
  body: [ '@263.net', '2008BJ@263.net', 'WWW.263.net', '2008BJ#263.net' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下面()是合法的URL.',
  body: 
   [ 'http://www.ncie.cn',
     'Bftp://www.ncie.gov.cnabrar',
     '<I>file:</I>///C:/Downloads/abrar',
     'Dhttp://www.ncie.gov.cnabhtml' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面IP地址中,正确的是().',
  body: 
   [ '202.9.1.12',
     'CX.9.23.01',
     '202.122.202.345.34',
     '202.156.33.D' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面IP中属于C类地址的是().',
  body: [ '125.54.21.3', '193.66.31.4', '129.57.57.96', '240.37.59.62' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '下面的IP地址中,()是有效的?',
  body: 
   [ '202.280.130.45',
     '130.192.290.45',
     '192.202.130.45',
     '280.192.33.45' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面关于TCP/IP的说法,()的说法是错误的.',
  body: 
   [ 'TCP/IP包括传输控制协议和网际协议',
     'TCP/IP是网络之间进行通信时共同遵守的各种规则的集合',
     'TCP/IP是一种机器语言',
     'TCP/IP定义了如何对传输的信息进行分组' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下面关于Web页的叙述,不正确的是().',
  body: 
   [ 'Web页可以以文档的形式保存',
     '可以直接在"地址栏"中输入想要访问的Web页的地址,即可访问Web页',
     '可以利用搜索引擎搜索要进行访问的Web页',
     '可以根据自己的方式任意编辑Web页' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下面哪一个是指国际互联网().',
  body: [ 'Internet', 'LAN', 'MAN', 'WAN' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '下面是一些常用的文件类型,其中()文件类型是最常用的WWW网页文件.',
  body: [ 'txt或text', 'htm或html', 'gif或jpeg', 'wav或au' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '想要在发送电子邮件时传送一个或多个文件,可使用().',
  body: [ 'FTP', '电子邮件附件功能', 'Telnet', 'WWW' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '信息产业部要建立WWW网站,其域名的后缀应该是().',
  body: [ 'com.cn', 'edu.cn', 'cnn', 'gov.cn' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '要打开IE窗口,可以双击桌面上的哪个图标().',
  body: [ 'internet explore', '网上邻居', 'outlook express', '我的电脑' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '一封电子邮件可以发给().',
  body: 
   [ '使用不同类型的计算机,和不同类型的操作系统的,同类型网络结构下的用户',
     '不同类型的网络中,使用不同操作系统的,使用相同类型的计算机的用户',
     '不同类型的网络中,不同类型计算机上,使用相同操作系统的用户',
     '不同类型的网络中,不同类型的计算机上,使用不同的操作系统的用户' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以下()不是标记语言.',
  body: [ 'HTML', 'Java Script', 'SGML', 'XML' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下()不属于FrontPage编辑器中编辑超链接操作的范围.',
  body: [ '更改超链目标', '删除超链接', '更改超链目标的内容', '更改超链源的文本内容' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下()代表与科学问题有关的新闻组.',
  body: [ 'comp', 'rec', 'sci', 'soc' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下()电子邮件地址是正确的.',
  body: 
   [ 'Fox a mh.bit.edu.com',
     'mh.bit.edu.cn@fox',
     'Fox@.mh.bit.edu.cn',
     'Fox@mh.bit.edu.cn' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下不属于Internet功能的是().',
  body: [ '信息查询', '电子邮件传送', '文件传输', '程序编译' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下哪个统一资源定位器的写法是完全正确的()?',
  body: 
   [ 'http://www.mcp.comqueque.html',
     'http//www.mcp.comqueque.html',
     'http://www.mcp.com/que/que.html',
     'http//www.mcp.com/que/que.html' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '以下哪句话最贴切地描述了受信任的发布者()?',
  body: [ '编写非恶意代码的人', '使用您决定信任的数字证书对代码进行签名的人或公司', '向软件开发人员颁发数字证书的人或公司' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下哪句话最贴切地描述了数字证书()?',
  body: [ '用来对宏和其他代码进行数字签名的电子图章', '用来通过密码保护文件的电子印章', '证明宏没有错误的电子图章' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以下哪种操作不需要连入Internet().',
  body: [ '发电子邮件', '接收电子邮件', '申请电子邮件', '撰写电子邮件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下能代表电子邮件的是().',
  body: [ 'E-mail', 'Veronica', 'Gopher', 'Telnet' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以下设备中不可用于网络互联的是().',
  body: [ '集线器', '路由器', '网桥', '网关' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '以下属于低层协议的是().',
  body: [ 'FTP', 'IP', 'UDP', 'TCP' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下信息中()不是数字证书申请者的信息.',
  body: [ '版本信息', '证书序列号', '签名算法', '申请者的姓名,年龄' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '以下有关网页保存类型的说法中正确的是().',
  body: 
   [ 'Web页,全部,整个网页的图片,文本和超链接',
     'Web页,全部,整个网页包括页面结构,图片,文本,嵌入文件和超链接',
     'Web页,仅HTML,网页的图片,文本,窗口框架',
     'Web页,仅HTML,网页的图片,文本,' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '以下语言为脚本语言的是().',
  body: [ 'BASIC', 'Java', 'VB Script', 'Java Applet' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用户从FTP服务器下载软件后常常要进行()处理.',
  body: [ '压缩', '打包', '解压缩', '拆包' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '网页中可使我们进行选择性浏览的称为().',
  body: [ '声音', '图片', '文字', '链接' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '为了加快页面的下载速度,在网页中一般使用()格式的图片文件.',
  body: [ 'BMP', 'GIF或JPG', 'TGA', 'TIF' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '系统对WWW网页存储的默认的扩展名是().',
  body: [ 'PPT', 'TXT', 'DOC', 'HTML' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列()不属于 "Internet协议(TCP/IP)属性"对话框选项.',
  body: [ 'IP地址', '子网掩码', '诊断地址', '默认网关' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '下列电子邮件地址中正确的是().',
  body: 
   [ 'zhangsan&sina、com',
     'lisi!126、com',
     'zhang$san@qq、com',
     'lisi_1982@sohu.com' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '下列关于E-mail的附件的说法正确的是().',
  body: [ '只能是图片和声音文件', '只能是视频文件', '只能是文本文件', '所有文件' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '现有一个主机的域名为att-in.att.int,由此可知拥有该主机的单位是一个().',
  body: [ '教育机构', '国际性组织', '商业机构', '科研机构' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '现在Internet上的电子书籍多数采用PDF格式存储和传递,这种格式的文件是()软件来打开并阅读的.',
  body: 
   [ 'Microsoft Office',
     'Real Player',
     'Adobe Acrobat Reader',
     'ACDsee' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用户的电子邮件地址中必须包括以下哪项所给出内容才算是完整()?',
  body: 
   [ '用户名,用户口令,电子邮箱所在的主机域名',
     '用户名,用户口令',
     '用户名,电子邮箱所在的主机域名',
     '用户口令,电子邮箱所在的主机域名' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用户将自己的文件传送到FTP服务器中,通常称为().',
  body: [ '移动', '复制', '上传', '下载' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用户要想在网上查询WWW信息,必须要安装并运行一个被称之为().的软件.',
  body: [ 'HTTP', 'YAHOO', '浏览器', '万维网' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '用户在浏览文字信息的同时,随时可以通过点击以醒目方式显示的单词,短语或图形,跳转到其他信息,这种文本组织方式称为().',
  body: [ '信息检索服务', '文件传输', '超文本方式', '服务器之间漫游' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '有关"电子信箱"的说法中,以下不正确的是().',
  body: 
   [ '电子信箱实际上是用户硬盘上的一块存储区域',
     '电子信箱实际上是邮件服务器上的一块存储区域',
     '电子信箱地址在全世界范围内是唯一的',
     '电子信箱的"用户名"又被用作"帐号"' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '有关HTML的说法中,以下正确的是().',
  body: 
   [ 'HTML是一个纯文本文件',
     'HTML是一个可执行的文件',
     'HTML只能在Word环境中编制',
     'HTML文件的扩展名只能是.htlm' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '域名系统DNS的作用是().',
  body: [ '存放主机域名', '存放IP地址', '存放邮件的地址表', '将域名转换成IP地址' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '域名与IP地址的关系是().',
  body: [ '一个域名对应多个IP地址', '一个IP地址对应多个域名', '域名与IP地址没有关系', '一一对应' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在FrontPage中,"工具"菜单中的()命令可以设置站点名称.',
  body: [ '网址选择', '自定义', '站点设置', '选项' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在FrontPage中,所提供的网页设计查看方式有().',
  body: 
   [ '普通方式、HTML方式、预览方式',
     '普通方式、HTML方式、页面方式',
     'HTML方式、页面方式、预览方式',
     '普通方式、页面方式、预览方式' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在IE8.0的地址栏中,应当输入().',
  body: [ '要访问的计算机名', '需要访问的网址', '对方计算机的端口号', '对方计算机的属性' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在IE浏览器中的历史记录中记录的是().',
  body: [ '网页的内容', '网页的地址', '本地主机的IP地址', '电子邮件' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在Internet Explorer中,如果发现一些很有吸引力的站点或网页,希望以后快速登录到这个地方,应该使用哪个按钮().',
  body: [ '主页', '搜索', '收藏', '历史' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在Internet ExPlorer中打开网站和网页的方法不可以是().',
  body: [ '利用地址栏', '利用浏览器栏', '利用链接栏', '利用标题栏' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在Internet Explore的地址栏中输入了http:// 127.0.0.1,这指的是().',
  body: [ '本机地址', '整个网络', '某一网站的IP地址', '无法预测' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在Internet上,计算机之间的文件传输使用的协议是().',
  body: [ 'http', 'ftp', 'telnet', 'News' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在Internet上,能让许多人一起交流信息的服务是().',
  body: [ 'BBS', 'WWW', '索引服务', '以上三者都不是' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在Internet上的各种网络和各种不同类型的计算机相互通讯的基础是()协议.',
  body: [ 'ATM', 'IPX', 'X.25', 'TCP/IP' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在Internet中,数字包在传输过程中可能出现顺序颠倒,数字丢失,数据失真,甚至数据重复现象,这种问题可能由()协议来完成.',
  body: [ 'FTP', 'IP', 'TCP', 'UDP' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在Internet中,下列有关主机的域名与主机的IP地址的说法错误的是().',
  body: 
   [ '用户可以用主机的域名或主机的IP地址来访问该主机',
     '主机的域名和主机IP地址的分配不是任意的',
     '用户可根据自己的情况规定主机域名或IP地址',
     '主机的域名在命名时是遵循一定结构的' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在Internet中,用字符形势表示的IP地址称为().',
  body: [ '帐户', '主机名', '域名', '用户名' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在OSI参考模型中,物理层传输的是().',
  body: [ '比特流', '分组', '报文', '帧' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在Outlook Express的服务器设置中POP3服务器是指().',
  body: [ '邮件接收服务器', '邮件发送服务器', '域名服务器', 'WWW服务器' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在Outlook Express和其它电子邮件程序中有一个包括与用户经常联系的电子邮件消息接收者的姓名,电子邮件地址及其它信息的文件夹,叫做().',
  body: [ '个人地址簿', '主页', '个人收藏夹' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在OutlookExPress中不可进行的操作为().',
  body: [ '撤消发送', '接收', '阅读', '回复' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在TCP/IP参考模型中,与OSI参考模型中的传输层对应的是().',
  body: [ '主机一网络层', '应用层', '传输层', '互联层' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在TCP/IP协议的应用层包括了所有的高层协议,其中用于实现网络主机域名到IP地址转换的是().',
  body: [ 'DNS', 'SMTP', 'FTP', 'Telnet' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在Wed网页中指向其他网页的"指针"称之为().',
  body: [ '超链接', '超文本', '超媒体', '多媒体' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在电子邮件地址中,符号@后面的部分是().',
  body: [ '用户名', '主机域名', 'IP地址', '以上三项都不对' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在发送邮件时的"新邮件"窗口中,必须填写内容的是().',
  body: [ '收件人栏', '抄送栏', '主题栏', '附件栏' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在浏览器中,保存电子邮件地址可以使用()功能.',
  body: [ '笔记本', '电子地址簿', '书签', '浏览历史列表' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在默认情况下,文件都是()为要发布的.',
  body: [ '复制', '发布', '封装', '标记' ],
  choiceTrue: 'D',
  userChoice: '' }
,
{ head: '在使用Internet Explorer浏览器时,如果要将感兴趣的网页地址保存起来,以便以后浏览,可以将该网页地址保存在().',
  body: [ '收藏夹中', '文件中', '剪贴板中', '内存中' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在网络中为其它计算机提供共享硬盘,共享打印机及电子邮件服务等功能的计算机称为().',
  body: [ '网络协议', '网络服务器', '网络拓扑结构', '网络终端' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在网页制作中,欲做多选题,可用()表单字段.',
  body: [ '下拉式列表框', '复选框', '单行文本框', '单选框' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在网页中观察超链接存在与否,最直接的方法是().',
  body: [ '观察文字是否有下划线', '观察图片是否加框', '将指针指向文字或图片,观察指针是否变成手形', '观察文字的颜色' ],
  choiceTrue: 'C',
  userChoice: '' }
,
{ head: '在网页中使用图象主要应考虑()问题.',
  body: [ '下载速度与颜色', '下载速度与文件格式', '文件格式与颜色', '以上都不是' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在以拨号方式入网的情况下,通常用户的电子邮件信箱设立在().',
  body: [ '用户自己的微机上', '用户的入网服务商的主机上', '和用户通信的人的主机上', '根本没有什么电子邮件信箱' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在以下 URL 中,哪一部分是您需要参与的()?http://sharepoint/Marketing%20Team%20Documents/Forms/AllItems.aspx',
  body: 
   [ 'http://sharepoint/Marketing%20Team%20Documents/Forms/',
     'http://sharepoint/Marketing%20Team%20Documents/',
     'http://sharepoint/Marketing',
     'http://sharepoint' ],
  choiceTrue: 'B',
  userChoice: '' }
,
{ head: '在域名标识中,不用国家代码表示的是()的主机.',
  body: [ '美国', '英国', '日本', '中国' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '在域名标识中,用于标识商业组织的代码是().',
  body: [ 'com', 'gov', 'mil', 'org' ],
  choiceTrue: 'A',
  userChoice: '' }
,
{ head: '正确的电子邮箱地址的格式是().',
  body: 
   [ '用户名+计算机名+机构名+最高域名',
     '用户名+@+计算机名+机构名+最高域名',
     '计算机名十机构名+最高域名+用户名',
     '计算机名+@+机构名+最高域名+用户名' ],
  choiceTrue: 'B',
  userChoice: '' }
,
]
