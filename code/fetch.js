
const res = await fetch("http://10.20.16.160:30000/gateway/orc-serv/api/private/v1/jobs/search?page=0&size=10&sort=modifiedAt%2Cdesc&query=robotProcessId%3A1376815406891776%20AND%20fromPlatform%3A5%20AND%20planningTypes%3A%5B0%5D&organizationIds=%5B1%5D&robotProcessId=1376815406891776&fromPlatform=5&planningTypes=0", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN",
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIzIiwic3ViIjoiYWRtaW4iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjYxOTE2MjAwfQ.iO2-Cy2r3TPdsf8YC472N-1Ysn5tw_f2vd9JLR32wOqg_4H9lBO7MhYFxFD-k7Qkj9LONqbCpY11GQlqi213ZA",
    "x-client-type": "webform",
    "x-user-security-id": "-1"
  },
  "referrer": "http://10.20.16.160:30000/wsorch/processTask/processDetail/5368fabb-2b93-48d5-bc43-ec90a9da3373/1377003431461120/detail",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

const json = await res.json();
console.log(json);