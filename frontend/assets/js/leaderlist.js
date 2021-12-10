var randomMembers = [],
  i = members.length,
  j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i + 1));
  randomMembers.push(members[j]);
  members.splice(j, 1);
}

var managers = [
  "Kyaw Soe Naing",
  "Thin Muyar Win",
  "Kyaw Htin Soe",
  "Yan Myo Aung",
  "Su Yee Win",
  "Shwe Yi Pyae Soan",
  "Myat Mon Thein",
  "Zin May Thu",
];
var managerList = "";
for (let i = 0; i < managers.length; i++) {
  managerList += `<li><span>${i + 1}.</span><span>${managers[i]}</span></li>`;
}
$(".group-container")
  .append(`<div class="group-list"> <div class="gp-head">Manager Group</div> 
      <ul class="gp-content"> ${managerList}
      </ul> <span class="meet-link">https://meet.google.com/aaa-aaa-bbb</span> </div>`);

var index = 0;
for (var i = 0; i < leaders.length; i++) {
  var memberList = "";
  var member = [];
  if (i < 6) {
    for (let j = 0; j < 10; j++) {
      member.push(randomMembers[index]);
      memberList += `<li><span>${j + 1}.</span><span>${
        randomMembers[index]
      }</span></li>`;
      index += 1;
    }
    groupList.push({
      leader: leaders[i],
      members: member,
      meet_link: meetlinks[i],
    });
  } else {
    for (let j = 0; j < 9; j++) {
      member.push(randomMembers[index]);
      memberList += `<li><span>${j + 1}.</span><span>${
        randomMembers[index]
      }</span></li>`;
      index += 1;
    }
    groupList.push({
      leader: leaders[i],
      members: member,
      meet_link: meetlinks[i],
    });
  }
  $(".group-container")
    .append(`<div class="group-list"> <div class="gp-head">${leaders[i]}</div> 
      <ul class="gp-content"> ${memberList}
      </ul> <span class="meet-link">${meetlinks[i]}</span> </div>`);
}

$.ajax({
  type: "POST",
  url: "http://localhost:8000/api/save-nomikai",
  data: {
    "username": localStorage.getItem("username"),
    "groupList": JSON.stringify(groupList)
  },
  success: function(data){
    console.log(data);
  }
})
