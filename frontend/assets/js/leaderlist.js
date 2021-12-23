const groupList = [];

var randomMembers = [],
  i = members.length,
  j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i + 1));
  randomMembers.push(members[j]);
  members.splice(j, 1);
}

var managerList = "";
for (let i = 0; i < managers.length; i++) {
  if (i < 8) {
    managerList += `<li><span class="list-num">${i + 1}.</span><span>${managers[i]}</span></li>`;
  }
  else if (i > 8 && i < 15) {
    managerList += `<li><span class="list-num">${i + 1}.</span><span class="jp-txt">シアトル ${managers[i]}</span></li>`;
  } else if (i >= 15) {
    managerList += `<li><span class="list-num">${i + 1}.</span><span class="jp-txt">シアトル </span><span class="en-txt"> ${managers[i]} </span></li>`;
  }
}
$(".group-container")
  .append(`<div class="group-list manager-list"> <div class="gp-head">Manager Group</div> 
      <ul class="gp-content"> ${managerList}
      </ul> <span class="meet-link">${meetlinks[0]}</span> </div>`);

groupList.push({
  leader: managers[0],
  members: [],
  meet_link: meetlinks[0],
});
for (let i = 1; i < managers.length; i++) {
  if (i > 8) {
    groupList[0].members.push("シアトル " + managers[i]);
  } else {
    groupList[0].members.push(managers[i]);
  }
}

var index = 0;
for (var i = 0; i < leaders.length; i++) {
  var memberList = "";
  var member = [];
  if (i < total_group_for_tenmembers) {
    for (let j = 0; j < max_member; j++) {
      member.push(randomMembers[index]);
      memberList += `<li><span>${j + 1}.</span><span>${
        randomMembers[index]
      }</span></li>`;
      index += 1;
    }
    groupList.push({
      leader: leaders[i],
      members: member,
      meet_link: meetlinks[i+1],
    });
  } else {
    for (let j = 0; j < min_member; j++) {
      if (randomMembers[index] == null) {
        break;
      }
      member.push(randomMembers[index]);
      memberList += `<li><span>${j + 1}.</span><span>${
        randomMembers[index]
      }</span></li>`;
      index += 1;
    }
    groupList.push({
      leader: leaders[i],
      members: member,
      meet_link: meetlinks[i+1],
    });
  }
  $(".group-container")
    .append(`<div class="group-list"> <div class="gp-head">${leaders[i]}</div> 
      <ul class="gp-content"> ${memberList}
      </ul> <span class="meet-link">${meetlinks[i+1]}</span> </div>`);
}

$.ajax({
  type: "POST",
  url: API_URL + "/save-nomikai",
  data: {
    "username": localStorage.getItem("username"),
    "groupList": JSON.stringify(groupList)
  },
  success: function(data){
    console.log(data);
  }
})
