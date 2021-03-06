

var vue = new Vue({
    el: '#home',
    data: {
        isInvalidEmail: false,
        isInvalidPassword: false,
        email: '',
        password: '',
        isLogin: false,
        carousels: [
            { text: '看成败', color: 'primary' },
            { text: '人生豪迈', color: 'info' },
            { text: '只不过是', color: 'success' },
            { text: '从头再来', color: 'warning' },
            { text: '……', color: 'danger' }
        ],
        tiles1: [
            {
                title: '临',
                subtitle: "甲"
            },
            {
                title: '兵',
                subtitle: "乙"
            },
            {
                title: '斗',
                subtitle: "丙"
            },
            {
                title: '者',
                subtitle: "丁"
            },
            {
                title: '皆',
                subtitle: "戊"
            },
            {
                title: '阵',
                subtitle: "己"
            }
        ],
        tiles2: [
            {
                title: '太极',
                subtitle: ""
            },
            {
                title: '两仪',
                subtitle: ""
            },
            {
                title: '四象',
                subtitle: ""
            },
            {
                title: '八卦',
                subtitle: ""
            },
            {
                title: '吉凶',
                subtitle: ""
            },
            {
                title: '大业',
                subtitle: ""
            }
        ],
        activeTab: 0,
        tabs: [
            {
                label: '独立游戏',
                icon: 'google-photos'
            },
            {
                label: '游戏设计',
                icon: 'library-music'
            },
            {
                label: '职场技能',
                icon: 'video'
            }
        ],
        videoPage: 0,
        tab1: [
            {
                title: '母猪的产后护理',
                image: 'image/placeholder-1280x960.png',
                author: '大卫路易斯'
            },
            {
                title: '仙人掌嫁接技术',
                image: 'image/placeholder-1280x960.png',
                author: '卢比索亚森'
            },
            {
                title: '喵星人的自我修养',
                image: 'image/placeholder-1280x960.png',
                author: '杰尼狄娜'
            },
            {
                title: '不是所有汪都是乖宝',
                image: 'image/placeholder-1280x960.png',
                author: '徐甴莱'
            }
        ],
        tab2: [
            {
                title: '艾洛诗集',
                image: 'image/placeholder-1280x960.png',
                author: '这顿我请'
            },
            {
                title: '我为什么这么开',
                image: 'image/placeholder-1280x960.png',
                author: '瑾雅'
            },
            {
                title: '赵大脑袋战记',
                image: 'image/placeholder-1280x960.png',
                author: '赵大'
            },
            {
                title: '点亮你的猴生',
                image: 'image/placeholder-1280x960.png',
                author: '一不拉稀摸围棋'
            }
        ],
        footersupport: [
            '平台保障',
            '课程录制',
            '支付问题',
            '意见反馈',
            '侵权投诉'
        ],
        footerhelp: [
            '平台流程',
            '老师入驻',
            '老师帮助',
            '学生帮助',
            '机构帮助',
        ],
        footerabout: [
            '了解我们',
            '课程合作',
            '校园招聘',
            '社会招聘',
            '网站条款',
        ],
        footerlinks: [

        ]
    },
    methods: {
        jumpTo(href) {
            console.log("trigger ...    ")
            // 防止反复添加
            var a = document.getElementById('_jumpTo')
            if (a) {
                document.body.removeChild(a)
                a.setAttribute('href', href)
            } else {
                a = document.createElement('a')
                a.setAttribute('href', href)
                a.setAttribute('target', '_blank')
                a.setAttribute('id', '_jumpTo')
                document.body.appendChild(a)
            }

            a.click()
        },
        verifyEmail() {
            this.email = this.email.trim()
            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)) {
                this.isInvalidEmail = true
                return
            }
            this.isInvalidEmail = false
        },
        verifyPassword() {
            this.password = this.password.trim()
            if (! /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password)) {
                this.isInvalidPassword = true
                return
            }
            this.isInvalidPassword = false
        },

        login() {
            if (this.isInvalidEmail || this.isInvalidPassword) {
                return
            }

            axios.post('/login', JSON.stringify({
                email: this.email,
                pwd: sha256(this.password),
            })).then(function (response) {
                console.log("登录、注册成功！", response)

                vue.isLogin = true
                var data = response.data
                console.log("isoTime:", datetime.fromisoformat(data.login_at))
            }).catch(function (error) {
            })
        }
    }
})