const Eos = require('eosjs');

const config = {
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    // mainNet bp endpoint
    //httpEndpoint: 'https://api.eosnewyork.io',
    httpEndpoint: 'https://eos.greymass.com',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',

    
    // kylin bp endpoint
    //httpEndpoint: 'https://api-kylin.eosasia.one',
    //chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    //keyProvider : '5Hr6ZrCxxZa9pZJC2boMjWBFAReMWPuRJcsi5ju62fahkw34S5J'


    httpEndpoint: 'http://127.0.0.1:8888',
    chainId: 'df0d1aacf71a6d61b11eee7b0e52cc54302b18f76346c7287f8c252a3de172f2',

};

const eos = Eos(config);

function process(key,value,level) {
    var space = ' '.repeat(Number(level)*4);
    if(value !== null && typeof(value) !=="object") 
        console.log(space + key + " : " + value);
    else
        console.log(space + key + " : ");
}

function traverse(json_object,level) {
    for (var i in json_object) {
        process(i,json_object[i],level);  
        if (json_object[i] !== null && typeof(json_object[i])=="object") {
            //going one step down in the object tree!!
            traverse(json_object[i],level+1);
        }
    }
}
//block_num_or_id =1;

//eos.getBlock(block_num_or_id).then(console.log);

//eos.getInfo();


// eos.transfer('eos12eos12yt', 'eoseos12345y', '0.1 EOS', 'send!', (error, result) => {
//         if(error) {
//             console.error('Failed...');
//         } else {
//             console.log("Success!");
//         }
//     });
function printjson(error,result) {
    // var str = JSON.stringify(result);
    // console.log(str);
    console.log(result);
}

//eos.getAccount('coinisland11', (error, result) => traverse(result,0));

//eos.getAccount('coinisland12', (error, result) => printjson(error, result));



//eos.transfer('coinisland11', 'coinisland12', '1.0000 EOS', 
//'test', 
//(error, result) => printjson(error, result));

//eos.getActions('coinisland11',28603410,-1000).then(console.log);

//eos.getActions('eos12eos12yt',1,20).then(console.log);
//eos.getActions('eoseos12345y',1,20).then(console.log);
//eos.getBlock(34605913).then(console.log);



//////////////////
// https://eospark.com/api/account/eos12eos12yt/actions?action_type=token&show_trx_small=0&show_trx_in=1&show_trx_out=1&page=1&size=50

//eos.getAccount('coinisland11', (error, result) => printjson(error, result));

// eos.getCurrencyBalance('eosio.token', 'coinisland11', 'EOS')
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

var request = require("request");

// var options = { method: 'POST', url: 'https://api-kylin.eosasia.one/v1/chain/get_info' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });






var options = { method: 'POST',
//   url: 'https://api-kylin.eoslaomao.com/v1/history/get_actions',
//   body: { pos: 1, offset: 20, account_name: 'coinisland11' },

//   url: 'https://eos.greymass.com/v1/history/get_actions',
//   body: { pos: 1, offset: 1000, account_name: 'eos12eos12yt' },

    url: 'https://127.0.0.1:8888/v1/history/get_actions',
    body: { pos: 1, offset: 1000, account_name: 'eos12eos12yt' },

    json: true };

request(options, function (error, response, body) {
    for(action in body.actions)
        console.log(action,":",body.actions[action].action_trace.act.data.memo);
         
});

