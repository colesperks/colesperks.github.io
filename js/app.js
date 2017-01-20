$(document).ready(function()
{
    $("a").hover(function(e)
    {
        var randomClass = getRandomClass();
        $(e.target).attr("class", randomClass + "  white");
    });
});

function getRandomClass()
{
    //Store available css classes
    var classes = new Array("red1", "yellow1", "green1", "blue1", "purple1");

    //Give a random number from 0 to 5
    var randomNumber = Math.floor(Math.random()*5);

    return classes[randomNumber];
}
