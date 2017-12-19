import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/lists/dashboard',
    home: true,
  }, {
        title: 'OU',
        icon: 'nb-tables',
        children: [
        {
            title: '公司',
            link: '/lists/ou/company',

        },
        {
            title: '组织',
            link: '/lists/ou/organization',

        },
        ],
    },

    {
        title: '设备管理',
        icon: 'nb-tables',
        children: [
            {
                title: '设备分类信息',
                link: '/lists/mi/MeterCategoryInfo',
            },
            {
                title: '设备信息',
                link: '/lists/mi/MeterInfo',
            },
            {
                title: '设备状态',
                link: '/lists/mi/MeterStatus',
            },
            {
                title: '多路开关信息',
                link: '/lists/mi/multiwaySwitchInfo',
            },
            {
                title: '多路开关状态',
                link: '/lists/mi/MultiwaySwitch',
            },
        ],

    },
    {
        title: '报警服务',
        icon: 'nb-tables',
        children: [
            {
                title: '报警服务规则',
                link: '/lists/arc/AlarmRule',
            },
            {
                title: '设备规则',
                link: '/lists/arc/MeterRule',
            },
            {
                title: '规则属性',
                link: '/lists/arc/RuleAttributes',
            },

        ],
    },
    {
        title: 'Nfs',
        icon: 'nb-tables',
        children: [
            {
                title: 'MessageTemplate',
                link: '/lists/nfs/message-template',
            },
        ],
    },
    {
        title: '资源管理',
        icon: 'nb-tables',
        children: [
            {
                title: '资源管理',
                link: '/lists/resource/Resource',
            },
        ],
    },


    {
        title: '字典工程',
        icon: 'nb-tables',
        children: [
            {
                title: 'dictionary',
                link: '/lists/dict/dictionary',
            },

            {
                title: 'dictionaryClassify',
                link: '/lists/dict/DictionaryClassify',
            },
        ],
    },
    {
        title: '信息点采集',
        icon: 'nb-tables',
        children: [
            {
                title: 'comPoint',
                link: '/lists/cpi/comPoint',
            },

            {
                title: 'comPointStatus',
                link: '/lists/cpi/ComPointStatus',
            },
        ],
    },

    {
        title: '地区地点',
        icon: 'nb-tables',
        children: [
            {
                title: 'address',
                link: '/lists/loc/address',
            },

            {
                title: 'area',
                link: '/lists/loc/area',
            },
        ],
    },
    {
        title: 'Charts',
        icon: 'nb-bar-chart',
        children: [
            {
                title: 'Echarts',
                link: '/lists/charts/echarts',
            },
            {
                title: 'Charts.js',
                link: '/lists/charts/chartjs',
            },
            {
                title: 'D3',
                link: '/lists/charts/d3',
            },
        ],
    },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
