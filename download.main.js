function Download_main() {
    function main(data_json) {//gte方法
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
    function request(how,url) {//gte方法
        try {
            let re_data = new XMLHttpRequest()
            re_data.open(how,url,true)
            re_data.onreadystatechange = function () {
                if(re_data.readyState == 4 && re_data.status == 200){
                    main(JSON.parse(re_data.responseText))
                }
            }
            re_data.send(null);
        }catch(err) {
            return null;
        }
    }
    request("get","data.json")
}
Download_main()
