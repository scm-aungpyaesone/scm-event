const leaders = [
  "Khine Shwe Sin Aung",
  "Zin Mar Oo",
  "Saw Bala",
  "May Thin Lwin",
  "Aye Su Paing",
  "Kaung Soe San",
  "Thet Min Htun",
  "Aung Pyae Sone",
  "Kyant Khine",
  "Hein Htet Zaw",
  "Ei Mon San",
  "Htay Hlaing",
  "Pwint Phyu Oo",
  "Khin Marlar Myo",
  "Jimmy"
];
const members = [
  "Thura Naing",
  "Hnin Wai Wai Aung",
  "Aung Linn Naing",
  "Thida Nwe",
  "Yamin Thaw",
  "Myint Marlar Wai",
  "Khin Pyae Sone",
  "Tun Myint Thein",
  "Thandar Oo",
  "Tharaphy Win Aung",
  "May Thae Oo",
  "Khine Khine Oo",
  "Khin Nandar Thein",
  "Thandar Aung",
  "Win Lhan Phyo",
  "Nwe Nwe Win Than",
  "Yin Yin Aye",
  "Khaing Min Tun",
  "Thu Zar Htwe",
  "May Zin Oo",
  "Htet Thinzar Mon",
  "Sein Moh Moh Zin",
  "Wai Wai Khaing-1",
  "Htet Aung",
  "Zar Zar Win",
  "Tin Zar Win",
  "Htet Htet Khine",
  "Yamin Aye",
  "Win Win Htay",
  "Soe Htet Aung",
  "Thein Naing Oo",
  "May Soe Thinzar Moe",
  "Zin Lin Ko",
  "Kaung Myat Thu",
  "Kaung Eain San Htay",
  "Nay Oo Thant",
  "Theint Thiri Swe",
  "Yamin Thu",
  "Lwin Mar Win",
  "Aung Kyaw Oo",
  "Yan Kyaw Min",
  "Nang Khat Mang",
  "Akary Thein",
  "May Thu Thu Oo",
  "Myat Thiha",
  "Nilar Win",
  "Kay Thi Nwe",
  "Thin Thin Moe",
  "Shoon Htet Oo",
  "Nant Thae Zarli Win",
  "Nyan Myo Htet",
  "Lin Htet Paing",
  "Myat Mon",
  "Si Thu Phyo",
  "Chit Su Su Hlaing",
  "Zaw Khant Maung",
  "Hsu Watty Nwe",
  "Wai Lin Phyo",
  "Min Htet Aung",
  "Htet Shine",
  "Si Thu Bo",
  "Aye Thandar Moe",
  "Myo Thandar Aung",
  "Naing Aung Lwin",
  "Htun Htun Myat",
  "Khaing Su Hlaing",
  "May Myat Mon",
  "Wutyi Theint",
  "Tin Naing Htun",
  "Tin Myat Win",
  "Hsaung Htet Htet Kyaw",
  "Khine Nyein Than",
  "Ei Mon Htun",
  "Min Khant Thu",
  "Mya Thet Chal",
  "Thiri Aung",
  "Mar Khaing Oo",
  "Pann Ei Khaing",
  "Phyo Htet Aung",
  "Aye Mya Mon",
  "Zon Myat Noe",
  "Yi Mon Oo",
  "Htet Htet Oo Wai",
  "Wai Wai Khaing-2",
  "Min Aung Paing",
  "Kaung Myat Thway",
  "May Thu Kyaw",
  "Yoon Mie Mie Aung",
  "Lily Maw",
  "Nandar Wutyi",
  "Phue Pwint Phway",
  "Yu Nandar Moe",
  "Swe Swe Aung",
  "Wah Wah Wynn Shwe Hlaing",
  "Theint Hayman Hnin",
  "Hnin Wai Yan",
  "Soe Minn Thant",
  "Khin Hmone Chal",
  "Su Myat Noe Oo",
  "Zun Pwint Phyu",
  "Htet Htoo Aung",
  "Su Lae Mon",
  "Ei Ei Tone",
  "Naw Khaing Khin Htoo Mon",
  "Chaw Chit Su Thwe",
  "Than Htike Aung",
  "Min Khant Kyaw",
  "Eaint Hmue Thapye",
  "Hsu Mon Lynn",
  "Aye Myat Thuzar Han",
  "Pyae Pyae Han",
  "Shoon Laat Pyae",
  "Nay Lin",
  "Kyi Myat Noe Soe",
  "Htet Tun Lu",
  "Khine Zin Thaw",
  "Zin Nwe Oo",
  "Htet Htet Oo",
  "May Myat Noe Oo",
  "Kay Zin Aung",
  "Aung Htet Lin",
  "Zar Chi Pwint Phyu",
  "Lwin Phyo Aung",
  "Khin Sandar Tun",
  "Nanda Hein",
  "Hnin Wai Lwin",
  "Sandar Moe",
  "Aye Myat Thu",
  "Phyo Su Paing",
  "Htet Htet Aung",
  "Kaung Khant Naing",
  "Nay Lin Htoo",
  "Zaw Win Tin",
  "May Thin Khaing",
  "Ye Zaw Aung",
  "Win Ngwe Phyo",
  "Khwar Nyo Thin",
  "Khin Aye Aye Nyein",
  "May Thinzar",
  "Aye Myat Myat Khine"
]

const meetlinks = [
  'https://meet.google.com/aaa-aaa-bbb',
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb'
];

var randomMembers = [],
    i = members.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    randomMembers.push(members[j]);
    members.splice(j,1);
}

var managers = [
  "Kyaw Soe Naing",
  "Thin Muyar Win",
  "Kyaw Htin Soe",
  "Yan Myo Aung",
  "Su Yee Win",
  "Shwe Yi Pyae Soan",
  "Myat Mon Thein",
  "Zin May Thu"
]
var managerList = "";
for (let i = 0; i < managers.length; i++) {
  managerList += `<li><span>${i+1}.</span><span>${managers[i]}</span></li>`;
}
$(".group-container").append(`<div class="group-list"> <div class="gp-head">Manager Group</div> 
      <ul class="gp-content"> ${managerList}
      </ul> <a href="" class="meet-link">https://meet.google.com/aaa-aaa-bbb</a> </div>`)

var index = 0;
for (var i = 0; i < leaders.length; i++) {
  var memberList = "";
  if (i < 5) {
    for (let j = 0; j < 10; j++) {
      memberList += `<li><span>${j+1}.</span><span>${randomMembers[index]}</span></li>`;
      index += 1;
    }
  } else {
    for (let j = 0; j < 9; j++) {
      memberList += `<li><span>${j+1}.</span><span>${randomMembers[index]}</span></li>`;
      index += 1;
    }
  }
  $(".group-container").append(`<div class="group-list"> <div class="gp-head">${leaders[i]}</div> 
      <ul class="gp-content"> ${memberList}
      </ul> <a href="" class="meet-link">${meetlinks[i]}</a> </div>`)
}