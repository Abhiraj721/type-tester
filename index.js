var index=1;
var back_index=0
var getchange=0
var str=""
var wpm_mul=1
var countdown=0
var words_count=0
var op="."
var correct_words=0
let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
var random=Math.floor(Math.random()*6)

var arr_practiceSets=["Sher Singh breathed one more prayer, of thanks this time, and scrambled down into the river-bed. He stepped into the rive usual, and deeper than it had been. Sher Singh had to go slowly made ready to move with Kunwar on his back once again. HAn Sher Singh had been to this river often. But it was colder than because of slime on the stones. Thank goodness there was a bridge at the second river, he thought. It was a flimsy thing made of bamboo poles, stones, thick grass and river gravel. But it was at least a bridge. As Sher Singh washed up on to the shore, water twinkled in his footprints before sinking into the sand. Coming up out of the river were another set of prints-a tigers and there was glitter in them too. Even as he looked, they dried. He plodded steadily on, and his body panted and sobbed. Towards midnight he heard the second river ahead of him. He heard it from far away, a steady roar of flood. When he came out on the shore, he saw it. A big head of snow must have melted yesterday and here it was. From bank to bank, the river foamed. He looked for the bridge. It was not there. Only a fierce crest of water showed where it lay, submerged. Branches caught against the bridge feathered the wild glissade of water. Underneath, boulders moved. He could hear the river grinding its teeth. Then a tree, churning over and over, crashed against the drowned bridge, which heeled and broke, throwing up its bamboo ribs like a fan. So, now, how to cross? There was not a chance to swim. Even alone, he would be lost."]
arr_practiceSets.push("The steaming cloths did nothing. After a while Sher Singh mother said, 'He must be carried to the hospital at Kalaghat. Then Sher Singh knew that his brother was dying. for all jungle people know that the hospital is the last resort of the doomed.I will run for my father, he cried. lt may be days before you find him. Sher Singh's father was known far and wide as Sher Singh Bahadur the Brave-a famous shikari, with the title Bahadur added to his name like a medal because of all he had done. He lived his life here in Laldwani village, grazing his animals, cultivating his bit of land. But whenever an expedition entered the jungle in search of big game, either to shoot or photograph them, they sent for this man, Bahadur the Brave. All along his skull and back and shoulder went a scar where claws had opened his flesh to the bone when he was pulling a comrade away from a tiger. Now he was away in the jungle with a photographic expedition. All the men of Laldwani village to0, as beaters. In this mud and grass hut, upon the floor of trodden earth, upon the low string charpoy, Kunwar lay crying sometimes, but mostly glazed and silent. Sher Singh looked at his young brother, and saw death in his eyes. There are no men in the village, he said. 'I will take him. ")
arr_practiceSets.push("The First Amendment to the U.S. Constitution guarantees the right to free speech. It guarantees not just the right to make free speech, but the right to hear free speech. The internet is one path to free speech in America. In America, there are debates over the cost of internet services. In China, the government is shutting down internet debate, period. The way the Chinese do this is by closing down internet networks. Censors do not allow Chinese access to YouTube and Google among others. The Chinese practice of closing down the internet is not new. In recent weeks it has become worse. Some say the current climate is the result of the lead-up to a key Chinese Communist Party meeting. The 19th Party Congress takes place this fall. For a long time, smart Chinese internet users have gotten around the censors. Most of them use virtual private networks (VPNs). These are ways of getting around the bans on content. The authorities are targeting these tools. For example, they made Apple pull its VPN apps off the shelves in its stores. Amazon has a cloud computing service. It warned its customers to stop hosting the VPN tools on their sites. Some observers call this a 'cat and mouse game.' Last week the censors showed how much power they had. The censors tried a new way of shutting down websites. They went after the tools that many Chinese use. They cut off the country's internet users from the rest of the world. Internet users continue to try to outwit the country's vast online censorship system. ")
arr_practiceSets.push("I used to go to thrift stores with my friends. We'd take the train into Boston, and go to The Garment District, which is this huge vintage clothing warehouse. Everything is arranged by color, and somehow that makes all of the clothes beautiful. It's kind of like if you went through the wardrobe in the Narnia books, only instead of finding Aslan and the White Witch and horrible Eustace, you found this magic clothing world-instead of talking animals, there were feather boas and wedding dresses and bowling shoes, and paisley shirts and Doc Martens and everything hung up on racks so that first you have black dresses, all together, like the world's largest indoor funeral, and then blue dresses-all the blues you can imagine-and then red dresses and so on. Pink-reds and orangey reds and purple-reds and exit-light reds and candy reds. Sometimes I would close my eyes and Natasha and Natalie and Jake would drag me over to a rack and rub a dress against my hand.Guess what color this is.We had this theory that you could learn how to tell, just by feeling, what color something was. For example, if you're sitting on a lawn, you can tell what color green the grass is, with your eyes closed, depending on how silky-rubbery it feels. With clothing, stretchy velvet stuff always feels red when your eyes are closed, even if it's not red. Natasha was always best at guessing colors, but Natasha is also best at cheating at games and not getting caught. One time we were looking through kid's t-shirts and we found a Muppets t-shirt that had belonged to Natalie in third grade.")
arr_practiceSets.push("Well, we had all these children out planting trees, see, because we figured that... that was part of their education, to see how, you know, the root systems... and also the sense of responsibility, taking care of things, being individually responsible. You know what I mean. And the trees all died. They were orange trees. I don't know why they died, they just died. Something wrong with the soil possibly or maybe the stuff we got from the nursery wasn't the best. We complained about it. So we've got thirty kids there, each kid had his or her own little tree to plant and we've got these thirty dead trees. All these kids looking at these little brown sticks, it was depressing. It wouldn't have been so bad except that just a couple of weeks before the thing with the trees, the snakes all died. But I think that the snakes – well, the reason that the snakes kicked off was that... you remember, the boiler was shut off for four days because of the strike, and that was explicable. It was something you could explain to the kids because of the strike. I mean, none of their parents would let them cross the picket line and they knew there was a strike going on and what it meant. So when things got started up again and we found the snakes they weren't too disturbed. With the herb gardens it was probably a case of overwatering, and at least now they know not to overwater. The children were very conscientious with the herb gardens and some of them probably... you know, slipped them a little extra water when we weren't looking. Or maybe... well, I don't like to think about sabotage, although it did occur to us. ")
arr_practiceSets.push("Being human makes us susceptible to the onset of feelings. The role of these emotions varies. Some of them are useful while others may be harmful. The use of social media for self-expression has reached a point that it makes us feel we can say anything. This begins when we see people expressing anything and everything that come to mind. When we see everyone else voicing their likes and dislikes, their irritations and desires we tend to imitate what they do. And because many engage in this, we think that it is normal and healthy. However, when we get used to unbridled self-expression, we come to believe that all feelings are valid. We become convinced that in real life, we should also act on our emotions and our impulses. Using social media this way erodes our ability to regulate our actions and reactions. To illustrate, when something small irritates us we think that it's okay to feel this way. But isn't it better to foster one's patience and resilience instead of immediately complaining? Or when we develop an attraction to someone despite that person being in a relationship, and because social media has conditioned us that all feelings can be expressed, we tend to think that acting on this attraction is okay. Not all feelings deserve expression. We find ourselves creating our own problems when we let our present emotions control our actions.")
if (isMobileDevice) {
while(true)alert("It is a Desktop Website!! I recommended opening it on Desktop or Laptop only  -Abhiraj")
} else {
}
var arr_com=arr_practiceSets[random]
document.querySelector(".mainpara").innerHTML=arr_com
s="matrix"
var arr=arr_com.split(" ")
var a="a"
$(document).ready(function() {
    $('.mainpara').each(function() {
        var words = $(this).text().split(' ');
        $(this).empty().html(function() {
            for (i = 0; i < words.length; i++) {
                if (i == 0) {
                    $(this).append('<span class="first_span">' + words[i] + '</span>');
                } else {
                    $(this).append(' <span class='+a+'>' + words[i] + '</span>');
                    a=a+"a"
                }
            }
        });
    });
});
function timer(sec){
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec+'<i class="fa-solid fa-stopwatch" style="color: white;"></i>';
        sec--;
        changetimer(-1111)
        if (sec < 0) {
            clearInterval(timer);
            result()
        }
    }, 1000);
}
function changecolor(a){
$(document).ready(function(){

    if (document.querySelector(a).value == 'Message sent !')
    {
        document.querySelector(a).setAttribute("style", "color:green;");
    }
    else
    {
        document.querySelector(a).setAttribute("style", "color:yellow;");
        document.getElementById("input-box").placeholder ="Hey start Typing here"
        op=op+"a"
        helper2(a)
    }
});
}
function reload(){
    location.reload()
}
function changetheme(){
    var back_arr=["background/wallpaperflare.com_wallpaper.jpg","background/wall1.jpg","background/wall1.jpg","background/wall2.jpg","background/wall3.jpg","background/wall4.jpg","background/wall5.jpg","background/wall6.jpg"]
    if(back_index>=back_arr.length)back_index=0
    document.querySelector("body").background=back_arr[back_index]
    back_index++
}
function helper2(b){
    var f=".a"
    while(f!=b){
        document.querySelector(f).setAttribute("style", "color:white;");
        f=f+"a"
    }
}
changecolor(".first_span")
function helper(a,index){
   
    words_count++; 
        changecolor(op)
       index++;
    
    
}
function changetimer(a){
    if(a==15)document.getElementById('safeTimerDisplay').innerHTML="00:15<i class='fa-solid fa-stopwatch' style='color: white;'></i>"
    else if(a==30)document.getElementById('safeTimerDisplay').innerHTML="00:30<i class='fa-solid fa-stopwatch' style='color: white;'></i>"
    else if(a==60)document.getElementById('safeTimerDisplay').innerHTML="1:00<i class='fa-solid fa-stopwatch' style='color: white;'></i>"

    getchange=a
}

