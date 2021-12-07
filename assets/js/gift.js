var listnum = 0;
var genrName = 0;

  var arr1 = gifts.slice(),
      arr2 = gifts.slice();

  arr2.sort(function() { return 0.5 - Math.random();});

  console.log("Length",arr1.length);

while (arr1.length) {
  var receiver = arr1.map(a => a).shift();
  if (arr2.map(a => a.name)[0] == receiver.name) {
    gift = arr2.map(g => g).shift();
    arr2.shift();
  } else {
    gift = arr2.map(g => g).pop();
    arr2.pop();
  }

  arr1.shift();

  console.log(receiver.name + " gets " + gift.gift);

  listnum++;

  $(".list-container").append(`<div class="list-box"> <div class="num-detail li-inner"> ` + 
  listnum +`</div> <div class="receiver-detail li-inner"> <img class="receiver-img" src="assets/images/members/${receiver.profile_img}"> <div class="receiver-name">` + 
  receiver.name  + `</div></div> <div class="gift-detail li-inner"> <div class="gift-name">` + 
  gift.gift + `</div> <img class="gift-img" src="assets/images/gifts/${gift.gift_img}"> </div> </div>`)
}
