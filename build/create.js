const fs = require('fs');
const path = require('path');
const os = require('os');
var imports = '';
var routers = [];
let fn = (dir, name) => {
  fs.readFile('./build/t.vue', (err, data) => {
    let s = data.toString().replace(/\$1/g, name);
    var file = path.join(dir, name + '.vue');
    if(fs.existsSync(file)){
      return;
    }
    fs.writeFile(file, s, () => console.log(name + ' created'))
    // console.log(file);
    imports += `import ${name} from '${file.replace(/\\/g, '/').replace('src/', '../')}' ${os.EOL}`;
  })
};

var arr = {
  'index': ['index'],
  'company': ['company_desc', 'company_dev', 'company_culture'],
  'news': ['news_list', 'news_detail'],
  'services': ['services'],
  'case': ['case_list', 'case_detail'],
  'team': ['team'],
  'contact': ['contact']
}
for (let i in arr) {
  if (arr[i].length > 1) {
    var o = {
      name: i,
      path: '/' + i,
      children: arr[i].map(v => ({
        name: v,
        path: v,
        component: '%' + v +'%'
      }))
    }
  } else {
    var o = {
      name: i,
      path: '/' + i,
      component:'%' + i  + '%'
    }
  }

  routers.push(o);

  let folder = path.join('./src/components', i);
  fs.mkdir(folder, () => {
    arr[i].forEach(v => {
      fn(folder, v)
    });
  })
}
setTimeout(() => {
  fs.readFile('./build/r.js', (err, data) => {
    let code = data.toString();
    code = code.replace('$1',imports).replace('$2',JSON.stringify(routers, null, 2));
    code=code.replace(/"%(.*)%"/g,function(a,b){
      return  b;
    })
    fs.writeFile('./src/router/index.js',code,()=>{})
  })
}, 2000);


