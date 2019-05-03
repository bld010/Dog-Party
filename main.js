var userInput = document.getElementById("changing-text");






    <input style="position:absolute; top:80%; left:5%; width:40%;" type="text" id="userInput" />
    <input style="position:absolute; top:50%; left:5%; width:40%;" type="submit" onclick="othername();" />
</form>

function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}