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
  managerList += `<li><span>${i + 1}.</span><span>${managers[i]}</span></li>`;
}
$(".group-container")
  .append(`<div class="group-list"> <div class="gp-head">Manager Group</div> 
      <ul class="gp-content"> ${managerList}
      </ul> <span class="meet-link">${meetlinks[0]}</span> </div>`);

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
      meet_link: meetlinks[i],
    });
  } else {
    for (let j = 0; j < min_member; j++) {
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
