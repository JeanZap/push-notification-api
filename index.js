var FCM = require("fcm-node");
var serverKey =
  "AAAAAeXvp_0:APA91bEmh4bFI5ql5ZSOAggSDqpLY1x4G-pw4bU3QszNLhE4G9MhWDOx4wwOMuzP7JmeDuBUqII1ipVlbYk7QFKcYg7e5shmU8-bAuM69YOq6tGF1zrfUcxHiBKTE2EXf2pBUKwyUgQu";
var fcm = new FCM(serverKey);

var message = {
  to: "ex2MeacFQ92Woy93C-LbB4:APA91bFhPfsukZy9lZ1hfv08FRmZnTpj-ZZTHX_pj7KOTCa3FrmBw0n6ueVK6Wcy6Sk72AK0UWgzgpbtRHzxLa10gY7jPImrYSbU9ge_fhGIEeVSDGusQskv66u2_5MGQ9SDgFyDpaCn",
  notification: {
    title: "NotifcatioTestAPP",
    body: '{"Message from node js app"}',
  },

  data: {
    //you can send only notification or only data(or include both)
    title: "ok cdfsdsdfsd",
    body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
  },
};

fcm.send(message, function (err, response) {
  if (err) {
    console.log("Something has gone wrong!" + err);
    console.log("Respponse:! " + response);
  } else {
    // showToast("Successfully sent with response");
    console.log("Successfully sent with response: ", response);
  }
});
