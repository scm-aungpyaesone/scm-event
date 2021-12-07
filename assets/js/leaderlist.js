const leaders = []; // 15
const meetlinks = [
  'https://meet.google.com/aaa-aaa-bbb', 
  'https://meet.google.com/aaa-aaa-bbb']; // 15
const members = []; // 140

for (var i = 0; i < leaders.length; i++) {
  $(".group-container").append(`<div class="group-list"> <div class="gp-head">Leader_01</div> <ul class="gp-content"> <li><span>1.</span><span>Naw Khaing Khin Htoo Mon</span></li> </ul> <a href="" class="meet-link">https://meet.google.com/aaa-aaa-bbb</a> </div>`)
}