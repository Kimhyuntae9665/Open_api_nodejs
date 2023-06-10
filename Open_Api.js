
var request = require('request');

var url = 'http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=bSzFPEUSrutyp2hUNcap3hiuUVNfADtwGmK3C68jTWWT5E9YrgVJK2yldsBHCy1DSZX%2BAA0vas6W1FZLImBtHA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /* */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('year') + '=' + encodeURIComponent('2020'); /* */
queryParams += '&' + encodeURIComponent('itemCode') + '=' + encodeURIComponent('PM10'); /* */

request({
    url: url + queryParams,
    method: 'GET'
},  (error, response, body)=> {
    if (error) {
        console.error('Error:', error);
        return;
      }

      const data = JSON.parse(body);
      const items = data.response.body.items;
    
      // Iterate over items and check districtName
      let index = 1;
      for (const item of items) {
        const districtName = item.districtName;
        const issueVal = item.issueVal;
    
        // Check if districtName is "경기" and print issueVal with index
        if (districtName === '경기') {
          console.log(`${index}: ${issueVal}`);
          index++;
        }
      }
});