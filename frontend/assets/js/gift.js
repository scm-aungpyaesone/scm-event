const giftList = [];

var arr1 = gifts.slice(),
  arr2 = gifts.slice();

arr2.sort(function () {
  return 0.5 - Math.random();
});

// SPECIAL PRIZE
var specialGiver = arr2.filter((h) => h.is_special);

for (var i = 0; i < specialGiver.length; i++) {
  arr2.splice(
    arr2.findIndex((a) => a.staff_id === specialGiver[i].staff_id),
    1
  );
}

var specialWinner = [],
  index = 0,
  gender = 0;
var spWinnerList = "";
var specialGift = [];

for (let i = 0; i < 3; i++) {
  if (specialWinner.length == 0) {
    gender = Math.floor(Math.random() * 2);
  } else if (specialWinner.length == 1) {
    gender = 1;
  } else {
    gender = 0
  }

  var winner = arr1.filter((k) => k.gender == gender && !k.is_excluded);
  index = Math.floor(Math.random() * winner.length);
  specialWinner.push(winner[index]);
  arr1.splice(
    arr1.findIndex((a) => a.staff_id === winner[index].staff_id),
    1
  );

  if (specialWinner.length > 1) {
    specialGift = specialGiver.find((j) => j.is_for == gender);
  } else {
    specialGift = specialGiver.find((j) => j.is_for === "mix");
  }

  spWinnerList += `<div class="listo special"> <div class="list-box"> <div class="num-detail li-inner">
  ${
    i + 1
  } </div> <div class="receiver-detail li-inner"> <img class="receiver-img" src="assets/images/members/${
    specialWinner[i].profile_img
  }"> <div class="receiver-name">
  ${
    specialWinner[i].name
  } </div></div> <div class="gift-detail li-inner"> <div class="gift-name">
  ${
    specialGift.giftName
  } </div> <img class="gift-img" src="assets/images/gifts/${
    specialWinner[i].gift_img
  }"> </div> </div> </div>`;

  giftList.push({
    name: specialWinner[i].name,
    gift: specialGift.giftName,
    profile_img: specialWinner[i].profile_img,
    gift_img: specialGift.gift_img,
  });
}
$(".list-container").append(spWinnerList);

// GIFT EXCHANGE
var listnum = 3;
while (arr1.length) {
  var receiver = arr1.map((a) => a).shift();
  if (arr2.map((a) => a.name)[0] == receiver.name) {
    gift = arr2.map((g) => g).shift();
    arr2.shift();
  } else {
    gift = arr2.map((g) => g).pop();
    arr2.pop();
  }

  arr1.shift();

  listnum++;

  $(".list-container").append(
    `<div class="listo"> <div class="list-box"> <div class="num-detail li-inner"> ` +
      listnum +
      `</div> <div class="receiver-detail li-inner"> <img class="receiver-img" src="assets/images/members/${receiver.profile_img}"> <div class="receiver-name">` +
      receiver.name +
      `</div></div> <div class="gift-detail li-inner"> <div class="gift-name">` +
      gift.staff_id +
      `</div> <img class="gift-img" src="assets/images/gifts/${gift.gift_img}"> </div> </div> </div>`
  );

  giftList.push({
    name: receiver.name,
    gift: gift.staff_id,
    profile_img: receiver.profile_img,
    gift_img: gift.gift_img,
  });
}

$.ajax({
  type: "POST",
  url: API_URL + "/save-gifts",
  data: {
    "username": localStorage.getItem("username"),
    "giftList": JSON.stringify(giftList)
  },
  success: function(data){
    console.log(data);
  }
})
