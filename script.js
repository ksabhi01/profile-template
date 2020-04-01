//foR skills section

var skillArr = new Array();
var area=['Education','Consulting','Programming','Marketing'];
var areaimage=['area1.jpg','area2.jpg','area3.jpeg','area4.png'];
 function skillFunction() {
              var skill = document.getElementById('skills').value;
              if(skillArr.find(mySkillCheck) != skill){
                           skillArr.push(skill);                       
                           var print = skillArr.map(printSkill);
                           document.getElementById('cross-1').innerHTML = print.join(' ');
              }
                                       
             function mySkillCheck(item) {
                           return item == skill;
              }
}

 function printSkill(item,index) {
            return "<span class='cross-1' >"+item+"<i class='fa fa-close' id='"+index+ "' onclick='removeSkill("+index+")' ></i></span>";
             
}

function removeSkill(rid){
              skillArr.splice(rid,1);
              var print = skillArr.map(printSkill);
              document.getElementById('cross-1').innerHTML = print.join(' ');
}

//area of work


function areaFunction(){

    var areaValue = document.getElementById('area').value;

    var areaIndex = area.indexOf(areaValue);

    if(areaValue != 'select')

                 document.getElementById('cross-2').innerHTML = "<img src='images/"+areaimage[areaIndex]+"' alt='"+areaValue+"'/>";

    else     

                 document.getElementById('cross-2').innerHTML = " ";

                

}

function colorChange(){

    var color = document.getElementById('all-color').value;

    document.getElementById('forms').style.backgroundColor = color;

}