export interface IComponentItemProps {
  text: string  // 组件区中组件的名称
  name: string  // 组件区中组件的的key
  icon: string  // 组件区中组件的icon地址
  config: {
    label: string   // 配置区中title名称
    type: string  // 配置区组件类型
    format: string
    value?: string
    config?: {  // 默认配置项
      icon: string
      name?: string 
      style?: React.CSSProperties
      tooltip: string,
    }
    configOptions?: {  // 配置区中组件配置列表
      icon: string
      name?: string 
      style?: React.CSSProperties
      tooltip: string,
    }[]
  }[]
}

export const componentList: IComponentItemProps[] = [
  {
    text: '标题文本',
    name: 'titleText',
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
    config: [
      {
        label: "标题内容",
        type: "input",
        format: "title",
        value: '标题'
      },
      {
        label: "描述内容",
        type: "textarea",
        format: "content",
        value: '文本'
      },
      {
        label: "显示位置",
        type: "legend-style-line",
        format: "position",
        config: {
          icon: '#icon-alignleft',
          style: {
            justifyContent: 'left',
          },
          tooltip: '居左显示',
        },
        configOptions: [
          {
            icon: '#icon-alignleft',
            style: {
              justifyContent: 'left',
            },
            tooltip: '居左显示',
          },
          {
            icon: '#icon-aligncenter',
            style: {
              justifyContent: 'center',
            },
            tooltip: '居中显示',
          }
        ]
      },
      {
        label: "标题大小",
        type: "legend-style-line",
        format: "title-size",
        config: {
          icon: '#icon-alignleft',
          style: {
            fontSize: '16px',
          },
          tooltip: '大(16)号',
        },
        configOptions: [
          {
            icon: '#icon-font-16',
            style: {
              fontSize: '16px',
            },
            tooltip: '大(16)号',
          },
          {
            icon: '#icon-font-14',
            style: {
              fontSize: '14px',
            },
            tooltip: '中(14)号',
          },
          {
            icon: '#icon-font-12',
            style: {
              fontSize: '12px',
            },
            tooltip: '小(12)号',
          }
        ]
      },
      {
        label: "描述大小",
        type: "legend-style-line",
        format: "content-size",
        config: {
          icon: '#icon-font-12',
          style: {
            fontSize: '12px',
          },
          tooltip: '小(12)号',
        },
        configOptions: [
          {
            icon: '#icon-font-16',
            style: {
              fontSize: '16px',
            },
            tooltip: '大(16)号',
          },
          {
            icon: '#icon-font-14',
            style: {
              fontSize: '14px',
            },
            tooltip: '中(14)号',
          },
          {
            icon: '#icon-font-12',
            style: {
              fontSize: '12px',
            },
            tooltip: '小(12)号',
          }
        ]
      },
    ],
  },
  {
    text: '店铺信息',
    name: "shopInfo",
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FqZDUVBo1kNfJsQ06mureerfsFuU.png',
    config: [
      {
        label: "背景图片",
        type: "image",
        format: "background",
        value: 'https://img01.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png'
      },
      {
        label: "店铺名称",
        type: "input",
        format: "shopName",
        value: '个人小店'
      },
      {
        label: "简介",
        type: "input",
        format: "shopInfo",
        value: '全部商品 999 | 上新 30'
      },
      {
        label: "显示样式",
        type: "legend-style-shop",
        format: "legend-style-shop",
        config: {
          icon: '#icon-alignleft',
          name: 'shop_style_1',
          tooltip: '样式一',
        },
        configOptions: [
          {
            icon: '#icon-alignleft',
            name: 'shop_style_1',
            tooltip: '样式一',
          },
          {
            icon: '#icon-aligncenter',
            name: 'shop_style_2',
            tooltip: '样式二',
          },
          {
            icon: '#icon-aligncenter',
            name: 'shop_style_3',
            tooltip: '样式三',
          },
          {
            icon: '#icon-aligncenter',
            name: 'shop_style_4',
            tooltip: '样式四',
          },
          {
            icon: '#icon-aligncenter',
            name: 'shop_style_5',
            tooltip: '样式五',
          }
        ]
      },
    ],
  },
  {
    text: '头图',
    name: 'bannerImg',
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
    config: [
      {
        label: "图片",
        type: "image",
        format: "background",
        value: 'https://img01.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png'
      },
    ],
  },
  {
    text: '配送方式',
    name: 'deliverType',
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
    config: [],
  },
  {
    text: '商品分类入口',
    name: 'goodCategories',
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
    config: [],
  },
  {
    text: '储值',
    name: 'discountPlan',
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
    config: [],
  },
  {
    text: '须知入口',
    name: 'notice',
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
    config: [],
  },
  {
    text: '品牌故事',
    name: 'story',
    icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
    config: [],
  },
  {
    text: '联系方式',
    name: 'concat',
    icon: '.././../../../icons/concat.png',
    config: [],
  },
]