document.onkeypress = function(evt) {
    if (evt.shiftKey==1){
    }
    audio=new Audio("keysounds/a.wav")
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    audio.play('keysounds/'+charStr+'.wav')
    if(evt!=" "){
       if(countdown==0){
        if(getchange!=0){
            timer(getchange)
            if(getchange==15){
                wpm_mul=4
            }
            else if(getchange==30)wpm_mul=2
        }
        else timer(60)
       } 
       countdown++
    }

    if (charStr==' ' || charStr=="Space"){
        var curr_input=document.getElementById('input-box').value
        arr.push(document.getElementById('input-box').value)
        str=str+document.getElementById('input-box').value
        if(curr_input!=" ")  document.querySelector(".first_span").style.color="white"
        document.getElementById('input-box').value=null
        if(curr_input!=" "){
        if(str!=" "){
            helper(a,index)
        }
    }
    }
};
function cal_wpm(a,b){
    return a
}

function result(){

        str_arr=str.split(" ")
        for(let i=0;i<str.length;i++){
            if(str_arr[i]==arr[i]){
                correct_words++;
            }
    
        }
     
      wpm= cal_wpm(correct_words,arr.length)
      document.querySelector(".result").innerHTML+="Speed :"+(wpm+1)*wpm_mul+"wpm"
      document.querySelector(".result").innerHTML+="<br>Accuracy :"+parseFloat((correct_words*100)/str_arr.length).toFixed(2)+"%"
      wrong_words=(str_arr.length-correct_words)
     swal({
        title:"Speed :"+(wpm+1)*wpm_mul+"wpm",
        text:"Accuracy :"+parseFloat((correct_words*100)/str_arr.length).toFixed(2)+"%"
      });
      if(wrong_words==0)words_words="0"
      document.querySelector(".result").innerHTML+="<br>Wrong Words: "+wrong_words
    
}

var input = document.getElementById("input-box");
var inputValue = document.getElementById("input-box").value;

input.addEventListener("keypress", function() {
  inputValue = document.getElementById("input-box").value;
});
document.getElementById('input-box').style.height="70px";
document.getElementById('input-box').style.fontSize="14pt";
document.getElementById('input-box').style.width="600px";