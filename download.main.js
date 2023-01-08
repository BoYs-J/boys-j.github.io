function Download_main() {
    const data_json = [
        {
            "name": "Ubuntu",
            "title": "科大的Ubuntu更新源",
            "info": "-",
            "url": "/ubuntu/yuan/sources.list",
        }, {
            "name": "CVAT Image",
            "title": "CVAT提示图标",
            "info": "100*232",
            "url": "/cvat/images/cvat_outside100_232.png",
        }, {
            "name": "CVAT Image",
            "title": "CVAT提示图标",
            "info": "129*300",
            "url": "/cvat/images/cvat_outside129_300.png",
        }, {
            "name": "CVAT Image",
            "title": "CVAT提示图标",
            "info": "200*469",
            "url": "/cvat/images/cvat_outside200_469.png",
        }, {
            "name": "鸡你太美.mp3",
            "title": "鸡你太美.mp3",
            "info": "-",
            "url": "/audio/cxk_jntm.mp3",
        }, {
            "name": "哎哟你干嘛.mp3",
            "title": "哎哟你干嘛.mp3",
            "info": "-",
            "url": "/audio/cxk_ngmay.mp3",
        }, {
            "name": "蔡徐坤语音js",
            "title": "蔡徐坤语音js",
            "info": "-",
            "url": "/audio/cxk_data.js",
        }, {
            "name": "Key-Fx980.jpg",
            "title": "Key-Fx980.jpg",
            "info": "-",
            "url": "/keyboard/Key-Fx980.jpg",
        }, {
            "name": "Fx980封面.jpg",
            "title": "Fx980封面.jpg",
            "info": "-",
            "url": "/keyboard/封面.jpg",
        },{
            "name": "lot-fx980.png",
            "title": "lot-fx980.png",
            "info": "-",
            "url": "/keyboard/lot-fx980.png",
        }, {
            "name": "油猴脚本",
            "title": "油猴脚本",
            "info": "-",
            "downname": "Tampermonkey_4.18.1.crx",
            "url": "/plug/Tampermonkey_4.18.1.crx",
        }, {
            "name": "Highlight_This",
            "title": "Highlight_This",
            "info": "-",
            "downname": "Highlight_This_v5.3.1.crx",
            "url": "/plug/Highlight_This_v5.3.1.crx",
        }, {
            "name": "SSR",
            "title": "安卓apk",
            "info": `<a href="https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7">免费账号</a> <a href="https://tr3.freeair888.club/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7/">备用</a>`,
            "downname": "shadowsocksr-ssr.apk",
            "url": "/download/shadowsocksr-ssr.apk",
        }, {
            "name": "SSR",
            "title": "Win应用",
            "info": `<a href="https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7">免费账号</a> <a href="https://tr3.freeair888.club/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7/">备用</a>`,
            "downname": "ShadowsocksR-4.7.0-win.7z",
            "url": "/download/ShadowsocksR-4.7.0-win.7z",
        }, {
            "name": "v2ray",
            "title": "安卓apk",
            "info": `<a href="https://github.com/Alvin9999/new-pac/wiki/v2ray%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7">免费账号</a> <a href="https://tr3.freeair888.club/v2ray%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7/">备用</a>`,
            "url": "https://github.com/2dust/v2rayNG/releases/",
        }, {
            "name": "v2ray",
            "title": "Win应用",
            "info": `<a href="https://github.com/Alvin9999/new-pac/wiki/v2ray%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7">免费账号</a> <a href="https://tr3.freeair888.club/v2ray%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7/">备用</a>`,
            "url": "https://github.com/2dust/v2rayN/releases/tag/5.39/",
        }
    ]
    let div = document.querySelector("#download_pre")
    for (let i = 0; i < data_json.length; i++) {
        let href = data_json[i].url;
        let name = data_json[i].name;
        let title = data_json[i].title;
        let info = data_json[i].info;
        let downname = data_json[i].downname;
        if (!!data_json[i].cid) {
            href = `https://${data_json[i].cid}.ipfs.dweb.link/${downname}`
        }
        if (!!downname) {
            downname = `download="${downname}"`
        } else {
            downname = ""
        }
        div.innerHTML += `<div><span><a href="${href}" ${downname}>${name}</a></span><span>${title}</span><span>${info}</span></div>`
    }
}
Download_main()
