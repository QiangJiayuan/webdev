$(function() {
// code for clicking button .etc

    $("#getJoke").click(
        function() {
            $.get("/jokes",function(data){
              $('#setup').html(data.setup);
              $('#punchline').html(data.punchline);
              //alert(data.setup);
              //alert(data.punchline);
            },"json")
        }
    );
});