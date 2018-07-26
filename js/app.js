/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var taySwift = document.getElementById("name1");
taySwift.innerHTML="Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var djKhaled = document.getElementById("position2");
djKhaled.innerHTML= "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var piTa = document.getElementById("alias3");
piTa.innerHTML="Concatenation";



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
//function myPrince(){

var y= document.getElementsByClassName("profile");
y[0].innerHTML= "They stand in the way of love and we will smoke them all.";


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var bruceLee = document.getElementsByClassName("profile");
bruceLee[1].innerHTML= "Knowing is not enough, we must apply. Willing is not enough, we must do.";


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var samJackson= document.getElementsByClassName("alias");
samJackson[2].innerHTML= "Darius Kincaid";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var findName =document.createElement("div");
findName.id="name7";
findName.innerHTML="Peter Griffin";

var parent = document.getElementById("nameParent");
parent.appendChild(findName);



 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var timDunk = document.createElement("div");
timDunk.id="alias8";
timDunk.innerHTML="Old Man Riverwalk";

var aliParent=document.getElementById("aliasParent");
aliParent.appendChild(timDunk);


//Final Boss
/*9. Create your own profile.*/
var jenHi =document.createElement("div");
jenHi.id="name9";
jenHi.innerHTML="Jenn Hikichi";
var myBlock=document.getElementsByClassName("block3 col-sm-4");
myBlock[2].appendChild(jenHi);

var myPic = document.getElementsByTagName("img");
myPic[7].innerHTML = "https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDYvMTQvMjAvNDgvMzQvMTM3L2NocmFjdGVyX2hlbGxvX2tpdHR5LmpwZyJdXQ/chracter-hello-kitty.jpg?sha=f5e7c272d3fc6e78";


var myPosition = document.createElement("div");
myPosition.id="position9";
myPosition.innerHTML="Housemom";
myBlock[2].appendChild(myPosition);

var myAlias = document.createElement("div");
myAlias.id = "alias9";
myAlias.innerHTML="Coffeeholic";
myBlock[2].appendChild(myAlias);

var myBio = document.createElement("div");
myBio.id="bio";
myBio.innerHTML="The 3 c's Cfamily, coffee, coding";
myBlock[2].appendChild(myBio);

var myPic = document.getElementsByTagName("img");
myPic[7].src = "https://www.facebook.com/photo.php?fbid=10204716757978930&l=d402546555" 